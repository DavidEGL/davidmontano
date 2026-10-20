import * as G from "./action-engine.js";
const cell = 2,
  key = (x, z) => `${x},${z}`;
function free(x, z) {
  return (
    !(x > 5 && x < 15 && z > -24 && z < 6) &&
    Math.hypot(x, z) < 61 &&
    ![...G.obstacles, ...G.zones.map((o) => ({ ...o, r: 2.6 }))].some(
      (o) => Math.hypot(x - o.x, z - o.z) < o.r + 0.65,
    )
  );
}
// Small A* navigation grid: the helper walks the same ground as the child.
export function findRoute(player, target) {
  const sx = Math.round(player.x / cell),
    sz = Math.round(player.z / cell),
    gx = Math.round(target.x / cell),
    gz = Math.round(target.z / cell),
    start = key(sx, sz),
    open = [{ x: sx, z: sz, g: 0, f: 0 }],
    cost = new Map([[start, 0]]),
    from = new Map();
  let end = null;
  for (let limit = 0; open.length && limit < 10000; limit++) {
    open.sort((a, b) => b.f - a.f);
    const p = open.pop(),
      id = key(p.x, p.z);
    if (Math.hypot(p.x - gx, p.z - gz) < 0.75) {
      end = id;
      break;
    }
    for (const [dx, dz] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [1, 1],
      [-1, -1],
      [1, -1],
      [-1, 1],
    ]) {
      const x = p.x + dx,
        z = p.z + dz;
      if (!free(x * cell, z * cell)) continue;
      if (
        dx &&
        dz &&
        (!free(p.x * cell, z * cell) || !free(x * cell, p.z * cell))
      )
        continue;
      if (
        Math.abs(
          G.groundHeight(x * cell, z * cell) -
            G.groundHeight(p.x * cell, p.z * cell),
        ) > 1.2
      )
        continue;
      const next = key(x, z),
        g = p.g + Math.hypot(dx, dz);
      if (g >= (cost.get(next) ?? Infinity)) continue;
      cost.set(next, g);
      from.set(next, id);
      open.push({ x, z, g, f: g + Math.hypot(x - gx, z - gz) });
    }
  }
  if (!end) return [];
  const result = [];
  for (let id = end; id !== start; id = from.get(id)) {
    if (!id) return [];
    const [x, z] = id.split(",").map(Number);
    result.push({ x: x * cell, z: z * cell });
  }
  return result.reverse().concat({ x: target.x, z: target.z });
}
export function objective(s) {
  const z = G.mission(s);
  return z ? { x: z.x, z: z.z + 4, id: z.id } : { x: 0, z: 6, id: "core" };
}
export function beginGuidance(s) {
  return { following: true, route: findRoute(s.player, objective(s)), aim: 0 };
}
export function assistStep(s, guide, input, dt) {
  let control = { ...input };
  const p = s.player;
  let facing = null;
  if (guide.following && s.phase === "explore") {
    while (guide.route.length && G.distance(p, guide.route[0]) < 0.75)
      guide.route.shift();
    if (G.nearby(s)) {
      guide.following = false;
      guide.route = [];
      G.interact(s);
    } else if (guide.route.length) {
      const target = guide.route[0],
        yaw = Math.atan2(-(target.x - p.x), -(target.z - p.z));
      control = {
        yaw,
        forward: 1,
        right: 0,
        sprint: false,
        jump: false,
        fire: false,
      };
      facing = yaw;
    } else guide.following = false;
  }
  if (s.phase === "combat" && control.fire) {
    const e = s.enemies.reduce(
      (best, e) => (!best || G.distance(p, e) < G.distance(p, best) ? e : best),
      null,
    );
    if (e) {
      p.tool = e.kind === "viral" ? 1 : e.kind === "bacteriana" ? 2 : 3;
      const aim = Math.atan2(-(e.x - p.x), -(e.z - p.z));
      if (!input.forward && !input.right) control.yaw = aim;
      else {
        G.shoot(s, aim);
        control.fire = false;
      }
      facing = aim;
      if (G.distance(p, e) < 12) G.shield(s);
    }
  }
  G.step(s, control, dt);
  if (s.phase === "combat" && p.health < 25) {
    p.health = 65;
    p.invulnerable = 2;
    s.events.push({ type: "assistance" });
  }
  return facing;
}

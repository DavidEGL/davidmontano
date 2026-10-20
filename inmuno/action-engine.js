// Fixed-step friendly action simulation. Rendering never decides collisions or mission results.
export const zones = [
  {
    id: "respiratorio",
    name: "Valle de los Pulmones",
    short: "Respiratorio",
    x: -25,
    z: -18,
    color: "#aa91f5",
    tool: 1,
    kind: "viral",
    fact: "Los pulmones intercambian oxígeno y dióxido de carbono.",
    question: "¿Qué nos ayuda a respirar?",
    answers: ["Los pulmones", "El cabello", "Los huesos"],
  },
  {
    id: "circulatorio",
    name: "Ciudad del Corazón",
    short: "Circulatorio",
    x: 25,
    z: -18,
    color: "#f37d96",
    tool: 2,
    kind: "bacteriana",
    fact: "El corazón impulsa sangre que transporta oxígeno y nutrientes.",
    question: "¿Contra qué actúan los antibióticos?",
    answers: ["Las bacterias", "Los virus", "Todos los microbios por igual"],
  },
  {
    id: "nervioso",
    name: "Bosque de las Señales",
    short: "Nervioso",
    x: -25,
    z: 27,
    color: "#76baf0",
    tool: 3,
    kind: "severa",
    fact: "El sistema nervioso recibe información y coordina respuestas.",
    question: "¿Qué coordina el sistema nervioso?",
    answers: [
      "Movimientos y respuestas",
      "El color de las cartas",
      "Solo la respiración",
    ],
  },
  {
    id: "inmunologico",
    name: "Fortaleza de las Defensas",
    short: "Inmunológico",
    x: 25,
    z: 27,
    color: "#52d6b0",
    tool: 3,
    kind: "fungica",
    fact: "Las defensas reconocen amenazas. Muchos microbios son beneficiosos.",
    question: "¿Qué hacen las defensas?",
    answers: [
      "Reconocer y combatir amenazas",
      "Eliminar todo lo que existe",
      "Impedir que aprendamos",
    ],
  },
];
export const tools = {
  1: { name: "Anticuerpo", color: "#bc9bff", kind: "viral", rate: 0.3 },
  2: { name: "Antibiótico", color: "#a9ed6d", kind: "bacteriana", rate: 0.3 },
  3: { name: "Defensa integral", color: "#ffd46d", kind: "all", rate: 0.68 },
};
export const obstacles = [
  { x: -12, z: -5, r: 1.9 },
  { x: 12, z: 9, r: 1.9 },
  { x: -12, z: 27, r: 1.9 },
  { x: 12, z: -28, r: 1.9 },
];
export function groundHeight(x, z) {
  if (Math.abs(x - 10) > 4) {
    const edge = Math.max(0, Math.hypot(x, z) - 39) / 24;
    return (
      edge * edge * (1.2 + Math.sin(x * 0.12) * 0.7 + Math.cos(z * 0.13) * 0.8)
    );
  }
  if (z > -4 && z < 5) return (5 - z) / 3;
  if (z <= -4 && z >= -14) return 3;
  if (z < -14 && z > -23) return (z + 23) / 3;
  return 0;
}
export const distance = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
export function newRun(level = 2, assisted = false) {
  return {
    version: 2,
    assisted,
    level,
    phase: "explore",
    time: 0,
    seed: 1234,
    player: {
      x: 0,
      z: 15,
      y: 0,
      vy: 0,
      health: 100,
      shield: 0,
      tool: 1,
      cooldown: 0,
      shieldCooldown: 0,
      buildCooldown: 0,
      invulnerable: 0,
    },
    completed: [],
    active: null,
    enemies: [],
    shots: [],
    hostile: [],
    pickups: [
      { id: 900, x: -5, z: 8, life: 300 },
      { id: 901, x: -12, z: 1, life: 300 },
      { id: 902, x: -20, z: -8, life: 300 },
      { id: 903, x: 15, z: 1, life: 300 },
      { id: 904, x: 18, z: 17, life: 300 },
      { id: 905, x: -16, z: 22, life: 300 },
    ],
    barriers: [],
    particles: [],
    score: 0,
    kills: 0,
    combo: 0,
    nextID: 1,
    events: [],
    quizOrder: [],
    bossStarted: false,
  };
}
function random(s) {
  s.seed = (Math.imul(s.seed, 1664525) + 1013904223) >>> 0;
  return s.seed / 4294967296;
}
function event(s, type, detail = {}) {
  s.events.push({ type, ...detail });
}
export function mission(s) {
  return zones.find((z) => !s.completed.includes(z.id)) || null;
}
export function nearby(s) {
  const z = mission(s);
  if (z && distance(s.player, z) < 5)
    return { id: z.id, label: `Activar ${z.short}` };
  if (!z && distance(s.player, { x: 0, z: 2 }) < 6)
    return { id: "core", label: "Entrar al núcleo" };
  return null;
}
export function interact(s) {
  if (s.phase !== "explore") return false;
  const target = nearby(s);
  if (!target) return false;
  if (target.id === "core") {
    s.bossStarted = true;
    s.phase = "combat";
    s.active = "core";
    s.player.x = 0;
    s.player.z = -31;
    s.player.health = 100;
    spawn(s, "boss", 0, -45, s.assisted ? 6 + s.level * 2 : 10 + s.level * 4);
    for (let i = 0; i < (s.assisted ? 1 : s.level + 1); i++)
      spawn(s, i % 2 ? "bacteriana" : "viral", (i - 1) * 7, -42, 2);
    event(s, "boss");
    return true;
  }
  const z = zones.find((z) => z.id === target.id);
  s.active = z.id;
  s.phase = "combat";
  s.player.tool = z.tool;
  const count = s.assisted ? 2 + s.level : 2 + s.level * 2;
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    spawn(
      s,
      z.kind,
      z.x + Math.cos(a) * 8,
      z.z + Math.sin(a) * 8,
      s.level === 1 ? 1 : 2,
    );
  }
  event(s, "wave", { zone: z.id });
  return true;
}
function spawn(s, kind, x, z, hp) {
  s.enemies.push({
    id: s.nextID++,
    kind,
    x,
    z,
    hp,
    maxHP: hp,
    cooldown: 1 + random(s),
    phase: random(s) * 6,
    hit: 0,
  });
}
export function shield(s) {
  const p = s.player;
  if (s.phase === "combat" && p.shieldCooldown <= 0) {
    p.shield = 3.5;
    p.shieldCooldown = 9;
    event(s, "shield");
    return true;
  }
  return false;
}
export function build(s, yaw) {
  const p = s.player;
  if (!["combat", "explore"].includes(s.phase) || p.buildCooldown > 0)
    return false;
  p.buildCooldown = 10;
  s.barriers.push({
    id: s.nextID++,
    x: p.x - Math.sin(yaw) * 3,
    z: p.z - Math.cos(yaw) * 3,
    yaw,
    life: 12,
  });
  event(s, "build");
  return true;
}
export function shoot(s, yaw) {
  const p = s.player;
  if (!["combat", "explore"].includes(s.phase) || p.cooldown > 1e-6)
    return false;
  const weapon = tools[p.tool];
  p.cooldown = weapon.rate;
  let dx = -Math.sin(yaw),
    dz = -Math.cos(yaw),
    best = null,
    bestD = 32;
  const cone = s.level === 1 ? 0.15 : 0.65;
  for (const e of s.enemies) {
    const d = distance(p, e),
      dot = ((e.x - p.x) * dx + (e.z - p.z) * dz) / (d || 1);
    if (d < bestD && dot > cone) {
      best = e;
      bestD = d;
    }
  }
  if (best) {
    dx = (best.x - p.x) / bestD;
    dz = (best.z - p.z) / bestD;
  }
  s.shots.push({
    id: s.nextID++,
    x: p.x + dx,
    z: p.z + dz,
    y: 1.2,
    dx,
    dz,
    tool: p.tool,
    life: 1.3,
  });
  event(s, "shoot");
  return true;
}
function hitPlayer(s, damage) {
  const p = s.player;
  if (p.invulnerable > 0) return;
  if (p.shield > 0) {
    event(s, "blocked");
    return;
  }
  p.health = Math.max(0, p.health - damage);
  p.invulnerable = 0.6;
  s.combo = 0;
  event(s, "hurt");
  if (!p.health) {
    s.phase = "respawn";
    event(s, "respawn");
  }
}
function segmentHit(a, b, e, r) {
  const dx = b.x - a.x,
    dz = b.z - a.z,
    t = Math.max(
      0,
      Math.min(
        1,
        ((e.x - a.x) * dx + (e.z - a.z) * dz) / (dx * dx + dz * dz || 1),
      ),
    );
  return Math.hypot(a.x + dx * t - e.x, a.z + dz * t - e.z) < r;
}
export function step(s, input, dt) {
  dt = Math.min(0.05, Math.max(0, dt));
  if (!["combat", "explore"].includes(s.phase)) return;
  s.time += dt;
  const p = s.player;
  for (const k of [
    "cooldown",
    "shield",
    "shieldCooldown",
    "buildCooldown",
    "invulnerable",
  ])
    p[k] = Math.max(0, p[k] - dt);
  let fx = input.right || 0,
    fz = input.forward || 0,
    len = Math.hypot(fx, fz);
  if (len > 1) {
    fx /= len;
    fz /= len;
  }
  const speed = input.sprint ? 10 : 6.4,
    yaw = input.yaw || 0;
  const moveX = Math.cos(yaw) * fx - Math.sin(yaw) * fz,
    moveZ = -Math.sin(yaw) * fx - Math.cos(yaw) * fz;
  const oldX = p.x,
    oldZ = p.z,
    oldGround = groundHeight(p.x, p.z);
  p.x += moveX * speed * dt;
  p.z += moveZ * speed * dt;
  if (groundHeight(p.x, p.z) - oldGround > 0.5 + p.y) {
    p.x = oldX;
    p.z = oldZ;
  }
  for (const o of [
    ...obstacles,
    ...zones.map((z) => ({ x: z.x, z: z.z, r: 2.6 })),
  ]) {
    const d = distance(p, o);
    if (d < o.r + 0.4) {
      p.x = o.x + ((p.x - o.x) / (d || 1)) * (o.r + 0.4);
      p.z = o.z + ((p.z - o.z) / (d || 1)) * (o.r + 0.4);
    }
  }
  const r = Math.hypot(p.x, p.z);
  if (r > 63) {
    p.x *= 63 / r;
    p.z *= 63 / r;
  }
  if (input.jump && p.y <= 0.001) {
    p.vy = 8;
    event(s, "jump");
  }
  p.vy -= 22 * dt;
  p.y = Math.max(0, p.y + p.vy * dt);
  if (p.y === 0) p.vy = 0;
  if (input.fire) shoot(s, yaw);
  for (const e of s.enemies) {
    e.cooldown -= dt;
    e.hit = Math.max(0, e.hit - dt);
    const d = distance(p, e),
      dx = (p.x - e.x) / (d || 1),
      dz = (p.z - e.z) / (d || 1),
      blocked = [...s.barriers, ...obstacles].some((b) => distance(b, e) < 3.2);
    if (!blocked && d > 2.2) {
      const speed =
        (e.kind === "boss"
          ? 1.25
          : e.kind === "fungica"
            ? 1.5
            : e.kind === "bacteriana"
              ? 3.3
              : 2.35) * (s.level === 1 ? 0.65 : s.level === 3 ? 1.15 : 1);
      e.x += dx * speed * dt;
      e.z += dz * speed * dt;
    }
    if (d < 2.4 && e.cooldown <= 0) {
      if (p.y < 1.2) hitPlayer(s, s.level === 1 ? 6 : 10);
      e.cooldown = 1.3;
    }
    if (d < 32 && e.cooldown <= 0 && e.kind !== "bacteriana") {
      e.cooldown = e.kind === "boss" ? 1.3 : 3.1;
      const spread = e.kind === "boss" ? [-0.24, 0, 0.24] : [0];
      for (const a of spread) {
        const angle = Math.atan2(dx, dz) + a;
        s.hostile.push({
          id: s.nextID++,
          x: e.x,
          z: e.z,
          dx: Math.sin(angle),
          dz: Math.cos(angle),
          life: 4,
        });
      }
    }
  }
  for (const shot of s.shots) {
    const old = { x: shot.x, z: shot.z };
    shot.x += shot.dx * 34 * dt;
    shot.z += shot.dz * 34 * dt;
    shot.life -= dt;
    for (const e of s.enemies) {
      if (e.hp <= 0 || !segmentHit(old, shot, e, e.kind === "boss" ? 2.2 : 1.1))
        continue;
      shot.life = 0;
      const correct =
        tools[shot.tool].kind === "all" ||
        tools[shot.tool].kind === e.kind ||
        e.kind === "boss";
      if (correct) {
        e.hp--;
        e.hit = 0.16;
        event(s, "hit", { x: e.x, z: e.z });
        if (e.hp <= 0) {
          s.kills++;
          s.combo++;
          s.score += 100 + Math.min(5, s.combo) * 10;
          s.pickups.push({ id: s.nextID++, x: e.x, z: e.z, life: 25 });
          event(s, "kill", { kind: e.kind, x: e.x, z: e.z });
        }
      } else event(s, "wrongTool", { kind: e.kind });
      break;
    }
  }
  s.enemies = s.enemies.filter((e) => e.hp > 0);
  s.shots = s.shots.filter((b) => b.life > 0);
  for (const b of s.hostile) {
    const old = { x: b.x, z: b.z };
    b.x += b.dx * 11 * dt;
    b.z += b.dz * 11 * dt;
    b.life -= dt;
    if ([...s.barriers, ...obstacles].some((w) => segmentHit(old, b, w, 2.7)))
      b.life = 0;
    if (segmentHit(old, b, p, 0.8) && p.y < 1.3) {
      hitPlayer(s, s.level === 1 ? 5 : 9);
      b.life = 0;
    }
  }
  s.hostile = s.hostile.filter((b) => b.life > 0);
  for (const b of s.barriers) b.life -= dt;
  s.barriers = s.barriers.filter((b) => b.life > 0);
  for (const pickup of s.pickups) {
    pickup.life -= dt;
    if (distance(p, pickup) < 2) {
      p.health = Math.min(100, p.health + 8);
      s.score += 25;
      pickup.life = 0;
      event(s, "pickup");
    }
  }
  s.pickups = s.pickups.filter((b) => b.life > 0);
  if (s.phase === "combat" && !s.enemies.length) {
    s.hostile = [];
    s.shots = [];
    s.phase = s.active === "core" ? "victory" : "quiz";
    s.quizOrder = s.level === 1 ? [0, 1] : [0, 1, 2];
    for (let i = s.quizOrder.length - 1; i > 0; i--) {
      const j = Math.floor(random(s) * (i + 1));
      [s.quizOrder[i], s.quizOrder[j]] = [s.quizOrder[j], s.quizOrder[i]];
    }
    event(s, s.phase);
  }
}
export function answer(s, index) {
  if (s.phase !== "quiz") return false;
  if (index !== 0) {
    event(s, "answerWrong");
    return false;
  }
  s.completed.push(s.active);
  s.active = null;
  s.phase = "explore";
  s.player.health = 100;
  s.player.shield = 0;
  s.score += 500;
  event(s, "restored");
  return true;
}
export function retry(s) {
  if (s.phase !== "respawn") return;
  const z = zones.find((z) => z.id === s.active);
  s.player.x = z?.x || 0;
  s.player.z = (z?.z || 2) + 4;
  s.player.y = 0;
  s.player.vy = 0;
  s.player.health = 100;
  s.enemies = [];
  s.hostile = [];
  s.shots = [];
  s.barriers = [];
  s.active = null;
  s.phase = "explore";
}
export function checkpoint(s) {
  return {
    version: 2,
    mode: "action",
    assisted: !!s.assisted,
    level: s.level,
    completed: [...s.completed],
    score: s.score,
    kills: s.kills,
    won: s.phase === "victory",
  };
}
export function restore(value) {
  if (
    !value ||
    value.version !== 2 ||
    value.mode !== "action" ||
    ![1, 2, 3].includes(value.level) ||
    !Array.isArray(value.completed) ||
    value.completed.length > 4 ||
    !value.completed.every((id, i) => zones[i]?.id === id) ||
    !Number.isInteger(value.score) ||
    value.score < 0 ||
    value.score > 1e7 ||
    !Number.isInteger(value.kills) ||
    value.kills < 0 ||
    value.kills > 1e5 ||
    typeof value.won !== "boolean" ||
    (value.won && value.completed.length !== 4)
  )
    return null;
  const s = newRun(value.level, value.assisted === true);
  s.completed = [...value.completed];
  s.score = value.score;
  s.kills = value.kills;
  if (value.won) s.phase = "victory";
  return s;
}

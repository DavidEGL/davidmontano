import test from "node:test";
import assert from "node:assert/strict";
import * as G from "../anatomy-engine.js";
function advance(s, seconds, input = {}) {
  for (let i = 0; i < Math.ceil(seconds / 0.025); i++) G.tick(s, input, 0.025);
}
function at(s, node) {
  s.player.x = node.x;
  s.player.z = node.z + 3;
}
function clear(s, node) {
  at(s, node);
  assert.equal(G.interact(s), true);
  s.player.tool = G.regions[s.region].tool;
  let guard = 0;
  while (s.enemies.length && s.phase === "playing" && guard++ < 400) {
    const e = s.enemies[0];
    s.player.x = e.x;
    s.player.z = e.z + 4;
    const yaw = 0;
    G.shoot(s, yaw);
    advance(s, 0.45, { yaw });
    s.player.energy = 100;
  }
  assert.equal(
    s.enemies.length,
    0,
    "Player uses matching tool, points and clears enemies",
  );
  advance(s, 0.1);
  at(s, node);
  advance(s, 3, { interact: true });
  assert.equal(node.status, "healthy");
}
test("An idle player never walks, shoots, scans, changes tool, shields or heals", () => {
  const s = G.createRun();
  s.player.health = 44;
  const before = { x: s.player.x, z: s.player.z };
  advance(s, 90);
  assert.equal(s.player.x, before.x);
  assert.equal(s.player.z, before.z);
  assert.equal(s.player.health, 44);
  assert.equal(s.player.tool, 1);
  assert.equal(s.shotsFired, 0);
  assert.equal(s.player.shield, 0);
  assert.ok(s.nodes.every((n) => n.status === "unknown"));
});
test("WASD movement is camera relative, normalized, bounded and collides with cells", () => {
  const a = G.createRun(),
    b = G.createRun();
  advance(a, 1, { forward: 1 });
  advance(b, 1, { forward: 1, right: 1 });
  assert.ok(
    Math.abs(
      Math.hypot(a.player.x, a.player.z - 23) -
        Math.hypot(b.player.x, b.player.z - 23),
    ) < 0.01,
  );
  advance(a, 30, { forward: -1 });
  assert.ok(Math.hypot(a.player.x, a.player.z) <= 29.001);
  a.player.x = -4;
  a.player.z = 6;
  advance(a, 1, { forward: 1 });
  assert.ok(G.distance(a.player, G.cover[0]) >= 2.799);
});
test("Scanning is explicit and never chooses the correct weapon for the player", () => {
  const s = G.createRun(2, 1),
    n = s.nodes[0];
  at(s, n);
  advance(s, 2);
  assert.equal(n.status, "unknown");
  s.player.tool = 1;
  assert.equal(G.interact(s), true);
  assert.equal(s.player.tool, 1);
  assert.equal(n.status, "infected");
  assert.equal(s.enemies.length, 3);
});
test("Antibiotics cannot kill viruses; aiming away never auto-locks a target", () => {
  const s = G.createRun(),
    n = s.nodes[0];
  at(s, n);
  G.interact(s);
  const e = s.enemies[0];
  s.enemies = [e];
  s.player.x = e.x;
  s.player.z = e.z + 5;
  s.player.tool = 2;
  G.shoot(s, 0);
  advance(s, 0.25);
  assert.equal(e.hp, 2);
  assert.ok(s.wrongShots > 0);
  s.player.cooldown = 0;
  s.player.tool = 1;
  G.shoot(s, Math.PI);
  advance(s, 0.25);
  assert.equal(e.hp, 2);
});
test("Fagocitosis is not an unlimited universal weapon", () => {
  const s = G.createRun(1, 3);
  at(s, s.nodes[0]);
  G.interact(s);
  s.enemies = s.enemies.slice(0, 1);
  const e = s.enemies[0];
  s.player.x = e.x;
  s.player.z = e.z + 15;
  s.player.tool = 3;
  G.shoot(s, 0);
  advance(s, 0.35);
  assert.equal(e.hp, 2);
});
test("Shield costs energy and requires a deliberate action; cooldown prevents spam", () => {
  const s = G.createRun();
  assert.equal(G.shield(s), true);
  assert.equal(s.player.energy, 80);
  assert.equal(G.shield(s), false);
  advance(s, 10);
  assert.equal(s.player.shield, 0);
  assert.equal(G.shield(s), true);
});
test("Defeat is possible and stops mission simulation", () => {
  const s = G.createRun(3);
  at(s, s.nodes[0]);
  G.interact(s);
  s.player.health = 1;
  for (const e of s.enemies) {
    e.x = s.player.x;
    e.z = s.player.z;
    e.cooldown = 0;
  }
  advance(s, 0.1);
  assert.equal(s.phase, "defeated");
  const time = s.time;
  advance(s, 10);
  assert.equal(s.time, time);
});
test("Cleared tissue needs a held repair action; walking away interrupts it", () => {
  const s = G.createRun(),
    n = s.nodes[0];
  at(s, n);
  G.interact(s);
  s.enemies = [];
  advance(s, 0.1);
  assert.equal(n.status, "cleared");
  advance(s, 10);
  assert.equal(n.status, "cleared");
  advance(s, 0.6, { interact: true });
  const progress = n.progress;
  s.player.z += 10;
  advance(s, 1, { interact: true });
  assert.ok(n.progress < progress);
  assert.equal(s.repairs, 0);
});
test("Neural connections enforce dendrite → soma → axon sequence", () => {
  const s = G.createRun(1, 2);
  at(s, s.nodes[1]);
  assert.equal(G.interact(s), false);
  assert.ok(s.events.some((e) => e.type === "sequence"));
  at(s, s.nodes[0]);
  assert.equal(G.interact(s), true);
});
test("Fungal foci produce spores while unresolved, with a population cap", () => {
  const s = G.createRun(1, 3);
  at(s, s.nodes[0]);
  G.interact(s);
  s.player.x = 0;
  s.player.z = 28;
  advance(s, 35);
  assert.ok(s.events.some((e) => e.type === "spore"));
  assert.ok(s.enemies.length <= 7);
});
for (const level of [1, 2, 3])
  test("Full anatomical campaign at primary level " + level, () => {
    let completed = [];
    for (let region = 0; region < 4; region++) {
      const s = G.createRun(level, region, completed);
      for (const n of s.nodes) clear(s, n);
      assert.equal(s.phase, "complete");
      assert.equal(s.repairs, 3);
      assert.ok(s.shotsFired > 0);
      completed = s.completed;
      const saved = G.restore(G.checkpoint(s));
      assert.ok(saved);
      assert.deepEqual(saved.completed, completed);
    }
    assert.deepEqual(completed, [0, 1, 2, 3]);
  });
test("Save validation rejects skipped systems, incompatible saves and invalid levels", () => {
  const valid = G.checkpoint(G.createRun());
  assert.ok(G.restore(valid));
  for (const bad of [
    { ...valid, level: 9 },
    { ...valid, version: 2 },
    { ...valid, completed: [0, 2] },
    { ...valid, completed: [0, 0] },
    { ...valid, region: 8 },
  ])
    assert.equal(G.restore(bad), null);
});

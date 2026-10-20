import test from "node:test";
import assert from "node:assert/strict";
import * as G from "../action-engine.js";
import {
  findRoute,
  beginGuidance,
  assistStep,
  objective,
} from "../guidance.js";
test("Guía encuentra caminos físicos por las cuatro zonas y evita obstáculos", () => {
  const s = G.newRun(1, true);
  for (const z of G.zones) {
    const route = findRoute(s.player, { x: z.x, z: z.z + 4 });
    assert.ok(route.length > 0);
    for (const p of route)
      for (const o of G.obstacles) assert.ok(G.distance(p, o) > o.r + 0.6);
    s.player.x = z.x;
    s.player.z = z.z + 4;
  }
});
for (const level of [1, 2, 3])
  test(`Toda la aventura guiada nivel ${level} se completa con Guíame y Proteger`, () => {
    const s = G.newRun(level, true);
    for (let mission = 0; mission < 5; mission++) {
      const guide = beginGuidance(s);
      let combatFrames = 0;
      for (
        let frame = 0;
        frame < 50000 && !["quiz", "victory"].includes(s.phase);
        frame++
      ) {
        if (s.phase === "combat") combatFrames++;
        assistStep(s, guide, { yaw: 0, fire: s.phase === "combat" }, 1 / 60);
        s.events = [];
      }
      assert.ok(combatFrames > 0);
      assert.notEqual(s.phase, "respawn");
      if (mission < 4) {
        assert.equal(s.phase, "quiz");
        assert.ok(G.answer(s, 0));
      } else assert.equal(s.phase, "victory");
    }
    assert.equal(s.completed.length, 4);
    assert.ok(G.restore(G.checkpoint(s)).assisted);
  });
test("La ayuda elige antibiótico para bacteria y anticuerpo para virus sin cambiar a mano", () => {
  const s = G.newRun(1, true);
  s.phase = "combat";
  s.enemies = [
    {
      id: 5,
      kind: "bacteriana",
      x: 0,
      z: 11,
      hp: 3,
      maxHP: 3,
      cooldown: 10,
      phase: 0,
      hit: 0,
    },
  ];
  assistStep(
    s,
    { following: false, route: [] },
    { yaw: 0, fire: true },
    1 / 60,
  );
  assert.equal(s.player.tool, 2);
  s.enemies[0].kind = "viral";
  s.player.cooldown = 0;
  assistStep(
    s,
    { following: false, route: [] },
    { yaw: 0, fire: true },
    1 / 60,
  );
  assert.equal(s.player.tool, 1);
});

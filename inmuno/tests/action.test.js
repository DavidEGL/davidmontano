import test from "node:test";
import assert from "node:assert/strict";
import * as G from "../action-engine.js";
const tick = (s, input = {}, seconds = 1) => {
  for (let t = 0; t < seconds; t += 1 / 60) G.step(s, input, 1 / 60);
};
function wave(level = 1) {
  const s = G.newRun(level);
  s.player.x = -25;
  s.player.z = -14;
  assert.ok(G.interact(s));
  s.events = [];
  return s;
}
test("Movimiento relativo a cámara, sprint, salto y límites del mapa", () => {
  const s = G.newRun();
  tick(s, { forward: 1, yaw: 0 }, 1);
  assert.ok(s.player.z < 9);
  const before = s.player.z;
  tick(s, { forward: 1, yaw: 0, sprint: true }, 1);
  assert.ok(before - s.player.z > 9);
  G.step(s, { jump: true }, 1 / 60);
  assert.ok(s.player.y > 0);
  tick(s, {}, 2);
  assert.equal(s.player.y, 0);
  tick(s, { forward: 1, sprint: true }, 20);
  assert.ok(Math.hypot(s.player.x, s.player.z) <= 63.001);
});
test("Rampa tiene altura continua y el jugador no atraviesa los órganos", () => {
  assert.equal(G.groundHeight(10, -9), 3);
  assert.equal(G.groundHeight(10, 5), 0);
  assert.equal(G.groundHeight(10, -23), 0);
  const s = G.newRun();
  s.player.x = -25;
  s.player.z = -14;
  tick(s, { forward: 1 }, 1);
  assert.ok(G.distance(s.player, G.zones[0]) >= 3 - 0.001);
});
test("Interacción requiere proximidad; cada nivel cambia la oleada", () => {
  for (const level of [1, 2, 3]) {
    const s = G.newRun(level);
    assert.equal(G.interact(s), false);
    s.player.x = -25;
    s.player.z = -14;
    assert.equal(G.interact(s), true);
    assert.equal(s.enemies.length, 2 + level * 2);
    assert.equal(s.player.tool, 1);
    assert.equal(G.interact(s), false);
  }
});
test("Antibiótico no elimina virus; anticuerpo sí, y los disparos tienen recarga", () => {
  const s = wave();
  s.enemies = [
    {
      id: 50,
      kind: "viral",
      x: -25,
      z: -20,
      hp: 1,
      maxHP: 1,
      cooldown: 100,
      phase: 0,
      hit: 0,
    },
  ];
  s.player.tool = 2;
  assert.ok(G.shoot(s, 0));
  assert.equal(G.shoot(s, 0), false);
  tick(s, {}, 0.3);
  assert.equal(s.enemies.length, 1);
  assert.ok(s.events.some((e) => e.type === "wrongTool"));
  s.player.tool = 1;
  G.shoot(s, 0);
  tick(s, {}, 0.3);
  assert.equal(s.enemies.length, 0);
  assert.equal(s.phase, "quiz");
});
test("Escudo bloquea impactos y barreras interceptan proyectiles", () => {
  const s = wave();
  s.enemies = [
    {
      id: 50,
      kind: "bacteriana",
      x: -25,
      z: -15,
      hp: 99,
      maxHP: 99,
      cooldown: 0,
      phase: 0,
      hit: 0,
    },
  ];
  assert.ok(G.shield(s));
  assert.equal(G.shield(s), false);
  tick(s, {}, 0.1);
  assert.equal(s.player.health, 100);
  assert.ok(G.build(s, 0));
  assert.equal(G.build(s, 0), false);
  s.hostile = [{ id: 51, x: -25, z: -19, dx: 0, dz: 1, life: 4 }];
  tick(s, {}, 0.8);
  assert.equal(s.hostile.length, 0);
});
test("Perder salud permite reintentar sin perder sistemas recuperados", () => {
  const s = wave();
  s.completed = ["circulatorio"];
  s.player.health = 1;
  s.enemies = [
    {
      id: 50,
      kind: "bacteriana",
      x: -25,
      z: -15,
      hp: 99,
      maxHP: 99,
      cooldown: 0,
      phase: 0,
      hit: 0,
    },
  ];
  tick(s, {}, 0.1);
  assert.equal(s.phase, "respawn");
  G.retry(s);
  assert.equal(s.player.health, 100);
  assert.equal(s.phase, "explore");
  assert.deepEqual(s.completed, ["circulatorio"]);
});
test("Preguntas permiten reintento y restauran salud y progreso", () => {
  const s = wave();
  s.phase = "quiz";
  s.player.health = 12;
  assert.equal(G.answer(s, 1), false);
  assert.equal(s.phase, "quiz");
  assert.equal(G.answer(s, 0), true);
  assert.equal(s.phase, "explore");
  assert.equal(s.player.health, 100);
  assert.equal(s.score, 500);
  assert.deepEqual(s.completed, ["respiratorio"]);
});
test("Guardado por región rechaza archivos ajenos o incoherentes", () => {
  const s = G.newRun();
  assert.ok(G.restore(G.checkpoint(s)));
  assert.equal(
    G.restore({ ...G.checkpoint(s), completed: ["circulatorio"] }),
    null,
  );
  assert.equal(G.restore({ ...G.checkpoint(s), won: true }), null);
  assert.equal(G.restore({ version: 1 }), null);
});
for (const level of [1, 2, 3])
  test(`Partida de acción completa nivel ${level}: cuatro oleadas, preguntas y núcleo`, () => {
    const s = G.newRun(level);
    let frames = 0;
    function battle() {
      for (let t = 0; t < 22000 && s.phase === "combat"; t++) {
        const p = s.player,
          enemy = s.enemies.reduce(
            (a, b) => (!a || G.distance(p, b) < G.distance(p, a) ? b : a),
            null,
          );
        p.tool =
          enemy.kind === "viral" ? 1 : enemy.kind === "bacteriana" ? 2 : 3;
        const yaw = Math.atan2(-(enemy.x - p.x), -(enemy.z - p.z));
        G.shield(s);
        const near = G.distance(p, enemy) < 10;
        G.step(
          s,
          { yaw, fire: true, right: near ? 0.9 : 0, forward: near ? -0.5 : 0 },
          1 / 60,
        );
        s.events = [];
        frames++;
      }
      assert.notEqual(
        s.phase,
        "respawn",
        `Nivel ${level}: la estrategia móvil debe sobrevivir`,
      );
    }
    for (const z of G.zones) {
      s.player.x = z.x;
      s.player.z = z.z + 4;
      assert.ok(G.interact(s));
      battle();
      assert.equal(s.phase, "quiz");
      assert.ok(G.answer(s, 0));
    }
    s.player.x = 0;
    s.player.z = 6;
    assert.ok(G.interact(s));
    assert.ok(s.enemies.some((e) => e.kind === "boss"));
    battle();
    assert.equal(s.phase, "victory");
    assert.equal(s.completed.length, 4);
    assert.equal(s.kills, (2 + level * 2) * 4 + level + 2);
    assert.ok(G.restore(G.checkpoint(s)));
    assert.ok(frames > 500);
  });

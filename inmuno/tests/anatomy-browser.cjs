const assert = require("node:assert/strict"),
  fs = require("node:fs");
let pw;
try {
  pw = require("playwright");
} catch {
  pw = require("/opt/codex/runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
}
(async () => {
  const b = await pw.chromium.launch({
    executablePath: "/usr/bin/chromium",
    args: ["--no-sandbox", "--enable-unsafe-swiftshader"],
  });
  const errors = [];
  try {
    const p = await b.newPage({ viewport: { width: 960, height: 640 } });
    p.on("pageerror", (e) => errors.push(e.message));
    await p.goto("http://127.0.0.1:8090/?qa=1");
    await p.locator("#start-game").click();
    for (let i = 0; i < 3; i++) await p.locator("#lesson-next").click();
    await p.waitForTimeout(500);
    let initial = await p.evaluate(() => JSON.parse(render_game_to_text()));
    assert.equal(initial.paused, false);
    assert.equal(initial.player.z, 23);
    await p.waitForTimeout(500);
    let idle = await p.evaluate(() => JSON.parse(render_game_to_text()));
    assert.equal(idle.player.z, 23);
    assert.ok(idle.nodes.every((n) => n.status === "unknown"));
    console.log("PASS no automatic movement, scans or attacks");
    await p.keyboard.down("KeyW");
    await p.waitForTimeout(500);
    await p.keyboard.up("KeyW");
    assert.ok(
      (await p.evaluate(() => JSON.parse(render_game_to_text()))).player.z < 23,
    );
    console.log("PASS real keyboard movement");
    for (let region = 0; region < 4; region++) {
      for (let node = 0; node < 3; node++) {
        await p.evaluate((n) => {
          const s = __inmunoQA.get(),
            o = s.nodes[n];
          __inmunoQA.pose(o.x, o.z + 3, 0);
          __inmunoQA.advance(25, { interact: true });
        }, node);
        await p.locator(`[data-tool="${region === 0 ? 2 : 1}"]`).click();
        let pre = await p.evaluate(() => __inmunoQA.get().player.tool);
        assert.equal(
          pre,
          region === 0 ? 2 : 1,
          "scanning did not select correct defense",
        );
        await p.locator(`[data-tool="${region < 2 ? region + 1 : 3}"]`).click();
        let count = 0;
        while ((await p.evaluate(() => __inmunoQA.get().enemies.length)) > 0) {
          assert.ok(count++ < 40);
          await p.evaluate(() => {
            const e = __inmunoQA.get().enemies[0];
            __inmunoQA.pose(e.x, e.z + 4, 0);
            __inmunoQA.advance(480, { fire: true });
          });
        }
        await p.evaluate((n) => {
          const o = __inmunoQA.get().nodes[n];
          __inmunoQA.pose(o.x, o.z + 3, 0);
          __inmunoQA.advance(2200, { interact: true });
        }, node);
      }
      await p.locator("#next-region").waitFor();
      assert.ok(
        (await p.locator("#dialog-title").innerText()).includes(
          region === 3 ? "equilibrio" : "misión cumplida",
        ),
      );
      let saved = await p.evaluate(() =>
        JSON.parse(localStorage.getItem("inmuno-interior-v4")),
      );
      assert.equal(saved.completed.length, region + 1);
      console.log(
        "PASS region " +
          region +
          ": manual scan, weapon, aim, clear and held repair",
      );
      if (region < 3) {
        await p.locator("#next-region").click();
        await p.locator("#brief-play").click();
      }
    }
    assert.deepEqual(errors, []);
    await p.close();
    const ctx = await b.newContext({
      viewport: { width: 390, height: 844 },
      isMobile: true,
      hasTouch: true,
    });
    const m = await ctx.newPage();
    m.on("pageerror", (e) => errors.push(e.message));
    await m.goto("http://127.0.0.1:8090");
    await m.locator("#start-game").click();
    for (let i = 0; i < 3; i++) await m.locator("#lesson-next").click();
    assert.ok(
      await m.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    );
    assert.ok(await m.locator("#joystick").isVisible());
    assert.ok(await m.locator("#equipment").isVisible());
    assert.ok(await m.locator("#touch-fire").isVisible());
    await m.screenshot({ path: "docs/interior-movil.png" });
    await ctx.close();
    assert.deepEqual(errors, []);
    console.log(
      "PASS mobile layout, manual tools, joystick and no JavaScript errors",
    );
  } finally {
    await b.close();
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

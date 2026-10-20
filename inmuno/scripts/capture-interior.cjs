const fs = require("node:fs"),
  {
    chromium,
  } = require("/opt/codex/runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
(async () => {
  const b = await chromium.launch({
    executablePath: "/usr/bin/chromium",
    args: ["--no-sandbox", "--enable-unsafe-swiftshader"],
  });
  try {
    const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
    await p.goto("http://127.0.0.1:8090/?qa=1");
    await p.locator("#start-game").click();
    for (let i = 0; i < 3; i++) await p.locator("#lesson-next").click();
    await p.waitForTimeout(800);
    await p.screenshot({ path: "trailer/assets/paso-0.png" });
    await p.screenshot({ path: "docs/expedicion-interior.png" });
    await p.evaluate(() => __inmunoQA.pose(-13, 3.8, 0));
    await p.waitForTimeout(700);
    await p.keyboard.press("KeyE", { delay: 200 });
    await p.waitForTimeout(500);
    await p.screenshot({ path: "trailer/assets/paso-1.png" });
    await p.evaluate(() => {
      const e = __inmunoQA.get().enemies[0];
      __inmunoQA.pose(e.x, e.z + 6, 0);
    });
    await p.locator('[data-tool="1"]').click();
    await p.keyboard.down("Space");
    await p.waitForTimeout(700);
    await p.keyboard.up("Space");
    await p.screenshot({ path: "trailer/assets/paso-2.png" });
    let c = 0;
    while (
      (await p.evaluate(() => __inmunoQA.get().enemies.length)) > 0 &&
      c++ < 40
    )
      await p.evaluate(() => {
        const e = __inmunoQA.get().enemies[0];
        __inmunoQA.pose(e.x, e.z + 4, 0);
        __inmunoQA.advance(500, { fire: true });
      });
    await p.evaluate(() => {
      __inmunoQA.pose(-13, 3, 0);
      __inmunoQA.advance(600, { interact: true });
    });
    await p.waitForTimeout(400);
    await p.screenshot({ path: "trailer/assets/paso-3.png" });
    await p.keyboard.press("KeyM");
    await p.screenshot({ path: "trailer/assets/paso-4.png" });
    console.log("Captured five actual scenes from Expedición interior.");
  } finally {
    await b.close();
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

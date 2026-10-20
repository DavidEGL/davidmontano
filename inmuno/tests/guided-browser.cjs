const assert = require("node:assert/strict"),
  fs = require("node:fs");
let pw;
try {
  pw = require(process.env.PLAYWRIGHT_MODULE || "playwright");
} catch {
  pw = require("/opt/codex/runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
}
(async () => {
  const b = await pw.chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || "/usr/bin/chromium",
    args: ["--no-sandbox", "--enable-unsafe-swiftshader"],
  });
  const errors = [];
  try {
    const p = await b.newPage({ viewport: { width: 960, height: 640 } });
    p.on("pageerror", (e) => errors.push(e.message));
    await p.goto("http://127.0.0.1:8090");
    await p.locator("#tutorial-direct").click();
    assert.ok((await p.locator("#dialog-title").innerText()).includes("aire"));
    for (let n = 0; n < 5; n++) {
      await p.locator("#guide-start").click();
      await p
        .locator("#protect-button")
        .waitFor({ state: "visible", timeout: 90000 });
      if (n === 0) await p.screenshot({ path: "docs/mision-guiada.png" });
      await p.locator("#protect-button").hover();
      await p.mouse.down();
      if (n < 4) {
        await p.locator("[data-answer]").first().waitFor({ timeout: 45000 });
        await p.mouse.up();
        if (n === 0) {
          await p.locator('[data-answer="1"]').click();
          assert.ok(
            (await p.locator(".feedback").innerText()).includes(
              "Prueba otra vez",
            ),
          );
        }
        await p.locator('[data-answer="0"]').click();
        assert.ok(
          (await p.locator("#dialog-title").innerText()).includes("recuperado"),
        );
        const saved = await p.evaluate(() =>
          JSON.parse(localStorage.getItem("inmuno-guided-v3")),
        );
        assert.equal(saved.completed.length, n + 1);
        assert.equal(saved.assisted, true);
        await p.locator("#next-mission").click();
        console.log(
          "PASS misión guiada " +
            (n + 1) +
            ": llegar, proteger, descubrir e insignia sin cámara ni teclado",
        );
      } else {
        await p.locator("#again").waitFor({ timeout: 45000 });
        await p.mouse.up();
        const saved = await p.evaluate(() =>
          JSON.parse(localStorage.getItem("inmuno-guided-v3")),
        );
        assert.equal(saved.won, true);
        console.log(
          "PASS núcleo final y aventura guiada completa en navegador",
        );
      }
    }
    await p.close();
    const ctx = await b.newContext({
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
      }),
      m = await ctx.newPage();
    m.on("pageerror", (e) => errors.push(e.message));
    await m.goto("http://127.0.0.1:8090");
    await m.locator("#tutorial-direct").click();
    await m.locator("#guide-start").click();
    await m.waitForTimeout(1200);
    assert.ok(
      await m.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    );
    assert.equal(await m.locator("#joystick").isVisible(), true);
    assert.equal(await m.locator("#loadout").isVisible(), false);
    await m.screenshot({ path: "docs/guiado-movil.png" });
    console.log(
      "PASS móvil: guía, joystick y controles simplificados visibles sin desbordamiento",
    );
    await ctx.close();
    assert.deepEqual(errors, []);
    console.log("PASS sin errores JavaScript");
  } finally {
    await b.close();
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

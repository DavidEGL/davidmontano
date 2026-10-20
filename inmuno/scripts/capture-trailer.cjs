// Capture the real game for the explanatory trailer; never substitutes concept art.
const { chromium } = require(
  process.env.PLAYWRIGHT_MODULE ||
    "/opt/codex/runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright",
);
const fs = require("node:fs");
(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || "/usr/bin/chromium",
    args: ["--no-sandbox", "--enable-unsafe-swiftshader"],
  });
  let context;
  try {
    context = await browser.newContext({
      viewport: { width: 1280, height: 720 },
      recordVideo: {
        dir: "trailer/assets/raw",
        size: { width: 1280, height: 720 },
      },
    });
    const page = await context.newPage(),
      started = Date.now(),
      marks = {};
    page.on("pageerror", (e) => console.log("ERROR", e.message));
    await page.goto("http://127.0.0.1:8090");
    await page.locator("#tutorial-direct").click();
    await page.screenshot({ path: "trailer/assets/paso-0.png" });
    await page.locator("#guide-start").click();
    await page.waitForTimeout(3000);
    marks.walk = (Date.now() - started) / 1000;
    await page.screenshot({ path: "trailer/assets/paso-1.png" });
    await page.screenshot({ path: "docs/aventura-guiada.png" });
    await page
      .locator("#protect-button")
      .waitFor({ state: "visible", timeout: 60000 });
    marks.protect = (Date.now() - started) / 1000;
    await page.screenshot({ path: "trailer/assets/paso-2.png" });
    await page.locator("#protect-button").hover();
    await page.mouse.down();
    await page.locator("[data-answer]").first().waitFor({ timeout: 40000 });
    await page.mouse.up();
    marks.quiz = (Date.now() - started) / 1000;
    await page.screenshot({ path: "trailer/assets/paso-3.png" });
    await page.locator('[data-answer="0"]').click();
    await page.screenshot({ path: "trailer/assets/paso-4.png" });
    await page.locator("#next-mission").click();
    await page.screenshot({ path: "trailer/assets/misiones.png" });
    await page.waitForTimeout(600);
    const video = page.video();
    await context.close();
    const path = await video.path();
    fs.copyFileSync(path, "trailer/assets/partida.webm");
    fs.writeFileSync("trailer/capture.json", JSON.stringify(marks, null, 2));
    console.log("CAPTURA REAL LISTA", marks);
  } finally {
    await browser.close();
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

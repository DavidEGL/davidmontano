const assert = require("node:assert/strict"),
  fs = require("node:fs");
let pw;
try {
  pw = require(process.env.PLAYWRIGHT_MODULE || "playwright");
} catch {
  pw = require("/opt/codex/runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
}
(async () => {
  const browser = await pw.chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || "/usr/bin/chromium",
    args: ["--no-sandbox", "--enable-unsafe-swiftshader"],
  });
  const errors = [];
  try {
    const page = await browser.newPage({
      viewport: { width: 1440, height: 900 },
    });
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto("http://127.0.0.1:8090");
    await page.locator('[data-level="1"]').click();
    await page.locator("#new-run").click();
    assert.equal(await page.locator("canvas").count(), 1);
    const pos = () =>
      page
        .locator(".map-player")
        .evaluate((e) => ({ x: +e.dataset.x, z: +e.dataset.z }));
    let yaw = 0;
    async function turn(angle) {
      let delta = angle - yaw;
      while (delta > Math.PI) delta -= Math.PI * 2;
      while (delta < -Math.PI) delta += Math.PI * 2;
      await page.mouse.move(720, 450);
      await page.mouse.down({ button: "right" });
      await page.mouse.move(720 - delta / 0.006, 450);
      await page.mouse.up({ button: "right" });
      yaw += delta;
    }
    let p = await pos();
    await page.keyboard.down("KeyW");
    await page.waitForTimeout(500);
    await page.keyboard.up("KeyW");
    await page.waitForTimeout(200);
    assert.ok((await pos()).z < p.z - 1);
    console.log("PASS movimiento real con teclado y cámara en tercera persona");
    // Reach the station through ordinary keyboard and mouse controls, without mutating game state.
    for (let i = 0; i < 60; i++) {
      p = await pos();
      if (Math.hypot(-25 - p.x, -18 - p.z) < 4.6) break;
      await turn(Math.atan2(-(-25 - p.x), -(-18 - p.z)));
      await page.keyboard.down("KeyW");
      await page.keyboard.down("ShiftLeft");
      await page.waitForTimeout(260);
      await page.keyboard.up("KeyW");
      await page.keyboard.up("ShiftLeft");
      await page.waitForTimeout(150);
    }
    await page.locator("#interact-button").waitFor({ state: "visible" });
    await page.keyboard.press("KeyE");
    await page.waitForFunction(
      () => document.querySelectorAll(".map-enemy").length === 4,
    );
    await page.keyboard.press("Space");
    await page.keyboard.press("KeyQ");
    await page.keyboard.press("KeyF");
    await page.waitForTimeout(350);
    assert.ok(
      (await page.locator("#shield-status").innerText()).includes("activo"),
    );
    await page.screenshot({ path: "docs/accion-3d.png" });
    console.log(
      "PASS llegar a la región, activar oleada, saltar, escudo y construir barrera",
    );
    for (
      let i = 0;
      i < 90 && !(await page.locator("[data-answer]").count());
      i++
    ) {
      p = await pos();
      const enemies = await page
        .locator(".map-enemy")
        .evaluateAll((list) =>
          list.map((e) => ({ x: +e.dataset.x, z: +e.dataset.z })),
        );
      if (!enemies.length) {
        await page.waitForTimeout(200);
        continue;
      }
      enemies.sort(
        (a, b) =>
          Math.hypot(a.x - p.x, a.z - p.z) - Math.hypot(b.x - p.x, b.z - p.z),
      );
      const e = enemies[0];
      await turn(Math.atan2(-(e.x - p.x), -(e.z - p.z)));
      await page.keyboard.press("Digit1");
      await page.keyboard.press("KeyQ");
      await page.mouse.move(720, 450);
      await page.mouse.down();
      if (Math.hypot(e.x - p.x, e.z - p.z) < 6) {
        await page.keyboard.down("KeyS");
        await page.keyboard.down("KeyD");
      }
      await page.waitForTimeout(400);
      await page.mouse.up();
      await page.keyboard.up("KeyS");
      await page.keyboard.up("KeyD");
      if (await page.locator("#retry").count())
        throw Error("El agente perdió la primera oleada durante la prueba.");
    }
    await page.locator('[data-answer="1"]').click();
    assert.ok(
      (await page.locator(".feedback").innerText()).includes(
        "Puedes intentarlo",
      ),
    );
    await page.locator('[data-answer="0"]').click();
    await page.waitForTimeout(250);
    assert.equal(await page.locator("#restored-count").innerText(), "1 / 4");
    const saved = await page.evaluate(() =>
      JSON.parse(localStorage.getItem("inmuno-action-v2")),
    );
    assert.deepEqual(saved.completed, ["respiratorio"]);
    console.log(
      "PASS neutralizar la oleada con disparos, pregunta recuperable y guardado del sistema",
    );
    await page.locator("#pause-button").click();
    await page.locator("#sound").click();
    await page.locator("#music").uncheck();
    await page.locator("#effects").uncheck();
    await page.locator("#volume").fill("27");
    await page.locator("#back-game").click();
    const audio = await page.evaluate(() =>
      JSON.parse(localStorage.getItem("inmuno-audio-v1")),
    );
    assert.equal(audio.music, false);
    assert.equal(audio.effects, false);
    assert.equal(audio.volume, 27);
    await page.reload();
    await page.locator("#continue").click();
    assert.equal(await page.locator("#restored-count").innerText(), "1 / 4");
    console.log(
      "PASS pausa, ajustes de sonido independientes y continuar tras recargar",
    );
    await page.close();
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      isMobile: true,
      hasTouch: true,
    });
    const mobile = await context.newPage();
    mobile.on("pageerror", (e) => errors.push(e.message));
    await mobile.goto("http://127.0.0.1:8090");
    await mobile.locator("#new-run").click();
    const first = await mobile
      .locator(".map-player")
      .evaluate((e) => +e.dataset.z);
    const stick = await mobile.locator("#joystick").boundingBox();
    await mobile.mouse.move(
      stick.x + stick.width / 2,
      stick.y + stick.height / 2,
    );
    await mobile.mouse.down();
    await mobile.mouse.move(stick.x + stick.width / 2, stick.y + 10);
    await mobile.waitForTimeout(900);
    await mobile.mouse.up();
    await mobile.waitForTimeout(200);
    const second = await mobile
      .locator(".map-player")
      .evaluate((e) => +e.dataset.z);
    assert.ok(second < first - 1);
    assert.ok(
      await mobile.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    );
    await mobile.screenshot({ path: "docs/accion-movil.png" });
    console.log(
      "PASS joystick móvil, controles táctiles y pantalla sin desbordamiento",
    );
    await context.close();
    const offline = await browser.newPage();
    offline.on("pageerror", (e) => errors.push(e.message));
    const requests = [];
    offline.on("request", (r) => requests.push(r.url()));
    await offline.route("**/*", (r) =>
      r.request().url() === "https://inmuno.offline.test/"
        ? r.fulfill({
            status: 200,
            contentType: "text/html",
            body: fs.readFileSync("descarga/JUGAR-INMUNO.html", "utf8"),
          })
        : r.abort(),
    );
    await offline.goto("https://inmuno.offline.test/");
    await offline.locator("#new-run").click();
    assert.equal(await offline.locator("canvas").count(), 1);
    await offline.locator("#pause-button").click();
    await offline.locator("#codex").click();
    assert.ok(
      await offline
        .locator(".codex-grid img")
        .evaluateAll(
          (images) =>
            images.length === 8 &&
            images.every((i) => i.complete && i.naturalWidth > 0),
        ),
    );
    assert.deepEqual(requests, ["https://inmuno.offline.test/"]);
    console.log(
      "PASS videojuego autónomo y códex original con toda la red real bloqueada",
    );
    await offline.close();
    const old = await browser.newPage();
    old.on("pageerror", (e) => errors.push(e.message));
    await old.goto("http://127.0.0.1:8090/cartas.html");
    await old.locator("#start").click();
    assert.equal(await old.locator("#hand .card").count(), 3);
    console.log("PASS modo anterior de cartas conservado");
    await old.close();
    assert.deepEqual(errors, []);
    console.log("PASS sin errores JavaScript");
  } finally {
    await browser.close();
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

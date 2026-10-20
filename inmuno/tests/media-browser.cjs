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
    const p = await browser.newPage({ viewport: { width: 960, height: 640 } });
    p.on("pageerror", (e) => errors.push(e.message));
    await p.goto("http://127.0.0.1:8090");
    await p.locator("#new-run").click();
    await p.waitForFunction(
      () => {
        const v = document.querySelector("#trailer-video");
        return v?.readyState >= 2 && v.currentTime > 0.1;
      },
      { timeout: 30000 },
    );
    const meta = await p
      .locator("#trailer-video")
      .evaluate((v) => ({
        duration: v.duration,
        paused: v.paused,
        error: v.error,
      }));
    assert.ok(Math.abs(meta.duration - 48.625) < 0.3);
    assert.equal(meta.paused, false);
    assert.equal(meta.error, null);
    await p.locator("#trailer-video").evaluate((v) => {
      v.playbackRate = 8;
      return v.play();
    });
    await p
      .locator("#guide-start")
      .waitFor({ state: "visible", timeout: 15000 });
    assert.ok((await p.locator("#dialog-title").innerText()).includes("aire"));
    console.log(
      "PASS tráiler español: vídeo real reproducible, 49 segundos y entrada automática al tutorial",
    );
    await p.close();
    // Verify the exact distributed HTML and its sibling video without accessing any real network.
    const q = await browser.newPage({ viewport: { width: 960, height: 640 } });
    q.on("pageerror", (e) => errors.push(e.message));
    const seen = [];
    const html = fs.readFileSync("descarga/JUGAR-INMUNO.html", "utf8"),
      movie = fs.readFileSync("media/TRAILER-INMUNO.mp4");
    await q.route("**/*", async (r) => {
      const url = r.request().url();
      seen.push(url);
      if (url === "https://inmuno.offline.test/")
        return r.fulfill({ contentType: "text/html", body: html });
      if (url === "https://inmuno.offline.test/TRAILER-INMUNO.mp4") {
        const range = r.request().headers().range,
          match = range?.match(/bytes=(\d+)-(\d*)/);
        if (match) {
          const start = +match[1],
            end = match[2]
              ? Math.min(+match[2], movie.length - 1)
              : movie.length - 1;
          return r.fulfill({
            status: 206,
            headers: {
              "content-type": "video/mp4",
              "accept-ranges": "bytes",
              "content-range": `bytes ${start}-${end}/${movie.length}`,
            },
            body: movie.subarray(start, end + 1),
          });
        }
        return r.fulfill({ contentType: "video/mp4", body: movie });
      }
      return r.abort();
    });
    await q.goto("https://inmuno.offline.test/");
    await q.locator("#new-run").click();
    await q.waitForFunction(
      () => document.querySelector("#trailer-video")?.readyState >= 2,
    );
    await q.locator("#trailer-done").click();
    await q.locator("#guide-start").click();
    assert.equal(await q.locator("canvas").count(), 1);
    await q.locator("#pause-button").click();
    await q.locator("#codex").click();
    assert.ok(
      await q
        .locator(".codex-grid img")
        .evaluateAll(
          (images) =>
            images.length === 8 &&
            images.every((i) => i.complete && i.naturalWidth > 0),
        ),
    );
    assert.ok(
      seen.every((u) =>
        [
          "https://inmuno.offline.test/",
          "https://inmuno.offline.test/TRAILER-INMUNO.mp4",
        ].includes(u),
      ),
    );
    assert.deepEqual(errors, []);
    console.log(
      "PASS paquete autónomo: mundo, vídeo contiguo y cartas con toda la red externa bloqueada",
    );
    await q.close();
  } finally {
    await browser.close();
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

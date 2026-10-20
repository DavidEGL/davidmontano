const fs = require("node:fs"),
  assert = require("node:assert/strict");
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
  try {
    const ctx = await b.newContext({ viewport: { width: 960, height: 640 } }),
      p = await ctx.newPage(),
      errors = [],
      network = [];
    p.on("pageerror", (e) => errors.push(e.message));
    p.on("console", (m) => {
      if (m.type() === "error") errors.push(m.text());
    });
    const html = fs.readFileSync("descarga/JUGAR-INMUNO.html"),
      video = fs.readFileSync("media/TRAILER-INMUNO.mp4");
    await ctx.route("**/*", async (r) => {
      const url = new URL(r.request().url());
      if (
        url.hostname === "inmuno.local" &&
        url.pathname === "/JUGAR-INMUNO.html"
      )
        return r.fulfill({ status: 200, contentType: "text/html", body: html });
      if (
        url.hostname === "inmuno.local" &&
        url.pathname === "/TRAILER-INMUNO.mp4"
      ) {
        const range = r.request().headers().range;
        if (range) {
          const m = /bytes=(\d+)-(\d*)/.exec(range),
            start = +m[1],
            end = m[2] ? Math.min(+m[2], video.length - 1) : video.length - 1;
          return r.fulfill({
            status: 206,
            headers: {
              "Content-Type": "video/mp4",
              "Accept-Ranges": "bytes",
              "Content-Range": `bytes ${start}-${end}/${video.length}`,
            },
            body: video.subarray(start, end + 1),
          });
        }
        return r.fulfill({ contentType: "video/mp4", body: video });
      }
      network.push(url.href);
      return r.abort();
    });
    await p.goto("http://inmuno.local/JUGAR-INMUNO.html");
    await p.locator("#watch-trailer").click();
    await p.waitForFunction(
      () => document.querySelector("video")?.currentTime > 0.1,
      null,
      { timeout: 30000 },
    );
    const duration = await p.locator("video").evaluate((v) => v.duration);
    assert.ok(duration > 35 && duration < 65);
    await p.locator("#video-back").click();
    await p.locator("#start-game").click();
    for (let i = 0; i < 3; i++) await p.locator("#lesson-next").click();
    await p.locator('[data-tool="2"]').click();
    await p.waitForTimeout(500);
    const game = await p.evaluate(() => JSON.parse(render_game_to_text()));
    assert.equal(game.player.tool, 2);
    assert.equal(game.player.z, 23);
    assert.equal(game.shotsFired, undefined);
    assert.ok(game.nodes.every((n) => n.status === "unknown"));
    await p.locator("#pause-button").click();
    await p.locator("#menu-sound").click();
    await p.locator("#music").uncheck();
    await p.locator("#effects").uncheck();
    await p.locator("#volume").focus();
    await p.keyboard.press("Home");
    const audio = await p.evaluate(() =>
      JSON.parse(localStorage.getItem("inmuno-audio-v1")),
    );
    assert.equal(audio.music, false);
    assert.equal(audio.effects, false);
    assert.equal(audio.volume, 0);
    await p.locator("#sound-back").click();
    await p.locator("#pause-button").click();
    await p.locator("#menu-cards").click();
    const loaded = await p
      .locator(".how-grid img")
      .evaluateAll((xs) => xs.every((i) => i.complete && i.naturalWidth > 100));
    assert.equal(loaded, true);
    assert.deepEqual(network, []);
    assert.deepEqual(errors, []);
    await ctx.close();
    console.log(
      "PASS exact standalone HTML, embedded tissue/cards, manual tool, MP4 playback, sound controls and no real network",
    );
  } finally {
    await b.close();
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

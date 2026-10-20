const assert = require('node:assert/strict');
const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH,
    headless: true,
    args: ['--no-sandbox'],
  });
  try {
    const page = await browser.newPage({viewport: {width: 1440, height: 1100}});
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    // Observe rendered audio at the destination without changing its playback path.
    await page.addInitScript(() => {
      const NativeAudio = window.AudioContext;
      window.AudioContext = class extends NativeAudio {
        constructor(...args) { super(...args); window.__testContext = this; }
      };
      const connect = AudioNode.prototype.connect;
      AudioNode.prototype.connect = function(destination, ...args) {
        if (destination === this.context.destination) {
          const meter = this.context.createAnalyser();
          meter.fftSize = 2048;
          connect.call(this, meter);
          window.__testMeter = meter;
        }
        return connect.call(this, destination, ...args);
      };
    });
    await page.goto(process.env.GAME_URL || 'http://127.0.0.1:8080');
    await page.waitForFunction(() => [...document.querySelectorAll('.original-portrait')].length >= 13 && [...document.querySelectorAll('.original-portrait')].every(i => i.complete && i.naturalWidth > 0));
    assert.equal(await page.evaluate(() => !!window.__testContext), false, 'No audio before user interaction');
    await page.locator('#sound-button').click();
    await page.waitForFunction(() => window.__testContext?.state === 'running');
    const signal = audible => page.waitForFunction(expected => {
      const meter = window.__testMeter;
      if (!meter) return false;
      const samples = new Float32Array(meter.fftSize);
      meter.getFloatTimeDomainData(samples);
      const rms = Math.sqrt(samples.reduce((sum, sample) => sum + sample * sample, 0) / samples.length);
      return expected ? rms > .0001 : rms < .00001;
    }, audible);
    await signal(true);
    await page.locator('#music-toggle').uncheck();
    await signal(false);
    assert.equal(await page.locator('#effects-toggle').isChecked(), true, 'Effects independent of music');
    await page.locator('#test-audio').click();
    await signal(true);
    await page.locator('#mute-all').click();
    await signal(false);
    await page.locator('#audio-volume').evaluate(input => {
      input.value = '65';
      input.dispatchEvent(new Event('input', {bubbles: true}));
    });
    assert.deepEqual(await page.evaluate(() => JSON.parse(localStorage.getItem('ancestral-audio-v1'))), {music: false, effects: false, volume: 65});
    await page.reload();
    await page.locator('#sound-button').click();
    assert.equal(await page.locator('#music-toggle').isChecked(), false);
    assert.equal(await page.locator('#effects-toggle').isChecked(), false);
    assert.equal(await page.locator('#audio-volume').inputValue(), '65');
    await page.locator('#close-dialog').click();
    await page.locator('#session-menu').click();
    assert.equal(await page.locator('#load-art').count(), 0, 'Artwork is bundled, not a manual upload');
    await page.locator('#close-dialog').click();
    await page.locator('#quest-action').click();
    await page.locator('#setup-form button[type=submit]').click();
    await page.screenshot({path: '/tmp/ancestral-original-art.png', fullPage: true});
    await page.setViewportSize({width: 390, height: 844});
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, 'No mobile overflow');
    assert.deepEqual(errors, []);
    console.log(JSON.stringify({originalArtwork: 'loaded',music: 'audible',effects: 'audible independently',mute: 'silent',preferences: 'restored',mobile: 'no overflow',errors}));
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exit(1); });

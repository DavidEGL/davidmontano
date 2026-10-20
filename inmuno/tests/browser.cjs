let playwright;try{playwright=require(process.env.PLAYWRIGHT_MODULE||'playwright');}catch{playwright=require('/opt/codex/runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');}
const {chromium}=playwright;
const assert=require('node:assert/strict');
const fs=require('node:fs');
(async()=>{
 const {currentLesson,adventureHand,newDuel,organ}=await import('../engine.js');
 const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox','--enable-unsafe-swiftshader']});
 const errors=[];const page=await browser.newPage({viewport:{width:1440,height:1000}});page.on('pageerror',e=>errors.push(e.message));
 const read=()=>page.evaluate(()=>JSON.parse(localStorage.getItem('inmuno-state-v1')));
 await page.goto('http://127.0.0.1:8090/cartas.html');
 assert.equal(await page.locator('canvas').count(),1);
 for(const level of [1,2,3]){
  if(level!==1){await page.reload();await page.locator('#resume').waitFor();}
  await page.locator(`[data-level="${level}"]`).click();await page.locator('#start').click();if(await page.locator('#confirm').count())await page.locator('#confirm').click();
  let s=await read();assert.equal(s.level,level);
  while(currentLesson(s)){
   const l=currentLesson(s);
   await page.locator(`#map [data-site="${l.site}"]`).click();
   while(!s.quiz){const hand=adventureHand(s),index=hand.indexOf(l.card);assert.ok(index>=0);await page.locator(`#hand [data-index="${index}"]`).click();await page.locator('#use').click();s=await read();}
   await page.locator('[data-answer="0"]').click();s=await read();
  }
  await page.locator('#finish').click();assert.ok((await read()).completed);await page.locator('#review').click();console.log(`PASS aventura ${level}, ${s.lesson} misiones y portal final`);
 }
 await page.screenshot({path:'docs/mundo-3d.png'});
 await page.locator('#sound').click();await page.locator('#music').uncheck();await page.locator('#effects').uncheck();await page.locator('#volume').fill('23');await page.locator('#audio-done').click();const audio=await page.evaluate(()=>JSON.parse(localStorage.getItem('inmuno-audio-v1')));assert.equal(audio.music,false);assert.equal(audio.effects,false);assert.equal(audio.volume,23);console.log('PASS música, efectos y volumen independientes');
 // Human-vs-bot game: seed a legal opening, then exercise actual card and target controls.
 const duel=newDuel({seed:5,level:3});duel.current=0;duel.players[0].hand=['respiratorio','viral','anticuerpo'];duel.players[1].systems=[organ('circulatorio')];
 await page.evaluate(s=>localStorage.setItem('inmuno-state-v1',JSON.stringify(s)),duel);await page.reload();await page.locator('#resume').click();await page.locator('#ready').click();await page.locator('#hand [data-index="0"]').click();await page.locator('#map [data-site="respiratorio"]').click();await page.locator('#use').click();await page.waitForFunction(()=>JSON.parse(localStorage.getItem('inmuno-state-v1')).turn>=3);assert.ok((await read()).players[0].systems.some(s=>s.type==='respiratorio'));console.log('PASS carta sobre isla y respuesta de Microbot');
 await page.locator('#ready').click();await page.locator('#discard-toggle').click();await page.locator('#hand [data-index="0"]').click();await page.locator('#discard').click();await page.waitForFunction(()=>JSON.parse(localStorage.getItem('inmuno-state-v1')).turn>=5);console.log('PASS descarte y reposición de mano');
 // Mobile layout.
 await page.setViewportSize({width:390,height:844});await page.locator('#ready').click();await page.screenshot({path:'docs/movil.png',fullPage:true});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));console.log('PASS pantalla móvil sin desbordamiento horizontal');
 await page.close();
 // This cloud browser blocks file:// by policy. Load the exact distributed HTML
 // at a synthetic origin with every real network request blocked.
 const offline=await browser.newPage({viewport:{width:1280,height:900}});offline.on('pageerror',e=>errors.push(e.message));const network=[];offline.on('request',r=>{if(/^https?:/.test(r.url()))network.push(r.url());});const html=fs.readFileSync('descarga/MODO-CARTAS.html','utf8');await offline.route('**/*',route=>route.request().url()==='https://inmuno.offline.test/'?route.fulfill({status:200,contentType:'text/html',body:html}):route.abort());await offline.goto('https://inmuno.offline.test/');await offline.locator('[data-level="1"]').click();await offline.locator('#start').click();assert.equal(await offline.locator('#hand .card').count(),3);assert.equal(await offline.locator('canvas').count(),1);assert.equal(await offline.locator('#hand img').evaluateAll(images=>images.every(i=>i.complete&&i.naturalWidth>0)),true);assert.deepEqual(network,['https://inmuno.offline.test/']);await offline.close();console.log('PASS HTML autónomo, cartas y mundo 3D con toda la red real bloqueada');
 assert.deepEqual(errors,[]);await browser.close();console.log('PASS sin errores JavaScript');
})().catch(e=>{console.error(e);process.exit(1)});

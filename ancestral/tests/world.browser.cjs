const assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');

(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader']});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.addInitScript(()=>{Math.random=()=>.999;});
  await page.goto(process.env.GAME_URL||'http://127.0.0.1:8080');
  await page.waitForSelector('#world-canvas canvas');
  assert.equal(await page.locator('body').getAttribute('data-renderer'),'webgl');
  await page.getByRole('button',{name:'Comenzar aventura'}).click();
  await page.locator('#setup-form button[type=submit]').click();
  const read=()=>page.evaluate(()=>JSON.parse(localStorage.getItem('ancestral-session-v1')));
  const before=await read();
  await page.locator('#world-canvas canvas').focus();
  await page.locator('#world-canvas canvas').press('ArrowUp');
  const moved=await read();assert.notDeepEqual(moved.heroes[0].pos,before.heroes[0].pos,'Arrow keys move the selected hero on the walkable 3D ground');
  await page.locator('#camera-top').click();await page.locator('#camera-home').click();
  await page.locator('#expand-map').click();assert.ok(await page.locator('body').evaluate(b=>b.classList.contains('cinema-mode')));
  await page.locator('#leave-cinema').click();
  await page.locator('#world-chest').click();
  await page.locator('[data-grade=correct]').click();
  const treasure=await read();assert.deepEqual(treasure.treasures,[0]);assert.equal(treasure.hints,1);assert.equal(treasure.acted.length,0,'Exploration does not consume a combat action');
  await page.locator('#world-portal').click();
  await page.locator('[data-gem="0"]').click();await page.locator('[data-gem="1"]').click();
  await page.locator('#activate-gems').click();assert.equal((await read()).phase,'combat','Interactive gems activate the encounter');
  await page.locator('#roll').click();await page.waitForSelector('body.is-rolling');
  await page.locator('[data-grade=correct]').click();
  await page.waitForSelector('.combat-float');assert.equal((await read()).enemies[0].hp,6,'Animated d20 uses the actual critical result');
  await page.locator('[data-hero="1"]').click();await page.locator('[data-action="1"]').click();await page.locator('#roll').click();await page.locator('[data-grade=correct]').click();
  assert.deepEqual((await read()).enemies.map(e=>e.hp),[2,6,6]);
  await page.screenshot({path:'/tmp/ancestral-3d-combat.png'});
  await page.locator('#original-map').click();await page.waitForFunction(()=>document.querySelector('.original-map-image')?.naturalWidth>0);await page.locator('#close-dialog').click();
  await page.locator('#open-journal').click();assert.ok((await page.locator('#modal').textContent()).includes('Corte')||(await page.locator('#modal').textContent()).includes('Explosión'));await page.locator('#close-dialog').click();
  await page.setViewportSize({width:390,height:844});await page.screenshot({path:'/tmp/ancestral-3d-mobile.png',fullPage:true});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  assert.deepEqual(errors,[]);
  console.log(JSON.stringify({renderer:'WebGL 3D',movement:'walkable surfaces',camera:'tactical and cinematic',treasure:'persisted reward',puzzle:'interactive gems',dice:'3D roll and correct critical damage',combat:'animated area attack',originalMaps:'available',mobile:'no overflow',errors}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});

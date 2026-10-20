const assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader']});
 try{
  const page=await browser.newPage({viewport:{width:1280,height:900},reducedMotion:'reduce'}),errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.addInitScript(()=>{Math.random=()=>.999;});
  await page.goto(process.env.GAME_URL||'http://127.0.0.1:8080');
  await page.locator('#quest-action').click();await page.locator('#setup-form button[type=submit]').click();
  let actions=0,lastRound=0;const zones=new Set();
  const read=()=>page.evaluate(()=>JSON.parse(localStorage.getItem('ancestral-session-v1')));
  for(let n=0;n<110;n++){
   const state=await read();
   if(!zones.has(state.zone)){zones.add(state.zone);console.log(`Chapter ${state.zone+1}: rendering and playing`);}
   if(state.round!==lastRound){lastRound=state.round;console.log(`Round ${lastRound}, ${actions} hero actions completed`);}
   await page.waitForFunction(()=>[...document.querySelectorAll('.original-portrait')].length>=7&&[...document.querySelectorAll('.original-portrait')].every(i=>i.complete&&i.naturalWidth>0));
   assert.equal(await page.locator('#load-art').count(),0);
   if(state.phase==='victory')break;
   if(state.phase==='riddle'){await page.locator('#quest-action').click();await page.locator('[data-grade=correct]').click();}
   else if(state.phase==='cleared')await page.locator('#quest-action').click();
   else if(state.phase==='combat'){
    if(state.acted.length>=3){await page.locator('#monster-button').click();await page.locator('#begin-monster').click();await page.locator('[data-grade=correct]').click();}
    else{const i=state.heroes.findIndex((h,i)=>h.hp>0&&!h.prison&&!h.stunned&&!state.acted.includes(i));await page.locator(`[data-hero="${i}"]`).click();await page.locator('#roll').click();await page.locator('[data-grade=correct]').click();actions++;}
   }else throw Error(state.phase);
  }
  const result=await read();assert.equal(result.phase,'victory');assert.equal(zones.size,3);
  await page.locator('#quest-action').click();assert.ok((await page.locator('.certificate').textContent()).includes('Maestros de'));
  assert.deepEqual(errors,[]);console.log(JSON.stringify({fullCampaign:'passed',zones:[...zones],heroActions:actions,rounds:result.round,certificate:true,errors}));
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1);});

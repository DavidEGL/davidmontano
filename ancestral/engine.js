import {heroes,zones,bank,difficulty} from './data.js';
export const VERSION=1;
export function initialState(){return {version:VERSION,started:false,zone:0,phase:'intro',round:1,row:0,selected:0,target:0,ally:0,acted:[],shield:false,guard:null,barrier:false,enemyStun:false,half:false,hints:0,heroes:heroes.map((h,i)=>({hp:h.hp,team:`Equipo ${i+1}`,uses:{},advanced:false,stunned:false,prison:false,pos:[25+i*12,77+(i%2)*7]})),enemies:zones[0].enemies.map(([name,hp])=>({name,hp,max:hp})),log:[{text:'La compañía se reúne. Una aventura ancestral está a punto de comenzar.',kind:'story'}]};}
export function addLog(s,text,kind='event'){s.log.unshift({text,kind});s.log=s.log.slice(0,80);}
export function alive(s){return s.heroes.map((h,i)=>h.hp>0&&!h.prison?i:-1).filter(i=>i>=0);}
export function canAct(s,i){return s.started&&s.phase==='combat'&&s.heroes[i].hp>0&&!s.heroes[i].prison&&!s.heroes[i].stunned&&!s.acted.includes(i)&&s.acted.length<3;}
export function monsterDue(s){return s.phase==='combat'&&(s.acted.length>=3||!alive(s).some(i=>canAct(s,i)));}
export function roll(random=Math.random){return Math.floor(random()*20)+1;}
export function challenge(s,hero,action,die){let col=difficulty(die);const h=s.heroes[hero];if(h.advanced)col=1;if(action[2]==='shield')col=2;return {kind:'action',hero,action,die,col,row:s.row%15,question:bank[s.row%15][col][0],answer:bank[s.row%15][col][1],retry:false};}
function hurt(h,n){h.hp=Math.max(0,h.hp-n);}
export function checkEnd(s){if(s.enemies.every(e=>e.hp<=0)&&s.phase==='combat'){s.phase=s.zone===2?'victory':'cleared';addLog(s,s.zone===2?'¡El Cronomante ha caído! El código se estabiliza. Son Maestros de las Fracciones.':'El camino está despejado. La siguiente zona aguarda.','success');}if(s.heroes.every(h=>h.hp<=0)){s.phase='defeat';addLog(s,'La compañía ha caído. Pueden deshacer la última acción o comenzar otra sesión.','danger');}}
export function resolveAction(s,c,result){
 if(!canAct(s,c.hero))throw Error('Este héroe no puede actuar ahora.');
 const h=s.heroes[c.hero],def=heroes[c.hero],a=c.action,type=a[2],uses=h.uses[a[0]]||0;
 if(a[3]&&uses>=a[3])throw Error('No quedan usos de esa habilidad.');
 if(result==='wrong'&&c.die===1&&type==='heal'&&!c.retry)return {retry:true};
 if(a[3])h.uses[a[0]]=uses+1;
 const ok=result==='correct',partial=result==='partial',critical=c.die===20||(c.hero===3&&c.die>=18);
 if(partial)hurt(h,1);
 const points=ok?a[1]*(critical?2:1):partial?Math.max(1,Math.floor(a[1]/2)):0;
 let detail='La acción no surte efecto.';
 if((ok||partial)&&['attack','area'].includes(type)){
  if(s.barrier)detail='La barrera del Guardián absorbe el ataque.';
  else{const targets=type==='area'?s.enemies:[s.enemies[s.target]];targets.filter(e=>e&&e.hp>0).forEach(e=>{e.hp=Math.max(0,e.hp-points);});detail=`${points} de daño${type==='area'?' a cada enemigo':''}${critical&&ok?' · ¡Crítico!':''}.`;}
 }else if((ok||partial)&&type==='heal'){const t=s.heroes[s.ally];const before=t.hp;t.hp=Math.min(heroes[s.ally].hp,t.hp+points);detail=`${heroes[s.ally].name} recupera ${t.hp-before} PV.`;}
 else if(ok){
  if(type==='shield'){s.shield=true;detail='El grupo queda protegido durante el próximo turno enemigo.';}
  if(type==='guard'){s.guard=c.hero;detail='El Guerrero atraerá el siguiente ataque dirigido.';}
  if(type==='cleanse'){s.heroes.forEach(t=>{t.advanced=false;t.stunned=false;t.prison=false;});detail='Se eliminan los estados negativos del grupo.';}
  if(type==='distract'){s.half=true;detail='El próximo ataque enemigo hará la mitad del daño.';}
  if(type==='stun'){s.enemyStun=true;detail='El enemigo pierde su próximo turno.';}
  if(type==='escape'){s.phase='riddle';s.enemies=zones[s.zone].enemies.map(([name,hp])=>({name,hp,max:hp}));s.barrier=false;detail='El grupo se retira. Puede volver a intentar la cerradura y el encuentro; la vida no se restaura.';}
 }else if(partial&&a[1]===0)detail='Éxito mínimo: sin efecto especial. El grupo puede volver a intentarlo en otro turno.';
 if(ok&&c.die===1){s.hints++;detail+=' Ganan una pista para la siguiente acción.';}
 h.advanced=false;s.acted.push(c.hero);s.row++;
 addLog(s,`${def.name} · ${a[0]} · d20: ${c.die}. ${ok?'Correcto':partial?'Parcial (−1 PV)':'Incorrecto'}. ${detail}`,ok?'success':partial?'event':'danger');
 const living=s.enemies.findIndex(e=>e.hp>0);if(living>=0&&s.enemies[s.target]?.hp<=0)s.target=living;
 checkEnd(s);return {retry:false};
}
export function beginCombat(s){s.phase='combat';s.acted=[];s.heroes.forEach(h=>{h.stunned=false;});addLog(s,'La cerradura cede. ¡Comienza el encuentro!','success');}
export function nextZone(s){if(s.phase!=='cleared'||s.zone>=2)throw Error('Zona no disponible.');s.zone++;s.phase='riddle';s.target=0;s.acted=[];s.barrier=false;s.shield=false;s.guard=null;s.half=false;s.enemyStun=false;s.heroes.forEach((h,i)=>{h.advanced=false;h.stunned=false;h.prison=false;h.pos=[25+i*12,77+(i%2)*7];});s.enemies=zones[s.zone].enemies.map(([name,hp])=>({name,hp,max:hp}));addLog(s,`La compañía llega a ${zones[s.zone].name}.`,'story');}
export function finishMonster(s){s.round++;s.acted=[];s.heroes.forEach(h=>{h.stunned=false;});s.shield=false;s.guard=null;checkEnd(s);}
export function monsterEffect(s,ability,target,result){
 const type=ability[1];if(type==='barrier'){s.barrier=true;addLog(s,'El Guardián levanta la Barrera de Signos. Resuelvan un reto Normal de jerarquía para romperla.','danger');finishMonster(s);return;}
 const i=s.guard!==null&&s.heroes[s.guard].hp>0?s.guard:target,h=s.heroes[i];
 if(s.shield){addLog(s,'El escudo arcano protege a la compañía del ataque.','success');finishMonster(s);return;}
 if(type==='advanced'){h.advanced=true;addLog(s,`Chirrido: el próximo reto de ${heroes[i].name} será Avanzado.`,'danger');finishMonster(s);return;}
 if(type==='prison'){h.prison=true;addLog(s,`${heroes[i].name} queda en la Prisión de Decimales. El grupo dispone de un minuto para liberarlo.`,'danger');finishMonster(s);return;}
 const amount=s.half?Math.ceil(ability[2]/2):ability[2];s.half=false;
 const damage=result==='correct'?0:result==='partial'?(i===0?0:1):amount;hurt(h,damage);
 addLog(s,`${ability[0]} → ${heroes[i].name}: ${damage===0?'defensa exitosa':`−${damage} PV`}.`,damage?'danger':'success');
 finishMonster(s);if(type==='stagger'&&result==='wrong'&&h.hp>0){h.stunned=true;addLog(s,`${heroes[i].name} pierde su próxima ronda.`,'danger');}
}
export function validState(s){
 const integer=(n,max=1000000)=>Number.isInteger(n)&&n>=0&&n<=max;
 return !!(s&&s.version===VERSION&&integer(s.zone,2)&&typeof s.started==='boolean'&&['intro','riddle','combat','cleared','victory','defeat'].includes(s.phase)&&
  ['shield','barrier','enemyStun','half'].every(k=>typeof s[k]==='boolean')&&(s.guard===null||integer(s.guard,4))&&integer(s.hints)&&
  Array.isArray(s.heroes)&&s.heroes.length===5&&s.heroes.every((h,i)=>h&&typeof h.team==='string'&&h.team.length<=40&&Number.isFinite(h.hp)&&h.hp>=0&&h.hp<=heroes[i].hp&&
   h.uses&&typeof h.uses==='object'&&!Array.isArray(h.uses)&&Object.values(h.uses).every(v=>integer(v,100))&&['advanced','stunned','prison'].every(k=>typeof h[k]==='boolean')&&
   Array.isArray(h.pos)&&h.pos.length===2&&h.pos.every(n=>Number.isFinite(n)&&n>=0&&n<=100))&&
  Array.isArray(s.enemies)&&s.enemies.length===zones[s.zone].enemies.length&&s.enemies.every((e,i)=>e&&typeof e.name==='string'&&e.name.length<=80&&e.max===zones[s.zone].enemies[i][1]&&Number.isFinite(e.hp)&&e.hp>=0&&e.hp<=e.max)&&
  Array.isArray(s.log)&&s.log.length<=80&&s.log.every(l=>l&&typeof l.text==='string'&&l.text.length<=2000&&['event','story','success','danger'].includes(l.kind))&&
  Array.isArray(s.acted)&&s.acted.length<=3&&new Set(s.acted).size===s.acted.length&&s.acted.every(i=>integer(i,4))&&integer(s.row)&&integer(s.round)&&s.round>0&&integer(s.selected,4)&&integer(s.ally,4)&&integer(s.target,s.enemies.length-1));
}

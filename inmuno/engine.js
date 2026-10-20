import {cards,regions,lessonsFor} from './data.js';
export const VERSION=1;
const clone=x=>structuredClone(x);
const assert=(condition,message)=>{if(!condition)throw Error(message);};
export const load=system=>system.illnesses.reduce((sum,i)=>sum+i.level,0);
export const stable=system=>load(system)===0;
export function organ(type){return {type,illnesses:[],shield:null,vaccine:false,memory:false,immune:false};}
export function record(state,text){state.log.unshift(text);state.log=state.log.slice(0,80);}
export function random(state){state.seed=(Math.imul(1664525,state.seed)+1013904223)>>>0;return state.seed/4294967296;}
function shuffle(state,array){for(let i=array.length-1;i>0;i--){const j=Math.floor(random(state)*(i+1));[array[i],array[j]]=[array[j],array[i]];}return array;}
export function deckFor(level=3){return Object.values(cards).filter(card=>level===3||(level===2?!['treatment','event'].includes(card.kind)&&card.id!=='mutacion':card.kind==='system'||['viral','bacteriana','anticuerpo','antibiotico','respuesta','integral'].includes(card.id))).flatMap(card=>Array(card.count).fill(card.id));}
export function newDuel({names=['Tú','Microbot'],bots=[false,true],level=2,seed=Date.now()>>>0}={}){
 assert(names.length>=2&&names.length<=6,'Elige entre dos y seis participantes.');
 const state={version:VERSION,mode:'duel',level,seed,players:names.map((name,i)=>({name:String(name).trim().slice(0,24)||`Equipo ${i+1}`,bot:!!bots[i],systems:[],hand:[],blocked:0,resetNext:false})),deck:[],discard:[],pandemics:[],current:0,cycle:0,turn:1,winner:null,log:[],last:null};
 state.deck=shuffle(state,deckFor(level));state.current=Math.floor(random(state)*names.length);
 for(const p of state.players)drawToThree(state,p);
 record(state,`¡Comienza INMUNO! Juega ${state.players[state.current].name}.`);return state;
}
export function drawToThree(state,player){while(player.hand.length<3){if(!state.deck.length&&state.discard.length)state.deck=state.discard.splice(0).reverse();if(!state.deck.length)break;player.hand.push(state.deck.pop());}}
function discardIllness(state,illness){if(illness.card)state.discard.push(illness.card);}
function collapse(state,player,system){state.discard.push(system.type);system.illnesses.forEach(i=>discardIllness(state,i));if(system.shield)state.discard.push(system.shield);if(system.vaccine)state.discard.push('vacuna');player.systems.splice(player.systems.indexOf(system),1);record(state,`El sistema ${system.type} de ${player.name} ha colapsado.`);}
function checkCollapse(state,player,system){if(load(system)>=(system.vaccine?4:3))collapse(state,player,system);}
function addInfection(state,player,system,type,card=type){
 if(system.immune){if(card)state.discard.push(card);return;}
 if(type==='viral'&&system.vaccine){if(card)state.discard.push(card);record(state,'La vacuna bloquea la infección viral.');return;}
 if(type==='viral'&&system.memory){system.memory=false;if(card)state.discard.push(card);record(state,'La memoria reconoce el virus y lo bloquea.');return;}
 let amount=type==='severa'?2:type==='mutacion'?2:1;
 const affinity=(type==='viral'&&system.type==='respiratorio')||(type==='bacteriana'&&system.type==='circulatorio');if(affinity)amount++;
 const blocked=!!system.shield;if(blocked){state.discard.push(system.shield);system.shield=null;if(type!=='fungica'||system.type!=='inmunologico')amount--;}
 if(amount<=0){if(card)state.discard.push(card);return;}
 system.illnesses.push({type,level:amount,card,due:type==='fungica'&&system.type==='inmunologico'&&!blocked?state.cycle+state.players.length:null,grown:false});
 checkCollapse(state,player,system);
}
function eligibleIllness(system,defense){const types=defense==='anticuerpo'?['viral']:defense==='antibiotico'?['bacteriana']:['viral','bacteriana','fungica','severa','pandemia'];return system.illnesses.filter(i=>types.includes(i.type)).sort((a,b)=>b.level-a.level);}
function canDefend(system,id){if(system.immune)return false;if(id==='vacuna')return !system.vaccine;if(load(system)>0)return eligibleIllness(system,id).length>0;if(system.shield)return false;return id==='anticuerpo'?system.type==='respiratorio':id==='antibiotico'?system.type==='circulatorio':['respuesta','integral'].includes(id);}
function removeLevel(state,system,id){const illness=eligibleIllness(system,id)[0];assert(illness,'Esta defensa no retira esa infección.');illness.level--;if(illness.level<=0){system.illnesses.splice(system.illnesses.indexOf(illness),1);discardIllness(state,illness);if(id==='anticuerpo'&&illness.type==='viral')system.memory=true;}}
function defend(state,system,id){if(id==='vacuna'){system.vaccine=true;return;}if(load(system)>0){removeLevel(state,system,id);state.discard.push(id);}else system.shield=id;}
function hasDuplicateAfter(player,outgoing,incoming){return player.systems.some(s=>s!==outgoing&&s.type===incoming.type);}
export function forcedTurn(state){const p=state.players[state.current];return p.blocked?'aislamiento':p.resetNext?'reinicio':null;}
export function legalMoves(state,id){
 if(state.mode!=='duel'||state.winner!==null||forcedTurn(state)||!cards[id])return [];
 const player=state.players[state.current],card=cards[id],moves=[];
 if(card.kind==='system'){if(!player.systems.some(s=>s.type===id))moves.push({owner:state.current,site:id});return moves;}
 if(card.kind==='infection'){
  state.players.forEach((p,owner)=>{if(owner===state.current)return;p.systems.forEach(s=>{if(s.immune)return;if(id==='mutacion'&&(load(s)!==1||s.shield||s.vaccine||s.memory))return;moves.push({owner,site:s.type});});});return moves;
 }
 if(card.kind==='defense'){state.players.forEach((p,owner)=>p.systems.forEach(s=>{if(canDefend(s,id))moves.push({owner,site:s.type});}));return moves;}
 if(card.kind==='event')return [{}];
 if(id==='reinicio')return [{}];
 if(id==='aislamiento'||id==='intervencion'){state.players.forEach((p,owner)=>{if(owner!==state.current&&(id==='aislamiento'?!p.blocked:p.hand.length>=2))moves.push({owner});});return moves;}
 if(id==='sabotaje'){state.players.forEach((p,owner)=>p.systems.forEach(s=>{if(s.vaccine)moves.push({owner,site:s.type,remove:'vacuna'});if(s.memory)moves.push({owner,site:s.type,remove:'memoria'});}));return moves;}
 if(id==='interferencia'){state.players.forEach((p,owner)=>{if(owner===state.current)return;p.systems.forEach(s=>{if(!s.immune&&!player.systems.some(t=>t.type===s.type))moves.push({owner,site:s.type});});});return moves;}
 if(id==='reasignacion'){
  for(let a=0;a<state.players.length;a++)for(let b=a+1;b<state.players.length;b++)for(const sa of state.players[a].systems)for(const sb of state.players[b].systems){if(!sa.immune&&!sb.immune&&!hasDuplicateAfter(state.players[a],sa,sb)&&!hasDuplicateAfter(state.players[b],sb,sa))moves.push({owner:a,site:sa.type,otherOwner:b,otherSite:sb.type});}
 }
 return moves;
}
function findSystem(state,move){return state.players[move.owner]?.systems.find(s=>s.type===move.site);}
export function checkWinner(state){if(state.winner!==null)return state.winner;for(let i=0;i<state.players.length;i++){const p=state.players[i];if(p.systems.filter(stable).length>=4&&!p.blocked&&!state.pandemics.some(event=>event.owner===i)){state.winner=i;record(state,`¡${p.name} ha conseguido cuatro sistemas estables!`);return i;}}return null;}
function advance(state,repeat=false){
 if(checkWinner(state)!==null)return;
 state.turn++;
 if(!repeat){state.current=(state.current+1)%state.players.length;state.cycle++;}
 for(const p of state.players)for(const s of [...p.systems]){for(const illness of s.illnesses){if(illness.type==='fungica'&&!illness.grown&&illness.due!==null&&state.cycle>=illness.due){illness.level++;illness.grown=true;record(state,`La infección fúngica del Inmunológico de ${p.name} crece un nivel.`);}}checkCollapse(state,p,s);}
 checkWinner(state);
}
export function playCard(state,handIndex,move={}){
 assert(state.mode==='duel'&&state.winner===null,'Esta partida ha terminado.');const actor=state.current,player=state.players[actor],id=player.hand[handIndex];assert(id,'Selecciona una carta.');
 const valid=legalMoves(state,id).some(m=>JSON.stringify(m)===JSON.stringify(move));assert(valid,'Esa carta no puede usarse en ese destino.');
 const card=cards[id];player.hand.splice(handIndex,1);const system=findSystem(state,move),target=state.players[move.owner];let draw=true,repeat=false;
 if(card.kind==='system')player.systems.push(organ(id));
 else if(card.kind==='infection')addInfection(state,target,system,id);
 else if(card.kind==='defense'){defend(state,system,id);if(move.owner!==actor)state.pandemics.forEach(event=>{if(event.owner===actor)event.owner=move.owner;});}
 else{
  if(id==='pandemia'){state.pandemics.push({owner:actor});for(const p of state.players)for(const s of [...p.systems])addInfection(state,p,s,'pandemia',null);}
  else{
   state.discard.push(id);
   if(id==='reinicio'){for(const s of player.systems){s.illnesses.forEach(i=>discardIllness(state,i));s.illnesses=[];}player.resetNext=true;draw=false;}
   if(id==='aislamiento')target.blocked=1;
   if(id==='intervencion'){for(let i=0;i<2;i++){const index=Math.floor(random(state)*target.hand.length);state.discard.push(target.hand.splice(index,1)[0]);}drawToThree(state,target);}
   if(id==='sabotaje'){if(move.remove==='vacuna'){system.vaccine=false;state.discard.push('vacuna');checkCollapse(state,target,system);}else system.memory=false;}
   if(id==='interferencia'){target.systems.splice(target.systems.indexOf(system),1);player.systems.push(system);}
   if(id==='reasignacion'){const other=state.players[move.otherOwner],otherSystem=other.systems.find(s=>s.type===move.otherSite),a=target.systems.indexOf(system),b=other.systems.indexOf(otherSystem);target.systems[a]=otherSystem;other.systems[b]=system;}
   if(id==='colapso'){for(const p of state.players){state.discard.push(...p.hand);p.hand=[];}for(const p of state.players)drawToThree(state,p);repeat=true;}
  }
 }
 record(state,`${player.name} juega ${card.name}${move.site?` en ${move.site} de ${target.name}`:''}.`);state.last={id,actor,...move};if(draw)drawToThree(state,player);advance(state,repeat);return state.last;
}
export function discardCards(state,indexes){assert(state.mode==='duel'&&state.winner===null&&!forcedTurn(state),'Ahora no puedes descartar.');const player=state.players[state.current],unique=[...new Set(indexes)].sort((a,b)=>b-a);assert(unique.length>0&&unique.every(i=>Number.isInteger(i)&&i>=0&&i<player.hand.length),'Selecciona al menos una carta para descartar.');for(const i of unique)state.discard.push(player.hand.splice(i,1)[0]);record(state,`${player.name} descarta ${unique.length} carta(s) y repone su mano.`);drawToThree(state,player);state.last={id:'discard',actor:state.current};advance(state);}
export function passForced(state){const reason=forcedTurn(state);assert(reason&&state.winner===null,'No tienes un turno bloqueado.');const player=state.players[state.current];if(reason==='aislamiento')player.blocked--;else player.resetNext=false;drawToThree(state,player);record(state,`${player.name} repone su mano y pasa por ${reason}.`);advance(state);}
export function canImmunize(system){return !system.immune&&stable(system)&&system.vaccine&&system.memory;}
export function immunize(state,site){const player=state.players[state.current],system=player.systems.find(s=>s.type===site);assert(system&&canImmunize(system)&&state.winner===null&&!forcedTurn(state),'Necesitas un sistema limpio con vacuna y memoria.');system.vaccine=false;system.memory=false;system.immune=true;state.discard.push('vacuna');record(state,`${player.name} inmuniza por completo su sistema ${site}.`);checkWinner(state);}
export function botDecision(state){
 const player=state.players[state.current];if(forcedTurn(state))return {kind:'forced'};
 for(const s of player.systems)if(canImmunize(s))return {kind:'immunize',site:s.type};
 const choices=[];player.hand.forEach((id,index)=>legalMoves(state,id).forEach(move=>{const card=cards[id],target=findSystem(state,move);let score=0;
  if(card.kind==='system')score=75+player.systems.filter(stable).length*4;
  if(card.kind==='defense'){score=move.owner===state.current?(target&&load(target)>0?95:45):state.pandemics.some(e=>e.owner===state.current)?100:5;}
  if(card.kind==='infection')score=target?25+load(target)*12+state.players[move.owner].systems.filter(stable).length*6:0;
  if(id==='reinicio')score=player.systems.reduce((n,s)=>n+load(s),0)>2?110:2;
  if(id==='interferencia')score=70;if(id==='reasignacion')score=10;if(id==='sabotaje')score=20;if(id==='aislamiento')score=25;if(id==='intervencion')score=15;if(card.kind==='event')score=id==='colapso'?8:3;
  choices.push({kind:'play',index,move,score:score+random(state)*5});
 }));
 choices.sort((a,b)=>b.score-a.score);return choices[0]||{kind:'discard',indexes:player.hand.map((_,i)=>i)};
}
export function runBot(state){const choice=botDecision(state);if(choice.kind==='forced')passForced(state);else if(choice.kind==='immunize')immunize(state,choice.site);else if(choice.kind==='play')playCard(state,choice.index,choice.move);else discardCards(state,choice.indexes);return choice;}

export function newAdventure({level=2,name='Explorador',seed=Date.now()>>>0}={}){
 const state={version:VERSION,mode:'adventure',level,name:String(name).trim().slice(0,24)||'Explorador',seed,lesson:0,systems:[],site:'adaptativo',quiz:false,quizOrder:[],mistakes:0,lessonMistakes:0,stars:0,completed:false,discard:[],log:[]};
 if(level===1)state.systems=regions.filter(r=>r.id!=='adaptativo').map(r=>organ(r.id));
 prepareLesson(state);return state;
}
export function currentLesson(state){return lessonsFor(state.level)[state.lesson]||null;}
function prepareLesson(state){const lesson=currentLesson(state);state.quiz=false;state.lessonMistakes=0;if(!lesson)return;state.site=lesson.site;if(lesson.action==='cure'){let s=state.systems.find(s=>s.type===lesson.site);if(!s){s=organ(lesson.site);state.systems.push(s);}s.illnesses=[{type:lesson.illness,card:lesson.illness,level:state.level===1?1:2,due:null,grown:lesson.illness==='fungica'}];if(state.level>1&&lesson.illness==='fungica')record(state,'Tras una ronda, el hongo del Inmunológico ha añadido un nivel.');}record(state,lesson.task);}
export function adventureHand(state){const l=currentLesson(state);if(!l||state.quiz||state.completed)return [];const distractors=l.action==='build'?['viral','adaptativo']:l.card==='anticuerpo'?['antibiotico','viral']:l.card==='antibiotico'?['anticuerpo','viral']:l.card==='vacuna'?['bacteriana','antibiotico']:['anticuerpo','viral'];const hand=[l.card,...distractors];const shift=(state.lesson+state.level)%3;return hand.slice(shift).concat(hand.slice(0,shift));}
export function adventurePlay(state,id,site){
 assert(!state.completed&&!state.quiz,'Responde primero a la pregunta.');const l=currentLesson(state);assert(l,'Activa la puerta del equilibrio para terminar.');
 if(site!==l.site){state.mistakes++;state.lessonMistakes++;return {ok:false,message:`Esta misión es en ${regions.find(r=>r.id===l.site).name}. Sigue el mapa.`};}
 const accepted=id===l.card||(state.level>1&&l.action==='cure'&&['respuesta','integral'].includes(l.card)&&['respuesta','integral'].includes(id));
 if(!accepted){state.mistakes++;state.lessonMistakes++;return {ok:false,message:id==='antibiotico'&&l.illness==='viral'?'Los antibióticos actúan contra bacterias, no contra virus. Prueba el anticuerpo.':`Busca ${cards[l.card].name}. ${cards[l.card].text}`};}
 let s=state.systems.find(s=>s.type===site);
 if(l.action==='build'){s=organ(site);state.systems.push(s);}
 if(l.action==='cure')removeLevel(state,s,id);
 if(l.action==='vaccinate'){s.vaccine=true;if(canImmunize(s)){s.vaccine=false;s.memory=false;s.immune=true;}}
 record(state,`${cards[id].name} ayuda al sistema ${site}.`);
 const done=l.action!=='cure'||load(s)===0;
 if(done){state.quiz=true;state.quizOrder=shuffle(state,l.choices.map((_,i)=>i));return {ok:true,done:true,message:l.action==='vaccinate'?'¡Vacuna y memoria forman una inmunización completa!':'¡Lo has conseguido! Descubre algo sobre esta isla.'};}
 return {ok:true,done:false,message:'¡Un nivel menos! Queda otro. Usa una defensa más.'};
}
export function answerAdventure(state,index){assert(state.quiz,'No hay una pregunta pendiente.');const l=currentLesson(state);if(index!==l.correct){state.mistakes++;state.lessonMistakes++;return {ok:false,message:l.explanation};}const earned=Math.max(1,3-state.lessonMistakes);state.stars+=earned;state.lesson++;state.quiz=false;prepareLesson(state);return {ok:true,earned,message:l.explanation};}
export function finishAdventure(state){assert(!currentLesson(state)&&!state.quiz&&state.systems.filter(stable).length>=4,'Primero completa las misiones de las cuatro islas.');state.completed=true;record(state,`¡${state.name} ha restaurado el equilibrio del cuerpo!`);}
export function validState(s){
 const level=s&&[1,2,3].includes(s.level);if(!s||s.version!==VERSION||!level||!Array.isArray(s.log)||s.log.length>80||!s.log.every(l=>typeof l==='string'&&l.length<=1000))return false;
 const validOrgan=o=>o&&regions.some(r=>r.id===o.type)&&Array.isArray(o.illnesses)&&o.illnesses.length<=5&&o.illnesses.every(i=>['viral','bacteriana','fungica','severa','pandemia'].includes(i.type)&&Number.isInteger(i.level)&&i.level>=1&&i.level<=3&&(i.card===null||cards[i.card]?.kind==='infection')&&(i.due===null||Number.isInteger(i.due))&&typeof i.grown==='boolean')&&['vaccine','memory','immune'].every(k=>typeof o[k]==='boolean')&&(o.shield===null||['anticuerpo','antibiotico','respuesta','integral'].includes(o.shield));
 const validOrgans=list=>Array.isArray(list)&&list.length<=5&&new Set(list.map(o=>o.type)).size===list.length&&list.every(validOrgan);
 const validCards=list=>Array.isArray(list)&&list.length<=128&&list.every(id=>!!cards[id]);
 if(s.mode==='adventure')return typeof s.name==='string'&&s.name.length<=24&&Number.isInteger(s.seed)&&Number.isInteger(s.lesson)&&s.lesson>=0&&s.lesson<=lessonsFor(s.level).length&&validOrgans(s.systems)&&regions.some(r=>r.id===s.site)&&typeof s.quiz==='boolean'&&Array.isArray(s.quizOrder)&&s.quizOrder.every(i=>Number.isInteger(i)&&i>=0&&i<=2)&&Number.isInteger(s.stars)&&s.stars>=0&&s.stars<=27&&Number.isInteger(s.mistakes)&&s.mistakes>=0&&Number.isInteger(s.lessonMistakes)&&s.lessonMistakes>=0&&typeof s.completed==='boolean'&&validCards(s.discard);
 if(s.mode!=='duel'||!Array.isArray(s.players)||s.players.length<2||s.players.length>6)return false;
 return s.players.every(p=>typeof p.name==='string'&&p.name.length<=24&&typeof p.bot==='boolean'&&validOrgans(p.systems)&&validCards(p.hand)&&p.hand.length<=3&&Number.isInteger(p.blocked)&&p.blocked>=0&&p.blocked<=1&&typeof p.resetNext==='boolean')&&validCards(s.deck)&&validCards(s.discard)&&Number.isInteger(s.current)&&s.current>=0&&s.current<s.players.length&&(s.winner===null||(Number.isInteger(s.winner)&&s.winner>=0&&s.winner<s.players.length))&&Number.isInteger(s.cycle)&&s.cycle>=0&&Number.isInteger(s.turn)&&s.turn>=1&&Number.isInteger(s.seed)&&Array.isArray(s.pandemics)&&s.pandemics.length<=2&&s.pandemics.every(e=>Number.isInteger(e.owner)&&e.owner>=0&&e.owner<s.players.length);
}
export function transaction(state,fn){const next=clone(state);const result=fn(next);assert(validState(next),'No se pudo validar la partida.');return {state:next,result};}

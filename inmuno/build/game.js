(()=>{var kn=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};function _s(n){if(n===1)return[{...Ai[1],title:"Cuida los pulmones",task:"El microbio es morado. Elige el anticuerpo y ayuda a los pulmones.",question:"\xBFQu\xE9 nos ayuda a respirar?",choices:["Los pulmones","El pelo"],explanation:Ai[0].explanation},{...Ai[4],title:"Cuida el coraz\xF3n",task:"La bacteria es verde. Elige el antibi\xF3tico y cuida esta isla.",question:"\xBFQu\xE9 mueve el coraz\xF3n?",choices:["La sangre","Las nubes"],explanation:Ai[3].explanation},{...Ai[6],illness:"viral",title:"Cuida el cerebro",task:"Elige Respuesta inmunitaria para ayudar al cerebro.",question:"\xBFQu\xE9 nos ayuda a pensar?",choices:["El cerebro","El zapato"],explanation:Ai[5].explanation},{...Ai[8],title:"Cuida las defensas",task:"Elige el escudo multicolor de Defensa integral.",question:"\xBFLas defensas ayudan a protegernos?",choices:["S\xED","No"],explanation:Ai[7].explanation}];let e=Ai.map(t=>({...t,choices:[...t.choices]}));return n===3&&(e[1].question="\xBFPor qu\xE9 el virus coloca 2 niveles al llegar al Respiratorio?",e[1].choices=["Por la afinidad de esa carta en el juego","Porque todos los sistemas reciben siempre 2","Porque un antibi\xF3tico lo refuerza"],e[1].explanation="La afinidad viral con el Respiratorio a\xF1ade un nivel extra en INMUNO.",e[8].question="\xBFCu\xE1ndo crece la infecci\xF3n f\xFAngica en el Inmunol\xF3gico?",e[8].choices=["Tras una ronda, si no se ha eliminado","En cualquier sistema por igual","Solo despu\xE9s de una vacuna"],e[8].explanation="En el juego, su afinidad con el Inmunol\xF3gico a\xF1ade un nivel una vez, al pasar una ronda."),e}var Vn,Gn,kp,gt,Ou,Hn,Ai,zr=kn(()=>{Vn=[{id:"respiratorio",name:"Respiratorio",short:"Respirar",color:"#b191ec",icon:"\u25C9",position:[-8,-5.5],fact:"Los pulmones nos ayudan a tomar ox\xEDgeno del aire.",gradeFact:"En los pulmones, el ox\xEDgeno pasa a la sangre y sale el di\xF3xido de carbono."},{id:"circulatorio",name:"Circulatorio",short:"Transportar",color:"#f17d95",icon:"\u2665",position:[8,-5.5],fact:"El coraz\xF3n impulsa la sangre por todo el cuerpo.",gradeFact:"La sangre transporta ox\xEDgeno, nutrientes y c\xE9lulas de defensa."},{id:"nervioso",name:"Nervioso",short:"Coordinar",color:"#78aaf1",icon:"\u2727",position:[-8,6.5],fact:"El cerebro recibe informaci\xF3n y coordina lo que hacemos.",gradeFact:"El cerebro, la m\xE9dula y los nervios intercambian se\xF1ales para coordinar el cuerpo."},{id:"inmunologico",name:"Inmunol\xF3gico",short:"Proteger",color:"#5fcdbd",icon:"\u271A",position:[8,6.5],fact:"Las defensas ayudan a reconocer y combatir amenazas.",gradeFact:"Las c\xE9lulas del sistema inmunol\xF3gico reconocen amenazas y algunas guardan memoria."},{id:"adaptativo",name:"Adaptativo",short:"Conectar",color:"#edbe60",icon:"\u221E",position:[0,0],fact:"Esta estaci\xF3n es el comod\xEDn del juego. Conecta todas las rutas.",gradeFact:"En INMUNO, el sistema adaptativo es un comod\xEDn y no recibe bonificaciones de afinidad."}],Gn=[{id:1,name:"Exploradores",grades:"1.\xBA\u20132.\xBA",description:"Cuatro misiones cortas, dos respuestas y muchas pistas."},{id:2,name:"Defensores",grades:"3.\xBA\u20134.\xBA",description:"Construye, cura, vacuna y descubre la memoria inmunol\xF3gica."},{id:3,name:"Estrategas",grades:"5.\xBA\u20136.\xBA",description:"Afinidades, niveles, inmunizaci\xF3n y todas las cartas del duelo."}],kp=[["respiratorio","Sistema respiratorio","system",10,"Construye la estaci\xF3n de los pulmones."],["circulatorio","Sistema circulatorio","system",10,"Construye la estaci\xF3n del coraz\xF3n."],["nervioso","Sistema nervioso","system",10,"Construye la estaci\xF3n del cerebro."],["inmunologico","Sistema inmunol\xF3gico","system",10,"Construye la estaci\xF3n de las defensas."],["adaptativo","Sistema adaptativo","system",4,"Comod\xEDn: cuenta como un sistema distinto."],["viral","Infecci\xF3n viral","infection",12,"A\xF1ade 1 nivel; en Respiratorio, a\xF1ade 2."],["bacteriana","Infecci\xF3n bacteriana","infection",10,"A\xF1ade 1 nivel; en Circulatorio, a\xF1ade 2."],["fungica","Infecci\xF3n f\xFAngica","infection",8,"A\xF1ade 1 nivel. En Inmunol\xF3gico, crece tras una ronda."],["severa","Infecci\xF3n severa","infection",4,"A\xF1ade 2 niveles de infecci\xF3n."],["mutacion","Mutaci\xF3n cr\xEDtica","infection",2,"Solo sobre 1 nivel y sin defensas: a\xF1ade 2 y colapsa."],["anticuerpo","Anticuerpo","defense",8,"Retira 1 nivel viral. Al eliminar el \xFAltimo, deja memoria."],["antibiotico","Antibi\xF3tico","defense",8,"Retira 1 nivel bacteriano. No elimina virus."],["vacuna","Vacuna","defense",6,"Bloquea virus y eleva a 4 niveles el umbral de colapso."],["respuesta","Respuesta inmunitaria","defense",4,"Retira 1 nivel de cualquier infecci\xF3n."],["integral","Defensa integral","defense",4,"Retira 1 nivel de cualquier tipo o coloca un escudo."],["reasignacion","Reasignaci\xF3n sist\xE9mica","treatment",3,"Intercambia dos sistemas completos, sin duplicarlos."],["interferencia","Interferencia estrat\xE9gica","treatment",3,"Obt\xE9n un sistema rival que todav\xEDa no tengas."],["reinicio","Reinicio inmunol\xF3gico","treatment",2,"Limpia tus infecciones; ahora no robas y tu siguiente turno es solo de robo."],["aislamiento","Aislamiento","treatment",2,"El rival no puede jugar en su siguiente turno."],["sabotaje","Sabotaje m\xE9dico","treatment",2,"Retira una vacuna o una ficha de memoria."],["intervencion","Intervenci\xF3n forzada","treatment",2,"El rival descarta dos cartas al azar y las repone."],["pandemia","Pandemia global Z7","event",2,"A\xF1ade 1 nivel a los sistemas. Su portador no puede ganar."],["colapso","Colapso inmunitario","event",2,"Todos cambian su mano y vuelves a jugar."]],gt=Object.fromEntries(kp.map(([n,e,t,i,s])=>[n,{id:n,name:e,kind:t,count:i,text:s,art:`assets/cartas/${n}.png`}])),Ou={system:"Sistema",infection:"Infecci\xF3n",defense:"Defensa",treatment:"Tratamiento",event:"Evento global"},Hn=n=>Vn.find(e=>e.id===n),Ai=[{site:"respiratorio",action:"build",card:"respiratorio",title:"\xA1A respirar!",task:"Elige el sistema respiratorio y constr\xFAyelo en la isla de los pulmones.",question:"\xBFQu\xE9 nos ayuda a respirar?",choices:["Los pulmones","Los huesos","El cabello"],correct:0,explanation:"Los pulmones toman ox\xEDgeno del aire y expulsan di\xF3xido de carbono."},{site:"respiratorio",action:"cure",card:"anticuerpo",illness:"viral",title:"Visitantes morados",task:"Usa anticuerpos para retirar todos los niveles virales del Respiratorio.",question:"\xBFQu\xE9 deja el anticuerpo cuando elimina la \xFAltima infecci\xF3n viral?",choices:["Memoria inmunol\xF3gica","Una infecci\xF3n nueva","Un antibi\xF3tico"],correct:0,explanation:"En INMUNO, eliminar la \xFAltima infecci\xF3n viral con un anticuerpo deja una ficha de memoria."},{site:"respiratorio",action:"vaccinate",card:"vacuna",title:"La defensa recuerda",task:"A\xF1ade una vacuna al sistema con memoria y activa la inmunizaci\xF3n.",question:"En el juego, \xBFqu\xE9 dos elementos forman la inmunizaci\xF3n completa?",choices:["Vacuna y memoria","Dos infecciones","Dos sistemas iguales"],correct:0,explanation:"Una vacuna y una ficha de memoria pueden convertirse en inmunizaci\xF3n completa. Es una regla del juego."},{site:"circulatorio",action:"build",card:"circulatorio",title:"El gran transporte",task:"Construye el sistema circulatorio en la isla del coraz\xF3n.",question:"\xBFQu\xE9 hace el coraz\xF3n?",choices:["Impulsa la sangre","Produce pensamientos","Guarda el aire"],correct:0,explanation:"El coraz\xF3n impulsa la sangre, que transporta ox\xEDgeno, nutrientes y c\xE9lulas de defensa."},{site:"circulatorio",action:"cure",card:"antibiotico",illness:"bacteriana",title:"Bacterias a la vista",task:"Elige antibi\xF3ticos para retirar los niveles bacterianos del Circulatorio.",question:"\xBFContra qu\xE9 act\xFAan los antibi\xF3ticos?",choices:["Bacterias","Virus","Todos los microbios por igual"],correct:0,explanation:"Los antibi\xF3ticos act\xFAan contra bacterias; no eliminan virus."},{site:"nervioso",action:"build",card:"nervioso",title:"Mensajes a toda velocidad",task:"Construye la estaci\xF3n del sistema nervioso.",question:"\xBFQu\xE9 coordina el sistema nervioso?",choices:["Movimientos y respuestas","Solo el color de los ojos","El tama\xF1o de las cartas"],correct:0,explanation:"El sistema nervioso recibe informaci\xF3n y coordina movimientos y respuestas."},{site:"nervioso",action:"cure",card:"respuesta",illness:"severa",title:"Una respuesta en equipo",task:"Retira la infecci\xF3n con Respuesta inmunitaria o Defensa integral.",question:"Una infecci\xF3n severa tiene 2 niveles. \xBFCu\xE1ntas defensas que retiran 1 nivel necesitas?",choices:["Dos","Una","Ninguna"],correct:0,explanation:"Cada defensa retira un nivel. Para retirar dos niveles hacen falta dos acciones."},{site:"inmunologico",action:"build",card:"inmunologico",title:"La ciudad de los guardianes",task:"Construye el sistema inmunol\xF3gico en la isla del escudo.",question:"\xBFQu\xE9 funci\xF3n tienen las defensas?",choices:["Reconocer y combatir amenazas","Hacer que todos los microbios sean malos","Evitar que aprendamos"],correct:0,explanation:"Las defensas reconocen y combaten amenazas. Muchos microorganismos son inofensivos o beneficiosos."},{site:"inmunologico",action:"cure",card:"integral",illness:"fungica",title:"El \xFAltimo equilibrio",task:"Retira los niveles f\xFAngicos con Defensa integral o Respuesta inmunitaria.",question:"En INMUNO, \xBFqu\xE9 significa un sistema estable?",choices:["No tiene infecci\xF3n","Tiene m\xE1s microbios","Ha colapsado"],correct:0,explanation:"Un sistema estable est\xE1 libre de infecci\xF3n y puede estar protegido, vacunado, con memoria o inmunizado."}]});function Ka(n){return{type:n,illnesses:[],shield:null,vaccine:!1,memory:!1,immune:!1}}function yn(n,e){n.log.unshift(e),n.log=n.log.slice(0,80)}function ja(n){return n.seed=Math.imul(1664525,n.seed)+1013904223>>>0,n.seed/4294967296}function zu(n,e){for(let t=e.length-1;t>0;t--){let i=Math.floor(ja(n)*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}function Gp(n=3){return Object.values(gt).filter(e=>n===3||(n===2?!["treatment","event"].includes(e.kind)&&e.id!=="mutacion":e.kind==="system"||["viral","bacteriana","anticuerpo","antibiotico","respuesta","integral"].includes(e.id))).flatMap(e=>Array(e.count).fill(e.id))}function ku({names:n=["T\xFA","Microbot"],bots:e=[!1,!0],level:t=2,seed:i=Date.now()>>>0}={}){xn(n.length>=2&&n.length<=6,"Elige entre dos y seis participantes.");let s={version:Ec,mode:"duel",level:t,seed:i,players:n.map((r,a)=>({name:String(r).trim().slice(0,24)||`Equipo ${a+1}`,bot:!!e[a],systems:[],hand:[],blocked:0,resetNext:!1})),deck:[],discard:[],pandemics:[],current:0,cycle:0,turn:1,winner:null,log:[],last:null};s.deck=zu(s,Gp(t)),s.current=Math.floor(ja(s)*n.length);for(let r of s.players)Xs(s,r);return yn(s,`\xA1Comienza INMUNO! Juega ${s.players[s.current].name}.`),s}function Xs(n,e){for(;e.hand.length<3&&(!n.deck.length&&n.discard.length&&(n.deck=n.discard.splice(0).reverse()),!!n.deck.length);)e.hand.push(n.deck.pop())}function wc(n,e){e.card&&n.discard.push(e.card)}function Hp(n,e,t){n.discard.push(t.type),t.illnesses.forEach(i=>wc(n,i)),t.shield&&n.discard.push(t.shield),t.vaccine&&n.discard.push("vacuna"),e.systems.splice(e.systems.indexOf(t),1),yn(n,`El sistema ${t.type} de ${e.name} ha colapsado.`)}function Tc(n,e,t){vn(t)>=(t.vaccine?4:3)&&Hp(n,e,t)}function Fu(n,e,t,i,s=i){if(t.immune){s&&n.discard.push(s);return}if(i==="viral"&&t.vaccine){s&&n.discard.push(s),yn(n,"La vacuna bloquea la infecci\xF3n viral.");return}if(i==="viral"&&t.memory){t.memory=!1,s&&n.discard.push(s),yn(n,"La memoria reconoce el virus y lo bloquea.");return}let r=i==="severa"||i==="mutacion"?2:1;(i==="viral"&&t.type==="respiratorio"||i==="bacteriana"&&t.type==="circulatorio")&&r++;let o=!!t.shield;if(o&&(n.discard.push(t.shield),t.shield=null,(i!=="fungica"||t.type!=="inmunologico")&&r--),r<=0){s&&n.discard.push(s);return}t.illnesses.push({type:i,level:r,card:s,due:i==="fungica"&&t.type==="inmunologico"&&!o?n.cycle+n.players.length:null,grown:!1}),Tc(n,e,t)}function Vu(n,e){let t=e==="anticuerpo"?["viral"]:e==="antibiotico"?["bacteriana"]:["viral","bacteriana","fungica","severa","pandemia"];return n.illnesses.filter(i=>t.includes(i.type)).sort((i,s)=>s.level-i.level)}function Wp(n,e){return n.immune?!1:e==="vacuna"?!n.vaccine:vn(n)>0?Vu(n,e).length>0:n.shield?!1:e==="anticuerpo"?n.type==="respiratorio":e==="antibiotico"?n.type==="circulatorio":["respuesta","integral"].includes(e)}function Gu(n,e,t){let i=Vu(e,t)[0];xn(i,"Esta defensa no retira esa infecci\xF3n."),i.level--,i.level<=0&&(e.illnesses.splice(e.illnesses.indexOf(i),1),wc(n,i),t==="anticuerpo"&&i.type==="viral"&&(e.memory=!0))}function Xp(n,e,t){if(t==="vacuna"){e.vaccine=!0;return}vn(e)>0?(Gu(n,e,t),n.discard.push(t)):e.shield=t}function Bu(n,e,t){return n.systems.some(i=>i!==e&&i.type===t.type)}function mi(n){let e=n.players[n.current];return e.blocked?"aislamiento":e.resetNext?"reinicio":null}function Hi(n,e){if(n.mode!=="duel"||n.winner!==null||mi(n)||!gt[e])return[];let t=n.players[n.current],i=gt[e],s=[];if(i.kind==="system")return t.systems.some(r=>r.type===e)||s.push({owner:n.current,site:e}),s;if(i.kind==="infection")return n.players.forEach((r,a)=>{a!==n.current&&r.systems.forEach(o=>{o.immune||e==="mutacion"&&(vn(o)!==1||o.shield||o.vaccine||o.memory)||s.push({owner:a,site:o.type})})}),s;if(i.kind==="defense")return n.players.forEach((r,a)=>r.systems.forEach(o=>{Wp(o,e)&&s.push({owner:a,site:o.type})})),s;if(i.kind==="event")return[{}];if(e==="reinicio")return[{}];if(e==="aislamiento"||e==="intervencion")return n.players.forEach((r,a)=>{a!==n.current&&(e==="aislamiento"?!r.blocked:r.hand.length>=2)&&s.push({owner:a})}),s;if(e==="sabotaje")return n.players.forEach((r,a)=>r.systems.forEach(o=>{o.vaccine&&s.push({owner:a,site:o.type,remove:"vacuna"}),o.memory&&s.push({owner:a,site:o.type,remove:"memoria"})})),s;if(e==="interferencia")return n.players.forEach((r,a)=>{a!==n.current&&r.systems.forEach(o=>{!o.immune&&!t.systems.some(l=>l.type===o.type)&&s.push({owner:a,site:o.type})})}),s;if(e==="reasignacion")for(let r=0;r<n.players.length;r++)for(let a=r+1;a<n.players.length;a++)for(let o of n.players[r].systems)for(let l of n.players[a].systems)!o.immune&&!l.immune&&!Bu(n.players[r],o,l)&&!Bu(n.players[a],l,o)&&s.push({owner:r,site:o.type,otherOwner:a,otherSite:l.type});return s}function Hu(n,e){return n.players[e.owner]?.systems.find(t=>t.type===e.site)}function Sc(n){if(n.winner!==null)return n.winner;for(let e=0;e<n.players.length;e++){let t=n.players[e];if(t.systems.filter(Ci).length>=4&&!t.blocked&&!n.pandemics.some(i=>i.owner===e))return n.winner=e,yn(n,`\xA1${t.name} ha conseguido cuatro sistemas estables!`),e}return null}function Ac(n,e=!1){if(Sc(n)===null){n.turn++,e||(n.current=(n.current+1)%n.players.length,n.cycle++);for(let t of n.players)for(let i of[...t.systems]){for(let s of i.illnesses)s.type==="fungica"&&!s.grown&&s.due!==null&&n.cycle>=s.due&&(s.level++,s.grown=!0,yn(n,`La infecci\xF3n f\xFAngica del Inmunol\xF3gico de ${t.name} crece un nivel.`));Tc(n,t,i)}Sc(n)}}function Cc(n,e,t={}){xn(n.mode==="duel"&&n.winner===null,"Esta partida ha terminado.");let i=n.current,s=n.players[i],r=s.hand[e];xn(r,"Selecciona una carta.");let a=Hi(n,r).some(h=>JSON.stringify(h)===JSON.stringify(t));xn(a,"Esa carta no puede usarse en ese destino.");let o=gt[r];s.hand.splice(e,1);let l=Hu(n,t),c=n.players[t.owner],u=!0,f=!1;if(o.kind==="system")s.systems.push(Ka(r));else if(o.kind==="infection")Fu(n,c,l,r);else if(o.kind==="defense")Xp(n,l,r),t.owner!==i&&n.pandemics.forEach(h=>{h.owner===i&&(h.owner=t.owner)});else if(r==="pandemia"){n.pandemics.push({owner:i});for(let h of n.players)for(let p of[...h.systems])Fu(n,h,p,"pandemia",null)}else{if(n.discard.push(r),r==="reinicio"){for(let h of s.systems)h.illnesses.forEach(p=>wc(n,p)),h.illnesses=[];s.resetNext=!0,u=!1}if(r==="aislamiento"&&(c.blocked=1),r==="intervencion"){for(let h=0;h<2;h++){let p=Math.floor(ja(n)*c.hand.length);n.discard.push(c.hand.splice(p,1)[0])}Xs(n,c)}if(r==="sabotaje"&&(t.remove==="vacuna"?(l.vaccine=!1,n.discard.push("vacuna"),Tc(n,c,l)):l.memory=!1),r==="interferencia"&&(c.systems.splice(c.systems.indexOf(l),1),s.systems.push(l)),r==="reasignacion"){let h=n.players[t.otherOwner],p=h.systems.find(g=>g.type===t.otherSite),m=c.systems.indexOf(l),v=h.systems.indexOf(p);c.systems[m]=p,h.systems[v]=l}if(r==="colapso"){for(let h of n.players)n.discard.push(...h.hand),h.hand=[];for(let h of n.players)Xs(n,h);f=!0}}return yn(n,`${s.name} juega ${o.name}${t.site?` en ${t.site} de ${c.name}`:""}.`),n.last={id:r,actor:i,...t},u&&Xs(n,s),Ac(n,f),n.last}function Rc(n,e){xn(n.mode==="duel"&&n.winner===null&&!mi(n),"Ahora no puedes descartar.");let t=n.players[n.current],i=[...new Set(e)].sort((s,r)=>r-s);xn(i.length>0&&i.every(s=>Number.isInteger(s)&&s>=0&&s<t.hand.length),"Selecciona al menos una carta para descartar.");for(let s of i)n.discard.push(t.hand.splice(s,1)[0]);yn(n,`${t.name} descarta ${i.length} carta(s) y repone su mano.`),Xs(n,t),n.last={id:"discard",actor:n.current},Ac(n)}function Pc(n){let e=mi(n);xn(e&&n.winner===null,"No tienes un turno bloqueado.");let t=n.players[n.current];e==="aislamiento"?t.blocked--:t.resetNext=!1,Xs(n,t),yn(n,`${t.name} repone su mano y pasa por ${e}.`),Ac(n)}function kr(n){return!n.immune&&Ci(n)&&n.vaccine&&n.memory}function Ic(n,e){let t=n.players[n.current],i=t.systems.find(s=>s.type===e);xn(i&&kr(i)&&n.winner===null&&!mi(n),"Necesitas un sistema limpio con vacuna y memoria."),i.vaccine=!1,i.memory=!1,i.immune=!0,n.discard.push("vacuna"),yn(n,`${t.name} inmuniza por completo su sistema ${e}.`),Sc(n)}function qp(n){let e=n.players[n.current];if(mi(n))return{kind:"forced"};for(let i of e.systems)if(kr(i))return{kind:"immunize",site:i.type};let t=[];return e.hand.forEach((i,s)=>Hi(n,i).forEach(r=>{let a=gt[i],o=Hu(n,r),l=0;a.kind==="system"&&(l=75+e.systems.filter(Ci).length*4),a.kind==="defense"&&(l=r.owner===n.current?o&&vn(o)>0?95:45:n.pandemics.some(c=>c.owner===n.current)?100:5),a.kind==="infection"&&(l=o?25+vn(o)*12+n.players[r.owner].systems.filter(Ci).length*6:0),i==="reinicio"&&(l=e.systems.reduce((c,u)=>c+vn(u),0)>2?110:2),i==="interferencia"&&(l=70),i==="reasignacion"&&(l=10),i==="sabotaje"&&(l=20),i==="aislamiento"&&(l=25),i==="intervencion"&&(l=15),a.kind==="event"&&(l=i==="colapso"?8:3),t.push({kind:"play",index:s,move:r,score:l+ja(n)*5})})),t.sort((i,s)=>s.score-i.score),t[0]||{kind:"discard",indexes:e.hand.map((i,s)=>s)}}function Wu(n){let e=qp(n);return e.kind==="forced"?Pc(n):e.kind==="immunize"?Ic(n,e.site):e.kind==="play"?Cc(n,e.index,e.move):Rc(n,e.indexes),e}function Xu({level:n=2,name:e="Explorador",seed:t=Date.now()>>>0}={}){let i={version:Ec,mode:"adventure",level:n,name:String(e).trim().slice(0,24)||"Explorador",seed:t,lesson:0,systems:[],site:"adaptativo",quiz:!1,quizOrder:[],mistakes:0,lessonMistakes:0,stars:0,completed:!1,discard:[],log:[]};return n===1&&(i.systems=Vn.filter(s=>s.id!=="adaptativo").map(s=>Ka(s.id))),qu(i),i}function gi(n){return _s(n.level)[n.lesson]||null}function qu(n){let e=gi(n);if(n.quiz=!1,n.lessonMistakes=0,!!e){if(n.site=e.site,e.action==="cure"){let t=n.systems.find(i=>i.type===e.site);t||(t=Ka(e.site),n.systems.push(t)),t.illnesses=[{type:e.illness,card:e.illness,level:n.level===1?1:2,due:null,grown:e.illness==="fungica"}],n.level>1&&e.illness==="fungica"&&yn(n,"Tras una ronda, el hongo del Inmunol\xF3gico ha a\xF1adido un nivel.")}yn(n,e.task)}}function Lc(n){let e=gi(n);if(!e||n.quiz||n.completed)return[];let t=e.action==="build"?["viral","adaptativo"]:e.card==="anticuerpo"?["antibiotico","viral"]:e.card==="antibiotico"?["anticuerpo","viral"]:e.card==="vacuna"?["bacteriana","antibiotico"]:["anticuerpo","viral"],i=[e.card,...t],s=(n.lesson+n.level)%3;return i.slice(s).concat(i.slice(0,s))}function $u(n,e,t){xn(!n.completed&&!n.quiz,"Responde primero a la pregunta.");let i=gi(n);if(xn(i,"Activa la puerta del equilibrio para terminar."),t!==i.site)return n.mistakes++,n.lessonMistakes++,{ok:!1,message:`Esta misi\xF3n es en ${Vn.find(o=>o.id===i.site).name}. Sigue el mapa.`};if(!(e===i.card||n.level>1&&i.action==="cure"&&["respuesta","integral"].includes(i.card)&&["respuesta","integral"].includes(e)))return n.mistakes++,n.lessonMistakes++,{ok:!1,message:e==="antibiotico"&&i.illness==="viral"?"Los antibi\xF3ticos act\xFAan contra bacterias, no contra virus. Prueba el anticuerpo.":`Busca ${gt[i.card].name}. ${gt[i.card].text}`};let r=n.systems.find(o=>o.type===t);return i.action==="build"&&(r=Ka(t),n.systems.push(r)),i.action==="cure"&&Gu(n,r,e),i.action==="vaccinate"&&(r.vaccine=!0,kr(r)&&(r.vaccine=!1,r.memory=!1,r.immune=!0)),yn(n,`${gt[e].name} ayuda al sistema ${t}.`),i.action!=="cure"||vn(r)===0?(n.quiz=!0,n.quizOrder=zu(n,i.choices.map((o,l)=>l)),{ok:!0,done:!0,message:i.action==="vaccinate"?"\xA1Vacuna y memoria forman una inmunizaci\xF3n completa!":"\xA1Lo has conseguido! Descubre algo sobre esta isla."}):{ok:!0,done:!1,message:"\xA1Un nivel menos! Queda otro. Usa una defensa m\xE1s."}}function Yu(n,e){xn(n.quiz,"No hay una pregunta pendiente.");let t=gi(n);if(e!==t.correct)return n.mistakes++,n.lessonMistakes++,{ok:!1,message:t.explanation};let i=Math.max(1,3-n.lessonMistakes);return n.stars+=i,n.lesson++,n.quiz=!1,qu(n),{ok:!0,earned:i,message:t.explanation}}function Zu(n){xn(!gi(n)&&!n.quiz&&n.systems.filter(Ci).length>=4,"Primero completa las misiones de las cuatro islas."),n.completed=!0,yn(n,`\xA1${n.name} ha restaurado el equilibrio del cuerpo!`)}function Qa(n){let e=n&&[1,2,3].includes(n.level);if(!n||n.version!==Ec||!e||!Array.isArray(n.log)||n.log.length>80||!n.log.every(r=>typeof r=="string"&&r.length<=1e3))return!1;let t=r=>r&&Vn.some(a=>a.id===r.type)&&Array.isArray(r.illnesses)&&r.illnesses.length<=5&&r.illnesses.every(a=>["viral","bacteriana","fungica","severa","pandemia"].includes(a.type)&&Number.isInteger(a.level)&&a.level>=1&&a.level<=3&&(a.card===null||gt[a.card]?.kind==="infection")&&(a.due===null||Number.isInteger(a.due))&&typeof a.grown=="boolean")&&["vaccine","memory","immune"].every(a=>typeof r[a]=="boolean")&&(r.shield===null||["anticuerpo","antibiotico","respuesta","integral"].includes(r.shield)),i=r=>Array.isArray(r)&&r.length<=5&&new Set(r.map(a=>a.type)).size===r.length&&r.every(t),s=r=>Array.isArray(r)&&r.length<=128&&r.every(a=>!!gt[a]);return n.mode==="adventure"?typeof n.name=="string"&&n.name.length<=24&&Number.isInteger(n.seed)&&Number.isInteger(n.lesson)&&n.lesson>=0&&n.lesson<=_s(n.level).length&&i(n.systems)&&Vn.some(r=>r.id===n.site)&&typeof n.quiz=="boolean"&&Array.isArray(n.quizOrder)&&n.quizOrder.every(r=>Number.isInteger(r)&&r>=0&&r<=2)&&Number.isInteger(n.stars)&&n.stars>=0&&n.stars<=27&&Number.isInteger(n.mistakes)&&n.mistakes>=0&&Number.isInteger(n.lessonMistakes)&&n.lessonMistakes>=0&&typeof n.completed=="boolean"&&s(n.discard):n.mode!=="duel"||!Array.isArray(n.players)||n.players.length<2||n.players.length>6?!1:n.players.every(r=>typeof r.name=="string"&&r.name.length<=24&&typeof r.bot=="boolean"&&i(r.systems)&&s(r.hand)&&r.hand.length<=3&&Number.isInteger(r.blocked)&&r.blocked>=0&&r.blocked<=1&&typeof r.resetNext=="boolean")&&s(n.deck)&&s(n.discard)&&Number.isInteger(n.current)&&n.current>=0&&n.current<n.players.length&&(n.winner===null||Number.isInteger(n.winner)&&n.winner>=0&&n.winner<n.players.length)&&Number.isInteger(n.cycle)&&n.cycle>=0&&Number.isInteger(n.turn)&&n.turn>=1&&Number.isInteger(n.seed)&&Array.isArray(n.pandemics)&&n.pandemics.length<=2&&n.pandemics.every(r=>Number.isInteger(r.owner)&&r.owner>=0&&r.owner<n.players.length)}function Ju(n,e){let t=Vp(n),i=e(t);return xn(Qa(t),"No se pudo validar la partida."),{state:t,result:i}}var Ec,Vp,xn,vn,Ci,Dc=kn(()=>{zr();Ec=1,Vp=n=>structuredClone(n),xn=(n,e)=>{if(!n)throw Error(e)},vn=n=>n.illnesses.reduce((e,t)=>e+t.level,0),Ci=n=>vn(n)===0});function Yp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ta(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cf(){let n=ta("canvas");return n.style.display="block",n}function Oh(...n){let e="THREE."+n.shift();ur?ur("log",e,...n):console.log(e,...n)}function hf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function je(...n){n=hf(n);let e="THREE."+n.shift();if(ur)ur("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Qe(...n){n=hf(n);let e="THREE."+n.shift();if(ur)ur("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ss(...n){let e=n.join(" ");e in Ku||(Ku[e]=!0,je(...n))}function uf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Os(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function ot(n,e,t){return Math.max(e,Math.min(t,n))}function Fh(n,e){return(n%e+e)%e}function Jp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Kp(n,e,t){return n!==e?(t-n)/(e-n):0}function Zr(n,e,t){return(1-t)*n+t*e}function jp(n,e,t,i){return Zr(n,e,1-Math.exp(-t*i))}function Qp(n,e=1){return e-Math.abs(Fh(n,e*2)-e)}function em(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function tm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function nm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function im(n,e){return n+Math.random()*(e-n)}function sm(n){return n*(.5-Math.random())}function rm(n){n!==void 0&&(ju=n);let e=ju+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function am(n){return n*Yr}function om(n){return n*dr}function lm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function cm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function hm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function um(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),f=r((e-i)/2),h=a((e-i)/2),p=r((i-e)/2),m=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*m,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*m,o*c);break;case"ZYZ":n.set(l*m,l*p,o*u,o*c);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ar(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dm(){let n={enabled:!0,workingColorSpace:Qr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===vt&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(s.r=or(s.r),s.g=or(s.g),s.b=or(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?ea:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ss("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ss("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Qr]:{primaries:e,whitePoint:i,transfer:ea,toXYZ:ed,fromXYZ:td,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:ed,fromXYZ:td,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),n}function Ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function or(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Oc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?No.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}function zc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function $c(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){vs.fromArray(n,r);let o=s.x*Math.abs(vs.x)+s.y*Math.abs(vs.y)+s.z*Math.abs(vs.z),l=e.dot(vs),c=t.dot(vs),u=i.dot(vs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}function Cm(n,e,t,i,s,r,a,o){let l;if(e.side===jt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===os,o),l===null)return null;mo.copy(o),mo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(mo);return c<t.near||c>t.far?null:{distance:c,point:mo.clone(),object:n}}function go(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,ho),n.getVertexPosition(l,uo),n.getVertexPosition(c,fo);let u=Cm(n,e,t,i,ho,uo,fo,dd);if(u){let f=new D;Zi.getBarycoord(dd,ho,uo,fo,f),s&&(u.uv=Zi.getInterpolatedAttribute(s,o,l,c,f,new fe)),r&&(u.uv1=Zi.getInterpolatedAttribute(r,o,l,c,f,new fe)),a&&(u.normal=Zi.getInterpolatedAttribute(a,o,l,c,f,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new D,materialIndex:0};Zi.getNormal(ho,uo,fo,h.normal),u.face=h,u.barycoord=f}return u}function Bh(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,p*=u,s(a,o,h,p)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}function _d(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function Im(n,e){let t=1-n;return t*t*e}function Lm(n,e){return 2*(1-n)*n*e}function Dm(n,e){return n*n*e}function Jr(n,e,t,i){return Im(n,e)+Lm(n,t)+Dm(n,i)}function Nm(n,e){let t=1-n;return t*t*t*e}function Um(n,e){let t=1-n;return 3*t*t*n*e}function Om(n,e){return 3*(1-n)*n*n*e}function Fm(n,e){return n*n*n*e}function Kr(n,e,t,i,s){return Nm(n,e)+Um(n,t)+Om(n,i)+Fm(n,s)}function Bm(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=pf(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Hm(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let u=o,f=l;for(let h=t;h<s;h+=t){let p=n[h],m=n[h+1];p<o&&(o=p),m<l&&(l=m),p>u&&(u=p),m>f&&(f=m)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return xa(r,a,t,o,l,c,0),a}function pf(n,e,t,i,s){let r;if(s===eg(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=xd(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=xd(a/i|0,n[a],n[a+1],r);return r&&xr(r,r.next)&&(ya(r),r=r.next),r}function Cs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(xr(t,t.next)||Lt(t.prev,t,t.next)===0)){if(ya(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function xa(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Ym(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?km(n,i,s,r):zm(n)){e.push(l.i,n.i,c.i),ya(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Vm(Cs(n),e),xa(n,e,t,i,s,r,2)):a===2&&Gm(n,e,t,i,s,r):xa(Cs(n),e,t,i,s,r,1);break}}}function zm(n){let e=n.prev,t=n,i=n.next;if(Lt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(s,r,a),f=Math.min(o,l,c),h=Math.max(s,r,a),p=Math.max(o,l,c),m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=f&&m.y<=p&&$r(s,o,r,l,a,c,m.x,m.y)&&Lt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function km(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Lt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,h=a.y,p=Math.min(o,l,c),m=Math.min(u,f,h),v=Math.max(o,l,c),g=Math.max(u,f,h),d=lh(p,m,e,t,i),M=lh(v,g,e,t,i),T=n.prevZ,y=n.nextZ;for(;T&&T.z>=d&&y&&y.z<=M;){if(T.x>=p&&T.x<=v&&T.y>=m&&T.y<=g&&T!==s&&T!==a&&$r(o,u,l,f,c,h,T.x,T.y)&&Lt(T.prev,T,T.next)>=0||(T=T.prevZ,y.x>=p&&y.x<=v&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&$r(o,u,l,f,c,h,y.x,y.y)&&Lt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;T&&T.z>=d;){if(T.x>=p&&T.x<=v&&T.y>=m&&T.y<=g&&T!==s&&T!==a&&$r(o,u,l,f,c,h,T.x,T.y)&&Lt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;y&&y.z<=M;){if(y.x>=p&&y.x<=v&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&$r(o,u,l,f,c,h,y.x,y.y)&&Lt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Vm(n,e){let t=n;do{let i=t.prev,s=t.next.next;!xr(i,s)&&gf(i,t,t.next,s)&&va(i,s)&&va(s,i)&&(e.push(i.i,t.i,s.i),ya(t),ya(t.next),t=n=s),t=t.next}while(t!==n);return Cs(t)}function Gm(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Km(a,o)){let l=_f(a,o);a=Cs(a,a.next),l=Cs(l,l.next),xa(a,e,t,i,s,r,0),xa(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Hm(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=pf(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Jm(c))}s.sort(Wm);for(let r=0;r<s.length;r++)t=Xm(s[r],t);return t}function Wm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Xm(n,e){let t=qm(n,e);if(!t)return e;let i=_f(t,n);return Cs(i,i.next),Cs(t,t.next)}function qm(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(xr(n,t))return t;do{if(xr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&mf(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let f=Math.abs(s-t.y)/(i-t.x);va(t,n)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&$m(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function $m(n,e){return Lt(n.prev,n,e.prev)<0&&Lt(e.next,n,n.next)<0}function Ym(n,e,t,i){let s=n;do s.z===0&&(s.z=lh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Zm(s)}function Zm(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function lh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Jm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function mf(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function $r(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&mf(n,e,t,i,s,r,a,o)}function Km(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!jm(n,e)&&(va(n,e)&&va(e,n)&&Qm(n,e)&&(Lt(n.prev,n,e.prev)||Lt(n,e.prev,e))||xr(n,e)&&Lt(n.prev,n,n.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function xr(n,e){return n.x===e.x&&n.y===e.y}function gf(n,e,t,i){let s=yo(Lt(n,e,t)),r=yo(Lt(n,e,i)),a=yo(Lt(t,i,n)),o=yo(Lt(t,i,e));return!!(s!==r&&a!==o||s===0&&vo(n,t,e)||r===0&&vo(n,i,e)||a===0&&vo(t,n,i)||o===0&&vo(t,e,i))}function vo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function yo(n){return n>0?1:n<0?-1:0}function jm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&gf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function va(n,e){return Lt(n.prev,n,n.next)<0?Lt(n,e,n.next)>=0&&Lt(n,n.prev,e)>=0:Lt(n,e,n.prev)<0||Lt(n,n.next,e)<0}function Qm(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function _f(n,e){let t=ch(n.i,n.x,n.y),i=ch(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function xd(n,e,t,i){let s=ch(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ya(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ch(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function eg(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}function vd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function yd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function ng(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function Fs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(bd(s))s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(bd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function sn(n){let e={};for(let t=0;t<n.length;t++){let i=Fs(n[t]);for(let s in i)e[s]=i[s]}return e}function bd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ig(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}function ir(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function nh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function vf(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function ag(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function og(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=vf(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=ag(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}function Md(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}function Cd(n,e){return n.distance-e.distance}function fh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)fh(r[a],e,t,!0)}}function Gh(n,e,t,i){let s=gg(i);switch(t){case Dh:return n*e;case fl:return n*e/s.components*s.byteLength;case pl:return n*e/s.components*s.byteLength;case us:return n*e*2/s.components*s.byteLength;case ml:return n*e*2/s.components*s.byteLength;case Nh:return n*e*3/s.components*s.byteLength;case $n:return n*e*4/s.components*s.byteLength;case gl:return n*e*4/s.components*s.byteLength;case Pa:case Ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case La:case Da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xl:case yl:return Math.max(n,16)*Math.max(e,8)/4;case _l:case vl:return Math.max(n,8)*Math.max(e,8)/2;case bl:case Ml:case El:case wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sl:case Na:case Tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Il:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case zl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case kl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Vl:case Gl:case Hl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Wl:case Xl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ua:case ql:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gg(n){switch(n){case Mn:case Rh:return{byteLength:1,components:1};case Sr:case Ph:case li:return{byteLength:2,components:1};case ul:case dl:return{byteLength:2,components:4};case oi:case hl:case qn:return{byteLength:4,components:1};case Ih:case Lh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var rs,as,Rd,mh,Pd,Aa,al,br,os,jt,fn,Mi,Mr,gh,_h,xh,Id,Ds,Ld,Dd,Nd,Ud,Od,Fd,Bd,zd,vh,yh,kd,Vd,Gd,Hd,Wd,Xd,qd,$d,Yd,wo,To,Ao,lr,Co,Ro,Po,Io,bh,Zd,Jd,ai,Mh,Sh,Eh,Ns,wh,Th,Ah,Ch,ls,Us,ol,ll,Ca,cr,xi,Lo,Jt,Kd,Ra,Kt,cl,cs,Mn,Rh,Ph,Sr,hl,oi,qn,li,ul,dl,Er,Ih,Lh,Dh,Nh,$n,vi,hs,fl,pl,us,ml,gl,Pa,Ia,La,Da,_l,xl,vl,yl,bl,Ml,Sl,El,wl,Na,Tl,Al,Cl,Rl,Pl,Il,Ll,Dl,Nl,Ul,Ol,Fl,Bl,zl,kl,Vl,Gl,Hl,Wl,Xl,Ua,ql,jr,Do,So,sh,rh,ah,oh,jd,$l,Qd,Bi,Yt,Qr,ea,vt,Eo,ef,tf,nf,sf,Yl,rf,af,Zl,of,lf,Uh,ti,hr,Ku,ur,df,ni,tn,ju,Yr,dr,Oa,Hh,fe,Dn,Wh,D,Nc,Qu,Xh,st,Uc,ed,td,pt,qs,No,fm,fr,pm,Fc,hn,qh,It,Uo,bn,na,Oo,rl,Et,$s,jn,mm,gm,Wi,eo,Rn,nd,id,Ui,pr,_m,sd,Ys,Ri,to,Vr,xm,vm,rd,ad,od,ld,ym,Zs,Bc,Dt,bt,bm,mr,ff,Xi,no,nt,nn,Es,ws,Qn,Pi,kc,Ii,Js,Ks,cd,Vc,Gc,Hc,Wc,Xc,qc,Zi,yi,Li,ei,io,js,Qs,er,qi,$i,xs,Gr,so,ro,vs,zt,ao,Mm,Ln,ia,sa,ht,Sm,Hr,Yc,Ji,Em,Wn,Zc,tr,Pn,Wr,$t,Ft,Jc,wm,Tm,In,Am,Ki,Di,Kc,oo,lo,Ts,kt,hd,ys,co,ud,ho,uo,fo,jc,po,dd,mo,Vt,ra,aa,nr,fd,_o,pd,Rm,Xr,qr,un,bs,Pm,xo,gr,oa,As,ji,Fo,la,ii,bi,ca,Nn,ha,ua,Un,_r,Bo,md,gd,Qc,eh,th,Qi,da,zo,fa,ko,pa,ma,ga,Vo,Go,_a,Oi,hh,Ms,es,tg,ba,Rs,si,ts,Xn,Ps,xf,sg,rg,dn,Ho,ri,Fi,Wo,Xo,ns,qo,$o,Yo,Zo,On,is,Jo,Ko,jo,Ma,ss,Qo,el,yf,tl,Sa,Is,ih,Sd,Ed,nl,bo,Mo,_i,Ea,Yi,wd,Td,Zt,vr,uh,Ls,sr,rr,il,sl,kh,lg,Vh,cg,hg,ug,dg,fg,pg,mg,dh,Rt,Vy,Ad,wa,yr,$h,ph,Ta,Yh=kn(()=>{rs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},as={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rd=0,mh=1,Pd=2,Aa=1,al=2,br=3,os=0,jt=1,fn=2,Mi=0,Mr=1,gh=2,_h=3,xh=4,Id=5,Ds=100,Ld=101,Dd=102,Nd=103,Ud=104,Od=200,Fd=201,Bd=202,zd=203,vh=204,yh=205,kd=206,Vd=207,Gd=208,Hd=209,Wd=210,Xd=211,qd=212,$d=213,Yd=214,wo=0,To=1,Ao=2,lr=3,Co=4,Ro=5,Po=6,Io=7,bh=0,Zd=1,Jd=2,ai=0,Mh=1,Sh=2,Eh=3,Ns=4,wh=5,Th=6,Ah=7,Ch=300,ls=301,Us=302,ol=303,ll=304,Ca=306,cr=1e3,xi=1001,Lo=1002,Jt=1003,Kd=1004,Ra=1005,Kt=1006,cl=1007,cs=1008,Mn=1009,Rh=1010,Ph=1011,Sr=1012,hl=1013,oi=1014,qn=1015,li=1016,ul=1017,dl=1018,Er=1020,Ih=35902,Lh=35899,Dh=1021,Nh=1022,$n=1023,vi=1026,hs=1027,fl=1028,pl=1029,us=1030,ml=1031,gl=1033,Pa=33776,Ia=33777,La=33778,Da=33779,_l=35840,xl=35841,vl=35842,yl=35843,bl=36196,Ml=37492,Sl=37496,El=37488,wl=37489,Na=37490,Tl=37491,Al=37808,Cl=37809,Rl=37810,Pl=37811,Il=37812,Ll=37813,Dl=37814,Nl=37815,Ul=37816,Ol=37817,Fl=37818,Bl=37819,zl=37820,kl=37821,Vl=36492,Gl=36494,Hl=36495,Wl=36283,Xl=36284,Ua=36285,ql=36286,jr=2300,Do=2301,So=2302,sh=2303,rh=2400,ah=2401,oh=2402,jd=3200,$l=0,Qd=1,Bi="",Yt="srgb",Qr="srgb-linear",ea="linear",vt="srgb",Eo=7680,ef=519,tf=512,nf=513,sf=514,Yl=515,rf=516,af=517,Zl=518,of=519,lf=35044,Uh="300 es",ti=2e3,hr=2001;Ku={},ur=null;df={[wo]:To,[Ao]:Po,[Co]:Io,[lr]:Ro,[To]:wo,[Po]:Ao,[Io]:Co,[Ro]:lr},ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ju=1234567,Yr=Math.PI/180,dr=180/Math.PI;Oa={DEG2RAD:Yr,RAD2DEG:dr,generateUUID:Os,clamp:ot,euclideanModulo:Fh,mapLinear:Jp,inverseLerp:Kp,lerp:Zr,damp:jp,pingpong:Qp,smoothstep:em,smootherstep:tm,randInt:nm,randFloat:im,randFloatSpread:sm,seededRandom:rm,degToRad:am,radToDeg:om,isPowerOfTwo:lm,ceilPowerOfTwo:cm,floorPowerOfTwo:hm,setQuaternionFromProperEuler:um,normalize:cn,denormalize:ar},Hh=class Hh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hh.prototype.isVector2=!0;fe=Hh,Dn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[a+0],p=r[a+1],m=r[a+2],v=r[a+3];if(f!==v||l!==h||c!==p||u!==m){let g=l*h+c*p+u*m+f*v;g<0&&(h=-h,p=-p,m=-m,v=-v,g=-g);let d=1-o;if(g<.9995){let M=Math.acos(g),T=Math.sin(M);d=Math.sin(d*M)/T,o=Math.sin(o*M)/T,l=l*d+h*o,c=c*d+p*o,u=u*d+m*o,f=f*d+v*o}else{l=l*d+h*o,c=c*d+p*o,u=u*d+m*o,f=f*d+v*o;let M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],h=r[a+1],p=r[a+2],m=r[a+3];return e[t]=o*m+u*f+l*p-c*h,e[t+1]=l*m+u*h+c*f-o*p,e[t+2]=c*m+u*p+o*h-l*f,e[t+3]=u*m-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),h=l(i/2),p=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*p*m,this._y=c*p*f-h*u*m,this._z=c*u*m+h*p*f,this._w=c*u*f-h*p*m;break;case"YXZ":this._x=h*u*f+c*p*m,this._y=c*p*f-h*u*m,this._z=c*u*m-h*p*f,this._w=c*u*f+h*p*m;break;case"ZXY":this._x=h*u*f-c*p*m,this._y=c*p*f+h*u*m,this._z=c*u*m+h*p*f,this._w=c*u*f-h*p*m;break;case"ZYX":this._x=h*u*f-c*p*m,this._y=c*p*f+h*u*m,this._z=c*u*m-h*p*f,this._w=c*u*f+h*p*m;break;case"YZX":this._x=h*u*f+c*p*m,this._y=c*p*f+h*u*m,this._z=c*u*m-h*p*f,this._w=c*u*f-h*p*m;break;case"XZY":this._x=h*u*f-c*p*m,this._y=c*p*f-h*u*m,this._z=c*u*m+h*p*f,this._w=c*u*f+h*p*m;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>f){let p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-i-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Wh=class Wh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nc.copy(this).projectOnVector(e),this.sub(Nc)}reflect(e){return this.sub(Nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wh.prototype.isVector3=!0;D=Wh,Nc=new D,Qu=new Dn,Xh=class Xh{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],m=i[8],v=s[0],g=s[3],d=s[6],M=s[1],T=s[4],y=s[7],w=s[2],b=s[5],C=s[8];return r[0]=a*v+o*M+l*w,r[3]=a*g+o*T+l*b,r[6]=a*d+o*y+l*C,r[1]=c*v+u*M+f*w,r[4]=c*g+u*T+f*b,r[7]=c*d+u*y+f*C,r[2]=h*v+p*M+m*w,r[5]=h*g+p*T+m*b,r[8]=h*d+p*y+m*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,p=c*r-a*l,m=t*f+i*h+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(o*i-s*a)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uc.makeScale(e,t)),this}rotate(e){return Ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uc.makeRotation(-e)),this}translate(e,t){return Ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Xh.prototype.isMatrix3=!0;st=Xh,Uc=new st,ed=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),td=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pt=dm();No=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qs===void 0&&(qs=ta("canvas")),qs.width=e.width,qs.height=e.height;let s=qs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=qs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ta("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ni(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ni(t[i]/255)*255):t[i]=Ni(t[i]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fm=0,fr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Os(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Oc(s[a].image)):r.push(Oc(s[a]))}else r=Oc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};pm=0,Fc=new D,hn=class n extends ni{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=xi,s=xi,r=Kt,a=cs,o=$n,l=Mn,c=n.DEFAULT_ANISOTROPY,u=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=Os(),this.name="",this.source=new fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fc).x}get height(){return this.source.getSize(Fc).y}get depth(){return this.source.getSize(Fc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ch)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cr:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cr:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Ch;hn.DEFAULT_ANISOTROPY=1;qh=class qh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],m=l[9],v=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,y=(p+1)/2,w=(d+1)/2,b=(u+h)/4,C=(f+v)/4,_=(m+g)/4;return T>y&&T>w?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=b/i,r=C/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=b/s,r=_/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=C/r,s=_/r),this.set(i,s,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(f-v)/M,this.z=(h-u)/M,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qh.prototype.isVector4=!0;It=qh,Uo=class extends ni{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new hn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new fr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends Uo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},na=class extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Oo=class extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},rl=class rl{constructor(e,t,i,s,r,a,o,l,c,u,f,h,p,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,f,h,p,m,v,g)}set(e,t,i,s,r,a,o,l,c,u,f,h,p,m,v,g){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=m,d[11]=v,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rl().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),r=1/$s.setFromMatrixColumn(e,1).length(),a=1/$s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=a*u,p=a*f,m=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+m*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,p=l*f,m=c*u,v=c*f;t[0]=h+v*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-m,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,p=l*f,m=c*u,v=c*f;t[0]=h-v*o,t[4]=-a*f,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,p=a*f,m=o*u,v=o*f;t[0]=l*u,t[4]=m*c-p,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,p=a*c,m=o*l,v=o*c;t[0]=l*u,t[4]=v-h*f,t[8]=m*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+m,t[10]=h-v*f}else if(e.order==="XZY"){let h=a*l,p=a*c,m=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=a*u,t[9]=p*f-m,t[2]=m*f-p,t[6]=o*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mm,e,gm)}lookAt(e,t,i){let s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Wi.crossVectors(i,Rn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Wi.crossVectors(i,Rn)),Wi.normalize(),eo.crossVectors(Rn,Wi),s[0]=Wi.x,s[4]=eo.x,s[8]=Rn.x,s[1]=Wi.y,s[5]=eo.y,s[9]=Rn.y,s[2]=Wi.z,s[6]=eo.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],m=i[2],v=i[6],g=i[10],d=i[14],M=i[3],T=i[7],y=i[11],w=i[15],b=s[0],C=s[4],_=s[8],E=s[12],R=s[1],L=s[5],N=s[9],z=s[13],I=s[2],B=s[6],$=s[10],Y=s[14],he=s[3],K=s[7],oe=s[11],te=s[15];return r[0]=a*b+o*R+l*I+c*he,r[4]=a*C+o*L+l*B+c*K,r[8]=a*_+o*N+l*$+c*oe,r[12]=a*E+o*z+l*Y+c*te,r[1]=u*b+f*R+h*I+p*he,r[5]=u*C+f*L+h*B+p*K,r[9]=u*_+f*N+h*$+p*oe,r[13]=u*E+f*z+h*Y+p*te,r[2]=m*b+v*R+g*I+d*he,r[6]=m*C+v*L+g*B+d*K,r[10]=m*_+v*N+g*$+d*oe,r[14]=m*E+v*z+g*Y+d*te,r[3]=M*b+T*R+y*I+w*he,r[7]=M*C+T*L+y*B+w*K,r[11]=M*_+T*N+y*$+w*oe,r[15]=M*E+T*z+y*Y+w*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],m=e[3],v=e[7],g=e[11],d=e[15],M=l*p-c*h,T=o*p-c*f,y=o*h-l*f,w=a*p-c*u,b=a*h-l*u,C=a*f-o*u;return t*(v*M-g*T+d*y)-i*(m*M-g*w+d*b)+s*(m*T-v*w+d*C)-r*(m*y-v*b+g*C)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],m=e[12],v=e[13],g=e[14],d=e[15],M=t*o-i*a,T=t*l-s*a,y=t*c-r*a,w=i*l-s*o,b=i*c-r*o,C=s*c-r*l,_=u*v-f*m,E=u*g-h*m,R=u*d-p*m,L=f*g-h*v,N=f*d-p*v,z=h*d-p*g,I=M*z-T*N+y*L+w*R-b*E+C*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return e[0]=(o*z-l*N+c*L)*B,e[1]=(s*N-i*z-r*L)*B,e[2]=(v*C-g*b+d*w)*B,e[3]=(h*b-f*C-p*w)*B,e[4]=(l*R-a*z-c*E)*B,e[5]=(t*z-s*R+r*E)*B,e[6]=(g*y-m*C-d*T)*B,e[7]=(u*C-h*y+p*T)*B,e[8]=(a*N-o*R+c*_)*B,e[9]=(i*R-t*N-r*_)*B,e[10]=(m*b-v*y+d*M)*B,e[11]=(f*y-u*b-p*M)*B,e[12]=(o*E-a*L-l*_)*B,e[13]=(t*L-i*E+s*_)*B,e[14]=(v*T-m*w-g*M)*B,e[15]=(u*w-f*T+h*M)*B,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,p=r*u,m=r*f,v=a*u,g=a*f,d=o*f,M=l*c,T=l*u,y=l*f,w=i.x,b=i.y,C=i.z;return s[0]=(1-(v+d))*w,s[1]=(p+y)*w,s[2]=(m-T)*w,s[3]=0,s[4]=(p-y)*b,s[5]=(1-(h+d))*b,s[6]=(g+M)*b,s[7]=0,s[8]=(m+T)*C,s[9]=(g-M)*C,s[10]=(1-(h+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=$s.set(s[0],s[1],s[2]).length(),o=$s.set(s[4],s[5],s[6]).length(),l=$s.set(s[8],s[9],s[10]).length();r<0&&(a=-a),jn.copy(this);let c=1/a,u=1/o,f=1/l;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=f,jn.elements[9]*=f,jn.elements[10]*=f,t.setFromRotationMatrix(jn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=ti,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),p=(i+s)/(i-s),m,v;if(l)m=r/(a-r),v=a*r/(a-r);else if(o===ti)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===hr)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ti,l=!1){let c=this.elements,u=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),p=-(i+s)/(i-s),m,v;if(l)m=1/(a-r),v=a/(a-r);else if(o===ti)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===hr)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};rl.prototype.isMatrix4=!0;Et=rl,$s=new D,jn=new Et,mm=new D(0,0,0),gm=new D(1,1,1),Wi=new D,eo=new D,Rn=new D,nd=new Et,id=new Dn,Ui=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return id.setFromEuler(this),this.setFromQuaternion(id,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ui.DEFAULT_ORDER="XYZ";pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_m=0,sd=new D,Ys=new Dn,Ri=new Et,to=new D,Vr=new D,xm=new D,vm=new Dn,rd=new D(1,0,0),ad=new D(0,1,0),od=new D(0,0,1),ld={type:"added"},ym={type:"removed"},Zs={type:"childadded",child:null},Bc={type:"childremoved",child:null},Dt=class n extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new Ui,i=new Dn,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new st}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(rd,e)}rotateY(e){return this.rotateOnAxis(ad,e)}rotateZ(e){return this.rotateOnAxis(od,e)}translateOnAxis(e,t){return sd.copy(e).applyQuaternion(this.quaternion),this.position.add(sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rd,e)}translateY(e){return this.translateOnAxis(ad,e)}translateZ(e){return this.translateOnAxis(od,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?to.copy(e):to.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Vr,to,this.up):Ri.lookAt(to,Vr,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(Ri),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ld),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ym),Bc.child=e,this.dispatchEvent(Bc),Bc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ld),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,xm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,vm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Dt.DEFAULT_UP=new D(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;bt=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},bm={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,i),d=this._getHandJoint(c,v);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,m=.005;c.inputState.pinching&&h>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new bt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},no={h:0,s:0,l:0};nt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=pt.workingColorSpace){if(e=Fh(e,1),t=ot(t,0,1),i=ot(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=zc(a,r,e+1/3),this.g=zc(a,r,e),this.b=zc(a,r,e-1/3)}return pt.colorSpaceToWorking(this,s),this}setStyle(e,t=Yt){function i(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let i=ff[e.toLowerCase()];return i!==void 0?this.setHex(i,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return pt.workingToColorSpace(nn.copy(this),e),Math.round(ot(nn.r*255,0,255))*65536+Math.round(ot(nn.g*255,0,255))*256+Math.round(ot(nn.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(nn.copy(this),t);let i=nn.r,s=nn.g,r=nn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Yt){pt.workingToColorSpace(nn.copy(this),e);let t=nn.r,i=nn.g,s=nn.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(no);let i=Zr(Xi.h,no.h,t),s=Zr(Xi.s,no.s,t),r=Zr(Xi.l,no.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new nt;nt.NAMES=ff;Es=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new nt(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ws=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qn=new D,Pi=new D,kc=new D,Ii=new D,Js=new D,Ks=new D,cd=new D,Vc=new D,Gc=new D,Hc=new D,Wc=new It,Xc=new It,qc=new It,Zi=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Qn.subVectors(e,t),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Qn.subVectors(s,t),Pi.subVectors(i,t),kc.subVectors(e,t);let a=Qn.dot(Qn),o=Qn.dot(Pi),l=Qn.dot(kc),c=Pi.dot(Pi),u=Pi.dot(kc),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,p=(c*l-o*u)*h,m=(a*u-o*l)*h;return r.set(1-p-m,m,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ii.x),l.addScaledVector(a,Ii.y),l.addScaledVector(o,Ii.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Wc.setScalar(0),Xc.setScalar(0),qc.setScalar(0),Wc.fromBufferAttribute(e,t),Xc.fromBufferAttribute(e,i),qc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Wc,r.x),a.addScaledVector(Xc,r.y),a.addScaledVector(qc,r.z),a}static isFrontFacing(e,t,i,s){return Qn.subVectors(i,t),Pi.subVectors(e,t),Qn.cross(Pi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),Qn.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Js.subVectors(s,i),Ks.subVectors(r,i),Vc.subVectors(e,i);let l=Js.dot(Vc),c=Ks.dot(Vc);if(l<=0&&c<=0)return t.copy(i);Gc.subVectors(e,s);let u=Js.dot(Gc),f=Ks.dot(Gc);if(u>=0&&f<=u)return t.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Js,a);Hc.subVectors(e,r);let p=Js.dot(Hc),m=Ks.dot(Hc);if(m>=0&&p<=m)return t.copy(r);let v=p*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Ks,o);let g=u*m-p*f;if(g<=0&&f-u>=0&&p-m>=0)return cd.subVectors(r,s),o=(f-u)/(f-u+(p-m)),t.copy(s).addScaledVector(cd,o);let d=1/(g+v+h);return a=v*d,o=h*d,t.copy(i).addScaledVector(Js,a).addScaledVector(Ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yi=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ei):ei.fromBufferAttribute(r,a),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),io.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),io.copy(i.boundingBox)),io.applyMatrix4(e.matrixWorld),this.union(io)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),so.subVectors(this.max,Gr),js.subVectors(e.a,Gr),Qs.subVectors(e.b,Gr),er.subVectors(e.c,Gr),qi.subVectors(Qs,js),$i.subVectors(er,Qs),xs.subVectors(js,er);let t=[0,-qi.z,qi.y,0,-$i.z,$i.y,0,-xs.z,xs.y,qi.z,0,-qi.x,$i.z,0,-$i.x,xs.z,0,-xs.x,-qi.y,qi.x,0,-$i.y,$i.x,0,-xs.y,xs.x,0];return!$c(t,js,Qs,er,so)||(t=[1,0,0,0,1,0,0,0,1],!$c(t,js,Qs,er,so))?!1:(ro.crossVectors(qi,$i),t=[ro.x,ro.y,ro.z],$c(t,js,Qs,er,so))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Li=[new D,new D,new D,new D,new D,new D,new D,new D],ei=new D,io=new yi,js=new D,Qs=new D,er=new D,qi=new D,$i=new D,xs=new D,Gr=new D,so=new D,ro=new D,vs=new D;zt=new D,ao=new fe,Mm=0,Ln=class extends ni{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=lf,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ao.fromBufferAttribute(this,t),ao.applyMatrix3(e),this.setXY(t,ao.x,ao.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ar(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ar(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ar(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ar(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ar(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),s=cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},ia=class extends Ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}},sa=class extends Ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}},ht=class extends Ln{constructor(e,t,i){super(new Float32Array(e),t,i)}},Sm=new yi,Hr=new D,Yc=new D,Ji=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Sm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);let t=Hr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Hr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(Yc)),this.expandByPoint(Hr.copy(e.center).sub(Yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Em=0,Wn=new Et,Zc=new Dt,tr=new D,Pn=new yi,Wr=new yi,$t=new D,Ft=class n extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yp(e)?sa:ia)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new st().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,i){return Wn.makeTranslation(e,t,i),this.applyMatrix4(Wn),this}scale(e,t,i){return Wn.makeScale(e,t,i),this.applyMatrix4(Wn),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Wr.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Pn.min,Wr.min),Pn.expandByPoint($t),$t.addVectors(Pn.max,Wr.max),Pn.expandByPoint($t)):(Pn.expandByPoint(Wr.min),Pn.expandByPoint(Wr.max))}Pn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)$t.fromBufferAttribute(o,c),l&&(tr.fromBufferAttribute(e,c),$t.add(tr)),s=Math.max(s,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ln(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new D,l[_]=new D;let c=new D,u=new D,f=new D,h=new fe,p=new fe,m=new fe,v=new D,g=new D;function d(_,E,R){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,R),h.fromBufferAttribute(r,_),p.fromBufferAttribute(r,E),m.fromBufferAttribute(r,R),u.sub(c),f.sub(c),p.sub(h),m.sub(h);let L=1/(p.x*m.y-m.x*p.y);isFinite(L)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(L),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(L),o[_].add(v),o[E].add(v),o[R].add(v),l[_].add(g),l[E].add(g),l[R].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,E=M.length;_<E;++_){let R=M[_],L=R.start,N=R.count;for(let z=L,I=L+N;z<I;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let T=new D,y=new D,w=new D,b=new D;function C(_){w.fromBufferAttribute(s,_),b.copy(w);let E=o[_];T.copy(E),T.sub(w.multiplyScalar(w.dot(E))).normalize(),y.crossVectors(b,E);let L=y.dot(l[_])<0?-1:1;a.setXYZW(_,T.x,T.y,T.z,L)}for(let _=0,E=M.length;_<E;++_){let R=M[_],L=R.start,N=R.count;for(let z=L,I=L+N;z<I;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,f=new D;if(e)for(let h=0,p=e.count;h<p;h+=3){let m=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),p=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let d=0;d<u;d++)h[m++]=c[p++]}return new Ln(h,u,f)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jc=new D,wm=new D,Tm=new st,In=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Jc.subVectors(i,t).cross(wm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Jc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Tm.getNormalMatrix(e),s=this.coplanarPoint(Jc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Am=0,Ki=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=Mr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=yh,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new In().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new fe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Di=new D,Kc=new D,oo=new D,lo=new D,Ts=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Kc.copy(e).add(t).multiplyScalar(.5),oo.copy(t).sub(e).normalize(),lo.copy(this.origin).sub(Kc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(oo),o=lo.dot(this.direction),l=-lo.dot(oo),c=lo.lengthSq(),u=Math.abs(1-a*a),f,h,p,m;if(u>0)if(f=a*l-o,h=a*o-l,m=r*u,f>=0)if(h>=-m)if(h<=m){let v=1/u;f*=v,h*=v,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Kc).addScaledVector(oo,h),p}intersectSphere(e,t){if(e.radius<0)return null;Di.subVectors(e.center,this.origin);let i=Di.dot(this.direction),s=Di.dot(Di)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,p=e.z-a.z,m=t.x-a.x,v=t.y-a.y,g=t.z-a.z,d=i.x-a.x,M=i.y-a.y,T=i.z-a.z,y=Math.abs(l),w=Math.abs(c),b=Math.abs(u),C,_,E,R,L,N,z,I,B,$,Y,he;if(y>=w&&y>=b?(E=l,N=f,B=m,he=d,l>=0?(C=c,_=u,R=h,L=p,z=v,I=g,$=M,Y=T):(C=u,_=c,R=p,L=h,z=g,I=v,$=T,Y=M)):w>=b?(E=c,N=h,B=v,he=M,c>=0?(C=u,_=l,R=p,L=f,z=g,I=m,$=T,Y=d):(C=l,_=u,R=f,L=p,z=m,I=g,$=d,Y=T)):(E=u,N=p,B=g,he=T,u>=0?(C=l,_=c,R=f,L=h,z=m,I=v,$=d,Y=M):(C=c,_=l,R=h,L=f,z=v,I=m,$=M,Y=d)),E===0)return null;let K=C/E,oe=_/E,te=1/E,Ne=R-K*N,Re=L-oe*N,ut=z-K*B,rt=I-oe*B,at=$-K*he,Z=Y-oe*he,J=at*rt-Z*ut,xe=Ne*Z-Re*at,Je=ut*Re-rt*Ne;if(s){if(J<0||xe<0||Je<0)return null}else if((J<0||xe<0||Je<0)&&(J>0||xe>0||Je>0))return null;let Ee=J+xe+Je;if(Ee===0)return null;let Ye=te*(J*N+xe*B+Je*he);return(Ee>0?Ye<0:Ye>0)?null:this.at(Ye/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kt=class extends Ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hd=new Et,ys=new Ts,co=new Ji,ud=new D,ho=new D,uo=new D,fo=new D,jc=new D,po=new D,dd=new D,mo=new D,Vt=class extends Dt{constructor(e=new Ft,t=new kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(jc.fromBufferAttribute(f,e),a?po.addScaledVector(jc,u):po.addScaledVector(jc.sub(t),u))}t.add(po)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(r),ys.copy(e.ray).recast(e.near),!(co.containsPoint(ys.origin)===!1&&(ys.intersectSphere(co,ud)===null||ys.origin.distanceToSquared(ud)>(e.far-e.near)**2))&&(hd.copy(r).invert(),ys.copy(e.ray).applyMatrix4(hd),!(i.boundingBox!==null&&ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=h.length;m<v;m++){let g=h[m],d=a[g.materialIndex],M=Math.max(g.start,p.start),T=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=M,w=T;y<w;y+=3){let b=o.getX(y),C=o.getX(y+1),_=o.getX(y+2);s=go(this,d,e,i,c,u,f,b,C,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let g=m,d=v;g<d;g+=3){let M=o.getX(g),T=o.getX(g+1),y=o.getX(g+2);s=go(this,a,e,i,c,u,f,M,T,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=h.length;m<v;m++){let g=h[m],d=a[g.materialIndex],M=Math.max(g.start,p.start),T=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=M,w=T;y<w;y+=3){let b=y,C=y+1,_=y+2;s=go(this,d,e,i,c,u,f,b,C,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=m,d=v;g<d;g+=3){let M=g,T=g+1,y=g+2;s=go(this,a,e,i,c,u,f,M,T,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};ra=class extends hn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Jt,u=Jt,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},aa=class extends Ln{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},nr=new Et,fd=new Et,_o=[],pd=new yi,Rm=new Et,Xr=new Vt,qr=new Ji,un=class extends Vt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new aa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Rm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,nr),pd.copy(e.boundingBox).applyMatrix4(nr),this.boundingBox.union(pd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,nr),qr.copy(e.boundingSphere).applyMatrix4(nr),this.boundingSphere.union(qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(i),e.ray.intersectsSphere(qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,nr),fd.multiplyMatrices(i,nr),Xr.matrixWorld=fd,Xr.raycast(e,_o);for(let a=0,o=_o.length;a<o;a++){let l=_o[a];l.instanceId=r,l.object=this,t.push(l)}_o.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new aa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ra(new Float32Array(s*this.count),s,this.count,fl,qn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bs=new Ji,Pm=new fe(.5,.5),xo=new D,gr=class{constructor(e=new In,t=new In,i=new In,s=new In,r=new In,a=new In){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ti,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],p=r[7],m=r[8],v=r[9],g=r[10],d=r[11],M=r[12],T=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,p-u,d-m,w-M).normalize(),s[1].setComponents(c+a,p+u,d+m,w+M).normalize(),s[2].setComponents(c+o,p+f,d+v,w+T).normalize(),s[3].setComponents(c-o,p-f,d-v,w-T).normalize(),i)s[4].setComponents(l,h,g,y).normalize(),s[5].setComponents(c-l,p-h,d-g,w-y).normalize();else if(s[4].setComponents(c-l,p-h,d-g,w-y).normalize(),t===ti)s[5].setComponents(c+l,p+h,d+g,w+y).normalize();else if(t===hr)s[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){bs.center.set(0,0,0);let t=Pm.distanceTo(e.center);return bs.radius=.7071067811865476+t,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(xo.x=s.normal.x>0?e.max.x:e.min.x,xo.y=s.normal.y>0?e.max.y:e.min.y,xo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},oa=class extends hn{constructor(e=[],t=ls,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},As=class extends hn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ji=class extends hn{constructor(e,t,i=oi,s,r,a,o=Jt,l=Jt,c,u=vi,f=1){if(u!==vi&&u!==hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fo=class extends ji{constructor(e,t=oi,i=ls,s,r,a=Jt,o=Jt,l,c=vi){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},la=class extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ii=class n extends Ft{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,p=0;m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,s,a,2),m("x","z","y",1,-1,e,i,-t,s,a,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(f,2));function m(v,g,d,M,T,y,w,b,C,_,E){let R=y/C,L=w/_,N=y/2,z=w/2,I=b/2,B=C+1,$=_+1,Y=0,he=0,K=new D;for(let oe=0;oe<$;oe++){let te=oe*L-z;for(let Ne=0;Ne<B;Ne++){let Re=Ne*R-N;K[v]=Re*M,K[g]=te*T,K[d]=I,c.push(K.x,K.y,K.z),K[v]=0,K[g]=0,K[d]=b>0?1:-1,u.push(K.x,K.y,K.z),f.push(Ne/C),f.push(1-oe/_),Y+=1}}for(let oe=0;oe<_;oe++)for(let te=0;te<C;te++){let Ne=h+te+B*oe,Re=h+te+B*(oe+1),ut=h+(te+1)+B*(oe+1),rt=h+(te+1)+B*oe;l.push(Ne,Re,rt),l.push(Re,ut,rt),he+=6}o.addGroup(p,he,E),p+=he,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},bi=class n extends Ft{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=t/2,f=Math.PI/2*e,h=t,p=2*f+h,m=i*2+r,v=s+1,g=new D,d=new D;for(let M=0;M<=m;M++){let T=0,y=0,w=0,b=0;if(M<=i){let E=M/i,R=E*Math.PI/2;y=-u-e*Math.cos(R),w=e*Math.sin(R),b=-e*Math.cos(R),T=E*f}else if(M<=i+r){let E=(M-i)/r;y=-u+E*t,w=e,b=0,T=f+E*h}else{let E=(M-i-r)/i,R=E*Math.PI/2;y=u+e*Math.sin(R),w=e*Math.cos(R),b=e*Math.sin(R),T=f+h+E*f}let C=Math.max(0,Math.min(1,T/p)),_=0;M===0?_=.5/s:M===m&&(_=-.5/s);for(let E=0;E<=s;E++){let R=E/s,L=R*Math.PI*2,N=Math.sin(L),z=Math.cos(L);d.x=-w*z,d.y=y,d.z=w*N,o.push(d.x,d.y,d.z),g.set(-w*z,b,w*N),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+_,C)}if(M>0){let E=(M-1)*v;for(let R=0;R<s;R++){let L=E+R,N=E+R+1,z=M*v+R,I=M*v+R+1;a.push(L,N,z),a.push(N,I,z)}}}this.setIndex(a),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ca=class n extends Ft{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new D,u=new fe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){let p=i+f/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Nn=class n extends Ft{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],p=[],m=0,v=[],g=i/2,d=0;M(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new ht(f,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(p,2));function M(){let y=new D,w=new D,b=0,C=(t-e)/i;for(let _=0;_<=r;_++){let E=[],R=_/r,L=R*(t-e)+e;for(let N=0;N<=s;N++){let z=N/s,I=z*l+o,B=Math.sin(I),$=Math.cos(I);w.x=L*B,w.y=-R*i+g,w.z=L*$,f.push(w.x,w.y,w.z),y.set(B,C,$).normalize(),h.push(y.x,y.y,y.z),p.push(z,1-R),E.push(m++)}v.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){let R=v[E][_],L=v[E+1][_],N=v[E+1][_+1],z=v[E][_+1];(e>0||E!==0)&&(u.push(R,L,z),b+=3),(t>0||E!==r-1)&&(u.push(L,N,z),b+=3)}c.addGroup(d,b,0),d+=b}function T(y){let w=m,b=new fe,C=new D,_=0,E=y===!0?e:t,R=y===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,g*R,0),h.push(0,R,0),p.push(.5,.5),m++;let L=m;for(let N=0;N<=s;N++){let I=N/s*l+o,B=Math.cos(I),$=Math.sin(I);C.x=E*$,C.y=g*R,C.z=E*B,f.push(C.x,C.y,C.z),h.push(0,R,0),b.x=B*.5+.5,b.y=$*.5*R+.5,p.push(b.x,b.y),m++}for(let N=0;N<s;N++){let z=w+N,I=L+N;y===!0?u.push(I,I+1,z):u.push(I+1,I,z),_+=3}c.addGroup(d,_,y===!0?1:2),d+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ha=class n extends Nn{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ua=class n extends Ft{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(r.slice(),3)),this.setAttribute("uv",new ht(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let T=new D,y=new D,w=new D;for(let b=0;b<t.length;b+=3)p(t[b+0],T),p(t[b+1],y),p(t[b+2],w),l(T,y,w,M)}function l(M,T,y,w){let b=w+1,C=[];for(let _=0;_<=b;_++){C[_]=[];let E=M.clone().lerp(y,_/b),R=T.clone().lerp(y,_/b),L=b-_;for(let N=0;N<=L;N++)N===0&&_===b?C[_][N]=E:C[_][N]=E.clone().lerp(R,N/L)}for(let _=0;_<b;_++)for(let E=0;E<2*(b-_)-1;E++){let R=Math.floor(E/2);E%2===0?(h(C[_][R+1]),h(C[_+1][R]),h(C[_][R])):(h(C[_][R+1]),h(C[_+1][R+1]),h(C[_+1][R]))}}function c(M){let T=new D;for(let y=0;y<r.length;y+=3)T.x=r[y+0],T.y=r[y+1],T.z=r[y+2],T.normalize().multiplyScalar(M),r[y+0]=T.x,r[y+1]=T.y,r[y+2]=T.z}function u(){let M=new D;for(let T=0;T<r.length;T+=3){M.x=r[T+0],M.y=r[T+1],M.z=r[T+2];let y=g(M)/2/Math.PI+.5,w=d(M)/Math.PI+.5;a.push(y,1-w)}m(),f()}function f(){for(let M=0;M<a.length;M+=6){let T=a[M+0],y=a[M+2],w=a[M+4],b=Math.max(T,y,w),C=Math.min(T,y,w);b>.9&&C<.1&&(T<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),w<.2&&(a[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function p(M,T){let y=M*3;T.x=e[y+0],T.y=e[y+1],T.z=e[y+2]}function m(){let M=new D,T=new D,y=new D,w=new D,b=new fe,C=new fe,_=new fe;for(let E=0,R=0;E<r.length;E+=9,R+=6){M.set(r[E+0],r[E+1],r[E+2]),T.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),b.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),_.set(a[R+4],a[R+5]),w.copy(M).add(T).add(y).divideScalar(3);let L=g(w);v(b,R+0,M,L),v(C,R+2,T,L),v(_,R+4,y,L)}}function v(M,T,y,w){w<0&&M.x===1&&(a[T]=M.x-1),y.x===0&&y.z===0&&(a[T]=w/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let u=i[s],h=i[s+1]-u,p=(a-u)/h;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new fe:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new D,s=[],r=[],a=[],o=new D,l=new Et;for(let p=0;p<=e;p++){let m=p/e;s[p]=this.getTangentAt(m,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(ot(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(ot(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],p*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},_r=class extends Un{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new fe){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Bo=class extends _r{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};md=new D,gd=new D,Qc=new Bh,eh=new Bh,th=new Bh,Qi=class extends Un{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new D){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(gd.subVectors(s[0],s[1]).add(s[0]),c=gd);let f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(md.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=md),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(u),p);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Qc.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,m,v,g),eh.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,m,v,g),th.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,m,v,g)}else this.curveType==="catmullrom"&&(Qc.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),eh.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),th.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(Qc.calc(l),eh.calc(l),th.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};da=class extends Un{constructor(e=new fe,t=new fe,i=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new fe){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Kr(e,s.x,r.x,a.x,o.x),Kr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zo=class extends Un{constructor(e=new D,t=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Kr(e,s.x,r.x,a.x,o.x),Kr(e,s.y,r.y,a.y,o.y),Kr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fa=class extends Un{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ko=class extends Un{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends Un{constructor(e=new fe,t=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new fe){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Jr(e,s.x,r.x,a.x),Jr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ma=class extends Un{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Jr(e,s.x,r.x,a.x),Jr(e,s.y,r.y,a.y),Jr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ga=class extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(_d(o,l.x,c.x,u.x,f.x),_d(o,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new fe().fromArray(s))}return this}},Vo=Object.freeze({__proto__:null,ArcCurve:Bo,CatmullRomCurve3:Qi,CubicBezierCurve:da,CubicBezierCurve3:zo,EllipseCurve:_r,LineCurve:fa,LineCurve3:ko,QuadraticBezierCurve:pa,QuadraticBezierCurve3:ma,SplineCurve:ga}),Go=class extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Vo[s.type]().fromJSON(s))}return this}},_a=class extends Go{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new fa(this.currentPoint.clone(),new fe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new pa(this.currentPoint.clone(),new fe(e,t),new fe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new da(this.currentPoint.clone(),new fe(e,t),new fe(i,s),new fe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ga(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new _r(e,t,i,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Oi=class extends _a{constructor(e){super(e),this.uuid=Os(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new _a().fromJSON(s))}return this}};hh=class{static triangulate(e,t,i=2){return Bm(e,t,i)}},Ms=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];vd(e),yd(i,e);let a=e.length;t.forEach(vd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,yd(i,t[l]);let o=hh.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};es=class n extends Ft{constructor(e=new Oi([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ht(s,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:tg,T,y=!1,w,b,C,_;if(d){T=d.getSpacedPoints(u),y=!0,h=!1;let k=d.isCatmullRomCurve3?d.closed:!1;w=d.computeFrenetFrames(u,k),b=new D,C=new D,_=new D}h||(g=0,p=0,m=0,v=0);let E=o.extractPoints(c),R=E.shape,L=E.holes;if(!Ms.isClockWise(R)){R=R.reverse();for(let k=0,G=L.length;k<G;k++){let ne=L[k];Ms.isClockWise(ne)&&(L[k]=ne.reverse())}}function z(k){let ne=10000000000000001e-36,ie=k[0];for(let ce=1;ce<=k.length;ce++){let He=ce%k.length,Oe=k[He],ze=Oe.x-ie.x,We=Oe.y-ie.y,P=ze*ze+We*We,et=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(ie.x),Math.abs(ie.y)),Ke=ne*et*et;if(P<=Ke){k.splice(He,1),ce--;continue}ie=Oe}}z(R),L.forEach(z);let I=L.length,B=R;for(let k=0;k<I;k++){let G=L[k];R=R.concat(G)}function $(k,G,ne){return G||Qe("ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(G,ne)}let Y=R.length;function he(k,G,ne){let ie,ce,He,Oe=k.x-G.x,ze=k.y-G.y,We=ne.x-k.x,P=ne.y-k.y,et=Oe*Oe+ze*ze,Ke=Oe*P-ze*We;if(Math.abs(Ke)>Number.EPSILON){let A=Math.sqrt(et),x=Math.sqrt(We*We+P*P),V=G.x-ze/A,X=G.y+Oe/A,j=ne.x-P/x,pe=ne.y+We/x,me=((j-V)*P-(pe-X)*We)/(Oe*P-ze*We);ie=V+Oe*me-k.x,ce=X+ze*me-k.y;let Q=ie*ie+ce*ce;if(Q<=2)return new fe(ie,ce);He=Math.sqrt(Q/2)}else{let A=!1;Oe>Number.EPSILON?We>Number.EPSILON&&(A=!0):Oe<-Number.EPSILON?We<-Number.EPSILON&&(A=!0):Math.sign(ze)===Math.sign(P)&&(A=!0),A?(ie=-ze,ce=Oe,He=Math.sqrt(et)):(ie=Oe,ce=ze,He=Math.sqrt(et/2))}return new fe(ie/He,ce/He)}let K=[];for(let k=0,G=B.length,ne=G-1,ie=k+1;k<G;k++,ne++,ie++)ne===G&&(ne=0),ie===G&&(ie=0),K[k]=he(B[k],B[ne],B[ie]);let oe=[],te,Ne=K.concat();for(let k=0,G=I;k<G;k++){let ne=L[k];te=[];for(let ie=0,ce=ne.length,He=ce-1,Oe=ie+1;ie<ce;ie++,He++,Oe++)He===ce&&(He=0),Oe===ce&&(Oe=0),te[ie]=he(ne[ie],ne[He],ne[Oe]);oe.push(te),Ne=Ne.concat(te)}let Re;if(g===0)Re=Ms.triangulateShape(B,L);else{let k=[],G=[];for(let ne=0;ne<g;ne++){let ie=ne/g,ce=p*Math.cos(ie*Math.PI/2),He=m*Math.sin(ie*Math.PI/2)+v;for(let Oe=0,ze=B.length;Oe<ze;Oe++){let We=$(B[Oe],K[Oe],He);xe(We.x,We.y,-ce),ie===0&&k.push(We)}for(let Oe=0,ze=I;Oe<ze;Oe++){let We=L[Oe];te=oe[Oe];let P=[];for(let et=0,Ke=We.length;et<Ke;et++){let A=$(We[et],te[et],He);xe(A.x,A.y,-ce),ie===0&&P.push(A)}ie===0&&G.push(P)}}Re=Ms.triangulateShape(k,G)}let ut=Re.length,rt=m+v;for(let k=0;k<Y;k++){let G=h?$(R[k],Ne[k],rt):R[k];y?(C.copy(w.normals[0]).multiplyScalar(G.x),b.copy(w.binormals[0]).multiplyScalar(G.y),_.copy(T[0]).add(C).add(b),xe(_.x,_.y,_.z)):xe(G.x,G.y,0)}for(let k=1;k<=u;k++)for(let G=0;G<Y;G++){let ne=h?$(R[G],Ne[G],rt):R[G];y?(C.copy(w.normals[k]).multiplyScalar(ne.x),b.copy(w.binormals[k]).multiplyScalar(ne.y),_.copy(T[k]).add(C).add(b),xe(_.x,_.y,_.z)):xe(ne.x,ne.y,f/u*k)}for(let k=g-1;k>=0;k--){let G=k/g,ne=p*Math.cos(G*Math.PI/2),ie=m*Math.sin(G*Math.PI/2)+v;for(let ce=0,He=B.length;ce<He;ce++){let Oe=$(B[ce],K[ce],ie);xe(Oe.x,Oe.y,f+ne)}for(let ce=0,He=L.length;ce<He;ce++){let Oe=L[ce];te=oe[ce];for(let ze=0,We=Oe.length;ze<We;ze++){let P=$(Oe[ze],te[ze],ie);y?xe(P.x,P.y+T[u-1].y,T[u-1].x+ne):xe(P.x,P.y,f+ne)}}}at(),Z();function at(){let k=s.length/3;if(h){let G=0,ne=Y*G;for(let ie=0;ie<ut;ie++){let ce=Re[ie];Je(ce[2]+ne,ce[1]+ne,ce[0]+ne)}G=u+g*2,ne=Y*G;for(let ie=0;ie<ut;ie++){let ce=Re[ie];Je(ce[0]+ne,ce[1]+ne,ce[2]+ne)}}else{for(let G=0;G<ut;G++){let ne=Re[G];Je(ne[2],ne[1],ne[0])}for(let G=0;G<ut;G++){let ne=Re[G];Je(ne[0]+Y*u,ne[1]+Y*u,ne[2]+Y*u)}}i.addGroup(k,s.length/3-k,0)}function Z(){let k=s.length/3,G=0;J(B,G),G+=B.length;for(let ne=0,ie=L.length;ne<ie;ne++){let ce=L[ne];J(ce,G),G+=ce.length}i.addGroup(k,s.length/3-k,1)}function J(k,G){let ne=k.length;for(;--ne>=0;){let ie=ne,ce=ne-1;ce<0&&(ce=k.length-1);for(let He=0,Oe=u+g*2;He<Oe;He++){let ze=Y*He,We=Y*(He+1),P=G+ie+ze,et=G+ce+ze,Ke=G+ce+We,A=G+ie+We;Ee(P,et,Ke,A)}}}function xe(k,G,ne){l.push(k),l.push(G),l.push(ne)}function Je(k,G,ne){Ye(k),Ye(G),Ye(ne);let ie=s.length/3,ce=M.generateTopUV(i,s,ie-3,ie-2,ie-1);re(ce[0]),re(ce[1]),re(ce[2])}function Ee(k,G,ne,ie){Ye(k),Ye(G),Ye(ie),Ye(G),Ye(ne),Ye(ie);let ce=s.length/3,He=M.generateSideWallUV(i,s,ce-6,ce-3,ce-2,ce-1);re(He[0]),re(He[1]),re(He[3]),re(He[1]),re(He[2]),re(He[3])}function Ye(k){s.push(l[k*3+0]),s.push(l[k*3+1]),s.push(l[k*3+2])}function re(k){r.push(k.x),r.push(k.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return ng(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Vo[s.type]().fromJSON(s)),new n(i,e.options)}},tg={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new fe(r,a),new fe(o,l),new fe(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[s*3],p=e[s*3+1],m=e[s*3+2],v=e[r*3],g=e[r*3+1],d=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new fe(a,1-l),new fe(c,1-f),new fe(h,1-m),new fe(v,1-d)]:[new fe(o,1-l),new fe(u,1-f),new fe(p,1-m),new fe(g,1-d)]}};ba=class n extends ua{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Rs=class n extends ua{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},si=class n extends Ft{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,p=[],m=[],v=[],g=[];for(let d=0;d<u;d++){let M=d*h-a;for(let T=0;T<c;T++){let y=T*f-r;m.push(y,-M,0),v.push(0,0,1),g.push(T/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){let T=M+c*d,y=M+c*(d+1),w=M+1+c*(d+1),b=M+1+c*d;p.push(T,y,b),p.push(y,w,b)}this.setIndex(p),this.setAttribute("position",new ht(m,3)),this.setAttribute("normal",new ht(v,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ts=class n extends Ft{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new D,h=new D,p=[],m=[],v=[],g=[];for(let d=0;d<=i;d++){let M=[],T=d/i,y=a+T*o,w=e*Math.cos(y),b=Math.sqrt(e*e-w*w),C=0;d===0&&a===0?C=.5/t:d===i&&l===Math.PI&&(C=-.5/t);for(let _=0;_<=t;_++){let E=_/t,R=s+E*r;f.x=-b*Math.cos(R),f.y=w,f.z=b*Math.sin(R),m.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),g.push(E+C,1-T),M.push(c++)}u.push(M)}for(let d=0;d<i;d++)for(let M=0;M<t;M++){let T=u[d][M+1],y=u[d][M],w=u[d+1][M],b=u[d+1][M+1];(d!==0||a>0)&&p.push(T,y,b),(d!==i-1||l<Math.PI)&&p.push(y,w,b)}this.setIndex(p),this.setAttribute("position",new ht(m,3)),this.setAttribute("normal",new ht(v,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Xn=class n extends Ft{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],f=[],h=new D,p=new D,m=new D;for(let v=0;v<=i;v++){let g=a+v/i*o;for(let d=0;d<=s;d++){let M=d/s*r;p.x=(e+t*Math.cos(g))*Math.cos(M),p.y=(e+t*Math.cos(g))*Math.sin(M),p.z=t*Math.sin(g),c.push(p.x,p.y,p.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),m.subVectors(p,h).normalize(),u.push(m.x,m.y,m.z),f.push(d/s),f.push(v/i)}}for(let v=1;v<=i;v++)for(let g=1;g<=s;g++){let d=(s+1)*v+g-1,M=(s+1)*(v-1)+g-1,T=(s+1)*(v-1)+g,y=(s+1)*v+g;l.push(d,M,y),l.push(M,T,y)}this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},Ps=class n extends Ft{constructor(e=new ma(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,l=new D,c=new fe,u=new D,f=[],h=[],p=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new ht(f,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(p,2));function v(){for(let T=0;T<t;T++)g(T);g(r===!1?t:0),M(),d()}function g(T){u=e.getPointAt(T/t,u);let y=a.normals[T],w=a.binormals[T];for(let b=0;b<=s;b++){let C=b/s*Math.PI*2,_=Math.sin(C),E=-Math.cos(C);l.x=E*y.x+_*w.x,l.y=E*y.y+_*w.y,l.z=E*y.z+_*w.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,f.push(o.x,o.y,o.z)}}function d(){for(let T=1;T<=t;T++)for(let y=1;y<=s;y++){let w=(s+1)*(T-1)+(y-1),b=(s+1)*T+(y-1),C=(s+1)*T+y,_=(s+1)*(T-1)+y;m.push(w,b,_),m.push(b,C,_)}}function M(){for(let T=0;T<=t;T++)for(let y=0;y<=s;y++)c.x=T/t,c.y=y/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Vo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};xf={clone:Fs,merge:sn},sg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends Ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sg,this.fragmentShader=rg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=ig(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new nt().setHex(s.value);break;case"v2":this.uniforms[i].value=new fe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new It().fromArray(s.value);break;case"m3":this.uniforms[i].value=new st().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Et().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ho=class extends dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ri=class extends Ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$l,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fi=class extends ri{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Wo=class extends Ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xo=class extends Ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};ns=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qo=class extends ns{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rh,endingEnd:rh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ah:r=e,o=2*t-i;break;case oh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ah:a=e,l=2*i-t;break;case oh:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,m=(i-t)/(s-t),v=m*m,g=v*m,d=-h*g+2*h*v-h*m,M=(1+h)*g+(-1.5-2*h)*v+(-.5+h)*m+1,T=(-1-p)*g+(1.5+p)*v+.5*m,y=p*g-p*v;for(let w=0;w!==o;++w)r[w]=d*a[u+w]+M*a[c+w]+T*a[l+w]+y*a[f+w];return r}},$o=class extends ns{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},Yo=class extends ns{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Zo=class extends ns{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let m=(i-t)/(s-t),v=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*v+a[l+g]*m;return r}let h=o*2,p=e-1;for(let m=0;m!==o;++m){let v=a[c+m],g=a[l+m],d=p*h+m*2,M=f[d],T=f[d+1],y=e*h+m*2,w=u[y],b=u[y+1],C=og(i,t,M,w,s);r[m]=vf(C,v,T,b,g)}return r}};On=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ir(t,this.TimeBufferType),this.values=ir(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ir(e.times,Array),values:ir(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),nh(e.settings)&&(i.settings={inTangents:ir(e.settings.inTangents,Array),outTangents:ir(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Zo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case jr:t=this.InterpolantFactoryMethodDiscrete;break;case Do:t=this.InterpolantFactoryMethodLinear;break;case So:t=this.InterpolantFactoryMethodSmooth;break;case sh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return je("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jr;case this.InterpolantFactoryMethodLinear:return Do;case this.InterpolantFactoryMethodSmooth:return So;case this.InterpolantFactoryMethodBezier:return sh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;nh(this.settings)&&(Md(this.settings.inTangents,e),Md(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Qe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Qe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Zp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Qe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===So,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*i,h=f-i,p=f+i;for(let m=0;m!==i;++m){let v=t[f+m];if(v!==t[h+m]||v!==t[p+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*i,h=a*i;for(let p=0;p!==i;++p)t[h+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,nh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Do;is=class extends On{constructor(e,t,i){super(e,t,i)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=jr;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;Jo=class extends On{constructor(e,t,i,s){super(e,t,i,s)}};Jo.prototype.ValueTypeName="color";Ko=class extends On{constructor(e,t,i,s){super(e,t,i,s)}};Ko.prototype.ValueTypeName="number";jo=class extends ns{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ma=class extends On{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new jo(this.times,this.values,this.getValueSize(),e)}};Ma.prototype.ValueTypeName="quaternion";Ma.prototype.InterpolantFactoryMethodSmooth=void 0;ss=class extends On{constructor(e,t,i){super(e,t,i)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=jr;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;Qo=class extends On{constructor(e,t,i,s){super(e,t,i,s)}};Qo.prototype.ValueTypeName="vector";el=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let p=c[f],m=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yf=new el,tl=class{constructor(e){this.manager=e!==void 0?e:yf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};tl.DEFAULT_MATERIAL_NAME="__DEFAULT";Sa=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Is=class extends Sa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ih=new Et,Sd=new D,Ed=new D,nl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gr,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Sd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sd),Ed.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ed),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){ih.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ih,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===hr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ih)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bo=new D,Mo=new Dn,_i=new D,Ea=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bo,Mo,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bo,Mo,_i.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(bo,Mo,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bo,Mo,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Yi=new D,wd=new fe,Td=new fe,Zt=class extends Ea{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,wd,Td),t.subVectors(Td,wd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Yr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vr=class extends Ea{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},uh=class extends nl{constructor(){super(new vr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ls=class extends Sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new uh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},sr=-90,rr=1,il=class extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Zt(sr,rr,e,t);s.layers=this.layers,this.add(s);let r=new Zt(sr,rr,e,t);r.layers=this.layers,this.add(r);let a=new Zt(sr,rr,e,t);a.layers=this.layers,this.add(a);let o=new Zt(sr,rr,e,t);o.layers=this.layers,this.add(o);let l=new Zt(sr,rr,e,t);l.layers=this.layers,this.add(l);let c=new Zt(sr,rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},sl=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},kh="\\[\\]\\.:\\/",lg=new RegExp("["+kh+"]","g"),Vh="[^"+kh+"]",cg="[^"+kh.replace("\\.","")+"]",hg=/((?:WC+[\/:])*)/.source.replace("WC",Vh),ug=/(WCOD+)?/.source.replace("WCOD",cg),dg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vh),fg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vh),pg=new RegExp("^"+hg+ug+dg+fg+"$"),mg=["material","materials","bones","map"],dh=class{constructor(e,t,i){let s=i||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Rt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lg,"")}static parseTrackName(e){let t=pg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);mg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){je("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Qe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=dh;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Vy=new Float32Array(1),Ad=new Et,wa=class{constructor(e,t,i=0,s=1/0){this.ray=new Ts(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ad.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ad),this}intersectObject(e,t=!0,i=[]){return fh(e,this,i,t),i.sort(Cd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)fh(e[s],this,i,t);return i.sort(Cd),i}};yr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ot(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},$h=class $h{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};$h.prototype.isMatrix2=!0;ph=$h,Ta=class extends ni{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function Gf(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function xg(n){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,m)=>p.start-m.start);let h=0;for(let p=1;p<f.length;p++){let m=f[h],v=f[p];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++h,f[h]=v)}f.length=h+1;for(let p=0,m=f.length;p<m;p++){let v=f[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}function ex(n,e,t,i,s,r){let a=new nt(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function p(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let y=M.backgroundBlurriness>0;T=e.get(T,y)}return T}function m(M){let T=!1,y=p(M);y===null?g(a,o):y&&y.isColor&&(g(y,1),T=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(M,T){let y=p(T);y&&(y.isCubeTexture||y.mapping===Ca)?(c===void 0&&(c=new Vt(new ii(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Fs(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Q_.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hf),c.material.toneMapped=pt.getTransfer(y.colorSpace)!==vt,(u!==y||f!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Vt(new si(2,2),new dn({name:"BackgroundMaterial",uniforms:Fs(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=pt.getTransfer(y.colorSpace)!==vt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,T){M.getRGB(Jl,zh(n)),t.buffers.color.setClear(Jl.r,Jl.g,Jl.b,T,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:m,addToRenderList:v,dispose:d}}function tx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(L,N,z,I,B){let $=!1,Y=f(L,I,z,N);r!==Y&&(r=Y,c(r.object)),$=p(L,I,z,B),$&&m(L,I,z,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,y(L,N,z,I),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function f(L,N,z,I){let B=I.wireframe===!0,$=i[N.id];$===void 0&&($={},i[N.id]=$);let Y=L.isInstancedMesh===!0?L.id:0,he=$[Y];he===void 0&&(he={},$[Y]=he);let K=he[z.id];K===void 0&&(K={},he[z.id]=K);let oe=K[B];return oe===void 0&&(oe=h(l()),K[B]=oe),oe}function h(L){let N=[],z=[],I=[];for(let B=0;B<t;B++)N[B]=0,z[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:I,object:L,attributes:{},index:null}}function p(L,N,z,I){let B=r.attributes,$=N.attributes,Y=0,he=z.getAttributes();for(let K in he)if(he[K].location>=0){let te=B[K],Ne=$[K];if(Ne===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(Ne=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(Ne=L.instanceColor)),te===void 0||te.attribute!==Ne||Ne&&te.data!==Ne.data)return!0;Y++}return r.attributesNum!==Y||r.index!==I}function m(L,N,z,I){let B={},$=N.attributes,Y=0,he=z.getAttributes();for(let K in he)if(he[K].location>=0){let te=$[K];te===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(te=L.instanceColor));let Ne={};Ne.attribute=te,te&&te.data&&(Ne.data=te.data),B[K]=Ne,Y++}r.attributes=B,r.attributesNum=Y,r.index=I}function v(){let L=r.newAttributes;for(let N=0,z=L.length;N<z;N++)L[N]=0}function g(L){d(L,0)}function d(L,N){let z=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;z[L]=1,I[L]===0&&(n.enableVertexAttribArray(L),I[L]=1),B[L]!==N&&(n.vertexAttribDivisor(L,N),B[L]=N)}function M(){let L=r.newAttributes,N=r.enabledAttributes;for(let z=0,I=N.length;z<I;z++)N[z]!==L[z]&&(n.disableVertexAttribArray(z),N[z]=0)}function T(L,N,z,I,B,$,Y){Y===!0?n.vertexAttribIPointer(L,N,z,B,$):n.vertexAttribPointer(L,N,z,I,B,$)}function y(L,N,z,I){v();let B=I.attributes,$=z.getAttributes(),Y=N.defaultAttributeValues;for(let he in $){let K=$[he];if(K.location>=0){let oe=B[he];if(oe===void 0&&(he==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),he==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),oe!==void 0){let te=oe.normalized,Ne=oe.itemSize,Re=e.get(oe);if(Re===void 0)continue;let ut=Re.buffer,rt=Re.type,at=Re.bytesPerElement,Z=rt===n.INT||rt===n.UNSIGNED_INT||oe.gpuType===hl;if(oe.isInterleavedBufferAttribute){let J=oe.data,xe=J.stride,Je=oe.offset;if(J.isInstancedInterleavedBuffer){for(let Ee=0;Ee<K.locationSize;Ee++)d(K.location+Ee,J.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ee=0;Ee<K.locationSize;Ee++)g(K.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,ut);for(let Ee=0;Ee<K.locationSize;Ee++)T(K.location+Ee,Ne/K.locationSize,rt,te,xe*at,(Je+Ne/K.locationSize*Ee)*at,Z)}else{if(oe.isInstancedBufferAttribute){for(let J=0;J<K.locationSize;J++)d(K.location+J,oe.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let J=0;J<K.locationSize;J++)g(K.location+J);n.bindBuffer(n.ARRAY_BUFFER,ut);for(let J=0;J<K.locationSize;J++)T(K.location+J,Ne/K.locationSize,rt,te,Ne*at,Ne/K.locationSize*J*at,Z)}}else if(Y!==void 0){let te=Y[he];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(K.location,te);break;case 3:n.vertexAttrib3fv(K.location,te);break;case 4:n.vertexAttrib4fv(K.location,te);break;default:n.vertexAttrib1fv(K.location,te)}}}}M()}function w(){E();for(let L in i){let N=i[L];for(let z in N){let I=N[z];for(let B in I){let $=I[B];for(let Y in $)u($[Y].object),delete $[Y];delete I[B]}}delete i[L]}}function b(L){if(i[L.id]===void 0)return;let N=i[L.id];for(let z in N){let I=N[z];for(let B in I){let $=I[B];for(let Y in $)u($[Y].object),delete $[Y];delete I[B]}}delete i[L.id]}function C(L){for(let N in i){let z=i[N];for(let I in z){let B=z[I];if(B[L.id]===void 0)continue;let $=B[L.id];for(let Y in $)u($[Y].object),delete $[Y];delete B[L.id]}}}function _(L){for(let N in i){let z=i[N],I=L.isInstancedMesh===!0?L.id:0,B=z[I];if(B!==void 0){for(let $ in B){let Y=B[$];for(let he in Y)u(Y[he].object),delete Y[he];delete B[$]}delete z[I],Object.keys(z).length===0&&delete i[N]}}}function E(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function nx(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ix(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==$n&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let _=C===li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Mn&&C!==qn&&!_&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:y,maxSamples:w,samples:b}}function sx(n){let e=this,t=null,i=0,s=!1,r=!1,a=new In,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){let m=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,d=n.get(f);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{let M=r?0:i,T=M*4,y=d.clippingState||null;l.value=y,y=u(m,h,T,p);for(let w=0;w!==T;++w)y[w]=t[w];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,m){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=l.value,m!==!0||g===null){let d=p+v*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<d)&&(g=new Float32Array(d));for(let T=0,y=p;T!==v;++T,y+=4)a.copy(f[T]).applyMatrix4(M,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function cx(n){let e=[],t=[],i=n,s=n-Tr+1+rx;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,p=3,m=new Float32Array(p*h*f),v=new Float32Array(p*h*f);for(let d=0;d<f;d++){let M=d%3*2/3-1,T=d>2?0:-1,y=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];m.set(y,p*h*d);for(let w=0;w<h;w++){let b=u[w*2]*2-1,C=u[w*2+1]*2-1;d===0?Bs.set(1,C,b):d===1?Bs.set(-b,1,-C):d===2?Bs.set(-b,C,1):d===3?Bs.set(-1,C,-b):d===4?Bs.set(-b,-1,C):Bs.set(b,C,-1),Bs.toArray(v,(d*h+w)*p)}}let g=new Ft;g.setAttribute("position",new Ln(m,p)),g.setAttribute("outputDirection",new Ln(v,p)),t.push(new Vt(g,null)),i>Tr&&i--}return{lodMeshes:t,sizeLods:e}}function Mf(n,e,t){let i=new bn(n,e,t);return i.texture.mapping=Ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function hx(n,e,t){return new dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ox,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ec(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function ux(n,e,t){return new dn({name:"SphericalGaussianBlur",defines:{SAMPLES:ax,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ec(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Sf(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Ef(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function ec(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function dx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===ol||p===ll)if(e.has(h)){let m=e.get(h).texture;return o(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let v=new Ql(m.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,m=p===ol||p===ll,v=p===ls||p===Us;if(m||v){let g=t.get(h),d=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new jl(n)),g=m?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let M=h.image;return m&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new jl(n)),g=m?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,p){return p===ol?h.mapping=ls:p===ll&&(h.mapping=Us),h}function l(h){let p=0,m=6;for(let v=0;v<m;v++)h[v]!==void 0&&p++;return p===m}function c(h){let p=h.target;p.removeEventListener("dispose",c);let m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function fx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ss("WebGLRenderer: "+i+" extension not supported."),s}}}function px(n,e,t,i){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){let h=[],p=f.index,m=f.attributes.position,v=0;if(m===void 0)return;if(p!==null){let M=p.array;v=p.version;for(let T=0,y=M.length;T<y;T+=3){let w=M[T+0],b=M[T+1],C=M[T+2];h.push(w,b,b,C,C,w)}}else{let M=m.array;v=m.version;for(let T=0,y=M.length/3-1;T<y;T+=3){let w=T+0,b=T+1,C=T+2;h.push(w,b,b,C,C,w)}}let g=new(m.count>=65535?sa:ia)(h,1);g.version=v;let d=r.get(f);d&&e.remove(d),r.set(f,g)}function u(f){let h=r.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function mx(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*a),t.update(h,i,1)}function c(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,f*a,p),t.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,p);let v=0;for(let g=0;g<p;g++)v+=h[g];t.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function gx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function _x(n,e,t){let i=new WeakMap,s=new It;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==f){let E=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],T=0;p===!0&&(T=1),m===!0&&(T=2),v===!0&&(T=3);let y=o.attributes.position.count*T,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*w*4*f),C=new na(b,y,w,f);C.type=qn,C.needsUpdate=!0;let _=T*4;for(let R=0;R<f;R++){let L=g[R],N=d[R],z=M[R],I=y*w*4*R;for(let B=0;B<L.count;B++){let $=B*_;p===!0&&(s.fromBufferAttribute(L,B),b[I+$+0]=s.x,b[I+$+1]=s.y,b[I+$+2]=s.z,b[I+$+3]=0),m===!0&&(s.fromBufferAttribute(N,B),b[I+$+4]=s.x,b[I+$+5]=s.y,b[I+$+6]=s.z,b[I+$+7]=0),v===!0&&(s.fromBufferAttribute(z,B),b[I+$+8]=s.x,b[I+$+9]=s.y,b[I+$+10]=s.z,b[I+$+11]=z.itemSize===4?s.w:1)}}h={count:f,texture:C,size:new fe(y,w)},i.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function xx(n,e,t,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}function yx(n,e,t,i,s,r){let a=new bn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ft;c.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ht([0,2,0,0,2,0],2));let u=new Ho({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Vt(c,u),h=new vr(-1,1,1,-1,0,1),p=null,m=null,v=!1,g,d=null,M=[],T=!1;this.setSize=function(y,w){a.setSize(y,w),o!==null&&o.setSize(y,w),l!==null&&l.setSize(y,w);for(let b=0;b<M.length;b++){let C=M[b];C.setSize&&C.setSize(y,w)}},this.setEffects=function(y){M=y,T=M.length>0&&M[0].isRenderPass===!0;let w=a.width,b=a.height;M.length>0&&o===null&&(o=new bn(w,b,{type:li,depthBuffer:!1,stencilBuffer:!1}),l=new bn(w,b,{type:li,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<M.length;C++){let _=M[C];_.setSize&&_.setSize(w,b)}},this.begin=function(y,w){if(v||y.toneMapping===ai&&M.length===0)return!1;if(d=w,w!==null){let b=w.width,C=w.height;(a.width!==b||a.height!==C)&&this.setSize(b,C)}return T===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=ai,!0},this.hasRenderPass=function(){return T},this.end=function(y,w){y.toneMapping=g,v=!0;let b=a,C=o;for(let _=0;_<M.length;_++){let E=M[_];E.enabled!==!1&&(E.render(y,C,b,w),E.needsSwap!==!1&&(b=C,C=C===o?l:o))}if(p!==y.outputColorSpace||m!==y.toneMapping){p=y.outputColorSpace,m=y.toneMapping,u.defines={},pt.getTransfer(p)===vt&&(u.defines.SRGB_TRANSFER="");let _=vx[m];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(d),y.render(f,h),d=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}function Rr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=wf[s];if(r===void 0&&(r=new Float32Array(s),wf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function tc(n,e){let t=Tf[e];t===void 0&&(t=new Int32Array(e),Tf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function bx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Mx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function Sx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function Ex(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function wx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,i))return;Rf.set(i),n.uniformMatrix2fv(this.addr,!1,Rf),Ht(t,i)}}function Tx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,i))return;Cf.set(i),n.uniformMatrix3fv(this.addr,!1,Cf),Ht(t,i)}}function Ax(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,i))return;Af.set(i),n.uniformMatrix4fv(this.addr,!1,Af),Ht(t,i)}}function Cx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Rx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function Px(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function Ix(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function Lx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Dx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function Nx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function Ux(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function Ox(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(tu.compareFunction=t.isReversedDepthBuffer()?Zl:Yl,r=tu):r=Wf,t.setTexture2D(e||r,s)}function Fx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||qf,s)}function Bx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||$f,s)}function zx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Xf,s)}function kx(n){switch(n){case 5126:return bx;case 35664:return Mx;case 35665:return Sx;case 35666:return Ex;case 35674:return wx;case 35675:return Tx;case 35676:return Ax;case 5124:case 35670:return Cx;case 35667:case 35671:return Rx;case 35668:case 35672:return Px;case 35669:case 35673:return Ix;case 5125:return Lx;case 36294:return Dx;case 36295:return Nx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Ox;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return Bx;case 36289:case 36303:case 36311:case 36292:return zx}}function Vx(n,e){n.uniform1fv(this.addr,e)}function Gx(n,e){let t=Rr(e,this.size,2);n.uniform2fv(this.addr,t)}function Hx(n,e){let t=Rr(e,this.size,3);n.uniform3fv(this.addr,t)}function Wx(n,e){let t=Rr(e,this.size,4);n.uniform4fv(this.addr,t)}function Xx(n,e){let t=Rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qx(n,e){let t=Rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $x(n,e){let t=Rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Yx(n,e){n.uniform1iv(this.addr,e)}function Zx(n,e){n.uniform2iv(this.addr,e)}function Jx(n,e){n.uniform3iv(this.addr,e)}function Kx(n,e){n.uniform4iv(this.addr,e)}function jx(n,e){n.uniform1uiv(this.addr,e)}function Qx(n,e){n.uniform2uiv(this.addr,e)}function ev(n,e){n.uniform3uiv(this.addr,e)}function tv(n,e){n.uniform4uiv(this.addr,e)}function nv(n,e,t){let i=this.cache,s=e.length,r=tc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=tu:a=Wf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function iv(n,e,t){let i=this.cache,s=e.length,r=tc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||qf,r[a])}function sv(n,e,t){let i=this.cache,s=e.length,r=tc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||$f,r[a])}function rv(n,e,t){let i=this.cache,s=e.length,r=tc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Xf,r[a])}function av(n){switch(n){case 5126:return Vx;case 35664:return Gx;case 35665:return Hx;case 35666:return Wx;case 35674:return Xx;case 35675:return qx;case 35676:return $x;case 5124:case 35670:return Yx;case 35667:case 35671:return Zx;case 35668:case 35672:return Jx;case 35669:case 35673:return Kx;case 5125:return jx;case 36294:return Qx;case 36295:return ev;case 36296:return tv;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return rv}}function Pf(n,e){n.seq.push(e),n.map[e.id]=e}function ov(n,e,t){let i=n.name,s=i.length;for(Qh.lastIndex=0;;){let r=Qh.exec(i),a=Qh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Pf(t,c===void 0?new nu(o,n,e):new iu(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new su(o),Pf(t,f)),t=f}}}function If(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function hv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function uv(n){pt._getMatrix(Lf,pt.workingColorSpace,n);let e=`mat3( ${Lf.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(n)){case ea:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Df(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+hv(n.getShaderSource(e),o)}else return r}function dv(n,e){let t=uv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pv(n,e){let t=fv[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mv(){pt.getLuminanceCoefficients(Kl);let n=Kl.x.toFixed(4),e=Kl.y.toFixed(4),t=Kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(za).join(`
`)}function _v(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function za(n){return n!==""}function Nf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function ru(n){return n.replace(vv,bv)}function bv(n,e){let t=ct[e];if(t===void 0){let i=yv.get(e);if(i!==void 0)t=ct[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ru(t)}function Of(n){return n.replace(Mv,Sv)}function Sv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ff(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wv(n){return Ev[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Av(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Tv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}function Rv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Cv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Iv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Pv[n.combine]||"ENVMAP_BLENDING_NONE"}function Lv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Dv(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=wv(t),c=Av(t),u=Rv(t),f=Iv(t),h=Lv(t),p=gv(t),m=_v(r),v=s.createProgram(),g,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(za).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(za).join(`
`),d.length>0&&(d+=`
`)):(g=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(za).join(`
`),d=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?ct.tonemapping_pars_fragment:"",t.toneMapping!==ai?pv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,dv("linearToOutputTexel",t.outputColorSpace),mv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(za).join(`
`)),a=ru(a),a=Nf(a,t),a=Uf(a,t),o=ru(o),o=Nf(o,t),o=Uf(o,t),a=Of(a),o=Of(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===Uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let T=M+g+a,y=M+d+o,w=If(s,s.VERTEX_SHADER,T),b=If(s,s.FRAGMENT_SHADER,y);s.attachShader(v,w),s.attachShader(v,b),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(L){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(v)||"",z=s.getShaderInfoLog(w)||"",I=s.getShaderInfoLog(b)||"",B=N.trim(),$=z.trim(),Y=I.trim(),he=!0,K=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(he=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,w,b);else{let oe=Df(s,w,"vertex"),te=Df(s,b,"fragment");Qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+oe+`
`+te)}else B!==""?je("WebGLProgram: Program Info Log:",B):($===""||Y==="")&&(K=!1);K&&(L.diagnostics={runnable:he,programLog:B,vertexShader:{log:$,prefix:g},fragmentShader:{log:Y,prefix:d}})}s.deleteShader(w),s.deleteShader(b),_=new Ar(s,v),E=xv(s,v)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,lv)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=b,this}function Uv(n){return n===us||n===Na||n===Ua}function Ov(n,e,t,i,s,r){let a=new pr,o=new au,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer,h=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,E,R,L,N,z){let I=L.fog,B=N.geometry,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,he=e.get(_.envMap||$,Y),K=he&&he.mapping===Ca?he.image.height:null,oe=p[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&je("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let te=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ne=te!==void 0?te.length:0,Re=0;B.morphAttributes.position!==void 0&&(Re=1),B.morphAttributes.normal!==void 0&&(Re=2),B.morphAttributes.color!==void 0&&(Re=3);let ut,rt,at,Z;if(oe){let U=Ei[oe];ut=U.vertexShader,rt=U.fragmentShader}else{ut=_.vertexShader,rt=_.fragmentShader;let U=o.getVertexShaderStage(_),ee=o.getFragmentShaderStage(_);o.update(_,U,ee),at=U.id,Z=ee.id}let J=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),Je=N.isInstancedMesh===!0,Ee=N.isBatchedMesh===!0,Ye=!!_.map,re=!!_.matcap,k=!!he,G=!!_.aoMap,ne=!!_.lightMap,ie=!!_.bumpMap&&_.wireframe===!1,ce=!!_.normalMap,He=!!_.displacementMap,Oe=!!_.emissiveMap,ze=!!_.metalnessMap,We=!!_.roughnessMap,P=_.anisotropy>0,et=_.clearcoat>0,Ke=_.dispersion>0,A=_.retroreflectivity>0,x=_.iridescence>0,V=_.sheen>0,X=_.transmission>0,j=P&&!!_.anisotropyMap,pe=et&&!!_.clearcoatMap,me=et&&!!_.clearcoatNormalMap,Q=et&&!!_.clearcoatRoughnessMap,le=x&&!!_.iridescenceMap,Me=x&&!!_.iridescenceThicknessMap,Fe=V&&!!_.sheenColorMap,ve=V&&!!_.sheenRoughnessMap,_e=!!_.specularMap,Xe=!!_.specularColorMap,Ze=!!_.specularIntensityMap,it=X&&!!_.transmissionMap,F=X&&!!_.thicknessMap,ye=!!_.gradientMap,se=!!_.alphaMap,be=_.alphaTest>0,Te=!!_.alphaHash,ue=!!_.extensions,$e=ai;_.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&($e=n.toneMapping);let Be={shaderID:oe,shaderType:_.type,shaderName:_.name,vertexShader:ut,fragmentShader:rt,defines:_.defines,customVertexShaderID:at,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Ee,batchingColor:Ee&&N._colorsTexture!==null,instancing:Je,instancingColor:Je&&N.instanceColor!==null,instancingMorph:Je&&N.morphTexture!==null,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ye,matcap:re,envMap:k,envMapMode:k&&he.mapping,envMapCubeUVHeight:K,aoMap:G,lightMap:ne,bumpMap:ie,normalMap:ce,displacementMap:He,emissiveMap:Oe,normalMapObjectSpace:ce&&_.normalMapType===Qd,normalMapTangentSpace:ce&&_.normalMapType===$l,packedNormalMap:ce&&_.normalMapType===$l&&Uv(_.normalMap.format),metalnessMap:ze,roughnessMap:We,anisotropy:P,anisotropyMap:j,clearcoat:et,clearcoatMap:pe,clearcoatNormalMap:me,clearcoatRoughnessMap:Q,dispersion:Ke,retroreflection:A,iridescence:x,iridescenceMap:le,iridescenceThicknessMap:Me,sheen:V,sheenColorMap:Fe,sheenRoughnessMap:ve,specularMap:_e,specularColorMap:Xe,specularIntensityMap:Ze,transmission:X,transmissionMap:it,thicknessMap:F,gradientMap:ye,opaque:_.transparent===!1&&_.blending===Mr&&_.alphaToCoverage===!1,alphaMap:se,alphaTest:be,alphaHash:Te,combine:_.combine,mapUv:Ye&&m(_.map.channel),aoMapUv:G&&m(_.aoMap.channel),lightMapUv:ne&&m(_.lightMap.channel),bumpMapUv:ie&&m(_.bumpMap.channel),normalMapUv:ce&&m(_.normalMap.channel),displacementMapUv:He&&m(_.displacementMap.channel),emissiveMapUv:Oe&&m(_.emissiveMap.channel),metalnessMapUv:ze&&m(_.metalnessMap.channel),roughnessMapUv:We&&m(_.roughnessMap.channel),anisotropyMapUv:j&&m(_.anisotropyMap.channel),clearcoatMapUv:pe&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:me&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:ve&&m(_.sheenRoughnessMap.channel),specularMapUv:_e&&m(_.specularMap.channel),specularColorMapUv:Xe&&m(_.specularColorMap.channel),specularIntensityMapUv:Ze&&m(_.specularIntensityMap.channel),transmissionMapUv:it&&m(_.transmissionMap.channel),thicknessMapUv:F&&m(_.thicknessMap.channel),alphaMapUv:se&&m(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ce||P),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(Ye||se),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&ce===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xe,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Re,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:Ye&&_.map.isVideoTexture===!0&&pt.getTransfer(_.map.colorSpace)===vt,decodeVideoTextureEmissive:Oe&&_.emissiveMap.isVideoTexture===!0&&pt.getTransfer(_.emissiveMap.colorSpace)===vt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===fn,flipSided:_.side===jt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ue&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&_.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function g(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)E.push(R),E.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(d(E,_),M(E,_),E.push(n.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function d(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function M(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function T(_){let E=p[_.type],R;if(E){let L=Ei[E];R=xf.clone(L.uniforms)}else R=_.uniforms;return R}function y(_,E){let R=u.get(E);return R!==void 0?++R.usedTimes:(R=new Dv(n,E,_,s),c.push(R),u.set(E,R)),R}function w(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:T,acquireProgram:y,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:C}}function Fv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Bv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Bf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,m,v,g,d){let M=n[e];return M===void 0?(M={id:h.id,object:h,geometry:p,material:m,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:g,group:d},n[e]=M):(M.id=h.id,M.object=h,M.geometry=p,M.material=m,M.materialVariant=a(h),M.groupOrder=v,M.renderOrder=h.renderOrder,M.z=g,M.group=d),e++,M}function l(h,p,m,v,g,d,M){M.reversedDepth===!0&&(g=-g);let T=o(h,p,m,v,g,d);m.transmission>0?i.push(T):m.transparent===!0?s.push(T):t.push(T)}function c(h,p,m,v,g,d){let M=o(h,p,m,v,g,d);m.transmission>0?i.unshift(M):m.transparent===!0?s.unshift(M):t.unshift(M)}function u(h,p){t.length>1&&t.sort(h||Bv),i.length>1&&i.sort(p||Bf),s.length>1&&s.sort(p||Bf)}function f(){for(let h=e,p=n.length;h<p;h++){let m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function zv(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new zf,n.set(i,[a])):s>=r.length?(a=new zf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function kv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new nt};break;case"SpotLight":t={position:new D,direction:new D,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function Vv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function Hv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Wv(n){let e=new kv,t=Vv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new Et,a=new Et;function o(c){let u=0,f=0,h=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let p=0,m=0,v=0,g=0,d=0,M=0,T=0,y=0,w=0,b=0,C=0,_=0,E=0,R=0;c.sort(Hv);for(let N=0,z=c.length;N<z;N++){let I=c[N],B=I.color,$=I.intensity,Y=I.distance,he=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===us?he=I.shadow.map.texture:he=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=B.r*$,f+=B.g*$,h+=B.b*$;else if(I.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(I.sh.coefficients[K],$);R++}else if(I.isSunLight){let K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let oe=I.shadow,te=t.get(I);te.shadowIntensity=oe.intensity,te.shadowBias=oe.bias,te.shadowNormalBias=oe.normalBias,te.shadowRadius=oe.radius,te.shadowMapSize.copy(oe.mapSize).multiply(oe.getFrameExtents()),i.sunShadow[m]=te,i.sunShadowMap[m]=he;let Ne=oe.getViewportCount();for(let Re=0;Re<Ne;Re++)i.sunShadowMatrix[v+Re]=oe.getMatrix(Re),i.sunShadowCascade[v+Re]=oe._cascadeData[Re];v+=Ne,m++}i.sun[p]=K,p++}else if(I.isDirectionalLight){let K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let oe=I.shadow,te=t.get(I);te.shadowIntensity=oe.intensity,te.shadowBias=oe.bias,te.shadowNormalBias=oe.normalBias,te.shadowRadius=oe.radius,te.shadowMapSize=oe.mapSize,i.directionalShadow[g]=te,i.directionalShadowMap[g]=he,i.directionalShadowMatrix[g]=I.shadow.matrix,w++}i.directional[g]=K,g++}else if(I.isSpotLight){let K=e.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(B).multiplyScalar($),K.distance=Y,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,i.spot[M]=K;let oe=I.shadow;if(I.map&&(i.spotLightMap[_]=I.map,_++,oe.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[M]=oe.matrix,I.castShadow){let te=t.get(I);te.shadowIntensity=oe.intensity,te.shadowBias=oe.bias,te.shadowNormalBias=oe.normalBias,te.shadowRadius=oe.radius,te.shadowMapSize=oe.mapSize,i.spotShadow[M]=te,i.spotShadowMap[M]=he,C++}M++}else if(I.isRectAreaLight){let K=e.get(I);K.color.copy(B).multiplyScalar($),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),i.rectArea[T]=K,T++}else if(I.isPointLight){let K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),K.distance=I.distance,K.decay=I.decay,I.castShadow){let oe=I.shadow,te=t.get(I);te.shadowIntensity=oe.intensity,te.shadowBias=oe.bias,te.shadowNormalBias=oe.normalBias,te.shadowRadius=oe.radius,te.shadowMapSize=oe.mapSize,te.shadowCameraNear=oe.camera.near,te.shadowCameraFar=oe.camera.far,i.pointShadow[d]=te,i.pointShadowMap[d]=he,i.pointShadowMatrix[d]=I.shadow.matrix,b++}i.point[d]=K,d++}else if(I.isHemisphereLight){let K=e.get(I);K.skyColor.copy(I.color).multiplyScalar($),K.groundColor.copy(I.groundColor).multiplyScalar($),i.hemi[y]=K,y++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let L=i.hash;(L.sunLength!==p||L.directionalLength!==g||L.pointLength!==d||L.spotLength!==M||L.rectAreaLength!==T||L.hemiLength!==y||L.numSunShadows!==m||L.numDirectionalShadows!==w||L.numPointShadows!==b||L.numSpotShadows!==C||L.numSpotMaps!==_||L.numLightProbes!==R)&&(i.sun.length=p,i.directional.length=g,i.spot.length=M,i.rectArea.length=T,i.point.length=d,i.hemi.length=y,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+_-E,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,L.sunLength=p,L.directionalLength=g,L.pointLength=d,L.spotLength=M,L.rectAreaLength=T,L.hemiLength=y,L.numSunShadows=m,L.numDirectionalShadows=w,L.numPointShadows=b,L.numSpotShadows=C,L.numSpotMaps=_,L.numLightProbes=R,i.version=Gv++)}function l(c,u){let f=0,h=0,p=0,m=0,v=0,g=0,d=u.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){let y=c[M];if(y.isSunLight){let w=i.sun[f];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(d),f++}else if(y.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),h++}else if(y.isSpotLight){let w=i.spot[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),m++}else if(y.isRectAreaLight){let w=i.rectArea[v];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),a.identity(),r.copy(y.matrixWorld),r.premultiply(d),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let w=i.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){let w=i.hemi[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(d),g++}}}return{setup:o,setupView:l,state:i}}function kf(n){let e=new Wv(n),t=[],i=[],s=[];function r(h){f.camera=h,t.length=0,i.length=0,s.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Xv(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new kf(n),e.set(s,[o])):r>=a.length?(o=new kf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}function Jv(n,e,t){let i=new gr,s=new fe,r=new fe,a=new It,o=new Wo,l=new Xo,c={},u=t.maxTextureSize,f={[os]:jt,[jt]:os,[fn]:fn},h=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:qv,fragmentShader:$v}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let m=new Ft;m.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Vt(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Aa;let d=this.type;this.render=function(b,C,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===al&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Aa);let E=n.getRenderTarget(),R=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Mi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let z=d!==this.type;z&&C.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=b.length;I<B;I++){let $=b[I],Y=$.shadow;if(Y===void 0){je("WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let he=Y.getFrameExtents();s.multiply(he),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/he.x),s.x=r.x*he.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/he.y),s.y=r.y*he.y,Y.mapSize.y=r.y));let K=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=K,Y.map===null||z===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===br){if($.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new bn(s.x,s.y,{format:us,type:li,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),Y.map.texture.name=$.name+".shadowMap",Y.map.depthTexture=new ji(s.x,s.y,qn),Y.map.depthTexture.name=$.name+".shadowMapDepth",Y.map.depthTexture.format=vi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Jt,Y.map.depthTexture.magFilter=Jt}else $.isPointLight?(Y.map=new Ql(s.x),Y.map.depthTexture=new Fo(s.x,oi)):(Y.map=new bn(s.x,s.y),Y.map.depthTexture=new ji(s.x,s.y,oi)),Y.map.depthTexture.name=$.name+".shadowMap",Y.map.depthTexture.format=vi,this.type===Aa?(Y.map.depthTexture.compareFunction=K?Zl:Yl,Y.map.depthTexture.minFilter=Kt,Y.map.depthTexture.magFilter=Kt):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Jt,Y.map.depthTexture.magFilter=Jt);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let oe=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();$.isPointLight!==!0&&Y.updateMatrices($,_);for(let te=0;te<oe;te++){let Ne=Y.getCamera(te);if($.isPointLight){let Re=Y.camera,ut=Y.matrix,rt=$.distance||Re.far;rt!==Re.far&&(Re.far=rt,Re.updateProjectionMatrix()),Ba.setFromMatrixPosition($.matrixWorld),Re.position.copy(Ba),eu.copy(Re.position),eu.add(Yv[te]),Re.up.copy(Zv[te]),Re.lookAt(eu),Re.updateMatrixWorld(),ut.makeTranslation(-Ba.x,-Ba.y,-Ba.z),Vf.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Vf,Re.coordinateSystem,Re.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,te),n.clear();else{te===0&&(n.setRenderTarget(Y.map),n.clear());let Re=Y.getViewport(te);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),N.viewport(a)}i=Y.getFrustum(te),y(C,_,Ne,$,this.type)}Y.isPointLightShadow!==!0&&this.type===br&&M(Y,_),Y.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(E,R,L)};function M(b,C){let _=e.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new bn(s.x,s.y,{format:us,type:li}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(C,null,_,h,v,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(C,null,_,p,v,null)}function T(b,C,_,E){let R=null,L=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)R=L;else if(R=_.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let N=R.uuid,z=C.uuid,I=c[N];I===void 0&&(I={},c[N]=I);let B=I[z];B===void 0&&(B=R.clone(),I[z]=B,C.addEventListener("dispose",w)),R=B}if(R.visible=C.visible,R.wireframe=C.wireframe,E===br?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:f[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=n.properties.get(R);N.light=_}return R}function y(b,C,_,E,R){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===br)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let z=e.update(b),I=b.material;if(Array.isArray(I)){let B=z.groups;for(let $=0,Y=B.length;$<Y;$++){let he=B[$],K=I[he.materialIndex];if(K&&K.visible){let oe=T(b,K,E,R);b.onBeforeShadow(n,b,C,_,z,oe,he),n.renderBufferDirect(_,null,z,oe,b,he),b.onAfterShadow(n,b,C,_,z,oe,he)}}}else if(I.visible){let B=T(b,I,E,R);b.onBeforeShadow(n,b,C,_,z,B,null),n.renderBufferDirect(_,null,z,B,b,null),b.onAfterShadow(n,b,C,_,z,B,null)}}let N=b.children;for(let z=0,I=N.length;z<I;z++)y(N[z],C,_,E,R)}function w(b){b.target.removeEventListener("dispose",w);for(let _ in c){let E=c[_],R=b.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function Kv(n,e){function t(){let F=!1,ye=new It,se=null,be=new It(0,0,0,0);return{setMask:function(Te){se!==Te&&!F&&(n.colorMask(Te,Te,Te,Te),se=Te)},setLocked:function(Te){F=Te},setClear:function(Te,ue,$e,Be,U){U===!0&&(Te*=Be,ue*=Be,$e*=Be),ye.set(Te,ue,$e,Be),be.equals(ye)===!1&&(n.clearColor(Te,ue,$e,Be),be.copy(ye))},reset:function(){F=!1,se=null,be.set(-1,0,0,0)}}}function i(){let F=!1,ye=!1,se=null,be=null,Te=null;return{setReversed:function(ue){if(ye!==ue){let $e=e.get("EXT_clip_control");ue?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),ye=ue;let Be=Te;Te=null,this.setClear(Be)}},getReversed:function(){return ye},setTest:function(ue){ue?J(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(ue){se!==ue&&!F&&(n.depthMask(ue),se=ue)},setFunc:function(ue){if(ye&&(ue=df[ue]),be!==ue){switch(ue){case wo:n.depthFunc(n.NEVER);break;case To:n.depthFunc(n.ALWAYS);break;case Ao:n.depthFunc(n.LESS);break;case lr:n.depthFunc(n.LEQUAL);break;case Co:n.depthFunc(n.EQUAL);break;case Ro:n.depthFunc(n.GEQUAL);break;case Po:n.depthFunc(n.GREATER);break;case Io:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=ue}},setLocked:function(ue){F=ue},setClear:function(ue){Te!==ue&&(Te=ue,ye&&(ue=1-ue),n.clearDepth(ue))},reset:function(){F=!1,se=null,be=null,Te=null,ye=!1}}}function s(){let F=!1,ye=null,se=null,be=null,Te=null,ue=null,$e=null,Be=null,U=null;return{setTest:function(ee){F||(ee?J(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(ee){ye!==ee&&!F&&(n.stencilMask(ee),ye=ee)},setFunc:function(ee,Se,Le){(se!==ee||be!==Se||Te!==Le)&&(n.stencilFunc(ee,Se,Le),se=ee,be=Se,Te=Le)},setOp:function(ee,Se,Le){(ue!==ee||$e!==Se||Be!==Le)&&(n.stencilOp(ee,Se,Le),ue=ee,$e=Se,Be=Le)},setLocked:function(ee){F=ee},setClear:function(ee){U!==ee&&(n.clearStencil(ee),U=ee)},reset:function(){F=!1,ye=null,se=null,be=null,Te=null,ue=null,$e=null,Be=null,U=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},p=new WeakMap,m=[],v=null,g=!1,d=null,M=null,T=null,y=null,w=null,b=null,C=null,_=new nt(0,0,0),E=0,R=!1,L=null,N=null,z=null,I=null,B=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,he=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=he>=1):K.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=he>=2);let oe=null,te={},Ne=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),ut=new It().fromArray(Ne),rt=new It().fromArray(Re);function at(F,ye,se,be){let Te=new Uint8Array(4),ue=n.createTexture();n.bindTexture(F,ue),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<se;$e++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(ye+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return ue}let Z={};Z[n.TEXTURE_2D]=at(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=at(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=at(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=at(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(n.DEPTH_TEST),a.setFunc(lr),ie(!1),ce(mh),J(n.CULL_FACE),G(Mi);function J(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function xe(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Je(F,ye){return h[F]!==ye?(n.bindFramebuffer(F,ye),h[F]=ye,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ye),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function Ee(F,ye){let se=m,be=!1;if(F){se=p.get(ye),se===void 0&&(se=[],p.set(ye,se));let Te=F.textures;if(se.length!==Te.length||se[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,$e=Te.length;ue<$e;ue++)se[ue]=n.COLOR_ATTACHMENT0+ue;se.length=Te.length,be=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,be=!0);be&&n.drawBuffers(se)}function Ye(F){return v!==F?(n.useProgram(F),v=F,!0):!1}let re={[Ds]:n.FUNC_ADD,[Ld]:n.FUNC_SUBTRACT,[Dd]:n.FUNC_REVERSE_SUBTRACT};re[Nd]=n.MIN,re[Ud]=n.MAX;let k={[Od]:n.ZERO,[Fd]:n.ONE,[Bd]:n.SRC_COLOR,[vh]:n.SRC_ALPHA,[Wd]:n.SRC_ALPHA_SATURATE,[Gd]:n.DST_COLOR,[kd]:n.DST_ALPHA,[zd]:n.ONE_MINUS_SRC_COLOR,[yh]:n.ONE_MINUS_SRC_ALPHA,[Hd]:n.ONE_MINUS_DST_COLOR,[Vd]:n.ONE_MINUS_DST_ALPHA,[Xd]:n.CONSTANT_COLOR,[qd]:n.ONE_MINUS_CONSTANT_COLOR,[$d]:n.CONSTANT_ALPHA,[Yd]:n.ONE_MINUS_CONSTANT_ALPHA};function G(F,ye,se,be,Te,ue,$e,Be,U,ee){if(F===Mi){g===!0&&(xe(n.BLEND),g=!1);return}if(g===!1&&(J(n.BLEND),g=!0),F!==Id){if(F!==d||ee!==R){if((M!==Ds||w!==Ds)&&(n.blendEquation(n.FUNC_ADD),M=Ds,w=Ds),ee)switch(F){case Mr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gh:n.blendFunc(n.ONE,n.ONE);break;case _h:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Qe("WebGLState: Invalid blending: ",F);break}else switch(F){case Mr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case _h:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xh:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",F);break}T=null,y=null,b=null,C=null,_.set(0,0,0),E=0,d=F,R=ee}return}Te=Te||ye,ue=ue||se,$e=$e||be,(ye!==M||Te!==w)&&(n.blendEquationSeparate(re[ye],re[Te]),M=ye,w=Te),(se!==T||be!==y||ue!==b||$e!==C)&&(n.blendFuncSeparate(k[se],k[be],k[ue],k[$e]),T=se,y=be,b=ue,C=$e),(Be.equals(_)===!1||U!==E)&&(n.blendColor(Be.r,Be.g,Be.b,U),_.copy(Be),E=U),d=F,R=!1}function ne(F,ye){F.side===fn?xe(n.CULL_FACE):J(n.CULL_FACE);let se=F.side===jt;ye&&(se=!se),ie(se),F.blending===Mr&&F.transparent===!1?G(Mi):G(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let be=F.stencilWrite;o.setTest(be),be&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Oe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ie(F){L!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),L=F)}function ce(F){F!==Rd?(J(n.CULL_FACE),F!==N&&(F===mh?n.cullFace(n.BACK):F===Pd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),N=F}function He(F){F!==z&&(Y&&n.lineWidth(F),z=F)}function Oe(F,ye,se){F?(J(n.POLYGON_OFFSET_FILL),(I!==ye||B!==se)&&(I=ye,B=se,a.getReversed()&&(ye=-ye),n.polygonOffset(ye,se))):xe(n.POLYGON_OFFSET_FILL)}function ze(F){F?J(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function We(F){F===void 0&&(F=n.TEXTURE0+$-1),oe!==F&&(n.activeTexture(F),oe=F)}function P(F,ye,se){se===void 0&&(oe===null?se=n.TEXTURE0+$-1:se=oe);let be=te[se];be===void 0&&(be={type:void 0,texture:void 0},te[se]=be),(be.type!==F||be.texture!==ye)&&(oe!==se&&(n.activeTexture(se),oe=se),n.bindTexture(F,ye||Z[F]),be.type=F,be.texture=ye)}function et(){let F=te[oe];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ke(){try{n.compressedTexImage2D(...arguments)}catch(F){Qe("WebGLState:",F)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(F){Qe("WebGLState:",F)}}function x(){try{n.texSubImage2D(...arguments)}catch(F){Qe("WebGLState:",F)}}function V(){try{n.texSubImage3D(...arguments)}catch(F){Qe("WebGLState:",F)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(F){Qe("WebGLState:",F)}}function j(){try{n.compressedTexSubImage3D(...arguments)}catch(F){Qe("WebGLState:",F)}}function pe(){try{n.texStorage2D(...arguments)}catch(F){Qe("WebGLState:",F)}}function me(){try{n.texStorage3D(...arguments)}catch(F){Qe("WebGLState:",F)}}function Q(){try{n.texImage2D(...arguments)}catch(F){Qe("WebGLState:",F)}}function le(){try{n.texImage3D(...arguments)}catch(F){Qe("WebGLState:",F)}}function Me(F){return f[F]!==void 0?f[F]:n.getParameter(F)}function Fe(F,ye){f[F]!==ye&&(n.pixelStorei(F,ye),f[F]=ye)}function ve(F){ut.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ut.copy(F))}function _e(F){rt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),rt.copy(F))}function Xe(F,ye){let se=c.get(ye);se===void 0&&(se=new WeakMap,c.set(ye,se));let be=se.get(F);be===void 0&&(be=n.getUniformBlockIndex(ye,F.name),se.set(F,be))}function Ze(F,ye){let be=c.get(ye).get(F);l.get(ye)!==be&&(n.uniformBlockBinding(ye,be,F.__bindingPointIndex),l.set(ye,be))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},oe=null,te={},h={},p=new WeakMap,m=[],v=null,g=!1,d=null,M=null,T=null,y=null,w=null,b=null,C=null,_=new nt(0,0,0),E=0,R=!1,L=null,N=null,z=null,I=null,B=null,ut.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:xe,bindFramebuffer:Je,drawBuffers:Ee,useProgram:Ye,setBlending:G,setMaterial:ne,setFlipSided:ie,setCullFace:ce,setLineWidth:He,setPolygonOffset:Oe,setScissorTest:ze,activeTexture:We,bindTexture:P,unbindTexture:et,compressedTexImage2D:Ke,compressedTexImage3D:A,texImage2D:Q,texImage3D:le,pixelStorei:Fe,getParameter:Me,updateUBOMapping:Xe,uniformBlockBinding:Ze,texStorage2D:pe,texStorage3D:me,texSubImage2D:x,texSubImage3D:V,compressedTexSubImage2D:X,compressedTexSubImage3D:j,scissor:ve,viewport:_e,reset:it}}function jv(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,u=new WeakMap,f=new Set,h,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,x){return m?new OffscreenCanvas(A,x):ta("canvas")}function g(A,x,V){let X=1,j=Ke(A);if((j.width>V||j.height>V)&&(X=V/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let pe=Math.floor(X*j.width),me=Math.floor(X*j.height);h===void 0&&(h=v(pe,me));let Q=x?v(pe,me):h;return Q.width=pe,Q.height=me,Q.getContext("2d").drawImage(A,0,0,pe,me),je("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+pe+"x"+me+")."),Q}else return"data"in A&&je("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function d(A){return A.generateMipmaps}function M(A){n.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(A,x,V,X,j,pe=!1){if(A!==null){if(n[A]!==void 0)return n[A];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let me;X&&(me=e.get("EXT_texture_norm16"),me||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===n.RED&&(V===n.FLOAT&&(Q=n.R32F),V===n.HALF_FLOAT&&(Q=n.R16F),V===n.UNSIGNED_BYTE&&(Q=n.R8),V===n.UNSIGNED_SHORT&&me&&(Q=me.R16_EXT),V===n.SHORT&&me&&(Q=me.R16_SNORM_EXT)),x===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.R8UI),V===n.UNSIGNED_SHORT&&(Q=n.R16UI),V===n.UNSIGNED_INT&&(Q=n.R32UI),V===n.BYTE&&(Q=n.R8I),V===n.SHORT&&(Q=n.R16I),V===n.INT&&(Q=n.R32I)),x===n.RG&&(V===n.FLOAT&&(Q=n.RG32F),V===n.HALF_FLOAT&&(Q=n.RG16F),V===n.UNSIGNED_BYTE&&(Q=n.RG8),V===n.UNSIGNED_SHORT&&me&&(Q=me.RG16_EXT),V===n.SHORT&&me&&(Q=me.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RG8UI),V===n.UNSIGNED_SHORT&&(Q=n.RG16UI),V===n.UNSIGNED_INT&&(Q=n.RG32UI),V===n.BYTE&&(Q=n.RG8I),V===n.SHORT&&(Q=n.RG16I),V===n.INT&&(Q=n.RG32I)),x===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),V===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),V===n.UNSIGNED_INT&&(Q=n.RGB32UI),V===n.BYTE&&(Q=n.RGB8I),V===n.SHORT&&(Q=n.RGB16I),V===n.INT&&(Q=n.RGB32I)),x===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),V===n.UNSIGNED_INT&&(Q=n.RGBA32UI),V===n.BYTE&&(Q=n.RGBA8I),V===n.SHORT&&(Q=n.RGBA16I),V===n.INT&&(Q=n.RGBA32I)),x===n.RGB&&(V===n.UNSIGNED_SHORT&&me&&(Q=me.RGB16_EXT),V===n.SHORT&&me&&(Q=me.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),x===n.RGBA){let le=pe?ea:pt.getTransfer(j);V===n.FLOAT&&(Q=n.RGBA32F),V===n.HALF_FLOAT&&(Q=n.RGBA16F),V===n.UNSIGNED_BYTE&&(Q=le===vt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&me&&(Q=me.RGBA16_EXT),V===n.SHORT&&me&&(Q=me.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function w(A,x){let V;return A?x===null||x===oi||x===Er?V=n.DEPTH24_STENCIL8:x===qn?V=n.DEPTH32F_STENCIL8:x===Sr&&(V=n.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===oi||x===Er?V=n.DEPTH_COMPONENT24:x===qn?V=n.DEPTH_COMPONENT32F:x===Sr&&(V=n.DEPTH_COMPONENT16),V}function b(A,x){return d(A)===!0||A.isFramebufferTexture&&A.minFilter!==Jt&&A.minFilter!==Kt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){let x=A.target;x.removeEventListener("dispose",C),E(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&f.delete(x)}function _(A){let x=A.target;x.removeEventListener("dispose",_),L(x)}function E(A){let x=i.get(A);if(x.__webglInit===void 0)return;let V=A.source,X=p.get(V);if(X){let j=X[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(A),Object.keys(X).length===0&&p.delete(V)}i.remove(A)}function R(A){let x=i.get(A);n.deleteTexture(x.__webglTexture);let V=A.source,X=p.get(V);delete X[x.__cacheKey],a.memory.textures--}function L(A){let x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let j=0;j<x.__webglFramebuffer[X].length;j++)n.deleteFramebuffer(x.__webglFramebuffer[X][j]);else n.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)n.deleteFramebuffer(x.__webglFramebuffer[X]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let V=A.textures;for(let X=0,j=V.length;X<j;X++){let pe=i.get(V[X]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),a.memory.textures--),i.remove(V[X])}i.remove(A)}let N=0;function z(){N=0}function I(){return N}function B(A){N=A}function $(){let A=N;return A>=s.maxTextures&&je("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,A}function Y(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function he(A,x){let V=i.get(A);if(A.isVideoTexture&&P(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){let X=A.image;if(X===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(V,A,x);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+x)}function K(A,x){let V=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){xe(V,A,x);return}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+x)}function oe(A,x){let V=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){xe(V,A,x);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+x)}function te(A,x){let V=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&V.__version!==A.version){Je(V,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+x)}let Ne={[cr]:n.REPEAT,[xi]:n.CLAMP_TO_EDGE,[Lo]:n.MIRRORED_REPEAT},Re={[Jt]:n.NEAREST,[Kd]:n.NEAREST_MIPMAP_NEAREST,[Ra]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[cl]:n.LINEAR_MIPMAP_NEAREST,[cs]:n.LINEAR_MIPMAP_LINEAR},ut={[tf]:n.NEVER,[of]:n.ALWAYS,[nf]:n.LESS,[Yl]:n.LEQUAL,[sf]:n.EQUAL,[Zl]:n.GEQUAL,[rf]:n.GREATER,[af]:n.NOTEQUAL};function rt(A,x){if(x.type===qn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Kt||x.magFilter===cl||x.magFilter===Ra||x.magFilter===cs||x.minFilter===Kt||x.minFilter===cl||x.minFilter===Ra||x.minFilter===cs)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Ne[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Ne[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Ne[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Re[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Re[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ut[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Jt||x.minFilter!==Ra&&x.minFilter!==cs||x.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function at(A,x){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));let X=x.source,j=p.get(X);j===void 0&&(j={},p.set(X,j));let pe=Y(x);if(pe!==A.__cacheKey){j[pe]===void 0&&(j[pe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),j[pe].usedTimes++;let me=j[A.__cacheKey];me!==void 0&&(j[A.__cacheKey].usedTimes--,me.usedTimes===0&&R(x)),A.__cacheKey=pe,A.__webglTexture=j[pe].texture}return V}function Z(A,x,V){return Math.floor(Math.floor(A/V)/x)}function J(A,x,V,X){let pe=A.updateRanges;if(pe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,V,X,x.data);else{pe.sort((Fe,ve)=>Fe.start-ve.start);let me=0;for(let Fe=1;Fe<pe.length;Fe++){let ve=pe[me],_e=pe[Fe],Xe=ve.start+ve.count,Ze=Z(_e.start,x.width,4),it=Z(ve.start,x.width,4);_e.start<=Xe+1&&Ze===it&&Z(_e.start+_e.count-1,x.width,4)===Ze?ve.count=Math.max(ve.count,_e.start+_e.count-ve.start):(++me,pe[me]=_e)}pe.length=me+1;let Q=t.getParameter(n.UNPACK_ROW_LENGTH),le=t.getParameter(n.UNPACK_SKIP_PIXELS),Me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Fe=0,ve=pe.length;Fe<ve;Fe++){let _e=pe[Fe],Xe=Math.floor(_e.start/4),Ze=Math.ceil(_e.count/4),it=Xe%x.width,F=Math.floor(Xe/x.width),ye=Ze,se=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,it),t.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,it,F,ye,se,V,X,x.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,le),t.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function xe(A,x,V){let X=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=n.TEXTURE_3D);let j=at(A,x),pe=x.source;t.bindTexture(X,A.__webglTexture,n.TEXTURE0+V);let me=i.get(pe);if(pe.version!==me.__version||j===!0){if(t.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let se=pt.getPrimaries(pt.workingColorSpace),be=x.colorSpace===Bi?null:pt.getPrimaries(x.colorSpace),Te=x.colorSpace===Bi||se===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let le=g(x.image,!1,s.maxTextureSize);le=et(x,le);let Me=r.convert(x.format,x.colorSpace),Fe=r.convert(x.type),ve=y(x.internalFormat,Me,Fe,x.normalized,x.colorSpace,x.isVideoTexture);rt(X,x);let _e,Xe=x.mipmaps,Ze=x.isVideoTexture!==!0,it=me.__version===void 0||j===!0,F=pe.dataReady,ye=b(x,le);if(x.isDepthTexture)ve=w(x.format===hs,x.type),it&&(Ze?t.texStorage2D(n.TEXTURE_2D,1,ve,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,ve,le.width,le.height,0,Me,Fe,null));else if(x.isDataTexture)if(Xe.length>0){Ze&&it&&t.texStorage2D(n.TEXTURE_2D,ye,ve,Xe[0].width,Xe[0].height);for(let se=0,be=Xe.length;se<be;se++)_e=Xe[se],Ze?F&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,_e.width,_e.height,Me,Fe,_e.data):t.texImage2D(n.TEXTURE_2D,se,ve,_e.width,_e.height,0,Me,Fe,_e.data);x.generateMipmaps=!1}else Ze?(it&&t.texStorage2D(n.TEXTURE_2D,ye,ve,le.width,le.height),F&&J(x,le,Me,Fe)):t.texImage2D(n.TEXTURE_2D,0,ve,le.width,le.height,0,Me,Fe,le.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ze&&it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,ve,Xe[0].width,Xe[0].height,le.depth);for(let se=0,be=Xe.length;se<be;se++)if(_e=Xe[se],x.format!==$n)if(Me!==null)if(Ze){if(F)if(x.layerUpdates.size>0){let Te=Gh(_e.width,_e.height,x.format,x.type);for(let ue of x.layerUpdates){let $e=_e.data.subarray(ue*Te/_e.data.BYTES_PER_ELEMENT,(ue+1)*Te/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,ue,_e.width,_e.height,1,Me,$e)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,le.depth,Me,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,ve,_e.width,_e.height,le.depth,0,_e.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,le.depth,Me,Fe,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,ve,_e.width,_e.height,le.depth,0,Me,Fe,_e.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ze&&it&&t.texStorage2D(n.TEXTURE_2D,ye,ve,Xe[0].width,Xe[0].height);for(let se=0,be=Xe.length;se<be;se++)_e=Xe[se],x.format!==$n?Me!==null?Ze?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,_e.width,_e.height,Me,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,se,ve,_e.width,_e.height,0,_e.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?F&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,_e.width,_e.height,Me,Fe,_e.data):t.texImage2D(n.TEXTURE_2D,se,ve,_e.width,_e.height,0,Me,Fe,_e.data)}else if(x.isDataArrayTexture)if(Ze){if(it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,ve,le.width,le.height,le.depth),F)if(x.layerUpdates.size>0){let se=Gh(le.width,le.height,x.format,x.type);for(let be of x.layerUpdates){let Te=le.data.subarray(be*se/le.data.BYTES_PER_ELEMENT,(be+1)*se/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,be,le.width,le.height,1,Me,Fe,Te)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Me,Fe,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,le.width,le.height,le.depth,0,Me,Fe,le.data);else if(x.isData3DTexture)Ze?(it&&t.texStorage3D(n.TEXTURE_3D,ye,ve,le.width,le.height,le.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Me,Fe,le.data)):t.texImage3D(n.TEXTURE_3D,0,ve,le.width,le.height,le.depth,0,Me,Fe,le.data);else if(x.isFramebufferTexture){if(it)if(Ze)t.texStorage2D(n.TEXTURE_2D,ye,ve,le.width,le.height);else{let se=le.width,be=le.height;for(let Te=0;Te<ye;Te++)t.texImage2D(n.TEXTURE_2D,Te,ve,se,be,0,Me,Fe,null),se>>=1,be>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let se=n.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),le.parentNode!==se){se.appendChild(le),f.add(x),se.onpaint=be=>{let Te=be.changedElements;for(let ue of f)Te.includes(ue.image)&&(ue.needsUpdate=!0)},se.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,le);else{let Te=n.RGBA,ue=n.RGBA,$e=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Te,ue,$e,le)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(Ze&&it){let se=Ke(Xe[0]);t.texStorage2D(n.TEXTURE_2D,ye,ve,se.width,se.height)}for(let se=0,be=Xe.length;se<be;se++)_e=Xe[se],Ze?F&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Me,Fe,_e):t.texImage2D(n.TEXTURE_2D,se,ve,Me,Fe,_e);x.generateMipmaps=!1}else if(Ze){if(it){let se=Ke(le);t.texStorage2D(n.TEXTURE_2D,ye,ve,se.width,se.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Fe,le)}else t.texImage2D(n.TEXTURE_2D,0,ve,Me,Fe,le);d(x)&&M(X),me.__version=pe.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Je(A,x,V){if(x.image.length!==6)return;let X=at(A,x),j=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+V);let pe=i.get(j);if(j.version!==pe.__version||X===!0){t.activeTexture(n.TEXTURE0+V);let me=pt.getPrimaries(pt.workingColorSpace),Q=x.colorSpace===Bi?null:pt.getPrimaries(x.colorSpace),le=x.colorSpace===Bi||me===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Me=x.isCompressedTexture||x.image[0].isCompressedTexture,Fe=x.image[0]&&x.image[0].isDataTexture,ve=[];for(let ue=0;ue<6;ue++)!Me&&!Fe?ve[ue]=g(x.image[ue],!0,s.maxCubemapSize):ve[ue]=Fe?x.image[ue].image:x.image[ue],ve[ue]=et(x,ve[ue]);let _e=ve[0],Xe=r.convert(x.format,x.colorSpace),Ze=r.convert(x.type),it=y(x.internalFormat,Xe,Ze,x.normalized,x.colorSpace),F=x.isVideoTexture!==!0,ye=pe.__version===void 0||X===!0,se=j.dataReady,be=b(x,_e);rt(n.TEXTURE_CUBE_MAP,x);let Te;if(Me){F&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,it,_e.width,_e.height);for(let ue=0;ue<6;ue++){Te=ve[ue].mipmaps;for(let $e=0;$e<Te.length;$e++){let Be=Te[$e];x.format!==$n?Xe!==null?F?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,$e,0,0,Be.width,Be.height,Xe,Be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,$e,it,Be.width,Be.height,0,Be.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,$e,0,0,Be.width,Be.height,Xe,Ze,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,$e,it,Be.width,Be.height,0,Xe,Ze,Be.data)}}}else{if(Te=x.mipmaps,F&&ye){Te.length>0&&be++;let ue=Ke(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,it,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(Fe){F?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ve[ue].width,ve[ue].height,Xe,Ze,ve[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,it,ve[ue].width,ve[ue].height,0,Xe,Ze,ve[ue].data);for(let $e=0;$e<Te.length;$e++){let U=Te[$e].image[ue].image;F?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,$e+1,0,0,U.width,U.height,Xe,Ze,U.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,$e+1,it,U.width,U.height,0,Xe,Ze,U.data)}}else{F?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Xe,Ze,ve[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,it,Xe,Ze,ve[ue]);for(let $e=0;$e<Te.length;$e++){let Be=Te[$e];F?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,$e+1,0,0,Xe,Ze,Be.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,$e+1,it,Xe,Ze,Be.image[ue])}}}d(x)&&M(n.TEXTURE_CUBE_MAP),pe.__version=j.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Ee(A,x,V,X,j,pe){let me=r.convert(V.format,V.colorSpace),Q=r.convert(V.type),le=y(V.internalFormat,me,Q,V.normalized,V.colorSpace),Me=i.get(x),Fe=i.get(V);if(Fe.__renderTarget=x,!Me.__hasExternalTextures){let ve=Math.max(1,x.width>>pe),_e=Math.max(1,x.height>>pe);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,pe,le,ve,_e,x.depth,0,me,Q,null):t.texImage2D(j,pe,le,ve,_e,0,me,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),We(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,j,Fe.__webglTexture,0,ze(x)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,j,Fe.__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ye(A,x,V){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){let X=x.depthTexture,j=X&&X.isDepthTexture?X.type:null,pe=w(x.stencilBuffer,j),me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;We(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze(x),pe,x.width,x.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze(x),pe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,pe,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,A)}else{let X=x.textures;for(let j=0;j<X.length;j++){let pe=X[j],me=r.convert(pe.format,pe.colorSpace),Q=r.convert(pe.type),le=y(pe.internalFormat,me,Q,pe.normalized,pe.colorSpace);We(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze(x),le,x.width,x.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze(x),le,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,le,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function re(A,x,V){let X=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(x.depthTexture);if(j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if(j.__webglInit===void 0&&(j.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),j.__webglTexture===void 0){j.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),rt(n.TEXTURE_CUBE_MAP,x.depthTexture);let Me=r.convert(x.depthTexture.format),Fe=r.convert(x.depthTexture.type),ve;x.depthTexture.format===vi?ve=n.DEPTH_COMPONENT24:x.depthTexture.format===hs&&(ve=n.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ve,x.width,x.height,0,Me,Fe,null)}}else he(x.depthTexture,0);let pe=j.__webglTexture,me=ze(x),Q=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,le=x.depthTexture.format===hs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===vi)We(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,Q,pe,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,le,Q,pe,0);else if(x.depthTexture.format===hs)We(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,Q,pe,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,le,Q,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function k(A){let x=i.get(A),V=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let X=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){let j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=X}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(V)for(let X=0;X<6;X++)re(x.__webglFramebuffer[X],A,X);else{let X=A.texture.mipmaps;X&&X.length>0?re(x.__webglFramebuffer[0],A,0):re(x.__webglFramebuffer,A,0)}else if(V){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=n.createRenderbuffer(),Ye(x.__webglDepthbuffer[X],A,!1);else{let j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=x.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,pe)}}else{let X=A.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ye(x.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,pe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function G(A,x,V){let X=i.get(A);x!==void 0&&Ee(X.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&k(A)}function ne(A){let x=A.texture,V=i.get(A),X=i.get(x);A.addEventListener("dispose",_);let j=A.textures,pe=A.isWebGLCubeRenderTarget===!0,me=j.length>1;if(me||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=x.version,a.memory.textures++),pe){V.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[Q]=[];for(let le=0;le<x.mipmaps.length;le++)V.__webglFramebuffer[Q][le]=n.createFramebuffer()}else V.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)V.__webglFramebuffer[Q]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(me)for(let Q=0,le=j.length;Q<le;Q++){let Me=i.get(j[Q]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&We(A)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Q=0;Q<j.length;Q++){let le=j[Q];V.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[Q]);let Me=r.convert(le.format,le.colorSpace),Fe=r.convert(le.type),ve=y(le.internalFormat,Me,Fe,le.normalized,le.colorSpace,A.isXRRenderTarget===!0),_e=ze(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,ve,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,V.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Ye(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),rt(n.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0)for(let le=0;le<x.mipmaps.length;le++)Ee(V.__webglFramebuffer[Q][le],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le);else Ee(V.__webglFramebuffer[Q],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);d(x)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let Q=0,le=j.length;Q<le;Q++){let Me=j[Q],Fe=i.get(Me),ve=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ve=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,Fe.__webglTexture),rt(ve,Me),Ee(V.__webglFramebuffer,A,Me,n.COLOR_ATTACHMENT0+Q,ve,0),d(Me)&&M(ve)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,X.__webglTexture),rt(Q,x),x.mipmaps&&x.mipmaps.length>0)for(let le=0;le<x.mipmaps.length;le++)Ee(V.__webglFramebuffer[le],A,x,n.COLOR_ATTACHMENT0,Q,le);else Ee(V.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,Q,0);d(x)&&M(Q),t.unbindTexture()}A.depthBuffer&&k(A)}function ie(A){let x=A.textures;for(let V=0,X=x.length;V<X;V++){let j=x[V];if(d(j)){let pe=T(A),me=i.get(j).__webglTexture;t.bindTexture(pe,me),M(pe),t.unbindTexture()}}}let ce=[],He=[];function Oe(A){if(A.samples>0){if(We(A)===!1){let x=A.textures,V=A.width,X=A.height,j=n.COLOR_BUFFER_BIT,pe=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(A),Q=x.length>1;if(Q)for(let Me=0;Me<x.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let le=A.texture.mipmaps;le&&le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Me=0;Me<x.length;Me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[Me]);let Fe=i.get(x[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Fe,0)}n.blitFramebuffer(0,0,V,X,0,0,V,X,j,n.NEAREST),l===!0&&(ce.length=0,He.length=0,ce.push(n.COLOR_ATTACHMENT0+Me),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ce.push(pe),He.push(pe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,He)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let Me=0;Me<x.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,me.__webglColorRenderbuffer[Me]);let Fe=i.get(x[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ze(A){return Math.min(s.maxSamples,A.samples)}function We(A){let x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function P(A){let x=a.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function et(A,x){let V=A.colorSpace,X=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==Qr&&V!==Bi&&(pt.getTransfer(V)===vt?(X!==$n||j!==Mn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",V)),x}function Ke(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=z,this.getTextureUnits=I,this.setTextureUnits=B,this.setTexture2D=he,this.setTexture2DArray=K,this.setTexture3D=oe,this.setTextureCube=te,this.rebindTextures=G,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Qv(n,e){function t(i,s=Bi){let r,a=pt.getTransfer(s);if(i===Mn)return n.UNSIGNED_BYTE;if(i===ul)return n.UNSIGNED_SHORT_4_4_4_4;if(i===dl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ih)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rh)return n.BYTE;if(i===Ph)return n.SHORT;if(i===Sr)return n.UNSIGNED_SHORT;if(i===hl)return n.INT;if(i===oi)return n.UNSIGNED_INT;if(i===qn)return n.FLOAT;if(i===li)return n.HALF_FLOAT;if(i===Dh)return n.ALPHA;if(i===Nh)return n.RGB;if(i===$n)return n.RGBA;if(i===vi)return n.DEPTH_COMPONENT;if(i===hs)return n.DEPTH_STENCIL;if(i===fl)return n.RED;if(i===pl)return n.RED_INTEGER;if(i===us)return n.RG;if(i===ml)return n.RG_INTEGER;if(i===gl)return n.RGBA_INTEGER;if(i===Pa||i===Ia||i===La||i===Da)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_l||i===xl||i===vl||i===yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bl||i===Ml||i===Sl||i===El||i===wl||i===Na||i===Tl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===bl||i===Ml)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===El)return r.COMPRESSED_R11_EAC;if(i===wl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Na)return r.COMPRESSED_RG11_EAC;if(i===Tl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Al||i===Cl||i===Rl||i===Pl||i===Il||i===Ll||i===Dl||i===Nl||i===Ul||i===Ol||i===Fl||i===Bl||i===zl||i===kl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Al)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Il)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ll)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ul)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ol)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vl||i===Gl||i===Hl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Vl)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wl||i===Xl||i===Ua||i===ql)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Wl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}function iy(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,zh(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,M,T,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(g,d):d.isMeshLambertMaterial?(r(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(g,d),f(g,d)):d.isMeshPhongMaterial?(r(g,d),u(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,y)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),v(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,M,T):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===jt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===jt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let M=e.get(d),T=M.envMap,y=M.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(ny.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Yf),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,M,T){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*M,g.scale.value=T*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,M){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===jt&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function v(g,d){let M=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function sy(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){let b=w.program;i.uniformBlockBinding(y,b)}function c(y,w){let b=s[y.id];b===void 0&&(g(y),b=u(y),s[y.id]=b,y.addEventListener("dispose",M));let C=w.program;i.updateUBOMapping(y,C);let _=e.render.frame;r[y.id]!==_&&(h(y),r[y.id]=_)}function u(y){let w=f();y.__bindingPointIndex=w;let b=n.createBuffer(),C=y.__size,_=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let w=s[y.id],b=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let _=0,E=b.length;_<E;_++){let R=b[_];if(Array.isArray(R))for(let L=0,N=R.length;L<N;L++)p(R[L],_,L,C);else p(R,_,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,w,b,C){if(v(y,w,b,C)===!0){let _=y.__offset,E=y.value;if(Array.isArray(E)){let R=0;for(let L=0;L<E.length;L++){let N=E[L],z=d(N);m(N,y.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,y.__data)}}function m(y,w,b){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,b)}function v(y,w,b,C){let _=y.value,E=w+"_"+b;if(C[E]===void 0)return typeof _=="number"||typeof _=="boolean"?C[E]=_:ArrayBuffer.isView(_)?C[E]=_.slice():C[E]=_.clone(),!0;{let R=C[E];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return C[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function g(y){let w=y.uniforms,b=0,C=16;for(let E=0,R=w.length;E<R;E++){let L=Array.isArray(w[E])?w[E]:[w[E]];for(let N=0,z=L.length;N<z;N++){let I=L[N],B=Array.isArray(I.value)?I.value:[I.value];for(let $=0,Y=B.length;$<Y;$++){let he=B[$],K=d(he),oe=b%C,te=oe%K.boundary,Ne=oe+te;b+=te,Ne!==0&&C-Ne<K.storage&&(b+=C-Ne),I.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=K.storage}}}let _=b%C;return _>0&&(b+=C-_),y.__size=b,y.__cache={},this}function d(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):je("WebGLRenderer: Unsupported uniform value type.",y),w}function M(y){let w=y.target;w.removeEventListener("dispose",M);let b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function T(){for(let y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}function ay(){return Si===null&&(Si=new ra(ry,16,16,us,li),Si.name="DFG_LUT",Si.minFilter=Kt,Si.magFilter=Kt,Si.wrapS=xi,Si.wrapT=xi,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}var vg,yg,bg,Mg,Sg,Eg,wg,Tg,Ag,Cg,Rg,Pg,Ig,Lg,Dg,Ng,Ug,Og,Fg,Bg,zg,kg,Vg,Gg,Hg,Wg,Xg,qg,$g,Yg,Zg,Jg,Kg,jg,Qg,e0,t0,n0,i0,s0,r0,a0,o0,l0,c0,h0,u0,d0,f0,p0,m0,g0,_0,x0,v0,y0,b0,M0,S0,E0,w0,T0,A0,C0,R0,P0,I0,L0,D0,N0,U0,O0,F0,B0,z0,k0,V0,G0,H0,W0,X0,q0,$0,Y0,Z0,J0,K0,j0,Q0,e_,t_,n_,i_,s_,r_,a_,o_,l_,c_,h_,u_,d_,f_,p_,m_,g_,__,x_,v_,y_,b_,M_,S_,E_,w_,T_,A_,C_,R_,P_,I_,L_,D_,N_,U_,O_,F_,B_,z_,k_,V_,G_,H_,W_,X_,q_,$_,Y_,Z_,J_,K_,j_,ct,we,Ei,Jl,Q_,Hf,Tr,rx,ax,ox,Fa,bf,Zh,Jh,Kh,jh,lx,Bs,jl,Ql,vx,Wf,tu,Xf,qf,$f,wf,Tf,Af,Cf,Rf,nu,iu,su,Qh,Ar,lv,cv,Lf,fv,Kl,vv,yv,Mv,Ev,Tv,Cv,Pv,Nv,au,ou,Gv,qv,$v,Yv,Zv,Vf,Ba,eu,ey,ty,lu,cu,ny,Yf,ry,Si,Cr,nc=kn(()=>{Yh();Yh();vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ag=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Cg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ig=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Gg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,n0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,u0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,d0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,M0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,O0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,B0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,G0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,H0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,W0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,n_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,i_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,s_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,r_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,o_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,c_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,f_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,p_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,x_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,v_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,T_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,A_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,C_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,N_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,B_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,k_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,V_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,W_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Y_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:vg,alphahash_pars_fragment:yg,alphamap_fragment:bg,alphamap_pars_fragment:Mg,alphatest_fragment:Sg,alphatest_pars_fragment:Eg,aomap_fragment:wg,aomap_pars_fragment:Tg,batching_pars_vertex:Ag,batching_vertex:Cg,begin_vertex:Rg,beginnormal_vertex:Pg,bsdfs:Ig,iridescence_fragment:Lg,bumpmap_pars_fragment:Dg,clipping_planes_fragment:Ng,clipping_planes_pars_fragment:Ug,clipping_planes_pars_vertex:Og,clipping_planes_vertex:Fg,color_fragment:Bg,color_pars_fragment:zg,color_pars_vertex:kg,color_vertex:Vg,common:Gg,cube_uv_reflection_fragment:Hg,defaultnormal_vertex:Wg,displacementmap_pars_vertex:Xg,displacementmap_vertex:qg,emissivemap_fragment:$g,emissivemap_pars_fragment:Yg,colorspace_fragment:Zg,colorspace_pars_fragment:Jg,envmap_fragment:Kg,envmap_common_pars_fragment:jg,envmap_pars_fragment:Qg,envmap_pars_vertex:e0,envmap_physical_pars_fragment:u0,envmap_vertex:t0,fog_vertex:n0,fog_pars_vertex:i0,fog_fragment:s0,fog_pars_fragment:r0,gradientmap_pars_fragment:a0,lightmap_pars_fragment:o0,lights_lambert_fragment:l0,lights_lambert_pars_fragment:c0,lights_pars_begin:h0,lights_toon_fragment:d0,lights_toon_pars_fragment:f0,lights_phong_fragment:p0,lights_phong_pars_fragment:m0,lights_physical_fragment:g0,lights_physical_pars_fragment:_0,lights_fragment_begin:x0,lights_fragment_maps:v0,lights_fragment_end:y0,lightprobes_pars_fragment:b0,logdepthbuf_fragment:M0,logdepthbuf_pars_fragment:S0,logdepthbuf_pars_vertex:E0,logdepthbuf_vertex:w0,map_fragment:T0,map_pars_fragment:A0,map_particle_fragment:C0,map_particle_pars_fragment:R0,metalnessmap_fragment:P0,metalnessmap_pars_fragment:I0,morphinstance_vertex:L0,morphcolor_vertex:D0,morphnormal_vertex:N0,morphtarget_pars_vertex:U0,morphtarget_vertex:O0,normal_fragment_begin:F0,normal_fragment_maps:B0,normal_pars_fragment:z0,normal_pars_vertex:k0,normal_vertex:V0,normalmap_pars_fragment:G0,clearcoat_normal_fragment_begin:H0,clearcoat_normal_fragment_maps:W0,clearcoat_pars_fragment:X0,iridescence_pars_fragment:q0,opaque_fragment:$0,packing:Y0,premultiplied_alpha_fragment:Z0,project_vertex:J0,dithering_fragment:K0,dithering_pars_fragment:j0,roughnessmap_fragment:Q0,roughnessmap_pars_fragment:e_,shadowmap_pars_fragment:t_,shadowmap_pars_vertex:n_,shadowmap_vertex:i_,shadowmask_pars_fragment:s_,skinbase_vertex:r_,skinning_pars_vertex:a_,skinning_vertex:o_,skinnormal_vertex:l_,specularmap_fragment:c_,specularmap_pars_fragment:h_,tonemapping_fragment:u_,tonemapping_pars_fragment:d_,transmission_fragment:f_,transmission_pars_fragment:p_,uv_pars_fragment:m_,uv_pars_vertex:g_,uv_vertex:__,worldpos_vertex:x_,background_vert:v_,background_frag:y_,backgroundCube_vert:b_,backgroundCube_frag:M_,cube_vert:S_,cube_frag:E_,depth_vert:w_,depth_frag:T_,distance_vert:A_,distance_frag:C_,equirect_vert:R_,equirect_frag:P_,linedashed_vert:I_,linedashed_frag:L_,meshbasic_vert:D_,meshbasic_frag:N_,meshlambert_vert:U_,meshlambert_frag:O_,meshmatcap_vert:F_,meshmatcap_frag:B_,meshnormal_vert:z_,meshnormal_frag:k_,meshphong_vert:V_,meshphong_frag:G_,meshphysical_vert:H_,meshphysical_frag:W_,meshtoon_vert:X_,meshtoon_frag:q_,points_vert:$_,points_frag:Y_,shadow_vert:Z_,shadow_frag:J_,sprite_vert:K_,sprite_frag:j_},we={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Ei={basic:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:sn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:sn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new nt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:sn([we.points,we.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:sn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:sn([we.common,we.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:sn([we.sprite,we.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:sn([we.common,we.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:sn([we.lights,we.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Ei.physical={uniforms:sn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};Jl={r:0,b:0,g:0},Q_=new Et,Hf=new st;Hf.set(-1,0,0,0,1,0,0,0,1);Tr=4,rx=6,ax=20,ox=256,Fa=new vr,bf=new nt,Zh=null,Jh=0,Kh=0,jh=!1,lx=new D,Bs=new D,jl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=lx}=r;Zh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zh,Jh,Kh),this._renderer.xr.enabled=jh,e.scissorTest=!1,wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:li,format:$n,colorSpace:Qr,depthBuffer:!1},s=Mf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mf(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=cx(r)),this._blurMaterial=ux(r,e,t),this._ggxMaterial=hx(r,e,t)}return s}_compileMaterial(e){let t=new Vt(new Ft,e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,i,s,r){let l=new Zt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(bf),f.toneMapping=ai,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vt(new ii,new kt({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,d=!1,M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,d=!0):(g.color.copy(bf),d=!0);for(let T=0;T<6;T++){let y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));let w=this._cubeSize;wr(s,y*w,T>2?w:0,w,w),f.setRenderTarget(s),d&&f.render(v,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ls||e.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;wr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Fa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,p=f*h,{_lodMax:m}=this,v=this._sizeLods[i],g=3*v*(i>m-Tr?i-m+Tr:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-t,wr(r,g,d,3*v,2*v),s.setRenderTarget(r),s.render(o,Fa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,wr(e,g,d,3*v,2*v),s.setRenderTarget(e),s.render(o,Fa)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-Tr?s-this._lodMax+Tr:0),h=4*(this._cubeSize-u);wr(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(l,Fa)}};Ql=class extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new oa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ii(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:Mi});r.uniforms.tEquirect.value=t;let a=new Vt(s,r),o=t.minFilter;return t.minFilter===cs&&(t.minFilter=Kt),new il(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};vx={[Mh]:"LINEAR_TONE_MAPPING",[Sh]:"REINHARD_TONE_MAPPING",[Eh]:"CINEON_TONE_MAPPING",[Ns]:"ACES_FILMIC_TONE_MAPPING",[Th]:"AGX_TONE_MAPPING",[Ah]:"NEUTRAL_TONE_MAPPING",[wh]:"CUSTOM_TONE_MAPPING"};Wf=new hn,tu=new ji(1,1),Xf=new na,qf=new Oo,$f=new oa,wf=[],Tf=[],Af=new Float32Array(16),Cf=new Float32Array(9),Rf=new Float32Array(4);nu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=kx(t.type)}},iu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=av(t.type)}},su=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Qh=/(\w+)(\])?(\[|\.)?/g;Ar=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ov(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};lv=37297,cv=0;Lf=new st;fv={[Mh]:"Linear",[Sh]:"Reinhard",[Eh]:"Cineon",[Ns]:"ACESFilmic",[Th]:"AgX",[Ah]:"Neutral",[wh]:"Custom"};Kl=new D;vv=/^[ \t]*#include +<([\w\d./]+)>/gm;yv=new Map;Mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Ev={[Aa]:"SHADOWMAP_TYPE_PCF",[br]:"SHADOWMAP_TYPE_VSM"};Tv={[ls]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE",[Ca]:"ENVMAP_TYPE_CUBE_UV"};Cv={[Us]:"ENVMAP_MODE_REFRACTION"};Pv={[bh]:"ENVMAP_BLENDING_MULTIPLY",[Zd]:"ENVMAP_BLENDING_MIX",[Jd]:"ENVMAP_BLENDING_ADD"};Nv=0,au=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ou(e),t.set(e,i)),i}},ou=class{constructor(e){this.id=Nv++,this.code=e,this.usedTimes=0}};Gv=0;qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$v=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Yv=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Zv=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Vf=new Et,Ba=new D,eu=new D;ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ty=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,lu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new la(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new dn({vertexShader:ey,fragmentShader:ty,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cu=class extends ni{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,m=null,v=typeof XRWebGLBinding<"u",g=new lu,d={},M=t.getContextAttributes(),T=null,y=null,w=[],b=[],C=new fe,_=null,E=null,R=new Zt;R.viewport=new It;let L=new Zt;L.viewport=new It;let N=[R,L],z=new sl,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let J=w[Z];return J===void 0&&(J=new mr,w[Z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Z){let J=w[Z];return J===void 0&&(J=new mr,w[Z]=J),J.getGripSpace()},this.getHand=function(Z){let J=w[Z];return J===void 0&&(J=new mr,w[Z]=J),J.getHandSpace()};function $(Z){let J=b.indexOf(Z.inputSource);if(J===-1)return;let xe=w[J];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,c||a),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",he);for(let Z=0;Z<w.length;Z++){let J=b[Z];J!==null&&(b[Z]=null,w[Z].disconnect(J))}I=null,B=null,g.reset();for(let Z in d)delete d[Z];if(e.setRenderTarget(T),p=null,h=null,f=null,s=null,y=null,at.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),E!==null){let Z=E.camera;Z.fov=E.fov,Z.zoom=E.zoom,Z.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",he),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Je=null,Ee=null;M.depth&&(Ee=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=M.stencil?hs:vi,Je=M.stencil?Er:oi);let Ye={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ye),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new bn(h.textureWidth,h.textureHeight,{format:$n,type:Mn,depthTexture:new ji(h.textureWidth,h.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let xe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new bn(p.framebufferWidth,p.framebufferHeight,{format:$n,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),at.setContext(s),at.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function he(Z){for(let J=0;J<Z.removed.length;J++){let xe=Z.removed[J],Je=b.indexOf(xe);Je>=0&&(b[Je]=null,w[Je].disconnect(xe))}for(let J=0;J<Z.added.length;J++){let xe=Z.added[J],Je=b.indexOf(xe);if(Je===-1){for(let Ye=0;Ye<w.length;Ye++)if(Ye>=b.length){b.push(xe),Je=Ye;break}else if(b[Ye]===null){b[Ye]=xe,Je=Ye;break}if(Je===-1)break}let Ee=w[Je];Ee&&Ee.connect(xe)}}let K=new D,oe=new D;function te(Z,J,xe){K.setFromMatrixPosition(J.matrixWorld),oe.setFromMatrixPosition(xe.matrixWorld);let Je=K.distanceTo(oe),Ee=J.projectionMatrix.elements,Ye=xe.projectionMatrix.elements,re=Ee[14]/(Ee[10]-1),k=Ee[14]/(Ee[10]+1),G=(Ee[9]+1)/Ee[5],ne=(Ee[9]-1)/Ee[5],ie=(Ee[8]-1)/Ee[0],ce=(Ye[8]+1)/Ye[0],He=re*ie,Oe=re*ce,ze=Je/(-ie+ce),We=ze*-ie;if(J.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(We),Z.translateZ(ze),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ee[10]===-1)Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let P=re+ze,et=k+ze,Ke=He-We,A=Oe+(Je-We),x=G*k/et*P,V=ne*k/et*P;Z.projectionMatrix.makePerspective(Ke,A,x,V,P,et),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Ne(Z,J){J===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(J.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let J=Z.near,xe=Z.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(xe=g.depthFar)),z.near=L.near=R.near=J,z.far=L.far=R.far=xe,(I!==z.near||B!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),I=z.near,B=z.far),z.layers.mask=Z.layers.mask|6,R.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;let Je=Z.parent,Ee=z.cameras;Ne(z,Je);for(let Ye=0;Ye<Ee.length;Ye++)Ne(Ee[Ye],Je);Ee.length===2?te(z,R,L):z.projectionMatrix.copy(R.projectionMatrix),E===null&&Z.isPerspectiveCamera&&(E={camera:Z,fov:Z.fov,zoom:Z.zoom}),Re(Z,z,Je)};function Re(Z,J,xe){xe===null?Z.matrix.copy(J.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(J.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=dr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(Z){return d[Z]};let ut=null;function rt(Z,J){if(u=J.getViewerPose(c||a),m=J,u!==null){let xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Je=!1;xe.length!==z.cameras.length&&(z.cameras.length=0,Je=!0);for(let k=0;k<xe.length;k++){let G=xe[k],ne=null;if(p!==null)ne=p.getViewport(G);else{let ce=f.getViewSubImage(h,G);ne=ce.viewport,k===0&&(e.setRenderTargetTextures(y,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(y))}let ie=N[k];ie===void 0&&(ie=new Zt,ie.layers.enable(k),ie.viewport=new It,N[k]=ie),ie.matrix.fromArray(G.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(G.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(ne.x,ne.y,ne.width,ne.height),k===0&&(z.matrix.copy(ie.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Je===!0&&z.cameras.push(ie)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();let k=f.getDepthInformation(xe[0]);k&&k.isValid&&k.texture&&g.init(k,s.renderState)}if(Ee&&Ee.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let k=0;k<xe.length;k++){let G=xe[k].camera;if(G){let ne=d[G];ne||(ne=new la,d[G]=ne);let ie=f.getCameraImage(G);ne.sourceTexture=ie}}}}for(let xe=0;xe<w.length;xe++){let Je=b[xe],Ee=w[xe];Je!==null&&Ee!==void 0&&Ee.update(Je,J,c||a)}ut&&ut(Z,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),m=null}let at=new Gf;at.setAnimationLoop(rt),this.setAnimationLoop=function(Z){ut=Z},this.dispose=function(){}}},ny=new Et,Yf=new st;Yf.set(-1,0,0,0,1,0,0,0,1);ry=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Si=null;Cr=class{constructor(e={}){let{canvas:t=cf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Mn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let v=p,g=new Set([gl,ml,pl]),d=new Set([Mn,oi,Sr,Er,ul,dl]),M=new Uint32Array(4),T=new Int32Array(4),y=new D,w=null,b=null,C=[],_=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,N=null,z=null,I=null,B=null;this._outputColorSpace=Yt;let $=0,Y=0,he=null,K=-1,oe=null,te=new It,Ne=new It,Re=null,ut=new nt(0),rt=0,at=t.width,Z=t.height,J=1,xe=null,Je=null,Ee=new It(0,0,at,Z),Ye=new It(0,0,at,Z),re=!1,k=new gr,G=!1,ne=!1,ie=new Et,ce=new D,He=new It,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ze=!1;function We(){return he===null?J:1}let P=i;function et(S,O){return t.getContext(S,O)}let Ke,A,x,V,X,j,pe,me,Q,le,Me,Fe,ve,_e,Xe,Ze,it,F,ye,se,be,Te,ue;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",U,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",Se,!1),P===null){let O="webgl2";if(P=et(O,S),P===null)throw et(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(S){throw t.removeEventListener("webglcontextlost",U,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Qe("WebGLRenderer: "+S.message),S}function $e(){Ke=new fx(P),Ke.init(),be=new Qv(P,Ke),A=new ix(P,Ke,e,be),x=new Kv(P,Ke),A.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),z=P.createFramebuffer(),I=P.createFramebuffer(),B=P.createFramebuffer(),V=new gx(P),X=new Fv,j=new jv(P,Ke,x,X,A,be,V),pe=new dx(R),me=new xg(P),Te=new tx(P,me),Q=new px(P,me,V,Te),le=new xx(P,Q,me,Te,V),F=new _x(P,A,j),Xe=new sx(X),Me=new Ov(R,pe,Ke,A,Te,Xe),Fe=new iy(R,X),ve=new zv,_e=new Xv(Ke),it=new ex(R,pe,x,le,m,l),Ze=new Jv(R,le,A),ue=new sy(P,V,A,x),ye=new nx(P,Ke,V),se=new mx(P,Ke,V),V.programs=Me.programs,R.capabilities=A,R.extensions=Ke,R.properties=X,R.renderLists=ve,R.shadowMap=Ze,R.state=x,R.info=V}v!==Mn&&(E=new yx(v,t.width,t.height,o,s,r));let Be=new cu(R,P);this.xr=Be,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let S=Ke.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Ke.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(S){S!==void 0&&(J=S,this.setSize(at,Z,!1))},this.getSize=function(S){return S.set(at,Z)},this.setSize=function(S,O,q=!0){if(Be.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}at=S,Z=O,t.width=Math.floor(S*J),t.height=Math.floor(O*J),q===!0&&(t.style.width=S+"px",t.style.height=O+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(at*J,Z*J).floor()},this.setDrawingBufferSize=function(S,O,q){at=S,Z=O,J=q,t.width=Math.floor(S*q),t.height=Math.floor(O*q),this.setViewport(0,0,S,O)},this.setEffects=function(S){if(v===Mn){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let O=0;O<S.length;O++)if(S[O].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(te)},this.getViewport=function(S){return S.copy(Ee)},this.setViewport=function(S,O,q,H){S.isVector4?Ee.set(S.x,S.y,S.z,S.w):Ee.set(S,O,q,H),x.viewport(te.copy(Ee).multiplyScalar(J).round())},this.getScissor=function(S){return S.copy(Ye)},this.setScissor=function(S,O,q,H){S.isVector4?Ye.set(S.x,S.y,S.z,S.w):Ye.set(S,O,q,H),x.scissor(Ne.copy(Ye).multiplyScalar(J).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(S){x.setScissorTest(re=S)},this.setOpaqueSort=function(S){xe=S},this.setTransparentSort=function(S){Je=S},this.getClearColor=function(S){return S.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,q=!0){let H=0;if(S){let W=!1;if(he!==null){let Ce=he.texture.format;W=g.has(Ce)}if(W){let Ce=he.texture.type,De=d.has(Ce),Ae=it.getClearColor(),ke=it.getClearAlpha(),qe=Ae.r,lt=Ae.g,ft=Ae.b;De?(M[0]=qe,M[1]=lt,M[2]=ft,M[3]=ke,P.clearBufferuiv(P.COLOR,0,M)):(T[0]=qe,T[1]=lt,T[2]=ft,T[3]=ke,P.clearBufferiv(P.COLOR,0,T))}else H|=P.COLOR_BUFFER_BIT}O&&(H|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),N=S},this.dispose=function(){t.removeEventListener("webglcontextlost",U,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),it.dispose(),ve.dispose(),_e.dispose(),X.dispose(),pe.dispose(),le.dispose(),Te.dispose(),ue.dispose(),Me.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",dt),Be.removeEventListener("sessionend",Ue),qt.stop()};function U(S){S.preventDefault(),Oh("WebGLRenderer: Context Lost."),L=!0}function ee(){Oh("WebGLRenderer: Context Restored."),L=!1;let S=V.autoReset,O=Ze.enabled,q=Ze.autoUpdate,H=Ze.needsUpdate,W=Ze.type;$e(),V.autoReset=S,Ze.enabled=O,Ze.autoUpdate=q,Ze.needsUpdate=H,Ze.type=W}function Se(S){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Le(S){let O=S.target;O.removeEventListener("dispose",Le),Pe(O)}function Pe(S){tt(S),X.remove(S)}function tt(S){let O=X.get(S).programs;O!==void 0&&(O.forEach(function(q){Me.releaseProgram(q)}),S.isShaderMaterial&&Me.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,q,H,W,Ce){O===null&&(O=Oe);let De=W.isMesh&&W.matrixWorld.determinantAffine()<0,Ae=Fp(S,O,q,H,W);x.setMaterial(H,De);let ke=q.index,qe=1;if(H.wireframe===!0){if(ke=Q.getWireframeAttribute(q),ke===void 0)return;qe=2}let lt=q.drawRange,ft=q.attributes.position,Ve=lt.start*qe,xt=(lt.start+lt.count)*qe;Ce!==null&&(Ve=Math.max(Ve,Ce.start*qe),xt=Math.min(xt,(Ce.start+Ce.count)*qe)),ke!==null?(Ve=Math.max(Ve,0),xt=Math.min(xt,ke.count)):ft!=null&&(Ve=Math.max(Ve,0),xt=Math.min(xt,ft.count));let Bt=xt-Ve;if(Bt<0||Bt===1/0)return;Te.setup(W,H,Ae,q,ke);let Ct,wt=ye;if(ke!==null&&(Ct=me.get(ke),wt=se,wt.setIndex(Ct)),W.isMesh)H.wireframe===!0?(x.setLineWidth(H.wireframeLinewidth*We()),wt.setMode(P.LINES)):wt.setMode(P.TRIANGLES);else if(W.isLine){let en=H.linewidth;en===void 0&&(en=1),x.setLineWidth(en*We()),W.isLineSegments?wt.setMode(P.LINES):W.isLineLoop?wt.setMode(P.LINE_LOOP):wt.setMode(P.LINE_STRIP)}else W.isPoints?wt.setMode(P.POINTS):W.isSprite&&wt.setMode(P.TRIANGLES);if(W.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))wt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let en=W._multiDrawStarts,Ie=W._multiDrawCounts,ln=W._multiDrawCount,mt=ke?me.get(ke).bytesPerElement:1,zn=X.get(H).currentProgram.getUniforms();for(let pi=0;pi<ln;pi++)zn.setValue(P,"_gl_DrawID",pi),wt.render(en[pi]/mt,Ie[pi])}else if(W.isInstancedMesh)wt.renderInstances(Ve,Bt,W.count);else if(q.isInstancedBufferGeometry){let en=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ie=Math.min(q.instanceCount,en);wt.renderInstances(Ve,Bt,Ie)}else wt.render(Ve,Bt)};function _t(S,O,q,H){N!==null&&S.isNodeMaterial&&N.setObject(H,S),G===!0&&Xe.setState(S,q,!1),S.transparent===!0&&S.side===fn&&S.forceSinglePass===!1?(S.side=jt,S.needsUpdate=!0,Ja(S,O,H),S.side=os,S.needsUpdate=!0,Ja(S,O,H),S.side=fn):Ja(S,O,H)}this.compile=function(S,O,q=null){q===null&&(q=S),N!==null&&N.renderStart(S,O,q),b=_e.get(q),b.init(O),_.push(b),q.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),S!==q&&S.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(),N!==null&&N.updateLights(b.state.lightsArray),ne=this.localClippingEnabled,G=Xe.init(this.clippingPlanes,ne),G===!0&&Xe.setGlobalState(this.clippingPlanes,O),N!==null&&Ze.render(b.state.shadowsArray,q,O);let H=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Ce=W.material;if(Ce)if(Array.isArray(Ce))for(let De=0;De<Ce.length;De++){let Ae=Ce[De];_t(Ae,q,O,W),H.add(Ae)}else _t(Ce,q,O,W),H.add(Ce)}),b=_.pop(),N!==null&&N.renderEnd(),H},this.compileAsync=function(S,O,q=null){let H=this.compile(S,O,q);return new Promise(W=>{function Ce(){if(H.forEach(function(De){let ke=X.get(De).currentProgram;(ke===void 0||ke.isReady())&&H.delete(De)}),H.size===0){W(S);return}setTimeout(Ce,10)}Ke.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let _n=null;function Cn(S){_n&&_n(S)}function dt(){qt.stop()}function Ue(){qt.start()}let qt=new Gf;qt.setAnimationLoop(Cn),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(S){_n=S,Be.setAnimationLoop(S),S===null?qt.stop():qt.start()},Be.addEventListener("sessionstart",dt),Be.addEventListener("sessionend",Ue),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(S,O);let q=Be.enabled===!0&&Be.isPresenting===!0,H=E!==null&&(he===null||q)&&E.begin(R,he);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(O),O=Be.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,O,he),b=_e.get(S,_.length),b.init(O),b.state.textureUnits=j.getTextureUnits(),_.push(b),ie.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),k.setFromProjectionMatrix(ie,ti,O.reversedDepth),ne=this.localClippingEnabled,G=Xe.init(this.clippingPlanes,ne),w=ve.get(S,C.length),w.init(),C.push(w),Be.enabled===!0&&Be.isPresenting===!0){let De=R.xr.getDepthSensingMesh();De!==null&&Mc(De,O,-1/0,R.sortObjects)}Mc(S,O,0,R.sortObjects),w.finish(),N!==null&&N.updateLights(b.state.lightsArray),R.sortObjects===!0&&w.sort(xe,Je),ze=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,ze&&it.addToRenderList(w,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),G===!0&&Xe.beginShadows();let W=b.state.shadowsArray;if(Ze.render(W,S,O),G===!0&&Xe.endShadows(),(H&&E.hasRenderPass())===!1){let De=w.opaque,Ae=w.transmissive;if(b.setupLights(),O.isArrayCamera){let ke=O.cameras;if(Ae.length>0)for(let qe=0,lt=ke.length;qe<lt;qe++){let ft=ke[qe];Pu(De,Ae,S,ft)}ze&&it.render(S);for(let qe=0,lt=ke.length;qe<lt;qe++){let ft=ke[qe];Ru(w,S,ft,ft.viewport)}}else Ae.length>0&&Pu(De,Ae,S,O),ze&&it.render(S),Ru(w,S,O)}he!==null&&Y===0&&(j.updateMultisampleRenderTarget(he),j.updateRenderTargetMipmap(he)),H&&E.end(R),S.isScene===!0&&S.onAfterRender(R,S,O),Te.resetDefaultState(),K=-1,oe=null,_.pop(),_.length>0?(b=_[_.length-1],j.setTextureUnits(b.state.textureUnits),G===!0&&Xe.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,N!==null&&N.renderEnd()};function Mc(S,O,q,H){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLightProbeGrid)b.pushLightProbeGrid(S);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(k)){H&&He.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ie);let De=le.update(S),Ae=S.material;Ae.visible&&w.push(S,De,Ae,q,He.z,null,O)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(k))){let De=le.update(S),Ae=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),He.copy(S.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),He.copy(De.boundingSphere.center)),He.applyMatrix4(S.matrixWorld).applyMatrix4(ie)),Array.isArray(Ae)){let ke=De.groups;for(let qe=0,lt=ke.length;qe<lt;qe++){let ft=ke[qe],Ve=Ae[ft.materialIndex];Ve&&Ve.visible&&w.push(S,De,Ve,q,He.z,ft,O)}}else Ae.visible&&w.push(S,De,Ae,q,He.z,null,O)}}let Ce=S.children;for(let De=0,Ae=Ce.length;De<Ae;De++)Mc(Ce[De],O,q,H)}function Ru(S,O,q,H){let{opaque:W,transmissive:Ce,transparent:De}=S;b.setupLightsView(q),G===!0&&Xe.setGlobalState(R.clippingPlanes,q),H&&x.viewport(te.copy(H)),W.length>0&&Za(W,O,q),Ce.length>0&&Za(Ce,O,q),De.length>0&&Za(De,O,q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Pu(S,O,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){let Ve=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new bn(1,1,{generateMipmaps:!0,type:Ve?li:Mn,minFilter:cs,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pt.workingColorSpace})}let Ce=b.state.transmissionRenderTarget[H.id],De=H.viewport||te;Ce.setSize(De.z*R.transmissionResolutionScale,De.w*R.transmissionResolutionScale);let Ae=R.getRenderTarget(),ke=R.getActiveCubeFace(),qe=R.getActiveMipmapLevel();R.setRenderTarget(Ce),R.getClearColor(ut),rt=R.getClearAlpha(),rt<1&&R.setClearColor(16777215,.5),R.clear(),ze&&it.render(q);let lt=R.toneMapping;R.toneMapping=ai;let ft=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),G===!0&&Xe.setGlobalState(R.clippingPlanes,H),Za(S,q,H),j.updateMultisampleRenderTarget(Ce),j.updateRenderTargetMipmap(Ce),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let xt=0,Bt=O.length;xt<Bt;xt++){let Ct=O[xt],{object:wt,geometry:en,material:Ie,group:ln}=Ct;if(Ie.side===fn&&wt.layers.test(H.layers)){let mt=Ie.side;Ie.side=jt,Ie.needsUpdate=!0,Iu(wt,q,H,en,Ie,ln),Ie.side=mt,Ie.needsUpdate=!0,Ve=!0}}Ve===!0&&(j.updateMultisampleRenderTarget(Ce),j.updateRenderTargetMipmap(Ce))}R.setRenderTarget(Ae,ke,qe),R.setClearColor(ut,rt),ft!==void 0&&(H.viewport=ft),R.toneMapping=lt}function Za(S,O,q){let H=O.isScene===!0?O.overrideMaterial:null;for(let W=0,Ce=S.length;W<Ce;W++){let De=S[W],{object:Ae,geometry:ke,group:qe}=De,lt=De.material;lt.allowOverride===!0&&H!==null&&(lt=H),Ae.layers.test(q.layers)&&Iu(Ae,O,q,ke,lt,qe)}}function Iu(S,O,q,H,W,Ce){N!==null&&W.isNodeMaterial&&N.setObject(S,W),S.onBeforeRender(R,O,q,H,W,Ce),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(R,O,q,H,S,Ce),W.transparent===!0&&W.side===fn&&W.forceSinglePass===!1?(W.side=jt,W.needsUpdate=!0,R.renderBufferDirect(q,O,H,W,S,Ce),W.side=os,W.needsUpdate=!0,R.renderBufferDirect(q,O,H,W,S,Ce),W.side=fn):R.renderBufferDirect(q,O,H,W,S,Ce),S.onAfterRender(R,O,q,H,W,Ce)}function Ja(S,O,q){O.isScene!==!0&&(O=Oe);let H=X.get(S),W=b.state.lights,Ce=b.state.shadowsArray,De=W.state.version,Ae=Me.getParameters(S,W.state,Ce,O,q,b.state.lightProbeGridArray),ke=Me.getProgramCacheKey(Ae),qe=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;let lt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=pe.get(S.envMap||H.environment,lt),H.envMapRotation=H.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,qe===void 0&&(S.addEventListener("dispose",Le),qe=new Map,H.programs=qe);let ft=qe.get(ke);if(ft!==void 0){if(H.currentProgram===ft&&H.lightsStateVersion===De)return Du(S,Ae),ft}else Ae.uniforms=Me.getUniforms(S),N!==null&&S.isNodeMaterial&&N.build(S,q,Ae),S.onBeforeCompile(Ae,R),ft=Me.acquireProgram(Ae,ke),qe.set(ke,ft),H.uniforms=Ae.uniforms;let Ve=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ve.clippingPlanes=Xe.uniform),Du(S,Ae),H.needsLights=zp(S),H.lightsStateVersion=De,H.needsLights&&(Ve.ambientLightColor.value=W.state.ambient,Ve.lightProbe.value=W.state.probe,Ve.sunLights.value=W.state.sun,Ve.sunLightShadows.value=W.state.sunShadow,Ve.directionalLights.value=W.state.directional,Ve.directionalLightShadows.value=W.state.directionalShadow,Ve.spotLights.value=W.state.spot,Ve.spotLightShadows.value=W.state.spotShadow,Ve.rectAreaLights.value=W.state.rectArea,Ve.ltc_1.value=W.state.rectAreaLTC1,Ve.ltc_2.value=W.state.rectAreaLTC2,Ve.pointLights.value=W.state.point,Ve.pointLightShadows.value=W.state.pointShadow,Ve.hemisphereLights.value=W.state.hemi,Ve.sunShadowMatrix.value=W.state.sunShadowMatrix,Ve.sunShadowCascade.value=W.state.sunShadowCascade,Ve.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ve.spotLightMatrix.value=W.state.spotLightMatrix,Ve.spotLightMap.value=W.state.spotLightMap,Ve.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=ft,H.uniformsList=null,ft}function Lu(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=Ar.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Du(S,O){let q=X.get(S);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function Op(S,O){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(O.matrixWorld);for(let q=0,H=S.length;q<H;q++){let W=S[q];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function Fp(S,O,q,H,W){O.isScene!==!0&&(O=Oe),j.resetTextureUnits();let Ce=O.fog,De=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,Ae=he===null?R.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:pt.workingColorSpace,ke=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,qe=pe.get(H.envMap||De,ke),lt=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ft=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ve=!!q.morphAttributes.position,xt=!!q.morphAttributes.normal,Bt=!!q.morphAttributes.color,Ct=ai;H.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Ct=R.toneMapping);let wt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,en=wt!==void 0?wt.length:0,Ie=X.get(H),ln=b.state.lights;if(G===!0&&(ne===!0||S!==oe)){let At=S===oe&&H.id===K;Xe.setState(H,S,At)}let mt=!1;H.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==ln.state.version||Ie.outputColorSpace!==Ae||W.isBatchedMesh&&Ie.batching===!1||!W.isBatchedMesh&&Ie.batching===!0||W.isBatchedMesh&&Ie.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ie.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ie.instancing===!1||!W.isInstancedMesh&&Ie.instancing===!0||W.isSkinnedMesh&&Ie.skinning===!1||!W.isSkinnedMesh&&Ie.skinning===!0||W.isInstancedMesh&&Ie.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ie.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ie.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ie.instancingMorph===!1&&W.morphTexture!==null||Ie.envMap!==qe||H.fog===!0&&Ie.fog!==Ce||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Xe.numPlanes||Ie.numIntersection!==Xe.numIntersection)||Ie.vertexAlphas!==lt||Ie.vertexTangents!==ft||Ie.morphTargets!==Ve||Ie.morphNormals!==xt||Ie.morphColors!==Bt||Ie.toneMapping!==Ct||Ie.morphTargetsCount!==en||!!Ie.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Ie.__version=H.version);let zn=Ie.currentProgram;mt===!0&&(zn=Ja(H,O,W),N&&H.isNodeMaterial&&N.onUpdateProgram(H,zn,Ie));let pi=!1,ki=!1,Hs=!1,St=zn.getUniforms(),Ot=Ie.uniforms;if(x.useProgram(zn.program)&&(pi=!0,ki=!0,Hs=!0),H.id!==K&&(K=H.id,ki=!0),Ie.needsLights){let At=Op(b.state.lightProbeGridArray,W);Ie.lightProbeGrid!==At&&(Ie.lightProbeGrid=At,ki=!0)}if(pi||oe!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),St.setValue(P,"projectionMatrix",S.projectionMatrix),St.setValue(P,"viewMatrix",S.matrixWorldInverse);let Gi=St.map.cameraPosition;Gi!==void 0&&Gi.setValue(P,ce.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&St.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&St.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),oe!==S&&(oe=S,ki=!0,Hs=!0)}if(Ie.needsLights&&(ln.state.sunShadowMap.length>0&&St.setValue(P,"sunShadowMap",ln.state.sunShadowMap,j),ln.state.directionalShadowMap.length>0&&St.setValue(P,"directionalShadowMap",ln.state.directionalShadowMap,j),ln.state.spotShadowMap.length>0&&St.setValue(P,"spotShadowMap",ln.state.spotShadowMap,j),ln.state.pointShadowMap.length>0&&St.setValue(P,"pointShadowMap",ln.state.pointShadowMap,j)),W.isSkinnedMesh){St.setOptional(P,W,"bindMatrix"),St.setOptional(P,W,"bindMatrixInverse");let At=W.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),St.setValue(P,"boneTexture",At.boneTexture,j))}W.isBatchedMesh&&(St.setOptional(P,W,"batchingTexture"),St.setValue(P,"batchingTexture",W._matricesTexture,j),St.setOptional(P,W,"batchingIdTexture"),St.setValue(P,"batchingIdTexture",W._indirectTexture,j),St.setOptional(P,W,"batchingColorTexture"),W._colorsTexture!==null&&St.setValue(P,"batchingColorTexture",W._colorsTexture,j));let Vi=q.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&F.update(W,q,zn),(ki||Ie.receiveShadow!==W.receiveShadow)&&(Ie.receiveShadow=W.receiveShadow,St.setValue(P,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(Ot.envMapIntensity.value=O.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=ay()),ki){if(St.setValue(P,"toneMappingExposure",R.toneMappingExposure),Ie.needsLights&&Bp(Ot,Hs),Ce&&H.fog===!0&&Fe.refreshFogUniforms(Ot,Ce),Fe.refreshMaterialUniforms(Ot,H,J,Z,b.state.transmissionRenderTarget[S.id]),Ie.needsLights&&Ie.lightProbeGrid){let At=Ie.lightProbeGrid;Ot.probesSH.value=At.texture,Ot.probesMin.value.copy(At.boundingBox.min),Ot.probesMax.value.copy(At.boundingBox.max),Ot.probesResolution.value.copy(At.resolution)}Ar.upload(P,Lu(Ie),Ot,j)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ar.upload(P,Lu(Ie),Ot,j),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&St.setValue(P,"center",W.center),St.setValue(P,"modelViewMatrix",W.modelViewMatrix),St.setValue(P,"normalMatrix",W.normalMatrix),St.setValue(P,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let At=H.uniformsGroups;for(let Gi=0,Ws=At.length;Gi<Ws;Gi++){let Uu=At[Gi];ue.update(Uu,zn),ue.bind(Uu,zn)}}return zn}function Bp(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.sunLights.needsUpdate=O,S.sunLightShadows.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function zp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return he},this.setRenderTargetTextures=function(S,O,q){let H=X.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),X.get(S.texture).__webglTexture=O,X.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){let q=X.get(S);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,q=0){he=S,$=O,Y=q;let H=null,W=!1,Ce=!1;if(S){let Ae=X.get(S);if(Ae.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(P.FRAMEBUFFER,Ae.__webglFramebuffer),te.copy(S.viewport),Ne.copy(S.scissor),Re=S.scissorTest,x.viewport(te),x.scissor(Ne),x.setScissorTest(Re),K=-1;return}else if(Ae.__webglFramebuffer===void 0)j.setupRenderTarget(S);else if(Ae.__hasExternalTextures)j.rebindTextures(S,X.get(S.texture).__webglTexture,X.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let lt=S.depthTexture;if(Ae.__boundDepthTexture!==lt){if(lt!==null&&X.has(lt)&&(S.width!==lt.image.width||S.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(S)}}let ke=S.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ce=!0);let qe=X.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(qe[O])?H=qe[O][q]:H=qe[O],W=!0):S.samples>0&&j.useMultisampledRTT(S)===!1?H=X.get(S).__webglMultisampledFramebuffer:Array.isArray(qe)?H=qe[q]:H=qe,te.copy(S.viewport),Ne.copy(S.scissor),Re=S.scissorTest}else te.copy(Ee).multiplyScalar(J).floor(),Ne.copy(Ye).multiplyScalar(J).floor(),Re=re;if(q!==0&&(H=z),x.bindFramebuffer(P.FRAMEBUFFER,H)&&x.drawBuffers(S,H),x.viewport(te),x.scissor(Ne),x.setScissorTest(Re),W){let Ae=X.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ae.__webglTexture,q)}else if(Ce){let Ae=O;for(let ke=0;ke<S.textures.length;ke++){let qe=X.get(S.textures[ke]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ke,qe.__webglTexture,q,Ae)}}else if(S!==null&&q!==0){let Ae=X.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ae.__webglTexture,q)}K=-1};function Nu(S){let O=X.get(S);return(O.__readFormat!==S.format||O.__readType!==S.type)&&(O.__readFormat=S.format,O.__readType=S.type,O.__formatReadable=A.textureFormatReadable(S.format),O.__typeReadable=A.textureTypeReadable(S.type)),O}this.readRenderTargetPixels=function(S,O,q,H,W,Ce,De,Ae=0){if(!(S&&S.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&De!==void 0&&(ke=ke[De]),ke){x.bindFramebuffer(P.FRAMEBUFFER,ke);try{let qe=S.textures[Ae],lt=qe.format,ft=qe.type;S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ae);let Ve=Nu(qe);if(Ve.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-H&&q>=0&&q<=S.height-W&&P.readPixels(O,q,H,W,be.convert(lt),be.convert(ft),Ce)}finally{let qe=he!==null?X.get(he).__webglFramebuffer:null;x.bindFramebuffer(P.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(S,O,q,H,W,Ce,De,Ae=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&De!==void 0&&(ke=ke[De]),ke)if(O>=0&&O<=S.width-H&&q>=0&&q<=S.height-W){x.bindFramebuffer(P.FRAMEBUFFER,ke);let qe=S.textures[Ae],lt=qe.format,ft=qe.type;S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ae);let Ve=Nu(qe);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,xt),P.bufferData(P.PIXEL_PACK_BUFFER,Ce.byteLength,P.STREAM_READ),P.readPixels(O,q,H,W,be.convert(lt),be.convert(ft),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Bt=he!==null?X.get(he).__webglFramebuffer:null;x.bindFramebuffer(P.FRAMEBUFFER,Bt);let Ct=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await uf(P,Ct,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,xt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Ce),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(xt),P.deleteSync(Ct),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,q=0){let H=Math.pow(2,-q),W=Math.floor(S.image.width*H),Ce=Math.floor(S.image.height*H),De=O!==null?O.x:0,Ae=O!==null?O.y:0;j.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,q,0,0,De,Ae,W,Ce),x.unbindTexture()},this.copyTextureToTexture=function(S,O,q=null,H=null,W=0,Ce=0){let De,Ae,ke,qe,lt,ft,Ve,xt,Bt,Ct=S.isCompressedTexture?S.mipmaps[Ce]:S.image;if(q!==null)De=q.max.x-q.min.x,Ae=q.max.y-q.min.y,ke=q.isBox3?q.max.z-q.min.z:1,qe=q.min.x,lt=q.min.y,ft=q.isBox3?q.min.z:0;else{let Ot=Math.pow(2,-W);De=Math.floor(Ct.width*Ot),Ae=Math.floor(Ct.height*Ot),S.isDataArrayTexture?ke=Ct.depth:S.isData3DTexture?ke=Math.floor(Ct.depth*Ot):ke=1,qe=0,lt=0,ft=0}H!==null?(Ve=H.x,xt=H.y,Bt=H.z):(Ve=0,xt=0,Bt=0);let wt=be.convert(O.format),en=be.convert(O.type),Ie;O.isData3DTexture?(j.setTexture3D(O,0),Ie=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(j.setTexture2DArray(O,0),Ie=P.TEXTURE_2D_ARRAY):(j.setTexture2D(O,0),Ie=P.TEXTURE_2D),x.activeTexture(P.TEXTURE0),x.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),x.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),x.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);let ln=x.getParameter(P.UNPACK_ROW_LENGTH),mt=x.getParameter(P.UNPACK_IMAGE_HEIGHT),zn=x.getParameter(P.UNPACK_SKIP_PIXELS),pi=x.getParameter(P.UNPACK_SKIP_ROWS),ki=x.getParameter(P.UNPACK_SKIP_IMAGES);x.pixelStorei(P.UNPACK_ROW_LENGTH,Ct.width),x.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ct.height),x.pixelStorei(P.UNPACK_SKIP_PIXELS,qe),x.pixelStorei(P.UNPACK_SKIP_ROWS,lt),x.pixelStorei(P.UNPACK_SKIP_IMAGES,ft);let Hs=S.isDataArrayTexture||S.isData3DTexture,St=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){let Ot=X.get(S),Vi=X.get(O),At=X.get(Ot.__renderTarget),Gi=X.get(Vi.__renderTarget);x.bindFramebuffer(P.READ_FRAMEBUFFER,At.__webglFramebuffer),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Ws=0;Ws<ke;Ws++)Hs&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,X.get(S).__webglTexture,W,ft+Ws),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,X.get(O).__webglTexture,Ce,Bt+Ws)),P.blitFramebuffer(qe,lt,De,Ae,Ve,xt,De,Ae,P.DEPTH_BUFFER_BIT,P.NEAREST);x.bindFramebuffer(P.READ_FRAMEBUFFER,null),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||X.has(S)){let Ot=X.get(S),Vi=X.get(O);x.bindFramebuffer(P.READ_FRAMEBUFFER,I),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,B);for(let At=0;At<ke;At++)Hs?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ot.__webglTexture,W,ft+At):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ot.__webglTexture,W),St?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Vi.__webglTexture,Ce,Bt+At):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Vi.__webglTexture,Ce),W!==0?P.blitFramebuffer(qe,lt,De,Ae,Ve,xt,De,Ae,P.COLOR_BUFFER_BIT,P.NEAREST):St?P.copyTexSubImage3D(Ie,Ce,Ve,xt,Bt+At,qe,lt,De,Ae):P.copyTexSubImage2D(Ie,Ce,Ve,xt,qe,lt,De,Ae);x.bindFramebuffer(P.READ_FRAMEBUFFER,null),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else St?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(Ie,Ce,Ve,xt,Bt,De,Ae,ke,wt,en,Ct.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(Ie,Ce,Ve,xt,Bt,De,Ae,ke,wt,Ct.data):P.texSubImage3D(Ie,Ce,Ve,xt,Bt,De,Ae,ke,wt,en,Ct):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Ce,Ve,xt,De,Ae,wt,en,Ct.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Ce,Ve,xt,Ct.width,Ct.height,wt,Ct.data):P.texSubImage2D(P.TEXTURE_2D,Ce,Ve,xt,De,Ae,wt,en,Ct);x.pixelStorei(P.UNPACK_ROW_LENGTH,ln),x.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mt),x.pixelStorei(P.UNPACK_SKIP_PIXELS,zn),x.pixelStorei(P.UNPACK_SKIP_ROWS,pi),x.pixelStorei(P.UNPACK_SKIP_IMAGES,ki),Ce===0&&O.generateMipmaps&&P.generateMipmap(Ie),x.unbindTexture()},this.initRenderTarget=function(S){X.get(S).__webglFramebuffer===void 0&&j.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?j.setTextureCube(S,0):S.isData3DTexture?j.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?j.setTexture2DArray(S,0):j.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){$=0,Y=0,he=null,x.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}});function ly(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function cy(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function hy(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(jf),this.state=Mt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function uy(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case rs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Mt.DOLLY;break;case rs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Mt.ROTATE}break;case rs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(uu)}function dy(n){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function fy(n){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(n.preventDefault(),this.dispatchEvent(uu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(jf))}function py(n){this.enabled!==!1&&this._handleKeyDown(n)}function my(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case as.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Mt.TOUCH_ROTATE;break;case as.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case as.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Mt.TOUCH_DOLLY_PAN;break;case as.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(uu)}function gy(n){switch(this._trackPointer(n),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Mt.NONE}}function _y(n){this.enabled!==!1&&n.preventDefault()}function xy(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vy(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Jf,uu,jf,ic,Kf,oy,Wt,Sn,Mt,hu,sc,Qf=kn(()=>{nc();Jf={type:"change"},uu={type:"start"},jf={type:"end"},ic=new Ts,Kf=new In,oy=Math.cos(70*Oa.DEG2RAD),Wt=new D,Sn=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hu=1e-6,sc=class extends Ta{constructor(e,t=null){super(e,t),this.state=Mt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rs.ROTATE,MIDDLE:rs.DOLLY,RIGHT:rs.PAN},this.touches={ONE:as.ROTATE,TWO:as.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Dn,this._lastTargetPosition=new D,this._quat=new Dn().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new yr,this._sphericalDelta=new yr,this._scale=1,this._panOffset=new D,this._rotateStart=new fe,this._rotateEnd=new fe,this._rotateDelta=new fe,this._panStart=new fe,this._panEnd=new fe,this._panDelta=new fe,this._dollyStart=new fe,this._dollyEnd=new fe,this._dollyDelta=new fe,this._dollyDirection=new D,this._mouse=new fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cy.bind(this),this._onPointerDown=ly.bind(this),this._onPointerUp=hy.bind(this),this._onContextMenu=_y.bind(this),this._onMouseWheel=fy.bind(this),this._onKeyDown=py.bind(this),this._onTouchStart=my.bind(this),this._onTouchMove=gy.bind(this),this._onMouseDown=uy.bind(this),this._onMouseMove=dy.bind(this),this._interceptControlDown=xy.bind(this),this._interceptControlUp=vy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Mt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jf),this.update(),this.state=Mt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Wt.copy(t).sub(this.target),Wt.applyQuaternion(this._quat),this._spherical.setFromVector3(Wt),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Sn:i>Math.PI&&(i-=Sn),s<-Math.PI?s+=Sn:s>Math.PI&&(s-=Sn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Wt.setFromSpherical(this._spherical),Wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Wt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ic.origin.copy(this.object.position),ic.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ic.direction))<oy?this.object.lookAt(this.target):(Kf.setFromNormalAndCoplanarPoint(this.object.up,this.target),ic.intersectPlane(Kf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>hu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hu||this._lastTargetPosition.distanceToSquared(this.target)>hu?(this.dispatchEvent(Jf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Sn/60*this.autoRotateSpeed*e:Sn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Wt.setFromMatrixColumn(t,0),Wt.multiplyScalar(-e),this._panOffset.add(Wt)}_panUp(e,t){this.screenSpacePanning===!0?Wt.setFromMatrixColumn(t,1):(Wt.setFromMatrixColumn(t,0),Wt.crossVectors(this.object.up,Wt)),Wt.multiplyScalar(e),this._panOffset.add(Wt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Wt.copy(s).sub(this.target);let r=Wt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new fe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});function ep(n,e,t){let i;try{i=new Cr({antialias:!0,alpha:!1,powerPreference:"low-power"})}catch{return{available:!1,update(){},travel(){},view(){},effect(){},pause(){}}}n.append(i.domElement),i.domElement.setAttribute("aria-label","Mundo 3D del cuerpo. Usa el mapa para visitar sus sistemas.");let s=i.getContext(),r=s.getExtension("WEBGL_debug_renderer_info"),a=r&&/swiftshader|llvmpipe/i.test(s.getParameter(r.UNMASKED_RENDERER_WEBGL));i.setPixelRatio(Math.min(devicePixelRatio,a?.75:1.7)),i.setClearColor("#e2f1ed"),i.outputColorSpace=Yt,i.toneMapping=Ns,document.body.classList.toggle("low-power",!!a);let o=new ws;o.fog=new Es("#e2f1ed",40,85);let l=new Zt(40,1,.1,150);l.position.set(22,26,28);let c=new sc(l,i.domElement);c.target.set(0,0,0),c.enableDamping=!0,c.minDistance=15,c.maxDistance=55,c.maxPolarAngle=Math.PI/2.25,c.enablePan=!1,o.add(new Is("#ffffff","#c58ca0",3));let u=new Ls("#fff9e3",3.2);u.position.set(-12,22,8),o.add(u);let f=(re,k=.4,G=0)=>new ri({color:re,roughness:k,metalness:G}),h=f("#fff9eb"),p=f("#fffdf8"),m=f("#57c9b4"),v=f("#253e4f"),g=f("#f7cd70",.28,.35),d=f("#f397ac");function M(re,k,G,ne=[0,0,0],ie=[1,1,1]){let ce=new Vt(re,k);return ce.position.set(...ne),ce.scale.set(...ie),G.add(ce),ce}let T=new ts(1,20,14),y=new Nn(1,1,1,36),w=new Xn(1,.12,8,40),b=(re,k,G,ne)=>M(T,re,k,G,ne),C=new Map,_=[],E=[];function R(re,k,G,ne){return M(new Ps(new Qi(re.map(ie=>new D(...ie))),24,k,8,!1),G,ne)}function L(re,k=p){M(new ii(.22,.7,.16),k,re),M(new ii(.65,.22,.16),k,re)}function N(re,k,G=1){let ne=new Oi;return ne.moveTo(0,-1),ne.bezierCurveTo(-2,.2,-1.3,1.9,0,.8),ne.bezierCurveTo(1.3,1.9,2,.2,0,-1),M(new es(ne,{depth:.45,bevelEnabled:!0,bevelSize:.18,bevelThickness:.18,bevelSegments:3,steps:1,curveSegments:14}),k,re,[0,1.5,0],[G,G,G])}function z(re){let k=new Oi;return k.moveTo(0,1.4),k.lineTo(1.15,.8),k.lineTo(.9,-.7),k.lineTo(0,-1.5),k.lineTo(-.9,-.7),k.lineTo(-1.15,.8),k.closePath(),M(new es(k,{depth:.35,bevelEnabled:!0,bevelSize:.12,bevelThickness:.12,bevelSegments:2,steps:1}),m,re,[0,1.9,0])}for(let re of Vn){let k=new bt;k.position.set(re.position[0],0,re.position[1]),o.add(k);let G=f(re.color),ne=M(y,G,k,[0,-.65,0],[3.05,.55,3.05]);ne.userData.site=re.id,_.push(ne),M(y,h,k,[0,-.3,0],[2.92,.2,2.92]);let ie=M(w,G,k,[0,-.12,0],[2.72,2.72,2.72]);if(ie.rotation.x=Math.PI/2,re.id!=="adaptativo"){let[P,et]=re.position,Ke=Math.hypot(P,et),A=[P*3.1/Ke,-.65,et*3.1/Ke],x=[P*(1-3.1/Ke),-.65,et*(1-3.1/Ke)];R([A,[(A[0]+x[0])/2,-.3,(A[2]+x[2])/2],x],.62,f("#d4e4dc"),o),R([[A[0],-.02,A[2]],[(A[0]+x[0])/2,.03,(A[2]+x[2])/2],[x[0],-.02,x[2]]],.09,G,o)}let ce=new bt;if(k.add(ce),re.id==="respiratorio"&&(b(G,ce,[-.85,1.5,0],[.75,1.35,.65]),b(G,ce,[.85,1.5,0],[.75,1.35,.65]),R([[0,3.05,0],[0,2,0],[-.65,1.3,.4]],.15,p,ce),R([[0,2.1,0],[.15,1.8,0],[.65,1.3,.4]],.15,p,ce)),re.id==="circulatorio"&&(N(ce,d,1.2),R([[-.5,2.9,0],[-.5,3.4,0],[.2,3.4,0],[.3,2.7,0]],.19,m,ce)),re.id==="nervioso"){for(let P=0;P<16;P++){let et=P*2.399;b(G,ce,[Math.cos(et)*(.45+P%3*.25),1.9+P%4*.24,Math.sin(et)*.65],[.55,.55,.55])}M(new Nn(.17,.25,1.3,12),p,ce,[0,.9,0])}if(re.id==="inmunologico"){z(ce);let P=new bt;P.position.set(0,1.9,.57),P.scale.setScalar(1.3),L(P),ce.add(P);for(let et of[-1.7,1.7])b(m,ce,[et,.65,0],[.5,.5,.5]),b(v,ce,[et-.13,.72,.46],[.06,.09,.04]),b(v,ce,[et+.13,.72,.46],[.06,.09,.04])}if(re.id==="adaptativo"){let P=M(new Xn(1.65,.28,12,48,Math.PI),g,ce,[0,.9,0]);for(let Ke of[-1.65,1.65])M(y,m,ce,[Ke,.45,0],[.28,.95,.28]);let et=M(new Rs(.75),f("#72d9cf",.15,.2),ce,[0,2.3,0]);E.push(et)}ce.traverse(P=>{P.isMesh&&(P.userData.site=re.id,_.push(P))});let He=M(new Xn(3.18,.06,6,48),g,k,[0,-.15,0]);He.rotation.x=Math.PI/2,He.visible=!1;let Oe=new bt;k.add(Oe);let ze=M(new Xn(1.9,.09,8,44),m,k,[0,1.8,0]);ze.visible=!1;let We=document.createElement("button");We.className="world-label",We.dataset.site=re.id,We.innerHTML=`<span>${re.icon}</span>${re.name}<small></small>`,We.onclick=()=>t(re.id),e.append(We),C.set(re.id,{g:k,organ:ce,microbes:Oe,marker:He,protection:ze,label:We,signature:"",baseY:0})}let I=new bt;o.add(I),I.position.set(0,.1,2.2),b(p,I,[0,.9,0],[.6,.72,.52]),b(m,I,[0,.92,-.48],[.45,.45,.2]);for(let re of[-1,1])b(m,I,[re*.27,.16,.12],[.25,.16,.34]),b(p,I,[re*.67,.8,0],[.17,.35,.18]),b(v,I,[re*.19,1.05,.47],[.075,.12,.05]),b(d,I,[re*.34,.82,.44],[.1,.055,.035]);let B=new bt;B.position.set(0,.6,.48),B.scale.setScalar(.4),L(B,m),I.add(B);let $=new un(T,f("#d9b8c7"),50),Y=new un(w,f("#e8a0b1"),36),he=new Dt;for(let re=0;re<50;re++){let k=re*2.399,G=15+re%7*1.1;he.position.set(Math.cos(k)*G,-2.4+re%5*1.1,Math.sin(k)*G),he.scale.setScalar(.15+re%4*.13),he.updateMatrix(),$.setMatrixAt(re,he.matrix)}o.add($);for(let re=0;re<36;re++){let k=re*2.399,G=16+re%6;he.position.set(Math.cos(k)*G,-1-re%3,Math.sin(k)*G),he.rotation.set(re,0,re*.7),he.scale.setScalar(.22+re%3*.12),he.updateMatrix(),Y.setMatrixAt(re,he.matrix)}o.add(Y);let K=!1,oe="adaptativo",te=new D(0,.1,2.2),Ne=0,Re=0,ut=new fe,rt=new wa,at;i.domElement.addEventListener("pointerdown",re=>at=[re.clientX,re.clientY]),i.domElement.addEventListener("pointerup",re=>{if(!at||Math.hypot(re.clientX-at[0],re.clientY-at[1])>7)return;let k=i.domElement.getBoundingClientRect();ut.set((re.clientX-k.left)/k.width*2-1,-(re.clientY-k.top)/k.height*2+1),rt.setFromCamera(ut,l);let G=rt.intersectObjects(_)[0];G&&t(G.object.userData.site)});let Z=!1;function J(){let re=n.getBoundingClientRect(),k=re.width<600;k!==Z&&(l.position.sub(c.target).multiplyScalar(k?1.5:1/1.5).add(c.target),Z=k),c.maxDistance=Z?90:55,i.setSize(re.width,re.height),l.aspect=re.width/re.height,l.updateProjectionMatrix()}new ResizeObserver(J).observe(n),J();function xe(re=[],k="adaptativo"){oe=k;for(let G of Vn){let ne=C.get(G.id),ie=re.find(Oe=>Oe.type===G.id),ce=ie?vn(ie):0;ne.marker.visible=k===G.id,ne.organ.visible=!0,ne.organ.scale.setScalar(G.id==="adaptativo"||ie?1:.55),ne.label.classList.toggle("active",k===G.id),ne.label.querySelector("small").textContent=G.id==="adaptativo"?"Punto de encuentro":ie?ce?`${ce} nivel${ce>1?"es":""} \xB7 Ayuda aqu\xED`:ie.immune?"Inmunizado":ie.vaccine?"Vacunado":ie.memory?"Con memoria":ie.shield?"Con escudo":"Estable":"Por construir",ne.protection.visible=!!(ie&&(ie.immune||ie.vaccine||ie.shield||ie.memory)),ne.protection.material=ie?.immune?g:m;let He=ie?JSON.stringify(ie.illnesses):"";if(He!==ne.signature){ne.signature=He;for(let ze of[...ne.microbes.children])ne.microbes.remove(ze);let Oe=0;for(let ze of ie?.illnesses||[]){let We=f(ze.type==="bacteriana"?"#a1cf73":ze.type==="fungica"?"#f2b265":"#a58ad7");for(let P=0;P<ze.level;P++){let et=Oe++*2.3,Ke=new bt;Ke.position.set(Math.cos(et)*1.9,1.1,Math.sin(et)*1.9),b(We,Ke,[0,0,0],[.4,.38,.4]);for(let A=0;A<6;A++){let x=A*Math.PI/3;b(We,Ke,[Math.cos(x)*.45,Math.sin(x)*.45,0],[.13,.13,.13])}for(let A of[-.13,.13])b(v,Ke,[A,.04,.36],[.055,.08,.04]);ne.microbes.add(Ke)}}}}}function Je(re){let k=Vn.find(G=>G.id===re);k&&te.set(k.position[0],.1,k.position[1]+2)}function Ee(re){c.target.set(0,0,0),l.position.set(...re==="top"?[0,42,.1]:[22,26,28]),Z&&l.position.multiplyScalar(1.5),c.update()}function Ye(re){if(requestAnimationFrame(Ye),K||document.hidden||re-Ne<(a?55:24))return;let k=Math.min(.1,(re-Ne)/1e3);Ne=re,c.update(),I.position.lerp(te,Math.min(1,k*3)),I.position.y=.1+Math.sin(re*.004)*.08,I.rotation.y=Math.sin(re*.001)*.15;for(let G of E)G.rotation.y=re*6e-4,G.position.y=2.3+Math.sin(re*.0015)*.15;for(let G of C.values()){G.microbes.children.forEach((ie,ce)=>{ie.position.y=1.1+Math.sin(re*.003+ce)*.16,ie.rotation.y=re*4e-4}),G.protection.rotation.y=re*4e-4,G.marker.material=re<Re&&G.g.userData.flash?m:g;let ne=new D(G.g.position.x,.4,G.g.position.z+3.4).project(l);G.label.style.left=`${(ne.x*.5+.5)*100}%`,G.label.style.top=`${(-ne.y*.5+.5)*100}%`,G.label.hidden=ne.z>1}i.render(o,l)}return requestAnimationFrame(Ye),xe(),{available:!0,update:xe,travel:Je,view:Ee,pause(re){K=re},effect(re){Re=performance.now()+1e3;for(let[k,G]of C)G.g.userData.flash=k===re}}}var tp=kn(()=>{nc();Qf();zr();Dc()});function rc(){let n="inmuno-audio-v1",e={music:!0,effects:!0,volume:40};try{let b=JSON.parse(localStorage.getItem(n));b&&typeof b.music=="boolean"&&typeof b.effects=="boolean"&&Number.isFinite(b.volume)&&(e={music:b.music,effects:b.effects,volume:Math.max(0,Math.min(100,b.volume))})}catch{}let t=null,i=null,s=null,r=null,a=0,o=0,l=!1,c=!1,u=new Set,f=60/100,h=b=>440*2**((b-69)/12);function p(){if(!t)return;let b=t.currentTime;i.gain.setTargetAtTime(e.music?e.volume/100*.65*(c?.22:1):0,b,.04),s.gain.setTargetAtTime(e.effects?e.volume/100*.8:0,b,.02)}function m(b,C,_,E=.08,R="triangle",L=!1,N=.015){let z=t.createOscillator(),I=t.createGain(),B=t.createBiquadFilter();z.type=R,z.frequency.value=h(b),B.type="lowpass",B.frequency.value=L?1800:4200,B.Q.value=.5,I.gain.setValueAtTime(0,C),I.gain.linearRampToValueAtTime(E,C+Math.min(N,_/3)),I.gain.exponentialRampToValueAtTime(1e-4,C+_),z.connect(B),B.connect(I),I.connect(L?i:s),z.start(C),z.stop(C+_+.03);let $={osc:z,music:L};u.add($),z.onended=()=>{u.delete($),z.disconnect(),B.disconnect(),I.disconnect()}}function v(b,C,_,E=!1){let R=t.createBuffer(1,Math.ceil(t.sampleRate*C),t.sampleRate),L=R.getChannelData(0);for(let B=0;B<L.length;B++)L[B]=(Math.random()*2-1)*(1-B/L.length);let N=t.createBufferSource(),z=t.createBiquadFilter(),I=t.createGain();N.buffer=R,z.type="highpass",z.frequency.value=E?1700:900,I.gain.setValueAtTime(_,b),I.gain.exponentialRampToValueAtTime(1e-4,b+C),N.connect(z),z.connect(I),I.connect(E?i:s),N.start(b),N.onended=()=>{N.disconnect(),z.disconnect(),I.disconnect()}}function g(b,C){let _=[[48,52,55],[53,57,60],[55,59,62],[48,52,55]],E=Math.floor(b/8),R=_[E%4],L=b%8;if(L===0&&(R.forEach((N,z)=>m(N,C,f*4.2,.1,"sawtooth",!0,.35+z*.025)),m(R[0]-12,C,f*3.8,.16,"sine",!0,.04),m(34,C,.5,.18,"sine",!0)),L===4&&m(38,C,.35,.1,"sine",!0),m(R[[0,1,2,1][L%4]]+12,C,f*.7,.048,"triangle",!0,.01),L%2===0&&E%8>=2){let N=[72,76,79,81,79,76,74,72,77,81,79,76,74,79,76,72];m(N[Math.floor(b/2)%N.length],C,f*1.6,.055,"triangle",!0,.08)}L===0&&E%4===0&&v(C,.7,.035,!0)}function d(){if(r!==null&&(clearInterval(r),r=null),t){for(let b of u)if(b.music)try{b.osc.stop()}catch{}}}function M(){if(!l||!e.music||document.hidden||t.state!=="running"||r!==null)return;a=t.currentTime+.08;let b=()=>{if(t.state==="running")for(;a<t.currentTime+.18;)g(o,a),o=(o+1)%128,a+=f/2};b(),r=setInterval(b,80)}async function T(){if(!t){let b=window.AudioContext||window.webkitAudioContext;if(!b)return!1;t=new b,i=t.createGain(),s=t.createGain();let C=t.createDynamicsCompressor();C.threshold.value=-16,C.knee.value=18,C.ratio.value=6,i.connect(C),s.connect(C),C.connect(t.destination),p()}try{return t.state==="suspended"&&await t.resume(),l=t.state==="running",M(),l}catch{return!1}}function y(b){e={...e,...b},e.volume=Math.max(0,Math.min(100,Number(e.volume)||0));try{localStorage.setItem(n,JSON.stringify(e))}catch{}p(),e.music?M():d()}function w(b){if(!l||!e.effects||t.state!=="running")return;let C=t.currentTime+.01;if(b==="shoot"){m(78,C,.075,.08,"sine"),m(66,C+.015,.08,.04,"triangle");return}if(b==="pop"){[76,83].forEach((_,E)=>m(_,C+E*.04,.14,.1,"sine"));return}if(b==="roll"){for(let _=0;_<7;_++)m(58+_%3*4,C+_*.045,.07,.12,"square"),v(C+_*.045,.025,.06);return}if(b==="success"){[74,77,81].forEach((_,E)=>m(_,C+E*.075,.35,.15));return}if(b==="hurt"){m(42,C,.35,.25,"sawtooth"),m(35,C+.08,.4,.15,"sine");return}if(b==="attack"){v(C,.18,.3),m(55,C,.16,.2,"sawtooth");return}if(b==="heal"){[62,69,74,77].forEach((_,E)=>m(_,C+E*.1,.6,.13,"sine"));return}if(b==="enemy"){[45,46,38].forEach((_,E)=>m(_,C+E*.12,.4,.16,"sawtooth"));return}if(b==="victory"){[62,65,69,74,72,74,77,81].forEach((_,E)=>m(_,C+E*.17,.7,.17,E%2?"triangle":"sawtooth"));return}b==="defeat"&&[62,60,57,50].forEach((_,E)=>m(_,C+E*.28,.9,.13,"triangle"))}return document.addEventListener("visibilitychange",()=>{!t||!l||(document.hidden?(d(),t.suspend().catch(()=>{})):t.resume().then(M).catch(()=>{}))}),window.addEventListener("pagehide",d),{unlock:T,set:y,play:w,duck(b){c=!!b,p()},get settings(){return{...e}},get supported(){return!!(window.AudioContext||window.webkitAudioContext)}}}var du=kn(()=>{});var Cy={};function hi(n){Ge("#notice").textContent=n,Ge("#notice").classList.add("visible"),clearTimeout(np),np=setTimeout(()=>Ge("#notice").classList.remove("visible"),6500)}function lc(){try{localStorage.setItem(sp,JSON.stringify(ae))}catch{hi("No se pudo guardar en este navegador. Usa Sesi\xF3n \u2192 Descargar partida.")}}function Va(){clearTimeout(fu),fu=null}function Yn(){Ti.close(),Dr="",Fn.pause(!1)}function zi(n,e,t=!0){Va(),Dr=n,Ge("#dialog-content").innerHTML=`${t?'<button class="close" aria-label="Cerrar">\xD7</button>':""}${e}`,Ti.open||Ti.showModal(),Fn.pause(!0),Ge(".close")?.addEventListener("click",()=>{Yn(),En()})}function Lr(){globalThis.speechSynthesis?.cancel(),Pt.duck(!1)}function rp(n){if(!globalThis.speechSynthesis)return hi("Este navegador no dispone de lectura en voz alta.");Lr();let e=new SpeechSynthesisUtterance(n);e.lang="es-ES",e.rate=.9,e.onstart=()=>Pt.duck(!0),e.onend=e.onerror=()=>Pt.duck(!1),globalThis.speechSynthesis.speak(e)}function ds(n,{undo:e=!0}={}){Va(),Lr();try{let t=ae,{state:i,result:s}=Ju(ae,n);return e&&(Ir=structuredClone(t)),ae=i,rn=-1,ci=[],wi=!1,t.mode==="duel"&&t.current!==ae.current&&(fs=null),lc(),mn(),s}catch(t){return hi(t.message),null}}function _u(){return ae?.mode==="adventure"||ae?.mode==="duel"&&!ae.players[ae.current].bot&&fs===ae.current&&ae.winner===null}function yy(){return ae?.mode==="duel"?ae.players[pn].systems:ae?.systems||[]}function pu(n){gu||(Tt=n,Fn.travel(n),ae&&(mn(),ae.mode==="adventure"&&gi(ae)?.site===n&&hi(Hn(n).fact)))}function by(n,e){let t=gt[n],i=ae.mode==="duel"&&!Hi(ae,n).length;return`<button class="card ${rn===e?"selected":""} ${wi&&ci.includes(e)?"discard-selected":""} ${i&&!wi?"unavailable":""}" data-index="${e}" aria-pressed="${rn===e||ci.includes(e)}" aria-label="${Nt(t.name)}. ${Nt(t.text)}"><img src="${mu(t.art)}" alt="Ilustraci\xF3n original de ${Nt(t.name)}"><span class="info"><small>${Ou[t.kind]}</small><strong>${Nt(t.name)}</strong><span class="description">${Nt(ae.level===1&&{viral:"Microbio morado. Se retira con un anticuerpo.",bacteriana:"Bacteria verde. Se retira con un antibi\xF3tico.",anticuerpo:"Ayuda a retirar el microbio morado.",antibiotico:"Ayuda a retirar las bacterias verdes.",respuesta:"Ayuda a retirar un microbio.",integral:"El escudo ayuda contra cualquier microbio."}[n]||t.text)}</span></span><span class="key">${e+1}</span></button>`}function mn(){if(!ae){Fn.update([],Tt);return}let n=ae.mode==="adventure",e=n?gi(ae):null,t=Gn[ae.level-1],i=n?null:ae.players[ae.current],s=yy(),r=s.find(m=>m.type===Tt),a=n?ae.completed:ae.winner!==null,o=n?e?.title||"El portal del equilibrio":`Turno de ${i.name}`,l=n?e?.task||"\xA1Las cuatro islas est\xE1n a salvo! Visita el portal central y celebra tu aventura.":mi(ae)?`Tu turno est\xE1 afectado por ${mi(ae)}. Rep\xF3n tus cartas y pasa.`:"Construye cuatro sistemas distintos y mantenlos sin infecci\xF3n para ganar.";Ge("#mission").innerHTML=`<span class="eyebrow">${n?"AVENTURA GUIADA":"DUELO DE CARTAS"} \xB7 ${t.grades}</span><h1>${Nt(o)}</h1><p>${Nt(l)}</p><div class="mission-number"><span>${n?`Misi\xF3n ${Math.min(ae.lesson+1,_s(ae.level).length)} de ${_s(ae.level).length}`:`Turno ${ae.turn} \xB7 ${ae.deck.length} cartas en el mazo`}</span><span class="stars">${n?`\u2605 ${ae.stars}`:`${i.systems.filter(Ci).length}/4`}</span></div><div class="progress"><i style="width:${n?ae.lesson/_s(ae.level).length*100:i.systems.filter(Ci).length*25}%"></i></div><div class="fact"><b>${Hn(Tt).icon} ${Hn(Tt).name}</b><br>${Nt(ae.level===1?Hn(Tt).fact:Hn(Tt).gradeFact)}${r?`<br><span class="pill">${vn(r)?`${vn(r)} nivel(es) de infecci\xF3n`:r.immune?"Inmunizaci\xF3n completa":"Sistema estable"}</span>`:""}</div><div class="mission-buttons"><button id="read-task" aria-label="Escuchar la misi\xF3n">\u25D6 Escuchar</button><button id="hint">\u2727 Pista</button></div>`,Ge("#read-task").onclick=()=>rp(`${o}. ${l}. ${Hn(Tt).fact}`),Ge("#hint").onclick=()=>hi(n&&e?`Ve a ${Hn(e.site).name}. Busca la carta ${gt[e.card].name}.`:wi?"Marca de una a tres cartas y pulsa Cambiar cartas.":"Elige una carta, selecciona un cuerpo y una isla. Tambi\xE9n puedes descartar para renovar tu mano."),Ge("#map").innerHTML=Vn.map(m=>`<button title="Visitar ${m.name}" aria-label="Visitar ${m.name}" class="${Tt===m.id?"active":""}" style="--site-color:${m.color}" data-site="${m.id}">${m.icon}</button>`).join(""),Ge("#map").querySelectorAll("button").forEach(m=>m.onclick=()=>pu(m.dataset.site)),Ge("#players").innerHTML=n?"":ae.players.map((m,v)=>`<button class="${pn===v?"active":""}" data-owner="${v}">${v===ae.current?"\u25B6 ":""}${Nt(m.name)} ${m.bot?"\u25C9":""}<small>${m.systems.filter(Ci).length}/4 estables${ae.pandemics.some(g=>g.owner===v)?" \xB7 Pandemia":""}${m.blocked?" \xB7 Aislado":""}</small></button>`).join(""),Ge("#players").querySelectorAll("button").forEach(m=>m.onclick=()=>{pn=Number(m.dataset.owner),mn()}),Fn.update(s,Tt);let c=!n&&rn>=0?i.hand[rn]:null,u=c?Hi(ae,c):[];document.querySelectorAll("#map [data-site],#labels [data-site]").forEach(m=>m.classList.toggle("available",u.some(v=>v.owner===pn&&v.site===m.dataset.site)));let f=_u()&&!a,h=n?Lc(ae):f?i.hand:[];Ge("#hand-label").textContent=n?"TU EQUIPO DE DEFENSA":`${i.name.toUpperCase()} \xB7 ${ae.level===3?"BARAJA COMPLETA":ae.level===2?"BARAJA DE APRENDIZAJE":"BARAJA INICIAL"}`,Ge("#hand-title").textContent=a?"\xA1El equilibrio ha vuelto!":n?"Elige una carta. Cambia el mundo.":i.bot?"Microbot est\xE1 pensando\u2026":fs!==ae.current?"Prepara el siguiente turno.":wi?"Elige las cartas que quieres cambiar.":"Juega una carta o renueva tu mano.",Ge("#hand").innerHTML=h.map(by).join(""),Ge("#hand").querySelectorAll("button").forEach(m=>m.onclick=()=>ap(Number(m.dataset.index))),Ge("#hand-actions").innerHTML=!n&&f&&!mi(ae)?`<button id="discard-toggle">${wi?"Cancelar cambio":"\u21BB Cambiar cartas"}</button>`:"",Ge("#discard-toggle")?.addEventListener("click",()=>{wi=!wi,rn=-1,ci=[],mn()});let p="";if(n&&!e&&!a)p='<p>El portal central est\xE1 listo.</p><button class="primary" id="finish">\u2726 Abrir el portal</button>';else if(!n&&f&&mi(ae))p='<p>Este turno solo puedes reponer y pasar.</p><button class="primary" id="pass">Reponer y pasar</button>';else if(wi)p=`<p>Descarta las seleccionadas y roba hasta tener tres.</p><button class="primary" id="discard" ${ci.length?"":"disabled"}>Cambiar ${ci.length} carta(s)</button>`;else if(f&&rn>=0&&h[rn]){let m=h[rn],v=n?[]:Hi(ae,m),g=v.find(M=>M.owner===pn&&M.site===Tt&&!M.remove&&!M.otherSite),d=!n&&(gt[m].kind==="event"||gt[m].kind==="treatment");p=`<p>${Nt(gt[m].name)}<br>Destino: ${Nt(n?"":ae.players[pn].name+" \xB7 ")}${Hn(Tt).name}</p><button class="primary" id="use" ${!n&&!d&&!g?"disabled":""}>${d?"Elegir destino":"Usar aqu\xED"} \u2192</button>`}else p=f?"<p>1. Elige una carta.<br>2. Visita una isla.<br>3. Pulsa \xABUsar aqu\xED\xBB.</p>":"";!n&&f&&pn===ae.current&&r&&kr(r)&&(p+='<button id="immunize">\u2726 Inmunizar</button>'),Ge("#action-bar").innerHTML=`<div class="action-row">${p}</div>`,Ge("#use")?.addEventListener("click",op),Ge("#discard")?.addEventListener("click",()=>{ds(m=>Rc(m,ci)),Pt.play("roll"),En()}),Ge("#pass")?.addEventListener("click",()=>{ds(Pc),En()}),Ge("#immunize")?.addEventListener("click",()=>{ds(m=>Ic(m,Tt)),Pt.play("heal"),En()}),Ge("#finish")?.addEventListener("click",()=>{pu("adaptativo"),ds(Zu),ip()}),a&&Dr!=="win"?ip():n&&ae.quiz&&!Ti.open&&cp()}function ap(n){if(!(!_u()||gu)){if(Pt.unlock(),Pt.play("roll"),wi)ci=ci.includes(n)?ci.filter(e=>e!==n):[...ci,n];else if(rn=n,ae.mode==="duel"){let e=ae.players[ae.current].hand[n],t=Hi(ae,e).find(i=>i.site);t&&(pn=t.owner,Tt=t.site,Fn.travel(Tt))}mn()}}function op(){if(!_u()||gu||rn<0)return;let n=ae.mode==="adventure",e=(n?Lc(ae):ae.players[ae.current].hand)[rn];if(!e)return;if(n){let s=ds(r=>$u(r,e,Tt));s&&(hi(s.message),Pt.play(s.ok?"heal":"hurt"),s.ok&&Fn.effect(Tt),ae.quiz&&cp());return}let t=Hi(ae,e);if(!t.length)return hi("No hay un destino v\xE1lido. Puedes cambiar esta carta.");if(gt[e].kind==="event"||gt[e].kind==="treatment"){Sy(e,t);return}let i=t.find(s=>s.owner===pn&&s.site===Tt);if(!i)return hi("Elige un cuerpo y una isla v\xE1lidos para esta carta.");lp(i)}function My(n){return n.otherSite?`${ae.players[n.owner].name}: ${Hn(n.site).name} \u2194 ${ae.players[n.otherOwner].name}: ${Hn(n.otherSite).name}`:n.owner===void 0?"Aplicar el efecto global":`${ae.players[n.owner].name}${n.site?" \xB7 "+Hn(n.site).name:""}${n.remove?" \xB7 Retirar "+n.remove:""}`}function Sy(n,e){zi("targets",`<span class="eyebrow">ELIGE EL EFECTO</span><h2 id="dialog-title">${Nt(gt[n].name)}</h2><p>${Nt(gt[n].text)}</p><div class="target-list">${e.map((t,i)=>`<button data-move="${i}">${Nt(My(t))} \u2192</button>`).join("")}</div>`),Ti.querySelectorAll("[data-move]").forEach(t=>t.onclick=()=>{Yn(),lp(e[Number(t.dataset.move)])})}function lp(n){let e=rn,t=ae.players[ae.current].hand[e];ds(s=>Cc(s,e,n))&&(Pt.play(gt[t].kind==="infection"?"attack":"heal"),Fn.effect(n.site||Tt),hi(ae.log[0])),En()}function cp(){if(Dr==="quiz")return;let n=gi(ae);zi("quiz",`<img class="quiz-art" src="${mu(gt[n.card].art)}" alt="${Nt(gt[n.card].name)}"><span class="eyebrow">PAUSA DE DESCUBRIMIENTO</span><h2 id="dialog-title">${Nt(n.question)}</h2><button id="read-quiz">\u25D6 Escuchar pregunta</button><div class="answers">${ae.quizOrder.map(e=>`<button data-answer="${e}">${Nt(n.choices[e])}</button>`).join("")}</div><div class="feedback" role="status">Puedes intentarlo de nuevo si te equivocas.</div>`,!1),Ge("#read-quiz").onclick=()=>rp(`${n.question}. ${ae.quizOrder.map(e=>n.choices[e]).join(". ")}`),Ti.querySelectorAll("[data-answer]").forEach(e=>e.onclick=()=>{let t=ds(i=>Yu(i,Number(e.dataset.answer)));if(t)if(!t.ok)Ge(".feedback").textContent=t.message,e.classList.add("soft"),Pt.play("hurt");else{Yn(),mn(),Pt.play("success"),hi(`\u2605 +${t.earned} \xB7 ${t.message}`);let i=gi(ae);i&&(Tt=i.site,Fn.travel(Tt),mn())}})}function En(){if(Va(),!ae||Ti.open||ae.mode!=="duel"||ae.winner!==null)return;if(!ae.players[ae.current].bot){fs!==ae.current&&Ey();return}fu=setTimeout(()=>{ds(Wu,{undo:!1})&&(pn=ae.current,mn(),Pt.play("enemy"),En())},850)}function Ey(){let n=ae.players[ae.current];zi("handoff",`<span class="eyebrow">CAMBIO DE TURNO</span><h2 id="dialog-title">\xA1Te toca, ${Nt(n.name)}!</h2><p>${ae.players.filter(e=>!e.bot).length>1?"Pasa la pantalla a este participante antes de mostrar sus cartas.":"Tienes tres cartas y un cuerpo por proteger."}</p><div class="dialog-footer"><button class="primary" id="ready">Estoy listo \xB7 Ver mis cartas</button></div>`,!1),Ge("#ready").onclick=()=>{fs=ae.current,pn=ae.current,Yn(),mn()}}function ip(){if(Dr==="win")return;Va(),Pt.play("victory");let n=ae.mode==="adventure";zi("win",`<div class="win-orb">\u2726</div><div class="center"><span class="eyebrow">MISI\xD3N CUMPLIDA</span><h1 id="dialog-title">${n?"\xA1El cuerpo est\xE1 en equilibrio!":`\xA1Gana ${Nt(ae.players[ae.winner].name)}!`}</h1><p>${n?`${ae.name}, has cuidado los cuatro sistemas y conseguido ${ae.stars} estrellas.`:"Cuatro sistemas distintos, estables y sin bloqueos. \xA1Bien jugado!"}</p><span class="pill">${Gn[ae.level-1].name} \xB7 ${Gn[ae.level-1].grades}</span></div><div class="dialog-footer"><button id="review">Revisar mi mundo</button><button class="primary" id="again">Nueva expedici\xF3n \u2192</button></div>`,!1),Ge("#review").onclick=()=>{Yn()},Ge("#again").onclick=()=>cc()}function cc(){zs=ae?.level||zs,ka()}function ka(){zi("welcome",`<div class="welcome-top"><div><span class="eyebrow">INMUNO \xB7 EXPLORA, DESCUBRE, PROTEGE</span><h1 id="dialog-title">La aventura est\xE1<br>dentro de ti.</h1><p class="muted">Viaja por un cuerpo vivo. Conoce sus sistemas.<br>Forma tu equipo de defensa, una carta a la vez.</p></div><div class="welcome-art"><img src="${mu(gt.inmunologico.art)}" alt="Ilustraci\xF3n original del sistema inmunol\xF3gico"><span>\u2726</span></div></div><div class="level-grid">${Gn.map(n=>`<button class="level-card ${zs===n.id?"active":""}" data-level="${n.id}"><span>${n.grades} DE PRIMARIA</span><b>${n.name}</b><small>${n.description}</small></button>`).join("")}</div><div class="mode-grid"><button id="choose-adventure" class="${Pr==="adventure"?"active":""}">\u2727 Aventura guiada<small>Misiones, descubrimientos y estrellas.</small></button><button id="choose-duel" class="${Pr==="duel"?"active":""}">\u2691 Duelo de cartas<small>Contra Microbot o en la misma pantalla.</small></button></div>${Pr==="duel"?`<div class="form-row"><label>Participantes <select id="count">${[2,3,4,5,6].map(n=>`<option ${ac===n?"selected":""}>${n}</option>`).join("")}</select></label><label><input type="checkbox" id="bot" ${oc?"checked":""}> Los rivales son bots</label></div>`:'<div class="form-row"><label>Tu nombre <input id="name" maxlength="24" placeholder="Explorador" value=""></label></div>'}<div class="dialog-footer"><span class="muted">3D real \xB7 Ilustraciones originales \xB7 Sin conexi\xF3n</span>${ae?'<button id="resume">Continuar partida</button>':""}<button class="primary" id="start">${ae?"Empezar nueva partida":"\xA1Vamos a explorar!"} \u2192</button></div>`,!1),Ti.querySelectorAll("[data-level]").forEach(n=>n.onclick=()=>{zs=Number(n.dataset.level),ka()}),Ge("#choose-adventure").onclick=()=>{Pr="adventure",ka()},Ge("#choose-duel").onclick=()=>{Pr="duel",ka()},Ge("#count")?.addEventListener("change",n=>ac=Number(n.target.value)),Ge("#bot")?.addEventListener("change",n=>oc=n.target.checked),Ge("#resume")?.addEventListener("click",()=>{Yn(),mn(),En()}),Ge("#start").onclick=()=>{let n=Ge("#name")?.value||"Explorador",e=()=>{Pt.unlock(),Lr(),Ir=null,ae=Pr==="adventure"?Xu({level:zs,name:n}):ku({level:zs,names:Array.from({length:ac},(t,i)=>i===0?"T\xFA":oc?`Microbot ${i}`:`Equipo ${i+1}`),bots:Array.from({length:ac},(t,i)=>i>0&&oc)}),rn=-1,fs=null,pn=ae.mode==="duel"?ae.current:0,Tt=ae.mode==="adventure"?ae.site:"adaptativo",Yn(),Fn.travel(Tt),lc(),mn(),En()};ae?hp("\xBFEmpezar una partida nueva?","La partida actual ser\xE1 sustituida. Puedes descargarla desde Sesi\xF3n antes de empezar.",()=>{ka(),e()}):e()}}function hp(n,e,t){zi("confirm",`<h2 id="dialog-title">${Nt(n)}</h2><p>${Nt(e)}</p><div class="dialog-footer"><button id="cancel-confirm">Cancelar</button><button class="primary" id="confirm">Continuar</button></div>`),Ge("#cancel-confirm").onclick=()=>{Yn(),mn(),En()},Ge("#confirm").onclick=()=>{Yn(),t()}}function wy(){zi("help",'<span class="eyebrow">GU\xCDA R\xC1PIDA</span><h2 id="dialog-title">Tu primera expedici\xF3n</h2><div class="rule-list"><article><b>1 \xB7 Elige tu nivel</b><p>Exploradores: 1.\xBA\u20132.\xBA, cuatro misiones. Defensores: 3.\xBA\u20134.\xBA, nueve misiones y memoria. Estrategas: 5.\xBA\u20136.\xBA, afinidades y duelo completo.</p></article><article><b>2 \xB7 Explora un mundo en 3D</b><p>Arrastra para girar. Usa la rueda para acercarte. Pulsa una isla o el mapa para mover a tu c\xE9lula. Las figuras y los microbios cambian al construir y curar.</p></article><article><b>3 \xB7 Aventura: carta \u2192 isla \u2192 Usar aqu\xED</b><p>Sigue la misi\xF3n. Despu\xE9s responde una pregunta. Equivocarte te da una pista y puedes repetir. Al cuidar los cuatro sistemas, abre el portal central.</p></article><article><b>4 \xB7 Duelo: una acci\xF3n por turno</b><p>Juega una carta o cambia de una a tres. Siempre repones hasta tres salvo Reinicio. Construye cuatro sistemas distintos sin infecci\xF3n. Selecciona el cuerpo de un rival para infectarlo. Vacuna + memoria en un sistema limpio permiten inmunizarlo con el bot\xF3n Inmunizar.</p></article><article><b>5 \xB7 Defensas y afinidades</b><p>Anticuerpo retira virus y deja memoria al eliminar la carta viral. Antibi\xF3tico retira bacterias. Respuesta e Integral retiran un nivel cualquiera. Virus en Respiratorio y bacteria en Circulatorio a\xF1aden dos niveles. Tres niveles colapsan un sistema; con vacuna, cuatro.</p></article><article><b>6 \xB7 Eventos del nivel Estrategas</b><p>Pandemia a\xF1ade un nivel a todos los sistemas y su portador no puede ganar. Se transfiere al usar una defensa v\xE1lida en otro participante. Colapso cambia todas las manos y permite repetir turno. El descarte se vuelve al agotar el mazo, sin barajarlo.</p></article><article><b>Juego original y adaptaci\xF3n digital</b><p>Se sigue la gu\xEDa espa\xF1ola. Se corrige una errata: los antibi\xF3ticos act\xFAan contra bacterias. El escudo absorbe un nivel, tambi\xE9n ante una infecci\xF3n severa; Respuesta puede colocarse como escudo universal en un sistema limpio. Las fichas digitales no se agotan. La inmunidad completa y las afinidades son mec\xE1nicas del juego. Consulta README y docs/REGLAS.md en el repositorio para los detalles.</p></article></div>')}function Ty(){zi("sound",`<span class="eyebrow">EL SONIDO DE LA AVENTURA</span><h2 id="dialog-title">A tu ritmo</h2><div class="sound-row"><label for="music">M\xFAsica de fondo<small>Composici\xF3n instrumental incluida en el juego.</small></label><input id="music" type="checkbox" ${Pt.settings.music?"checked":""}></div><div class="sound-row"><label for="effects">Efectos sonoros<small>Cartas, descubrimientos y victorias.</small></label><input id="effects" type="checkbox" ${Pt.settings.effects?"checked":""}></div><div class="sound-row"><label for="volume">Volumen</label><input id="volume" type="range" min="0" max="100" value="${Pt.settings.volume}"><output id="volume-value">${Pt.settings.volume}%</output></div><div class="dialog-footer"><button id="stop-voice">Detener voz</button><button class="primary" id="audio-done">Listo</button></div>`),Ge("#music").onchange=n=>{Pt.unlock(),Pt.set({music:n.target.checked})},Ge("#effects").onchange=n=>{Pt.unlock(),Pt.set({effects:n.target.checked}),Pt.play("success")},Ge("#volume").oninput=n=>{Pt.unlock(),Pt.set({volume:Number(n.target.value)}),Ge("#volume-value").value=n.target.value+"%",Number(n.target.value)||Lr()},Ge("#stop-voice").onclick=Lr,Ge("#audio-done").onclick=()=>{Yn(),En()}}function Ay(){zi("session",`<span class="eyebrow">TU EXPEDICI\xD3N</span><h2 id="dialog-title">Sesi\xF3n de juego</h2><p>El progreso se guarda autom\xE1ticamente en este navegador. Puedes descargar una copia para llevarla a otro equipo.</p><div class="session-grid"><button id="export" ${ae?"":"disabled"}>\u2193 Descargar partida</button><button id="import">\u2191 Cargar partida</button><button id="undo" ${Ir?"":"disabled"}>\u21B6 Deshacer tu \xFAltima acci\xF3n</button><button id="new">\u2727 Nueva partida / Cambiar nivel</button></div><div class="journal"><b>Diario de la expedici\xF3n</b>${(ae?.log||[]).map(n=>`<p>${Nt(n)}</p>`).join("")}</div>`),Ge("#export").onclick=()=>{let n=new Blob([JSON.stringify(ae,null,2)],{type:"application/json"}),e=document.createElement("a");e.href=URL.createObjectURL(n),e.download="MI-PARTIDA-INMUNO.json",e.click(),setTimeout(()=>URL.revokeObjectURL(e.href),1e3)},Ge("#import").onclick=()=>Ge("#import-file").click(),Ge("#undo").onclick=()=>{ae=Ir,Ir=null,fs=null,rn=-1,pn=ae.mode==="duel"?ae.current:0,Tt=ae.mode==="adventure"?ae.site:Tt,Yn(),lc(),mn(),En()},Ge("#new").onclick=()=>cc()}var Ge,mu,Nt,sp,Pt,Ti,ae,Ir,rn,Tt,pn,wi,ci,fu,np,fs,Dr,gu,zs,Pr,ac,oc,Fn,up=kn(()=>{zr();Dc();tp();du();Ge=n=>document.querySelector(n),mu=n=>globalThis.__INMUNO_ASSETS__?.[n]||n,Nt=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),sp="inmuno-state-v1",Pt=rc(),Ti=Ge("#dialog"),ae=null,Ir=null,rn=-1,Tt="adaptativo",pn=0,wi=!1,ci=[],fu=null,fs=null,Dr="",gu=!1,zs=2,Pr="adventure",ac=2,oc=!0;try{let n=JSON.parse(localStorage.getItem(sp));Qa(n)&&(ae=n)}catch{}Fn=ep(Ge("#world"),Ge("#labels"),pu);Fn.available||(Ge("#world").innerHTML='<div class="fallback"><h2>El mundo necesita WebGL 2</h2><p>Puedes seguir jugando con el mapa y las cartas. Para ver el mundo 3D, abre el juego en Chrome, Edge o Firefox con aceleraci\xF3n gr\xE1fica.</p></div>');Ti.addEventListener("cancel",n=>{n.preventDefault(),!["welcome","quiz","handoff","win"].includes(Dr)&&(Yn(),En())});Ge("#import-file").onchange=async n=>{let e=n.target.files[0];if(n.target.value="",!!e)try{if(e.size>2e5)throw Error("El archivo es demasiado grande.");let t=JSON.parse(await e.text());if(!Qa(t))throw Error("No es una partida v\xE1lida de INMUNO.");hp("\xBFCargar esta partida?","Sustituir\xE1 el progreso que est\xE1 abierto ahora.",()=>{Ir=ae,ae=t,fs=null,rn=-1,pn=ae.mode==="duel"?ae.current:0,Tt=ae.mode==="adventure"?ae.site:"adaptativo",lc(),mn(),En()})}catch(t){hi(t.message)}};Ge("#home-view").onclick=()=>Fn.view("home");Ge("#top-view").onclick=()=>Fn.view("top");Ge("#sound").onclick=Ty;Ge("#help").onclick=wy;Ge("#session").onclick=Ay;Ge(".brand").onclick=n=>{n.preventDefault(),cc()};document.addEventListener("keydown",n=>{Ti.open||/INPUT|SELECT|TEXTAREA/.test(n.target.tagName)||(["1","2","3"].includes(n.key)&&ap(Number(n.key)-1),n.key==="Enter"&&Ge("#use")&&op())});document.addEventListener("visibilitychange",()=>{document.hidden?(Lr(),Va()):En()});ae&&(zs=ae.level,pn=ae.mode==="duel"?ae.current:0,Tt=ae.mode==="adventure"?ae.site:"adaptativo",mn());cc()});function Bn(n,e){if(Math.abs(n-10)>4){let t=Math.max(0,Math.hypot(n,e)-39)/24;return t*t*(1.2+Math.sin(n*.12)*.7+Math.cos(e*.13)*.8)}return e>-4&&e<5?(5-e)/3:e<=-4&&e>=-14?3:e<-14&&e>-23?(e+23)/3:0}function hc(n=2,e=!1){return{version:2,assisted:e,level:n,phase:"explore",time:0,seed:1234,player:{x:0,z:15,y:0,vy:0,health:100,shield:0,tool:1,cooldown:0,shieldCooldown:0,buildCooldown:0,invulnerable:0},completed:[],active:null,enemies:[],shots:[],hostile:[],pickups:[{id:900,x:-5,z:8,life:300},{id:901,x:-12,z:1,life:300},{id:902,x:-20,z:-8,life:300},{id:903,x:15,z:1,life:300},{id:904,x:18,z:17,life:300},{id:905,x:-16,z:22,life:300}],barriers:[],particles:[],score:0,kills:0,combo:0,nextID:1,events:[],quizOrder:[],bossStarted:!1}}function yu(n){return n.seed=Math.imul(n.seed,1664525)+1013904223>>>0,n.seed/4294967296}function an(n,e,t={}){n.events.push({type:e,...t})}function ui(n){return Ut.find(e=>!n.completed.includes(e.id))||null}function Ga(n){let e=ui(n);return e&&Qt(n.player,e)<5?{id:e.id,label:`Activar ${e.short}`}:!e&&Qt(n.player,{x:0,z:2})<6?{id:"core",label:"Entrar al n\xFAcleo"}:null}function uc(n){if(n.phase!=="explore")return!1;let e=Ga(n);if(!e)return!1;if(e.id==="core"){n.bossStarted=!0,n.phase="combat",n.active="core",n.player.x=0,n.player.z=-31,n.player.health=100,xu(n,"boss",0,-45,n.assisted?6+n.level*2:10+n.level*4);for(let s=0;s<(n.assisted?1:n.level+1);s++)xu(n,s%2?"bacteriana":"viral",(s-1)*7,-42,2);return an(n,"boss"),!0}let t=Ut.find(s=>s.id===e.id);n.active=t.id,n.phase="combat",n.player.tool=t.tool;let i=n.assisted?2+n.level:2+n.level*2;for(let s=0;s<i;s++){let r=s/i*Math.PI*2;xu(n,t.kind,t.x+Math.cos(r)*8,t.z+Math.sin(r)*8,n.level===1?1:2)}return an(n,"wave",{zone:t.id}),!0}function xu(n,e,t,i,s){n.enemies.push({id:n.nextID++,kind:e,x:t,z:i,hp:s,maxHP:s,cooldown:1+yu(n),phase:yu(n)*6,hit:0})}function Ha(n){let e=n.player;return n.phase==="combat"&&e.shieldCooldown<=0?(e.shield=3.5,e.shieldCooldown=9,an(n,"shield"),!0):!1}function bu(n,e){let t=n.player;return!["combat","explore"].includes(n.phase)||t.buildCooldown>0?!1:(t.buildCooldown=10,n.barriers.push({id:n.nextID++,x:t.x-Math.sin(e)*3,z:t.z-Math.cos(e)*3,yaw:e,life:12}),an(n,"build"),!0)}function Mu(n,e){let t=n.player;if(!["combat","explore"].includes(n.phase)||t.cooldown>1e-6)return!1;let i=ps[t.tool];t.cooldown=i.rate;let s=-Math.sin(e),r=-Math.cos(e),a=null,o=32,l=n.level===1?.15:.65;for(let c of n.enemies){let u=Qt(t,c),f=((c.x-t.x)*s+(c.z-t.z)*r)/(u||1);u<o&&f>l&&(a=c,o=u)}return a&&(s=(a.x-t.x)/o,r=(a.z-t.z)/o),n.shots.push({id:n.nextID++,x:t.x+s,z:t.z+r,y:1.2,dx:s,dz:r,tool:t.tool,life:1.3}),an(n,"shoot"),!0}function dp(n,e){let t=n.player;if(!(t.invulnerable>0)){if(t.shield>0){an(n,"blocked");return}t.health=Math.max(0,t.health-e),t.invulnerable=.6,n.combo=0,an(n,"hurt"),t.health||(n.phase="respawn",an(n,"respawn"))}}function vu(n,e,t,i){let s=e.x-n.x,r=e.z-n.z,a=Math.max(0,Math.min(1,((t.x-n.x)*s+(t.z-n.z)*r)/(s*s+r*r||1)));return Math.hypot(n.x+s*a-t.x,n.z+r*a-t.z)<i}function fp(n,e,t){if(t=Math.min(.05,Math.max(0,t)),!["combat","explore"].includes(n.phase))return;n.time+=t;let i=n.player;for(let v of["cooldown","shield","shieldCooldown","buildCooldown","invulnerable"])i[v]=Math.max(0,i[v]-t);let s=e.right||0,r=e.forward||0,a=Math.hypot(s,r);a>1&&(s/=a,r/=a);let o=e.sprint?10:6.4,l=e.yaw||0,c=Math.cos(l)*s-Math.sin(l)*r,u=-Math.sin(l)*s-Math.cos(l)*r,f=i.x,h=i.z,p=Bn(i.x,i.z);i.x+=c*o*t,i.z+=u*o*t,Bn(i.x,i.z)-p>.5+i.y&&(i.x=f,i.z=h);for(let v of[...ks,...Ut.map(g=>({x:g.x,z:g.z,r:2.6}))]){let g=Qt(i,v);g<v.r+.4&&(i.x=v.x+(i.x-v.x)/(g||1)*(v.r+.4),i.z=v.z+(i.z-v.z)/(g||1)*(v.r+.4))}let m=Math.hypot(i.x,i.z);m>63&&(i.x*=63/m,i.z*=63/m),e.jump&&i.y<=.001&&(i.vy=8,an(n,"jump")),i.vy-=22*t,i.y=Math.max(0,i.y+i.vy*t),i.y===0&&(i.vy=0),e.fire&&Mu(n,l);for(let v of n.enemies){v.cooldown-=t,v.hit=Math.max(0,v.hit-t);let g=Qt(i,v),d=(i.x-v.x)/(g||1),M=(i.z-v.z)/(g||1);if(![...n.barriers,...ks].some(y=>Qt(y,v)<3.2)&&g>2.2){let y=(v.kind==="boss"?1.25:v.kind==="fungica"?1.5:v.kind==="bacteriana"?3.3:2.35)*(n.level===1?.65:n.level===3?1.15:1);v.x+=d*y*t,v.z+=M*y*t}if(g<2.4&&v.cooldown<=0&&(i.y<1.2&&dp(n,n.level===1?6:10),v.cooldown=1.3),g<32&&v.cooldown<=0&&v.kind!=="bacteriana"){v.cooldown=v.kind==="boss"?1.3:3.1;let y=v.kind==="boss"?[-.24,0,.24]:[0];for(let w of y){let b=Math.atan2(d,M)+w;n.hostile.push({id:n.nextID++,x:v.x,z:v.z,dx:Math.sin(b),dz:Math.cos(b),life:4})}}}for(let v of n.shots){let g={x:v.x,z:v.z};v.x+=v.dx*34*t,v.z+=v.dz*34*t,v.life-=t;for(let d of n.enemies){if(d.hp<=0||!vu(g,v,d,d.kind==="boss"?2.2:1.1))continue;v.life=0,ps[v.tool].kind==="all"||ps[v.tool].kind===d.kind||d.kind==="boss"?(d.hp--,d.hit=.16,an(n,"hit",{x:d.x,z:d.z}),d.hp<=0&&(n.kills++,n.combo++,n.score+=100+Math.min(5,n.combo)*10,n.pickups.push({id:n.nextID++,x:d.x,z:d.z,life:25}),an(n,"kill",{kind:d.kind,x:d.x,z:d.z}))):an(n,"wrongTool",{kind:d.kind});break}}n.enemies=n.enemies.filter(v=>v.hp>0),n.shots=n.shots.filter(v=>v.life>0);for(let v of n.hostile){let g={x:v.x,z:v.z};v.x+=v.dx*11*t,v.z+=v.dz*11*t,v.life-=t,[...n.barriers,...ks].some(d=>vu(g,v,d,2.7))&&(v.life=0),vu(g,v,i,.8)&&i.y<1.3&&(dp(n,n.level===1?5:9),v.life=0)}n.hostile=n.hostile.filter(v=>v.life>0);for(let v of n.barriers)v.life-=t;n.barriers=n.barriers.filter(v=>v.life>0);for(let v of n.pickups)v.life-=t,Qt(i,v)<2&&(i.health=Math.min(100,i.health+8),n.score+=25,v.life=0,an(n,"pickup"));if(n.pickups=n.pickups.filter(v=>v.life>0),n.phase==="combat"&&!n.enemies.length){n.hostile=[],n.shots=[],n.phase=n.active==="core"?"victory":"quiz",n.quizOrder=n.level===1?[0,1]:[0,1,2];for(let v=n.quizOrder.length-1;v>0;v--){let g=Math.floor(yu(n)*(v+1));[n.quizOrder[v],n.quizOrder[g]]=[n.quizOrder[g],n.quizOrder[v]]}an(n,n.phase)}}function pp(n,e){return n.phase!=="quiz"?!1:e!==0?(an(n,"answerWrong"),!1):(n.completed.push(n.active),n.active=null,n.phase="explore",n.player.health=100,n.player.shield=0,n.score+=500,an(n,"restored"),!0)}function mp(n){if(n.phase!=="respawn")return;let e=Ut.find(t=>t.id===n.active);n.player.x=e?.x||0,n.player.z=(e?.z||2)+4,n.player.y=0,n.player.vy=0,n.player.health=100,n.enemies=[],n.hostile=[],n.shots=[],n.barriers=[],n.active=null,n.phase="explore"}function dc(n){return{version:2,mode:"action",assisted:!!n.assisted,level:n.level,completed:[...n.completed],score:n.score,kills:n.kills,won:n.phase==="victory"}}function fc(n){if(!n||n.version!==2||n.mode!=="action"||![1,2,3].includes(n.level)||!Array.isArray(n.completed)||n.completed.length>4||!n.completed.every((t,i)=>Ut[i]?.id===t)||!Number.isInteger(n.score)||n.score<0||n.score>1e7||!Number.isInteger(n.kills)||n.kills<0||n.kills>1e5||typeof n.won!="boolean"||n.won&&n.completed.length!==4)return null;let e=hc(n.level,n.assisted===!0);return e.completed=[...n.completed],e.score=n.score,e.kills=n.kills,n.won&&(e.phase="victory"),e}var Ut,ps,ks,Qt,pc=kn(()=>{Ut=[{id:"respiratorio",name:"Valle de los Pulmones",short:"Respiratorio",x:-25,z:-18,color:"#aa91f5",tool:1,kind:"viral",fact:"Los pulmones intercambian ox\xEDgeno y di\xF3xido de carbono.",question:"\xBFQu\xE9 nos ayuda a respirar?",answers:["Los pulmones","El cabello","Los huesos"]},{id:"circulatorio",name:"Ciudad del Coraz\xF3n",short:"Circulatorio",x:25,z:-18,color:"#f37d96",tool:2,kind:"bacteriana",fact:"El coraz\xF3n impulsa sangre que transporta ox\xEDgeno y nutrientes.",question:"\xBFContra qu\xE9 act\xFAan los antibi\xF3ticos?",answers:["Las bacterias","Los virus","Todos los microbios por igual"]},{id:"nervioso",name:"Bosque de las Se\xF1ales",short:"Nervioso",x:-25,z:27,color:"#76baf0",tool:3,kind:"severa",fact:"El sistema nervioso recibe informaci\xF3n y coordina respuestas.",question:"\xBFQu\xE9 coordina el sistema nervioso?",answers:["Movimientos y respuestas","El color de las cartas","Solo la respiraci\xF3n"]},{id:"inmunologico",name:"Fortaleza de las Defensas",short:"Inmunol\xF3gico",x:25,z:27,color:"#52d6b0",tool:3,kind:"fungica",fact:"Las defensas reconocen amenazas. Muchos microbios son beneficiosos.",question:"\xBFQu\xE9 hacen las defensas?",answers:["Reconocer y combatir amenazas","Eliminar todo lo que existe","Impedir que aprendamos"]}],ps={1:{name:"Anticuerpo",color:"#bc9bff",kind:"viral",rate:.3},2:{name:"Antibi\xF3tico",color:"#a9ed6d",kind:"bacteriana",rate:.3},3:{name:"Defensa integral",color:"#ffd46d",kind:"all",rate:.68}},ks=[{x:-12,z:-5,r:1.9},{x:12,z:9,r:1.9},{x:-12,z:27,r:1.9},{x:12,z:-28,r:1.9}];Qt=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z)});function Eu(n,e){return!(n>5&&n<15&&e>-24&&e<6)&&Math.hypot(n,e)<61&&![...ks,...Ut.map(t=>({...t,r:2.6}))].some(t=>Math.hypot(n-t.x,e-t.z)<t.r+.65)}function Ry(n,e){let t=Math.round(n.x/on),i=Math.round(n.z/on),s=Math.round(e.x/on),r=Math.round(e.z/on),a=Su(t,i),o=[{x:t,z:i,g:0,f:0}],l=new Map([[a,0]]),c=new Map,u=null;for(let h=0;o.length&&h<1e4;h++){o.sort((v,g)=>g.f-v.f);let p=o.pop(),m=Su(p.x,p.z);if(Math.hypot(p.x-s,p.z-r)<.75){u=m;break}for(let[v,g]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]]){let d=p.x+v,M=p.z+g;if(!Eu(d*on,M*on)||v&&g&&(!Eu(p.x*on,M*on)||!Eu(d*on,p.z*on))||Math.abs(Bn(d*on,M*on)-Bn(p.x*on,p.z*on))>1.2)continue;let T=Su(d,M),y=p.g+Math.hypot(v,g);y>=(l.get(T)??1/0)||(l.set(T,y),c.set(T,m),o.push({x:d,z:M,g:y,f:y+Math.hypot(d-s,M-r)}))}}if(!u)return[];let f=[];for(let h=u;h!==a;h=c.get(h)){if(!h)return[];let[p,m]=h.split(",").map(Number);f.push({x:p*on,z:m*on})}return f.reverse().concat({x:e.x,z:e.z})}function Py(n){let e=ui(n);return e?{x:e.x,z:e.z+4,id:e.id}:{x:0,z:6,id:"core"}}function wu(n){return{following:!0,route:Ry(n.player,Py(n)),aim:0}}function _p(n,e,t,i){let s={...t},r=n.player,a=null;if(e.following&&n.phase==="explore"){for(;e.route.length&&Qt(r,e.route[0])<.75;)e.route.shift();if(Ga(n))e.following=!1,e.route=[],uc(n);else if(e.route.length){let o=e.route[0],l=Math.atan2(-(o.x-r.x),-(o.z-r.z));s={yaw:l,forward:1,right:0,sprint:!1,jump:!1,fire:!1},a=l}else e.following=!1}if(n.phase==="combat"&&s.fire){let o=n.enemies.reduce((l,c)=>!l||Qt(r,c)<Qt(r,l)?c:l,null);if(o){r.tool=o.kind==="viral"?1:o.kind==="bacteriana"?2:3;let l=Math.atan2(-(o.x-r.x),-(o.z-r.z));!t.forward&&!t.right?s.yaw=l:(Mu(n,l),s.fire=!1),a=l,Qt(r,o)<12&&Ha(n)}}return fp(n,s,i),n.phase==="combat"&&r.health<25&&(r.health=65,r.invulnerable=2,n.events.push({type:"assistance"})),a}var on,Su,xp=kn(()=>{pc();on=2,Su=(n,e)=>`${n},${e}`});function vp(n){let e;try{e=new Cr({antialias:!0,powerPreference:"high-performance"})}catch{return null}n.append(e.domElement);let t=e.domElement;t.setAttribute("aria-label","Videojuego 3D en tercera persona. Mueve tu personaje con WASD.");let i=e.getContext(),s=i.getExtension("WEBGL_debug_renderer_info"),r=s&&/swiftshader|llvmpipe/i.test(i.getParameter(s.UNMASKED_RENDERER_WEBGL));e.setPixelRatio(r?1:Math.min(devicePixelRatio,1.8)),e.toneMappingExposure=.9,e.shadowMap.enabled=!r,e.shadowMap.type=al,e.outputColorSpace=Yt,e.toneMapping=Ns,e.setClearColor("#74c9d7");let a=new ws;a.fog=new Es("#c6dfcd",48,150);let o=new Vt(new ts(190,32,16),new dn({side:jt,depthWrite:!1,uniforms:{top:{value:new nt("#6bb7dd")},bottom:{value:new nt("#f5e4b2")}},vertexShader:"varying vec3 v;void main(){v=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform vec3 top;uniform vec3 bottom;varying vec3 v;void main(){float h=clamp(normalize(v).y*.8+.25,0.,1.);gl_FragColor=vec4(mix(bottom,top,pow(h,.65)),1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}));a.add(o);let l=new Zt(62,1,.1,230);a.add(new Is("#dcfaff","#55749c",2.4));let c=new Ls("#fff0c2",3.2);c.position.set(-30,60,-20),c.castShadow=!r,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-70,right:70,top:70,bottom:-70,near:1,far:160}),c.shadow.normalBias=.04,a.add(c);let u=(U,ee=0)=>new Fi({color:U,roughness:.4,metalness:ee,clearcoat:.55,clearcoatRoughness:.25}),f={ground:u("#70bda1"),cliff:u("#628aa1"),white:u("#edf7ec"),dark:u("#19344c"),teal:u("#2faeac"),gold:u("#f5bc42"),pink:u("#ed7196"),purple:u("#a47eee"),blue:u("#4098db"),red:u("#e6526b")},h=new ts(1,24,18),p=new Nn(1,1,1,24),m=new ii(1,1,1),v=new Xn(1,.12,6,32),g=new Rs(1);function d(U,ee,Se,Le=[0,0,0],Pe=[1,1,1]){let tt=new Vt(U,ee);return tt.position.set(...Le),tt.scale.set(...Pe),tt.castShadow=!r,tt.receiveShadow=!0,Se.add(tt),tt}function M(U,ee,Se,Le){return d(h,U,ee,Se,Le)}function T(U,ee,Se,Le){return d(new Ps(new Qi(U.map(Pe=>new D(...Pe))),32,ee,7,!1),Se,Le)}function y(U,ee=f.white){d(m,ee,U,[0,0,0],[.25,.9,.15]),d(m,ee,U,[0,0,0],[.85,.25,.15])}d(new Nn(65,59,9,72),f.cliff,a,[0,-4.65,0]);let w=document.createElement("canvas");w.width=w.height=256;let b=w.getContext("2d");b.fillStyle="#a3cdb0",b.fillRect(0,0,256,256);for(let U=0;U<2200;U++){let ee=Math.sin(U*127.1)*43758.5453%1*256,Se=Math.cos(U*71.7)*31337%1*256;b.fillStyle=U%2?"rgba(255,255,230,.11)":"rgba(15,90,80,.07)",b.beginPath(),b.ellipse(Math.abs(ee),Math.abs(Se),1+U%4,1+U%3,U,0,Math.PI*2),b.fill()}let C=new As(w);C.wrapS=C.wrapT=cr,C.repeat.set(15,15),C.colorSpace=Yt;let _=new si(130,130,110,110);_.rotateX(-Math.PI/2);let E=_.attributes.position,R=[];for(let U=0;U<E.count;U++){let ee=E.getX(U),Se=E.getZ(U);E.setY(U,Bn(ee,Se)-.06);let Le=.5+.25*Math.sin(ee*.14)*Math.cos(Se*.13),Pe=new nt().lerpColors(new nt("#559f97"),new nt("#b1d5a5"),Le);R.push(Pe.r,Pe.g,Pe.b)}let L=[];for(let U=0;U<_.index.count;U+=3){let ee=[_.index.getX(U),_.index.getX(U+1),_.index.getX(U+2)];ee.every(Se=>Math.hypot(E.getX(Se),E.getZ(Se))<65)&&L.push(...ee)}_.setIndex(L),_.setAttribute("color",new ht(R,3)),_.computeVertexNormals();let N=d(_,new ri({map:C,vertexColors:!0,roughness:1}),a);N.receiveShadow=!0,N.castShadow=!1;let z=d(new si(2e3,2e3),u("#72b8cf"),a,[0,-11,0]);z.rotation.x=-Math.PI/2;for(let U of Ut){let ee=u(U.color),Se=d(p,ee,a,[U.x,.015,U.z],[8,.025,8]);T([[0,.1,9],[U.x*.35,.1,U.z*.25],[U.x,.1,U.z]],.45,f.white,a),T([[0,.12,9],[U.x*.35,.12,U.z*.25],[U.x,.12,U.z]],.14,ee,a);let Le=new bt;Le.position.set(U.x,0,U.z),a.add(Le);let Pe=d(p,f.white,Le,[0,.18,0],[3.8,.35,3.8]),tt=d(v,ee,Le,[0,.45,0],[3.5,3.5,3.5]);if(tt.rotation.x=Math.PI/2,U.id==="respiratorio"){for(let Ue of[-1.5,1.5])M(ee,Le,[Ue,3.6,0],[1.3,2.4,1.1]);T([[0,6.5,0],[0,4.2,0],[-1.1,2.7,1]],.24,f.white,Le),T([[0,4.2,0],[.5,3.5,.5],[1.1,2.7,1]],.24,f.white,Le)}if(U.id==="circulatorio"){let Ue=new Oi;Ue.moveTo(0,-1),Ue.bezierCurveTo(-2,.2,-1.4,2.1,0,.85),Ue.bezierCurveTo(1.4,2.1,2,.2,0,-1),d(new es(Ue,{depth:.7,bevelEnabled:!0,bevelSize:.18,bevelThickness:.18,bevelSegments:2,steps:1}),f.pink,Le,[0,3,0],[2,2,2]),T([[-.7,5,0],[-.8,6,0],[.7,6,0],[.7,4.8,0]],.3,f.teal,Le)}if(U.id==="nervioso"){for(let Ue=0;Ue<18;Ue++){let qt=Ue*2.399;M(ee,Le,[Math.cos(qt)*(1+Ue%3*.3),4.2+Ue%4*.32,Math.sin(qt)*1.2],[.9,.9,.9])}d(p,f.white,Le,[0,1.9,0],[.35,3,.35]);for(let Ue=0;Ue<5;Ue++){let qt=Ue*Math.PI*2/5;T([[0,1.3,0],[Math.cos(qt)*2,.8,Math.sin(qt)*2],[Math.cos(qt)*3,.7,Math.sin(qt)*3]],.13,ee,Le)}}if(U.id==="inmunologico"){d(m,f.teal,Le,[0,2,0],[4,3,2.5]);for(let qt of[-2.4,2.4])d(p,f.teal,Le,[qt,2.6,0],[.85,4.7,.85]),d(new ha(1.1,1.2,6),f.gold,Le,[qt,5.5,0]);let Ue=new bt;Ue.position.set(0,3,1.4),Ue.scale.setScalar(1.6),y(Ue),Le.add(Ue)}let _t=new bt;_t.position.set(0,.9,4),Le.add(_t),d(m,f.dark,_t,[0,0,0],[1.3,1.6,.8]),d(m,ee,_t,[0,.3,.45],[1,.65,.08]),y(_t,f.gold),_t.rotation.y=Math.PI;let _n=document.createElement("canvas");_n.width=512,_n.height=100;let Cn=_n.getContext("2d");Cn.fillStyle="#163751",Cn.fillRect(0,0,512,100),Cn.fillStyle="white",Cn.font="bold 30px sans-serif",Cn.textAlign="center",Cn.fillText(U.short.toUpperCase(),256,62);let dt=new kt({map:new As(_n),side:fn});d(new si(6,1.17),dt,Le,[0,7.6,0])}let I=new bt;I.position.set(0,0,2),a.add(I),d(p,f.dark,I,[0,.15,0],[4,.3,4]);let B=d(new Xn(2.9,.35,10,48),f.gold,I,[0,3.2,0]),$=d(new ca(2.6,40),new kt({color:"#76ddda",transparent:!0,opacity:.45,side:fn}),I,[0,3.2,0]),Y=u("#548fb0");d(m,Y,a,[10,1.5,-9],[8,3,10]);for(let[U,ee,Se,Le]of[[-23,-14,0,3],[-4,5,3,0]]){let Pe=new Ft;Pe.setAttribute("position",new ht([6,Se,U,14,Se,U,14,Le,ee,6,Se,U,14,Le,ee,6,Le,ee],3)),Pe.computeVertexNormals();let tt=d(Pe,new ri({color:"#6ca6bb",side:fn}),a)}for(let U of ks){let ee=new bt;ee.position.set(U.x,0,U.z),a.add(ee),d(m,f.blue,ee,[0,1.2,0],[3.2,2.4,3.2]);for(let Le of[-1.65,1.65])d(m,f.white,ee,[Le,1.2,0],[.12,2.5,3.3]);let Se=new bt;Se.position.set(0,1.3,1.65),y(Se),ee.add(Se)}let he=new un(new ba(1,2),new ri({color:"#7ca99d",roughness:1}),24);for(let U=0;U<24;U++){let ee=U*Math.PI*2/24,Se=new Dt;Se.position.set(Math.sin(ee)*86,-6,Math.cos(ee)*86),Se.scale.set(15+U%3*3,18+U%5*4,16),Se.rotation.y=U,Se.updateMatrix(),he.setMatrixAt(U,Se.matrix)}a.add(he);let K=d(p,f.dark,a,[0,.05,-45],[12,.1,12]),oe=d(v,f.red,a,[0,.15,-45],[11,11,11]);oe.rotation.x=Math.PI/2;let te=new Dt,Ne=new un(p,f.purple,90),Re=new un(h,f.teal,90),ut=new un(g,f.blue,65);for(let U=0;U<90;U++){let ee=U*2.399,Se=40+U%7*3,Le=Math.cos(ee)*Se,Pe=Math.sin(ee)*Se,tt=2+U%4*.7;te.position.set(Le,tt/2,Pe),te.rotation.set(0,0,Math.sin(U)*.15),te.scale.set(.25,tt,.25),te.updateMatrix(),Ne.setMatrixAt(U,te.matrix),te.position.y=tt,te.scale.set(1+U%3*.3,.8+U%3*.3,1+U%3*.3),te.updateMatrix(),Re.setMatrixAt(U,te.matrix)}for(let U=0;U<65;U++){let ee=U*2.399,Se=30+U%9*3.5;te.position.set(Math.cos(ee)*Se,.4,Math.sin(ee)*Se),te.rotation.set(U,0,U*.8),te.scale.set(.7+U%3*.3,.6+U%4*.3,.9),te.updateMatrix(),ut.setMatrixAt(U,te.matrix)}a.add(Ne,Re,ut);let rt=new ri({color:"#b5d898",side:fn,roughness:1}),at=new Ft;at.setAttribute("position",new ht([-.11,0,0,.11,0,0,0,.6,0],3)),at.computeVertexNormals();let Z=new un(at,rt,2400),J=new Dt;for(let U=0;U<2400;U++){let ee=Math.sin(U*127.1)*43758.5,Se=Math.sin(U*311.7)*7541.2,Le=((ee-Math.floor(ee))*2-1)*62,Pe=((Se-Math.floor(Se))*2-1)*62,tt=Math.hypot(Le,Pe)<63&&!Ut.some(_t=>Math.hypot(_t.x-Le,_t.z-Pe)<6);J.position.set(Le,tt?Bn(Le,Pe)+.28:-10,Pe),J.rotation.set(.1,U*2.399,.1*Math.sin(U)),J.scale.setScalar(.6+U%7*.15),J.updateMatrix(),Z.setMatrixAt(U,J.matrix),Z.setColorAt(U,new nt().setHSL(.36+U%4*.02,.28,.55+U%5*.025))}a.add(Z);let xe=new un(h,new kt({color:"#fff7e9"}),48);for(let U=0;U<48;U++)J.position.set(Math.sin(Math.floor(U/4)*2.4)*95+U%4*3,28+U%3*2,Math.cos(Math.floor(U/4)*2.4)*95),J.rotation.set(0,U,0),J.scale.set(5+U%3,1.7+U%2,3.5),J.updateMatrix(),xe.setMatrixAt(U,J.matrix);a.add(xe);let Je=new un(h,new Fi({color:"#59ae9c",roughness:.5,clearcoat:.4}),180);for(let U=0;U<180;U++){let ee=Math.floor(U/2),Se=ee*2.399,Le=40+ee%7*3,Pe=Math.cos(Se)*Le,tt=Math.sin(Se)*Le,_t=2+ee%4*.7;J.position.set(Pe+(U%2?1:-1),_t+Bn(Pe,tt),tt+.45),J.scale.set(1.3,1.15,1.2),J.updateMatrix(),Je.setMatrixAt(U,J.matrix)}a.add(Je);let Ee=document.createElement("canvas");Ee.width=Ee.height=128;let Ye=Ee.getContext("2d"),re=Ye.createRadialGradient(64,64,3,64,64,63);re.addColorStop(0,"rgba(12,46,47,.65)"),re.addColorStop(1,"rgba(12,46,47,0)"),Ye.fillStyle=re,Ye.fillRect(0,0,128,128);let k=new As(Ee);for(let U of Ut){let ee=d(new si(13,10),new kt({map:k,transparent:!0,opacity:.65,depthWrite:!1}),a,[U.x,.08,U.z]);ee.rotation.x=-Math.PI/2,ee.castShadow=!1}let G=new bt;a.add(G);let ne=new Fi({color:"#fff7e9",roughness:.26,metalness:.12,clearcoat:1}),ie=u("#2db4a6",.15),ce=u("#f5c45b",.35),He=new Fi({color:"#12394b",roughness:.13,metalness:.65,clearcoat:1});d(new bi(.49,.62,8,20),ne,G,[0,1.35,0]),M(ie,G,[0,1.45,-.29],[.47,.48,.3]),d(new Nn(.5,.48,.16,32),ce,G,[0,.97,0]),M(ne,G,[0,2.3,0],[.72,.68,.66]),M(He,G,[0,2.3,-.42],[.59,.39,.3]);for(let U of[-1,1])M(ie,G,[U*.69,2.28,0],[.13,.26,.28]),M(ce,G,[U*.72,2.28,0],[.08,.13,.15]),M(new kt({color:"#b7fff0"}),G,[U*.22,2.31,-.7],[.085,.12,.035]);let Oe=d(v,ie,G,[0,2.3,0],[.69,.69,.69]);Oe.rotation.x=Math.PI/2,d(new Nn(.035,.035,.5,8),ce,G,[.35,3,.04]),M(new kt({color:"#86ffdc"}),G,[.35,3.27,.04],[.09,.09,.09]),d(new bi(.33,.48,6,14),ie,G,[0,1.47,.51]);for(let U of[-.26,.26])d(new bi(.115,.48,4,10),ce,G,[U,1.48,.67]);d(m,ne,G,[0,1.45,.77],[.46,.48,.1]);let ze=new bt;ze.position.set(0,1.45,.85),ze.scale.setScalar(.35),y(ze,ie),G.add(ze);let We=new bt;We.position.set(0,1.5,-.57),We.scale.setScalar(.35),y(We,ne),G.add(We);let P=[];for(let U of[-1,1]){let ee=new bt;ee.position.set(U*.29,.9,0),G.add(ee),d(new bi(.19,.39,5,12),ie,ee,[0,-.34,0]),M(ne,ee,[0,-.31,-.13],[.2,.24,.12]),M(ne,ee,[0,-.68,-.16],[.27,.19,.39]),M(ce,ee,[0,-.77,-.18],[.28,.06,.38]),P.push(ee);let Se=new bt;Se.position.set(U*.6,1.82,0),Se.rotation.x=-.6,G.add(Se),M(ie,Se,[0,0,0],[.25,.26,.26]),d(new bi(.15,.36,5,12),ne,Se,[0,-.28,0]),M(ce,Se,[0,-.53,-.01],[.18,.18,.2]),U===1&&(d(new bi(.14,.45,5,12),ie,Se,[0,-.52,-.32]).rotation.x=Math.PI/2,M(new kt({color:"#b7fff0"}),Se,[0,-.52,-.66],[.13,.13,.07]))}let et=new kt({map:k,color:"#ffffff",transparent:!0,opacity:.18,depthWrite:!1}),Ke=d(new si(2.7,2.2),et,a,[0,.08,0]);Ke.rotation.x=-Math.PI/2;let A=d(h,new Fi({color:"#7fffe0",transparent:!0,opacity:.12,roughness:.1,metalness:.2}),G,[0,1.3,0],[1.2,1.7,1.2]);A.visible=!1;let x=new Map,V=new Map,X=new Map,j=new Map,pe=new Map,me=[],Q=Object.fromEntries(Object.entries(ps).map(([U,ee])=>[U,new kt({color:ee.color})])),le=new kt({color:"#f16a9d"});function Me(U){let ee=new bt,Se=U.kind==="viral"?f.purple:U.kind==="bacteriana"?u("#8ccf73"):U.kind==="fungica"?f.gold:U.kind==="boss"?u("#da83b2"):f.pink;if(M(Se,ee,[0,.95,0],U.kind==="bacteriana"?[1.12,.62,.62]:[.87,.82,.85]),U.kind==="fungica"){M(f.white,ee,[0,.5,0],[.35,.6,.35]),M(Se,ee,[0,1.2,0],[1,.45,1]);for(let Pe=0;Pe<6;Pe++){let tt=Pe*2.4;M(f.white,ee,[Math.cos(tt)*.6,1.52,Math.sin(tt)*.6],[.12,.07,.12])}}else for(let Pe=0;Pe<8;Pe++){let tt=Pe*Math.PI/4,_t=d(new Nn(.055,.07,.3,8),Se,ee,[Math.cos(tt)*.91,1+Math.sin(tt)*.75,0]);_t.rotation.z=tt-Math.PI/2,M(Se,ee,[Math.cos(tt)*1.08,1+Math.sin(tt)*.91,0],[.14,.14,.14])}for(let Pe of[-.28,.28])M(f.white,ee,[Pe,1.1,-.74],[.21,.25,.13]),M(f.dark,ee,[Pe,1.08,-.86],[.105,.14,.045]),M(f.white,ee,[Pe-.025,1.15,-.9],[.035,.04,.025]);M(f.pink,ee,[-.49,.91,-.66],[.12,.07,.04]),M(f.pink,ee,[.49,.91,-.66],[.12,.07,.04]);let Le=U.kind==="boss"?2.2:1;return ee.scale.setScalar(Le),a.add(ee),ee}function Fe(U,ee,Se,Le){let Pe=new Set(U.map(tt=>tt.id));for(let[tt,_t]of ee)Pe.has(tt)||(a.remove(_t),ee.delete(tt));for(let tt of U){let _t=ee.get(tt.id);_t||(_t=Se(tt),ee.set(tt.id,_t)),Le(_t,tt)}}let ve=new un(h,new kt({color:"#ffe391"}),40);a.add(ve);let _e=[];function Xe(U,ee){let Se=ui(U)||{x:0,z:2};_e=ee.following?ee.route:[{x:U.player.x,z:U.player.z},Se],ve.visible=U.phase==="explore";let Le=_e.length>1?_e:[{x:U.player.x,z:U.player.z},Se];for(let Pe=0;Pe<40;Pe++){let tt=Pe/39*(Le.length-1),_t=Le[Math.floor(tt)],_n=Le[Math.min(Le.length-1,Math.floor(tt)+1)],Cn=tt%1,dt=_t.x+(_n.x-_t.x)*Cn,Ue=_t.z+(_n.z-_t.z)*Cn;J.position.set(dt,Bn(dt,Ue)+.17,Ue),J.rotation.set(0,0,0),J.scale.setScalar(.1+.055*Math.sin(U.time*3-Pe*.4)),J.updateMatrix(),ve.setMatrixAt(Pe,J.matrix)}ve.instanceMatrix.needsUpdate=!0}let Ze=0,it=15,F=0,ye=!1,se=0,be=new D,Te=new D;function ue(U,ee,Se,Le){let Pe=U.player,tt=Bn(Pe.x,Pe.z);G.position.set(Pe.x,Pe.y+tt,Pe.z),Ke.position.set(Pe.x,tt+.08,Pe.z),A.visible=Pe.shield>0;let _t=Math.hypot(Pe.x-Ze,Pe.z-it);if(F+=_t*1.4,_t>.003){let dt=Math.atan2(-(Pe.x-Ze),-(Pe.z-it));G.rotation.y=Pe.cooldown>0?ee:dt,P[0].rotation.x=Math.sin(F)*.65,P[1].rotation.x=-Math.sin(F)*.65}else P[0].rotation.x*=.8,P[1].rotation.x*=.8,G.rotation.y=Oa.lerp(G.rotation.y,ee,.15);Ze=Pe.x,it=Pe.z;let _n=10,Cn=4.5+Se*4;be.set(Pe.x+Math.sin(ee)*_n+Math.cos(ee)*1.6,Pe.y+tt+Cn,Pe.z+Math.cos(ee)*_n-Math.sin(ee)*1.6),l.position.lerp(be,ye?Math.min(1,Le*12):1),Te.set(Pe.x-Math.sin(ee)*5,Pe.y+tt+1.7-Se*2,Pe.z-Math.cos(ee)*5),l.lookAt(Te),ye=!0,se>0&&(l.position.x+=(Math.random()-.5)*se,l.position.y+=(Math.random()-.5)*se,se*=.8),Fe(U.enemies,x,Me,(dt,Ue)=>{dt.position.set(Ue.x,Bn(Ue.x,Ue.z)+Math.sin(U.time*4+Ue.phase)*.12,Ue.z),dt.rotation.y=Math.atan2(-(Pe.x-Ue.x),-(Pe.z-Ue.z)),dt.scale.setScalar((Ue.kind==="boss"?2.3:1)*(Ue.hit>0?1.15:1))}),Fe(U.shots,V,dt=>d(h,Q[dt.tool],a,[0,0,0],[.2,.2,.45]),(dt,Ue)=>{dt.position.set(Ue.x,Bn(Ue.x,Ue.z)+1.4,Ue.z),dt.rotation.y=Math.atan2(Ue.dx,Ue.dz)}),Fe(U.hostile,X,()=>d(h,le,a,[0,0,0],[.3,.3,.3]),(dt,Ue)=>dt.position.set(Ue.x,1.1,Ue.z)),Fe(U.pickups,j,()=>d(g,f.gold,a,[0,0,0],[.45,.6,.45]),(dt,Ue)=>{dt.position.set(Ue.x,.8+Math.sin(U.time*3)*.2,Ue.z),dt.rotation.y=U.time}),Fe(U.barriers,pe,()=>{let dt=new bt;d(m,new kt({color:"#80ffe0",transparent:!0,opacity:.25}),dt,[0,1.5,0],[5,3,.3]);for(let Ue of[-2.5,2.5])d(m,f.teal,dt,[Ue,1.5,0],[.12,3,.18]);return d(m,f.teal,dt,[0,3,0],[5,.12,.18]),a.add(dt),dt},(dt,Ue)=>{dt.position.set(Ue.x,0,Ue.z),dt.rotation.y=Ue.yaw}),B.rotation.z=Math.sin(U.time)*.03,$.material.opacity=U.completed.length===4?.55:.18,oe.visible=U.bossStarted;for(let dt=me.length-1;dt>=0;dt--){let Ue=me[dt];Ue.life-=Le,Ue.mesh.scale.multiplyScalar(1+Le*3),Ue.mesh.material.opacity=Math.max(0,Ue.life*2),Ue.life<=0&&(a.remove(Ue.mesh),Ue.mesh.geometry.dispose(),Ue.mesh.material.dispose(),me.splice(dt,1))}e.render(a,l)}function $e(U,ee){let Se=d(new Xn(.6,.13,6,24),new kt({color:"#fff3b2",transparent:!0,opacity:1}),a,[U,1,ee]);Se.rotation.x=Math.PI/2,me.push({mesh:Se,life:.45})}function Be(){let U=n.getBoundingClientRect();e.setSize(U.width,U.height),l.aspect=U.width/U.height,l.updateProjectionMatrix()}return new ResizeObserver(Be).observe(n),Be(),{canvas:t,soft:r,render:ue,setGuide:Xe,burst:$e,hurt(){se=.2},project(U,ee){return new D(U,3,ee).project(l)},dispose(){e.dispose()}}}var yp=kn(()=>{nc();pc()});var Fy={};function Ap(){return globalThis.__INMUNO_OFFLINE__?"MODO-CARTAS.html":"cartas.html"}function vc(){Ur=fc(dc(ge));try{localStorage.setItem(Tp,JSON.stringify(dc(ge)))}catch{fi("El navegador no permite guardar. Usa Pausa \u2192 Descargar progreso.")}}function Ya(){wn.clear(),Jn=!1,gc=!1,_c=xc=0,de("#stick").style.transform=""}function Or(){globalThis.speechSynthesis?.cancel(),yt.duck(!1)}function yc(n){if(!globalThis.speechSynthesis)return fi("La lectura en voz alta no est\xE1 disponible en este navegador.");Or();let e=new SpeechSynthesisUtterance(n);e.lang="es-ES",e.rate=.9,e.onstart=()=>yt.duck(!0),e.onend=e.onerror=()=>yt.duck(!1),speechSynthesis.speak(e)}function fi(n){de("#notification").textContent=n,de("#notification").classList.add("visible"),clearTimeout(Mp),Mp=setTimeout(()=>de("#notification").classList.remove("visible"),4300)}function An(n,e){Xt=!0,Ya(),$a=n,document.exitPointerLock?.(),de("#modal-content").innerHTML=e,Gs.open||Gs.showModal()}function Kn(){Gs.close(),$a="",Xt=!1,Ya(),Or(),document.body.classList.add("playing"),mc=performance.now()}function qa(){An("welcome",`<span class="tagline">INMUNO \xB7 AVENTURA GUIADA EN 3D</span><h1 id="dialog-title">Un peque\xF1o h\xE9roe.<br><em>Una gran misi\xF3n.</em></h1><p>Recupera los pulmones, el coraz\xF3n, el cerebro y las defensas.<br>Lumi te ense\xF1ar\xE1 cada paso. Solo necesitas moverte y proteger.</p><div class="level-grid">${Gn.map(e=>`<button class="level-card ${Wa===e.id?"active":""}" data-level="${e.id}"><span>${e.grades} DE PRIMARIA</span><b>${e.name}</b><small>${e.id===1?"Muchas ayudas. Misiones cortas.":e.id===2?"Descubre c\xF3mo funciona tu cuerpo.":"Nuevos retos con ayuda siempre disponible."}</small></button>`).join("")}</div><div class="simple-steps"><span>\u2460 Sigue las luces</span><span>\u2461 Pulsa Proteger</span><span>\u2462 Recupera el sistema</span></div><div class="modal-footer">${Ur?'<button id="continue">Continuar misiones</button>':""}<button id="tutorial-direct">Empezar tutorial</button><button class="primary" id="new-run">\u25B6 Ver tr\xE1iler y jugar</button></div>`),Gs.querySelectorAll("[data-level]").forEach(e=>e.onclick=()=>{Wa=+e.dataset.level,qa()}),de("#continue")?.addEventListener("click",()=>{ge=Ur,ge.assisted=!0,Wa=ge.level,Kn(),yt.unlock(),ge.phase==="victory"?bc():Cu(),gn()});function n(e){let t=()=>e?Cp(Ep):Ep();Ur?(An("confirm",'<h2 id="dialog-title">\xBFEmpezamos otra aventura?</h2><p>Se sustituir\xE1 el progreso guardado. Puedes descargarlo desde Pausa.</p><div class="modal-footer"><button id="cancel">Volver</button><button class="primary" id="confirm-new">Empezar</button></div>'),de("#cancel").onclick=qa,de("#confirm-new").onclick=t):t()}de("#new-run").onclick=()=>n(!0),de("#tutorial-direct").onclick=()=>n(!1)}function Cp(n){Or(),yt.duck(!0),An("trailer",`<span class="eyebrow">ANTES DE EMPEZAR \xB7 GU\xCDA EN V\xCDDEO</span><h2 id="dialog-title">As\xED se juega a INMUNO</h2><video id="trailer-video" controls playsinline preload="metadata" aria-label="Tr\xE1iler explicativo narrado en espa\xF1ol"><source src="${globalThis.__INMUNO_OFFLINE__?"TRAILER-INMUNO.mp4":"media/TRAILER-INMUNO.mp4"}" type="video/mp4"></video><p class="video-note">Tambi\xE9n puedes volver a verlo desde Pausa.</p><div class="modal-footer"><button class="primary" id="trailer-done">Empezar la misi\xF3n \u2192</button></div>`);let e=de("#trailer-video");e.volume=.8,e.play().catch(()=>{});let t=()=>{e.pause(),yt.duck(!1),n()};e.onended=t,de("#trailer-done").onclick=t}function Cu(){Zn={following:!1,route:[]};let n=ui(ge),e=ge.completed.length+1;An("brief",`<span class="eyebrow">${n?"MISI\xD3N "+e+" DE 4":"MISI\xD3N FINAL"}</span><h2 id="dialog-title">${n?["Devuelve el aire","Pon el coraz\xF3n en marcha","Enciende las se\xF1ales","Refuerza las defensas"][e-1]:"Protege el n\xFAcleo"}</h2><div class="brief-body"><span class="mentor-avatar">\u271A</span><p><b>Soy Lumi, tu gu\xEDa.</b> ${n?n.fact:"Has recuperado los cuatro sistemas. \xA1Vamos a cerrar la anomal\xEDa del n\xFAcleo!"}</p></div><div class="mission-route">${Ut.map((t,i)=>`<span class="${ge.completed.includes(t.id)?"done":i===e-1?"current":""}">${["\u25C9","\u2665","\u2727","\u271A"][i]}<small>${t.short}</small></span>`).join("")}</div><div class="simple-steps"><span>\u2460 Sigue el camino de luces</span><span>\u2461 Mant\xE9n pulsado Proteger</span><span>\u2462 Responde y gana tu insignia</span></div><div class="modal-footer"><button id="hear-brief">\u25D6 Escuchar misi\xF3n</button><button class="primary" id="guide-start">\xA1Vamos! Gu\xEDame \u2192</button></div>`),de("#hear-brief").onclick=()=>yc(`${n?"Misi\xF3n "+e+". "+n.name:"Misi\xF3n final"}. Pulsa Gu\xEDame y sigue las luces. Despu\xE9s mant\xE9n pulsado Proteger. Yo elegir\xE9 la defensa adecuada.`),de("#guide-start").onclick=()=>{Kn(),Zn=wu(ge),gn(),fi("Sigue las luces doradas. Puedes moverte t\xFA con las flechas o dejar que te gu\xEDe.")}}function Ep(){ge=hc(Wa,!0),Tn=0,gs=.17,Xa=null,Zn={following:!1,route:[]},vc(),yt.unlock(),Cu(),gn()}function Br(){!Au||$a==="welcome"||(An("pause",`<span class="eyebrow">EXPEDICI\xD3N EN PAUSA</span><h2 id="dialog-title">Toma aire, agente.</h2><p>${ge.completed.length}/4 regiones recuperadas \xB7 ${ge.score} puntos \xB7 ${Gn[ge.level-1].grades}</p><div class="menu-grid"><button id="help">\u2726 C\xF3mo jugar / Ver tr\xE1iler</button><button id="codex">\u25A7 C\xF3dex de cartas</button><button id="sound">\u266B M\xFAsica y efectos</button><button id="export">\u2193 Descargar progreso</button><button id="import">\u2191 Cargar progreso</button><button id="home">\u2727 Cambiar nivel / Nueva expedici\xF3n</button></div><div class="modal-footer"><a href="${Ap()}">Modo de cartas por turnos</a><button class="primary" id="resume">Volver al juego \u2192</button></div>`),de("#resume").onclick=Kn,de("#help").onclick=Ly,de("#codex").onclick=Dy,de("#sound").onclick=Rp,de("#home").onclick=qa,de("#export").onclick=Uy,de("#import").onclick=()=>de("#action-import").click())}function Ly(){An("help",'<span class="eyebrow">SOLO DOS ACCIONES PARA JUGAR</span><h2 id="dialog-title">Sigue. Protege. Aprende.</h2><div class="guide-grid"><article><b>\u2460 Llega a tu misi\xF3n</b><p>Pulsa Gu\xEDame para que tu agente siga el camino de luces. Tambi\xE9n puedes usar las flechas, WASD o el joystick. La c\xE1mara te acompa\xF1a y la misi\xF3n comienza al llegar.</p></article><article><b>\u2461 Mant\xE9n pulsado Proteger</b><p>Tu agente apunta y elige la defensa correcta. Puedes moverte mientras lo haces. Lumi recarga tu energ\xEDa si lo necesitas. No tienes que cambiar herramientas.</p></article><article><b>\u2462 Recupera el sistema</b><p>Contesta una pregunta corta. Si te equivocas, recibir\xE1s una pista. Despu\xE9s elige Siguiente misi\xF3n. Las cuatro insignias abren el n\xFAcleo final.</p></article></div><div class="modal-footer"><button id="watch-help">\u25B6 Ver tr\xE1iler</button><button class="primary" id="back-game">Entendido \xB7 Volver</button></div>'),de("#back-game").onclick=Kn,de("#watch-help").onclick=()=>Cp(()=>{Kn(),gn()})}function Dy(){An("codex",`<span class="eyebrow">ILUSTRACIONES ORIGINALES DE INMUNO</span><h2 id="dialog-title">Tu equipo de defensa</h2><div class="codex-grid">${["anticuerpo","antibiotico","integral","vacuna","respiratorio","circulatorio","nervioso","inmunologico"].map(e=>`<article><img src="${wp(gt[e].art)}" alt="${ms(gt[e].name)}"><b>${ms(gt[e].name)}</b><p>${ms(gt[e].text)}</p></article>`).join("")}</div><div class="modal-footer"><button class="primary" id="back-game">Volver al juego</button></div>`),de("#back-game").onclick=Kn}function Rp(){An("sound",`<span class="eyebrow">SONIDO</span><h2 id="dialog-title">La banda sonora de tu aventura</h2><div class="sound-row"><label for="music">M\xFAsica instrumental</label><input type="checkbox" id="music" ${yt.settings.music?"checked":""}></div><div class="sound-row"><label for="effects">Efectos sonoros</label><input type="checkbox" id="effects" ${yt.settings.effects?"checked":""}></div><div class="sound-row"><label for="volume">Volumen</label><input type="range" id="volume" min="0" max="100" value="${yt.settings.volume}"><output id="volume-number">${yt.settings.volume}%</output></div><div class="modal-footer"><button id="stop-voice">Detener voz</button><button class="primary" id="back-game">Volver al juego</button></div>`),de("#music").onchange=n=>{yt.unlock(),yt.set({music:n.target.checked})},de("#effects").onchange=n=>{yt.unlock(),yt.set({effects:n.target.checked})},de("#volume").oninput=n=>{yt.unlock(),yt.set({volume:Number(n.target.value)}),de("#volume-number").value=n.target.value+"%",Number(n.target.value)||Or()},de("#stop-voice").onclick=Or,de("#back-game").onclick=()=>{Kn(),ge.phase==="quiz"?Pp():ge.phase==="victory"&&bc()}}function Pp(){let n=Ut.find(e=>e.id===ge.active);Zn.following=!1,An("quiz",`<img class="quiz-art" src="${wp(gt[n.id].art)}" alt="${ms(gt[n.id].name)}"><span class="eyebrow">\xA1ZONA DESPEJADA! \xB7 \xDALTIMO PASO</span><h2 id="dialog-title">${ms(n.question)}</h2><button id="read-question">\u25D6 Escuchar</button><div class="answers">${ge.quizOrder.map(e=>`<button data-answer="${e}">${ms(n.answers[e])}</button>`).join("")}</div><div class="feedback" role="status">${ms(n.fact)}</div>`),de("#read-question").onclick=()=>yc(n.question+". "+ge.quizOrder.map(e=>n.answers[e]).join(". ")),Gs.querySelectorAll("[data-answer]").forEach(e=>e.onclick=()=>{if(!pp(ge,+e.dataset.answer)){yt.play("hurt"),de(".feedback").textContent=n.fact+" \xA1Prueba otra vez!";return}vc(),yt.play("success"),gn(),An("badge",`<div class="center"><span class="badge-icon">${["\u25C9","\u2665","\u2727","\u271A"][ge.completed.length-1]}</span><span class="eyebrow">MISI\xD3N COMPLETADA \xB7 ${ge.completed.length}/4</span><h2 id="dialog-title">\xA1${n.short} recuperado!</h2><p>${ms(n.fact)}</p></div><div class="modal-footer"><button id="review-zone">Explorar esta zona</button><button class="primary" id="next-mission">${ui(ge)?"Siguiente misi\xF3n \u2192":"Ir al n\xFAcleo \u2192"}</button></div>`),de("#review-zone").onclick=()=>{Kn(),gn()},de("#next-mission").onclick=Cu})}function Ny(){An("respawn",'<span class="eyebrow">VUELVE A INTENTARLO</span><h2 id="dialog-title">Tu agente necesita recargarse.</h2><p>Las regiones que recuperaste siguen a salvo. Activa un escudo con Q, construye una barrera con F y recoge cristales dorados para recuperar salud.</p><div class="modal-footer"><button class="primary" id="retry">Reintentar esta regi\xF3n \u2192</button></div>'),de("#retry").onclick=()=>{mp(ge),Kn(),gn()}}function bc(){vc(),An("victory",`<div class="center"><span class="eyebrow">EXPEDICI\xD3N COMPLETADA</span><h1 id="dialog-title">\xA1EQUILIBRIO<br><em>RECUPERADO!</em></h1><p>Cuatro sistemas restaurados y el n\xFAcleo protegido.</p><div class="victory-number">${ge.score.toLocaleString("es")} XP</div><p>${ge.kills} microbios neutralizados \xB7 Nivel ${Gn[ge.level-1].name}</p></div><div class="modal-footer"><button id="explore">Seguir explorando</button><button class="primary" id="again">Nueva expedici\xF3n \u2192</button></div>`),de("#again").onclick=qa,de("#explore").onclick=()=>{ge.phase="explore",ge.active=null,ge.player.x=0,ge.player.z=15,Kn(),gn()}}function Uy(){let n=document.createElement("a"),e=new Blob([JSON.stringify(dc(ge),null,2)],{type:"application/json"});n.href=URL.createObjectURL(e),n.download="INMUNO-ACCION-PROGRESO.json",n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),1e3)}function Oy(){let n=ui(ge),e=ge.phase==="combat",t=Zn.following,i=["Devuelve el aire","Pon el coraz\xF3n en marcha","Enciende las se\xF1ales","Refuerza las defensas"];de("#quest").innerHTML=`<span class="eyebrow">${n?"MISI\xD3N "+(ge.completed.length+1)+" DE 4":"MISI\xD3N FINAL"}</span><h1>${n?i[ge.completed.length]:"Protege el n\xFAcleo"}</h1><p>${e?"Mant\xE9n pulsado PROTEGER. Lumi elige la defensa y te ayuda a apuntar.":t?"Sigue las luces. Tu agente ya va hacia la misi\xF3n.":"Pulsa GU\xCDAME o mu\xE9vete con las flechas hasta las luces."}</p><div class="progress">${Ut.map(s=>`<i class="${ge.completed.includes(s.id)?"done":""}"></i>`).join("")}</div><div class="meta">${e?ge.enemies.length+" microbios por neutralizar":"\u25C6 "+Math.round(Qt(ge.player,n||{x:0,z:2}))+" m \xB7 "+(n?.short||"N\xFAcleo")}</div><button id="read-mission">\u25D6 Escuchar</button>`,de("#read-mission").onclick=()=>yc(de("#quest").textContent),de("#guide-toggle").hidden=e,de("#guide-toggle").textContent=t?"\u2161 Detener gu\xEDa":"\u2726 Gu\xEDame",de("#protect-button").hidden=!e,de("#protect-button").textContent="\u25C8 Mant\xE9n PROTEGER",de("#guide-caption").textContent=e?"Puedes moverte mientras proteges.":t?"Si quieres moverte t\xFA, usa las flechas o el joystick.":"La c\xE1mara y las herramientas se manejan solas."}function gn(){document.body.classList.add("guided");let n=ge.player,e=ui(ge),t=ge.phase==="combat",i=Ut.find(a=>Qt(n,a)<15),s=Ga(ge);de("#level-tag").textContent=Gn[ge.level-1].name.toUpperCase()+" \xB7 "+Gn[ge.level-1].grades,de("#heading").textContent=`${["N","NO","O","SO","S","SE","E","NE"][Math.round((Tn%(Math.PI*2)+Math.PI*2)%(Math.PI*2)/(Math.PI/4))%8]} \xB7 ${Math.round((Tn*180/Math.PI+360)%360)}\xB0`,de("#quest").innerHTML=`<span class="eyebrow">${t?"OLEADA ACTIVA":"MISI\xD3N PRINCIPAL"} \xB7 ${ge.completed.length}/4 SISTEMAS</span><h1>${t?ge.active==="core"?"Protege el n\xFAcleo":`Defiende ${Ut.find(a=>a.id===ge.active).short}`:e?e.name:"El n\xFAcleo te espera"}</h1><p>${t?`${ge.enemies.length} microbios. ${ge.active==="core"?"Esquiva sus proyectiles y usa tus defensas.":`Usa ${ps[Ut.find(a=>a.id===ge.active).tool].name}. Q: escudo. F: barrera.`}`:e?"Sigue el marcador. Ac\xE9rcate a la estaci\xF3n y pulsa E para activarla.":"Vuelve al portal dorado del centro. Pulsa E para entrar."}</p><div class="progress">${Ut.map(a=>`<i class="${ge.completed.includes(a.id)?"done":""}"></i>`).join("")}</div><div class="meta">${t?"Neutraliza la oleada \xB7 Recoge cristales":"\u25C6 "+Math.round(Qt(n,e||{x:0,z:2}))+" m hasta tu objetivo"}</div><button id="read-mission">\u25D6 Escuchar misi\xF3n</button>`,de("#read-mission").onclick=()=>yc(de("#quest").textContent),de("#location").textContent=i?.short.toUpperCase()||"ZONA CENTRAL",de("#restored-count").textContent=`${ge.completed.length} / 4`,de("#radar").innerHTML=`${Ut.map(a=>`<button class="map-zone ${ge.completed.includes(a.id)?"done":""}" style="left:${50+a.x/140*100}%;top:${50+a.z/140*100}%;--color:${a.color};min-height:0;padding:0" data-zone="${a.id}" aria-label="Marcar ${a.short}" title="${a.short}"></button>`).join("")}${ge.enemies.map(a=>`<i class="map-enemy" data-kind="${a.kind}" data-x="${a.x}" data-z="${a.z}" style="left:${50+a.x/140*100}%;top:${50+a.z/140*100}%"></i>`).join("")}<span class="map-goal">\u2726</span><i class="map-player" data-x="${n.x}" data-z="${n.z}" style="left:${50+n.x/140*100}%;top:${50+n.z/140*100}%;transform:translate(-50%,-50%) rotate(${-Tn}rad)"></i>`,de("#radar").querySelectorAll("button").forEach(a=>a.onclick=()=>{Xa=a.dataset.zone,fi("Marcador: "+Ut.find(o=>o.id===Xa).name)}),de("#health-fill").style.width=n.health+"%",de("#health-number").textContent=Math.ceil(n.health),de("#shield-status").textContent=n.shield>0?"\u25C8 Escudo activo":n.shieldCooldown>0?`Q \xB7 Escudo en ${Math.ceil(n.shieldCooldown)} s`:"Q \xB7 Escudo listo",de("#score").textContent=ge.score.toLocaleString("es"),de("#kills").textContent=`${ge.kills} microbios neutralizados`,de("#loadout").children.length||(de("#loadout").innerHTML=Object.entries(ps).map(([a,o])=>`<button class="tool-slot" style="--tool-color:${o.color}" data-tool="${a}" aria-label="${a}: ${o.name}"><small>${a}</small><span class="tool-icon">${a==="1"?"Y":a==="2"?"\u25D2":"\u25C8"}</span><b>${o.name}</b></button>`).join(""),de("#loadout").querySelectorAll("button").forEach(a=>a.onclick=()=>{ge.player.tool=Number(a.dataset.tool),gn()})),de("#loadout").querySelectorAll("button").forEach(a=>a.classList.toggle("active",Number(a.dataset.tool)===n.tool)),de("#interaction").hidden=!s||ge.phase!=="explore",de("#interact-button").innerHTML=s?`<kbd>E</kbd>${s.label}`:"";let r=ge.enemies.find(a=>a.kind==="boss");de("#boss-bar").hidden=!r,r&&(de("#boss-bar").innerHTML=`ANOMAL\xCDA DEL N\xDACLEO<div><i style="width:${r.hp/r.maxHP*100}%"></i></div>`),de("#touch-shield").style.opacity=n.shieldCooldown>0?".4":"1",de("#touch-build").style.opacity=n.buildCooldown>0?".4":"1",Oy()}function Ip(){for(let n of ge.events)n.type==="shoot"&&yt.play("shoot"),n.type==="hit"&&(de("#reticle").classList.add("hit"),setTimeout(()=>de("#reticle").classList.remove("hit"),100)),n.type==="kill"&&(di.burst(n.x,n.z),yt.play("pop")),n.type==="hurt"&&(ge.assisted||di.hurt(),document.body.classList.add("hurt"),setTimeout(()=>document.body.classList.remove("hurt"),220),yt.play("hurt")),n.type==="pickup"&&yt.play("success"),(n.type==="shield"||n.type==="build")&&yt.play("heal"),n.type==="assistance"&&fi("Lumi te ayuda: \xA1energ\xEDa recargada! Sigue protegiendo."),n.type==="wave"&&(fi("\xA1Has llegado! Mant\xE9n pulsado el bot\xF3n PROTEGER. Yo te ayudo a apuntar."),yt.play("enemy")),n.type==="boss"&&(Tn=0,fi("\xA1La anomal\xEDa del n\xFAcleo se ha despertado!"),yt.play("enemy")),n.type==="wrongTool"&&ge.time-Sp>2&&(Sp=ge.time,fi(n.kind==="viral"?"Virus morado: usa Anticuerpo (1) o Integral (3).":n.kind==="bacteriana"?"Bacteria verde: usa Antibi\xF3tico (2) o Integral (3).":"Usa Defensa integral (3) contra esta amenaza.")),n.type==="quiz"&&Pp(),n.type==="respawn"&&Ny(),n.type==="victory"&&(yt.play("victory"),bc());ge.events=[]}function Lp(n){if(requestAnimationFrame(Lp),document.hidden){mc=n;return}let e=Math.min(.15,(n-(mc||n))/1e3);if(mc=n,!Xt){for(let t=e;t>0;t-=.025){let i=(wn.has("KeyW")||wn.has("ArrowUp")?1:0)-(wn.has("KeyS")||wn.has("ArrowDown")?1:0)+xc,s=(wn.has("KeyD")||wn.has("ArrowRight")?1:0)-(wn.has("KeyA")||wn.has("ArrowLeft")?1:0)+_c;(i||s)&&(Zn.following=!1);let r=_p(ge,Zn,{yaw:Tn,forward:i,right:s,sprint:wn.has("ShiftLeft"),jump:gc||wn.has("Space"),fire:Jn||wn.has("KeyP")},Math.min(.025,t));if(r!==null&&!i&&!s){let a=r-Tn;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;Tn+=a*Math.min(1,e*3)}}Ip(),n-bp>140&&(gn(),bp=n)}if(!di.soft||n-(di.lastRender||0)>45){di.setGuide?.(ge,Zn),di.render(ge,Tn,gs,e||.016),di.lastRender=n;let t=Ut.find(s=>s.id===Xa)||ui(ge)||{x:0,z:2,name:"Portal central"},i=di.project(t.x,t.z);de("#waypoint").hidden=Xt||ge.phase==="combat",de("#waypoint").style.left=`${Math.max(12,Math.min(88,(i.x*.5+.5)*100))}%`,de("#waypoint").style.top=`${i.z>1?35:Math.max(26,Math.min(65,(-i.y*.5+.5)*100))}%`,de("#waypoint").innerHTML=`<b>${t.short||"Portal central"} \xB7 ${Math.round(Qt(ge.player,t))} m${i.z>1?" \u21B6":""}</b>`}Au=!0}function Dp(){Xt||(Zn.following=!1,uc(ge)&&(Xa=null,Ip(),gn()))}function Np(n){let e=Fr.getBoundingClientRect(),t=n.clientX-e.left-e.width/2,i=n.clientY-e.top-e.height/2,s=Math.max(30,Math.hypot(t,i));_c=t/s,xc=-i/s,de("#stick").style.transform=`translate(${t/s*28}px,${i/s*28}px)`}var de,wp,ms,Tp,yt,Gs,di,Ur,ge,Xt,$a,Tn,gs,Wa,wn,Jn,gc,_c,xc,mc,bp,Mp,Sp,Xa,Nr,Tu,Au,Zn,Iy,Fr,Vs,Up=kn(()=>{pc();xp();yp();du();zr();de=n=>document.querySelector(n),wp=n=>globalThis.__INMUNO_ASSETS__?.[n]||n,ms=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Tp="inmuno-guided-v3",yt=rc(),Gs=de("#action-dialog"),di=vp(de("#action-world")),Ur=null;try{Ur=fc(JSON.parse(localStorage.getItem(Tp)))}catch{}ge=Ur||hc(1,!0),Xt=!0,$a="",Tn=0,gs=.14,Wa=ge.level,wn=new Set,Jn=!1,gc=!1,_c=0,xc=0,mc=0,bp=0,Sp=0,Xa=null,Nr=null,Tu=null,Au=!1,Zn={following:!1,route:[]},Iy=matchMedia("(pointer:coarse)").matches;document.body.classList.toggle("touch",Iy);di?(gn(),qa(),requestAnimationFrame(Lp)):An("unsupported",'<h2 id="dialog-title">Necesitas un navegador con WebGL 2</h2><p>Abre el archivo con Chrome, Edge o Firefox y activa la aceleraci\xF3n gr\xE1fica para jugar al modo de acci\xF3n 3D.</p><div class="modal-footer"><a href="'+Ap()+'">Abrir el modo de cartas</a></div>');Gs.addEventListener("cancel",n=>{n.preventDefault(),!["welcome","quiz","respawn","victory","unsupported","trailer","brief","badge"].includes($a)&&Kn()});de("#action-import").onchange=async n=>{let e=n.target.files[0];if(n.target.value="",!!e)try{if(e.size>1e4)throw Error("Archivo demasiado grande.");let t=fc(JSON.parse(await e.text()));if(!t)throw Error("No es un progreso v\xE1lido de INMUNO Acci\xF3n.");An("confirm",`<h2 id="dialog-title">\xBFCargar esta expedici\xF3n?</h2><p>Sustituir\xE1 el progreso actual. Nivel ${Gn[t.level-1].grades}; ${t.completed.length}/4 regiones recuperadas.</p><div class="modal-footer"><button id="cancel-import">Cancelar</button><button class="primary" id="confirm-import">Cargar progreso</button></div>`),de("#cancel-import").onclick=Br,de("#confirm-import").onclick=()=>{ge=t,Wa=ge.level,vc(),Kn(),gn(),ge.phase==="victory"&&bc()}}catch(t){fi(t.message)}};de("#interact-button").onclick=Dp;de("#pause-button").onclick=Br;de("#brand").onclick=n=>{n.preventDefault(),Br()};de("#sound-button").onclick=()=>{$a!=="welcome"&&Rp()};de("#fullscreen").onclick=()=>{document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch(()=>fi("Tu navegador no permite pantalla completa aqu\xED."))};de("#guide-toggle").onclick=()=>{Xt||(Zn.following?Zn.following=!1:Zn=wu(ge),gn())};de("#protect-button").addEventListener("pointerdown",n=>{Xt||(Jn=!0,yt.unlock(),n.target.setPointerCapture(n.pointerId))});de("#protect-button").addEventListener("pointerup",()=>Jn=!1);de("#protect-button").addEventListener("pointercancel",()=>Jn=!1);de("#protect-button").addEventListener("keydown",n=>{["Space","Enter"].includes(n.code)&&!Xt&&(n.preventDefault(),n.stopPropagation(),Jn=!0)});de("#protect-button").addEventListener("keyup",n=>{["Space","Enter"].includes(n.code)&&(n.preventDefault(),n.stopPropagation(),Jn=!1)});document.addEventListener("keydown",n=>{if(n.code==="Escape"){Gs.open||Br();return}Xt||/INPUT|SELECT|TEXTAREA/.test(n.target.tagName)||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)&&n.preventDefault(),wn.add(n.code),!n.repeat&&(n.code==="KeyE"&&Dp(),n.code==="KeyQ"&&Ha(ge),n.code==="KeyF"&&(bu(ge,Tn)||fi("La barrera est\xE1 recargando.")),["Digit1","Digit2","Digit3"].includes(n.code)&&(ge.player.tool=Number(n.code.slice(-1)),gn())))});document.addEventListener("keyup",n=>wn.delete(n.code));window.addEventListener("blur",()=>{Ya(),!Xt&&Au&&Br()});document.addEventListener("visibilitychange",()=>{document.hidden&&(Ya(),Or(),Xt||Br())});if(di){let n=di.canvas;n.addEventListener("contextmenu",e=>e.preventDefault()),n.addEventListener("pointerdown",e=>{Xt||(yt.unlock(),e.button===0&&!ge.assisted&&(Jn=!0),e.button===2&&(Nr=[e.clientX,e.clientY],n.setPointerCapture(e.pointerId)))}),window.addEventListener("pointerup",e=>{e.pointerType==="mouse"&&(Jn=!1,Nr=null)}),document.addEventListener("mousemove",e=>{Xt||(document.pointerLockElement===n?(Tn-=e.movementX*.003,gs=Math.max(-.25,Math.min(.8,gs+e.movementY*.002))):Nr&&(Tn-=(e.clientX-Nr[0])*.006,gs=Math.max(-.25,Math.min(.8,gs+(e.clientY-Nr[1])*.003)),Nr=[e.clientX,e.clientY]))})}Fr=de("#joystick");Fr.addEventListener("pointerdown",n=>{Xt||(Tu=n.pointerId,Fr.setPointerCapture(n.pointerId),Np(n))});Fr.addEventListener("pointermove",n=>{n.pointerId===Tu&&Np(n)});Fr.addEventListener("pointerup",()=>{Tu=null,_c=xc=0,de("#stick").style.transform=""});Fr.addEventListener("pointercancel",Ya);Vs=null;de("#touch-look").addEventListener("pointerdown",n=>{Xt||(Vs=[n.clientX,n.clientY],n.target.setPointerCapture(n.pointerId))});de("#touch-look").addEventListener("pointermove",n=>{Vs&&(Tn-=(n.clientX-Vs[0])*.008,gs=Math.max(-.25,Math.min(.8,gs+(n.clientY-Vs[1])*.004)),Vs=[n.clientX,n.clientY])});de("#touch-look").addEventListener("pointerup",()=>Vs=null);de("#touch-look").addEventListener("pointercancel",()=>Vs=null);de("#touch-fire").addEventListener("pointerdown",n=>{Xt||(Jn=!0,yt.unlock(),n.target.setPointerCapture(n.pointerId))});de("#touch-fire").addEventListener("pointerup",()=>Jn=!1);de("#touch-fire").addEventListener("pointercancel",()=>Jn=!1);de("#touch-jump").addEventListener("pointerdown",()=>{Xt||(gc=!0)});de("#touch-jump").addEventListener("pointerup",()=>gc=!1);de("#touch-shield").onclick=()=>{Xt||Ha(ge)};de("#touch-build").onclick=()=>{Xt||bu(ge,Tn)}});document.body.dataset.mode==="cards"?Promise.resolve().then(()=>(up(),Cy)):Promise.resolve().then(()=>(Up(),Fy));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

(()=>{var In=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};function ds(n){if(n===1)return[{...yi[1],title:"Cuida los pulmones",task:"El microbio es morado. Elige el anticuerpo y ayuda a los pulmones.",question:"\xBFQu\xE9 nos ayuda a respirar?",choices:["Los pulmones","El pelo"],explanation:yi[0].explanation},{...yi[4],title:"Cuida el coraz\xF3n",task:"La bacteria es verde. Elige el antibi\xF3tico y cuida esta isla.",question:"\xBFQu\xE9 mueve el coraz\xF3n?",choices:["La sangre","Las nubes"],explanation:yi[3].explanation},{...yi[6],illness:"viral",title:"Cuida el cerebro",task:"Elige Respuesta inmunitaria para ayudar al cerebro.",question:"\xBFQu\xE9 nos ayuda a pensar?",choices:["El cerebro","El zapato"],explanation:yi[5].explanation},{...yi[8],title:"Cuida las defensas",task:"Elige el escudo multicolor de Defensa integral.",question:"\xBFLas defensas ayudan a protegernos?",choices:["S\xED","No"],explanation:yi[7].explanation}];let e=yi.map(t=>({...t,choices:[...t.choices]}));return n===3&&(e[1].question="\xBFPor qu\xE9 el virus coloca 2 niveles al llegar al Respiratorio?",e[1].choices=["Por la afinidad de esa carta en el juego","Porque todos los sistemas reciben siempre 2","Porque un antibi\xF3tico lo refuerza"],e[1].explanation="La afinidad viral con el Respiratorio a\xF1ade un nivel extra en INMUNO.",e[8].question="\xBFCu\xE1ndo crece la infecci\xF3n f\xFAngica en el Inmunol\xF3gico?",e[8].choices=["Tras una ronda, si no se ha eliminado","En cualquier sistema por igual","Solo despu\xE9s de una vacuna"],e[8].explanation="En el juego, su afinidad con el Inmunol\xF3gico a\xF1ade un nivel una vez, al pasar una ronda."),e}var Pn,Wr,Hp,dt,Uh,Ln,yi,Xr=In(()=>{Pn=[{id:"respiratorio",name:"Respiratorio",short:"Respirar",color:"#b191ec",icon:"\u25C9",position:[-8,-5.5],fact:"Los pulmones nos ayudan a tomar ox\xEDgeno del aire.",gradeFact:"En los pulmones, el ox\xEDgeno pasa a la sangre y sale el di\xF3xido de carbono."},{id:"circulatorio",name:"Circulatorio",short:"Transportar",color:"#f17d95",icon:"\u2665",position:[8,-5.5],fact:"El coraz\xF3n impulsa la sangre por todo el cuerpo.",gradeFact:"La sangre transporta ox\xEDgeno, nutrientes y c\xE9lulas de defensa."},{id:"nervioso",name:"Nervioso",short:"Coordinar",color:"#78aaf1",icon:"\u2727",position:[-8,6.5],fact:"El cerebro recibe informaci\xF3n y coordina lo que hacemos.",gradeFact:"El cerebro, la m\xE9dula y los nervios intercambian se\xF1ales para coordinar el cuerpo."},{id:"inmunologico",name:"Inmunol\xF3gico",short:"Proteger",color:"#5fcdbd",icon:"\u271A",position:[8,6.5],fact:"Las defensas ayudan a reconocer y combatir amenazas.",gradeFact:"Las c\xE9lulas del sistema inmunol\xF3gico reconocen amenazas y algunas guardan memoria."},{id:"adaptativo",name:"Adaptativo",short:"Conectar",color:"#edbe60",icon:"\u221E",position:[0,0],fact:"Esta estaci\xF3n es el comod\xEDn del juego. Conecta todas las rutas.",gradeFact:"En INMUNO, el sistema adaptativo es un comod\xEDn y no recibe bonificaciones de afinidad."}],Wr=[{id:1,name:"Exploradores",grades:"1.\xBA\u20132.\xBA",description:"Cuatro misiones cortas, dos respuestas y muchas pistas."},{id:2,name:"Defensores",grades:"3.\xBA\u20134.\xBA",description:"Construye, cura, vacuna y descubre la memoria inmunol\xF3gica."},{id:3,name:"Estrategas",grades:"5.\xBA\u20136.\xBA",description:"Afinidades, niveles, inmunizaci\xF3n y todas las cartas del duelo."}],Hp=[["respiratorio","Sistema respiratorio","system",10,"Construye la estaci\xF3n de los pulmones."],["circulatorio","Sistema circulatorio","system",10,"Construye la estaci\xF3n del coraz\xF3n."],["nervioso","Sistema nervioso","system",10,"Construye la estaci\xF3n del cerebro."],["inmunologico","Sistema inmunol\xF3gico","system",10,"Construye la estaci\xF3n de las defensas."],["adaptativo","Sistema adaptativo","system",4,"Comod\xEDn: cuenta como un sistema distinto."],["viral","Infecci\xF3n viral","infection",12,"A\xF1ade 1 nivel; en Respiratorio, a\xF1ade 2."],["bacteriana","Infecci\xF3n bacteriana","infection",10,"A\xF1ade 1 nivel; en Circulatorio, a\xF1ade 2."],["fungica","Infecci\xF3n f\xFAngica","infection",8,"A\xF1ade 1 nivel. En Inmunol\xF3gico, crece tras una ronda."],["severa","Infecci\xF3n severa","infection",4,"A\xF1ade 2 niveles de infecci\xF3n."],["mutacion","Mutaci\xF3n cr\xEDtica","infection",2,"Solo sobre 1 nivel y sin defensas: a\xF1ade 2 y colapsa."],["anticuerpo","Anticuerpo","defense",8,"Retira 1 nivel viral. Al eliminar el \xFAltimo, deja memoria."],["antibiotico","Antibi\xF3tico","defense",8,"Retira 1 nivel bacteriano. No elimina virus."],["vacuna","Vacuna","defense",6,"Bloquea virus y eleva a 4 niveles el umbral de colapso."],["respuesta","Respuesta inmunitaria","defense",4,"Retira 1 nivel de cualquier infecci\xF3n."],["integral","Defensa integral","defense",4,"Retira 1 nivel de cualquier tipo o coloca un escudo."],["reasignacion","Reasignaci\xF3n sist\xE9mica","treatment",3,"Intercambia dos sistemas completos, sin duplicarlos."],["interferencia","Interferencia estrat\xE9gica","treatment",3,"Obt\xE9n un sistema rival que todav\xEDa no tengas."],["reinicio","Reinicio inmunol\xF3gico","treatment",2,"Limpia tus infecciones; ahora no robas y tu siguiente turno es solo de robo."],["aislamiento","Aislamiento","treatment",2,"El rival no puede jugar en su siguiente turno."],["sabotaje","Sabotaje m\xE9dico","treatment",2,"Retira una vacuna o una ficha de memoria."],["intervencion","Intervenci\xF3n forzada","treatment",2,"El rival descarta dos cartas al azar y las repone."],["pandemia","Pandemia global Z7","event",2,"A\xF1ade 1 nivel a los sistemas. Su portador no puede ganar."],["colapso","Colapso inmunitario","event",2,"Todos cambian su mano y vuelves a jugar."]],dt=Object.fromEntries(Hp.map(([n,e,t,i,s])=>[n,{id:n,name:e,kind:t,count:i,text:s,art:`assets/cartas/${n}.png`}])),Uh={system:"Sistema",infection:"Infecci\xF3n",defense:"Defensa",treatment:"Tratamiento",event:"Evento global"},Ln=n=>Pn.find(e=>e.id===n),yi=[{site:"respiratorio",action:"build",card:"respiratorio",title:"\xA1A respirar!",task:"Elige el sistema respiratorio y constr\xFAyelo en la isla de los pulmones.",question:"\xBFQu\xE9 nos ayuda a respirar?",choices:["Los pulmones","Los huesos","El cabello"],correct:0,explanation:"Los pulmones toman ox\xEDgeno del aire y expulsan di\xF3xido de carbono."},{site:"respiratorio",action:"cure",card:"anticuerpo",illness:"viral",title:"Visitantes morados",task:"Usa anticuerpos para retirar todos los niveles virales del Respiratorio.",question:"\xBFQu\xE9 deja el anticuerpo cuando elimina la \xFAltima infecci\xF3n viral?",choices:["Memoria inmunol\xF3gica","Una infecci\xF3n nueva","Un antibi\xF3tico"],correct:0,explanation:"En INMUNO, eliminar la \xFAltima infecci\xF3n viral con un anticuerpo deja una ficha de memoria."},{site:"respiratorio",action:"vaccinate",card:"vacuna",title:"La defensa recuerda",task:"A\xF1ade una vacuna al sistema con memoria y activa la inmunizaci\xF3n.",question:"En el juego, \xBFqu\xE9 dos elementos forman la inmunizaci\xF3n completa?",choices:["Vacuna y memoria","Dos infecciones","Dos sistemas iguales"],correct:0,explanation:"Una vacuna y una ficha de memoria pueden convertirse en inmunizaci\xF3n completa. Es una regla del juego."},{site:"circulatorio",action:"build",card:"circulatorio",title:"El gran transporte",task:"Construye el sistema circulatorio en la isla del coraz\xF3n.",question:"\xBFQu\xE9 hace el coraz\xF3n?",choices:["Impulsa la sangre","Produce pensamientos","Guarda el aire"],correct:0,explanation:"El coraz\xF3n impulsa la sangre, que transporta ox\xEDgeno, nutrientes y c\xE9lulas de defensa."},{site:"circulatorio",action:"cure",card:"antibiotico",illness:"bacteriana",title:"Bacterias a la vista",task:"Elige antibi\xF3ticos para retirar los niveles bacterianos del Circulatorio.",question:"\xBFContra qu\xE9 act\xFAan los antibi\xF3ticos?",choices:["Bacterias","Virus","Todos los microbios por igual"],correct:0,explanation:"Los antibi\xF3ticos act\xFAan contra bacterias; no eliminan virus."},{site:"nervioso",action:"build",card:"nervioso",title:"Mensajes a toda velocidad",task:"Construye la estaci\xF3n del sistema nervioso.",question:"\xBFQu\xE9 coordina el sistema nervioso?",choices:["Movimientos y respuestas","Solo el color de los ojos","El tama\xF1o de las cartas"],correct:0,explanation:"El sistema nervioso recibe informaci\xF3n y coordina movimientos y respuestas."},{site:"nervioso",action:"cure",card:"respuesta",illness:"severa",title:"Una respuesta en equipo",task:"Retira la infecci\xF3n con Respuesta inmunitaria o Defensa integral.",question:"Una infecci\xF3n severa tiene 2 niveles. \xBFCu\xE1ntas defensas que retiran 1 nivel necesitas?",choices:["Dos","Una","Ninguna"],correct:0,explanation:"Cada defensa retira un nivel. Para retirar dos niveles hacen falta dos acciones."},{site:"inmunologico",action:"build",card:"inmunologico",title:"La ciudad de los guardianes",task:"Construye el sistema inmunol\xF3gico en la isla del escudo.",question:"\xBFQu\xE9 funci\xF3n tienen las defensas?",choices:["Reconocer y combatir amenazas","Hacer que todos los microbios sean malos","Evitar que aprendamos"],correct:0,explanation:"Las defensas reconocen y combaten amenazas. Muchos microorganismos son inofensivos o beneficiosos."},{site:"inmunologico",action:"cure",card:"integral",illness:"fungica",title:"El \xFAltimo equilibrio",task:"Retira los niveles f\xFAngicos con Defensa integral o Respuesta inmunitaria.",question:"En INMUNO, \xBFqu\xE9 significa un sistema estable?",choices:["No tiene infecci\xF3n","Tiene m\xE1s microbios","Ha colapsado"],correct:0,explanation:"Un sistema estable est\xE1 libre de infecci\xF3n y puede estar protegido, vacunado, con memoria o inmunizado."}]});function eo(n){return{type:n,illnesses:[],shield:null,vaccine:!1,memory:!1,immune:!1}}function fn(n,e){n.log.unshift(e),n.log=n.log.slice(0,80)}function to(n){return n.seed=Math.imul(1664525,n.seed)+1013904223>>>0,n.seed/4294967296}function Bh(n,e){for(let t=e.length-1;t>0;t--){let i=Math.floor(to(n)*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}function Xp(n=3){return Object.values(dt).filter(e=>n===3||(n===2?!["treatment","event"].includes(e.kind)&&e.id!=="mutacion":e.kind==="system"||["viral","bacteriana","anticuerpo","antibiotico","respuesta","integral"].includes(e.id))).flatMap(e=>Array(e.count).fill(e.id))}function zh({names:n=["T\xFA","Microbot"],bots:e=[!1,!0],level:t=2,seed:i=Date.now()>>>0}={}){hn(n.length>=2&&n.length<=6,"Elige entre dos y seis participantes.");let s={version:bc,mode:"duel",level:t,seed:i,players:n.map((r,a)=>({name:String(r).trim().slice(0,24)||`Equipo ${a+1}`,bot:!!e[a],systems:[],hand:[],blocked:0,resetNext:!1})),deck:[],discard:[],pandemics:[],current:0,cycle:0,turn:1,winner:null,log:[],last:null};s.deck=Bh(s,Xp(t)),s.current=Math.floor(to(s)*n.length);for(let r of s.players)zs(s,r);return fn(s,`\xA1Comienza INMUNO! Juega ${s.players[s.current].name}.`),s}function zs(n,e){for(;e.hand.length<3&&(!n.deck.length&&n.discard.length&&(n.deck=n.discard.splice(0).reverse()),!!n.deck.length);)e.hand.push(n.deck.pop())}function Mc(n,e){e.card&&n.discard.push(e.card)}function qp(n,e,t){n.discard.push(t.type),t.illnesses.forEach(i=>Mc(n,i)),t.shield&&n.discard.push(t.shield),t.vaccine&&n.discard.push("vacuna"),e.systems.splice(e.systems.indexOf(t),1),fn(n,`El sistema ${t.type} de ${e.name} ha colapsado.`)}function Sc(n,e,t){dn(t)>=(t.vaccine?4:3)&&qp(n,e,t)}function Fh(n,e,t,i,s=i){if(t.immune){s&&n.discard.push(s);return}if(i==="viral"&&t.vaccine){s&&n.discard.push(s),fn(n,"La vacuna bloquea la infecci\xF3n viral.");return}if(i==="viral"&&t.memory){t.memory=!1,s&&n.discard.push(s),fn(n,"La memoria reconoce el virus y lo bloquea.");return}let r=i==="severa"||i==="mutacion"?2:1;(i==="viral"&&t.type==="respiratorio"||i==="bacteriana"&&t.type==="circulatorio")&&r++;let o=!!t.shield;if(o&&(n.discard.push(t.shield),t.shield=null,(i!=="fungica"||t.type!=="inmunologico")&&r--),r<=0){s&&n.discard.push(s);return}t.illnesses.push({type:i,level:r,card:s,due:i==="fungica"&&t.type==="inmunologico"&&!o?n.cycle+n.players.length:null,grown:!1}),Sc(n,e,t)}function kh(n,e){let t=e==="anticuerpo"?["viral"]:e==="antibiotico"?["bacteriana"]:["viral","bacteriana","fungica","severa","pandemia"];return n.illnesses.filter(i=>t.includes(i.type)).sort((i,s)=>s.level-i.level)}function $p(n,e){return n.immune?!1:e==="vacuna"?!n.vaccine:dn(n)>0?kh(n,e).length>0:n.shield?!1:e==="anticuerpo"?n.type==="respiratorio":e==="antibiotico"?n.type==="circulatorio":["respuesta","integral"].includes(e)}function Vh(n,e,t){let i=kh(e,t)[0];hn(i,"Esta defensa no retira esa infecci\xF3n."),i.level--,i.level<=0&&(e.illnesses.splice(e.illnesses.indexOf(i),1),Mc(n,i),t==="anticuerpo"&&i.type==="viral"&&(e.memory=!0))}function Yp(n,e,t){if(t==="vacuna"){e.vaccine=!0;return}dn(e)>0?(Vh(n,e,t),n.discard.push(t)):e.shield=t}function Oh(n,e,t){return n.systems.some(i=>i!==e&&i.type===t.type)}function si(n){let e=n.players[n.current];return e.blocked?"aislamiento":e.resetNext?"reinicio":null}function Bi(n,e){if(n.mode!=="duel"||n.winner!==null||si(n)||!dt[e])return[];let t=n.players[n.current],i=dt[e],s=[];if(i.kind==="system")return t.systems.some(r=>r.type===e)||s.push({owner:n.current,site:e}),s;if(i.kind==="infection")return n.players.forEach((r,a)=>{a!==n.current&&r.systems.forEach(o=>{o.immune||e==="mutacion"&&(dn(o)!==1||o.shield||o.vaccine||o.memory)||s.push({owner:a,site:o.type})})}),s;if(i.kind==="defense")return n.players.forEach((r,a)=>r.systems.forEach(o=>{$p(o,e)&&s.push({owner:a,site:o.type})})),s;if(i.kind==="event")return[{}];if(e==="reinicio")return[{}];if(e==="aislamiento"||e==="intervencion")return n.players.forEach((r,a)=>{a!==n.current&&(e==="aislamiento"?!r.blocked:r.hand.length>=2)&&s.push({owner:a})}),s;if(e==="sabotaje")return n.players.forEach((r,a)=>r.systems.forEach(o=>{o.vaccine&&s.push({owner:a,site:o.type,remove:"vacuna"}),o.memory&&s.push({owner:a,site:o.type,remove:"memoria"})})),s;if(e==="interferencia")return n.players.forEach((r,a)=>{a!==n.current&&r.systems.forEach(o=>{!o.immune&&!t.systems.some(l=>l.type===o.type)&&s.push({owner:a,site:o.type})})}),s;if(e==="reasignacion")for(let r=0;r<n.players.length;r++)for(let a=r+1;a<n.players.length;a++)for(let o of n.players[r].systems)for(let l of n.players[a].systems)!o.immune&&!l.immune&&!Oh(n.players[r],o,l)&&!Oh(n.players[a],l,o)&&s.push({owner:r,site:o.type,otherOwner:a,otherSite:l.type});return s}function Gh(n,e){return n.players[e.owner]?.systems.find(t=>t.type===e.site)}function yc(n){if(n.winner!==null)return n.winner;for(let e=0;e<n.players.length;e++){let t=n.players[e];if(t.systems.filter(bi).length>=4&&!t.blocked&&!n.pandemics.some(i=>i.owner===e))return n.winner=e,fn(n,`\xA1${t.name} ha conseguido cuatro sistemas estables!`),e}return null}function Ec(n,e=!1){if(yc(n)===null){n.turn++,e||(n.current=(n.current+1)%n.players.length,n.cycle++);for(let t of n.players)for(let i of[...t.systems]){for(let s of i.illnesses)s.type==="fungica"&&!s.grown&&s.due!==null&&n.cycle>=s.due&&(s.level++,s.grown=!0,fn(n,`La infecci\xF3n f\xFAngica del Inmunol\xF3gico de ${t.name} crece un nivel.`));Sc(n,t,i)}yc(n)}}function Tc(n,e,t={}){hn(n.mode==="duel"&&n.winner===null,"Esta partida ha terminado.");let i=n.current,s=n.players[i],r=s.hand[e];hn(r,"Selecciona una carta.");let a=Bi(n,r).some(h=>JSON.stringify(h)===JSON.stringify(t));hn(a,"Esa carta no puede usarse en ese destino.");let o=dt[r];s.hand.splice(e,1);let l=Gh(n,t),c=n.players[t.owner],d=!0,u=!1;if(o.kind==="system")s.systems.push(eo(r));else if(o.kind==="infection")Fh(n,c,l,r);else if(o.kind==="defense")Yp(n,l,r),t.owner!==i&&n.pandemics.forEach(h=>{h.owner===i&&(h.owner=t.owner)});else if(r==="pandemia"){n.pandemics.push({owner:i});for(let h of n.players)for(let f of[...h.systems])Fh(n,h,f,"pandemia",null)}else{if(n.discard.push(r),r==="reinicio"){for(let h of s.systems)h.illnesses.forEach(f=>Mc(n,f)),h.illnesses=[];s.resetNext=!0,d=!1}if(r==="aislamiento"&&(c.blocked=1),r==="intervencion"){for(let h=0;h<2;h++){let f=Math.floor(to(n)*c.hand.length);n.discard.push(c.hand.splice(f,1)[0])}zs(n,c)}if(r==="sabotaje"&&(t.remove==="vacuna"?(l.vaccine=!1,n.discard.push("vacuna"),Sc(n,c,l)):l.memory=!1),r==="interferencia"&&(c.systems.splice(c.systems.indexOf(l),1),s.systems.push(l)),r==="reasignacion"){let h=n.players[t.otherOwner],f=h.systems.find(g=>g.type===t.otherSite),p=c.systems.indexOf(l),M=h.systems.indexOf(f);c.systems[p]=f,h.systems[M]=l}if(r==="colapso"){for(let h of n.players)n.discard.push(...h.hand),h.hand=[];for(let h of n.players)zs(n,h);u=!0}}return fn(n,`${s.name} juega ${o.name}${t.site?` en ${t.site} de ${c.name}`:""}.`),n.last={id:r,actor:i,...t},d&&zs(n,s),Ec(n,u),n.last}function wc(n,e){hn(n.mode==="duel"&&n.winner===null&&!si(n),"Ahora no puedes descartar.");let t=n.players[n.current],i=[...new Set(e)].sort((s,r)=>r-s);hn(i.length>0&&i.every(s=>Number.isInteger(s)&&s>=0&&s<t.hand.length),"Selecciona al menos una carta para descartar.");for(let s of i)n.discard.push(t.hand.splice(s,1)[0]);fn(n,`${t.name} descarta ${i.length} carta(s) y repone su mano.`),zs(n,t),n.last={id:"discard",actor:n.current},Ec(n)}function Ac(n){let e=si(n);hn(e&&n.winner===null,"No tienes un turno bloqueado.");let t=n.players[n.current];e==="aislamiento"?t.blocked--:t.resetNext=!1,zs(n,t),fn(n,`${t.name} repone su mano y pasa por ${e}.`),Ec(n)}function qr(n){return!n.immune&&bi(n)&&n.vaccine&&n.memory}function Cc(n,e){let t=n.players[n.current],i=t.systems.find(s=>s.type===e);hn(i&&qr(i)&&n.winner===null&&!si(n),"Necesitas un sistema limpio con vacuna y memoria."),i.vaccine=!1,i.memory=!1,i.immune=!0,n.discard.push("vacuna"),fn(n,`${t.name} inmuniza por completo su sistema ${e}.`),yc(n)}function Zp(n){let e=n.players[n.current];if(si(n))return{kind:"forced"};for(let i of e.systems)if(qr(i))return{kind:"immunize",site:i.type};let t=[];return e.hand.forEach((i,s)=>Bi(n,i).forEach(r=>{let a=dt[i],o=Gh(n,r),l=0;a.kind==="system"&&(l=75+e.systems.filter(bi).length*4),a.kind==="defense"&&(l=r.owner===n.current?o&&dn(o)>0?95:45:n.pandemics.some(c=>c.owner===n.current)?100:5),a.kind==="infection"&&(l=o?25+dn(o)*12+n.players[r.owner].systems.filter(bi).length*6:0),i==="reinicio"&&(l=e.systems.reduce((c,d)=>c+dn(d),0)>2?110:2),i==="interferencia"&&(l=70),i==="reasignacion"&&(l=10),i==="sabotaje"&&(l=20),i==="aislamiento"&&(l=25),i==="intervencion"&&(l=15),a.kind==="event"&&(l=i==="colapso"?8:3),t.push({kind:"play",index:s,move:r,score:l+to(n)*5})})),t.sort((i,s)=>s.score-i.score),t[0]||{kind:"discard",indexes:e.hand.map((i,s)=>s)}}function Hh(n){let e=Zp(n);return e.kind==="forced"?Ac(n):e.kind==="immunize"?Cc(n,e.site):e.kind==="play"?Tc(n,e.index,e.move):wc(n,e.indexes),e}function Wh({level:n=2,name:e="Explorador",seed:t=Date.now()>>>0}={}){let i={version:bc,mode:"adventure",level:n,name:String(e).trim().slice(0,24)||"Explorador",seed:t,lesson:0,systems:[],site:"adaptativo",quiz:!1,quizOrder:[],mistakes:0,lessonMistakes:0,stars:0,completed:!1,discard:[],log:[]};return n===1&&(i.systems=Pn.filter(s=>s.id!=="adaptativo").map(s=>eo(s.id))),Xh(i),i}function ri(n){return ds(n.level)[n.lesson]||null}function Xh(n){let e=ri(n);if(n.quiz=!1,n.lessonMistakes=0,!!e){if(n.site=e.site,e.action==="cure"){let t=n.systems.find(i=>i.type===e.site);t||(t=eo(e.site),n.systems.push(t)),t.illnesses=[{type:e.illness,card:e.illness,level:n.level===1?1:2,due:null,grown:e.illness==="fungica"}],n.level>1&&e.illness==="fungica"&&fn(n,"Tras una ronda, el hongo del Inmunol\xF3gico ha a\xF1adido un nivel.")}fn(n,e.task)}}function Rc(n){let e=ri(n);if(!e||n.quiz||n.completed)return[];let t=e.action==="build"?["viral","adaptativo"]:e.card==="anticuerpo"?["antibiotico","viral"]:e.card==="antibiotico"?["anticuerpo","viral"]:e.card==="vacuna"?["bacteriana","antibiotico"]:["anticuerpo","viral"],i=[e.card,...t],s=(n.lesson+n.level)%3;return i.slice(s).concat(i.slice(0,s))}function qh(n,e,t){hn(!n.completed&&!n.quiz,"Responde primero a la pregunta.");let i=ri(n);if(hn(i,"Activa la puerta del equilibrio para terminar."),t!==i.site)return n.mistakes++,n.lessonMistakes++,{ok:!1,message:`Esta misi\xF3n es en ${Pn.find(o=>o.id===i.site).name}. Sigue el mapa.`};if(!(e===i.card||n.level>1&&i.action==="cure"&&["respuesta","integral"].includes(i.card)&&["respuesta","integral"].includes(e)))return n.mistakes++,n.lessonMistakes++,{ok:!1,message:e==="antibiotico"&&i.illness==="viral"?"Los antibi\xF3ticos act\xFAan contra bacterias, no contra virus. Prueba el anticuerpo.":`Busca ${dt[i.card].name}. ${dt[i.card].text}`};let r=n.systems.find(o=>o.type===t);return i.action==="build"&&(r=eo(t),n.systems.push(r)),i.action==="cure"&&Vh(n,r,e),i.action==="vaccinate"&&(r.vaccine=!0,qr(r)&&(r.vaccine=!1,r.memory=!1,r.immune=!0)),fn(n,`${dt[e].name} ayuda al sistema ${t}.`),i.action!=="cure"||dn(r)===0?(n.quiz=!0,n.quizOrder=Bh(n,i.choices.map((o,l)=>l)),{ok:!0,done:!0,message:i.action==="vaccinate"?"\xA1Vacuna y memoria forman una inmunizaci\xF3n completa!":"\xA1Lo has conseguido! Descubre algo sobre esta isla."}):{ok:!0,done:!1,message:"\xA1Un nivel menos! Queda otro. Usa una defensa m\xE1s."}}function $h(n,e){hn(n.quiz,"No hay una pregunta pendiente.");let t=ri(n);if(e!==t.correct)return n.mistakes++,n.lessonMistakes++,{ok:!1,message:t.explanation};let i=Math.max(1,3-n.lessonMistakes);return n.stars+=i,n.lesson++,n.quiz=!1,Xh(n),{ok:!0,earned:i,message:t.explanation}}function Yh(n){hn(!ri(n)&&!n.quiz&&n.systems.filter(bi).length>=4,"Primero completa las misiones de las cuatro islas."),n.completed=!0,fn(n,`\xA1${n.name} ha restaurado el equilibrio del cuerpo!`)}function no(n){let e=n&&[1,2,3].includes(n.level);if(!n||n.version!==bc||!e||!Array.isArray(n.log)||n.log.length>80||!n.log.every(r=>typeof r=="string"&&r.length<=1e3))return!1;let t=r=>r&&Pn.some(a=>a.id===r.type)&&Array.isArray(r.illnesses)&&r.illnesses.length<=5&&r.illnesses.every(a=>["viral","bacteriana","fungica","severa","pandemia"].includes(a.type)&&Number.isInteger(a.level)&&a.level>=1&&a.level<=3&&(a.card===null||dt[a.card]?.kind==="infection")&&(a.due===null||Number.isInteger(a.due))&&typeof a.grown=="boolean")&&["vaccine","memory","immune"].every(a=>typeof r[a]=="boolean")&&(r.shield===null||["anticuerpo","antibiotico","respuesta","integral"].includes(r.shield)),i=r=>Array.isArray(r)&&r.length<=5&&new Set(r.map(a=>a.type)).size===r.length&&r.every(t),s=r=>Array.isArray(r)&&r.length<=128&&r.every(a=>!!dt[a]);return n.mode==="adventure"?typeof n.name=="string"&&n.name.length<=24&&Number.isInteger(n.seed)&&Number.isInteger(n.lesson)&&n.lesson>=0&&n.lesson<=ds(n.level).length&&i(n.systems)&&Pn.some(r=>r.id===n.site)&&typeof n.quiz=="boolean"&&Array.isArray(n.quizOrder)&&n.quizOrder.every(r=>Number.isInteger(r)&&r>=0&&r<=2)&&Number.isInteger(n.stars)&&n.stars>=0&&n.stars<=27&&Number.isInteger(n.mistakes)&&n.mistakes>=0&&Number.isInteger(n.lessonMistakes)&&n.lessonMistakes>=0&&typeof n.completed=="boolean"&&s(n.discard):n.mode!=="duel"||!Array.isArray(n.players)||n.players.length<2||n.players.length>6?!1:n.players.every(r=>typeof r.name=="string"&&r.name.length<=24&&typeof r.bot=="boolean"&&i(r.systems)&&s(r.hand)&&r.hand.length<=3&&Number.isInteger(r.blocked)&&r.blocked>=0&&r.blocked<=1&&typeof r.resetNext=="boolean")&&s(n.deck)&&s(n.discard)&&Number.isInteger(n.current)&&n.current>=0&&n.current<n.players.length&&(n.winner===null||Number.isInteger(n.winner)&&n.winner>=0&&n.winner<n.players.length)&&Number.isInteger(n.cycle)&&n.cycle>=0&&Number.isInteger(n.turn)&&n.turn>=1&&Number.isInteger(n.seed)&&Array.isArray(n.pandemics)&&n.pandemics.length<=2&&n.pandemics.every(r=>Number.isInteger(r.owner)&&r.owner>=0&&r.owner<n.players.length)}function Zh(n,e){let t=Wp(n),i=e(t);return hn(no(t),"No se pudo validar la partida."),{state:t,result:i}}var bc,Wp,hn,dn,bi,Ic=In(()=>{Xr();bc=1,Wp=n=>structuredClone(n),hn=(n,e)=>{if(!n)throw Error(e)},dn=n=>n.illnesses.reduce((e,t)=>e+t.level,0),bi=n=>dn(n)===0});function Kp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function jp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ar(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function df(){let n=ar("canvas");return n.style.display="block",n}function Nu(...n){let e="THREE."+n.shift();or?or("log",e,...n):console.log(e,...n)}function ff(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function $e(...n){n=ff(n);let e="THREE."+n.shift();if(or)or("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ye(...n){n=ff(n);let e="THREE."+n.shift();if(or)or("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function xs(...n){let e=n.join(" ");e in Jh||(Jh[e]=!0,$e(...n))}function pf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Rs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function Uu(n,e){return(n%e+e)%e}function Qp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function em(n,e,t){return n!==e?(t-n)/(e-n):0}function ta(n,e,t){return(1-t)*n+t*e}function tm(n,e,t,i){return ta(n,e,1-Math.exp(-t*i))}function nm(n,e=1){return e-Math.abs(Uu(n,e*2)-e)}function im(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function sm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function rm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function am(n,e){return n+Math.random()*(e-n)}function om(n){return n*(.5-Math.random())}function lm(n){n!==void 0&&(Kh=n);let e=Kh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cm(n){return n*ea}function um(n){return n*lr}function hm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function dm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function fm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function pm(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),d=a((e+i)/2),u=r((e-i)/2),h=a((e-i)/2),f=r((i-e)/2),p=a((i-e)/2);switch(s){case"XYX":n.set(o*d,l*u,l*h,o*c);break;case"YZY":n.set(l*h,o*d,l*u,o*c);break;case"ZXZ":n.set(l*u,l*h,o*d,o*c);break;case"XZX":n.set(o*d,l*p,l*f,o*c);break;case"YXY":n.set(l*f,o*d,l*p,o*c);break;case"ZYZ":n.set(l*p,l*f,o*d,o*c);break;default:$e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function tr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mm(){let n={enabled:!0,workingColorSpace:ra,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pt&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(s.r=nr(s.r),s.g=nr(s.g),s.b=nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kn?aa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ra]:{primaries:e,whitePoint:i,transfer:aa,toXYZ:Qh,fromXYZ:ed,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Qh,fromXYZ:ed,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),n}function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Dc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ko.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}function Fc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Wc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ps.fromArray(n,r);let o=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),l=e.dot(ps),c=t.dot(ps),d=i.dot(ps);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}function Pm(n,e,t,i,s,r,a,o){let l;if(e.side===qt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ns,o),l===null)return null;xo.copy(o),xo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(xo);return c<t.near||c>t.far?null:{distance:c,point:xo.clone(),object:n}}function vo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,po),n.getVertexPosition(l,mo),n.getVertexPosition(c,go);let d=Pm(n,e,t,i,po,mo,go,hd);if(d){let u=new D;Wi.getBarycoord(hd,po,mo,go,u),s&&(d.uv=Wi.getInterpolatedAttribute(s,o,l,c,u,new pe)),r&&(d.uv1=Wi.getInterpolatedAttribute(r,o,l,c,u,new pe)),a&&(d.normal=Wi.getInterpolatedAttribute(a,o,l,c,u,new D),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new D,materialIndex:0};Wi.getNormal(po,mo,go,h.normal),d.face=h,d.barycoord=u}return d}function md(n,e,t,i,s,r,a){let o=ru.distanceSqToPoint(n);if(o<t){let l=new D;ru.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function Ou(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,u){let h=(a-r)/c-(o-r)/(c+d)+(o-a)/d,f=(o-a)/d-(l-a)/(d+u)+(l-o)/u;h*=d,f*=d,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}function xd(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function Nm(n,e){let t=1-n;return t*t*e}function Um(n,e){return 2*(1-n)*n*e}function Fm(n,e){return n*n*e}function na(n,e,t,i){return Nm(n,e)+Um(n,t)+Fm(n,i)}function Om(n,e){let t=1-n;return t*t*t*e}function Bm(n,e){let t=1-n;return 3*t*t*n*e}function zm(n,e){return 3*(1-n)*n*n*e}function km(n,e){return n*n*n*e}function ia(n,e,t,i,s){return Om(n,e)+Bm(n,t)+zm(n,i)+km(n,s)}function Vm(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=_f(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=qm(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let d=o,u=l;for(let h=t;h<s;h+=t){let f=n[h],p=n[h+1];f<o&&(o=f),p<l&&(l=p),f>d&&(d=f),p>u&&(u=p)}c=Math.max(d-o,u-l),c=c!==0?32767/c:0}return Sa(r,a,t,o,l,c,0),a}function _f(n,e,t,i,s){let r;if(s===ig(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=vd(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=vd(a/i|0,n[a],n[a+1],r);return r&&gr(r,r.next)&&(Ta(r),r=r.next),r}function Ms(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(gr(t,t.next)||Ct(t.prev,t,t.next)===0)){if(Ta(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Sa(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Km(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Hm(n,i,s,r):Gm(n)){e.push(l.i,n.i,c.i),Ta(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Wm(Ms(n),e),Sa(n,e,t,i,s,r,2)):a===2&&Xm(n,e,t,i,s,r):Sa(Ms(n),e,t,i,s,r,1);break}}}function Gm(n){let e=n.prev,t=n,i=n.next;if(Ct(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,d=Math.min(s,r,a),u=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c),p=i.next;for(;p!==e;){if(p.x>=d&&p.x<=h&&p.y>=u&&p.y<=f&&Qr(s,o,r,l,a,c,p.x,p.y)&&Ct(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Hm(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Ct(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,d=s.y,u=r.y,h=a.y,f=Math.min(o,l,c),p=Math.min(d,u,h),M=Math.max(o,l,c),g=Math.max(d,u,h),m=au(f,p,e,t,i),S=au(M,g,e,t,i),w=n.prevZ,v=n.nextZ;for(;w&&w.z>=m&&v&&v.z<=S;){if(w.x>=f&&w.x<=M&&w.y>=p&&w.y<=g&&w!==s&&w!==a&&Qr(o,d,l,u,c,h,w.x,w.y)&&Ct(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=f&&v.x<=M&&v.y>=p&&v.y<=g&&v!==s&&v!==a&&Qr(o,d,l,u,c,h,v.x,v.y)&&Ct(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=M&&w.y>=p&&w.y<=g&&w!==s&&w!==a&&Qr(o,d,l,u,c,h,w.x,w.y)&&Ct(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=M&&v.y>=p&&v.y<=g&&v!==s&&v!==a&&Qr(o,d,l,u,c,h,v.x,v.y)&&Ct(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Wm(n,e){let t=n;do{let i=t.prev,s=t.next.next;!gr(i,s)&&vf(i,t,t.next,s)&&Ea(i,s)&&Ea(s,i)&&(e.push(i.i,t.i,s.i),Ta(t),Ta(t.next),t=n=s),t=t.next}while(t!==n);return Ms(t)}function Xm(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&eg(a,o)){let l=yf(a,o);a=Ms(a,a.next),l=Ms(l,l.next),Sa(a,e,t,i,s,r,0),Sa(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function qm(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=_f(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Qm(c))}s.sort($m);for(let r=0;r<s.length;r++)t=Ym(s[r],t);return t}function $m(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Ym(n,e){let t=Zm(n,e);if(!t)return e;let i=yf(t,n);return Ms(i,i.next),Ms(t,t.next)}function Zm(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(gr(n,t))return t;do{if(gr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,d=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&xf(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);Ea(t,n)&&(u<d||u===d&&(t.x>a.x||t.x===a.x&&Jm(a,t)))&&(a=t,d=u)}t=t.next}while(t!==o);return a}function Jm(n,e){return Ct(n.prev,n,e.prev)<0&&Ct(e.next,n,n.next)<0}function Km(n,e,t,i){let s=n;do s.z===0&&(s.z=au(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,jm(s)}function jm(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function au(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Qm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function xf(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Qr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&xf(n,e,t,i,s,r,a,o)}function eg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!tg(n,e)&&(Ea(n,e)&&Ea(e,n)&&ng(n,e)&&(Ct(n.prev,n,e.prev)||Ct(n,e.prev,e))||gr(n,e)&&Ct(n.prev,n,n.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function gr(n,e){return n.x===e.x&&n.y===e.y}function vf(n,e,t,i){let s=To(Ct(n,e,t)),r=To(Ct(n,e,i)),a=To(Ct(t,i,n)),o=To(Ct(t,i,e));return!!(s!==r&&a!==o||s===0&&Eo(n,t,e)||r===0&&Eo(n,i,e)||a===0&&Eo(t,n,i)||o===0&&Eo(t,e,i))}function Eo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function To(n){return n>0?1:n<0?-1:0}function tg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&vf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ea(n,e){return Ct(n.prev,n,n.next)<0?Ct(n,e,n.next)>=0&&Ct(n,n.prev,e)>=0:Ct(n,e,n.prev)<0||Ct(n,n.next,e)<0}function ng(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function yf(n,e){let t=ou(n.i,n.x,n.y),i=ou(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function vd(n,e,t,i){let s=ou(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ta(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ou(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ig(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}function yd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function bd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function rg(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function Is(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Md(s))s.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Md(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Kt(n){let e={};for(let t=0;t<n.length;t++){let i=Is(n[t]);for(let s in i)e[s]=i[s]}return e}function Md(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ag(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}function Ks(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Qc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function Mf(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function cg(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function ug(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Mf(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=cg(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}function Sd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}function Ed(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function Id(n,e){return n.distance-e.distance}function du(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)du(r[a],e,t,!0)}}function Vu(n,e,t,i){let s=vg(i);switch(t){case Pu:return n*e;case xl:return n*e/s.components*s.byteLength;case vl:return n*e/s.components*s.byteLength;case as:return n*e*2/s.components*s.byteLength;case yl:return n*e*2/s.components*s.byteLength;case Lu:return n*e*3/s.components*s.byteLength;case Bn:return n*e*4/s.components*s.byteLength;case bl:return n*e*4/s.components*s.byteLength;case Ua:case Fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oa:case Ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sl:case Tl:return Math.max(n,16)*Math.max(e,8)/4;case Ml:case El:return Math.max(n,8)*Math.max(e,8)/2;case wl:case Al:case Rl:case Il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cl:case za:case Pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case zl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case kl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ql:case $l:case Yl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Zl:case Jl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ka:case Kl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vg(n){switch(n){case mn:case Au:return{byteLength:1,components:1};case Tr:case Cu:case Jn:return{byteLength:2,components:1};case gl:case _l:return{byteLength:2,components:4};case Zn:case ml:case On:return{byteLength:4,components:1};case Ru:case Iu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var es,ts,Pd,pu,Ld,Ts,Dd,Sr,ns,qt,Fn,ui,Er,La,mu,gu,Nd,ws,Ud,Fd,Od,Bd,zd,kd,Vd,Gd,_u,xu,Hd,Wd,Xd,qd,$d,Yd,Zd,Jd,Kd,Po,Lo,Do,ir,No,Uo,Fo,Oo,vu,jd,Qd,Yn,yu,bu,Mu,As,Su,Eu,Tu,wu,is,Cs,dl,fl,Da,sr,oi,Bo,Gt,ef,Na,Xt,pl,ss,mn,Au,Cu,Tr,ml,Zn,On,Jn,gl,_l,wr,Ru,Iu,Pu,Lu,Bn,li,rs,xl,vl,as,yl,bl,Ua,Fa,Oa,Ba,Ml,Sl,El,Tl,wl,Al,Cl,Rl,Il,za,Pl,Ll,Dl,Nl,Ul,Fl,Ol,Bl,zl,kl,Vl,Gl,Hl,Wl,Xl,ql,$l,Yl,Zl,Jl,ka,Kl,sa,zo,Co,tu,nu,iu,su,tf,jl,nf,Kn,Vt,ra,aa,pt,Ro,sf,rf,af,of,Ql,lf,cf,ec,uf,hf,Du,Wn,rr,Jh,or,mf,Xn,Yt,Kh,ea,lr,Fu,Gu,pe,an,Hu,D,Pc,jh,Wu,je,Lc,Qh,ed,lt,ks,ko,gm,cr,_m,Nc,Jt,Xu,wt,Vo,pn,oa,Go,hl,mt,Vs,Vn,xm,vm,zi,io,vn,td,nd,Ci,ur,ym,id,Gs,Mi,so,$r,bm,Mm,sd,rd,ad,od,Sm,Hs,Uc,It,Tt,Em,hr,gf,ki,ro,Ke,Zt,la,ca,vs,Gn,Si,Oc,Ei,Ws,Xs,ld,Bc,zc,kc,Vc,Gc,Hc,Wi,ci,Ti,Hn,ao,qs,$s,Ys,Vi,Gi,fs,Yr,oo,lo,ps,Ut,co,Tm,rn,ua,ha,ct,wm,Zr,Xc,Ri,Am,Dn,qc,Zs,yn,Jr,kt,Pt,$c,Cm,Rm,bn,Im,Ii,wi,Yc,uo,ho,Xi,Nn,cd,ms,fo,ud,po,mo,go,Zc,_o,hd,xo,Ht,da,dr,Js,dd,yo,fd,Lm,Kr,jr,Un,gs,Dm,bo,fr,pr,pd,ru,Mo,So,fa,pa,ma,qi,Ho,ga,qn,ys,$n,Wo,Mn,mr,Xo,gd,_d,Jc,Kc,jc,Pi,_a,qo,xa,$o,va,ya,ba,Yo,Zo,Ma,bs,lu,_s,_r,sg,Ss,$i,Li,Sn,Yi,bf,og,lg,En,Jo,Tn,xr,Ko,jo,Zi,Qo,el,tl,nl,wn,Ji,il,sl,rl,wa,Ki,al,Io,ol,Sf,vr,js,ll,Aa,yr,Es,eu,Td,wd,Ca,wo,Ao,ai,Ra,Hi,Ad,Cd,Ft,cu,Ia,br,uu,ji,Qs,er,cl,ul,zu,hg,ku,dg,fg,pg,mg,gg,_g,xg,hu,St,Zy,Rd,Qi,Mr,qu,fu,Pa,$u=In(()=>{es={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pd=0,pu=1,Ld=2,Ts=1,Dd=2,Sr=3,ns=0,qt=1,Fn=2,ui=0,Er=1,La=2,mu=3,gu=4,Nd=5,ws=100,Ud=101,Fd=102,Od=103,Bd=104,zd=200,kd=201,Vd=202,Gd=203,_u=204,xu=205,Hd=206,Wd=207,Xd=208,qd=209,$d=210,Yd=211,Zd=212,Jd=213,Kd=214,Po=0,Lo=1,Do=2,ir=3,No=4,Uo=5,Fo=6,Oo=7,vu=0,jd=1,Qd=2,Yn=0,yu=1,bu=2,Mu=3,As=4,Su=5,Eu=6,Tu=7,wu=300,is=301,Cs=302,dl=303,fl=304,Da=306,sr=1e3,oi=1001,Bo=1002,Gt=1003,ef=1004,Na=1005,Xt=1006,pl=1007,ss=1008,mn=1009,Au=1010,Cu=1011,Tr=1012,ml=1013,Zn=1014,On=1015,Jn=1016,gl=1017,_l=1018,wr=1020,Ru=35902,Iu=35899,Pu=1021,Lu=1022,Bn=1023,li=1026,rs=1027,xl=1028,vl=1029,as=1030,yl=1031,bl=1033,Ua=33776,Fa=33777,Oa=33778,Ba=33779,Ml=35840,Sl=35841,El=35842,Tl=35843,wl=36196,Al=37492,Cl=37496,Rl=37488,Il=37489,za=37490,Pl=37491,Ll=37808,Dl=37809,Nl=37810,Ul=37811,Fl=37812,Ol=37813,Bl=37814,zl=37815,kl=37816,Vl=37817,Gl=37818,Hl=37819,Wl=37820,Xl=37821,ql=36492,$l=36494,Yl=36495,Zl=36283,Jl=36284,ka=36285,Kl=36286,sa=2300,zo=2301,Co=2302,tu=2303,nu=2400,iu=2401,su=2402,tf=3200,jl=0,nf=1,Kn="",Vt="srgb",ra="srgb-linear",aa="linear",pt="srgb",Ro=7680,sf=519,rf=512,af=513,of=514,Ql=515,lf=516,cf=517,ec=518,uf=519,hf=35044,Du="300 es",Wn=2e3,rr=2001;Jh={},or=null;mf={[Po]:Lo,[Do]:Fo,[No]:Oo,[ir]:Uo,[Lo]:Po,[Fo]:Do,[Oo]:No,[Uo]:ir},Xn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kh=1234567,ea=Math.PI/180,lr=180/Math.PI;Fu={DEG2RAD:ea,RAD2DEG:lr,generateUUID:Rs,clamp:it,euclideanModulo:Uu,mapLinear:Qp,inverseLerp:em,lerp:ta,damp:tm,pingpong:nm,smoothstep:im,smootherstep:sm,randInt:rm,randFloat:am,randFloatSpread:om,seededRandom:lm,degToRad:cm,radToDeg:um,isPowerOfTwo:hm,ceilPowerOfTwo:dm,floorPowerOfTwo:fm,setQuaternionFromProperEuler:pm,normalize:sn,denormalize:tr},Gu=class Gu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gu.prototype.isVector2=!0;pe=Gu,an=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],d=i[s+2],u=i[s+3],h=r[a+0],f=r[a+1],p=r[a+2],M=r[a+3];if(u!==M||l!==h||c!==f||d!==p){let g=l*h+c*f+d*p+u*M;g<0&&(h=-h,f=-f,p=-p,M=-M,g=-g);let m=1-o;if(g<.9995){let S=Math.acos(g),w=Math.sin(S);m=Math.sin(m*S)/w,o=Math.sin(o*S)/w,l=l*m+h*o,c=c*m+f*o,d=d*m+p*o,u=u*m+M*o}else{l=l*m+h*o,c=c*m+f*o,d=d*m+p*o,u=u*m+M*o;let S=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=S,c*=S,d*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],d=i[s+3],u=r[a],h=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+d*u+l*f-c*h,e[t+1]=l*p+d*h+c*u-o*f,e[t+2]=c*p+d*f+o*h-l*u,e[t+3]=d*p-o*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(s/2),u=o(r/2),h=l(i/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=h*d*u+c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u-h*f*p;break;case"YXZ":this._x=h*d*u+c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u+h*f*p;break;case"ZXY":this._x=h*d*u-c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u-h*f*p;break;case"ZYX":this._x=h*d*u-c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u+h*f*p;break;case"YZX":this._x=h*d*u+c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u-h*f*p;break;case"XZY":this._x=h*d*u-c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u+h*f*p;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=i+o+u;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(d-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-i*c,this._z=r*d+a*c+i*l-s*o,this._w=a*d-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Hu=class Hu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),d=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*d,this.y=i+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pc.copy(this).projectOnVector(e),this.sub(Pc)}reflect(e){return this.sub(Pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hu.prototype.isVector3=!0;D=Hu,Pc=new D,jh=new an,Wu=class Wu{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],u=i[7],h=i[2],f=i[5],p=i[8],M=s[0],g=s[3],m=s[6],S=s[1],w=s[4],v=s[7],T=s[2],y=s[5],C=s[8];return r[0]=a*M+o*S+l*T,r[3]=a*g+o*w+l*y,r[6]=a*m+o*v+l*C,r[1]=c*M+d*S+u*T,r[4]=c*g+d*w+u*y,r[7]=c*m+d*v+u*C,r[2]=h*M+f*S+p*T,r[5]=h*g+f*w+p*y,r[8]=h*m+f*v+p*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-i*r*d+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,h=o*l-d*r,f=c*r-a*l,p=t*u+i*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/p;return e[0]=u*M,e[1]=(s*c-d*i)*M,e[2]=(o*i-s*a)*M,e[3]=h*M,e[4]=(d*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=f*M,e[7]=(i*l-c*t)*M,e[8]=(a*t-i*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lc.makeScale(e,t)),this}rotate(e){return xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lc.makeRotation(-e)),this}translate(e,t){return xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wu.prototype.isMatrix3=!0;je=Wu,Lc=new je,Qh=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ed=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);lt=mm();ko=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ks===void 0&&(ks=ar("canvas")),ks.width=e.width,ks.height=e.height;let s=ks.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ks}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ar("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ai(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ai(t[i]/255)*255):t[i]=Ai(t[i]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gm=0,cr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Dc(s[a].image)):r.push(Dc(s[a]))}else r=Dc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};_m=0,Nc=new D,Jt=class n extends Xn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=oi,s=oi,r=Xt,a=ss,o=Bn,l=mn,c=n.DEFAULT_ANISOTROPY,d=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Rs(),this.name="",this.source=new cr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nc).x}get height(){return this.source.getSize(Nc).y}get depth(){return this.source.getSize(Nc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sr:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sr:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=wu;Jt.DEFAULT_ANISOTROPY=1;Xu=class Xu{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],p=l[9],M=l[2],g=l[6],m=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-M)<.01&&Math.abs(p-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+M)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,v=(f+1)/2,T=(m+1)/2,y=(d+h)/4,C=(u+M)/4,_=(p+g)/4;return w>v&&w>T?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=y/i,r=C/i):v>T?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=y/s,r=_/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=C/r,s=_/r),this.set(i,s,r,t),this}let S=Math.sqrt((g-p)*(g-p)+(u-M)*(u-M)+(h-d)*(h-d));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(u-M)/S,this.z=(h-d)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xu.prototype.isVector4=!0;wt=Xu,Vo=class extends Xn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Jt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new cr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends Vo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},oa=class extends Jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Go=class extends Jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},hl=class hl{constructor(e,t,i,s,r,a,o,l,c,d,u,h,f,p,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,d,u,h,f,p,M,g)}set(e,t,i,s,r,a,o,l,c,d,u,h,f,p,M,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=h,m[3]=f,m[7]=p,m[11]=M,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hl().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Vs.setFromMatrixColumn(e,0).length(),r=1/Vs.setFromMatrixColumn(e,1).length(),a=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let h=a*d,f=a*u,p=o*d,M=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=h-M*c,t[9]=-o*l,t[2]=M-h*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*d,f=l*u,p=c*d,M=c*u;t[0]=h+M*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=f*o-p,t[6]=M+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*d,f=l*u,p=c*d,M=c*u;t[0]=h-M*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*d,t[9]=M-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*d,f=a*u,p=o*d,M=o*u;t[0]=l*d,t[4]=p*c-f,t[8]=h*c+M,t[1]=l*u,t[5]=M*c+h,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,p=o*l,M=o*c;t[0]=l*d,t[4]=M-h*u,t[8]=p*u+f,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*u+p,t[10]=h-M*u}else if(e.order==="XZY"){let h=a*l,f=a*c,p=o*l,M=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+M,t[5]=a*d,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*d,t[10]=M*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xm,e,vm)}lookAt(e,t,i){let s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),zi.crossVectors(i,vn),zi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),zi.crossVectors(i,vn)),zi.normalize(),io.crossVectors(vn,zi),s[0]=zi.x,s[4]=io.x,s[8]=vn.x,s[1]=zi.y,s[5]=io.y,s[9]=vn.y,s[2]=zi.z,s[6]=io.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],u=i[5],h=i[9],f=i[13],p=i[2],M=i[6],g=i[10],m=i[14],S=i[3],w=i[7],v=i[11],T=i[15],y=s[0],C=s[4],_=s[8],E=s[12],R=s[1],N=s[5],P=s[9],z=s[13],L=s[2],k=s[6],Z=s[10],J=s[14],he=s[3],K=s[7],ce=s[11],ue=s[15];return r[0]=a*y+o*R+l*L+c*he,r[4]=a*C+o*N+l*k+c*K,r[8]=a*_+o*P+l*Z+c*ce,r[12]=a*E+o*z+l*J+c*ue,r[1]=d*y+u*R+h*L+f*he,r[5]=d*C+u*N+h*k+f*K,r[9]=d*_+u*P+h*Z+f*ce,r[13]=d*E+u*z+h*J+f*ue,r[2]=p*y+M*R+g*L+m*he,r[6]=p*C+M*N+g*k+m*K,r[10]=p*_+M*P+g*Z+m*ce,r[14]=p*E+M*z+g*J+m*ue,r[3]=S*y+w*R+v*L+T*he,r[7]=S*C+w*N+v*k+T*K,r[11]=S*_+w*P+v*Z+T*ce,r[15]=S*E+w*z+v*J+T*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],p=e[3],M=e[7],g=e[11],m=e[15],S=l*f-c*h,w=o*f-c*u,v=o*h-l*u,T=a*f-c*d,y=a*h-l*d,C=a*u-o*d;return t*(M*S-g*w+m*v)-i*(p*S-g*T+m*y)+s*(p*w-M*T+m*C)-r*(p*v-M*y+g*C)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-i*(r*d-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],p=e[12],M=e[13],g=e[14],m=e[15],S=t*o-i*a,w=t*l-s*a,v=t*c-r*a,T=i*l-s*o,y=i*c-r*o,C=s*c-r*l,_=d*M-u*p,E=d*g-h*p,R=d*m-f*p,N=u*g-h*M,P=u*m-f*M,z=h*m-f*g,L=S*z-w*P+v*N+T*R-y*E+C*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/L;return e[0]=(o*z-l*P+c*N)*k,e[1]=(s*P-i*z-r*N)*k,e[2]=(M*C-g*y+m*T)*k,e[3]=(h*y-u*C-f*T)*k,e[4]=(l*R-a*z-c*E)*k,e[5]=(t*z-s*R+r*E)*k,e[6]=(g*v-p*C-m*w)*k,e[7]=(d*C-h*v+f*w)*k,e[8]=(a*P-o*R+c*_)*k,e[9]=(i*R-t*P-r*_)*k,e[10]=(p*y-M*v+m*S)*k,e[11]=(u*v-d*y-f*S)*k,e[12]=(o*E-a*N-l*_)*k,e[13]=(t*N-i*E+s*_)*k,e[14]=(M*w-p*T-g*S)*k,e[15]=(d*T-u*w+h*S)*k,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+i,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,u=o+o,h=r*c,f=r*d,p=r*u,M=a*d,g=a*u,m=o*u,S=l*c,w=l*d,v=l*u,T=i.x,y=i.y,C=i.z;return s[0]=(1-(M+m))*T,s[1]=(f+v)*T,s[2]=(p-w)*T,s[3]=0,s[4]=(f-v)*y,s[5]=(1-(h+m))*y,s[6]=(g+S)*y,s[7]=0,s[8]=(p+w)*C,s[9]=(g-S)*C,s[10]=(1-(h+M))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Vs.set(s[0],s[1],s[2]).length(),o=Vs.set(s[4],s[5],s[6]).length(),l=Vs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Vn.copy(this);let c=1/a,d=1/o,u=1/l;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=d,Vn.elements[5]*=d,Vn.elements[6]*=d,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,t.setFromRotationMatrix(Vn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Wn,l=!1){let c=this.elements,d=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),p,M;if(l)p=r/(a-r),M=a*r/(a-r);else if(o===Wn)p=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===rr)p=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Wn,l=!1){let c=this.elements,d=2/(t-e),u=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s),p,M;if(l)p=1/(a-r),M=a/(a-r);else if(o===Wn)p=-2/(a-r),M=-(a+r)/(a-r);else if(o===rr)p=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};hl.prototype.isMatrix4=!0;mt=hl,Vs=new D,Vn=new mt,xm=new D(0,0,0),vm=new D(1,1,1),zi=new D,io=new D,vn=new D,td=new mt,nd=new an,Ci=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return td.makeRotationFromQuaternion(e),this.setFromRotationMatrix(td,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nd.setFromEuler(this),this.setFromQuaternion(nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ci.DEFAULT_ORDER="XYZ";ur=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ym=0,id=new D,Gs=new an,Mi=new mt,so=new D,$r=new D,bm=new D,Mm=new an,sd=new D(1,0,0),rd=new D(0,1,0),ad=new D(0,0,1),od={type:"added"},Sm={type:"removed"},Hs={type:"childadded",child:null},Uc={type:"childremoved",child:null},It=class n extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new Ci,i=new an,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new je}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(sd,e)}rotateY(e){return this.rotateOnAxis(rd,e)}rotateZ(e){return this.rotateOnAxis(ad,e)}translateOnAxis(e,t){return id.copy(e).applyQuaternion(this.quaternion),this.position.add(id.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sd,e)}translateY(e){return this.translateOnAxis(rd,e)}translateZ(e){return this.translateOnAxis(ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?so.copy(e):so.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt($r,so,this.up):Mi.lookAt(so,$r,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Gs.setFromRotationMatrix(Mi),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(od),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sm),Uc.child=e,this.dispatchEvent(Uc),Uc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(od),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,bm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,Mm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};It.DEFAULT_UP=new D(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Tt=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},Em={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let g=t.getJointPose(M,i),m=this._getHandJoint(c,M);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Em)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Tt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},ro={h:0,s:0,l:0};Ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=Uu(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Fc(a,r,e+1/3),this.g=Fc(a,r,e),this.b=Fc(a,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=Vt){function i(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let i=gf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return lt.workingToColorSpace(Zt.copy(this),e),Math.round(it(Zt.r*255,0,255))*65536+Math.round(it(Zt.g*255,0,255))*256+Math.round(it(Zt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Zt.copy(this),t);let i=Zt.r,s=Zt.g,r=Zt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Vt){lt.workingToColorSpace(Zt.copy(this),e);let t=Zt.r,i=Zt.g,s=Zt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(ro);let i=ta(ki.h,ro.h,t),s=ta(ki.s,ro.s,t),r=ta(ki.l,ro.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zt=new Ke;Ke.NAMES=gf;la=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ke(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},ca=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},vs=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gn=new D,Si=new D,Oc=new D,Ei=new D,Ws=new D,Xs=new D,ld=new D,Bc=new D,zc=new D,kc=new D,Vc=new wt,Gc=new wt,Hc=new wt,Wi=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Gn.subVectors(e,t),s.cross(Gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Gn.subVectors(s,t),Si.subVectors(i,t),Oc.subVectors(e,t);let a=Gn.dot(Gn),o=Gn.dot(Si),l=Gn.dot(Oc),c=Si.dot(Si),d=Si.dot(Oc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let h=1/u,f=(c*l-o*d)*h,p=(a*d-o*l)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Vc.setScalar(0),Gc.setScalar(0),Hc.setScalar(0),Vc.fromBufferAttribute(e,t),Gc.fromBufferAttribute(e,i),Hc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Vc,r.x),a.addScaledVector(Gc,r.y),a.addScaledVector(Hc,r.z),a}static isFrontFacing(e,t,i,s){return Gn.subVectors(i,t),Si.subVectors(e,t),Gn.cross(Si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Gn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Ws.subVectors(s,i),Xs.subVectors(r,i),Bc.subVectors(e,i);let l=Ws.dot(Bc),c=Xs.dot(Bc);if(l<=0&&c<=0)return t.copy(i);zc.subVectors(e,s);let d=Ws.dot(zc),u=Xs.dot(zc);if(d>=0&&u<=d)return t.copy(s);let h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(i).addScaledVector(Ws,a);kc.subVectors(e,r);let f=Ws.dot(kc),p=Xs.dot(kc);if(p>=0&&f<=p)return t.copy(r);let M=f*c-l*p;if(M<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(Xs,o);let g=d*p-f*u;if(g<=0&&u-d>=0&&f-p>=0)return ld.subVectors(r,s),o=(u-d)/(u-d+(f-p)),t.copy(s).addScaledVector(ld,o);let m=1/(g+M+h);return a=M*m,o=h*m,t.copy(i).addScaledVector(Ws,a).addScaledVector(Xs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ci=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ao.copy(i.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),oo.subVectors(this.max,Yr),qs.subVectors(e.a,Yr),$s.subVectors(e.b,Yr),Ys.subVectors(e.c,Yr),Vi.subVectors($s,qs),Gi.subVectors(Ys,$s),fs.subVectors(qs,Ys);let t=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-fs.z,fs.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,fs.z,0,-fs.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-fs.y,fs.x,0];return!Wc(t,qs,$s,Ys,oo)||(t=[1,0,0,0,1,0,0,0,1],!Wc(t,qs,$s,Ys,oo))?!1:(lo.crossVectors(Vi,Gi),t=[lo.x,lo.y,lo.z],Wc(t,qs,$s,Ys,oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ti=[new D,new D,new D,new D,new D,new D,new D,new D],Hn=new D,ao=new ci,qs=new D,$s=new D,Ys=new D,Vi=new D,Gi=new D,fs=new D,Yr=new D,oo=new D,lo=new D,ps=new D;Ut=new D,co=new pe,Tm=0,rn=class extends Xn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hf,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=tr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},ua=class extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}},ha=class extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}},ct=class extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}},wm=new ci,Zr=new D,Xc=new D,Ri=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):wm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);let t=Zr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Zr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(Xc)),this.expandByPoint(Zr.copy(e.center).sub(Xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Am=0,Dn=new mt,qc=new It,Zs=new D,yn=new ci,Jr=new ci,kt=new D,Pt=class n extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kp(e)?ha:ua)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return qc.lookAt(e),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ct(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Jr.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(yn.min,Jr.min),yn.expandByPoint(kt),kt.addVectors(yn.max,Jr.max),yn.expandByPoint(kt)):(yn.expandByPoint(Jr.min),yn.expandByPoint(Jr.max))}yn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)kt.fromBufferAttribute(o,c),l&&(Zs.fromBufferAttribute(e,c),kt.add(Zs)),s=Math.max(s,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new rn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new D,l[_]=new D;let c=new D,d=new D,u=new D,h=new pe,f=new pe,p=new pe,M=new D,g=new D;function m(_,E,R){c.fromBufferAttribute(i,_),d.fromBufferAttribute(i,E),u.fromBufferAttribute(i,R),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),d.sub(c),u.sub(c),f.sub(h),p.sub(h);let N=1/(f.x*p.y-p.x*f.y);isFinite(N)&&(M.copy(d).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(N),g.copy(u).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(N),o[_].add(M),o[E].add(M),o[R].add(M),l[_].add(g),l[E].add(g),l[R].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let _=0,E=S.length;_<E;++_){let R=S[_],N=R.start,P=R.count;for(let z=N,L=N+P;z<L;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let w=new D,v=new D,T=new D,y=new D;function C(_){T.fromBufferAttribute(s,_),y.copy(T);let E=o[_];w.copy(E),w.sub(T.multiplyScalar(T.dot(E))).normalize(),v.crossVectors(y,E);let N=v.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,N)}for(let _=0,E=S.length;_<E;++_){let R=S[_],N=R.start,P=R.count;for(let z=N,L=N+P;z<L;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,d=new D,u=new D;if(e)for(let h=0,f=e.count;h<f;h+=3){let p=e.getX(h+0),M=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,g),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d),f=0,p=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*d;for(let m=0;m<d;m++)h[p++]=c[f++]}return new rn(h,d,u)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){let h=c[d],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){let f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],u=r[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,d=a.length;c<d;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},$c=new D,Cm=new D,Rm=new je,bn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=$c.subVectors(i,t).cross(Cm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta($c),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Rm.getNormalMatrix(e),s=this.coplanarPoint($c).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Im=0,Ii=class extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=Er,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_u,this.blendDst=xu,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ro,this.stencilZFail=Ro,this.stencilZPass=Ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new bn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new pe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},wi=new D,Yc=new D,uo=new D,ho=new D,Xi=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Yc.copy(e).add(t).multiplyScalar(.5),uo.copy(t).sub(e).normalize(),ho.copy(this.origin).sub(Yc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(uo),o=ho.dot(this.direction),l=-ho.dot(uo),c=ho.lengthSq(),d=Math.abs(1-a*a),u,h,f,p;if(d>0)if(u=a*l-o,h=a*o-l,p=r*d,u>=0)if(h>=-p)if(h<=p){let M=1/d;u*=M,h*=M,f=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h<=-p?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c):h<=p?(u=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Yc).addScaledVector(uo,h),f}intersectSphere(e,t){if(e.radius<0)return null;wi.subVectors(e.center,this.origin);let i=wi.dot(this.direction),s=wi.dot(wi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,u=e.x-a.x,h=e.y-a.y,f=e.z-a.z,p=t.x-a.x,M=t.y-a.y,g=t.z-a.z,m=i.x-a.x,S=i.y-a.y,w=i.z-a.z,v=Math.abs(l),T=Math.abs(c),y=Math.abs(d),C,_,E,R,N,P,z,L,k,Z,J,he;if(v>=T&&v>=y?(E=l,P=u,k=p,he=m,l>=0?(C=c,_=d,R=h,N=f,z=M,L=g,Z=S,J=w):(C=d,_=c,R=f,N=h,z=g,L=M,Z=w,J=S)):T>=y?(E=c,P=h,k=M,he=S,c>=0?(C=d,_=l,R=f,N=u,z=g,L=p,Z=w,J=m):(C=l,_=d,R=u,N=f,z=p,L=g,Z=m,J=w)):(E=d,P=f,k=g,he=w,d>=0?(C=l,_=c,R=u,N=h,z=p,L=M,Z=m,J=S):(C=c,_=l,R=h,N=u,z=M,L=p,Z=S,J=m)),E===0)return null;let K=C/E,ce=_/E,ue=1/E,Le=R-K*P,Ce=N-ce*P,ot=z-K*k,Qe=L-ce*k,tt=Z-K*he,Q=J-ce*he,ie=tt*Qe-Q*ot,ye=Le*Q-Ce*tt,Xe=ot*Ce-Qe*Le;if(s){if(ie<0||ye<0||Xe<0)return null}else if((ie<0||ye<0||Xe<0)&&(ie>0||ye>0||Xe>0))return null;let Ae=ie+ye+Xe;if(Ae===0)return null;let He=ue*(ie*P+ye*k+Xe*he);return(Ae>0?He<0:He>0)?null:this.at(He/Ae,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Nn=class extends Ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},cd=new mt,ms=new Xi,fo=new Ri,ud=new D,po=new D,mo=new D,go=new D,Zc=new D,_o=new D,hd=new D,xo=new D,Ht=class extends It{constructor(e=new Pt,t=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){_o.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],u=r[l];d!==0&&(Zc.fromBufferAttribute(u,e),a?_o.addScaledVector(Zc,d):_o.addScaledVector(Zc.sub(t),d))}t.add(_o)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(r),ms.copy(e.ray).recast(e.near),!(fo.containsPoint(ms.origin)===!1&&(ms.intersectSphere(fo,ud)===null||ms.origin.distanceToSquared(ud)>(e.far-e.near)**2))&&(cd.copy(r).invert(),ms.copy(e.ray).applyMatrix4(cd),!(i.boundingBox!==null&&ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,M=h.length;p<M;p++){let g=h[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),w=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=S,T=w;v<T;v+=3){let y=o.getX(v),C=o.getX(v+1),_=o.getX(v+2);s=vo(this,m,e,i,c,d,u,y,C,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let g=p,m=M;g<m;g+=3){let S=o.getX(g),w=o.getX(g+1),v=o.getX(g+2);s=vo(this,a,e,i,c,d,u,S,w,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,M=h.length;p<M;p++){let g=h[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=S,T=w;v<T;v+=3){let y=v,C=v+1,_=v+2;s=vo(this,m,e,i,c,d,u,y,C,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let g=p,m=M;g<m;g+=3){let S=g,w=g+1,v=g+2;s=vo(this,a,e,i,c,d,u,S,w,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};da=class extends Jt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Gt,d=Gt,u,h){super(null,a,o,l,c,d,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},dr=class extends rn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Js=new mt,dd=new mt,yo=[],fd=new ci,Lm=new mt,Kr=new Ht,jr=new Ri,Un=class extends Ht{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new dr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Lm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Js),fd.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(fd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Js),jr.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Kr.geometry=this.geometry,Kr.material=this.material,Kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(i),e.ray.intersectsSphere(jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Js),dd.multiplyMatrices(i,Js),Kr.matrixWorld=dd,Kr.raycast(e,yo);for(let a=0,o=yo.length;a<o;a++){let l=yo[a];l.instanceId=r,l.object=this,t.push(l)}yo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new dr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new da(new Float32Array(s*this.count),s,this.count,xl,On));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gs=new Ri,Dm=new pe(.5,.5),bo=new D,fr=class{constructor(e=new bn,t=new bn,i=new bn,s=new bn,r=new bn,a=new bn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],f=r[7],p=r[8],M=r[9],g=r[10],m=r[11],S=r[12],w=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-a,f-d,m-p,T-S).normalize(),s[1].setComponents(c+a,f+d,m+p,T+S).normalize(),s[2].setComponents(c+o,f+u,m+M,T+w).normalize(),s[3].setComponents(c-o,f-u,m-M,T-w).normalize(),i)s[4].setComponents(l,h,g,v).normalize(),s[5].setComponents(c-l,f-h,m-g,T-v).normalize();else if(s[4].setComponents(c-l,f-h,m-g,T-v).normalize(),t===Wn)s[5].setComponents(c+l,f+h,m+g,T+v).normalize();else if(t===rr)s[5].setComponents(l,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){gs.center.set(0,0,0);let t=Dm.distanceTo(e.center);return gs.radius=.7071067811865476+t,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(bo.x=s.normal.x>0?e.max.x:e.min.x,bo.y=s.normal.y>0?e.max.y:e.min.y,bo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},pr=class extends Ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},pd=new mt,ru=new Xi,Mo=new Ri,So=new D,fa=class extends It{constructor(e=new Pt,t=new pr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(s),Mo.radius+=r,e.ray.intersectsSphere(Mo)===!1)return;pd.copy(s).invert(),ru.copy(e.ray).applyMatrix4(pd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=h,M=f;p<M;p++){let g=c.getX(p);So.fromBufferAttribute(u,g),md(So,g,l,s,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=h,M=f;p<M;p++)So.fromBufferAttribute(u,p),md(So,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};pa=class extends Jt{constructor(e=[],t=is,i,s,r,a,o,l,c,d){super(e,t,i,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ma=class extends Jt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},qi=class extends Jt{constructor(e,t,i=Zn,s,r,a,o=Gt,l=Gt,c,d=li,u=1){if(d!==li&&d!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:u};super(h,s,r,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ho=class extends qi{constructor(e,t=Zn,i=is,s,r,a=Gt,o=Gt,l,c=li){let d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ga=class extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},qn=class n extends Pt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],u=[],h=0,f=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(u,2));function p(M,g,m,S,w,v,T,y,C,_,E){let R=v/C,N=T/_,P=v/2,z=T/2,L=y/2,k=C+1,Z=_+1,J=0,he=0,K=new D;for(let ce=0;ce<Z;ce++){let ue=ce*N-z;for(let Le=0;Le<k;Le++){let Ce=Le*R-P;K[M]=Ce*S,K[g]=ue*w,K[m]=L,c.push(K.x,K.y,K.z),K[M]=0,K[g]=0,K[m]=y>0?1:-1,d.push(K.x,K.y,K.z),u.push(Le/C),u.push(1-ce/_),J+=1}}for(let ce=0;ce<_;ce++)for(let ue=0;ue<C;ue++){let Le=h+ue+k*ce,Ce=h+ue+k*(ce+1),ot=h+(ue+1)+k*(ce+1),Qe=h+(ue+1)+k*ce;l.push(Le,Ce,Qe),l.push(Ce,ot,Qe),he+=6}o.addGroup(f,he,E),f+=he,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ys=class n extends Pt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],d=t/2,u=Math.PI/2*e,h=t,f=2*u+h,p=i*2+r,M=s+1,g=new D,m=new D;for(let S=0;S<=p;S++){let w=0,v=0,T=0,y=0;if(S<=i){let E=S/i,R=E*Math.PI/2;v=-d-e*Math.cos(R),T=e*Math.sin(R),y=-e*Math.cos(R),w=E*u}else if(S<=i+r){let E=(S-i)/r;v=-d+E*t,T=e,y=0,w=u+E*h}else{let E=(S-i-r)/i,R=E*Math.PI/2;v=d+e*Math.sin(R),T=e*Math.cos(R),y=e*Math.sin(R),w=u+h+E*u}let C=Math.max(0,Math.min(1,w/f)),_=0;S===0?_=.5/s:S===p&&(_=-.5/s);for(let E=0;E<=s;E++){let R=E/s,N=R*Math.PI*2,P=Math.sin(N),z=Math.cos(N);m.x=-T*z,m.y=v,m.z=T*P,o.push(m.x,m.y,m.z),g.set(-T*z,y,T*P),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+_,C)}if(S>0){let E=(S-1)*M;for(let R=0;R<s;R++){let N=E+R,P=E+R+1,z=S*M+R,L=S*M+R+1;a.push(N,P,z),a.push(P,L,z)}}}this.setIndex(a),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},$n=class n extends Pt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],u=[],h=[],f=[],p=0,M=[],g=i/2,m=0;S(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(d),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(f,2));function S(){let v=new D,T=new D,y=0,C=(t-e)/i;for(let _=0;_<=r;_++){let E=[],R=_/r,N=R*(t-e)+e;for(let P=0;P<=s;P++){let z=P/s,L=z*l+o,k=Math.sin(L),Z=Math.cos(L);T.x=N*k,T.y=-R*i+g,T.z=N*Z,u.push(T.x,T.y,T.z),v.set(k,C,Z).normalize(),h.push(v.x,v.y,v.z),f.push(z,1-R),E.push(p++)}M.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){let R=M[E][_],N=M[E+1][_],P=M[E+1][_+1],z=M[E][_+1];(e>0||E!==0)&&(d.push(R,N,z),y+=3),(t>0||E!==r-1)&&(d.push(N,P,z),y+=3)}c.addGroup(m,y,0),m+=y}function w(v){let T=p,y=new pe,C=new D,_=0,E=v===!0?e:t,R=v===!0?1:-1;for(let P=1;P<=s;P++)u.push(0,g*R,0),h.push(0,R,0),f.push(.5,.5),p++;let N=p;for(let P=0;P<=s;P++){let L=P/s*l+o,k=Math.cos(L),Z=Math.sin(L);C.x=E*Z,C.y=g*R,C.z=E*k,u.push(C.x,C.y,C.z),h.push(0,R,0),y.x=k*.5+.5,y.y=Z*.5*R+.5,f.push(y.x,y.y),p++}for(let P=0;P<s;P++){let z=T+P,L=N+P;v===!0?d.push(L,L+1,z):d.push(L+1,L,z),_+=3}c.addGroup(m,_,v===!0?1:2),m+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wo=class n extends Pt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),d(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let w=new D,v=new D,T=new D;for(let y=0;y<t.length;y+=3)f(t[y+0],w),f(t[y+1],v),f(t[y+2],T),l(w,v,T,S)}function l(S,w,v,T){let y=T+1,C=[];for(let _=0;_<=y;_++){C[_]=[];let E=S.clone().lerp(v,_/y),R=w.clone().lerp(v,_/y),N=y-_;for(let P=0;P<=N;P++)P===0&&_===y?C[_][P]=E:C[_][P]=E.clone().lerp(R,P/N)}for(let _=0;_<y;_++)for(let E=0;E<2*(y-_)-1;E++){let R=Math.floor(E/2);E%2===0?(h(C[_][R+1]),h(C[_+1][R]),h(C[_][R])):(h(C[_][R+1]),h(C[_+1][R+1]),h(C[_+1][R]))}}function c(S){let w=new D;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(S),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function d(){let S=new D;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];let v=g(S)/2/Math.PI+.5,T=m(S)/Math.PI+.5;a.push(v,1-T)}p(),u()}function u(){for(let S=0;S<a.length;S+=6){let w=a[S+0],v=a[S+2],T=a[S+4],y=Math.max(w,v,T),C=Math.min(w,v,T);y>.9&&C<.1&&(w<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),T<.2&&(a[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function f(S,w){let v=S*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function p(){let S=new D,w=new D,v=new D,T=new D,y=new pe,C=new pe,_=new pe;for(let E=0,R=0;E<r.length;E+=9,R+=6){S.set(r[E+0],r[E+1],r[E+2]),w.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),y.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),_.set(a[R+4],a[R+5]),T.copy(S).add(w).add(v).divideScalar(3);let N=g(T);M(y,R+0,S,N),M(C,R+2,w,N),M(_,R+4,v,N)}}function M(S,w,v,T){T<0&&S.x===1&&(a[w]=S.x-1),v.x===0&&v.z===0&&(a[w]=T/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let d=i[s],h=i[s+1]-d,f=(a-d)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new pe:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new D,s=[],r=[],a=[],o=new D,l=new mt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),u=Math.abs(s[0].y),h=Math.abs(s[0].z);d<=c&&(c=d,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(it(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(it(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},mr=class extends Mn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new pe){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*d-f*u+this.aX,c=h*u+f*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Xo=class extends mr{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};gd=new D,_d=new D,Jc=new Ou,Kc=new Ou,jc=new Ou,Pi=class extends Mn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new D){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=s[(o-1)%r]:(_d.subVectors(s[0],s[1]).add(s[0]),c=_d);let u=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(gd.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=gd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),M=Math.pow(u.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f);M<1e-4&&(M=1),p<1e-4&&(p=M),g<1e-4&&(g=M),Jc.initNonuniformCatmullRom(c.x,u.x,h.x,d.x,p,M,g),Kc.initNonuniformCatmullRom(c.y,u.y,h.y,d.y,p,M,g),jc.initNonuniformCatmullRom(c.z,u.z,h.z,d.z,p,M,g)}else this.curveType==="catmullrom"&&(Jc.initCatmullRom(c.x,u.x,h.x,d.x,this.tension),Kc.initCatmullRom(c.y,u.y,h.y,d.y,this.tension),jc.initCatmullRom(c.z,u.z,h.z,d.z,this.tension));return i.set(Jc.calc(l),Kc.calc(l),jc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};_a=class extends Mn{constructor(e=new pe,t=new pe,i=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new pe){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ia(e,s.x,r.x,a.x,o.x),ia(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qo=class extends Mn{constructor(e=new D,t=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ia(e,s.x,r.x,a.x,o.x),ia(e,s.y,r.y,a.y,o.y),ia(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xa=class extends Mn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$o=class extends Mn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},va=class extends Mn{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(na(e,s.x,r.x,a.x),na(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends Mn{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(na(e,s.x,r.x,a.x),na(e,s.y,r.y,a.y),na(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends Mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(xd(o,l.x,c.x,d.x,u.x),xd(o,l.y,c.y,d.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new pe().fromArray(s))}return this}},Yo=Object.freeze({__proto__:null,ArcCurve:Xo,CatmullRomCurve3:Pi,CubicBezierCurve:_a,CubicBezierCurve3:qo,EllipseCurve:mr,LineCurve:xa,LineCurve3:$o,QuadraticBezierCurve:va,QuadraticBezierCurve3:ya,SplineCurve:ba}),Zo=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let d=l[c];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Yo[s.type]().fromJSON(s))}return this}},Ma=class extends Zo{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new xa(this.currentPoint.clone(),new pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new va(this.currentPoint.clone(),new pe(e,t),new pe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new _a(this.currentPoint.clone(),new pe(e,t),new pe(i,s),new pe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ba(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new mr(e,t,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},bs=class extends Ma{constructor(e){super(e),this.uuid=Rs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Ma().fromJSON(s))}return this}};lu=class{static triangulate(e,t,i=2){return Vm(e,t,i)}},_s=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];yd(e),bd(i,e);let a=e.length;t.forEach(yd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,bd(i,t[l]);let o=lu.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};_r=class n extends Pt{constructor(e=new bs([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ct(s,3)),this.setAttribute("uv",new ct(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:sg,w,v=!1,T,y,C,_;if(m){w=m.getSpacedPoints(d),v=!0,h=!1;let G=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(d,G),y=new D,C=new D,_=new D}h||(g=0,f=0,p=0,M=0);let E=o.extractPoints(c),R=E.shape,N=E.holes;if(!_s.isClockWise(R)){R=R.reverse();for(let G=0,W=N.length;G<W;G++){let j=N[G];_s.isClockWise(j)&&(N[G]=j.reverse())}}function z(G){let j=10000000000000001e-36,ae=G[0];for(let fe=1;fe<=G.length;fe++){let Ue=fe%G.length,Ie=G[Ue],Fe=Ie.x-ae.x,Ve=Ie.y-ae.y,I=Fe*Fe+Ve*Ve,Ze=Math.max(Math.abs(Ie.x),Math.abs(Ie.y),Math.abs(ae.x),Math.abs(ae.y)),qe=j*Ze*Ze;if(I<=qe){G.splice(Ue,1),fe--;continue}ae=Ie}}z(R),N.forEach(z);let L=N.length,k=R;for(let G=0;G<L;G++){let W=N[G];R=R.concat(W)}function Z(G,W,j){return W||Ye("ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(W,j)}let J=R.length;function he(G,W,j){let ae,fe,Ue,Ie=G.x-W.x,Fe=G.y-W.y,Ve=j.x-G.x,I=j.y-G.y,Ze=Ie*Ie+Fe*Fe,qe=Ie*I-Fe*Ve;if(Math.abs(qe)>Number.EPSILON){let A=Math.sqrt(Ze),x=Math.sqrt(Ve*Ve+I*I),H=W.x-Fe/A,$=W.y+Ie/A,ee=j.x-I/x,ge=j.y+Ve/x,_e=((ee-H)*I-(ge-$)*Ve)/(Ie*I-Fe*Ve);ae=H+Ie*_e-G.x,fe=$+Fe*_e-G.y;let te=ae*ae+fe*fe;if(te<=2)return new pe(ae,fe);Ue=Math.sqrt(te/2)}else{let A=!1;Ie>Number.EPSILON?Ve>Number.EPSILON&&(A=!0):Ie<-Number.EPSILON?Ve<-Number.EPSILON&&(A=!0):Math.sign(Fe)===Math.sign(I)&&(A=!0),A?(ae=-Fe,fe=Ie,Ue=Math.sqrt(Ze)):(ae=Ie,fe=Fe,Ue=Math.sqrt(Ze/2))}return new pe(ae/Ue,fe/Ue)}let K=[];for(let G=0,W=k.length,j=W-1,ae=G+1;G<W;G++,j++,ae++)j===W&&(j=0),ae===W&&(ae=0),K[G]=he(k[G],k[j],k[ae]);let ce=[],ue,Le=K.concat();for(let G=0,W=L;G<W;G++){let j=N[G];ue=[];for(let ae=0,fe=j.length,Ue=fe-1,Ie=ae+1;ae<fe;ae++,Ue++,Ie++)Ue===fe&&(Ue=0),Ie===fe&&(Ie=0),ue[ae]=he(j[ae],j[Ue],j[Ie]);ce.push(ue),Le=Le.concat(ue)}let Ce;if(g===0)Ce=_s.triangulateShape(k,N);else{let G=[],W=[];for(let j=0;j<g;j++){let ae=j/g,fe=f*Math.cos(ae*Math.PI/2),Ue=p*Math.sin(ae*Math.PI/2)+M;for(let Ie=0,Fe=k.length;Ie<Fe;Ie++){let Ve=Z(k[Ie],K[Ie],Ue);ye(Ve.x,Ve.y,-fe),ae===0&&G.push(Ve)}for(let Ie=0,Fe=L;Ie<Fe;Ie++){let Ve=N[Ie];ue=ce[Ie];let I=[];for(let Ze=0,qe=Ve.length;Ze<qe;Ze++){let A=Z(Ve[Ze],ue[Ze],Ue);ye(A.x,A.y,-fe),ae===0&&I.push(A)}ae===0&&W.push(I)}}Ce=_s.triangulateShape(G,W)}let ot=Ce.length,Qe=p+M;for(let G=0;G<J;G++){let W=h?Z(R[G],Le[G],Qe):R[G];v?(C.copy(T.normals[0]).multiplyScalar(W.x),y.copy(T.binormals[0]).multiplyScalar(W.y),_.copy(w[0]).add(C).add(y),ye(_.x,_.y,_.z)):ye(W.x,W.y,0)}for(let G=1;G<=d;G++)for(let W=0;W<J;W++){let j=h?Z(R[W],Le[W],Qe):R[W];v?(C.copy(T.normals[G]).multiplyScalar(j.x),y.copy(T.binormals[G]).multiplyScalar(j.y),_.copy(w[G]).add(C).add(y),ye(_.x,_.y,_.z)):ye(j.x,j.y,u/d*G)}for(let G=g-1;G>=0;G--){let W=G/g,j=f*Math.cos(W*Math.PI/2),ae=p*Math.sin(W*Math.PI/2)+M;for(let fe=0,Ue=k.length;fe<Ue;fe++){let Ie=Z(k[fe],K[fe],ae);ye(Ie.x,Ie.y,u+j)}for(let fe=0,Ue=N.length;fe<Ue;fe++){let Ie=N[fe];ue=ce[fe];for(let Fe=0,Ve=Ie.length;Fe<Ve;Fe++){let I=Z(Ie[Fe],ue[Fe],ae);v?ye(I.x,I.y+w[d-1].y,w[d-1].x+j):ye(I.x,I.y,u+j)}}}tt(),Q();function tt(){let G=s.length/3;if(h){let W=0,j=J*W;for(let ae=0;ae<ot;ae++){let fe=Ce[ae];Xe(fe[2]+j,fe[1]+j,fe[0]+j)}W=d+g*2,j=J*W;for(let ae=0;ae<ot;ae++){let fe=Ce[ae];Xe(fe[0]+j,fe[1]+j,fe[2]+j)}}else{for(let W=0;W<ot;W++){let j=Ce[W];Xe(j[2],j[1],j[0])}for(let W=0;W<ot;W++){let j=Ce[W];Xe(j[0]+J*d,j[1]+J*d,j[2]+J*d)}}i.addGroup(G,s.length/3-G,0)}function Q(){let G=s.length/3,W=0;ie(k,W),W+=k.length;for(let j=0,ae=N.length;j<ae;j++){let fe=N[j];ie(fe,W),W+=fe.length}i.addGroup(G,s.length/3-G,1)}function ie(G,W){let j=G.length;for(;--j>=0;){let ae=j,fe=j-1;fe<0&&(fe=G.length-1);for(let Ue=0,Ie=d+g*2;Ue<Ie;Ue++){let Fe=J*Ue,Ve=J*(Ue+1),I=W+ae+Fe,Ze=W+fe+Fe,qe=W+fe+Ve,A=W+ae+Ve;Ae(I,Ze,qe,A)}}}function ye(G,W,j){l.push(G),l.push(W),l.push(j)}function Xe(G,W,j){He(G),He(W),He(j);let ae=s.length/3,fe=S.generateTopUV(i,s,ae-3,ae-2,ae-1);re(fe[0]),re(fe[1]),re(fe[2])}function Ae(G,W,j,ae){He(G),He(W),He(ae),He(W),He(j),He(ae);let fe=s.length/3,Ue=S.generateSideWallUV(i,s,fe-6,fe-3,fe-2,fe-1);re(Ue[0]),re(Ue[1]),re(Ue[3]),re(Ue[1]),re(Ue[2]),re(Ue[3])}function He(G){s.push(l[G*3+0]),s.push(l[G*3+1]),s.push(l[G*3+2])}function re(G){r.push(G.x),r.push(G.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return rg(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Yo[s.type]().fromJSON(s)),new n(i,e.options)}},sg={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],d=e[s*3+1];return[new pe(r,a),new pe(o,l),new pe(c,d)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],d=e[i*3+1],u=e[i*3+2],h=e[s*3],f=e[s*3+1],p=e[s*3+2],M=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-d)<Math.abs(a-c)?[new pe(a,1-l),new pe(c,1-u),new pe(h,1-p),new pe(M,1-m)]:[new pe(o,1-l),new pe(d,1-u),new pe(f,1-p),new pe(g,1-m)]}};Ss=class n extends Wo{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},$i=class n extends Pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,d=l+1,u=e/o,h=t/l,f=[],p=[],M=[],g=[];for(let m=0;m<d;m++){let S=m*h-a;for(let w=0;w<c;w++){let v=w*u-r;p.push(v,-S,0),M.push(0,0,1),g.push(w/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){let w=S+c*m,v=S+c*(m+1),T=S+1+c*(m+1),y=S+1+c*m;f.push(w,v,y),f.push(v,T,y)}this.setIndex(f),this.setAttribute("position",new ct(p,3)),this.setAttribute("normal",new ct(M,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Li=class n extends Pt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,d=[],u=new D,h=new D,f=[],p=[],M=[],g=[];for(let m=0;m<=i;m++){let S=[],w=m/i,v=a+w*o,T=e*Math.cos(v),y=Math.sqrt(e*e-T*T),C=0;m===0&&a===0?C=.5/t:m===i&&l===Math.PI&&(C=-.5/t);for(let _=0;_<=t;_++){let E=_/t,R=s+E*r;u.x=-y*Math.cos(R),u.y=T,u.z=y*Math.sin(R),p.push(u.x,u.y,u.z),h.copy(u).normalize(),M.push(h.x,h.y,h.z),g.push(E+C,1-w),S.push(c++)}d.push(S)}for(let m=0;m<i;m++)for(let S=0;S<t;S++){let w=d[m][S+1],v=d[m][S],T=d[m+1][S],y=d[m+1][S+1];(m!==0||a>0)&&f.push(w,v,y),(m!==i-1||l<Math.PI)&&f.push(v,T,y)}this.setIndex(f),this.setAttribute("position",new ct(p,3)),this.setAttribute("normal",new ct(M,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Sn=class n extends Pt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],d=[],u=[],h=new D,f=new D,p=new D;for(let M=0;M<=i;M++){let g=a+M/i*o;for(let m=0;m<=s;m++){let S=m/s*r;f.x=(e+t*Math.cos(g))*Math.cos(S),f.y=(e+t*Math.cos(g))*Math.sin(S),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),p.subVectors(f,h).normalize(),d.push(p.x,p.y,p.z),u.push(m/s),u.push(M/i)}}for(let M=1;M<=i;M++)for(let g=1;g<=s;g++){let m=(s+1)*M+g-1,S=(s+1)*(M-1)+g-1,w=(s+1)*(M-1)+g,v=(s+1)*M+g;l.push(m,S,v),l.push(S,w,v)}this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},Yi=class n extends Pt{constructor(e=new ya(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,l=new D,c=new pe,d=new D,u=[],h=[],f=[],p=[];M(),this.setIndex(p),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(f,2));function M(){for(let w=0;w<t;w++)g(w);g(r===!1?t:0),S(),m()}function g(w){d=e.getPointAt(w/t,d);let v=a.normals[w],T=a.binormals[w];for(let y=0;y<=s;y++){let C=y/s*Math.PI*2,_=Math.sin(C),E=-Math.cos(C);l.x=E*v.x+_*T.x,l.y=E*v.y+_*T.y,l.z=E*v.z+_*T.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=d.x+i*l.x,o.y=d.y+i*l.y,o.z=d.z+i*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let w=1;w<=t;w++)for(let v=1;v<=s;v++){let T=(s+1)*(w-1)+(v-1),y=(s+1)*w+(v-1),C=(s+1)*w+v,_=(s+1)*(w-1)+v;p.push(T,y,_),p.push(y,C,_)}}function S(){for(let w=0;w<=t;w++)for(let v=0;v<=s;v++)c.x=w/t,c.y=v/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Yo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};bf={clone:Is,merge:Kt},og=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends Ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=og,this.fragmentShader=lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=ag(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ke().setHex(s.value);break;case"v2":this.uniforms[i].value=new pe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new je().fromArray(s.value);break;case"m4":this.uniforms[i].value=new mt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Jo=class extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Tn=class extends Ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xr=class extends Tn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ko=class extends Ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jo=class extends Ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Zi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qo=class extends Zi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nu,endingEnd:nu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case iu:r=e,o=2*t-i;break;case su:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case iu:a=e,l=2*i-t;break;case su:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),M=p*p,g=M*p,m=-h*g+2*h*M-h*p,S=(1+h)*g+(-1.5-2*h)*M+(-.5+h)*p+1,w=(-1-f)*g+(1.5+f)*M+.5*p,v=f*g-f*M;for(let T=0;T!==o;++T)r[T]=m*a[d+T]+S*a[c+T]+w*a[l+T]+v*a[u+T];return r}},el=class extends Zi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(i-t)/(s-t),u=1-d;for(let h=0;h!==o;++h)r[h]=a[c+h]*u+a[l+h]*d;return r}},tl=class extends Zi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},nl=class extends Zi{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this.inTangents,u=this.outTangents;if(!d||!u){let p=(i-t)/(s-t),M=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*M+a[l+g]*p;return r}let h=o*2,f=e-1;for(let p=0;p!==o;++p){let M=a[c+p],g=a[l+p],m=f*h+p*2,S=u[m],w=u[m+1],v=e*h+p*2,T=d[v],y=d[v+1],C=ug(i,t,S,T,s);r[p]=Mf(C,M,w,y,g)}return r}};wn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ks(t,this.TimeBufferType),this.values=Ks(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ks(e.times,Array),values:Ks(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Qc(e.settings)&&(i.settings={inTangents:Ks(e.settings.inTangents,Array),outTangents:Ks(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new el(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new nl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case sa:t=this.InterpolantFactoryMethodDiscrete;break;case zo:t=this.InterpolantFactoryMethodLinear;break;case Co:t=this.InterpolantFactoryMethodSmooth;break;case tu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return $e("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sa;case this.InterpolantFactoryMethodLinear:return zo;case this.InterpolantFactoryMethodSmooth:return Co;case this.InterpolantFactoryMethodBezier:return tu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Qc(this.settings)&&(Sd(this.settings.inTangents,e),Sd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ye("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ye("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&jp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ye("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Co,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,h=u-i,f=u+i;for(let p=0;p!==i;++p){let M=t[u+p];if(M!==t[h+p]||M!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,h=a*i;for(let f=0;f!==i;++f)t[h+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Qc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=zo;Ji=class extends wn{constructor(e,t,i){super(e,t,i)}};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=sa;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;il=class extends wn{constructor(e,t,i,s){super(e,t,i,s)}};il.prototype.ValueTypeName="color";sl=class extends wn{constructor(e,t,i,s){super(e,t,i,s)}};sl.prototype.ValueTypeName="number";rl=class extends Zi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let d=c+o;c!==d;c+=4)an.slerpFlat(r,0,a,c-o,a,c,l);return r}},wa=class extends wn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new rl(this.times,this.values,this.getValueSize(),e)}};wa.prototype.ValueTypeName="quaternion";wa.prototype.InterpolantFactoryMethodSmooth=void 0;Ki=class extends wn{constructor(e,t,i){super(e,t,i)}};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=sa;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;al=class extends wn{constructor(e,t,i,s){super(e,t,i,s)}};al.prototype.ValueTypeName="vector";Io={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Ed(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Ed(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};ol=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sf=new ol,vr=class{constructor(e){this.manager=e!==void 0?e:Sf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};vr.DEFAULT_MATERIAL_NAME="__DEFAULT";js=new WeakMap,ll=class extends vr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Io.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=js.get(a);u===void 0&&(u=[],js.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=ar("img");function l(){d(),t&&t(this);let u=js.get(this)||[];for(let h=0;h<u.length;h++){let f=u[h];f.onLoad&&f.onLoad(this)}js.delete(this),r.manager.itemEnd(e)}function c(u){d(),s&&s(u),Io.remove(`image:${e}`);let h=js.get(this)||[];for(let f=0;f<h.length;f++){let p=h[f];p.onError&&p.onError(u)}js.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Io.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}},Aa=class extends vr{constructor(e){super(e)}load(e,t,i,s){let r=new Jt,a=new ll(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},yr=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Es=class extends yr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},eu=new mt,Td=new D,wd=new D,Ca=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Td.setFromMatrixPosition(e.matrixWorld),t.position.copy(Td),wd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){eu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(eu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===rr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(eu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wo=new D,Ao=new an,ai=new D,Ra=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wo,Ao,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wo,Ao,ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(wo,Ao,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wo,Ao,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hi=new D,Ad=new pe,Cd=new pe,Ft=class extends Ra{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,Ad,Cd),t.subVectors(Cd,Ad)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ea*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},cu=class extends Ca{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0}},Ia=class extends yr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new cu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},br=class extends Ra{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},uu=class extends Ca{constructor(){super(new br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ji=class extends yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new uu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Qs=-90,er=1,cl=class extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ft(Qs,er,e,t);s.layers=this.layers,this.add(s);let r=new Ft(Qs,er,e,t);r.layers=this.layers,this.add(r);let a=new Ft(Qs,er,e,t);a.layers=this.layers,this.add(a);let o=new Ft(Qs,er,e,t);o.layers=this.layers,this.add(o);let l=new Ft(Qs,er,e,t);l.layers=this.layers,this.add(l);let c=new Ft(Qs,er,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},ul=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},zu="\\[\\]\\.:\\/",hg=new RegExp("["+zu+"]","g"),ku="[^"+zu+"]",dg="[^"+zu.replace("\\.","")+"]",fg=/((?:WC+[\/:])*)/.source.replace("WC",ku),pg=/(WCOD+)?/.source.replace("WCOD",dg),mg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ku),gg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ku),_g=new RegExp("^"+fg+pg+mg+gg+"$"),xg=["material","materials","bones","map"],hu=class{constructor(e,t,i){let s=i||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},St=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hg,"")}static parseTrackName(e){let t=_g.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);xg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=hu;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Zy=new Float32Array(1),Rd=new mt,Qi=class{constructor(e,t,i=0,s=1/0){this.ray=new Xi(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ur,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Rd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rd),this}intersectObject(e,t=!0,i=[]){return du(e,this,i,t),i.sort(Id),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)du(e[s],this,i,t);return i.sort(Id),i}};Mr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=it(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(it(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},qu=class qu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};qu.prototype.isMatrix2=!0;fu=qu,Pa=class extends Xn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function Xf(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function wg(n){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,u=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let d=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,d);else{u.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<u.length;f++){let p=u[h],M=u[f];M.start<=p.start+p.count+1?p.count=Math.max(p.count,M.start+M.count-p.start):(++h,u[h]=M)}u.length=h+1;for(let f=0,p=u.length;f<p;f++){let M=u[f];n.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}function lx(n,e,t,i,s,r){let a=new Ke(0),o=s===!0?0:1,l,c,d=null,u=0,h=null;function f(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let v=S.backgroundBlurriness>0;w=e.get(w,v)}return w}function p(S){let w=!1,v=f(S);v===null?g(a,o):v&&v.isColor&&(g(v,1),w=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(S,w){let v=f(w);v&&(v.isCubeTexture||v.mapping===Da)?(c===void 0&&(c=new Ht(new qn(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Is(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,y,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ox.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qf),c.material.toneMapped=lt.getTransfer(v.colorSpace)!==pt,(d!==v||u!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ht(new $i(2,2),new En({name:"BackgroundMaterial",uniforms:Is(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=lt.getTransfer(v.colorSpace)!==pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,w){S.getRGB(tc,Bu(n)),t.buffers.color.setClear(tc.r,tc.g,tc.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:p,addToRenderList:M,dispose:m}}function cx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(N,P,z,L,k){let Z=!1,J=u(N,L,z,P);r!==J&&(r=J,c(r.object)),Z=f(N,L,z,k),Z&&p(N,L,z,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,v(N,P,z,L),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function d(N){return n.deleteVertexArray(N)}function u(N,P,z,L){let k=L.wireframe===!0,Z=i[P.id];Z===void 0&&(Z={},i[P.id]=Z);let J=N.isInstancedMesh===!0?N.id:0,he=Z[J];he===void 0&&(he={},Z[J]=he);let K=he[z.id];K===void 0&&(K={},he[z.id]=K);let ce=K[k];return ce===void 0&&(ce=h(l()),K[k]=ce),ce}function h(N){let P=[],z=[],L=[];for(let k=0;k<t;k++)P[k]=0,z[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:L,object:N,attributes:{},index:null}}function f(N,P,z,L){let k=r.attributes,Z=P.attributes,J=0,he=z.getAttributes();for(let K in he)if(he[K].location>=0){let ue=k[K],Le=Z[K];if(Le===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(Le=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(Le=N.instanceColor)),ue===void 0||ue.attribute!==Le||Le&&ue.data!==Le.data)return!0;J++}return r.attributesNum!==J||r.index!==L}function p(N,P,z,L){let k={},Z=P.attributes,J=0,he=z.getAttributes();for(let K in he)if(he[K].location>=0){let ue=Z[K];ue===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(ue=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(ue=N.instanceColor));let Le={};Le.attribute=ue,ue&&ue.data&&(Le.data=ue.data),k[K]=Le,J++}r.attributes=k,r.attributesNum=J,r.index=L}function M(){let N=r.newAttributes;for(let P=0,z=N.length;P<z;P++)N[P]=0}function g(N){m(N,0)}function m(N,P){let z=r.newAttributes,L=r.enabledAttributes,k=r.attributeDivisors;z[N]=1,L[N]===0&&(n.enableVertexAttribArray(N),L[N]=1),k[N]!==P&&(n.vertexAttribDivisor(N,P),k[N]=P)}function S(){let N=r.newAttributes,P=r.enabledAttributes;for(let z=0,L=P.length;z<L;z++)P[z]!==N[z]&&(n.disableVertexAttribArray(z),P[z]=0)}function w(N,P,z,L,k,Z,J){J===!0?n.vertexAttribIPointer(N,P,z,k,Z):n.vertexAttribPointer(N,P,z,L,k,Z)}function v(N,P,z,L){M();let k=L.attributes,Z=z.getAttributes(),J=P.defaultAttributeValues;for(let he in Z){let K=Z[he];if(K.location>=0){let ce=k[he];if(ce===void 0&&(he==="instanceMatrix"&&N.instanceMatrix&&(ce=N.instanceMatrix),he==="instanceColor"&&N.instanceColor&&(ce=N.instanceColor)),ce!==void 0){let ue=ce.normalized,Le=ce.itemSize,Ce=e.get(ce);if(Ce===void 0)continue;let ot=Ce.buffer,Qe=Ce.type,tt=Ce.bytesPerElement,Q=Qe===n.INT||Qe===n.UNSIGNED_INT||ce.gpuType===ml;if(ce.isInterleavedBufferAttribute){let ie=ce.data,ye=ie.stride,Xe=ce.offset;if(ie.isInstancedInterleavedBuffer){for(let Ae=0;Ae<K.locationSize;Ae++)m(K.location+Ae,ie.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ae=0;Ae<K.locationSize;Ae++)g(K.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let Ae=0;Ae<K.locationSize;Ae++)w(K.location+Ae,Le/K.locationSize,Qe,ue,ye*tt,(Xe+Le/K.locationSize*Ae)*tt,Q)}else{if(ce.isInstancedBufferAttribute){for(let ie=0;ie<K.locationSize;ie++)m(K.location+ie,ce.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ie=0;ie<K.locationSize;ie++)g(K.location+ie);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let ie=0;ie<K.locationSize;ie++)w(K.location+ie,Le/K.locationSize,Qe,ue,Le*tt,Le/K.locationSize*ie*tt,Q)}}else if(J!==void 0){let ue=J[he];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(K.location,ue);break;case 3:n.vertexAttrib3fv(K.location,ue);break;case 4:n.vertexAttrib4fv(K.location,ue);break;default:n.vertexAttrib1fv(K.location,ue)}}}}S()}function T(){E();for(let N in i){let P=i[N];for(let z in P){let L=P[z];for(let k in L){let Z=L[k];for(let J in Z)d(Z[J].object),delete Z[J];delete L[k]}}delete i[N]}}function y(N){if(i[N.id]===void 0)return;let P=i[N.id];for(let z in P){let L=P[z];for(let k in L){let Z=L[k];for(let J in Z)d(Z[J].object),delete Z[J];delete L[k]}}delete i[N.id]}function C(N){for(let P in i){let z=i[P];for(let L in z){let k=z[L];if(k[N.id]===void 0)continue;let Z=k[N.id];for(let J in Z)d(Z[J].object),delete Z[J];delete k[N.id]}}}function _(N){for(let P in i){let z=i[P],L=N.isInstancedMesh===!0?N.id:0,k=z[L];if(k!==void 0){for(let Z in k){let J=k[Z];for(let he in J)d(J[he].object),delete J[he];delete k[Z]}delete z[L],Object.keys(z).length===0&&delete i[P]}}}function E(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:y,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:g,disableUnusedAttributes:S}}function ux(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),t.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let h=0;for(let f=0;f<d;f++)h+=c[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function hx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Bn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let _=C===Jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==mn&&C!==On&&!_&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&($e("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),y=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:M,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:v,maxSamples:T,samples:y}}function dx(n){let e=this,t=null,i=0,s=!1,r=!1,a=new bn,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let f=u.length!==0||h||i!==0||s;return s=h,i=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){let p=u.clippingPlanes,M=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?d(null):c();else{let S=r?0:i,w=S*4,v=m.clippingState||null;l.value=v,v=d(p,h,w,f);for(let T=0;T!==w;++T)v[T]=t[T];m.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,h,f,p){let M=u!==null?u.length:0,g=null;if(M!==0){if(g=l.value,p!==!0||g===null){let m=f+M*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,v=f;w!==M;++w,v+=4)a.copy(u[w]).applyMatrix4(S,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}function _x(n){let e=[],t=[],i=n,s=n-Cr+1+fx;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,h=6,f=3,p=new Float32Array(f*h*u),M=new Float32Array(f*h*u);for(let m=0;m<u;m++){let S=m%3*2/3-1,w=m>2?0:-1,v=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];p.set(v,f*h*m);for(let T=0;T<h;T++){let y=d[T*2]*2-1,C=d[T*2+1]*2-1;m===0?Ps.set(1,C,y):m===1?Ps.set(-y,1,-C):m===2?Ps.set(-y,C,1):m===3?Ps.set(-1,C,-y):m===4?Ps.set(-y,-1,C):Ps.set(y,C,-1),Ps.toArray(M,(m*h+T)*f)}}let g=new Pt;g.setAttribute("position",new rn(p,f)),g.setAttribute("outputDirection",new rn(M,f)),t.push(new Ht(g,null)),i>Cr&&i--}return{lodMeshes:t,sizeLods:e}}function Tf(n,e,t){let i=new pn(n,e,t);return i.texture.mapping=Da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ar(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function xx(n,e,t){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function vx(n,e,t){return new En({name:"SphericalGaussianBlur",defines:{SAMPLES:px,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function wf(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Af(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function yx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===dl||f===fl)if(e.has(h)){let p=e.get(h).texture;return o(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let M=new sc(p.height);return M.fromEquirectangularTexture(n,h),e.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,p=f===dl||f===fl,M=f===is||f===Cs;if(p||M){let g=t.get(h),m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new ic(n)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let S=h.image;return p&&S&&S.height>0||M&&S&&l(S)?(i===null&&(i=new ic(n)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",d),g.texture):null}}}return h}function o(h,f){return f===dl?h.mapping=is:f===fl&&(h.mapping=Cs),h}function l(h){let f=0,p=6;for(let M=0;M<p;M++)h[M]!==void 0&&f++;return f===p}function c(h){let f=h.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(h){let f=h.target;f.removeEventListener("dispose",d);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function bx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&xs("WebGLRenderer: "+i+" extension not supported."),s}}}function Mx(n,e,t,i){let s={},r=new WeakMap;function a(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(u){let h=u.attributes;for(let f in h)e.update(h[f],n.ARRAY_BUFFER)}function c(u){let h=[],f=u.index,p=u.attributes.position,M=0;if(p===void 0)return;if(f!==null){let S=f.array;M=f.version;for(let w=0,v=S.length;w<v;w+=3){let T=S[w+0],y=S[w+1],C=S[w+2];h.push(T,y,y,C,C,T)}}else{let S=p.array;M=p.version;for(let w=0,v=S.length/3-1;w<v;w+=3){let T=w+0,y=w+1,C=w+2;h.push(T,y,y,C,C,T)}}let g=new(p.count>=65535?ha:ua)(h,1);g.version=M;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function d(u){let h=r.get(u);if(h){let f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function Sx(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,h){n.drawElements(i,h,r,u*a),t.update(h,i,1)}function c(u,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,u*a,f),t.update(h,i,f))}function d(u,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,u,0,f);let M=0;for(let g=0;g<f;g++)M+=h[g];t.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Ex(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Tx(n,e,t){let i=new WeakMap,s=new wt;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0,h=i.get(o);if(h===void 0||h.count!==u){let E=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),M===!0&&(w=3);let v=o.attributes.position.count*w,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let y=new Float32Array(v*T*4*u),C=new oa(y,v,T,u);C.type=On,C.needsUpdate=!0;let _=w*4;for(let R=0;R<u;R++){let N=g[R],P=m[R],z=S[R],L=v*T*4*R;for(let k=0;k<N.count;k++){let Z=k*_;f===!0&&(s.fromBufferAttribute(N,k),y[L+Z+0]=s.x,y[L+Z+1]=s.y,y[L+Z+2]=s.z,y[L+Z+3]=0),p===!0&&(s.fromBufferAttribute(P,k),y[L+Z+4]=s.x,y[L+Z+5]=s.y,y[L+Z+6]=s.z,y[L+Z+7]=0),M===!0&&(s.fromBufferAttribute(z,k),y[L+Z+8]=s.x,y[L+Z+9]=s.y,y[L+Z+10]=s.z,y[L+Z+11]=z.itemSize===4?s.w:1)}}h={count:u,texture:C,size:new pe(v,T)},i.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function wx(n,e,t,i,s){let r=new WeakMap;function a(c){let d=s.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return h}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}function Cx(n,e,t,i,s,r){let a=new pn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Pt;c.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ct([0,2,0,0,2,0],2));let d=new Jo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ht(c,d),h=new br(-1,1,1,-1,0,1),f=null,p=null,M=!1,g,m=null,S=[],w=!1;this.setSize=function(v,T){a.setSize(v,T),o!==null&&o.setSize(v,T),l!==null&&l.setSize(v,T);for(let y=0;y<S.length;y++){let C=S[y];C.setSize&&C.setSize(v,T)}},this.setEffects=function(v){S=v,w=S.length>0&&S[0].isRenderPass===!0;let T=a.width,y=a.height;S.length>0&&o===null&&(o=new pn(T,y,{type:Jn,depthBuffer:!1,stencilBuffer:!1}),l=new pn(T,y,{type:Jn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){let _=S[C];_.setSize&&_.setSize(T,y)}},this.begin=function(v,T){if(M||v.toneMapping===Yn&&S.length===0)return!1;if(m=T,T!==null){let y=T.width,C=T.height;(a.width!==y||a.height!==C)&&this.setSize(y,C)}return w===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=Yn,!0},this.hasRenderPass=function(){return w},this.end=function(v,T){v.toneMapping=g,M=!0;let y=a,C=o;for(let _=0;_<S.length;_++){let E=S[_];E.enabled!==!1&&(E.render(v,C,y,T),E.needsSwap!==!1&&(y=C,C=C===o?l:o))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,d.defines={},lt.getTransfer(f)===pt&&(d.defines.SRGB_TRANSFER="");let _=Ax[p];_&&(d.defines[_]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(m),v.render(u,h),m=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}function Pr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Cf[s];if(r===void 0&&(r=new Float32Array(s),Cf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ac(n,e){let t=Rf[e];t===void 0&&(t=new Int32Array(e),Rf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Rx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ix(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function Px(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function Lx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function Dx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;Lf.set(i),n.uniformMatrix2fv(this.addr,!1,Lf),Bt(t,i)}}function Nx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;Pf.set(i),n.uniformMatrix3fv(this.addr,!1,Pf),Bt(t,i)}}function Ux(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;If.set(i),n.uniformMatrix4fv(this.addr,!1,If),Bt(t,i)}}function Fx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ox(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function Bx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function zx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function kx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Vx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function Gx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function Hx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function Wx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(eh.compareFunction=t.isReversedDepthBuffer()?ec:Ql,r=eh):r=$f,t.setTexture2D(e||r,s)}function Xx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Zf,s)}function qx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Jf,s)}function $x(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Yf,s)}function Yx(n){switch(n){case 5126:return Rx;case 35664:return Ix;case 35665:return Px;case 35666:return Lx;case 35674:return Dx;case 35675:return Nx;case 35676:return Ux;case 5124:case 35670:return Fx;case 35667:case 35671:return Ox;case 35668:case 35672:return Bx;case 35669:case 35673:return zx;case 5125:return kx;case 36294:return Vx;case 36295:return Gx;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return qx;case 36289:case 36303:case 36311:case 36292:return $x}}function Zx(n,e){n.uniform1fv(this.addr,e)}function Jx(n,e){let t=Pr(e,this.size,2);n.uniform2fv(this.addr,t)}function Kx(n,e){let t=Pr(e,this.size,3);n.uniform3fv(this.addr,t)}function jx(n,e){let t=Pr(e,this.size,4);n.uniform4fv(this.addr,t)}function Qx(n,e){let t=Pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ev(n,e){let t=Pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function tv(n,e){let t=Pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function nv(n,e){n.uniform1iv(this.addr,e)}function iv(n,e){n.uniform2iv(this.addr,e)}function sv(n,e){n.uniform3iv(this.addr,e)}function rv(n,e){n.uniform4iv(this.addr,e)}function av(n,e){n.uniform1uiv(this.addr,e)}function ov(n,e){n.uniform2uiv(this.addr,e)}function lv(n,e){n.uniform3uiv(this.addr,e)}function cv(n,e){n.uniform4uiv(this.addr,e)}function uv(n,e,t){let i=this.cache,s=e.length,r=ac(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=eh:a=$f;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function hv(n,e,t){let i=this.cache,s=e.length,r=ac(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Zf,r[a])}function dv(n,e,t){let i=this.cache,s=e.length,r=ac(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Jf,r[a])}function fv(n,e,t){let i=this.cache,s=e.length,r=ac(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Yf,r[a])}function pv(n){switch(n){case 5126:return Zx;case 35664:return Jx;case 35665:return Kx;case 35666:return jx;case 35674:return Qx;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return sv;case 35669:case 35673:return rv;case 5125:return av;case 36294:return ov;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return fv}}function Df(n,e){n.seq.push(e),n.map[e.id]=e}function mv(n,e,t){let i=n.name,s=i.length;for(ju.lastIndex=0;;){let r=ju.exec(i),a=ju.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Df(t,c===void 0?new th(o,n,e):new nh(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new ih(o),Df(t,u)),t=u}}}function Nf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function xv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function vv(n){lt._getMatrix(Uf,lt.workingColorSpace,n);let e=`mat3( ${Uf.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case aa:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ff(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+xv(n.getShaderSource(e),o)}else return r}function yv(n,e){let t=vv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Mv(n,e){let t=bv[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Sv(){lt.getLuminanceCoefficients(nc);let n=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ev(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function Tv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ha(n){return n!==""}function Of(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function sh(n){return n.replace(Av,Rv)}function Rv(n,e){let t=rt[e];if(t===void 0){let i=Cv.get(e);if(i!==void 0)t=rt[i],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return sh(t)}function zf(n){return n.replace(Iv,Pv)}function Pv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Dv(n){return Lv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Uv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Nv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}function Ov(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Fv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function zv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Bv[n.combine]||"ENVMAP_BLENDING_NONE"}function kv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Vv(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Dv(t),c=Uv(t),d=Ov(t),u=zv(t),h=kv(t),f=Ev(t),p=Tv(r),M=s.createProgram(),g,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ha).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ha).join(`
`),m.length>0&&(m+=`
`)):(g=[kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),m=[kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?rt.tonemapping_pars_fragment:"",t.toneMapping!==Yn?Mv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,yv("linearToOutputTexel",t.outputColorSpace),Sv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ha).join(`
`)),a=sh(a),a=Of(a,t),a=Bf(a,t),o=sh(o),o=Of(o,t),o=Bf(o,t),a=zf(a),o=zf(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=S+g+a,v=S+m+o,T=Nf(s,s.VERTEX_SHADER,w),y=Nf(s,s.FRAGMENT_SHADER,v);s.attachShader(M,T),s.attachShader(M,y),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function C(N){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(M)||"",z=s.getShaderInfoLog(T)||"",L=s.getShaderInfoLog(y)||"",k=P.trim(),Z=z.trim(),J=L.trim(),he=!0,K=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(he=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,T,y);else{let ce=Ff(s,T,"vertex"),ue=Ff(s,y,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+ce+`
`+ue)}else k!==""?$e("WebGLProgram: Program Info Log:",k):(Z===""||J==="")&&(K=!1);K&&(N.diagnostics={runnable:he,programLog:k,vertexShader:{log:Z,prefix:g},fragmentShader:{log:J,prefix:m}})}s.deleteShader(T),s.deleteShader(y),_=new Rr(s,M),E=wv(s,M)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,gv)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_v++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=y,this}function Hv(n){return n===as||n===za||n===ka}function Wv(n,e,t,i,s,r){let a=new ur,o=new rh,l=new Set,c=[],d=new Map,u=i.logarithmicDepthBuffer,h=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,E,R,N,P,z){let L=N.fog,k=P.geometry,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,he=e.get(_.envMap||Z,J),K=he&&he.mapping===Da?he.image.height:null,ce=f[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&$e("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let ue=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Le=ue!==void 0?ue.length:0,Ce=0;k.morphAttributes.position!==void 0&&(Ce=1),k.morphAttributes.normal!==void 0&&(Ce=2),k.morphAttributes.color!==void 0&&(Ce=3);let ot,Qe,tt,Q;if(ce){let nt=di[ce];ot=nt.vertexShader,Qe=nt.fragmentShader}else{ot=_.vertexShader,Qe=_.fragmentShader;let nt=o.getVertexShaderStage(_),Ge=o.getFragmentShaderStage(_);o.update(_,nt,Ge),tt=nt.id,Q=Ge.id}let ie=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),Xe=P.isInstancedMesh===!0,Ae=P.isBatchedMesh===!0,He=!!_.map,re=!!_.matcap,G=!!he,W=!!_.aoMap,j=!!_.lightMap,ae=!!_.bumpMap&&_.wireframe===!1,fe=!!_.normalMap,Ue=!!_.displacementMap,Ie=!!_.emissiveMap,Fe=!!_.metalnessMap,Ve=!!_.roughnessMap,I=_.anisotropy>0,Ze=_.clearcoat>0,qe=_.dispersion>0,A=_.retroreflectivity>0,x=_.iridescence>0,H=_.sheen>0,$=_.transmission>0,ee=I&&!!_.anisotropyMap,ge=Ze&&!!_.clearcoatMap,_e=Ze&&!!_.clearcoatNormalMap,te=Ze&&!!_.clearcoatRoughnessMap,le=x&&!!_.iridescenceMap,be=x&&!!_.iridescenceThicknessMap,Be=H&&!!_.sheenColorMap,Me=H&&!!_.sheenRoughnessMap,ve=!!_.specularMap,ze=!!_.specularColorMap,We=!!_.specularIntensityMap,et=$&&!!_.transmissionMap,O=$&&!!_.thicknessMap,U=!!_.gradientMap,B=!!_.alphaMap,ne=_.alphaTest>0,de=!!_.alphaHash,V=!!_.extensions,se=Yn;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(se=n.toneMapping);let me={shaderID:ce,shaderType:_.type,shaderName:_.name,vertexShader:ot,fragmentShader:Qe,defines:_.defines,customVertexShaderID:tt,customFragmentShaderID:Q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Ae,batchingColor:Ae&&P._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&P.instanceColor!==null,instancingMorph:Xe&&P.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:He,matcap:re,envMap:G,envMapMode:G&&he.mapping,envMapCubeUVHeight:K,aoMap:W,lightMap:j,bumpMap:ae,normalMap:fe,displacementMap:Ue,emissiveMap:Ie,normalMapObjectSpace:fe&&_.normalMapType===nf,normalMapTangentSpace:fe&&_.normalMapType===jl,packedNormalMap:fe&&_.normalMapType===jl&&Hv(_.normalMap.format),metalnessMap:Fe,roughnessMap:Ve,anisotropy:I,anisotropyMap:ee,clearcoat:Ze,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:te,dispersion:qe,retroreflection:A,iridescence:x,iridescenceMap:le,iridescenceThicknessMap:be,sheen:H,sheenColorMap:Be,sheenRoughnessMap:Me,specularMap:ve,specularColorMap:ze,specularIntensityMap:We,transmission:$,transmissionMap:et,thicknessMap:O,gradientMap:U,opaque:_.transparent===!1&&_.blending===Er&&_.alphaToCoverage===!1,alphaMap:B,alphaTest:ne,alphaHash:de,combine:_.combine,mapUv:He&&p(_.map.channel),aoMapUv:W&&p(_.aoMap.channel),lightMapUv:j&&p(_.lightMap.channel),bumpMapUv:ae&&p(_.bumpMap.channel),normalMapUv:fe&&p(_.normalMap.channel),displacementMapUv:Ue&&p(_.displacementMap.channel),emissiveMapUv:Ie&&p(_.emissiveMap.channel),metalnessMapUv:Fe&&p(_.metalnessMap.channel),roughnessMapUv:Ve&&p(_.roughnessMap.channel),anisotropyMapUv:ee&&p(_.anisotropyMap.channel),clearcoatMapUv:ge&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:_e&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:be&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Me&&p(_.sheenRoughnessMap.channel),specularMapUv:ve&&p(_.specularMap.channel),specularColorMapUv:ze&&p(_.specularColorMap.channel),specularIntensityMapUv:We&&p(_.specularIntensityMap.channel),transmissionMapUv:et&&p(_.transmissionMap.channel),thicknessMapUv:O&&p(_.thicknessMap.channel),alphaMapUv:B&&p(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(fe||I),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!k.attributes.uv&&(He||B),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&fe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Ce,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,decodeVideoTexture:He&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===pt,decodeVideoTextureEmissive:Ie&&_.emissiveMap.isVideoTexture===!0&&lt.getTransfer(_.emissiveMap.colorSpace)===pt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Fn,flipSided:_.side===qt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:V&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(V&&_.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return me.vertexUv1s=l.has(1),me.vertexUv2s=l.has(2),me.vertexUv3s=l.has(3),l.clear(),me}function g(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)E.push(R),E.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(m(E,_),S(E,_),E.push(n.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function S(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){let E=f[_.type],R;if(E){let N=di[E];R=bf.clone(N.uniforms)}else R=_.uniforms;return R}function v(_,E){let R=d.get(E);return R!==void 0?++R.usedTimes:(R=new Vv(n,E,_,s),c.push(R),d.set(E,R)),R}function T(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function y(_){o.remove(_)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:w,acquireProgram:v,releaseProgram:T,releaseShaderCache:y,programs:c,dispose:C}}function Xv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function qv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Vf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,p,M,g,m){let S=n[e];return S===void 0?(S={id:h.id,object:h,geometry:f,material:p,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:g,group:m},n[e]=S):(S.id=h.id,S.object=h,S.geometry=f,S.material=p,S.materialVariant=a(h),S.groupOrder=M,S.renderOrder=h.renderOrder,S.z=g,S.group=m),e++,S}function l(h,f,p,M,g,m,S){S.reversedDepth===!0&&(g=-g);let w=o(h,f,p,M,g,m);p.transmission>0?i.push(w):p.transparent===!0?s.push(w):t.push(w)}function c(h,f,p,M,g,m){let S=o(h,f,p,M,g,m);p.transmission>0?i.unshift(S):p.transparent===!0?s.unshift(S):t.unshift(S)}function d(h,f){t.length>1&&t.sort(h||qv),i.length>1&&i.sort(f||Vf),s.length>1&&s.sort(f||Vf)}function u(){for(let h=e,f=n.length;h<f;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:d}}function $v(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Gf,n.set(i,[a])):s>=r.length?(a=new Gf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Yv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Ke};break;case"SpotLight":t={position:new D,direction:new D,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function Zv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function Kv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jv(n){let e=new Yv,t=Zv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new mt,a=new mt;function o(c){let d=0,u=0,h=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let f=0,p=0,M=0,g=0,m=0,S=0,w=0,v=0,T=0,y=0,C=0,_=0,E=0,R=0;c.sort(Kv);for(let P=0,z=c.length;P<z;P++){let L=c[P],k=L.color,Z=L.intensity,J=L.distance,he=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===as?he=L.shadow.map.texture:he=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=k.r*Z,u+=k.g*Z,h+=k.b*Z;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],Z);R++}else if(L.isSunLight){let K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ce=L.shadow,ue=t.get(L);ue.shadowIntensity=ce.intensity,ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize.copy(ce.mapSize).multiply(ce.getFrameExtents()),i.sunShadow[p]=ue,i.sunShadowMap[p]=he;let Le=ce.getViewportCount();for(let Ce=0;Ce<Le;Ce++)i.sunShadowMatrix[M+Ce]=ce.getMatrix(Ce),i.sunShadowCascade[M+Ce]=ce._cascadeData[Ce];M+=Le,p++}i.sun[f]=K,f++}else if(L.isDirectionalLight){let K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ce=L.shadow,ue=t.get(L);ue.shadowIntensity=ce.intensity,ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,i.directionalShadow[g]=ue,i.directionalShadowMap[g]=he,i.directionalShadowMatrix[g]=L.shadow.matrix,T++}i.directional[g]=K,g++}else if(L.isSpotLight){let K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(k).multiplyScalar(Z),K.distance=J,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[S]=K;let ce=L.shadow;if(L.map&&(i.spotLightMap[_]=L.map,_++,ce.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[S]=ce.matrix,L.castShadow){let ue=t.get(L);ue.shadowIntensity=ce.intensity,ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,i.spotShadow[S]=ue,i.spotShadowMap[S]=he,C++}S++}else if(L.isRectAreaLight){let K=e.get(L);K.color.copy(k).multiplyScalar(Z),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[w]=K,w++}else if(L.isPointLight){let K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){let ce=L.shadow,ue=t.get(L);ue.shadowIntensity=ce.intensity,ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,ue.shadowCameraNear=ce.camera.near,ue.shadowCameraFar=ce.camera.far,i.pointShadow[m]=ue,i.pointShadowMap[m]=he,i.pointShadowMatrix[m]=L.shadow.matrix,y++}i.point[m]=K,m++}else if(L.isHemisphereLight){let K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(Z),K.groundColor.copy(L.groundColor).multiplyScalar(Z),i.hemi[v]=K,v++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;let N=i.hash;(N.sunLength!==f||N.directionalLength!==g||N.pointLength!==m||N.spotLength!==S||N.rectAreaLength!==w||N.hemiLength!==v||N.numSunShadows!==p||N.numDirectionalShadows!==T||N.numPointShadows!==y||N.numSpotShadows!==C||N.numSpotMaps!==_||N.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=g,i.spot.length=S,i.rectArea.length=w,i.point.length=m,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=y,i.pointShadowMap.length=y,i.pointShadowMatrix.length=y,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+_-E,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,N.sunLength=f,N.directionalLength=g,N.pointLength=m,N.spotLength=S,N.rectAreaLength=w,N.hemiLength=v,N.numSunShadows=p,N.numDirectionalShadows=T,N.numPointShadows=y,N.numSpotShadows=C,N.numSpotMaps=_,N.numLightProbes=R,i.version=Jv++)}function l(c,d){let u=0,h=0,f=0,p=0,M=0,g=0,m=d.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){let v=c[S];if(v.isSunLight){let T=i.sun[u];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let T=i.directional[h];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),h++}else if(v.isSpotLight){let T=i.spot[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let T=i.rectArea[M];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),M++}else if(v.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let T=i.hemi[g];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Hf(n){let e=new jv(n),t=[],i=[],s=[];function r(h){u.camera=h,t.length=0,i.length=0,s.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function d(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Qv(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Hf(n),e.set(s,[o])):r>=a.length?(o=new Hf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}function sy(n,e,t){let i=new fr,s=new pe,r=new pe,a=new wt,o=new Ko,l=new jo,c={},d=t.maxTextureSize,u={[ns]:qt,[qt]:ns,[Fn]:Fn},h=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:ey,fragmentShader:ty}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new Pt;p.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ht(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ts;let m=this.type;this.render=function(y,C,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;this.type===Dd&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ts);let E=n.getRenderTarget(),R=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),P=n.state;P.setBlending(ui),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let z=m!==this.type;z&&C.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(k=>k.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,k=y.length;L<k;L++){let Z=y[L],J=Z.shadow;if(J===void 0){$e("WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let he=J.getFrameExtents();s.multiply(he),r.copy(J.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/he.x),s.x=r.x*he.x,J.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/he.y),s.y=r.y*he.y,J.mapSize.y=r.y));let K=n.state.buffers.depth.getReversed();if(J.camera._reversedDepth=K,J.map===null||z===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Sr){if(Z.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new pn(s.x,s.y,{format:as,type:Jn,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),J.map.texture.name=Z.name+".shadowMap",J.map.depthTexture=new qi(s.x,s.y,On),J.map.depthTexture.name=Z.name+".shadowMapDepth",J.map.depthTexture.format=li,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Gt,J.map.depthTexture.magFilter=Gt}else Z.isPointLight?(J.map=new sc(s.x),J.map.depthTexture=new Ho(s.x,Zn)):(J.map=new pn(s.x,s.y),J.map.depthTexture=new qi(s.x,s.y,Zn)),J.map.depthTexture.name=Z.name+".shadowMap",J.map.depthTexture.format=li,this.type===Ts?(J.map.depthTexture.compareFunction=K?ec:Ql,J.map.depthTexture.minFilter=Xt,J.map.depthTexture.magFilter=Xt):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Gt,J.map.depthTexture.magFilter=Gt);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let ce=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();Z.isPointLight!==!0&&J.updateMatrices(Z,_);for(let ue=0;ue<ce;ue++){let Le=J.getCamera(ue);if(Z.isPointLight){let Ce=J.camera,ot=J.matrix,Qe=Z.distance||Ce.far;Qe!==Ce.far&&(Ce.far=Qe,Ce.updateProjectionMatrix()),Ga.setFromMatrixPosition(Z.matrixWorld),Ce.position.copy(Ga),Qu.copy(Ce.position),Qu.add(ny[ue]),Ce.up.copy(iy[ue]),Ce.lookAt(Qu),Ce.updateMatrixWorld(),ot.makeTranslation(-Ga.x,-Ga.y,-Ga.z),Wf.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),J._frustum.setFromProjectionMatrix(Wf,Ce.coordinateSystem,Ce.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)n.setRenderTarget(J.map,ue),n.clear();else{ue===0&&(n.setRenderTarget(J.map),n.clear());let Ce=J.getViewport(ue);a.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),P.viewport(a)}i=J.getFrustum(ue),v(C,_,Le,Z,this.type)}J.isPointLightShadow!==!0&&this.type===Sr&&S(J,_),J.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(E,R,N)};function S(y,C){let _=e.update(M);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null?y.mapPass=new pn(s.x,s.y,{format:as,type:Jn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),h.uniforms.shadow_pass.value=y.map.depthTexture,h.uniforms.resolution.value.set(y.map.width,y.map.height),h.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(C,null,_,h,M,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value.set(y.map.width,y.map.height),f.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(C,null,_,f,M,null)}function w(y,C,_,E){let R=null,N=_.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(N!==void 0)R=N;else if(R=_.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let P=R.uuid,z=C.uuid,L=c[P];L===void 0&&(L={},c[P]=L);let k=L[z];k===void 0&&(k=R.clone(),L[z]=k,C.addEventListener("dispose",T)),R=k}if(R.visible=C.visible,R.wireframe=C.wireframe,E===Sr?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:u[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let P=n.properties.get(R);P.light=_}return R}function v(y,C,_,E,R){if(y.visible===!1)return;if(y.layers.test(C.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&R===Sr)&&(!y.frustumCulled||y.intersectsFrustum(i))){y.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,y.matrixWorld);let z=e.update(y),L=y.material;if(Array.isArray(L)){let k=z.groups;for(let Z=0,J=k.length;Z<J;Z++){let he=k[Z],K=L[he.materialIndex];if(K&&K.visible){let ce=w(y,K,E,R);y.onBeforeShadow(n,y,C,_,z,ce,he),n.renderBufferDirect(_,null,z,ce,y,he),y.onAfterShadow(n,y,C,_,z,ce,he)}}}else if(L.visible){let k=w(y,L,E,R);y.onBeforeShadow(n,y,C,_,z,k,null),n.renderBufferDirect(_,null,z,k,y,null),y.onAfterShadow(n,y,C,_,z,k,null)}}let P=y.children;for(let z=0,L=P.length;z<L;z++)v(P[z],C,_,E,R)}function T(y){y.target.removeEventListener("dispose",T);for(let _ in c){let E=c[_],R=y.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function ry(n,e){function t(){let O=!1,U=new wt,B=null,ne=new wt(0,0,0,0);return{setMask:function(de){B!==de&&!O&&(n.colorMask(de,de,de,de),B=de)},setLocked:function(de){O=de},setClear:function(de,V,se,me,nt){nt===!0&&(de*=me,V*=me,se*=me),U.set(de,V,se,me),ne.equals(U)===!1&&(n.clearColor(de,V,se,me),ne.copy(U))},reset:function(){O=!1,B=null,ne.set(-1,0,0,0)}}}function i(){let O=!1,U=!1,B=null,ne=null,de=null;return{setReversed:function(V){if(U!==V){let se=e.get("EXT_clip_control");V?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),U=V;let me=de;de=null,this.setClear(me)}},getReversed:function(){return U},setTest:function(V){V?ie(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(V){B!==V&&!O&&(n.depthMask(V),B=V)},setFunc:function(V){if(U&&(V=mf[V]),ne!==V){switch(V){case Po:n.depthFunc(n.NEVER);break;case Lo:n.depthFunc(n.ALWAYS);break;case Do:n.depthFunc(n.LESS);break;case ir:n.depthFunc(n.LEQUAL);break;case No:n.depthFunc(n.EQUAL);break;case Uo:n.depthFunc(n.GEQUAL);break;case Fo:n.depthFunc(n.GREATER);break;case Oo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ne=V}},setLocked:function(V){O=V},setClear:function(V){de!==V&&(de=V,U&&(V=1-V),n.clearDepth(V))},reset:function(){O=!1,B=null,ne=null,de=null,U=!1}}}function s(){let O=!1,U=null,B=null,ne=null,de=null,V=null,se=null,me=null,nt=null;return{setTest:function(Ge){O||(Ge?ie(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(Ge){U!==Ge&&!O&&(n.stencilMask(Ge),U=Ge)},setFunc:function(Ge,ut,bt){(B!==Ge||ne!==ut||de!==bt)&&(n.stencilFunc(Ge,ut,bt),B=Ge,ne=ut,de=bt)},setOp:function(Ge,ut,bt){(V!==Ge||se!==ut||me!==bt)&&(n.stencilOp(Ge,ut,bt),V=Ge,se=ut,me=bt)},setLocked:function(Ge){O=Ge},setClear:function(Ge){nt!==Ge&&(n.clearStencil(Ge),nt=Ge)},reset:function(){O=!1,U=null,B=null,ne=null,de=null,V=null,se=null,me=null,nt=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,d={},u={},h={},f=new WeakMap,p=[],M=null,g=!1,m=null,S=null,w=null,v=null,T=null,y=null,C=null,_=new Ke(0,0,0),E=0,R=!1,N=null,P=null,z=null,L=null,k=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,he=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(K)[1]),J=he>=1):K.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),J=he>=2);let ce=null,ue={},Le=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),ot=new wt().fromArray(Le),Qe=new wt().fromArray(Ce);function tt(O,U,B,ne){let de=new Uint8Array(4),V=n.createTexture();n.bindTexture(O,V),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let se=0;se<B;se++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(U,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(U+se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return V}let Q={};Q[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(ir),ae(!1),fe(pu),ie(n.CULL_FACE),W(ui);function ie(O){d[O]!==!0&&(n.enable(O),d[O]=!0)}function ye(O){d[O]!==!1&&(n.disable(O),d[O]=!1)}function Xe(O,U){return h[O]!==U?(n.bindFramebuffer(O,U),h[O]=U,O===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=U),O===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=U),!0):!1}function Ae(O,U){let B=p,ne=!1;if(O){B=f.get(U),B===void 0&&(B=[],f.set(U,B));let de=O.textures;if(B.length!==de.length||B[0]!==n.COLOR_ATTACHMENT0){for(let V=0,se=de.length;V<se;V++)B[V]=n.COLOR_ATTACHMENT0+V;B.length=de.length,ne=!0}}else B[0]!==n.BACK&&(B[0]=n.BACK,ne=!0);ne&&n.drawBuffers(B)}function He(O){return M!==O?(n.useProgram(O),M=O,!0):!1}let re={[ws]:n.FUNC_ADD,[Ud]:n.FUNC_SUBTRACT,[Fd]:n.FUNC_REVERSE_SUBTRACT};re[Od]=n.MIN,re[Bd]=n.MAX;let G={[zd]:n.ZERO,[kd]:n.ONE,[Vd]:n.SRC_COLOR,[_u]:n.SRC_ALPHA,[$d]:n.SRC_ALPHA_SATURATE,[Xd]:n.DST_COLOR,[Hd]:n.DST_ALPHA,[Gd]:n.ONE_MINUS_SRC_COLOR,[xu]:n.ONE_MINUS_SRC_ALPHA,[qd]:n.ONE_MINUS_DST_COLOR,[Wd]:n.ONE_MINUS_DST_ALPHA,[Yd]:n.CONSTANT_COLOR,[Zd]:n.ONE_MINUS_CONSTANT_COLOR,[Jd]:n.CONSTANT_ALPHA,[Kd]:n.ONE_MINUS_CONSTANT_ALPHA};function W(O,U,B,ne,de,V,se,me,nt,Ge){if(O===ui){g===!0&&(ye(n.BLEND),g=!1);return}if(g===!1&&(ie(n.BLEND),g=!0),O!==Nd){if(O!==m||Ge!==R){if((S!==ws||T!==ws)&&(n.blendEquation(n.FUNC_ADD),S=ws,T=ws),Ge)switch(O){case Er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case La:n.blendFunc(n.ONE,n.ONE);break;case mu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ye("WebGLState: Invalid blending: ",O);break}else switch(O){case Er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case La:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case mu:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gu:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",O);break}w=null,v=null,y=null,C=null,_.set(0,0,0),E=0,m=O,R=Ge}return}de=de||U,V=V||B,se=se||ne,(U!==S||de!==T)&&(n.blendEquationSeparate(re[U],re[de]),S=U,T=de),(B!==w||ne!==v||V!==y||se!==C)&&(n.blendFuncSeparate(G[B],G[ne],G[V],G[se]),w=B,v=ne,y=V,C=se),(me.equals(_)===!1||nt!==E)&&(n.blendColor(me.r,me.g,me.b,nt),_.copy(me),E=nt),m=O,R=!1}function j(O,U){O.side===Fn?ye(n.CULL_FACE):ie(n.CULL_FACE);let B=O.side===qt;U&&(B=!B),ae(B),O.blending===Er&&O.transparent===!1?W(ui):W(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let ne=O.stencilWrite;o.setTest(ne),ne&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ie(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function ae(O){N!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),N=O)}function fe(O){O!==Pd?(ie(n.CULL_FACE),O!==P&&(O===pu?n.cullFace(n.BACK):O===Ld?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),P=O}function Ue(O){O!==z&&(J&&n.lineWidth(O),z=O)}function Ie(O,U,B){O?(ie(n.POLYGON_OFFSET_FILL),(L!==U||k!==B)&&(L=U,k=B,a.getReversed()&&(U=-U),n.polygonOffset(U,B))):ye(n.POLYGON_OFFSET_FILL)}function Fe(O){O?ie(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function Ve(O){O===void 0&&(O=n.TEXTURE0+Z-1),ce!==O&&(n.activeTexture(O),ce=O)}function I(O,U,B){B===void 0&&(ce===null?B=n.TEXTURE0+Z-1:B=ce);let ne=ue[B];ne===void 0&&(ne={type:void 0,texture:void 0},ue[B]=ne),(ne.type!==O||ne.texture!==U)&&(ce!==B&&(n.activeTexture(B),ce=B),n.bindTexture(O,U||Q[O]),ne.type=O,ne.texture=U)}function Ze(){let O=ue[ce];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function qe(){try{n.compressedTexImage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function x(){try{n.texSubImage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function H(){try{n.texSubImage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function ee(){try{n.compressedTexSubImage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function ge(){try{n.texStorage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function _e(){try{n.texStorage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function te(){try{n.texImage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function le(){try{n.texImage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function be(O){return u[O]!==void 0?u[O]:n.getParameter(O)}function Be(O,U){u[O]!==U&&(n.pixelStorei(O,U),u[O]=U)}function Me(O){ot.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),ot.copy(O))}function ve(O){Qe.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Qe.copy(O))}function ze(O,U){let B=c.get(U);B===void 0&&(B=new WeakMap,c.set(U,B));let ne=B.get(O);ne===void 0&&(ne=n.getUniformBlockIndex(U,O.name),B.set(O,ne))}function We(O,U){let ne=c.get(U).get(O);l.get(U)!==ne&&(n.uniformBlockBinding(U,ne,O.__bindingPointIndex),l.set(U,ne))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},u={},ce=null,ue={},h={},f=new WeakMap,p=[],M=null,g=!1,m=null,S=null,w=null,v=null,T=null,y=null,C=null,_=new Ke(0,0,0),E=0,R=!1,N=null,P=null,z=null,L=null,k=null,ot.set(0,0,n.canvas.width,n.canvas.height),Qe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:ye,bindFramebuffer:Xe,drawBuffers:Ae,useProgram:He,setBlending:W,setMaterial:j,setFlipSided:ae,setCullFace:fe,setLineWidth:Ue,setPolygonOffset:Ie,setScissorTest:Fe,activeTexture:Ve,bindTexture:I,unbindTexture:Ze,compressedTexImage2D:qe,compressedTexImage3D:A,texImage2D:te,texImage3D:le,pixelStorei:Be,getParameter:be,updateUBOMapping:ze,uniformBlockBinding:We,texStorage2D:ge,texStorage3D:_e,texSubImage2D:x,texSubImage3D:H,compressedTexSubImage2D:$,compressedTexSubImage3D:ee,scissor:Me,viewport:ve,reset:et}}function ay(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,d=new WeakMap,u=new Set,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,x){return p?new OffscreenCanvas(A,x):ar("canvas")}function g(A,x,H){let $=1,ee=qe(A);if((ee.width>H||ee.height>H)&&($=H/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ge=Math.floor($*ee.width),_e=Math.floor($*ee.height);h===void 0&&(h=M(ge,_e));let te=x?M(ge,_e):h;return te.width=ge,te.height=_e,te.getContext("2d").drawImage(A,0,0,ge,_e),$e("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ge+"x"+_e+")."),te}else return"data"in A&&$e("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function m(A){return A.generateMipmaps}function S(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(A,x,H,$,ee,ge=!1){if(A!==null){if(n[A]!==void 0)return n[A];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let _e;$&&(_e=e.get("EXT_texture_norm16"),_e||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=x;if(x===n.RED&&(H===n.FLOAT&&(te=n.R32F),H===n.HALF_FLOAT&&(te=n.R16F),H===n.UNSIGNED_BYTE&&(te=n.R8),H===n.UNSIGNED_SHORT&&_e&&(te=_e.R16_EXT),H===n.SHORT&&_e&&(te=_e.R16_SNORM_EXT)),x===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(te=n.R8UI),H===n.UNSIGNED_SHORT&&(te=n.R16UI),H===n.UNSIGNED_INT&&(te=n.R32UI),H===n.BYTE&&(te=n.R8I),H===n.SHORT&&(te=n.R16I),H===n.INT&&(te=n.R32I)),x===n.RG&&(H===n.FLOAT&&(te=n.RG32F),H===n.HALF_FLOAT&&(te=n.RG16F),H===n.UNSIGNED_BYTE&&(te=n.RG8),H===n.UNSIGNED_SHORT&&_e&&(te=_e.RG16_EXT),H===n.SHORT&&_e&&(te=_e.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(te=n.RG8UI),H===n.UNSIGNED_SHORT&&(te=n.RG16UI),H===n.UNSIGNED_INT&&(te=n.RG32UI),H===n.BYTE&&(te=n.RG8I),H===n.SHORT&&(te=n.RG16I),H===n.INT&&(te=n.RG32I)),x===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(te=n.RGB8UI),H===n.UNSIGNED_SHORT&&(te=n.RGB16UI),H===n.UNSIGNED_INT&&(te=n.RGB32UI),H===n.BYTE&&(te=n.RGB8I),H===n.SHORT&&(te=n.RGB16I),H===n.INT&&(te=n.RGB32I)),x===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(te=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(te=n.RGBA16UI),H===n.UNSIGNED_INT&&(te=n.RGBA32UI),H===n.BYTE&&(te=n.RGBA8I),H===n.SHORT&&(te=n.RGBA16I),H===n.INT&&(te=n.RGBA32I)),x===n.RGB&&(H===n.UNSIGNED_SHORT&&_e&&(te=_e.RGB16_EXT),H===n.SHORT&&_e&&(te=_e.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(te=n.R11F_G11F_B10F)),x===n.RGBA){let le=ge?aa:lt.getTransfer(ee);H===n.FLOAT&&(te=n.RGBA32F),H===n.HALF_FLOAT&&(te=n.RGBA16F),H===n.UNSIGNED_BYTE&&(te=le===pt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&_e&&(te=_e.RGBA16_EXT),H===n.SHORT&&_e&&(te=_e.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function T(A,x){let H;return A?x===null||x===Zn||x===wr?H=n.DEPTH24_STENCIL8:x===On?H=n.DEPTH32F_STENCIL8:x===Tr&&(H=n.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Zn||x===wr?H=n.DEPTH_COMPONENT24:x===On?H=n.DEPTH_COMPONENT32F:x===Tr&&(H=n.DEPTH_COMPONENT16),H}function y(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Gt&&A.minFilter!==Xt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){let x=A.target;x.removeEventListener("dispose",C),E(x),x.isVideoTexture&&d.delete(x),x.isHTMLTexture&&u.delete(x)}function _(A){let x=A.target;x.removeEventListener("dispose",_),N(x)}function E(A){let x=i.get(A);if(x.__webglInit===void 0)return;let H=A.source,$=f.get(H);if($){let ee=$[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(A),Object.keys($).length===0&&f.delete(H)}i.remove(A)}function R(A){let x=i.get(A);n.deleteTexture(x.__webglTexture);let H=A.source,$=f.get(H);delete $[x.__cacheKey],a.memory.textures--}function N(A){let x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let ee=0;ee<x.__webglFramebuffer[$].length;ee++)n.deleteFramebuffer(x.__webglFramebuffer[$][ee]);else n.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)n.deleteFramebuffer(x.__webglFramebuffer[$]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let H=A.textures;for(let $=0,ee=H.length;$<ee;$++){let ge=i.get(H[$]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),a.memory.textures--),i.remove(H[$])}i.remove(A)}let P=0;function z(){P=0}function L(){return P}function k(A){P=A}function Z(){let A=P;return A>=s.maxTextures&&$e("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function J(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function he(A,x){let H=i.get(A);if(A.isVideoTexture&&I(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){let $=A.image;if($===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(H,A,x);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+x)}function K(A,x){let H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){ye(H,A,x);return}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+x)}function ce(A,x){let H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){ye(H,A,x);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+x)}function ue(A,x){let H=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&H.__version!==A.version){Xe(H,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+x)}let Le={[sr]:n.REPEAT,[oi]:n.CLAMP_TO_EDGE,[Bo]:n.MIRRORED_REPEAT},Ce={[Gt]:n.NEAREST,[ef]:n.NEAREST_MIPMAP_NEAREST,[Na]:n.NEAREST_MIPMAP_LINEAR,[Xt]:n.LINEAR,[pl]:n.LINEAR_MIPMAP_NEAREST,[ss]:n.LINEAR_MIPMAP_LINEAR},ot={[rf]:n.NEVER,[uf]:n.ALWAYS,[af]:n.LESS,[Ql]:n.LEQUAL,[of]:n.EQUAL,[ec]:n.GEQUAL,[lf]:n.GREATER,[cf]:n.NOTEQUAL};function Qe(A,x){if(x.type===On&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Xt||x.magFilter===pl||x.magFilter===Na||x.magFilter===ss||x.minFilter===Xt||x.minFilter===pl||x.minFilter===Na||x.minFilter===ss)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Le[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Le[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Le[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Ce[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Ce[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ot[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Gt||x.minFilter!==Na&&x.minFilter!==ss||x.type===On&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function tt(A,x){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));let $=x.source,ee=f.get($);ee===void 0&&(ee={},f.set($,ee));let ge=J(x);if(ge!==A.__cacheKey){ee[ge]===void 0&&(ee[ge]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ee[ge].usedTimes++;let _e=ee[A.__cacheKey];_e!==void 0&&(ee[A.__cacheKey].usedTimes--,_e.usedTimes===0&&R(x)),A.__cacheKey=ge,A.__webglTexture=ee[ge].texture}return H}function Q(A,x,H){return Math.floor(Math.floor(A/H)/x)}function ie(A,x,H,$){let ge=A.updateRanges;if(ge.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,H,$,x.data);else{ge.sort((Be,Me)=>Be.start-Me.start);let _e=0;for(let Be=1;Be<ge.length;Be++){let Me=ge[_e],ve=ge[Be],ze=Me.start+Me.count,We=Q(ve.start,x.width,4),et=Q(Me.start,x.width,4);ve.start<=ze+1&&We===et&&Q(ve.start+ve.count-1,x.width,4)===We?Me.count=Math.max(Me.count,ve.start+ve.count-Me.start):(++_e,ge[_e]=ve)}ge.length=_e+1;let te=t.getParameter(n.UNPACK_ROW_LENGTH),le=t.getParameter(n.UNPACK_SKIP_PIXELS),be=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Be=0,Me=ge.length;Be<Me;Be++){let ve=ge[Be],ze=Math.floor(ve.start/4),We=Math.ceil(ve.count/4),et=ze%x.width,O=Math.floor(ze/x.width),U=We,B=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,et),t.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,et,O,U,B,H,$,x.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,te),t.pixelStorei(n.UNPACK_SKIP_PIXELS,le),t.pixelStorei(n.UNPACK_SKIP_ROWS,be)}}function ye(A,x,H){let $=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=n.TEXTURE_3D);let ee=tt(A,x),ge=x.source;t.bindTexture($,A.__webglTexture,n.TEXTURE0+H);let _e=i.get(ge);if(ge.version!==_e.__version||ee===!0){if(t.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let B=lt.getPrimaries(lt.workingColorSpace),ne=x.colorSpace===Kn?null:lt.getPrimaries(x.colorSpace),de=x.colorSpace===Kn||B===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let le=g(x.image,!1,s.maxTextureSize);le=Ze(x,le);let be=r.convert(x.format,x.colorSpace),Be=r.convert(x.type),Me=v(x.internalFormat,be,Be,x.normalized,x.colorSpace,x.isVideoTexture);Qe($,x);let ve,ze=x.mipmaps,We=x.isVideoTexture!==!0,et=_e.__version===void 0||ee===!0,O=ge.dataReady,U=y(x,le);if(x.isDepthTexture)Me=T(x.format===rs,x.type),et&&(We?t.texStorage2D(n.TEXTURE_2D,1,Me,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Me,le.width,le.height,0,be,Be,null));else if(x.isDataTexture)if(ze.length>0){We&&et&&t.texStorage2D(n.TEXTURE_2D,U,Me,ze[0].width,ze[0].height);for(let B=0,ne=ze.length;B<ne;B++)ve=ze[B],We?O&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,ve.width,ve.height,be,Be,ve.data):t.texImage2D(n.TEXTURE_2D,B,Me,ve.width,ve.height,0,be,Be,ve.data);x.generateMipmaps=!1}else We?(et&&t.texStorage2D(n.TEXTURE_2D,U,Me,le.width,le.height),O&&ie(x,le,be,Be)):t.texImage2D(n.TEXTURE_2D,0,Me,le.width,le.height,0,be,Be,le.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){We&&et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,U,Me,ze[0].width,ze[0].height,le.depth);for(let B=0,ne=ze.length;B<ne;B++)if(ve=ze[B],x.format!==Bn)if(be!==null)if(We){if(O)if(x.layerUpdates.size>0){let de=Vu(ve.width,ve.height,x.format,x.type);for(let V of x.layerUpdates){let se=ve.data.subarray(V*de/ve.data.BYTES_PER_ELEMENT,(V+1)*de/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,V,ve.width,ve.height,1,be,se)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,ve.width,ve.height,le.depth,be,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,B,Me,ve.width,ve.height,le.depth,0,ve.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,ve.width,ve.height,le.depth,be,Be,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,B,Me,ve.width,ve.height,le.depth,0,be,Be,ve.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{We&&et&&t.texStorage2D(n.TEXTURE_2D,U,Me,ze[0].width,ze[0].height);for(let B=0,ne=ze.length;B<ne;B++)ve=ze[B],x.format!==Bn?be!==null?We?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,B,0,0,ve.width,ve.height,be,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,B,Me,ve.width,ve.height,0,ve.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?O&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,ve.width,ve.height,be,Be,ve.data):t.texImage2D(n.TEXTURE_2D,B,Me,ve.width,ve.height,0,be,Be,ve.data)}else if(x.isDataArrayTexture)if(We){if(et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,U,Me,le.width,le.height,le.depth),O)if(x.layerUpdates.size>0){let B=Vu(le.width,le.height,x.format,x.type);for(let ne of x.layerUpdates){let de=le.data.subarray(ne*B/le.data.BYTES_PER_ELEMENT,(ne+1)*B/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,le.width,le.height,1,be,Be,de)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,be,Be,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,le.width,le.height,le.depth,0,be,Be,le.data);else if(x.isData3DTexture)We?(et&&t.texStorage3D(n.TEXTURE_3D,U,Me,le.width,le.height,le.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,be,Be,le.data)):t.texImage3D(n.TEXTURE_3D,0,Me,le.width,le.height,le.depth,0,be,Be,le.data);else if(x.isFramebufferTexture){if(et)if(We)t.texStorage2D(n.TEXTURE_2D,U,Me,le.width,le.height);else{let B=le.width,ne=le.height;for(let de=0;de<U;de++)t.texImage2D(n.TEXTURE_2D,de,Me,B,ne,0,be,Be,null),B>>=1,ne>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let B=n.canvas;if(B.hasAttribute("layoutsubtree")||B.setAttribute("layoutsubtree","true"),le.parentNode!==B){B.appendChild(le),u.add(x),B.onpaint=ne=>{let de=ne.changedElements;for(let V of u)de.includes(V.image)&&(V.needsUpdate=!0)},B.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,le);else{let de=n.RGBA,V=n.RGBA,se=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,de,V,se,le)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ze.length>0){if(We&&et){let B=qe(ze[0]);t.texStorage2D(n.TEXTURE_2D,U,Me,B.width,B.height)}for(let B=0,ne=ze.length;B<ne;B++)ve=ze[B],We?O&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,be,Be,ve):t.texImage2D(n.TEXTURE_2D,B,Me,be,Be,ve);x.generateMipmaps=!1}else if(We){if(et){let B=qe(le);t.texStorage2D(n.TEXTURE_2D,U,Me,B.width,B.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Be,le)}else t.texImage2D(n.TEXTURE_2D,0,Me,be,Be,le);m(x)&&S($),_e.__version=ge.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Xe(A,x,H){if(x.image.length!==6)return;let $=tt(A,x),ee=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+H);let ge=i.get(ee);if(ee.version!==ge.__version||$===!0){t.activeTexture(n.TEXTURE0+H);let _e=lt.getPrimaries(lt.workingColorSpace),te=x.colorSpace===Kn?null:lt.getPrimaries(x.colorSpace),le=x.colorSpace===Kn||_e===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let be=x.isCompressedTexture||x.image[0].isCompressedTexture,Be=x.image[0]&&x.image[0].isDataTexture,Me=[];for(let V=0;V<6;V++)!be&&!Be?Me[V]=g(x.image[V],!0,s.maxCubemapSize):Me[V]=Be?x.image[V].image:x.image[V],Me[V]=Ze(x,Me[V]);let ve=Me[0],ze=r.convert(x.format,x.colorSpace),We=r.convert(x.type),et=v(x.internalFormat,ze,We,x.normalized,x.colorSpace),O=x.isVideoTexture!==!0,U=ge.__version===void 0||$===!0,B=ee.dataReady,ne=y(x,ve);Qe(n.TEXTURE_CUBE_MAP,x);let de;if(be){O&&U&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,et,ve.width,ve.height);for(let V=0;V<6;V++){de=Me[V].mipmaps;for(let se=0;se<de.length;se++){let me=de[se];x.format!==Bn?ze!==null?O?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,se,0,0,me.width,me.height,ze,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,se,et,me.width,me.height,0,me.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,se,0,0,me.width,me.height,ze,We,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,se,et,me.width,me.height,0,ze,We,me.data)}}}else{if(de=x.mipmaps,O&&U){de.length>0&&ne++;let V=qe(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,et,V.width,V.height)}for(let V=0;V<6;V++)if(Be){O?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Me[V].width,Me[V].height,ze,We,Me[V].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,et,Me[V].width,Me[V].height,0,ze,We,Me[V].data);for(let se=0;se<de.length;se++){let nt=de[se].image[V].image;O?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,se+1,0,0,nt.width,nt.height,ze,We,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,se+1,et,nt.width,nt.height,0,ze,We,nt.data)}}else{O?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,ze,We,Me[V]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,et,ze,We,Me[V]);for(let se=0;se<de.length;se++){let me=de[se];O?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,se+1,0,0,ze,We,me.image[V]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,se+1,et,ze,We,me.image[V])}}}m(x)&&S(n.TEXTURE_CUBE_MAP),ge.__version=ee.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Ae(A,x,H,$,ee,ge){let _e=r.convert(H.format,H.colorSpace),te=r.convert(H.type),le=v(H.internalFormat,_e,te,H.normalized,H.colorSpace),be=i.get(x),Be=i.get(H);if(Be.__renderTarget=x,!be.__hasExternalTextures){let Me=Math.max(1,x.width>>ge),ve=Math.max(1,x.height>>ge);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,ge,le,Me,ve,x.depth,0,_e,te,null):t.texImage2D(ee,ge,le,Me,ve,0,_e,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Ve(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,ee,Be.__webglTexture,0,Fe(x)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,ee,Be.__webglTexture,ge),t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(A,x,H){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){let $=x.depthTexture,ee=$&&$.isDepthTexture?$.type:null,ge=T(x.stencilBuffer,ee),_e=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ve(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe(x),ge,x.width,x.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe(x),ge,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ge,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,A)}else{let $=x.textures;for(let ee=0;ee<$.length;ee++){let ge=$[ee],_e=r.convert(ge.format,ge.colorSpace),te=r.convert(ge.type),le=v(ge.internalFormat,_e,te,ge.normalized,ge.colorSpace);Ve(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe(x),le,x.width,x.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe(x),le,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,le,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function re(A,x,H){let $=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=i.get(x.depthTexture);if(ee.__renderTarget=x,(!ee.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),ee.__webglTexture===void 0){ee.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Qe(n.TEXTURE_CUBE_MAP,x.depthTexture);let be=r.convert(x.depthTexture.format),Be=r.convert(x.depthTexture.type),Me;x.depthTexture.format===li?Me=n.DEPTH_COMPONENT24:x.depthTexture.format===rs&&(Me=n.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Me,x.width,x.height,0,be,Be,null)}}else he(x.depthTexture,0);let ge=ee.__webglTexture,_e=Fe(x),te=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,le=x.depthTexture.format===rs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===li)Ve(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,te,ge,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,le,te,ge,0);else if(x.depthTexture.format===rs)Ve(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,te,ge,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,le,te,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function G(A){let x=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let $=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){let ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=$}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(H)for(let $=0;$<6;$++)re(x.__webglFramebuffer[$],A,$);else{let $=A.texture.mipmaps;$&&$.length>0?re(x.__webglFramebuffer[0],A,0):re(x.__webglFramebuffer,A,0)}else if(H){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=n.createRenderbuffer(),He(x.__webglDepthbuffer[$],A,!1);else{let ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=x.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ge)}}else{let $=A.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),He(x.__webglDepthbuffer,A,!1);else{let ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ge)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function W(A,x,H){let $=i.get(A);x!==void 0&&Ae($.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&G(A)}function j(A){let x=A.texture,H=i.get(A),$=i.get(x);A.addEventListener("dispose",_);let ee=A.textures,ge=A.isWebGLCubeRenderTarget===!0,_e=ee.length>1;if(_e||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=x.version,a.memory.textures++),ge){H.__webglFramebuffer=[];for(let te=0;te<6;te++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[te]=[];for(let le=0;le<x.mipmaps.length;le++)H.__webglFramebuffer[te][le]=n.createFramebuffer()}else H.__webglFramebuffer[te]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let te=0;te<x.mipmaps.length;te++)H.__webglFramebuffer[te]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(_e)for(let te=0,le=ee.length;te<le;te++){let be=i.get(ee[te]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&Ve(A)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let te=0;te<ee.length;te++){let le=ee[te];H.__webglColorRenderbuffer[te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[te]);let be=r.convert(le.format,le.colorSpace),Be=r.convert(le.type),Me=v(le.internalFormat,be,Be,le.normalized,le.colorSpace,A.isXRRenderTarget===!0),ve=Fe(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,Me,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,H.__webglColorRenderbuffer[te])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),He(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ge){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Qe(n.TEXTURE_CUBE_MAP,x);for(let te=0;te<6;te++)if(x.mipmaps&&x.mipmaps.length>0)for(let le=0;le<x.mipmaps.length;le++)Ae(H.__webglFramebuffer[te][le],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,le);else Ae(H.__webglFramebuffer[te],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);m(x)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let te=0,le=ee.length;te<le;te++){let be=ee[te],Be=i.get(be),Me=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Me=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,Be.__webglTexture),Qe(Me,be),Ae(H.__webglFramebuffer,A,be,n.COLOR_ATTACHMENT0+te,Me,0),m(be)&&S(Me)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(te=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,$.__webglTexture),Qe(te,x),x.mipmaps&&x.mipmaps.length>0)for(let le=0;le<x.mipmaps.length;le++)Ae(H.__webglFramebuffer[le],A,x,n.COLOR_ATTACHMENT0,te,le);else Ae(H.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,te,0);m(x)&&S(te),t.unbindTexture()}A.depthBuffer&&G(A)}function ae(A){let x=A.textures;for(let H=0,$=x.length;H<$;H++){let ee=x[H];if(m(ee)){let ge=w(A),_e=i.get(ee).__webglTexture;t.bindTexture(ge,_e),S(ge),t.unbindTexture()}}}let fe=[],Ue=[];function Ie(A){if(A.samples>0){if(Ve(A)===!1){let x=A.textures,H=A.width,$=A.height,ee=n.COLOR_BUFFER_BIT,ge=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(A),te=x.length>1;if(te)for(let be=0;be<x.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let le=A.texture.mipmaps;le&&le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let be=0;be<x.length;be++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[be]);let Be=i.get(x[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Be,0)}n.blitFramebuffer(0,0,H,$,0,0,H,$,ee,n.NEAREST),l===!0&&(fe.length=0,Ue.length=0,fe.push(n.COLOR_ATTACHMENT0+be),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(fe.push(ge),Ue.push(ge),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ue)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),te)for(let be=0;be<x.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,_e.__webglColorRenderbuffer[be]);let Be=i.get(x[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Fe(A){return Math.min(s.maxSamples,A.samples)}function Ve(A){let x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function I(A){let x=a.render.frame;d.get(A)!==x&&(d.set(A,x),A.update())}function Ze(A,x){let H=A.colorSpace,$=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==ra&&H!==Kn&&(lt.getTransfer(H)===pt?($!==Bn||ee!==mn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",H)),x}function qe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=z,this.getTextureUnits=L,this.setTextureUnits=k,this.setTexture2D=he,this.setTexture2DArray=K,this.setTexture3D=ce,this.setTextureCube=ue,this.rebindTextures=W,this.setupRenderTarget=j,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=G,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function oy(n,e){function t(i,s=Kn){let r,a=lt.getTransfer(s);if(i===mn)return n.UNSIGNED_BYTE;if(i===gl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_l)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ru)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Iu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Au)return n.BYTE;if(i===Cu)return n.SHORT;if(i===Tr)return n.UNSIGNED_SHORT;if(i===ml)return n.INT;if(i===Zn)return n.UNSIGNED_INT;if(i===On)return n.FLOAT;if(i===Jn)return n.HALF_FLOAT;if(i===Pu)return n.ALPHA;if(i===Lu)return n.RGB;if(i===Bn)return n.RGBA;if(i===li)return n.DEPTH_COMPONENT;if(i===rs)return n.DEPTH_STENCIL;if(i===xl)return n.RED;if(i===vl)return n.RED_INTEGER;if(i===as)return n.RG;if(i===yl)return n.RG_INTEGER;if(i===bl)return n.RGBA_INTEGER;if(i===Ua||i===Fa||i===Oa||i===Ba)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ml||i===Sl||i===El||i===Tl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===El)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wl||i===Al||i===Cl||i===Rl||i===Il||i===za||i===Pl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===wl||i===Al)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Cl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Rl)return r.COMPRESSED_R11_EAC;if(i===Il)return r.COMPRESSED_SIGNED_R11_EAC;if(i===za)return r.COMPRESSED_RG11_EAC;if(i===Pl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ll||i===Dl||i===Nl||i===Ul||i===Fl||i===Ol||i===Bl||i===zl||i===kl||i===Vl||i===Gl||i===Hl||i===Wl||i===Xl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ll)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ul)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ol)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ql||i===$l||i===Yl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ql)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zl||i===Jl||i===ka||i===Kl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Zl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}function hy(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Bu(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,S,w,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),d(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),M(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,S,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===qt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===qt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let S=e.get(m),w=S.envMap,v=S.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(uy.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Kf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=w*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function M(g,m){let S=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function dy(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let y=T.program;i.uniformBlockBinding(v,y)}function c(v,T){let y=s[v.id];y===void 0&&(g(v),y=d(v),s[v.id]=y,v.addEventListener("dispose",S));let C=T.program;i.updateUBOMapping(v,C);let _=e.render.frame;r[v.id]!==_&&(h(v),r[v.id]=_)}function d(v){let T=u();v.__bindingPointIndex=T;let y=n.createBuffer(),C=v.__size,_=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,y),y}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let T=s[v.id],y=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let _=0,E=y.length;_<E;_++){let R=y[_];if(Array.isArray(R))for(let N=0,P=R.length;N<P;N++)f(R[N],_,N,C);else f(R,_,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,T,y,C){if(M(v,T,y,C)===!0){let _=v.__offset,E=v.value;if(Array.isArray(E)){let R=0;for(let N=0;N<E.length;N++){let P=E[N],z=m(P);p(P,v.__data,R),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(R+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,v.__data)}}function p(v,T,y){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,y)}function M(v,T,y,C){let _=v.value,E=T+"_"+y;if(C[E]===void 0)return typeof _=="number"||typeof _=="boolean"?C[E]=_:ArrayBuffer.isView(_)?C[E]=_.slice():C[E]=_.clone(),!0;{let R=C[E];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return C[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function g(v){let T=v.uniforms,y=0,C=16;for(let E=0,R=T.length;E<R;E++){let N=Array.isArray(T[E])?T[E]:[T[E]];for(let P=0,z=N.length;P<z;P++){let L=N[P],k=Array.isArray(L.value)?L.value:[L.value];for(let Z=0,J=k.length;Z<J;Z++){let he=k[Z],K=m(he),ce=y%C,ue=ce%K.boundary,Le=ce+ue;y+=ue,Le!==0&&C-Le<K.storage&&(y+=C-Le),L.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=K.storage}}}let _=y%C;return _>0&&(y+=C-_),v.__size=y,v.__cache={},this}function m(v){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",v),T}function S(v){let T=v.target;T.removeEventListener("dispose",S);let y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function w(){for(let v in s)n.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}function py(){return hi===null&&(hi=new da(fy,16,16,as,Jn),hi.name="DFG_LUT",hi.minFilter=Xt,hi.magFilter=Xt,hi.wrapS=oi,hi.wrapT=oi,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var Ag,Cg,Rg,Ig,Pg,Lg,Dg,Ng,Ug,Fg,Og,Bg,zg,kg,Vg,Gg,Hg,Wg,Xg,qg,$g,Yg,Zg,Jg,Kg,jg,Qg,e0,t0,n0,i0,s0,r0,a0,o0,l0,c0,u0,h0,d0,f0,p0,m0,g0,_0,x0,v0,y0,b0,M0,S0,E0,T0,w0,A0,C0,R0,I0,P0,L0,D0,N0,U0,F0,O0,B0,z0,k0,V0,G0,H0,W0,X0,q0,$0,Y0,Z0,J0,K0,j0,Q0,e_,t_,n_,i_,s_,r_,a_,o_,l_,c_,u_,h_,d_,f_,p_,m_,g_,__,x_,v_,y_,b_,M_,S_,E_,T_,w_,A_,C_,R_,I_,P_,L_,D_,N_,U_,F_,O_,B_,z_,k_,V_,G_,H_,W_,X_,q_,$_,Y_,Z_,J_,K_,j_,Q_,ex,tx,nx,ix,sx,rx,ax,rt,Ee,di,tc,ox,qf,Cr,fx,px,mx,Va,Ef,Yu,Zu,Ju,Ku,gx,Ps,ic,sc,Ax,$f,eh,Yf,Zf,Jf,Cf,Rf,If,Pf,Lf,th,nh,ih,ju,Rr,gv,_v,Uf,bv,nc,Av,Cv,Iv,Lv,Nv,Fv,Bv,Gv,rh,ah,Jv,ey,ty,ny,iy,Wf,Ga,Qu,ly,cy,oh,lh,uy,Kf,fy,hi,Ir,Wa=In(()=>{$u();$u();Ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cg=`#ifdef USE_ALPHAHASH
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
#endif`,Rg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ig=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dg=`#ifdef USE_AOMAP
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
#endif`,Ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ug=`#ifdef USE_BATCHING
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
#endif`,Fg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kg=`#ifdef USE_IRIDESCENCE
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
#endif`,Vg=`#ifdef USE_BUMPMAP
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
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Jg=`#define PI 3.141592653589793
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
} // validated`,Kg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jg=`vec3 transformedNormal = objectNormal;
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
#endif`,Qg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i0="gl_FragColor = linearToOutputTexel( gl_FragColor );",s0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r0=`#ifdef USE_ENVMAP
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
#endif`,a0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
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
#endif`,u0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p0=`#ifdef USE_GRADIENTMAP
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
}`,m0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,v0=`#ifdef USE_ENVMAP
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
#endif`,y0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E0=`PhysicalMaterial material;
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
#endif`,T0=`uniform sampler2D dfgLUT;
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
}`,w0=`
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
#endif`,A0=`#if defined( RE_IndirectDiffuse )
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
#endif`,C0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,I0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O0=`#if defined( USE_POINTS_UV )
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
#endif`,B0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H0=`#ifdef USE_MORPHTARGETS
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
#endif`,W0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,J0=`#ifdef USE_NORMALMAP
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
#endif`,K0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,d_=`float getShadowMask() {
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
}`,f_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p_=`#ifdef USE_SKINNING
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
#endif`,m_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g_=`#ifdef USE_SKINNING
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
#endif`,__=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b_=`#ifdef USE_TRANSMISSION
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
#endif`,M_=`#ifdef USE_TRANSMISSION
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
#endif`,S_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,A_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C_=`uniform sampler2D t2D;
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
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D_=`#include <common>
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
}`,N_=`#if DEPTH_PACKING == 3200
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
}`,U_=`#define DISTANCE
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
}`,F_=`#define DISTANCE
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
}`,O_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z_=`uniform float scale;
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
}`,k_=`uniform vec3 diffuse;
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
}`,V_=`#include <common>
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
}`,G_=`uniform vec3 diffuse;
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
}`,H_=`#define LAMBERT
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
}`,W_=`#define LAMBERT
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
}`,X_=`#define MATCAP
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
}`,q_=`#define MATCAP
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
}`,$_=`#define NORMAL
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
}`,Y_=`#define NORMAL
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
}`,Z_=`#define PHONG
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
}`,J_=`#define PHONG
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
}`,K_=`#define STANDARD
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
}`,j_=`#define STANDARD
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
}`,Q_=`#define TOON
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
}`,ex=`#define TOON
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
}`,tx=`uniform float size;
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
}`,nx=`uniform vec3 diffuse;
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
}`,ix=`#include <common>
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
}`,sx=`uniform vec3 color;
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
}`,rx=`uniform float rotation;
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
}`,ax=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:Ag,alphahash_pars_fragment:Cg,alphamap_fragment:Rg,alphamap_pars_fragment:Ig,alphatest_fragment:Pg,alphatest_pars_fragment:Lg,aomap_fragment:Dg,aomap_pars_fragment:Ng,batching_pars_vertex:Ug,batching_vertex:Fg,begin_vertex:Og,beginnormal_vertex:Bg,bsdfs:zg,iridescence_fragment:kg,bumpmap_pars_fragment:Vg,clipping_planes_fragment:Gg,clipping_planes_pars_fragment:Hg,clipping_planes_pars_vertex:Wg,clipping_planes_vertex:Xg,color_fragment:qg,color_pars_fragment:$g,color_pars_vertex:Yg,color_vertex:Zg,common:Jg,cube_uv_reflection_fragment:Kg,defaultnormal_vertex:jg,displacementmap_pars_vertex:Qg,displacementmap_vertex:e0,emissivemap_fragment:t0,emissivemap_pars_fragment:n0,colorspace_fragment:i0,colorspace_pars_fragment:s0,envmap_fragment:r0,envmap_common_pars_fragment:a0,envmap_pars_fragment:o0,envmap_pars_vertex:l0,envmap_physical_pars_fragment:v0,envmap_vertex:c0,fog_vertex:u0,fog_pars_vertex:h0,fog_fragment:d0,fog_pars_fragment:f0,gradientmap_pars_fragment:p0,lightmap_pars_fragment:m0,lights_lambert_fragment:g0,lights_lambert_pars_fragment:_0,lights_pars_begin:x0,lights_toon_fragment:y0,lights_toon_pars_fragment:b0,lights_phong_fragment:M0,lights_phong_pars_fragment:S0,lights_physical_fragment:E0,lights_physical_pars_fragment:T0,lights_fragment_begin:w0,lights_fragment_maps:A0,lights_fragment_end:C0,lightprobes_pars_fragment:R0,logdepthbuf_fragment:I0,logdepthbuf_pars_fragment:P0,logdepthbuf_pars_vertex:L0,logdepthbuf_vertex:D0,map_fragment:N0,map_pars_fragment:U0,map_particle_fragment:F0,map_particle_pars_fragment:O0,metalnessmap_fragment:B0,metalnessmap_pars_fragment:z0,morphinstance_vertex:k0,morphcolor_vertex:V0,morphnormal_vertex:G0,morphtarget_pars_vertex:H0,morphtarget_vertex:W0,normal_fragment_begin:X0,normal_fragment_maps:q0,normal_pars_fragment:$0,normal_pars_vertex:Y0,normal_vertex:Z0,normalmap_pars_fragment:J0,clearcoat_normal_fragment_begin:K0,clearcoat_normal_fragment_maps:j0,clearcoat_pars_fragment:Q0,iridescence_pars_fragment:e_,opaque_fragment:t_,packing:n_,premultiplied_alpha_fragment:i_,project_vertex:s_,dithering_fragment:r_,dithering_pars_fragment:a_,roughnessmap_fragment:o_,roughnessmap_pars_fragment:l_,shadowmap_pars_fragment:c_,shadowmap_pars_vertex:u_,shadowmap_vertex:h_,shadowmask_pars_fragment:d_,skinbase_vertex:f_,skinning_pars_vertex:p_,skinning_vertex:m_,skinnormal_vertex:g_,specularmap_fragment:__,specularmap_pars_fragment:x_,tonemapping_fragment:v_,tonemapping_pars_fragment:y_,transmission_fragment:b_,transmission_pars_fragment:M_,uv_pars_fragment:S_,uv_pars_vertex:E_,uv_vertex:T_,worldpos_vertex:w_,background_vert:A_,background_frag:C_,backgroundCube_vert:R_,backgroundCube_frag:I_,cube_vert:P_,cube_frag:L_,depth_vert:D_,depth_frag:N_,distance_vert:U_,distance_frag:F_,equirect_vert:O_,equirect_frag:B_,linedashed_vert:z_,linedashed_frag:k_,meshbasic_vert:V_,meshbasic_frag:G_,meshlambert_vert:H_,meshlambert_frag:W_,meshmatcap_vert:X_,meshmatcap_frag:q_,meshnormal_vert:$_,meshnormal_frag:Y_,meshphong_vert:Z_,meshphong_frag:J_,meshphysical_vert:K_,meshphysical_frag:j_,meshtoon_vert:Q_,meshtoon_frag:ex,points_vert:tx,points_frag:nx,shadow_vert:ix,shadow_frag:sx,sprite_vert:rx,sprite_frag:ax},Ee={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},di={basic:{uniforms:Kt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Kt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Kt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Kt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Kt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ke(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Kt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Kt([Ee.points,Ee.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Kt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Kt([Ee.common,Ee.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Kt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Kt([Ee.sprite,Ee.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:Kt([Ee.common,Ee.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:Kt([Ee.lights,Ee.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};di.physical={uniforms:Kt([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};tc={r:0,b:0,g:0},ox=new mt,qf=new je;qf.set(-1,0,0,0,1,0,0,0,1);Cr=4,fx=6,px=20,mx=256,Va=new br,Ef=new Ke,Yu=null,Zu=0,Ju=0,Ku=!1,gx=new D,Ps=new D,ic=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=gx}=r;Yu=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yu,Zu,Ju),this._renderer.xr.enabled=Ku,e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yu=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Jn,format:Bn,colorSpace:ra,depthBuffer:!1},s=Tf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tf(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_x(r)),this._blurMaterial=vx(r,e,t),this._ggxMaterial=xx(r,e,t)}return s}_compileMaterial(e){let t=new Ht(new Pt,e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,i,s,r){let l=new Ft(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ef),u.toneMapping=Yn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ht(new qn,new Nn({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,g=M.material,m=!1,S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,m=!0):(g.color.copy(Ef),m=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[w]));let T=this._cubeSize;Ar(s,v*T,w>2?T:0,T,T),u.setRenderTarget(s),m&&u.render(M,l),u.render(e,l)}u.toneMapping=f,u.autoClear=h,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===is||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Af()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ar(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Va)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),h=c*1.25,f=u*h,{_lodMax:p}=this,M=this._sizeLods[i],g=3*M*(i>p-Cr?i-p+Cr:0),m=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Ar(r,g,m,3*M,2*M),s.setRenderTarget(r),s.render(o,Va),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,Ar(e,g,m,3*M,2*M),s.setRenderTarget(e),s.render(o,Va)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let d=this._sizeLods[s],u=3*d*(s>this._lodMax-Cr?s-this._lodMax+Cr:0),h=4*(this._cubeSize-d);Ar(t,u,h,3*d,2*d),a.setRenderTarget(t),a.render(l,Va)}};sc=class extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new pa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qn(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:ui});r.uniforms.tEquirect.value=t;let a=new Ht(s,r),o=t.minFilter;return t.minFilter===ss&&(t.minFilter=Xt),new cl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};Ax={[yu]:"LINEAR_TONE_MAPPING",[bu]:"REINHARD_TONE_MAPPING",[Mu]:"CINEON_TONE_MAPPING",[As]:"ACES_FILMIC_TONE_MAPPING",[Eu]:"AGX_TONE_MAPPING",[Tu]:"NEUTRAL_TONE_MAPPING",[Su]:"CUSTOM_TONE_MAPPING"};$f=new Jt,eh=new qi(1,1),Yf=new oa,Zf=new Go,Jf=new pa,Cf=[],Rf=[],If=new Float32Array(16),Pf=new Float32Array(9),Lf=new Float32Array(4);th=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Yx(t.type)}},nh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pv(t.type)}},ih=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},ju=/(\w+)(\])?(\[|\.)?/g;Rr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);mv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};gv=37297,_v=0;Uf=new je;bv={[yu]:"Linear",[bu]:"Reinhard",[Mu]:"Cineon",[As]:"ACESFilmic",[Eu]:"AgX",[Tu]:"Neutral",[Su]:"Custom"};nc=new D;Av=/^[ \t]*#include +<([\w\d./]+)>/gm;Cv=new Map;Iv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Lv={[Ts]:"SHADOWMAP_TYPE_PCF",[Sr]:"SHADOWMAP_TYPE_VSM"};Nv={[is]:"ENVMAP_TYPE_CUBE",[Cs]:"ENVMAP_TYPE_CUBE",[Da]:"ENVMAP_TYPE_CUBE_UV"};Fv={[Cs]:"ENVMAP_MODE_REFRACTION"};Bv={[vu]:"ENVMAP_BLENDING_MULTIPLY",[jd]:"ENVMAP_BLENDING_MIX",[Qd]:"ENVMAP_BLENDING_ADD"};Gv=0,rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ah(e),t.set(e,i)),i}},ah=class{constructor(e){this.id=Gv++,this.code=e,this.usedTimes=0}};Jv=0;ey=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ty=`uniform sampler2D shadow_pass;
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
}`,ny=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],iy=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Wf=new mt,Ga=new D,Qu=new D;ly=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cy=`
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

}`,oh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ga(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new En({vertexShader:ly,fragmentShader:cy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new $i(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lh=class extends Xn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,p=null,M=typeof XRWebGLBinding<"u",g=new oh,m={},S=t.getContextAttributes(),w=null,v=null,T=[],y=[],C=new pe,_=null,E=null,R=new Ft;R.viewport=new wt;let N=new Ft;N.viewport=new wt;let P=[R,N],z=new ul,L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=T[Q];return ie===void 0&&(ie=new hr,T[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=T[Q];return ie===void 0&&(ie=new hr,T[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=T[Q];return ie===void 0&&(ie=new hr,T[Q]=ie),ie.getHandSpace()};function Z(Q){let ie=y.indexOf(Q.inputSource);if(ie===-1)return;let ye=T[ie];ye!==void 0&&(ye.update(Q.inputSource,Q.frame,c||a),ye.dispatchEvent({type:Q.type,data:Q.inputSource}))}function J(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",he);for(let Q=0;Q<T.length;Q++){let ie=y[Q];ie!==null&&(y[Q]=null,T[Q].disconnect(ie))}L=null,k=null,g.reset();for(let Q in m)delete m[Q];if(e.setRenderTarget(w),f=null,h=null,u=null,s=null,v=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),E!==null){let Q=E.camera;Q.fov=E.fov,Q.zoom=E.zoom,Q.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",J),s.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Xe=null,Ae=null;S.depth&&(Ae=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=S.stencil?rs:li,Xe=S.stencil?wr:Zn);let He={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(He),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new pn(h.textureWidth,h.textureHeight,{format:Bn,type:mn,depthTexture:new qi(h.textureWidth,h.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new pn(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),tt.setContext(s),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function he(Q){for(let ie=0;ie<Q.removed.length;ie++){let ye=Q.removed[ie],Xe=y.indexOf(ye);Xe>=0&&(y[Xe]=null,T[Xe].disconnect(ye))}for(let ie=0;ie<Q.added.length;ie++){let ye=Q.added[ie],Xe=y.indexOf(ye);if(Xe===-1){for(let He=0;He<T.length;He++)if(He>=y.length){y.push(ye),Xe=He;break}else if(y[He]===null){y[He]=ye,Xe=He;break}if(Xe===-1)break}let Ae=T[Xe];Ae&&Ae.connect(ye)}}let K=new D,ce=new D;function ue(Q,ie,ye){K.setFromMatrixPosition(ie.matrixWorld),ce.setFromMatrixPosition(ye.matrixWorld);let Xe=K.distanceTo(ce),Ae=ie.projectionMatrix.elements,He=ye.projectionMatrix.elements,re=Ae[14]/(Ae[10]-1),G=Ae[14]/(Ae[10]+1),W=(Ae[9]+1)/Ae[5],j=(Ae[9]-1)/Ae[5],ae=(Ae[8]-1)/Ae[0],fe=(He[8]+1)/He[0],Ue=re*ae,Ie=re*fe,Fe=Xe/(-ae+fe),Ve=Fe*-ae;if(ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ve),Q.translateZ(Fe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ae[10]===-1)Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let I=re+Fe,Ze=G+Fe,qe=Ue-Ve,A=Ie+(Xe-Ve),x=W*G/Ze*I,H=j*G/Ze*I;Q.projectionMatrix.makePerspective(qe,A,x,H,I,Ze),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Le(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ie=Q.near,ye=Q.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),z.near=N.near=R.near=ie,z.far=N.far=R.far=ye,(L!==z.near||k!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,k=z.far),z.layers.mask=Q.layers.mask|6,R.layers.mask=z.layers.mask&-5,N.layers.mask=z.layers.mask&-3;let Xe=Q.parent,Ae=z.cameras;Le(z,Xe);for(let He=0;He<Ae.length;He++)Le(Ae[He],Xe);Ae.length===2?ue(z,R,N):z.projectionMatrix.copy(R.projectionMatrix),E===null&&Q.isPerspectiveCamera&&(E={camera:Q,fov:Q.fov,zoom:Q.zoom}),Ce(Q,z,Xe)};function Ce(Q,ie,ye){ye===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(ye.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=lr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(Q){return m[Q]};let ot=null;function Qe(Q,ie){if(d=ie.getViewerPose(c||a),p=ie,d!==null){let ye=d.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Xe=!1;ye.length!==z.cameras.length&&(z.cameras.length=0,Xe=!0);for(let G=0;G<ye.length;G++){let W=ye[G],j=null;if(f!==null)j=f.getViewport(W);else{let fe=u.getViewSubImage(h,W);j=fe.viewport,G===0&&(e.setRenderTargetTextures(v,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(v))}let ae=P[G];ae===void 0&&(ae=new Ft,ae.layers.enable(G),ae.viewport=new wt,P[G]=ae),ae.matrix.fromArray(W.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(W.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(j.x,j.y,j.width,j.height),G===0&&(z.matrix.copy(ae.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Xe===!0&&z.cameras.push(ae)}let Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=i.getBinding();let G=u.getDepthInformation(ye[0]);G&&G.isValid&&G.texture&&g.init(G,s.renderState)}if(Ae&&Ae.includes("camera-access")&&M){e.state.unbindTexture(),u=i.getBinding();for(let G=0;G<ye.length;G++){let W=ye[G].camera;if(W){let j=m[W];j||(j=new ga,m[W]=j);let ae=u.getCameraImage(W);j.sourceTexture=ae}}}}for(let ye=0;ye<T.length;ye++){let Xe=y[ye],Ae=T[ye];Xe!==null&&Ae!==void 0&&Ae.update(Xe,ie,c||a)}ot&&ot(Q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),p=null}let tt=new Xf;tt.setAnimationLoop(Qe),this.setAnimationLoop=function(Q){ot=Q},this.dispose=function(){}}},uy=new mt,Kf=new je;Kf.set(-1,0,0,0,1,0,0,0,1);fy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;Ir=class{constructor(e={}){let{canvas:t=df(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:f=mn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let M=f,g=new Set([bl,yl,vl]),m=new Set([mn,Zn,Tr,wr,gl,_l]),S=new Uint32Array(4),w=new Int32Array(4),v=new D,T=null,y=null,C=[],_=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,P=null,z=null,L=null,k=null;this._outputColorSpace=Vt;let Z=0,J=0,he=null,K=-1,ce=null,ue=new wt,Le=new wt,Ce=null,ot=new Ke(0),Qe=0,tt=t.width,Q=t.height,ie=1,ye=null,Xe=null,Ae=new wt(0,0,tt,Q),He=new wt(0,0,tt,Q),re=!1,G=new fr,W=!1,j=!1,ae=new mt,fe=new D,Ue=new wt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function Ve(){return he===null?ie:1}let I=i;function Ze(b,F){return t.getContext(b,F)}let qe,A,x,H,$,ee,ge,_e,te,le,be,Be,Me,ve,ze,We,et,O,U,B,ne,de,V;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",nt,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",ut,!1),I===null){let F="webgl2";if(I=Ze(F,b),I===null)throw Ze(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}se()}catch(b){throw t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",ut,!1),Ye("WebGLRenderer: "+b.message),b}function se(){qe=new bx(I),qe.init(),ne=new oy(I,qe),A=new hx(I,qe,e,ne),x=new ry(I,qe),A.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),z=I.createFramebuffer(),L=I.createFramebuffer(),k=I.createFramebuffer(),H=new Ex(I),$=new Xv,ee=new ay(I,qe,x,$,A,ne,H),ge=new yx(R),_e=new wg(I),de=new cx(I,_e),te=new Mx(I,_e,H,de),le=new wx(I,te,_e,de,H),O=new Tx(I,A,ee),ze=new dx($),be=new Wv(R,ge,qe,A,de,ze),Be=new hy(R,$),Me=new $v,ve=new Qv(qe),et=new lx(R,ge,x,le,p,l),We=new sy(R,le,A),V=new dy(I,H,A,x),U=new ux(I,qe,H),B=new Sx(I,qe,H),H.programs=be.programs,R.capabilities=A,R.extensions=qe,R.properties=$,R.renderLists=Me,R.shadowMap=We,R.state=x,R.info=H}M!==mn&&(E=new Cx(M,t.width,t.height,o,s,r));let me=new lh(R,I);this.xr=me,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let b=qe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=qe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(b){b!==void 0&&(ie=b,this.setSize(tt,Q,!1))},this.getSize=function(b){return b.set(tt,Q)},this.setSize=function(b,F,Y=!0){if(me.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=b,Q=F,t.width=Math.floor(b*ie),t.height=Math.floor(F*ie),Y===!0&&(t.style.width=b+"px",t.style.height=F+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(tt*ie,Q*ie).floor()},this.setDrawingBufferSize=function(b,F,Y){tt=b,Q=F,ie=Y,t.width=Math.floor(b*Y),t.height=Math.floor(F*Y),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(M===mn){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ue)},this.getViewport=function(b){return b.copy(Ae)},this.setViewport=function(b,F,Y,X){b.isVector4?Ae.set(b.x,b.y,b.z,b.w):Ae.set(b,F,Y,X),x.viewport(ue.copy(Ae).multiplyScalar(ie).round())},this.getScissor=function(b){return b.copy(He)},this.setScissor=function(b,F,Y,X){b.isVector4?He.set(b.x,b.y,b.z,b.w):He.set(b,F,Y,X),x.scissor(Le.copy(He).multiplyScalar(ie).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(b){x.setScissorTest(re=b)},this.setOpaqueSort=function(b){ye=b},this.setTransparentSort=function(b){Xe=b},this.getClearColor=function(b){return b.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,Y=!0){let X=0;if(b){let q=!1;if(he!==null){let we=he.texture.format;q=g.has(we)}if(q){let we=he.texture.type,Pe=m.has(we),Te=et.getClearColor(),De=et.getClearAlpha(),ke=Te.r,st=Te.g,at=Te.b;Pe?(S[0]=ke,S[1]=st,S[2]=at,S[3]=De,I.clearBufferuiv(I.COLOR,0,S)):(w[0]=ke,w[1]=st,w[2]=at,w[3]=De,I.clearBufferiv(I.COLOR,0,w))}else X|=I.COLOR_BUFFER_BIT}F&&(X|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),P=b},this.dispose=function(){t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",ut,!1),et.dispose(),Me.dispose(),ve.dispose(),$.dispose(),ge.dispose(),le.dispose(),de.dispose(),V.dispose(),be.dispose(),me.dispose(),me.removeEventListener("sessionstart",vi),me.removeEventListener("sessionend",hs),kn.stop()};function nt(b){b.preventDefault(),Nu("WebGLRenderer: Context Lost."),N=!0}function Ge(){Nu("WebGLRenderer: Context Restored."),N=!1;let b=H.autoReset,F=We.enabled,Y=We.autoUpdate,X=We.needsUpdate,q=We.type;se(),H.autoReset=b,We.enabled=F,We.autoUpdate=Y,We.needsUpdate=X,We.type=q}function ut(b){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function bt(b){let F=b.target;F.removeEventListener("dispose",bt),ni(F)}function ni(b){Ni(b),$.remove(b)}function Ni(b){let F=$.get(b).programs;F!==void 0&&(F.forEach(function(Y){be.releaseProgram(Y)}),b.isShaderMaterial&&be.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,Y,X,q,we){F===null&&(F=Ie);let Pe=q.isMesh&&q.matrixWorld.determinantAffine()<0,Te=kp(b,F,Y,X,q);x.setMaterial(X,Pe);let De=Y.index,ke=1;if(X.wireframe===!0){if(De=te.getWireframeAttribute(Y),De===void 0)return;ke=2}let st=Y.drawRange,at=Y.attributes.position,Ne=st.start*ke,ft=(st.start+st.count)*ke;we!==null&&(Ne=Math.max(Ne,we.start*ke),ft=Math.min(ft,(we.start+we.count)*ke)),De!==null?(Ne=Math.max(Ne,0),ft=Math.min(ft,De.count)):at!=null&&(Ne=Math.max(Ne,0),ft=Math.min(ft,at.count));let Nt=ft-Ne;if(Nt<0||Nt===1/0)return;de.setup(q,X,Te,Y,De);let Mt,xt=U;if(De!==null&&(Mt=_e.get(De),xt=B,xt.setIndex(Mt)),q.isMesh)X.wireframe===!0?(x.setLineWidth(X.wireframeLinewidth*Ve()),xt.setMode(I.LINES)):xt.setMode(I.TRIANGLES);else if(q.isLine){let $t=X.linewidth;$t===void 0&&($t=1),x.setLineWidth($t*Ve()),q.isLineSegments?xt.setMode(I.LINES):q.isLineLoop?xt.setMode(I.LINE_LOOP):xt.setMode(I.LINE_STRIP)}else q.isPoints?xt.setMode(I.POINTS):q.isSprite&&xt.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))xt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let $t=q._multiDrawStarts,Re=q._multiDrawCounts,nn=q._multiDrawCount,ht=De?_e.get(De).bytesPerElement:1,Rn=$.get(X).currentProgram.getUniforms();for(let ii=0;ii<nn;ii++)Rn.setValue(I,"_gl_DrawID",ii),xt.render($t[ii]/ht,Re[ii])}else if(q.isInstancedMesh)xt.renderInstances(Ne,Nt,q.count);else if(Y.isInstancedBufferGeometry){let $t=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Re=Math.min(Y.instanceCount,$t);xt.renderInstances(Ne,Nt,Re)}else xt.render(Ne,Nt)};function Je(b,F,Y,X){P!==null&&b.isNodeMaterial&&P.setObject(X,b),W===!0&&ze.setState(b,Y,!1),b.transparent===!0&&b.side===Fn&&b.forceSinglePass===!1?(b.side=qt,b.needsUpdate=!0,Qa(b,F,X),b.side=ns,b.needsUpdate=!0,Qa(b,F,X),b.side=Fn):Qa(b,F,X)}this.compile=function(b,F,Y=null){Y===null&&(Y=b),P!==null&&P.renderStart(b,F,Y),y=ve.get(Y),y.init(F),_.push(y),Y.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),b!==Y&&b.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),y.setupLights(),P!==null&&P.updateLights(y.state.lightsArray),j=this.localClippingEnabled,W=ze.init(this.clippingPlanes,j),W===!0&&ze.setGlobalState(this.clippingPlanes,F),P!==null&&We.render(y.state.shadowsArray,Y,F);let X=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let we=q.material;if(we)if(Array.isArray(we))for(let Pe=0;Pe<we.length;Pe++){let Te=we[Pe];Je(Te,Y,F,q),X.add(Te)}else Je(we,Y,F,q),X.add(we)}),y=_.pop(),P!==null&&P.renderEnd(),X},this.compileAsync=function(b,F,Y=null){let X=this.compile(b,F,Y);return new Promise(q=>{function we(){if(X.forEach(function(Pe){let De=$.get(Pe).currentProgram;(De===void 0||De.isReady())&&X.delete(Pe)}),X.size===0){q(b);return}setTimeout(we,10)}qe.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Rt=null;function Wt(b){Rt&&Rt(b)}function vi(){kn.stop()}function hs(){kn.start()}let kn=new Xf;kn.setAnimationLoop(Wt),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(b){Rt=b,me.setAnimationLoop(b),b===null?kn.stop():kn.start()},me.addEventListener("sessionstart",vi),me.addEventListener("sessionend",hs),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;P!==null&&P.renderStart(b,F);let Y=me.enabled===!0&&me.isPresenting===!0,X=E!==null&&(he===null||Y)&&E.begin(R,he);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(F),F=me.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,F,he),y=ve.get(b,_.length),y.init(F),y.state.textureUnits=ee.getTextureUnits(),_.push(y),ae.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),G.setFromProjectionMatrix(ae,Wn,F.reversedDepth),j=this.localClippingEnabled,W=ze.init(this.clippingPlanes,j),T=Me.get(b,C.length),T.init(),C.push(T),me.enabled===!0&&me.isPresenting===!0){let Pe=R.xr.getDepthSensingMesh();Pe!==null&&Fs(Pe,F,-1/0,R.sortObjects)}Fs(b,F,0,R.sortObjects),T.finish(),P!==null&&P.updateLights(y.state.lightsArray),R.sortObjects===!0&&T.sort(ye,Xe),Fe=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Fe&&et.addToRenderList(T,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),W===!0&&ze.beginShadows();let q=y.state.shadowsArray;if(We.render(q,b,F),W===!0&&ze.endShadows(),(X&&E.hasRenderPass())===!1){let Pe=T.opaque,Te=T.transmissive;if(y.setupLights(),F.isArrayCamera){let De=F.cameras;if(Te.length>0)for(let ke=0,st=De.length;ke<st;ke++){let at=De[ke];Rh(Pe,Te,b,at)}Fe&&et.render(b);for(let ke=0,st=De.length;ke<st;ke++){let at=De[ke];Ch(T,b,at,at.viewport)}}else Te.length>0&&Rh(Pe,Te,b,F),Fe&&et.render(b),Ch(T,b,F)}he!==null&&J===0&&(ee.updateMultisampleRenderTarget(he),ee.updateRenderTargetMipmap(he)),X&&E.end(R),b.isScene===!0&&b.onAfterRender(R,b,F),de.resetDefaultState(),K=-1,ce=null,_.pop(),_.length>0?(y=_[_.length-1],ee.setTextureUnits(y.state.textureUnits),W===!0&&ze.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,P!==null&&P.renderEnd()};function Fs(b,F,Y,X){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLightProbeGrid)y.pushLightProbeGrid(b);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(G)){X&&Ue.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ae);let Pe=le.update(b),Te=b.material;Te.visible&&T.push(b,Pe,Te,Y,Ue.z,null,F)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(G))){let Pe=le.update(b),Te=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ue.copy(b.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ue.copy(Pe.boundingSphere.center)),Ue.applyMatrix4(b.matrixWorld).applyMatrix4(ae)),Array.isArray(Te)){let De=Pe.groups;for(let ke=0,st=De.length;ke<st;ke++){let at=De[ke],Ne=Te[at.materialIndex];Ne&&Ne.visible&&T.push(b,Pe,Ne,Y,Ue.z,at,F)}}else Te.visible&&T.push(b,Pe,Te,Y,Ue.z,null,F)}}let we=b.children;for(let Pe=0,Te=we.length;Pe<Te;Pe++)Fs(we[Pe],F,Y,X)}function Ch(b,F,Y,X){let{opaque:q,transmissive:we,transparent:Pe}=b;y.setupLightsView(Y),W===!0&&ze.setGlobalState(R.clippingPlanes,Y),X&&x.viewport(ue.copy(X)),q.length>0&&ja(q,F,Y),we.length>0&&ja(we,F,Y),Pe.length>0&&ja(Pe,F,Y),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Rh(b,F,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[X.id]===void 0){let Ne=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[X.id]=new pn(1,1,{generateMipmaps:!0,type:Ne?Jn:mn,minFilter:ss,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let we=y.state.transmissionRenderTarget[X.id],Pe=X.viewport||ue;we.setSize(Pe.z*R.transmissionResolutionScale,Pe.w*R.transmissionResolutionScale);let Te=R.getRenderTarget(),De=R.getActiveCubeFace(),ke=R.getActiveMipmapLevel();R.setRenderTarget(we),R.getClearColor(ot),Qe=R.getClearAlpha(),Qe<1&&R.setClearColor(16777215,.5),R.clear(),Fe&&et.render(Y);let st=R.toneMapping;R.toneMapping=Yn;let at=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),y.setupLightsView(X),W===!0&&ze.setGlobalState(R.clippingPlanes,X),ja(b,Y,X),ee.updateMultisampleRenderTarget(we),ee.updateRenderTargetMipmap(we),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let ft=0,Nt=F.length;ft<Nt;ft++){let Mt=F[ft],{object:xt,geometry:$t,material:Re,group:nn}=Mt;if(Re.side===Fn&&xt.layers.test(X.layers)){let ht=Re.side;Re.side=qt,Re.needsUpdate=!0,Ih(xt,Y,X,$t,Re,nn),Re.side=ht,Re.needsUpdate=!0,Ne=!0}}Ne===!0&&(ee.updateMultisampleRenderTarget(we),ee.updateRenderTargetMipmap(we))}R.setRenderTarget(Te,De,ke),R.setClearColor(ot,Qe),at!==void 0&&(X.viewport=at),R.toneMapping=st}function ja(b,F,Y){let X=F.isScene===!0?F.overrideMaterial:null;for(let q=0,we=b.length;q<we;q++){let Pe=b[q],{object:Te,geometry:De,group:ke}=Pe,st=Pe.material;st.allowOverride===!0&&X!==null&&(st=X),Te.layers.test(Y.layers)&&Ih(Te,F,Y,De,st,ke)}}function Ih(b,F,Y,X,q,we){P!==null&&q.isNodeMaterial&&P.setObject(b,q),b.onBeforeRender(R,F,Y,X,q,we),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(R,F,Y,X,b,we),q.transparent===!0&&q.side===Fn&&q.forceSinglePass===!1?(q.side=qt,q.needsUpdate=!0,R.renderBufferDirect(Y,F,X,q,b,we),q.side=ns,q.needsUpdate=!0,R.renderBufferDirect(Y,F,X,q,b,we),q.side=Fn):R.renderBufferDirect(Y,F,X,q,b,we),b.onAfterRender(R,F,Y,X,q,we)}function Qa(b,F,Y){F.isScene!==!0&&(F=Ie);let X=$.get(b),q=y.state.lights,we=y.state.shadowsArray,Pe=q.state.version,Te=be.getParameters(b,q.state,we,F,Y,y.state.lightProbeGridArray),De=be.getProgramCacheKey(Te),ke=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;let st=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=ge.get(b.envMap||X.environment,st),X.envMapRotation=X.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,ke===void 0&&(b.addEventListener("dispose",bt),ke=new Map,X.programs=ke);let at=ke.get(De);if(at!==void 0){if(X.currentProgram===at&&X.lightsStateVersion===Pe)return Lh(b,Te),at}else Te.uniforms=be.getUniforms(b),P!==null&&b.isNodeMaterial&&P.build(b,Y,Te),b.onBeforeCompile(Te,R),at=be.acquireProgram(Te,De),ke.set(De,at),X.uniforms=Te.uniforms;let Ne=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ne.clippingPlanes=ze.uniform),Lh(b,Te),X.needsLights=Gp(b),X.lightsStateVersion=Pe,X.needsLights&&(Ne.ambientLightColor.value=q.state.ambient,Ne.lightProbe.value=q.state.probe,Ne.sunLights.value=q.state.sun,Ne.sunLightShadows.value=q.state.sunShadow,Ne.directionalLights.value=q.state.directional,Ne.directionalLightShadows.value=q.state.directionalShadow,Ne.spotLights.value=q.state.spot,Ne.spotLightShadows.value=q.state.spotShadow,Ne.rectAreaLights.value=q.state.rectArea,Ne.ltc_1.value=q.state.rectAreaLTC1,Ne.ltc_2.value=q.state.rectAreaLTC2,Ne.pointLights.value=q.state.point,Ne.pointLightShadows.value=q.state.pointShadow,Ne.hemisphereLights.value=q.state.hemi,Ne.sunShadowMatrix.value=q.state.sunShadowMatrix,Ne.sunShadowCascade.value=q.state.sunShadowCascade,Ne.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ne.spotLightMatrix.value=q.state.spotLightMatrix,Ne.spotLightMap.value=q.state.spotLightMap,Ne.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=y.state.lightProbeGridArray.length>0,X.currentProgram=at,X.uniformsList=null,at}function Ph(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=Rr.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Lh(b,F){let Y=$.get(b);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function zp(b,F){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(F.matrixWorld);for(let Y=0,X=b.length;Y<X;Y++){let q=b[Y];if(q.texture!==null&&q.boundingBox.containsPoint(v))return q}return null}function kp(b,F,Y,X,q){F.isScene!==!0&&(F=Ie),ee.resetTextureUnits();let we=F.fog,Pe=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,Te=he===null?R.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:lt.workingColorSpace,De=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,ke=ge.get(X.envMap||Pe,De),st=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,at=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ne=!!Y.morphAttributes.position,ft=!!Y.morphAttributes.normal,Nt=!!Y.morphAttributes.color,Mt=Yn;X.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Mt=R.toneMapping);let xt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,$t=xt!==void 0?xt.length:0,Re=$.get(X),nn=y.state.lights;if(W===!0&&(j===!0||b!==ce)){let yt=b===ce&&X.id===K;ze.setState(X,b,yt)}let ht=!1;X.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==nn.state.version||Re.outputColorSpace!==Te||q.isBatchedMesh&&Re.batching===!1||!q.isBatchedMesh&&Re.batching===!0||q.isBatchedMesh&&Re.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Re.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Re.instancing===!1||!q.isInstancedMesh&&Re.instancing===!0||q.isSkinnedMesh&&Re.skinning===!1||!q.isSkinnedMesh&&Re.skinning===!0||q.isInstancedMesh&&Re.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Re.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Re.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Re.instancingMorph===!1&&q.morphTexture!==null||Re.envMap!==ke||X.fog===!0&&Re.fog!==we||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ze.numPlanes||Re.numIntersection!==ze.numIntersection)||Re.vertexAlphas!==st||Re.vertexTangents!==at||Re.morphTargets!==Ne||Re.morphNormals!==ft||Re.morphColors!==Nt||Re.toneMapping!==Mt||Re.morphTargetsCount!==$t||!!Re.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,Re.__version=X.version);let Rn=Re.currentProgram;ht===!0&&(Rn=Qa(X,F,q),P&&X.isNodeMaterial&&P.onUpdateProgram(X,Rn,Re));let ii=!1,Ui=!1,Os=!1,_t=Rn.getUniforms(),Dt=Re.uniforms;if(x.useProgram(Rn.program)&&(ii=!0,Ui=!0,Os=!0),X.id!==K&&(K=X.id,Ui=!0),Re.needsLights){let yt=zp(y.state.lightProbeGridArray,q);Re.lightProbeGrid!==yt&&(Re.lightProbeGrid=yt,Ui=!0)}if(ii||ce!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),_t.setValue(I,"projectionMatrix",b.projectionMatrix),_t.setValue(I,"viewMatrix",b.matrixWorldInverse);let Oi=_t.map.cameraPosition;Oi!==void 0&&Oi.setValue(I,fe.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&_t.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&_t.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),ce!==b&&(ce=b,Ui=!0,Os=!0)}if(Re.needsLights&&(nn.state.sunShadowMap.length>0&&_t.setValue(I,"sunShadowMap",nn.state.sunShadowMap,ee),nn.state.directionalShadowMap.length>0&&_t.setValue(I,"directionalShadowMap",nn.state.directionalShadowMap,ee),nn.state.spotShadowMap.length>0&&_t.setValue(I,"spotShadowMap",nn.state.spotShadowMap,ee),nn.state.pointShadowMap.length>0&&_t.setValue(I,"pointShadowMap",nn.state.pointShadowMap,ee)),q.isSkinnedMesh){_t.setOptional(I,q,"bindMatrix"),_t.setOptional(I,q,"bindMatrixInverse");let yt=q.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),_t.setValue(I,"boneTexture",yt.boneTexture,ee))}q.isBatchedMesh&&(_t.setOptional(I,q,"batchingTexture"),_t.setValue(I,"batchingTexture",q._matricesTexture,ee),_t.setOptional(I,q,"batchingIdTexture"),_t.setValue(I,"batchingIdTexture",q._indirectTexture,ee),_t.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&_t.setValue(I,"batchingColorTexture",q._colorsTexture,ee));let Fi=Y.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&O.update(q,Y,Rn),(Ui||Re.receiveShadow!==q.receiveShadow)&&(Re.receiveShadow=q.receiveShadow,_t.setValue(I,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(Dt.envMapIntensity.value=F.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=py()),Ui){if(_t.setValue(I,"toneMappingExposure",R.toneMappingExposure),Re.needsLights&&Vp(Dt,Os),we&&X.fog===!0&&Be.refreshFogUniforms(Dt,we),Be.refreshMaterialUniforms(Dt,X,ie,Q,y.state.transmissionRenderTarget[b.id]),Re.needsLights&&Re.lightProbeGrid){let yt=Re.lightProbeGrid;Dt.probesSH.value=yt.texture,Dt.probesMin.value.copy(yt.boundingBox.min),Dt.probesMax.value.copy(yt.boundingBox.max),Dt.probesResolution.value.copy(yt.resolution)}Rr.upload(I,Ph(Re),Dt,ee)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Rr.upload(I,Ph(Re),Dt,ee),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&_t.setValue(I,"center",q.center),_t.setValue(I,"modelViewMatrix",q.modelViewMatrix),_t.setValue(I,"normalMatrix",q.normalMatrix),_t.setValue(I,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let yt=X.uniformsGroups;for(let Oi=0,Bs=yt.length;Oi<Bs;Oi++){let Nh=yt[Oi];V.update(Nh,Rn),V.bind(Nh,Rn)}}return Rn}function Vp(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.sunLights.needsUpdate=F,b.sunLightShadows.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Gp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return he},this.setRenderTargetTextures=function(b,F,Y){let X=$.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),$.get(b.texture).__webglTexture=F,$.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){let Y=$.get(b);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,Y=0){he=b,Z=F,J=Y;let X=null,q=!1,we=!1;if(b){let Te=$.get(b);if(Te.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(I.FRAMEBUFFER,Te.__webglFramebuffer),ue.copy(b.viewport),Le.copy(b.scissor),Ce=b.scissorTest,x.viewport(ue),x.scissor(Le),x.setScissorTest(Ce),K=-1;return}else if(Te.__webglFramebuffer===void 0)ee.setupRenderTarget(b);else if(Te.__hasExternalTextures)ee.rebindTextures(b,$.get(b.texture).__webglTexture,$.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let st=b.depthTexture;if(Te.__boundDepthTexture!==st){if(st!==null&&$.has(st)&&(b.width!==st.image.width||b.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(b)}}let De=b.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(we=!0);let ke=$.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?X=ke[F][Y]:X=ke[F],q=!0):b.samples>0&&ee.useMultisampledRTT(b)===!1?X=$.get(b).__webglMultisampledFramebuffer:Array.isArray(ke)?X=ke[Y]:X=ke,ue.copy(b.viewport),Le.copy(b.scissor),Ce=b.scissorTest}else ue.copy(Ae).multiplyScalar(ie).floor(),Le.copy(He).multiplyScalar(ie).floor(),Ce=re;if(Y!==0&&(X=z),x.bindFramebuffer(I.FRAMEBUFFER,X)&&x.drawBuffers(b,X),x.viewport(ue),x.scissor(Le),x.setScissorTest(Ce),q){let Te=$.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,Y)}else if(we){let Te=F;for(let De=0;De<b.textures.length;De++){let ke=$.get(b.textures[De]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+De,ke.__webglTexture,Y,Te)}}else if(b!==null&&Y!==0){let Te=$.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Te.__webglTexture,Y)}K=-1};function Dh(b){let F=$.get(b);return(F.__readFormat!==b.format||F.__readType!==b.type)&&(F.__readFormat=b.format,F.__readType=b.type,F.__formatReadable=A.textureFormatReadable(b.format),F.__typeReadable=A.textureTypeReadable(b.type)),F}this.readRenderTargetPixels=function(b,F,Y,X,q,we,Pe,Te=0){if(!(b&&b.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=$.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(De=De[Pe]),De){x.bindFramebuffer(I.FRAMEBUFFER,De);try{let ke=b.textures[Te],st=ke.format,at=ke.type;b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Te);let Ne=Dh(ke);if(Ne.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-X&&Y>=0&&Y<=b.height-q&&I.readPixels(F,Y,X,q,ne.convert(st),ne.convert(at),we)}finally{let ke=he!==null?$.get(he).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(b,F,Y,X,q,we,Pe,Te=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=$.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(De=De[Pe]),De)if(F>=0&&F<=b.width-X&&Y>=0&&Y<=b.height-q){x.bindFramebuffer(I.FRAMEBUFFER,De);let ke=b.textures[Te],st=ke.format,at=ke.type;b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Te);let Ne=Dh(ke);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ft),I.bufferData(I.PIXEL_PACK_BUFFER,we.byteLength,I.STREAM_READ),I.readPixels(F,Y,X,q,ne.convert(st),ne.convert(at),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Nt=he!==null?$.get(he).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,Nt);let Mt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await pf(I,Mt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ft),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,we),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(ft),I.deleteSync(Mt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,Y=0){let X=Math.pow(2,-Y),q=Math.floor(b.image.width*X),we=Math.floor(b.image.height*X),Pe=F!==null?F.x:0,Te=F!==null?F.y:0;ee.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,Pe,Te,q,we),x.unbindTexture()},this.copyTextureToTexture=function(b,F,Y=null,X=null,q=0,we=0){let Pe,Te,De,ke,st,at,Ne,ft,Nt,Mt=b.isCompressedTexture?b.mipmaps[we]:b.image;if(Y!==null)Pe=Y.max.x-Y.min.x,Te=Y.max.y-Y.min.y,De=Y.isBox3?Y.max.z-Y.min.z:1,ke=Y.min.x,st=Y.min.y,at=Y.isBox3?Y.min.z:0;else{let Dt=Math.pow(2,-q);Pe=Math.floor(Mt.width*Dt),Te=Math.floor(Mt.height*Dt),b.isDataArrayTexture?De=Mt.depth:b.isData3DTexture?De=Math.floor(Mt.depth*Dt):De=1,ke=0,st=0,at=0}X!==null?(Ne=X.x,ft=X.y,Nt=X.z):(Ne=0,ft=0,Nt=0);let xt=ne.convert(F.format),$t=ne.convert(F.type),Re;F.isData3DTexture?(ee.setTexture3D(F,0),Re=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ee.setTexture2DArray(F,0),Re=I.TEXTURE_2D_ARRAY):(ee.setTexture2D(F,0),Re=I.TEXTURE_2D),x.activeTexture(I.TEXTURE0),x.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);let nn=x.getParameter(I.UNPACK_ROW_LENGTH),ht=x.getParameter(I.UNPACK_IMAGE_HEIGHT),Rn=x.getParameter(I.UNPACK_SKIP_PIXELS),ii=x.getParameter(I.UNPACK_SKIP_ROWS),Ui=x.getParameter(I.UNPACK_SKIP_IMAGES);x.pixelStorei(I.UNPACK_ROW_LENGTH,Mt.width),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mt.height),x.pixelStorei(I.UNPACK_SKIP_PIXELS,ke),x.pixelStorei(I.UNPACK_SKIP_ROWS,st),x.pixelStorei(I.UNPACK_SKIP_IMAGES,at);let Os=b.isDataArrayTexture||b.isData3DTexture,_t=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){let Dt=$.get(b),Fi=$.get(F),yt=$.get(Dt.__renderTarget),Oi=$.get(Fi.__renderTarget);x.bindFramebuffer(I.READ_FRAMEBUFFER,yt.__webglFramebuffer),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Bs=0;Bs<De;Bs++)Os&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,$.get(b).__webglTexture,q,at+Bs),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,$.get(F).__webglTexture,we,Nt+Bs)),I.blitFramebuffer(ke,st,Pe,Te,Ne,ft,Pe,Te,I.DEPTH_BUFFER_BIT,I.NEAREST);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||$.has(b)){let Dt=$.get(b),Fi=$.get(F);x.bindFramebuffer(I.READ_FRAMEBUFFER,L),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,k);for(let yt=0;yt<De;yt++)Os?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Dt.__webglTexture,q,at+yt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Dt.__webglTexture,q),_t?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fi.__webglTexture,we,Nt+yt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Fi.__webglTexture,we),q!==0?I.blitFramebuffer(ke,st,Pe,Te,Ne,ft,Pe,Te,I.COLOR_BUFFER_BIT,I.NEAREST):_t?I.copyTexSubImage3D(Re,we,Ne,ft,Nt+yt,ke,st,Pe,Te):I.copyTexSubImage2D(Re,we,Ne,ft,ke,st,Pe,Te);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else _t?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Re,we,Ne,ft,Nt,Pe,Te,De,xt,$t,Mt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Re,we,Ne,ft,Nt,Pe,Te,De,xt,Mt.data):I.texSubImage3D(Re,we,Ne,ft,Nt,Pe,Te,De,xt,$t,Mt):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,we,Ne,ft,Pe,Te,xt,$t,Mt.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,we,Ne,ft,Mt.width,Mt.height,xt,Mt.data):I.texSubImage2D(I.TEXTURE_2D,we,Ne,ft,Pe,Te,xt,$t,Mt);x.pixelStorei(I.UNPACK_ROW_LENGTH,nn),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht),x.pixelStorei(I.UNPACK_SKIP_PIXELS,Rn),x.pixelStorei(I.UNPACK_SKIP_ROWS,ii),x.pixelStorei(I.UNPACK_SKIP_IMAGES,Ui),we===0&&F.generateMipmaps&&I.generateMipmap(Re),x.unbindTexture()},this.initRenderTarget=function(b){$.get(b).__webglFramebuffer===void 0&&ee.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ee.setTextureCube(b,0):b.isData3DTexture?ee.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ee.setTexture2DArray(b,0):ee.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){Z=0,J=0,he=null,x.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}});function gy(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function _y(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function xy(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tp),this.state=gt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function vy(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=gt.DOLLY;break;case es.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=gt.ROTATE}break;case es.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=gt.PAN}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(uh)}function yy(n){switch(this.state){case gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function by(n){this.enabled===!1||this.enableZoom===!1||this.state!==gt.NONE||(n.preventDefault(),this.dispatchEvent(uh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(tp))}function My(n){this.enabled!==!1&&this._handleKeyDown(n)}function Sy(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=gt.TOUCH_ROTATE;break;case ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=gt.TOUCH_PAN;break;default:this.state=gt.NONE}break;case 2:switch(this.touches.TWO){case ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=gt.TOUCH_DOLLY_PAN;break;case ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=gt.TOUCH_DOLLY_ROTATE;break;default:this.state=gt.NONE}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(uh)}function Ey(n){switch(this._trackPointer(n),this.state){case gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=gt.NONE}}function Ty(n){this.enabled!==!1&&n.preventDefault()}function wy(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ay(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Qf,uh,tp,oc,ep,my,zt,gn,gt,ch,lc,np=In(()=>{Wa();Qf={type:"change"},uh={type:"start"},tp={type:"end"},oc=new Xi,ep=new bn,my=Math.cos(70*Fu.DEG2RAD),zt=new D,gn=2*Math.PI,gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ch=1e-6,lc=class extends Pa{constructor(e,t=null){super(e,t),this.state=gt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:ts.ROTATE,TWO:ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new an,this._lastTargetPosition=new D,this._quat=new an().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mr,this._sphericalDelta=new Mr,this._scale=1,this._panOffset=new D,this._rotateStart=new pe,this._rotateEnd=new pe,this._rotateDelta=new pe,this._panStart=new pe,this._panEnd=new pe,this._panDelta=new pe,this._dollyStart=new pe,this._dollyEnd=new pe,this._dollyDelta=new pe,this._dollyDirection=new D,this._mouse=new pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_y.bind(this),this._onPointerDown=gy.bind(this),this._onPointerUp=xy.bind(this),this._onContextMenu=Ty.bind(this),this._onMouseWheel=by.bind(this),this._onKeyDown=My.bind(this),this._onTouchStart=Sy.bind(this),this._onTouchMove=Ey.bind(this),this._onMouseDown=vy.bind(this),this._onMouseMove=yy.bind(this),this._interceptControlDown=wy.bind(this),this._interceptControlUp=Ay.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=gt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Qf),this.update(),this.state=gt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;zt.copy(t).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=gn:i>Math.PI&&(i-=gn),s<-Math.PI?s+=gn:s>Math.PI&&(s-=gn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=zt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(oc.origin.copy(this.object.position),oc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oc.direction))<my?this.object.lookAt(this.target):(ep.setFromNormalAndCoplanarPoint(this.object.up,this.target),oc.intersectPlane(ep,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ch||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ch||this._lastTargetPosition.distanceToSquared(this.target)>ch?(this.dispatchEvent(Qf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?gn/60*this.autoRotateSpeed*e:gn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){zt.setFromMatrixColumn(t,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,t){this.screenSpacePanning===!0?zt.setFromMatrixColumn(t,1):(zt.setFromMatrixColumn(t,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;zt.copy(s).sub(this.target);let r=zt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});function ip(n,e,t){let i;try{i=new Ir({antialias:!0,alpha:!1,powerPreference:"low-power"})}catch{return{available:!1,update(){},travel(){},view(){},effect(){},pause(){}}}n.append(i.domElement),i.domElement.setAttribute("aria-label","Mundo 3D del cuerpo. Usa el mapa para visitar sus sistemas.");let s=i.getContext(),r=s.getExtension("WEBGL_debug_renderer_info"),a=r&&/swiftshader|llvmpipe/i.test(s.getParameter(r.UNMASKED_RENDERER_WEBGL));i.setPixelRatio(Math.min(devicePixelRatio,a?.75:1.7)),i.setClearColor("#e2f1ed"),i.outputColorSpace=Vt,i.toneMapping=As,document.body.classList.toggle("low-power",!!a);let o=new vs;o.fog=new ca("#e2f1ed",40,85);let l=new Ft(40,1,.1,150);l.position.set(22,26,28);let c=new lc(l,i.domElement);c.target.set(0,0,0),c.enableDamping=!0,c.minDistance=15,c.maxDistance=55,c.maxPolarAngle=Math.PI/2.25,c.enablePan=!1,o.add(new Es("#ffffff","#c58ca0",3));let d=new ji("#fff9e3",3.2);d.position.set(-12,22,8),o.add(d);let u=(re,G=.4,W=0)=>new Tn({color:re,roughness:G,metalness:W}),h=u("#fff9eb"),f=u("#fffdf8"),p=u("#57c9b4"),M=u("#253e4f"),g=u("#f7cd70",.28,.35),m=u("#f397ac");function S(re,G,W,j=[0,0,0],ae=[1,1,1]){let fe=new Ht(re,G);return fe.position.set(...j),fe.scale.set(...ae),W.add(fe),fe}let w=new Li(1,20,14),v=new $n(1,1,1,36),T=new Sn(1,.12,8,40),y=(re,G,W,j)=>S(w,re,G,W,j),C=new Map,_=[],E=[];function R(re,G,W,j){return S(new Yi(new Pi(re.map(ae=>new D(...ae))),24,G,8,!1),W,j)}function N(re,G=f){S(new qn(.22,.7,.16),G,re),S(new qn(.65,.22,.16),G,re)}function P(re,G,W=1){let j=new bs;return j.moveTo(0,-1),j.bezierCurveTo(-2,.2,-1.3,1.9,0,.8),j.bezierCurveTo(1.3,1.9,2,.2,0,-1),S(new _r(j,{depth:.45,bevelEnabled:!0,bevelSize:.18,bevelThickness:.18,bevelSegments:3,steps:1,curveSegments:14}),G,re,[0,1.5,0],[W,W,W])}function z(re){let G=new bs;return G.moveTo(0,1.4),G.lineTo(1.15,.8),G.lineTo(.9,-.7),G.lineTo(0,-1.5),G.lineTo(-.9,-.7),G.lineTo(-1.15,.8),G.closePath(),S(new _r(G,{depth:.35,bevelEnabled:!0,bevelSize:.12,bevelThickness:.12,bevelSegments:2,steps:1}),p,re,[0,1.9,0])}for(let re of Pn){let G=new Tt;G.position.set(re.position[0],0,re.position[1]),o.add(G);let W=u(re.color),j=S(v,W,G,[0,-.65,0],[3.05,.55,3.05]);j.userData.site=re.id,_.push(j),S(v,h,G,[0,-.3,0],[2.92,.2,2.92]);let ae=S(T,W,G,[0,-.12,0],[2.72,2.72,2.72]);if(ae.rotation.x=Math.PI/2,re.id!=="adaptativo"){let[I,Ze]=re.position,qe=Math.hypot(I,Ze),A=[I*3.1/qe,-.65,Ze*3.1/qe],x=[I*(1-3.1/qe),-.65,Ze*(1-3.1/qe)];R([A,[(A[0]+x[0])/2,-.3,(A[2]+x[2])/2],x],.62,u("#d4e4dc"),o),R([[A[0],-.02,A[2]],[(A[0]+x[0])/2,.03,(A[2]+x[2])/2],[x[0],-.02,x[2]]],.09,W,o)}let fe=new Tt;if(G.add(fe),re.id==="respiratorio"&&(y(W,fe,[-.85,1.5,0],[.75,1.35,.65]),y(W,fe,[.85,1.5,0],[.75,1.35,.65]),R([[0,3.05,0],[0,2,0],[-.65,1.3,.4]],.15,f,fe),R([[0,2.1,0],[.15,1.8,0],[.65,1.3,.4]],.15,f,fe)),re.id==="circulatorio"&&(P(fe,m,1.2),R([[-.5,2.9,0],[-.5,3.4,0],[.2,3.4,0],[.3,2.7,0]],.19,p,fe)),re.id==="nervioso"){for(let I=0;I<16;I++){let Ze=I*2.399;y(W,fe,[Math.cos(Ze)*(.45+I%3*.25),1.9+I%4*.24,Math.sin(Ze)*.65],[.55,.55,.55])}S(new $n(.17,.25,1.3,12),f,fe,[0,.9,0])}if(re.id==="inmunologico"){z(fe);let I=new Tt;I.position.set(0,1.9,.57),I.scale.setScalar(1.3),N(I),fe.add(I);for(let Ze of[-1.7,1.7])y(p,fe,[Ze,.65,0],[.5,.5,.5]),y(M,fe,[Ze-.13,.72,.46],[.06,.09,.04]),y(M,fe,[Ze+.13,.72,.46],[.06,.09,.04])}if(re.id==="adaptativo"){let I=S(new Sn(1.65,.28,12,48,Math.PI),g,fe,[0,.9,0]);for(let qe of[-1.65,1.65])S(v,p,fe,[qe,.45,0],[.28,.95,.28]);let Ze=S(new Ss(.75),u("#72d9cf",.15,.2),fe,[0,2.3,0]);E.push(Ze)}fe.traverse(I=>{I.isMesh&&(I.userData.site=re.id,_.push(I))});let Ue=S(new Sn(3.18,.06,6,48),g,G,[0,-.15,0]);Ue.rotation.x=Math.PI/2,Ue.visible=!1;let Ie=new Tt;G.add(Ie);let Fe=S(new Sn(1.9,.09,8,44),p,G,[0,1.8,0]);Fe.visible=!1;let Ve=document.createElement("button");Ve.className="world-label",Ve.dataset.site=re.id,Ve.innerHTML=`<span>${re.icon}</span>${re.name}<small></small>`,Ve.onclick=()=>t(re.id),e.append(Ve),C.set(re.id,{g:G,organ:fe,microbes:Ie,marker:Ue,protection:Fe,label:Ve,signature:"",baseY:0})}let L=new Tt;o.add(L),L.position.set(0,.1,2.2),y(f,L,[0,.9,0],[.6,.72,.52]),y(p,L,[0,.92,-.48],[.45,.45,.2]);for(let re of[-1,1])y(p,L,[re*.27,.16,.12],[.25,.16,.34]),y(f,L,[re*.67,.8,0],[.17,.35,.18]),y(M,L,[re*.19,1.05,.47],[.075,.12,.05]),y(m,L,[re*.34,.82,.44],[.1,.055,.035]);let k=new Tt;k.position.set(0,.6,.48),k.scale.setScalar(.4),N(k,p),L.add(k);let Z=new Un(w,u("#d9b8c7"),50),J=new Un(T,u("#e8a0b1"),36),he=new It;for(let re=0;re<50;re++){let G=re*2.399,W=15+re%7*1.1;he.position.set(Math.cos(G)*W,-2.4+re%5*1.1,Math.sin(G)*W),he.scale.setScalar(.15+re%4*.13),he.updateMatrix(),Z.setMatrixAt(re,he.matrix)}o.add(Z);for(let re=0;re<36;re++){let G=re*2.399,W=16+re%6;he.position.set(Math.cos(G)*W,-1-re%3,Math.sin(G)*W),he.rotation.set(re,0,re*.7),he.scale.setScalar(.22+re%3*.12),he.updateMatrix(),J.setMatrixAt(re,he.matrix)}o.add(J);let K=!1,ce="adaptativo",ue=new D(0,.1,2.2),Le=0,Ce=0,ot=new pe,Qe=new Qi,tt;i.domElement.addEventListener("pointerdown",re=>tt=[re.clientX,re.clientY]),i.domElement.addEventListener("pointerup",re=>{if(!tt||Math.hypot(re.clientX-tt[0],re.clientY-tt[1])>7)return;let G=i.domElement.getBoundingClientRect();ot.set((re.clientX-G.left)/G.width*2-1,-(re.clientY-G.top)/G.height*2+1),Qe.setFromCamera(ot,l);let W=Qe.intersectObjects(_)[0];W&&t(W.object.userData.site)});let Q=!1;function ie(){let re=n.getBoundingClientRect(),G=re.width<600;G!==Q&&(l.position.sub(c.target).multiplyScalar(G?1.5:1/1.5).add(c.target),Q=G),c.maxDistance=Q?90:55,i.setSize(re.width,re.height),l.aspect=re.width/re.height,l.updateProjectionMatrix()}new ResizeObserver(ie).observe(n),ie();function ye(re=[],G="adaptativo"){ce=G;for(let W of Pn){let j=C.get(W.id),ae=re.find(Ie=>Ie.type===W.id),fe=ae?dn(ae):0;j.marker.visible=G===W.id,j.organ.visible=!0,j.organ.scale.setScalar(W.id==="adaptativo"||ae?1:.55),j.label.classList.toggle("active",G===W.id),j.label.querySelector("small").textContent=W.id==="adaptativo"?"Punto de encuentro":ae?fe?`${fe} nivel${fe>1?"es":""} \xB7 Ayuda aqu\xED`:ae.immune?"Inmunizado":ae.vaccine?"Vacunado":ae.memory?"Con memoria":ae.shield?"Con escudo":"Estable":"Por construir",j.protection.visible=!!(ae&&(ae.immune||ae.vaccine||ae.shield||ae.memory)),j.protection.material=ae?.immune?g:p;let Ue=ae?JSON.stringify(ae.illnesses):"";if(Ue!==j.signature){j.signature=Ue;for(let Fe of[...j.microbes.children])j.microbes.remove(Fe);let Ie=0;for(let Fe of ae?.illnesses||[]){let Ve=u(Fe.type==="bacteriana"?"#a1cf73":Fe.type==="fungica"?"#f2b265":"#a58ad7");for(let I=0;I<Fe.level;I++){let Ze=Ie++*2.3,qe=new Tt;qe.position.set(Math.cos(Ze)*1.9,1.1,Math.sin(Ze)*1.9),y(Ve,qe,[0,0,0],[.4,.38,.4]);for(let A=0;A<6;A++){let x=A*Math.PI/3;y(Ve,qe,[Math.cos(x)*.45,Math.sin(x)*.45,0],[.13,.13,.13])}for(let A of[-.13,.13])y(M,qe,[A,.04,.36],[.055,.08,.04]);j.microbes.add(qe)}}}}}function Xe(re){let G=Pn.find(W=>W.id===re);G&&ue.set(G.position[0],.1,G.position[1]+2)}function Ae(re){c.target.set(0,0,0),l.position.set(...re==="top"?[0,42,.1]:[22,26,28]),Q&&l.position.multiplyScalar(1.5),c.update()}function He(re){if(requestAnimationFrame(He),K||document.hidden||re-Le<(a?55:24))return;let G=Math.min(.1,(re-Le)/1e3);Le=re,c.update(),L.position.lerp(ue,Math.min(1,G*3)),L.position.y=.1+Math.sin(re*.004)*.08,L.rotation.y=Math.sin(re*.001)*.15;for(let W of E)W.rotation.y=re*6e-4,W.position.y=2.3+Math.sin(re*.0015)*.15;for(let W of C.values()){W.microbes.children.forEach((ae,fe)=>{ae.position.y=1.1+Math.sin(re*.003+fe)*.16,ae.rotation.y=re*4e-4}),W.protection.rotation.y=re*4e-4,W.marker.material=re<Ce&&W.g.userData.flash?p:g;let j=new D(W.g.position.x,.4,W.g.position.z+3.4).project(l);W.label.style.left=`${(j.x*.5+.5)*100}%`,W.label.style.top=`${(-j.y*.5+.5)*100}%`,W.label.hidden=j.z>1}i.render(o,l)}return requestAnimationFrame(He),ye(),{available:!0,update:ye,travel:Xe,view:Ae,pause(re){K=re},effect(re){Ce=performance.now()+1e3;for(let[G,W]of C)W.g.userData.flash=G===re}}}var sp=In(()=>{Wa();np();Xr();Ic()});function cc(){let n="inmuno-audio-v1",e={music:!0,effects:!0,volume:40};try{let y=JSON.parse(localStorage.getItem(n));y&&typeof y.music=="boolean"&&typeof y.effects=="boolean"&&Number.isFinite(y.volume)&&(e={music:y.music,effects:y.effects,volume:Math.max(0,Math.min(100,y.volume))})}catch{}let t=null,i=null,s=null,r=null,a=0,o=0,l=!1,c=!1,d=new Set,u=60/100,h=y=>440*2**((y-69)/12);function f(){if(!t)return;let y=t.currentTime;i.gain.setTargetAtTime(e.music?e.volume/100*.65*(c?.22:1):0,y,.04),s.gain.setTargetAtTime(e.effects?e.volume/100*.8:0,y,.02)}function p(y,C,_,E=.08,R="triangle",N=!1,P=.015){let z=t.createOscillator(),L=t.createGain(),k=t.createBiquadFilter();z.type=R,z.frequency.value=h(y),k.type="lowpass",k.frequency.value=N?1800:4200,k.Q.value=.5,L.gain.setValueAtTime(0,C),L.gain.linearRampToValueAtTime(E,C+Math.min(P,_/3)),L.gain.exponentialRampToValueAtTime(1e-4,C+_),z.connect(k),k.connect(L),L.connect(N?i:s),z.start(C),z.stop(C+_+.03);let Z={osc:z,music:N};d.add(Z),z.onended=()=>{d.delete(Z),z.disconnect(),k.disconnect(),L.disconnect()}}function M(y,C,_,E=!1){let R=t.createBuffer(1,Math.ceil(t.sampleRate*C),t.sampleRate),N=R.getChannelData(0);for(let k=0;k<N.length;k++)N[k]=(Math.random()*2-1)*(1-k/N.length);let P=t.createBufferSource(),z=t.createBiquadFilter(),L=t.createGain();P.buffer=R,z.type="highpass",z.frequency.value=E?1700:900,L.gain.setValueAtTime(_,y),L.gain.exponentialRampToValueAtTime(1e-4,y+C),P.connect(z),z.connect(L),L.connect(E?i:s),P.start(y),P.onended=()=>{P.disconnect(),z.disconnect(),L.disconnect()}}function g(y,C){let _=[[48,52,55],[53,57,60],[55,59,62],[48,52,55]],E=Math.floor(y/8),R=_[E%4],N=y%8;if(N===0&&(R.forEach((P,z)=>p(P,C,u*4.2,.1,"sawtooth",!0,.35+z*.025)),p(R[0]-12,C,u*3.8,.16,"sine",!0,.04),p(34,C,.5,.18,"sine",!0)),N===4&&p(38,C,.35,.1,"sine",!0),p(R[[0,1,2,1][N%4]]+12,C,u*.7,.048,"triangle",!0,.01),N%2===0&&E%8>=2){let P=[72,76,79,81,79,76,74,72,77,81,79,76,74,79,76,72];p(P[Math.floor(y/2)%P.length],C,u*1.6,.055,"triangle",!0,.08)}N===0&&E%4===0&&M(C,.7,.035,!0)}function m(){if(r!==null&&(clearInterval(r),r=null),t){for(let y of d)if(y.music)try{y.osc.stop()}catch{}}}function S(){if(!l||!e.music||document.hidden||t.state!=="running"||r!==null)return;a=t.currentTime+.08;let y=()=>{if(t.state==="running")for(;a<t.currentTime+.18;)g(o,a),o=(o+1)%128,a+=u/2};y(),r=setInterval(y,80)}async function w(){if(!t){let y=window.AudioContext||window.webkitAudioContext;if(!y)return!1;t=new y,i=t.createGain(),s=t.createGain();let C=t.createDynamicsCompressor();C.threshold.value=-16,C.knee.value=18,C.ratio.value=6,i.connect(C),s.connect(C),C.connect(t.destination),f()}try{return t.state==="suspended"&&await t.resume(),l=t.state==="running",S(),l}catch{return!1}}function v(y){e={...e,...y},e.volume=Math.max(0,Math.min(100,Number(e.volume)||0));try{localStorage.setItem(n,JSON.stringify(e))}catch{}f(),e.music?S():m()}function T(y){if(!l||!e.effects||t.state!=="running")return;let C=t.currentTime+.01;if(y==="shoot"){p(78,C,.075,.08,"sine"),p(66,C+.015,.08,.04,"triangle");return}if(y==="pop"){[76,83].forEach((_,E)=>p(_,C+E*.04,.14,.1,"sine"));return}if(y==="roll"){for(let _=0;_<7;_++)p(58+_%3*4,C+_*.045,.07,.12,"square"),M(C+_*.045,.025,.06);return}if(y==="success"){[74,77,81].forEach((_,E)=>p(_,C+E*.075,.35,.15));return}if(y==="hurt"){p(42,C,.35,.25,"sawtooth"),p(35,C+.08,.4,.15,"sine");return}if(y==="attack"){M(C,.18,.3),p(55,C,.16,.2,"sawtooth");return}if(y==="heal"){[62,69,74,77].forEach((_,E)=>p(_,C+E*.1,.6,.13,"sine"));return}if(y==="enemy"){[45,46,38].forEach((_,E)=>p(_,C+E*.12,.4,.16,"sawtooth"));return}if(y==="victory"){[62,65,69,74,72,74,77,81].forEach((_,E)=>p(_,C+E*.17,.7,.17,E%2?"triangle":"sawtooth"));return}y==="defeat"&&[62,60,57,50].forEach((_,E)=>p(_,C+E*.28,.9,.13,"triangle"))}return document.addEventListener("visibilitychange",()=>{!t||!l||(document.hidden?(m(),t.suspend().catch(()=>{})):t.resume().then(S).catch(()=>{}))}),window.addEventListener("pagehide",m),{unlock:w,set:v,play:T,duck(y){c=!!y,f()},get settings(){return{...e}},get supported(){return!!(window.AudioContext||window.webkitAudioContext)}}}var hh=In(()=>{});var Fy={};function Qn(n){Oe("#notice").textContent=n,Oe("#notice").classList.add("visible"),clearTimeout(rp),rp=setTimeout(()=>Oe("#notice").classList.remove("visible"),6500)}function dc(){try{localStorage.setItem(op,JSON.stringify(oe))}catch{Qn("No se pudo guardar en este navegador. Usa Sesi\xF3n \u2192 Descargar partida.")}}function qa(){clearTimeout(dh),dh=null}function zn(){pi.close(),Ur="",An.pause(!1)}function Di(n,e,t=!0){qa(),Ur=n,Oe("#dialog-content").innerHTML=`${t?'<button class="close" aria-label="Cerrar">\xD7</button>':""}${e}`,pi.open||pi.showModal(),An.pause(!0),Oe(".close")?.addEventListener("click",()=>{zn(),_n()})}function Nr(){globalThis.speechSynthesis?.cancel(),Et.duck(!1)}function lp(n){if(!globalThis.speechSynthesis)return Qn("Este navegador no dispone de lectura en voz alta.");Nr();let e=new SpeechSynthesisUtterance(n);e.lang="es-ES",e.rate=.9,e.onstart=()=>Et.duck(!0),e.onend=e.onerror=()=>Et.duck(!1),globalThis.speechSynthesis.speak(e)}function os(n,{undo:e=!0}={}){qa(),Nr();try{let t=oe,{state:i,result:s}=Zh(oe,n);return e&&(Dr=structuredClone(t)),oe=i,jt=-1,jn=[],fi=!1,t.mode==="duel"&&t.current!==oe.current&&(ls=null),dc(),ln(),s}catch(t){return Qn(t.message),null}}function gh(){return oe?.mode==="adventure"||oe?.mode==="duel"&&!oe.players[oe.current].bot&&ls===oe.current&&oe.winner===null}function Cy(){return oe?.mode==="duel"?oe.players[on].systems:oe?.systems||[]}function fh(n){mh||(vt=n,An.travel(n),oe&&(ln(),oe.mode==="adventure"&&ri(oe)?.site===n&&Qn(Ln(n).fact)))}function Ry(n,e){let t=dt[n],i=oe.mode==="duel"&&!Bi(oe,n).length;return`<button class="card ${jt===e?"selected":""} ${fi&&jn.includes(e)?"discard-selected":""} ${i&&!fi?"unavailable":""}" data-index="${e}" aria-pressed="${jt===e||jn.includes(e)}" aria-label="${Lt(t.name)}. ${Lt(t.text)}"><img src="${ph(t.art)}" alt="Ilustraci\xF3n original de ${Lt(t.name)}"><span class="info"><small>${Uh[t.kind]}</small><strong>${Lt(t.name)}</strong><span class="description">${Lt(oe.level===1&&{viral:"Microbio morado. Se retira con un anticuerpo.",bacteriana:"Bacteria verde. Se retira con un antibi\xF3tico.",anticuerpo:"Ayuda a retirar el microbio morado.",antibiotico:"Ayuda a retirar las bacterias verdes.",respuesta:"Ayuda a retirar un microbio.",integral:"El escudo ayuda contra cualquier microbio."}[n]||t.text)}</span></span><span class="key">${e+1}</span></button>`}function ln(){if(!oe){An.update([],vt);return}let n=oe.mode==="adventure",e=n?ri(oe):null,t=Wr[oe.level-1],i=n?null:oe.players[oe.current],s=Cy(),r=s.find(p=>p.type===vt),a=n?oe.completed:oe.winner!==null,o=n?e?.title||"El portal del equilibrio":`Turno de ${i.name}`,l=n?e?.task||"\xA1Las cuatro islas est\xE1n a salvo! Visita el portal central y celebra tu aventura.":si(oe)?`Tu turno est\xE1 afectado por ${si(oe)}. Rep\xF3n tus cartas y pasa.`:"Construye cuatro sistemas distintos y mantenlos sin infecci\xF3n para ganar.";Oe("#mission").innerHTML=`<span class="eyebrow">${n?"AVENTURA GUIADA":"DUELO DE CARTAS"} \xB7 ${t.grades}</span><h1>${Lt(o)}</h1><p>${Lt(l)}</p><div class="mission-number"><span>${n?`Misi\xF3n ${Math.min(oe.lesson+1,ds(oe.level).length)} de ${ds(oe.level).length}`:`Turno ${oe.turn} \xB7 ${oe.deck.length} cartas en el mazo`}</span><span class="stars">${n?`\u2605 ${oe.stars}`:`${i.systems.filter(bi).length}/4`}</span></div><div class="progress"><i style="width:${n?oe.lesson/ds(oe.level).length*100:i.systems.filter(bi).length*25}%"></i></div><div class="fact"><b>${Ln(vt).icon} ${Ln(vt).name}</b><br>${Lt(oe.level===1?Ln(vt).fact:Ln(vt).gradeFact)}${r?`<br><span class="pill">${dn(r)?`${dn(r)} nivel(es) de infecci\xF3n`:r.immune?"Inmunizaci\xF3n completa":"Sistema estable"}</span>`:""}</div><div class="mission-buttons"><button id="read-task" aria-label="Escuchar la misi\xF3n">\u25D6 Escuchar</button><button id="hint">\u2727 Pista</button></div>`,Oe("#read-task").onclick=()=>lp(`${o}. ${l}. ${Ln(vt).fact}`),Oe("#hint").onclick=()=>Qn(n&&e?`Ve a ${Ln(e.site).name}. Busca la carta ${dt[e.card].name}.`:fi?"Marca de una a tres cartas y pulsa Cambiar cartas.":"Elige una carta, selecciona un cuerpo y una isla. Tambi\xE9n puedes descartar para renovar tu mano."),Oe("#map").innerHTML=Pn.map(p=>`<button title="Visitar ${p.name}" aria-label="Visitar ${p.name}" class="${vt===p.id?"active":""}" style="--site-color:${p.color}" data-site="${p.id}">${p.icon}</button>`).join(""),Oe("#map").querySelectorAll("button").forEach(p=>p.onclick=()=>fh(p.dataset.site)),Oe("#players").innerHTML=n?"":oe.players.map((p,M)=>`<button class="${on===M?"active":""}" data-owner="${M}">${M===oe.current?"\u25B6 ":""}${Lt(p.name)} ${p.bot?"\u25C9":""}<small>${p.systems.filter(bi).length}/4 estables${oe.pandemics.some(g=>g.owner===M)?" \xB7 Pandemia":""}${p.blocked?" \xB7 Aislado":""}</small></button>`).join(""),Oe("#players").querySelectorAll("button").forEach(p=>p.onclick=()=>{on=Number(p.dataset.owner),ln()}),An.update(s,vt);let c=!n&&jt>=0?i.hand[jt]:null,d=c?Bi(oe,c):[];document.querySelectorAll("#map [data-site],#labels [data-site]").forEach(p=>p.classList.toggle("available",d.some(M=>M.owner===on&&M.site===p.dataset.site)));let u=gh()&&!a,h=n?Rc(oe):u?i.hand:[];Oe("#hand-label").textContent=n?"TU EQUIPO DE DEFENSA":`${i.name.toUpperCase()} \xB7 ${oe.level===3?"BARAJA COMPLETA":oe.level===2?"BARAJA DE APRENDIZAJE":"BARAJA INICIAL"}`,Oe("#hand-title").textContent=a?"\xA1El equilibrio ha vuelto!":n?"Elige una carta. Cambia el mundo.":i.bot?"Microbot est\xE1 pensando\u2026":ls!==oe.current?"Prepara el siguiente turno.":fi?"Elige las cartas que quieres cambiar.":"Juega una carta o renueva tu mano.",Oe("#hand").innerHTML=h.map(Ry).join(""),Oe("#hand").querySelectorAll("button").forEach(p=>p.onclick=()=>cp(Number(p.dataset.index))),Oe("#hand-actions").innerHTML=!n&&u&&!si(oe)?`<button id="discard-toggle">${fi?"Cancelar cambio":"\u21BB Cambiar cartas"}</button>`:"",Oe("#discard-toggle")?.addEventListener("click",()=>{fi=!fi,jt=-1,jn=[],ln()});let f="";if(n&&!e&&!a)f='<p>El portal central est\xE1 listo.</p><button class="primary" id="finish">\u2726 Abrir el portal</button>';else if(!n&&u&&si(oe))f='<p>Este turno solo puedes reponer y pasar.</p><button class="primary" id="pass">Reponer y pasar</button>';else if(fi)f=`<p>Descarta las seleccionadas y roba hasta tener tres.</p><button class="primary" id="discard" ${jn.length?"":"disabled"}>Cambiar ${jn.length} carta(s)</button>`;else if(u&&jt>=0&&h[jt]){let p=h[jt],M=n?[]:Bi(oe,p),g=M.find(S=>S.owner===on&&S.site===vt&&!S.remove&&!S.otherSite),m=!n&&(dt[p].kind==="event"||dt[p].kind==="treatment");f=`<p>${Lt(dt[p].name)}<br>Destino: ${Lt(n?"":oe.players[on].name+" \xB7 ")}${Ln(vt).name}</p><button class="primary" id="use" ${!n&&!m&&!g?"disabled":""}>${m?"Elegir destino":"Usar aqu\xED"} \u2192</button>`}else f=u?"<p>1. Elige una carta.<br>2. Visita una isla.<br>3. Pulsa \xABUsar aqu\xED\xBB.</p>":"";!n&&u&&on===oe.current&&r&&qr(r)&&(f+='<button id="immunize">\u2726 Inmunizar</button>'),Oe("#action-bar").innerHTML=`<div class="action-row">${f}</div>`,Oe("#use")?.addEventListener("click",up),Oe("#discard")?.addEventListener("click",()=>{os(p=>wc(p,jn)),Et.play("roll"),_n()}),Oe("#pass")?.addEventListener("click",()=>{os(Ac),_n()}),Oe("#immunize")?.addEventListener("click",()=>{os(p=>Cc(p,vt)),Et.play("heal"),_n()}),Oe("#finish")?.addEventListener("click",()=>{fh("adaptativo"),os(Yh),ap()}),a&&Ur!=="win"?ap():n&&oe.quiz&&!pi.open&&dp()}function cp(n){if(!(!gh()||mh)){if(Et.unlock(),Et.play("roll"),fi)jn=jn.includes(n)?jn.filter(e=>e!==n):[...jn,n];else if(jt=n,oe.mode==="duel"){let e=oe.players[oe.current].hand[n],t=Bi(oe,e).find(i=>i.site);t&&(on=t.owner,vt=t.site,An.travel(vt))}ln()}}function up(){if(!gh()||mh||jt<0)return;let n=oe.mode==="adventure",e=(n?Rc(oe):oe.players[oe.current].hand)[jt];if(!e)return;if(n){let s=os(r=>qh(r,e,vt));s&&(Qn(s.message),Et.play(s.ok?"heal":"hurt"),s.ok&&An.effect(vt),oe.quiz&&dp());return}let t=Bi(oe,e);if(!t.length)return Qn("No hay un destino v\xE1lido. Puedes cambiar esta carta.");if(dt[e].kind==="event"||dt[e].kind==="treatment"){Py(e,t);return}let i=t.find(s=>s.owner===on&&s.site===vt);if(!i)return Qn("Elige un cuerpo y una isla v\xE1lidos para esta carta.");hp(i)}function Iy(n){return n.otherSite?`${oe.players[n.owner].name}: ${Ln(n.site).name} \u2194 ${oe.players[n.otherOwner].name}: ${Ln(n.otherSite).name}`:n.owner===void 0?"Aplicar el efecto global":`${oe.players[n.owner].name}${n.site?" \xB7 "+Ln(n.site).name:""}${n.remove?" \xB7 Retirar "+n.remove:""}`}function Py(n,e){Di("targets",`<span class="eyebrow">ELIGE EL EFECTO</span><h2 id="dialog-title">${Lt(dt[n].name)}</h2><p>${Lt(dt[n].text)}</p><div class="target-list">${e.map((t,i)=>`<button data-move="${i}">${Lt(Iy(t))} \u2192</button>`).join("")}</div>`),pi.querySelectorAll("[data-move]").forEach(t=>t.onclick=()=>{zn(),hp(e[Number(t.dataset.move)])})}function hp(n){let e=jt,t=oe.players[oe.current].hand[e];os(s=>Tc(s,e,n))&&(Et.play(dt[t].kind==="infection"?"attack":"heal"),An.effect(n.site||vt),Qn(oe.log[0])),_n()}function dp(){if(Ur==="quiz")return;let n=ri(oe);Di("quiz",`<img class="quiz-art" src="${ph(dt[n.card].art)}" alt="${Lt(dt[n.card].name)}"><span class="eyebrow">PAUSA DE DESCUBRIMIENTO</span><h2 id="dialog-title">${Lt(n.question)}</h2><button id="read-quiz">\u25D6 Escuchar pregunta</button><div class="answers">${oe.quizOrder.map(e=>`<button data-answer="${e}">${Lt(n.choices[e])}</button>`).join("")}</div><div class="feedback" role="status">Puedes intentarlo de nuevo si te equivocas.</div>`,!1),Oe("#read-quiz").onclick=()=>lp(`${n.question}. ${oe.quizOrder.map(e=>n.choices[e]).join(". ")}`),pi.querySelectorAll("[data-answer]").forEach(e=>e.onclick=()=>{let t=os(i=>$h(i,Number(e.dataset.answer)));if(t)if(!t.ok)Oe(".feedback").textContent=t.message,e.classList.add("soft"),Et.play("hurt");else{zn(),ln(),Et.play("success"),Qn(`\u2605 +${t.earned} \xB7 ${t.message}`);let i=ri(oe);i&&(vt=i.site,An.travel(vt),ln())}})}function _n(){if(qa(),!oe||pi.open||oe.mode!=="duel"||oe.winner!==null)return;if(!oe.players[oe.current].bot){ls!==oe.current&&Ly();return}dh=setTimeout(()=>{os(Hh,{undo:!1})&&(on=oe.current,ln(),Et.play("enemy"),_n())},850)}function Ly(){let n=oe.players[oe.current];Di("handoff",`<span class="eyebrow">CAMBIO DE TURNO</span><h2 id="dialog-title">\xA1Te toca, ${Lt(n.name)}!</h2><p>${oe.players.filter(e=>!e.bot).length>1?"Pasa la pantalla a este participante antes de mostrar sus cartas.":"Tienes tres cartas y un cuerpo por proteger."}</p><div class="dialog-footer"><button class="primary" id="ready">Estoy listo \xB7 Ver mis cartas</button></div>`,!1),Oe("#ready").onclick=()=>{ls=oe.current,on=oe.current,zn(),ln()}}function ap(){if(Ur==="win")return;qa(),Et.play("victory");let n=oe.mode==="adventure";Di("win",`<div class="win-orb">\u2726</div><div class="center"><span class="eyebrow">MISI\xD3N CUMPLIDA</span><h1 id="dialog-title">${n?"\xA1El cuerpo est\xE1 en equilibrio!":`\xA1Gana ${Lt(oe.players[oe.winner].name)}!`}</h1><p>${n?`${oe.name}, has cuidado los cuatro sistemas y conseguido ${oe.stars} estrellas.`:"Cuatro sistemas distintos, estables y sin bloqueos. \xA1Bien jugado!"}</p><span class="pill">${Wr[oe.level-1].name} \xB7 ${Wr[oe.level-1].grades}</span></div><div class="dialog-footer"><button id="review">Revisar mi mundo</button><button class="primary" id="again">Nueva expedici\xF3n \u2192</button></div>`,!1),Oe("#review").onclick=()=>{zn()},Oe("#again").onclick=()=>fc()}function fc(){Ls=oe?.level||Ls,Xa()}function Xa(){Di("welcome",`<div class="welcome-top"><div><span class="eyebrow">INMUNO \xB7 EXPLORA, DESCUBRE, PROTEGE</span><h1 id="dialog-title">La aventura est\xE1<br>dentro de ti.</h1><p class="muted">Viaja por un cuerpo vivo. Conoce sus sistemas.<br>Forma tu equipo de defensa, una carta a la vez.</p></div><div class="welcome-art"><img src="${ph(dt.inmunologico.art)}" alt="Ilustraci\xF3n original del sistema inmunol\xF3gico"><span>\u2726</span></div></div><div class="level-grid">${Wr.map(n=>`<button class="level-card ${Ls===n.id?"active":""}" data-level="${n.id}"><span>${n.grades} DE PRIMARIA</span><b>${n.name}</b><small>${n.description}</small></button>`).join("")}</div><div class="mode-grid"><button id="choose-adventure" class="${Lr==="adventure"?"active":""}">\u2727 Aventura guiada<small>Misiones, descubrimientos y estrellas.</small></button><button id="choose-duel" class="${Lr==="duel"?"active":""}">\u2691 Duelo de cartas<small>Contra Microbot o en la misma pantalla.</small></button></div>${Lr==="duel"?`<div class="form-row"><label>Participantes <select id="count">${[2,3,4,5,6].map(n=>`<option ${uc===n?"selected":""}>${n}</option>`).join("")}</select></label><label><input type="checkbox" id="bot" ${hc?"checked":""}> Los rivales son bots</label></div>`:'<div class="form-row"><label>Tu nombre <input id="name" maxlength="24" placeholder="Explorador" value=""></label></div>'}<div class="dialog-footer"><span class="muted">3D real \xB7 Ilustraciones originales \xB7 Sin conexi\xF3n</span>${oe?'<button id="resume">Continuar partida</button>':""}<button class="primary" id="start">${oe?"Empezar nueva partida":"\xA1Vamos a explorar!"} \u2192</button></div>`,!1),pi.querySelectorAll("[data-level]").forEach(n=>n.onclick=()=>{Ls=Number(n.dataset.level),Xa()}),Oe("#choose-adventure").onclick=()=>{Lr="adventure",Xa()},Oe("#choose-duel").onclick=()=>{Lr="duel",Xa()},Oe("#count")?.addEventListener("change",n=>uc=Number(n.target.value)),Oe("#bot")?.addEventListener("change",n=>hc=n.target.checked),Oe("#resume")?.addEventListener("click",()=>{zn(),ln(),_n()}),Oe("#start").onclick=()=>{let n=Oe("#name")?.value||"Explorador",e=()=>{Et.unlock(),Nr(),Dr=null,oe=Lr==="adventure"?Wh({level:Ls,name:n}):zh({level:Ls,names:Array.from({length:uc},(t,i)=>i===0?"T\xFA":hc?`Microbot ${i}`:`Equipo ${i+1}`),bots:Array.from({length:uc},(t,i)=>i>0&&hc)}),jt=-1,ls=null,on=oe.mode==="duel"?oe.current:0,vt=oe.mode==="adventure"?oe.site:"adaptativo",zn(),An.travel(vt),dc(),ln(),_n()};oe?fp("\xBFEmpezar una partida nueva?","La partida actual ser\xE1 sustituida. Puedes descargarla desde Sesi\xF3n antes de empezar.",()=>{Xa(),e()}):e()}}function fp(n,e,t){Di("confirm",`<h2 id="dialog-title">${Lt(n)}</h2><p>${Lt(e)}</p><div class="dialog-footer"><button id="cancel-confirm">Cancelar</button><button class="primary" id="confirm">Continuar</button></div>`),Oe("#cancel-confirm").onclick=()=>{zn(),ln(),_n()},Oe("#confirm").onclick=()=>{zn(),t()}}function Dy(){Di("help",'<span class="eyebrow">GU\xCDA R\xC1PIDA</span><h2 id="dialog-title">Tu primera expedici\xF3n</h2><div class="rule-list"><article><b>1 \xB7 Elige tu nivel</b><p>Exploradores: 1.\xBA\u20132.\xBA, cuatro misiones. Defensores: 3.\xBA\u20134.\xBA, nueve misiones y memoria. Estrategas: 5.\xBA\u20136.\xBA, afinidades y duelo completo.</p></article><article><b>2 \xB7 Explora un mundo en 3D</b><p>Arrastra para girar. Usa la rueda para acercarte. Pulsa una isla o el mapa para mover a tu c\xE9lula. Las figuras y los microbios cambian al construir y curar.</p></article><article><b>3 \xB7 Aventura: carta \u2192 isla \u2192 Usar aqu\xED</b><p>Sigue la misi\xF3n. Despu\xE9s responde una pregunta. Equivocarte te da una pista y puedes repetir. Al cuidar los cuatro sistemas, abre el portal central.</p></article><article><b>4 \xB7 Duelo: una acci\xF3n por turno</b><p>Juega una carta o cambia de una a tres. Siempre repones hasta tres salvo Reinicio. Construye cuatro sistemas distintos sin infecci\xF3n. Selecciona el cuerpo de un rival para infectarlo. Vacuna + memoria en un sistema limpio permiten inmunizarlo con el bot\xF3n Inmunizar.</p></article><article><b>5 \xB7 Defensas y afinidades</b><p>Anticuerpo retira virus y deja memoria al eliminar la carta viral. Antibi\xF3tico retira bacterias. Respuesta e Integral retiran un nivel cualquiera. Virus en Respiratorio y bacteria en Circulatorio a\xF1aden dos niveles. Tres niveles colapsan un sistema; con vacuna, cuatro.</p></article><article><b>6 \xB7 Eventos del nivel Estrategas</b><p>Pandemia a\xF1ade un nivel a todos los sistemas y su portador no puede ganar. Se transfiere al usar una defensa v\xE1lida en otro participante. Colapso cambia todas las manos y permite repetir turno. El descarte se vuelve al agotar el mazo, sin barajarlo.</p></article><article><b>Juego original y adaptaci\xF3n digital</b><p>Se sigue la gu\xEDa espa\xF1ola. Se corrige una errata: los antibi\xF3ticos act\xFAan contra bacterias. El escudo absorbe un nivel, tambi\xE9n ante una infecci\xF3n severa; Respuesta puede colocarse como escudo universal en un sistema limpio. Las fichas digitales no se agotan. La inmunidad completa y las afinidades son mec\xE1nicas del juego. Consulta README y docs/REGLAS.md en el repositorio para los detalles.</p></article></div>')}function Ny(){Di("sound",`<span class="eyebrow">EL SONIDO DE LA AVENTURA</span><h2 id="dialog-title">A tu ritmo</h2><div class="sound-row"><label for="music">M\xFAsica de fondo<small>Composici\xF3n instrumental incluida en el juego.</small></label><input id="music" type="checkbox" ${Et.settings.music?"checked":""}></div><div class="sound-row"><label for="effects">Efectos sonoros<small>Cartas, descubrimientos y victorias.</small></label><input id="effects" type="checkbox" ${Et.settings.effects?"checked":""}></div><div class="sound-row"><label for="volume">Volumen</label><input id="volume" type="range" min="0" max="100" value="${Et.settings.volume}"><output id="volume-value">${Et.settings.volume}%</output></div><div class="dialog-footer"><button id="stop-voice">Detener voz</button><button class="primary" id="audio-done">Listo</button></div>`),Oe("#music").onchange=n=>{Et.unlock(),Et.set({music:n.target.checked})},Oe("#effects").onchange=n=>{Et.unlock(),Et.set({effects:n.target.checked}),Et.play("success")},Oe("#volume").oninput=n=>{Et.unlock(),Et.set({volume:Number(n.target.value)}),Oe("#volume-value").value=n.target.value+"%",Number(n.target.value)||Nr()},Oe("#stop-voice").onclick=Nr,Oe("#audio-done").onclick=()=>{zn(),_n()}}function Uy(){Di("session",`<span class="eyebrow">TU EXPEDICI\xD3N</span><h2 id="dialog-title">Sesi\xF3n de juego</h2><p>El progreso se guarda autom\xE1ticamente en este navegador. Puedes descargar una copia para llevarla a otro equipo.</p><div class="session-grid"><button id="export" ${oe?"":"disabled"}>\u2193 Descargar partida</button><button id="import">\u2191 Cargar partida</button><button id="undo" ${Dr?"":"disabled"}>\u21B6 Deshacer tu \xFAltima acci\xF3n</button><button id="new">\u2727 Nueva partida / Cambiar nivel</button></div><div class="journal"><b>Diario de la expedici\xF3n</b>${(oe?.log||[]).map(n=>`<p>${Lt(n)}</p>`).join("")}</div>`),Oe("#export").onclick=()=>{let n=new Blob([JSON.stringify(oe,null,2)],{type:"application/json"}),e=document.createElement("a");e.href=URL.createObjectURL(n),e.download="MI-PARTIDA-INMUNO.json",e.click(),setTimeout(()=>URL.revokeObjectURL(e.href),1e3)},Oe("#import").onclick=()=>Oe("#import-file").click(),Oe("#undo").onclick=()=>{oe=Dr,Dr=null,ls=null,jt=-1,on=oe.mode==="duel"?oe.current:0,vt=oe.mode==="adventure"?oe.site:vt,zn(),dc(),ln(),_n()},Oe("#new").onclick=()=>fc()}var Oe,ph,Lt,op,Et,pi,oe,Dr,jt,vt,on,fi,jn,dh,rp,ls,Ur,mh,Ls,Lr,uc,hc,An,pp=In(()=>{Xr();Ic();sp();hh();Oe=n=>document.querySelector(n),ph=n=>globalThis.__INMUNO_ASSETS__?.[n]||n,Lt=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),op="inmuno-state-v1",Et=cc(),pi=Oe("#dialog"),oe=null,Dr=null,jt=-1,vt="adaptativo",on=0,fi=!1,jn=[],dh=null,ls=null,Ur="",mh=!1,Ls=2,Lr="adventure",uc=2,hc=!0;try{let n=JSON.parse(localStorage.getItem(op));no(n)&&(oe=n)}catch{}An=ip(Oe("#world"),Oe("#labels"),fh);An.available||(Oe("#world").innerHTML='<div class="fallback"><h2>El mundo necesita WebGL 2</h2><p>Puedes seguir jugando con el mapa y las cartas. Para ver el mundo 3D, abre el juego en Chrome, Edge o Firefox con aceleraci\xF3n gr\xE1fica.</p></div>');pi.addEventListener("cancel",n=>{n.preventDefault(),!["welcome","quiz","handoff","win"].includes(Ur)&&(zn(),_n())});Oe("#import-file").onchange=async n=>{let e=n.target.files[0];if(n.target.value="",!!e)try{if(e.size>2e5)throw Error("El archivo es demasiado grande.");let t=JSON.parse(await e.text());if(!no(t))throw Error("No es una partida v\xE1lida de INMUNO.");fp("\xBFCargar esta partida?","Sustituir\xE1 el progreso que est\xE1 abierto ahora.",()=>{Dr=oe,oe=t,ls=null,jt=-1,on=oe.mode==="duel"?oe.current:0,vt=oe.mode==="adventure"?oe.site:"adaptativo",dc(),ln(),_n()})}catch(t){Qn(t.message)}};Oe("#home-view").onclick=()=>An.view("home");Oe("#top-view").onclick=()=>An.view("top");Oe("#sound").onclick=Ny;Oe("#help").onclick=Dy;Oe("#session").onclick=Uy;Oe(".brand").onclick=n=>{n.preventDefault(),fc()};document.addEventListener("keydown",n=>{pi.open||/INPUT|SELECT|TEXTAREA/.test(n.target.tagName)||(["1","2","3"].includes(n.key)&&cp(Number(n.key)-1),n.key==="Enter"&&Oe("#use")&&up())});document.addEventListener("visibilitychange",()=>{document.hidden?(Nr(),qa()):_n()});oe&&(Ls=oe.level,on=oe.mode==="duel"?oe.current:0,vt=oe.mode==="adventure"?oe.site:"adaptativo",ln());fc()});function Ds(n,e){return .2*Math.sin(n*.18)*Math.cos(e*.16)+.07*Math.sin(e*.7+n*.3)}function Or(n=1,e=0,t=[]){return{version:4,level:n,region:e,completed:[...t],phase:"playing",time:0,nextID:1,player:{x:0,z:23,y:0,health:100,energy:100,tool:1,shield:0,shieldCooldown:0,cooldown:0,invulnerable:0},nodes:Oy.map((i,s)=>({...i,id:s,status:"unknown",progress:0})),enemies:[],shots:[],hostile:[],pickups:[],events:[],score:0,shotsFired:0,wrongShots:0,repairs:0,sporeClock:0}}function mc(n){return n.nodes.filter(e=>e.status!=="healthy").sort((e,t)=>mi(n.player,e)-mi(n.player,t))[0]||null}function cn(n,e,t={}){n.events.push({type:e,...t})}function gp(n,e,t){let i=t*2.4+e.id,s=Qt[n.region].kind;n.enemies.push({id:n.nextID++,node:e.id,kind:s,x:e.x+Math.cos(i)*4,z:e.z+Math.sin(i)*4,hp:n.level===3?3:2,maxHP:n.level===3?3:2,cooldown:1.5+t*.7,hit:0})}function By(n){if(n.phase!=="playing")return!1;let e=mc(n);if(!e||mi(n.player,e)>4.8)return!1;if(e.status==="unknown"){if(Qt[n.region].ordered&&n.nodes.some(t=>t.id<e.id&&t.status!=="healthy"))return cn(n,"sequence"),!1;e.status="infected";for(let t=0;t<(n.level===1?2:n.level===2?3:4);t++)gp(n,e,t);return cn(n,"scan",{node:e.id,kind:Qt[n.region].kind}),!0}return!1}function _h(n){let e=n.player;return n.phase!=="playing"||e.shieldCooldown>0||e.energy<20?!1:(e.energy-=20,e.shield=2.8,e.shieldCooldown=9,cn(n,"shield"),!0)}function zy(n,e){let t=n.player,i=Fr[t.tool];if(n.phase!=="playing"||t.cooldown>0||t.energy<i.cost)return!1;t.energy-=i.cost,t.cooldown=i.rate,n.shotsFired++;let s=-Math.sin(e),r=-Math.cos(e);return n.shots.push({id:n.nextID++,x:t.x+s*.8,z:t.z+r*.8,dx:s,dz:r,tool:t.tool,life:i.range/26}),cn(n,"shoot"),!0}function pc(n,e,t,i){let s=e.x-n.x,r=e.z-n.z,a=Math.max(0,Math.min(1,((t.x-n.x)*s+(t.z-n.z)*r)/(s*s+r*r||1)));return Math.hypot(n.x+a*s-t.x,n.z+a*r-t.z)<i}function mp(n,e){let t=n.player;if(!(t.invulnerable>0)){if(t.shield>0){cn(n,"blocked");return}t.health=Math.max(0,t.health-e),t.invulnerable=.65,cn(n,"hurt"),t.health===0&&(n.phase="defeated",cn(n,"defeated"))}}function xh(n,e,t){if(t=Math.max(0,Math.min(.05,t)),n.phase!=="playing")return;n.time+=t;let i=n.player,s=e.yaw||0;for(let u of["shield","shieldCooldown","cooldown","invulnerable"])i[u]=Math.max(0,i[u]-t);i.energy=Math.min(100,i.energy+t*8);let r=e.forward||0,a=e.right||0,o=Math.hypot(r,a);o>1&&(r/=o,a/=o);let l=e.sprint?8:5.6;i.x+=(Math.cos(s)*a-Math.sin(s)*r)*l*t,i.z+=(-Math.sin(s)*a-Math.cos(s)*r)*l*t;for(let u of cs){let h=mi(i,u);h<u.r+.6&&(i.x=u.x+(i.x-u.x)/(h||1)*(u.r+.6),i.z=u.z+(i.z-u.z)/(h||1)*(u.r+.6))}let c=Math.hypot(i.x,i.z);c>29&&(i.x*=29/c,i.z*=29/c),e.fire&&zy(n,s);let d=mc(n);for(let u of n.nodes)u.status==="infected"&&!n.enemies.some(h=>h.node===u.id)&&(u.status="cleared",cn(n,"clear",{node:u.id})),u.status==="cleared"&&e.interact&&mi(i,u)<4.8?(u.progress+=t/(n.level===1?1.8:2.5),u.progress>=1&&(u.progress=1,u.status="healthy",n.repairs++,n.score+=400,i.health=Math.min(100,i.health+15),cn(n,"repair",{node:u.id}))):u.status==="cleared"&&(u.progress=Math.max(0,u.progress-t*.15));e.interact&&d?.status==="unknown"&&By(n);for(let u of n.enemies){u.cooldown-=t,u.hit=Math.max(0,u.hit-t);let h=mi(u,i),f=(i.x-u.x)/(h||1),p=(i.z-u.z)/(h||1),M=(u.kind==="bacteriana"?2.4:1.6)*(n.level===1?.65:n.level===3?1.2:1);if(h>2.6){let g=u.x+f*M*t,m=u.z+p*M*t;cs.some(S=>Math.hypot(g-S.x,m-S.z)<S.r+.6)||(u.x=g,u.z=m)}h<2.9&&u.cooldown<=0?(mp(n,n.level===1?5:9),u.cooldown=1.5):h<22&&u.cooldown<=0&&u.kind!=="bacteriana"&&(n.hostile.push({id:n.nextID++,x:u.x,z:u.z,dx:f,dz:p,life:4}),u.cooldown=n.level===1?4:2.8)}for(let u of n.shots){let h={x:u.x,z:u.z};if(u.x+=u.dx*26*t,u.z+=u.dz*26*t,u.life-=t,cs.some(f=>pc(h,u,f,f.r))&&(u.life=0),!(u.life<=0))for(let f of n.enemies){if(f.hp<=0||!pc(h,u,f,n.level===1?1.35:1.05))continue;u.life=0,Fr[u.tool].kind===f.kind||u.tool===3&&["bacteriana","fungica","severa"].includes(f.kind)?(f.hp--,f.hit=.15,cn(n,"hit",{x:f.x,z:f.z}),f.hp<=0&&(n.score+=100,n.pickups.push({id:n.nextID++,x:f.x,z:f.z}),cn(n,"kill",{x:f.x,z:f.z}))):(n.wrongShots++,cn(n,"wrong",{kind:f.kind}));break}}n.enemies=n.enemies.filter(u=>u.hp>0),n.shots=n.shots.filter(u=>u.life>0);for(let u of n.hostile){let h={x:u.x,z:u.z};u.x+=u.dx*8*t,u.z+=u.dz*8*t,u.life-=t,cs.some(f=>pc(h,u,f,f.r))&&(u.life=0),u.life>0&&pc(h,u,i,.8)&&(mp(n,n.level===1?4:7),u.life=0)}if(n.hostile=n.hostile.filter(u=>u.life>0),n.pickups=n.pickups.filter(u=>mi(i,u)<1.8?(i.health=Math.min(100,i.health+8),i.energy=Math.min(100,i.energy+12),cn(n,"pickup"),!1):!0),Qt[n.region].regrows&&(n.sporeClock+=t,n.sporeClock>(n.level===1?34:24))){n.sporeClock=0;let u=n.nodes.find(h=>h.status==="infected");u&&n.enemies.length<7&&(gp(n,u,n.nextID),cn(n,"spore"))}n.phase==="playing"&&n.nodes.every(u=>u.status==="healthy")&&(n.phase="complete",n.completed.includes(n.region)||n.completed.push(n.region),cn(n,"complete"))}function gc(n){return{version:4,level:n.level,completed:[...n.completed],region:n.region}}function _c(n){return!n||n.version!==4||![1,2,3].includes(n.level)||!Number.isInteger(n.region)||n.region<0||n.region>3||!Array.isArray(n.completed)||n.completed.length>4||!n.completed.every((e,t)=>e===t)?null:Or(n.level,Math.min(3,n.completed.length),n.completed)}var Qt,Fr,Oy,cs,mi,vh=In(()=>{Qt=[{id:"respiratorio",name:"El \xFAltimo aliento",place:"Interior de un bronquiolo",organ:"Pulmones",color:"#d8969d",kind:"viral",tool:1,mission:"Recupera tres alv\xE9olos para que el ox\xEDgeno vuelva a pasar a la sangre.",fact:"Los alv\xE9olos intercambian ox\xEDgeno y di\xF3xido de carbono con la sangre.",hint:"Los anticuerpos reconocen ant\xEDgenos espec\xEDficos. El antibi\xF3tico no act\xFAa contra los virus.",repair:"Restablecer intercambio de ox\xEDgeno",labels:["Alv\xE9olo A","Alv\xE9olo B","Alv\xE9olo C"]},{id:"circulatorio",name:"A contracorriente",place:"Interior de un vaso sangu\xEDneo",organ:"Circulaci\xF3n",color:"#bb566e",kind:"bacteriana",tool:2,mission:"Localiza las colonias bacterianas y recupera tres zonas del endotelio.",fact:"La sangre transporta ox\xEDgeno y nutrientes. El endotelio recubre los vasos sangu\xEDneos.",hint:"El equipo m\xE9dico ha autorizado un antibi\xF3tico contra esta bacteria. No sirve contra virus.",repair:"Recuperar endotelio",labels:["Endotelio A","Endotelio B","Endotelio C"]},{id:"nervioso",name:"El mensaje perdido",place:"Entre neuronas",organ:"Sistema nervioso",color:"#6f80b0",kind:"severa",tool:3,mission:"Recupera las conexiones en orden: dendrita, cuerpo celular y ax\xF3n.",fact:"Las neuronas transmiten se\xF1ales. Las dendritas reciben informaci\xF3n y el ax\xF3n la conduce.",hint:"Ac\xE9rcate a menos de 7 metros y activa Fagocitosis para reclutar una defensa.",repair:"Reconectar se\xF1al",labels:["1 \xB7 Dendrita","2 \xB7 Cuerpo celular","3 \xB7 Ax\xF3n"],ordered:!0},{id:"inmunologico",name:"Memoria de una defensa",place:"Interior de un ganglio linf\xE1tico",organ:"Defensas",color:"#6ba59a",kind:"fungica",tool:3,mission:"Cont\xE9n tres focos de hongos antes de que generen nuevas esporas.",fact:"Los ganglios linf\xE1ticos coordinan respuestas inmunitarias. No todos los microbios son perjudiciales.",hint:"La fagocitosis engloba amenazas a corta distancia. Los hongos pueden generar nuevas esporas.",repair:"Estabilizar foco",labels:["Foco A","Foco B","Foco C"],regrows:!0}],Fr={1:{name:"Anticuerpo",target:"Virus",kind:"viral",color:"#80cde7",rate:.38,cost:5,range:32},2:{name:"Antibi\xF3tico",target:"Bacteria",kind:"bacteriana",color:"#f5c778",rate:.44,cost:7,range:30},3:{name:"Fagocitosis",target:"Bacteria / hongo \xB7 cerca",kind:"cell",color:"#b0e3c0",rate:.8,cost:11,range:7}},Oy=[{x:-13,z:0},{x:10,z:-12},{x:13,z:12}],cs=[{x:-4,z:2,r:2.2},{x:5,z:-4,r:2},{x:2,z:13,r:1.7}],mi=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z)});function yh(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Pt,c=0;for(let d=0;d<n.length;++d){let u=n[d],h=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,d),c+=f}}if(t){let d=0,u=[];for(let h=0;h<n.length;++h){let f=n[h].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+d);d+=n[h].attributes.position.count}l.setIndex(u)}for(let d in r){let u=_p(r[d]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,u)}for(let d in a){let u=a[d][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let h=0;h<u;++h){let f=[];for(let M=0;M<a[d].length;++M)f.push(a[d][M][h]);let p=_p(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(p)}}}return l}function _p(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let d=n[c];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=d.normalized),i!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}let a=new e(r),o=new rn(a,t,i),l=0;for(let c=0;c<n.length;++c){let d=n[c];if(d.isInterleavedBufferAttribute){let u=l/t;for(let h=0,f=d.count;h<f;h++)for(let p=0;p<t;p++){let M=d.getComponent(h,p);o.setComponent(h+u,p,M)}}else a.set(d.array,l);l+=d.count*t}return s!==void 0&&(o.gpuType=s),o}var xp=In(()=>{Wa()});function vp(n){let e;try{e=new Ir({antialias:!0,powerPreference:"high-performance"})}catch{return null}n.append(e.domElement);let t=e.domElement;t.tabIndex=0,t.setAttribute("aria-label","Mundo 3D dentro del cuerpo humano. WASD para moverte; arrastra para mirar.");let i=e.getContext(),s=i.getExtension("WEBGL_debug_renderer_info"),r=!!s&&/llvmpipe|swiftshader/i.test(i.getParameter(s.UNMASKED_RENDERER_WEBGL));e.setPixelRatio(r?.8:Math.min(devicePixelRatio,1.6)),e.toneMapping=As,e.toneMappingExposure=1.08,e.outputColorSpace=Vt,e.shadowMap.enabled=!r,e.shadowMap.type=Ts;let a=new vs;a.background=new Ke("#54353e"),a.fog=new la("#82515c",.022);let o=new Ft(59,1,.12,150);o.position.set(0,5.5,32);let l=new Es("#f6d8cd","#4d536b",1.9);a.add(l);let c=new ji("#ffd3b3",2.5);c.position.set(-16,24,-15),c.castShadow=!r,c.shadow.mapSize.set(1024,1024),Object.assign(c.shadow.camera,{left:-35,right:35,top:35,bottom:-35,near:1,far:80}),c.shadow.normalBias=.06,a.add(c);let d=new ji("#99dee6",2);d.position.set(20,10,24),a.add(d);let u=new Ia("#b0edfa",95,25,2);a.add(u);let h=new xr({color:"#cc959a",roughness:.54,clearcoat:.18,clearcoatRoughness:.5,side:Fn}),f=h.clone();f.color.set("#a45970");let p=h.clone();p.color.set("#e8c2bc"),p.roughness=.38,p.clearcoat=.3;let M=new Tn({color:"#9e3b55",roughness:.35}),g=new Tn({color:"#60738e",roughness:.45}),m=new Tn({color:"#d5e5e7",roughness:.25,metalness:.48}),S=new Tn({color:"#283b4b",roughness:.35,metalness:.6}),w=new Tn({color:"#72d9e0",emissive:"#2393ae",emissiveIntensity:1.5,roughness:.2}),v=new xr({color:"#a42c49",roughness:.34,clearcoat:.2}),T=U=>new Nn({color:U,transparent:!0,opacity:.65,depthWrite:!1,blending:La});new Aa().load(Vy("assets/tissue/epithelium.jpg"),U=>{U.colorSpace=Vt,U.wrapS=U.wrapT=sr,U.repeat.set(5,5),U.anisotropy=r?1:Math.min(8,e.capabilities.getMaxAnisotropy());for(let ne of[h,f,p,K])ne!==p&&(ne.map=U),ne.needsUpdate=!0;let B=U.clone();B.colorSpace=Kn,B.needsUpdate=!0;for(let ne of[h,f,p,K])ne.bumpMap=B,ne.bumpScale=.12,ne.needsUpdate=!0});let y=new Li(1,r?16:28,r?10:18),C=new qn(1,1,1),_=new ys(.3,.55,6,12),E=new Sn(1,.035,5,48),R=y.clone(),N=R.attributes.position;for(let U=0;U<N.count;U++){let B=N.getX(U),ne=N.getY(U),de=N.getZ(U),V=1+.04*Math.sin(B*17+de*9)*Math.cos(ne*13);N.setXYZ(U,B*V,ne*V,de*V)}R.computeVertexNormals();function P(U,B,ne=a,de=[0,0,0],V=[1,1,1]){let se=new Ht(U,B);return se.position.set(...de),se.scale.set(...V),se.castShadow=!r,se.receiveShadow=!0,ne.add(se),se}function z(U,B,ne,de=a){return P(new Yi(new Pi(U.map(V=>new D(...V))),32,B,7,!1),ne,de)}function L(U,B,ne,de=a){let V=new Un(U,B,ne.length),se=new It;return ne.forEach((me,nt)=>{se.position.set(...me.p),se.scale.set(...me.s),se.rotation.set(...me.r||[0,0,0]),se.updateMatrix(),V.setMatrixAt(nt,se.matrix)}),V.receiveShadow=!0,de.add(V),V}let k=new $i(76,76,64,64);k.rotateX(-Math.PI/2);let Z=k.attributes.position;for(let U=0;U<Z.count;U++)Z.setY(U,Ds(Z.getX(U),Z.getZ(U))-.1);k.computeVertexNormals(),P(k,h);let J=new Li(1,72,44),he=J.attributes.position;for(let U=0;U<he.count;U++){let B=he.getX(U),ne=he.getY(U),de=he.getZ(U),V=1+.035*Math.sin(B*18+de*7)*Math.cos(ne*14);he.setXYZ(U,B*V,ne*V,de*V)}J.computeVertexNormals();let K=f.clone();K.side=qt;let ce=P(J,K,a,[0,12,0],[35,24,38]),ue=[];for(let U=0;U<45;U++){let B=U/45*$a;ue.push({p:[Math.sin(B)*32,5+Math.sin(U*2.2)*2,Math.cos(B)*34],s:[3.4,8+Math.sin(U)*2,3.7],r:[0,-B,0]})}let Le=L(R,p,ue),Ce=[];for(let U=0;U<470;U++){let B=U*2.39996,ne=28+Math.sin(U*5.7)*2;Ce.push({p:[Math.sin(B)*ne,.5+Math.sin(U)*.1,Math.cos(B)*ne],s:[.07,.6+U*17%10*.07,.07],r:[Math.sin(U)*.4,0,Math.cos(U)*.4]})}let ot=L(new $n(.3,.2,.55,5),p,Ce);for(let U=0;U<12;U++){let B=U/12*$a,ne=Math.sin(B),de=Math.cos(B);z([[ne*7,-.02,de*7],[ne*18,.06,de*18],[ne*30,.1,de*30],[ne*34,9,de*34]],.1,U%3===0?g:M),U%2===0&&z([[ne*18,.04,de*18],[ne*23+de*4,.1,de*23-ne*4],[ne*30+de*4,4,de*30-ne*4]],.065,M)}let Qe=new Tt;a.add(Qe);let tt=[];for(let U=0;U<3;U++){let B=new Tt;Qe.add(B),tt.push(B)}let Q=[];for(let U of cs){let B=P(R,p,a,[U.x,1.5,U.z],[U.r,1.8,U.r]);Q.push(B),P(y,f,a,[U.x+.5,2.3,U.z+.25],[.6,.45,.6])}let ie=new Tt;a.add(ie);let ye=-1;function Xe(U){for(let B of[...U.children])U.remove(B),B.traverse(ne=>{ne.isMesh&&ne.geometry!==y&&ne.geometry!==R&&ne.geometry!==C&&ne.geometry!==E&&ne.geometry.dispose()})}function Ae(U,B){ye=U;let ne=Qt[U],de=["#c38d96","#a9576e","#8790ae","#83a496"][U];h.color.set(de),f.color.set(de).multiplyScalar(.72),K.color.copy(f.color),p.color.set(de).lerp(new Ke("#eddbd1"),.68),a.fog.color.set(de).multiplyScalar(.6),a.background.copy(a.fog.color),ot.visible=U===0,Xe(ie);for(let V=0;V<3;V++){let se=tt[V];if(Xe(se),se.position.set(B.nodes[V].x,0,B.nodes[V].z),U===0){let Ge=[];for(let bt=0;bt<7;bt++){let ni=bt*2.4,Ni=Math.sin(ni)*1.8,Je=1+Math.cos(bt)*.5,Rt=Math.cos(ni)*1.8;P(R,p,se,[Ni,Je,Rt],[1.45,1.25,1.5]);for(let Wt=0;Wt<3;Wt++){let vi=[];for(let hs=0;hs<=12;hs++){let kn=hs/12*Math.PI,Fs=Wt*1.9+.15*Math.sin(hs);vi.push(new D(Ni+1.48*Math.sin(kn)*Math.cos(Fs),Je+1.28*Math.cos(kn),Rt+1.53*Math.sin(kn)*Math.sin(Fs)))}Ge.push(new Yi(new Pi(vi),18,.028,4,!1))}}let ut=yh(Ge);Ge.forEach(bt=>bt.dispose()),P(ut,M,se),z([[0,1.3,0],[0,2.5,-1],[0,3.8,-3]],.4,p,se)}else if(U===1){let Ge=P(new Sn(1.7,.45,12,40),p,se,[0,.4,0]);Ge.rotation.x=Math.PI/2,P(y,f,se,[0,.25,0],[1.5,.35,1.5])}else if(U===2){P(R,p,se,[0,1.4,0],[1.4,1.4,1.4]);for(let Ge=0;Ge<5;Ge++){let ut=Ge/5*$a;z([[0,1.3,0],[Math.sin(ut)*2,1.8,Math.cos(ut)*2],[Math.sin(ut)*4,.5,Math.cos(ut)*4]],.14,p,se)}}else for(let Ge=0;Ge<6;Ge++){let ut=Ge*2.4;P(R,p,se,[Math.sin(ut)*1.6,1+Math.cos(Ge)*.6,Math.cos(ut)*1.6],[1,1,1])}let me=P(E,w,se,[0,4,0],[1.1,1.1,1.1]);se.userData.marker=me;let nt=P(new $n(3.6,3.6,.02,48),T("#8ce9e0"),se,[0,.15,0]);se.userData.scan=nt}if(U===0)for(let V=0;V<16;V++){let se=V/16*$a;for(let me=0;me<3;me++)P(R,p,ie,[Math.sin(se)*34+Math.sin(me*3)*1.5,11+me*3,Math.cos(se)*35],[3.5,3,3.5])}if(U===1)for(let V=0;V<9;V++){let se=P(new Sn(31-V*.22,.28,6,80),M,ie,[0,6+V*.8,0]);se.rotation.x=Math.PI/2}if(U===2){for(let V=0;V<9;V++){let se=V/9*$a,me=Math.sin(se)*26,nt=Math.cos(se)*26;P(R,p,ie,[me,7,nt],[2,2,2]);for(let Ge=0;Ge<4;Ge++){let ut=se+Ge*1.5;z([[me,7,nt],[me+Math.sin(ut)*5,10,nt+Math.cos(ut)*5],[me+Math.sin(ut)*8,15,nt+Math.cos(ut)*8]],.3,p,ie)}}for(let V=0;V<2;V++){let se=B.nodes[V],me=B.nodes[V+1];z([[se.x,.3,se.z],[(se.x+me.x)/2,1,(se.z+me.z)/2],[me.x,.3,me.z]],.15,w,ie)}}if(U===3){let V=[];for(let se=0;se<60;se++){let me=se*2.39996;V.push({p:[Math.sin(me)*(25+se%4),2+se%5*2.4,Math.cos(me)*(26+se%3)],s:[1.5,1.5,1.5]})}L(R,p,V,ie)}}let He=new Li(1,20,12),re=He.attributes.position;for(let U=0;U<re.count;U++){let B=re.getX(U),ne=re.getY(U),de=re.getZ(U),V=Math.hypot(B,de);re.setY(U,ne*(.15+.32*V*V))}He.computeVertexNormals();let G=new Un(He,v,48);a.add(G);let W=new It,j=new Tt;j.scale.setScalar(.78),a.add(j),P(new ys(.46,.65,8,18),m,j,[0,1.35,0],[1,.95,.68]),P(y,S,j,[0,2.15,0],[.49,.4,.44]),P(new Sn(.37,.035,6,28),w,j,[0,2.16,-.32],[1,.65,1]),P(C,S,j,[0,1.55,.45],[.65,.65,.25]),P(C,w,j,[0,1.5,.61],[.3,.07,.04]);let ae=[];for(let U of[-1,1]){let B=new Tt;B.position.set(U*.6,1.7,0),j.add(B),P(_,m,B,[0,-.3,0],[.6,.8,.6]);let ne=P(_,S,B,[0,-.62,-.2],[.65,.7,.65]);ne.rotation.x=-.6,ae.push(B);let de=new Tt;de.position.set(U*.24,.85,0),j.add(de),P(_,S,de,[0,-.34,0],[.67,.7,.67]),P(C,m,de,[0,-.68,-.13],[.33,.16,.55]),ae.push(de)}let fe=P(new $n(.13,.19,.8,12),S,j,[.63,1.35,-.6]);fe.rotation.x=Math.PI/2,P(y,w,j,[.63,1.35,-1],[.12,.12,.07]);let Ue=P(y,new Nn({color:"#87e1ed",transparent:!0,opacity:.16,wireframe:!0,depthWrite:!1}),j,[0,1.2,0],[1.8,1.8,1.8]);Ue.visible=!1;let Ie=document.createElement("canvas");Ie.width=Ie.height=64;let Fe=Ie.getContext("2d"),Ve=Fe.createRadialGradient(32,32,1,32,32,32);Ve.addColorStop(0,"rgba(12,16,25,.55)"),Ve.addColorStop(1,"rgba(12,16,25,0)"),Fe.fillStyle=Ve,Fe.fillRect(0,0,64,64);let I=new ma(Ie),Ze=P(new $i(3.5,3.5),new Nn({map:I,transparent:!0,depthWrite:!1}),a);Ze.rotation.x=-Math.PI/2;let qe=new Tt;a.add(qe);let A=new Map;function x(U){let B=new Tt,ne={viral:"#a971bd",bacteriana:"#bfbd76",fungica:"#dbc39e",severa:"#b692c2"}[U],de=new Tn({color:ne,roughness:.52,bumpMap:h.bumpMap,bumpScale:.1});if(U==="bacteriana"){let V=P(new ys(.5,1.3,8,16),de,B);V.rotation.z=Math.PI/2;for(let se=0;se<2;se++)z([[1,0,0],[1.8,.3,se*.3],[2.5,-.2,se*.4],[3,.4,se*.5]],.035,de,B)}else{P(R,de,B,[0,0,0],[1,U==="fungica"?.7:1,1]);let V=[];for(let me=0;me<22;me++){let nt=1-2*(me+.5)/22,Ge=me*2.39996,ut=Math.sqrt(1-nt*nt),bt=new D(Math.cos(Ge)*ut,nt,Math.sin(Ge)*ut),ni=new $n(.13,.08,.55,6);ni.applyQuaternion(new an().setFromUnitVectors(new D(0,1,0),bt)),ni.translate(bt.x*1.1,bt.y*1.1,bt.z*1.1),V.push(ni)}let se=yh(V);V.forEach(me=>me.dispose()),P(se,de,B)}return B}let H=new Nn({color:"#a2e8f5"}),$=new Nn({color:"#eb8cae"}),ee=new Nn({color:"#c2eed1"}),ge=new Un(y,H,100),_e=new Un(y,$,80),te=new Un(new Ss(.25),ee,60);a.add(ge,_e,te),ge.frustumCulled=_e.frustumCulled=te.frustumCulled=!1;let le=new Pt,be=[];for(let U=0;U<170;U++)be.push(Math.sin(U*2.4)*31,1+U*1.73%20,Math.cos(U*2.4)*31);le.setAttribute("position",new ct(be,3));let Be=new fa(le,new pr({color:"#f1ded2",size:.08,transparent:!0,opacity:.4,depthWrite:!1}));a.add(Be);let Me=new Qi,ve={x:0,z:23},ze=0;function We(U,B,ne,de){U.count=Math.min(U.instanceMatrix.count,B.length);for(let V=0;V<U.count;V++){let se=B[V];W.position.set(se.x,Ds(se.x,se.z)+de,se.z),W.rotation.set(0,0,0),W.scale.set(ne,ne,ne),W.updateMatrix(),U.setMatrixAt(V,W.matrix)}U.instanceMatrix.needsUpdate=!0}function et(U,B,ne,de){U.region!==ye&&Ae(U.region,U);let V=U.player,se=U.time,me=Math.hypot(V.x-ve.x,V.z-ve.z)>.001;ve={x:V.x,z:V.z},j.position.set(V.x,Ds(V.x,V.z),V.z),j.rotation.y=B;for(let Je=0;Je<ae.length;Je++)ae[Je].rotation.x=me?Math.sin(se*11+Je%2*Math.PI+Math.floor(Je/2)*Math.PI)*.42:0;Ue.visible=V.shield>0,Ze.position.set(V.x,Ds(V.x,V.z)+.02,V.z),u.position.set(V.x,3,V.z-1);let nt=new D(Math.sin(B)*7.3,4.4+ne*4,Math.cos(B)*7.3);o.position.lerp(j.position.clone().add(nt),Math.min(1,de*7));let Ge=j.position.clone().add(new D(0,1.7,0)),ut=o.position.clone().sub(Ge),bt=ut.length();Me.set(Ge,ut.normalize()),Me.far=bt,a.updateMatrixWorld(!0);let ni=[ce,Le,ie,Qe,...Q,...a.children.filter(Je=>Je.geometry?.type==="TubeGeometry")],Ni=Me.intersectObjects(ni,!0).find(Je=>Je.distance>.5);Ni&&Ni.distance<bt&&o.position.copy(Ge).addScaledVector(ut,Math.max(1.8,Ni.distance-.4)),o.lookAt(V.x-Math.sin(B)*7,1.25+Ds(V.x,V.z)-ne*3,V.z-Math.cos(B)*7),ze=B;for(let Je=0;Je<3;Je++){let Rt=U.nodes[Je],Wt=tt[Je],vi=Rt.status==="healthy";Wt.userData.marker.rotation.y=se*.5,Wt.userData.marker.material=vi?ee:w,Wt.userData.marker.position.y=4+Math.sin(se*1.5+Je)*.12,Wt.userData.scan.material.color.set(vi?"#92e7b0":Rt.status==="infected"?"#ed879f":"#8ce9e0"),Wt.userData.scan.material.opacity=vi?.12:.17+.05*Math.sin(se*2)}for(let[Je,Rt]of A)U.enemies.some(Wt=>Wt.id===Je)||(qe.remove(Rt),Rt.traverse(Wt=>{Wt.isMesh&&![y,R].includes(Wt.geometry)&&Wt.geometry.dispose()}),A.delete(Je));for(let Je of U.enemies){let Rt=A.get(Je.id);Rt||(Rt=x(Je.kind),A.set(Je.id,Rt),qe.add(Rt)),Rt.position.set(Je.x,1.4+Ds(Je.x,Je.z)+Math.sin(se*2+Je.id)*.2,Je.z),Rt.rotation.y=se*.3+Je.id,Rt.scale.setScalar(Je.hit>0?.83:1)}We(ge,U.shots,.15,1.35),H.color.set(Fr[V.tool].color),We(_e,U.hostile,.2,1.2),We(te,U.pickups,.95,.5),G.visible=U.region===1,G.count=U.region===1?48:12;for(let Je=0;Je<G.count;Je++){let Rt=(Je*7+se*(U.region===1?3:.8))%64-32;W.position.set(Math.sin(Je*3.7)*25,U.region===1?3+Je%5*1.2:10+Je%4,Rt),W.rotation.set(Je*.6+se*.1,Je*.4,Je*.7),W.scale.setScalar(U.region===1?1.1:.65),W.updateMatrix(),G.setMatrixAt(Je,W.matrix)}G.instanceMatrix.needsUpdate=!0,Be.rotation.y=se*.004,e.render(a,o)}function O(){let U=n.clientWidth||innerWidth,B=n.clientHeight||innerHeight;e.setSize(U,B),o.aspect=U/B,o.updateProjectionMatrix()}return O(),window.addEventListener("resize",O),{canvas:t,soft:r,render:et,project(U,B,ne=4){return new D(U,ne,B).project(o)},stats(){let U=new Qi;return U.setFromCamera(new pe(0,0),o),{calls:e.info.render.calls,triangles:e.info.render.triangles,textures:e.info.memory.textures,camera:o.position.toArray(),player:j.position.toArray(),hits:U.intersectObjects(a.children,!0).slice(0,5).map(B=>({type:B.object.geometry?.type,pos:B.object.position.toArray(),scale:B.object.scale.toArray(),distance:B.distance}))}},dispose(){window.removeEventListener("resize",O),a.traverse(U=>{U.geometry?.dispose()}),e.dispose()}}}var $a,Vy,yp=In(()=>{Wa();xp();vh();$a=Math.PI*2,Vy=n=>globalThis.__INMUNO_ASSETS__?.[n]||n});var Xy={};function Eh(){en.clear(),Hr=Ka=!1,Ya=Za=0,us=null,xe("#stick").style.transform=""}function Th(){globalThis.speechSynthesis?.cancel(),At.duck(!1)}function Rp(n){if(!globalThis.speechSynthesis)return ei("Puedes leer la explicaci\xF3n en pantalla.");Th();let e=new SpeechSynthesisUtterance(n);e.lang="es-ES",e.rate=.9,e.onstart=()=>At.duck(!0),e.onend=e.onerror=()=>At.duck(!1),speechSynthesis.speak(e)}function xn(n,e){tn=!0,Eh(),Th(),_i=n,document.exitPointerLock?.(),xe("#modal-content").innerHTML=e,kr.open||kr.showModal()}function ti(){if(Se.phase==="complete"&&_i!=="welcome"){Np();return}if(Se.phase==="defeated"&&_i!=="welcome"){Up();return}kr.close(),_i="",tn=!1,Eh(),Th(),document.body.classList.add("playing"),xc=performance.now(),un?.canvas.focus()}function ei(n){xe("#notification").textContent=n,xe("#notification").classList.add("visible"),clearTimeout(Mp),Mp=setTimeout(()=>xe("#notification").classList.remove("visible"),5500)}function Ip(){try{localStorage.setItem(Ap,JSON.stringify(gc(Se))),Br=_c(gc(Se))}catch{ei("Usa Pausa \u2192 Descargar progreso para guardar.")}}function Pp(n=0){return`<svg class="body-chart" viewBox="0 0 220 350" aria-label="Mapa del cuerpo humano"><defs><radialGradient id="body-glow"><stop stop-color="#8ac5ce" stop-opacity=".18"/><stop offset="1" stop-color="#8ac5ce" stop-opacity="0"/></radialGradient></defs><ellipse cx="110" cy="165" rx="105" ry="160" fill="url(#body-glow)"/><path class="body-outline" d="M110 14c-18 0-27 12-25 28 1 14 9 22 13 25v14l-30 8c-12 5-16 19-20 33l-20 72c-3 11 8 17 14 7l27-66-3 68 8 122c1 15 17 16 19 1l13-104h8l13 104c2 15 18 14 19-1l8-122-3-68 27 66c6 10 17 4 14-7l-20-72c-4-14-8-28-20-33l-30-8V67c7-5 13-15 13-27 0-16-11-26-25-26Z"/><path class="routes" d="M110 77v140m0-116-37 40m37-40 37 40m-37 40-23 98m23-98 23 98"/><path class="organ ${n===0?"selected":""}" d="M103 100c-19-7-29 16-29 37 0 10 12 12 23 5l8-9Zm14 0c19-7 29 16 29 37 0 10-12 12-23 5l-8-9Z"/><path class="organ ${n===1?"selected":""}" d="M112 124c-8-14-19-2-13 8l13 16 14-16c8-13-8-20-14-8Z"/><path class="organ ${n===2?"selected":""}" d="M93 29c-8 5-7 19 2 22l13-3 5 3 15-2c10-8 7-21-3-24-3-9-14-8-17-3-7-5-14-1-15 7Z"/><g class="organ ${n===3?"selected":""}"><circle cx="78" cy="106" r="4"/><circle cx="142" cy="106" r="4"/><circle cx="88" cy="192" r="4"/><circle cx="132" cy="192" r="4"/><circle cx="111" cy="166" r="5"/></g></svg>`}function zr(){document.body.classList.remove("playing"),xn("welcome",`<div class="welcome-kicker"><i></i>Una expedici\xF3n a escala microsc\xF3pica</div><div class="welcome-layout"><div><h1 id="dialog-title">La aventura<br>est\xE1 dentro de ti.</h1><p>Entra en el cuerpo humano. Explora sus tejidos, identifica amenazas y decide c\xF3mo defenderlo.</p><p class="caption">T\xFA conduces al nanobot. T\xFA eliges la respuesta.</p></div>${Pp(0)}</div><div class="level-picker" aria-label="Nivel de primaria">${Sh.map((n,e)=>`<button data-level="${e+1}" class="${Ns===e+1?"active":""}"><b>${n} de primaria</b><small>${["M\xE1s pistas y tiempo para reaccionar","Exploraci\xF3n y decisiones","Amenazas resistentes y menos pistas"][e]}</small></button>`).join("")}</div><div class="modal-footer"><a href="${globalThis.__INMUNO_OFFLINE__?"MODO-CARTAS.html":"cartas.html"}">Juego original de cartas</a>${Br?'<button id="continue">Continuar</button>':""}<button id="watch-trailer">Ver c\xF3mo se juega</button><button class="primary" id="start-game">Entrar en el cuerpo</button></div>`),kr.querySelectorAll("[data-level]").forEach(n=>n.onclick=()=>{Ns=+n.dataset.level,zr()}),xe("#watch-trailer").onclick=()=>Lp(zr),xe("#continue")?.addEventListener("click",()=>{Se=Br,Ns=Se.level,wh(!1),At.unlock()}),xe("#start-game").onclick=()=>{At.unlock(),Br?(xn("confirm",'<h2 id="dialog-title">Nueva expedici\xF3n</h2><p>Puedes descargar el progreso actual desde Pausa. La nueva expedici\xF3n sustituir\xE1 el guardado cuando completes una misi\xF3n.</p><div class="modal-footer"><button id="cancel-new">Volver</button><button id="confirm-new" class="primary">Empezar</button></div>'),xe("#cancel-new").onclick=zr,xe("#confirm-new").onclick=Tp):Tp()}}function Lp(n){xn("trailer",`<h2 id="dialog-title">As\xED se juega a Expedici\xF3n interior</h2><video id="trailer-video" controls playsinline preload="metadata" style="width:100%;max-height:54dvh;border-radius:7px" aria-label="Explicaci\xF3n narrada en espa\xF1ol"><source src="${globalThis.__INMUNO_OFFLINE__?"TRAILER-INMUNO.mp4":"media/TRAILER-INMUNO.mp4"}" type="video/mp4"></video><p class="caption">Capturas de la partida real: explorar, escanear, elegir defensa y recuperar tejido.</p><div class="modal-footer"><button id="video-back" class="primary">Volver</button></div>`);let e=xe("#trailer-video");e.volume=.8,At.duck(!0),e.play().catch(()=>{});let t=()=>{e.pause(),At.duck(!1),n()};e.onended=t,xe("#video-back").onclick=t}function Tp(){Se=Or(Ns),Cn=0,Vr=.13,gi=0,Ja(!0)}function Ja(n=!1){let e=Gy[gi];xn("tutorial",`<span class="welcome-kicker">Antes de entrar \xB7 ${gi+1} de 3</span><h2 id="dialog-title">${e.title}</h2><p>${e.text}</p><div class="how-grid"><article><span class="instruction-icon">${e.icon}</span><h3>${e.action}</h3><p>${e.detail}</p></article></div><div class="modal-footer">${gi?'<button id="lesson-prev">Anterior</button>':""}<button id="hear-lesson">Escuchar</button><button id="lesson-next" class="primary">${gi===2?n?"Comenzar misi\xF3n":"Volver al juego":"Siguiente"}</button></div>`),xe("#hear-lesson").onclick=()=>Rp(e.title+" "+e.text+" "+e.detail),xe("#lesson-prev")?.addEventListener("click",()=>{gi--,Ja(n)}),xe("#lesson-next").onclick=()=>{gi<2?(gi++,Ja(n)):(ti(),xi(),ei("Busca un alv\xE9olo. Ac\xE9rcate y pulsa E para escanearlo."))}}function wh(n=!0){let e=Qt[Se.region];xn("brief",`<div class="welcome-kicker">Misi\xF3n ${Se.region+1} \xB7 ${e.place}</div><h2 id="dialog-title">${e.name}</h2><div class="original-cards"><img src="${wp(dt[e.id].art)}" alt="Carta original de ${e.organ}"><div><p>${e.mission}</p><p class="caption">${e.fact}</p></div></div><div class="modal-footer"><button id="brief-hear">Escuchar misi\xF3n</button><button class="primary" id="brief-play">Entrar en la regi\xF3n</button></div>`),xe("#brief-hear").onclick=()=>Rp(e.mission+" "+e.fact),xe("#brief-play").onclick=()=>{Cn=0,Vr=.13,ti(),xi()}}function vc(){let n=Se.region;xn("map",`<h2 id="dialog-title">Tu ruta por el cuerpo</h2><div class="map-layout">${Pp(n)}<div class="map-missions">${Qt.map((e,t)=>`<button data-region="${t}" class="${n===t?"active":""}" ${t>Se.completed.length?"disabled":""}><span>${Se.completed.includes(t)?"\u2713":t>Se.completed.length?"\u2311":t+1}</span><div><b>${e.organ}</b><small>${e.place}</small><small>${Se.completed.includes(t)?"Recuperado \xB7 puedes repetir":t>Se.completed.length?"Completa la regi\xF3n anterior":e.name}</small></div></button>`).join("")}</div></div><p class="caption">La escala y las distancias se adaptan al juego. Los escenarios representan tejidos del cuerpo.</p><div class="modal-footer"><button id="map-back" class="primary">Volver a la misi\xF3n</button></div>`),xe("#map-back").onclick=ti,kr.querySelectorAll("[data-region]").forEach(e=>e.onclick=()=>{let t=+e.dataset.region;if(t===Se.region&&Se.phase==="playing")return ti();Se.nodes.some(i=>i.status!=="unknown")&&Se.phase==="playing"?(xn("confirm",'<h2 id="dialog-title">\xBFSalir de esta regi\xF3n?</h2><p>Conservar\xE1s las regiones completadas. El avance dentro de esta misi\xF3n se reiniciar\xE1.</p><div class="modal-footer"><button id="map-cancel">Seguir aqu\xED</button><button id="map-confirm" class="primary">Cambiar regi\xF3n</button></div>'),xe("#map-cancel").onclick=ti,xe("#map-confirm").onclick=()=>bh(t)):bh(t)})}function bh(n){Se=Or(Ns,n,Se.completed),Cn=0,Vr=.13,wh()}function Us(){!un||_i==="welcome"||(xn("pause",`<h2 id="dialog-title">Expedici\xF3n en pausa</h2><p>${Qt[Se.region].place} \xB7 ${Se.completed.length}/4 regiones recuperadas</p><div class="menu-grid"><button id="menu-help">C\xF3mo jugar</button><button id="menu-trailer">Ver explicaci\xF3n en v\xEDdeo</button><button id="menu-map">Mapa del cuerpo</button><button id="menu-sound">M\xFAsica y efectos</button><button id="menu-cards">Cartas originales</button><button id="export">Descargar progreso</button><button id="import">Cargar progreso</button><button id="menu-home">Cambiar nivel</button></div><div class="modal-footer"><button id="resume" class="primary">Seguir explorando</button></div>`),xe("#resume").onclick=ti,xe("#menu-trailer").onclick=()=>Lp(Us),xe("#menu-help").onclick=()=>{gi=0,Ja()},xe("#menu-map").onclick=vc,xe("#menu-sound").onclick=Dp,xe("#menu-cards").onclick=Hy,xe("#menu-home").onclick=zr,xe("#export").onclick=Wy,xe("#import").onclick=()=>xe("#progress-import").click())}function Dp(){xn("sound",`<h2 id="dialog-title">Sonido de la expedici\xF3n</h2><div class="sound-row"><label for="music">M\xFAsica de fondo</label><input type="checkbox" id="music" ${At.settings.music?"checked":""}></div><div class="sound-row"><label for="effects">Efectos sonoros</label><input type="checkbox" id="effects" ${At.settings.effects?"checked":""}></div><div class="sound-row"><label for="volume">Volumen</label><input type="range" id="volume" min="0" max="100" value="${At.settings.volume}"></div><div class="modal-footer"><button id="sound-back" class="primary">Volver</button></div>`),xe("#music").onchange=n=>{At.unlock(),At.set({music:n.target.checked})},xe("#effects").onchange=n=>{At.unlock(),At.set({effects:n.target.checked})},xe("#volume").oninput=n=>{At.unlock(),At.set({volume:+n.target.value})},xe("#sound-back").onclick=ti}function Hy(){xn("codex",`<h2 id="dialog-title">La ciencia de INMUNO</h2><div class="how-grid">${["anticuerpo","antibiotico","integral"].map(n=>`<article><img src="${wp(dt[n].art)}" alt="${dt[n].name}" style="width:95px"><h3>${dt[n].name}</h3><p>${dt[n].text}</p></article>`).join("")}</div><p class="caption">El nanobot y sus herramientas son una met\xE1fora de juego. Los medicamentos solo se usan por indicaci\xF3n profesional. Muchos microbios son beneficiosos.</p><div class="modal-footer"><button id="codex-back" class="primary">Volver</button></div>`),xe("#codex-back").onclick=ti}function Np(){Ip();let n=Qt[Se.region],e=Se.completed.length===4;At.play(e?"victory":"success"),xn("complete",`<div class="success-mark">\u2713</div><span class="welcome-kicker">${e?"Expedici\xF3n completada":"Tejido recuperado"}</span><h2 id="dialog-title">${e?"El equilibrio vuelve al cuerpo.":n.name+": misi\xF3n cumplida."}</h2><p>${n.fact}</p><div class="result-stats"><div><b>3 / 3</b><span>Focos recuperados</span></div><div><b>${Se.score}</b><span>Puntos de misi\xF3n</span></div><div><b>${Math.floor(Se.time/60)}:${String(Math.floor(Se.time%60)).padStart(2,"0")}</b><span>Tiempo de misi\xF3n</span></div></div><p class="caption">${n.hint}</p><div class="modal-footer"><button id="results-map">Ver mapa corporal</button><button class="primary" id="next-region">${e?"Repetir expedici\xF3n":"Siguiente misi\xF3n"}</button></div>`),xe("#results-map").onclick=vc,xe("#next-region").onclick=()=>{e?zr():bh(Se.completed.length)}}function Up(){xn("defeated",`<h2 id="dialog-title">El nanobot necesita recuperarse.</h2><p>Usa las c\xE9lulas grandes como cobertura y activa tu campo protector con Q. Recoge recursos para recuperar integridad.</p><p class="caption">${Qt[Se.region].hint}</p><div class="modal-footer"><button id="retry" class="primary">Reintentar esta misi\xF3n</button></div>`),xe("#retry").onclick=()=>{Se=Or(Ns,Se.region,Se.completed),Cn=0,ti(),xi()}}function Wy(){let n=new Blob([JSON.stringify(gc(Se),null,2)],{type:"application/json"}),e=URL.createObjectURL(n),t=document.createElement("a");t.href=e,t.download="INMUNO-INTERIOR-PROGRESO.json",t.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3)}function xi(){let n=Qt[Se.region],e=Se.player,t=mc(Se);xe("#place").textContent=n.place,xe("#mission-name").textContent=n.name;let i=Se.nodes.find(o=>o.status==="infected");xe("#objective").textContent=i?`Amenaza: ${{viral:"virus",bacteriana:"bacteria",fungica:"hongo",severa:"compleja"}[n.kind]}. ${Se.level===1?n.hint:"Elige tu defensa y despeja el foco."}`:t?.status==="cleared"?"Vuelve al foco despejado y mant\xE9n E para recuperar el tejido.":n.mission,xe("#objectives").innerHTML=Se.nodes.map(o=>`<li class="${o.status==="healthy"?"done":""}"><i></i>${n.labels[o.id]}${o.status==="healthy"?" \xB7 recuperado":o.status==="infected"?" \xB7 amenaza detectada":o.status==="cleared"?" \xB7 listo para recuperar":""}</li>`).join(""),xe("#grade").textContent=Sh[Se.level-1]+" de primaria",xe("#health-number").textContent=Math.ceil(e.health),xe("#health-fill").style.width=e.health+"%",xe("#energy-number").textContent=Math.floor(e.energy),xe("#energy-fill").style.width=e.energy+"%",xe("#progress").textContent=Se.repairs+" / 3 focos recuperados",xe("#equipment").querySelectorAll("button").forEach(o=>o.classList.toggle("active",+o.dataset.tool===e.tool)),xe("#shield-status").textContent=e.shield>0?"Activo":e.shieldCooldown>0?Math.ceil(e.shieldCooldown)+" s":"Listo \xB7 20 de energ\xEDa";let s=t&&mi(e,t)<4.8;xe("#context").hidden=!s||t.status==="infected"||tn,xe("#interact-button span").textContent=t?.status==="unknown"?"Escanear "+n.labels[t.id]:"Mant\xE9n E \xB7 "+n.repair,xe("#repair-progress").value=t?.progress||0,xe("#repair-progress").hidden=t?.status!=="cleared";let r=60+e.x*1.5,a=60+e.z*1.5;xe("#radar").innerHTML=`<circle cx="60" cy="60" r="46" fill="none" stroke="#b7cfca33"/><path d="M14 60h92M60 14v92" stroke="#b7cfca22"/>${cs.map(o=>`<circle cx="${60+o.x*1.5}" cy="${60+o.z*1.5}" r="${o.r*1.5}" fill="#b2bdc333"/>`).join("")}${Se.nodes.map(o=>`<circle cx="${60+o.x*1.5}" cy="${60+o.z*1.5}" r="3" fill="${o.status==="healthy"?"#a1e9bc":o.status==="infected"?"#e491a9":"#cfdfd8"}"/>`).join("")}${Se.enemies.map(o=>`<circle cx="${60+o.x*1.5}" cy="${60+o.z*1.5}" r="1.5" fill="#e97e9c"/>`).join("")}<path d="M0-5 3 3 0 1-3 3Z" fill="#b1f2f0" transform="translate(${r},${a}) rotate(${-Cn*180/Math.PI})"/>`}function Ah(){let n=Se.events;Se.events=[];for(let e of n)e.type==="shoot"&&At.play("shoot"),e.type==="hit"&&(xe("#reticle").classList.add("hit"),setTimeout(()=>xe("#reticle").classList.remove("hit"),100)),e.type==="kill"&&At.play("pop"),e.type==="hurt"&&(At.play("hurt"),document.body.classList.add("hurt"),setTimeout(()=>document.body.classList.remove("hurt"),250)),(e.type==="shield"||e.type==="pickup")&&At.play("heal"),e.type==="scan"&&(At.play("enemy"),ei(`Esc\xE1ner: ${{viral:"virus detectados",bacteriana:"bacterias detectadas",fungica:"hongos detectados",severa:"amenaza compleja detectada"}[e.kind]}. ${Se.level===1?Qt[Se.region].hint:"Elige una defensa con 1, 2 o 3."}`)),e.type==="clear"&&ei("Foco despejado. Ac\xE9rcate y mant\xE9n E para recuperar el tejido."),e.type==="repair"&&(At.play("success"),ei("Tejido recuperado. Busca el siguiente foco.")),e.type==="wrong"&&Se.time-Sp>3&&(Sp=Se.time,ei("Esta defensa no act\xFAa sobre esa amenaza. "+Qt[Se.region].hint)),e.type==="sequence"&&Se.time-Ep>3&&(Ep=Se.time,ei("Sigue el recorrido de la se\xF1al: 1 \xB7 Dendrita, 2 \xB7 Cuerpo celular, 3 \xB7 Ax\xF3n.")),e.type==="spore"&&ei("El hongo ha liberado una nueva espora. Despeja el foco antes de que se extienda."),e.type==="defeated"&&Up(),e.type==="complete"&&Np()}function Fp(n){if(requestAnimationFrame(Fp),document.hidden){xc=n;return}let e=Math.min(.12,(n-(xc||n))/1e3);if(xc=n,!tn){en.has("KeyZ")&&(Cn+=e*1.8),en.has("KeyC")&&(Cn-=e*1.8);for(let t=e;t>0;t-=.025)xh(Se,{yaw:Cn,forward:(en.has("KeyW")||en.has("ArrowUp")?1:0)-(en.has("KeyS")||en.has("ArrowDown")?1:0)+Za,right:(en.has("KeyD")||en.has("ArrowRight")?1:0)-(en.has("KeyA")||en.has("ArrowLeft")?1:0)+Ya,sprint:en.has("ShiftLeft"),fire:Hr||en.has("Space"),interact:Ka||en.has("KeyE")},Math.min(.025,t));Ah(),n-bp>130&&(xi(),bp=n)}un&&(!un.soft||n-(un.lastRender||0)>60)&&(un.render(Se,Cn,Vr,e||.016),un.lastRender=n,xe("#world-labels").innerHTML=Se.nodes.map(t=>{let i=un.project(t.x,t.z,4.7);return i.z>1||Math.abs(i.x)>1||Math.abs(i.y)>1?"":`<span class="world-label ${t.status==="healthy"?"done":""}" style="left:${(i.x*.5+.5)*100}%;top:${(-i.y*.5+.5)*100}%">${t.status==="healthy"?"\u2713 ":""}${Qt[Se.region].labels[t.id]} \xB7 ${Math.round(mi(Se.player,t))} m</span>`}).join(""))}function Op(n){if(Mh!==n.pointerId)return;let e=Gr.getBoundingClientRect(),t=(n.clientX-e.left-e.width/2)/32,i=(n.clientY-e.top-e.height/2)/32,s=Math.max(1,Math.hypot(t,i));Ya=t/s,Za=-i/s,xe("#stick").style.transform=`translate(${Ya*26}px,${-Za*26}px)`}var xe,wp,At,kr,Ap,Br,Se,Ns,Cn,Vr,tn,_i,en,Hr,Ka,us,Ya,Za,Mh,xc,bp,Mp,Sp,Ep,gi,un,Sh,Cp,Gy,Gr,Bp=In(()=>{vh();yp();hh();Xr();xe=n=>document.querySelector(n),wp=n=>globalThis.__INMUNO_ASSETS__?.[n]||n,At=cc(),kr=xe("#anatomy-dialog"),Ap="inmuno-interior-v4",Br=null;try{Br=_c(JSON.parse(localStorage.getItem(Ap)))}catch{}Se=Br||Or(),Ns=Se.level,Cn=0,Vr=.13,tn=!0,_i="",en=new Set,Hr=!1,Ka=!1,us=null,Ya=0,Za=0,Mh=null,xc=0,bp=0,Sp=-10,Ep=-10,gi=0,un=vp(xe("#anatomy-world")),Sh=["1.\xBA\u20132.\xBA","3.\xBA\u20134.\xBA","5.\xBA\u20136.\xBA"],Cp=matchMedia("(pointer:coarse)").matches;document.body.classList.toggle("touch",Cp);Gy=[{title:"Tu primera misi\xF3n: devolver el aire.",text:"Est\xE1s dentro de un bronquiolo. Busca los tres grupos de alv\xE9olos marcados. Ac\xE9rcate a uno y pulsa E para escanearlo.",icon:"\u2316",action:"Moverse y escanear",detail:"WASD o flechas para moverte. Mant\xE9n el bot\xF3n derecho del rat\xF3n y arrastra para mirar. En m\xF3vil, usa el joystick y arrastra por la derecha."},{title:"Identifica. Despu\xE9s decide.",text:"El esc\xE1ner revela la amenaza. Elige una herramienta con 1, 2 o 3. Un antibi\xF3tico no elimina virus: la elecci\xF3n tiene consecuencias.",icon:"Y",action:"Elegir y apuntar",detail:"Apunta con el c\xEDrculo central. Clic o espacio para actuar. Fagocitosis requiere acercarse. Q activa un campo protector y consume energ\xEDa."},{title:"Despejar no basta: recupera el tejido.",text:"Cuando el foco est\xE9 despejado, vuelve al alv\xE9olo y mant\xE9n E para restablecer el intercambio de ox\xEDgeno. Recupera los tres para completar la misi\xF3n.",icon:"\u25C9",action:"Recuperar y explorar",detail:"Recoge los recursos que dejan las amenazas para recuperar integridad. M abre el mapa corporal. Esc pausa la partida."}];xe("#progress-import").onchange=async n=>{let e=n.target.files[0];if(n.target.value="",!!e)try{if(e.size>1e4)throw Error("Archivo demasiado grande.");let t=_c(JSON.parse(await e.text()));if(!t)throw Error("Elige un progreso de Expedici\xF3n interior.");xn("confirm",`<h2 id="dialog-title">Cargar expedici\xF3n</h2><p>${t.completed.length}/4 regiones recuperadas \xB7 ${Sh[t.level-1]} de primaria</p><div class="modal-footer"><button id="cancel-import">Cancelar</button><button id="confirm-import" class="primary">Cargar</button></div>`),xe("#cancel-import").onclick=Us,xe("#confirm-import").onclick=()=>{Se=t,Ns=Se.level,Ip(),wh()}}catch(t){ei(t.message)}};xe("#equipment").innerHTML=Object.entries(Fr).map(([n,e])=>`<button data-tool="${n}" style="--tool:${e.color}" aria-label="${n}: ${e.name}"><kbd>${n}</kbd><span class="tool-symbol">${n==="1"?"Y":n==="2"?"\u25D2":"\u25C9"}</span><b>${e.name}</b><small>${e.target}</small></button>`).join("");xe("#equipment").querySelectorAll("button").forEach(n=>n.onclick=()=>{Se.player.tool=+n.dataset.tool,xi(),un?.canvas.focus()});xe("#pause-button").onclick=Us;xe("#brand").onclick=n=>{n.preventDefault(),Us()};xe("#map-button").onclick=()=>{_i!=="welcome"&&vc()};xe("#help-button").onclick=()=>{_i!=="welcome"&&(gi=0,Ja())};xe("#sound-button").onclick=()=>{_i!=="welcome"&&Dp()};xe("#fullscreen").onclick=()=>{document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch(()=>ei("Puedes usar F11 para ampliar el juego."))};xe("#shield-button").onclick=()=>{tn||(_h(Se),Ah(),xi())};xe("#interact-button").onpointerdown=n=>{tn||(Ka=!0,n.currentTarget.setPointerCapture(n.pointerId))};xe("#interact-button").onpointerup=xe("#interact-button").onpointercancel=()=>{Ka=!1};window.addEventListener("keydown",n=>{if(n.code==="Escape"){n.preventDefault(),tn?["pause","map","sound","codex","tutorial"].includes(_i)&&ti():Us();return}tn||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)&&n.preventDefault(),en.add(n.code),!n.repeat&&(n.code==="KeyM"&&vc(),n.code==="KeyQ"&&_h(Se),["Digit1","Digit2","Digit3"].includes(n.code)&&(Se.player.tool=+n.code.at(-1),xi())))});window.addEventListener("keyup",n=>en.delete(n.code));window.addEventListener("blur",()=>{Eh(),tn||Us()});document.addEventListener("visibilitychange",()=>{document.hidden&&!tn&&Us()});un?.canvas.addEventListener("contextmenu",n=>n.preventDefault());un?.canvas.addEventListener("pointerdown",n=>{tn||(At.unlock(),un.canvas.focus(),n.button===2?(us={x:n.clientX,y:n.clientY},un.canvas.setPointerCapture(n.pointerId)):n.button===0&&!Cp&&(Hr=!0))});window.addEventListener("pointermove",n=>{!us||tn||(Cn-=(n.clientX-us.x)*.006,Vr=Math.max(-.5,Math.min(.65,Vr+(n.clientY-us.y)*.003)),us={x:n.clientX,y:n.clientY})});window.addEventListener("pointerup",()=>{Hr=Ka=!1,us=null});Gr=xe("#joystick");Gr.onpointerdown=n=>{tn||(Mh=n.pointerId,Gr.setPointerCapture(n.pointerId),Op(n))};Gr.onpointermove=Op;Gr.onpointerup=Gr.onpointercancel=()=>{Mh=null,Ya=Za=0,xe("#stick").style.transform=""};xe("#touch-look").onpointerdown=n=>{tn||(us={x:n.clientX,y:n.clientY},n.currentTarget.setPointerCapture(n.pointerId))};xe("#touch-fire").onpointerdown=n=>{tn||(Hr=!0,n.currentTarget.setPointerCapture(n.pointerId))};xe("#touch-fire").onpointerup=xe("#touch-fire").onpointercancel=()=>{Hr=!1};kr.addEventListener("cancel",n=>{n.preventDefault(),["pause","map","sound","codex","tutorial"].includes(_i)&&ti()});window.render_game_to_text=()=>JSON.stringify({phase:Se.phase,paused:tn,region:Se.region,player:Se.player,nodes:Se.nodes,enemies:Se.enemies,completed:Se.completed,score:Se.score,yaw:Cn,coordinateSystem:"x right, z south, y up; yaw 0 faces -z"});new URLSearchParams(location.search).has("qa")&&(window.__inmunoQA={get:()=>Se,pose(n,e,t=0){Se.player.x=n,Se.player.z=e,Cn=t,xi()},advance(n,e={}){for(let t=0;t<n;t+=25)xh(Se,{yaw:Cn,...e},Math.min(25,n-t)/1e3);Ah(),xi()},stats:()=>un?.stats()});un?(zr(),xi(),requestAnimationFrame(Fp)):xn("unsupported",'<h2 id="dialog-title">Activa los gr\xE1ficos 3D del navegador</h2><p>Abre el juego con Chrome, Edge o Firefox y activa la aceleraci\xF3n gr\xE1fica.</p>')});document.body.dataset.mode==="cards"?Promise.resolve().then(()=>(pp(),Fy)):Promise.resolve().then(()=>(Bp(),Xy));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

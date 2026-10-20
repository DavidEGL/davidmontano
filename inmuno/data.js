export const regions=[
 {id:'respiratorio',name:'Respiratorio',short:'Respirar',color:'#b191ec',icon:'◉',position:[-8,-5.5],fact:'Los pulmones nos ayudan a tomar oxígeno del aire.',gradeFact:'En los pulmones, el oxígeno pasa a la sangre y sale el dióxido de carbono.'},
 {id:'circulatorio',name:'Circulatorio',short:'Transportar',color:'#f17d95',icon:'♥',position:[8,-5.5],fact:'El corazón impulsa la sangre por todo el cuerpo.',gradeFact:'La sangre transporta oxígeno, nutrientes y células de defensa.'},
 {id:'nervioso',name:'Nervioso',short:'Coordinar',color:'#78aaf1',icon:'✧',position:[-8,6.5],fact:'El cerebro recibe información y coordina lo que hacemos.',gradeFact:'El cerebro, la médula y los nervios intercambian señales para coordinar el cuerpo.'},
 {id:'inmunologico',name:'Inmunológico',short:'Proteger',color:'#5fcdbd',icon:'✚',position:[8,6.5],fact:'Las defensas ayudan a reconocer y combatir amenazas.',gradeFact:'Las células del sistema inmunológico reconocen amenazas y algunas guardan memoria.'},
 {id:'adaptativo',name:'Adaptativo',short:'Conectar',color:'#edbe60',icon:'∞',position:[0,0],fact:'Esta estación es el comodín del juego. Conecta todas las rutas.',gradeFact:'En INMUNO, el sistema adaptativo es un comodín y no recibe bonificaciones de afinidad.'}
];
export const levels=[{id:1,name:'Exploradores',grades:'1.º–2.º',description:'Cuatro misiones cortas, dos respuestas y muchas pistas.'},{id:2,name:'Defensores',grades:'3.º–4.º',description:'Construye, cura, vacuna y descubre la memoria inmunológica.'},{id:3,name:'Estrategas',grades:'5.º–6.º',description:'Afinidades, niveles, inmunización y todas las cartas del duelo.'}];
const definitions=[
 ['respiratorio','Sistema respiratorio','system',10,'Construye la estación de los pulmones.'],
 ['circulatorio','Sistema circulatorio','system',10,'Construye la estación del corazón.'],
 ['nervioso','Sistema nervioso','system',10,'Construye la estación del cerebro.'],
 ['inmunologico','Sistema inmunológico','system',10,'Construye la estación de las defensas.'],
 ['adaptativo','Sistema adaptativo','system',4,'Comodín: cuenta como un sistema distinto.'],
 ['viral','Infección viral','infection',12,'Añade 1 nivel; en Respiratorio, añade 2.'],
 ['bacteriana','Infección bacteriana','infection',10,'Añade 1 nivel; en Circulatorio, añade 2.'],
 ['fungica','Infección fúngica','infection',8,'Añade 1 nivel. En Inmunológico, crece tras una ronda.'],
 ['severa','Infección severa','infection',4,'Añade 2 niveles de infección.'],
 ['mutacion','Mutación crítica','infection',2,'Solo sobre 1 nivel y sin defensas: añade 2 y colapsa.'],
 ['anticuerpo','Anticuerpo','defense',8,'Retira 1 nivel viral. Al eliminar el último, deja memoria.'],
 ['antibiotico','Antibiótico','defense',8,'Retira 1 nivel bacteriano. No elimina virus.'],
 ['vacuna','Vacuna','defense',6,'Bloquea virus y eleva a 4 niveles el umbral de colapso.'],
 ['respuesta','Respuesta inmunitaria','defense',4,'Retira 1 nivel de cualquier infección.'],
 ['integral','Defensa integral','defense',4,'Retira 1 nivel de cualquier tipo o coloca un escudo.'],
 ['reasignacion','Reasignación sistémica','treatment',3,'Intercambia dos sistemas completos, sin duplicarlos.'],
 ['interferencia','Interferencia estratégica','treatment',3,'Obtén un sistema rival que todavía no tengas.'],
 ['reinicio','Reinicio inmunológico','treatment',2,'Limpia tus infecciones; ahora no robas y tu siguiente turno es solo de robo.'],
 ['aislamiento','Aislamiento','treatment',2,'El rival no puede jugar en su siguiente turno.'],
 ['sabotaje','Sabotaje médico','treatment',2,'Retira una vacuna o una ficha de memoria.'],
 ['intervencion','Intervención forzada','treatment',2,'El rival descarta dos cartas al azar y las repone.'],
 ['pandemia','Pandemia global Z7','event',2,'Añade 1 nivel a los sistemas. Su portador no puede ganar.'],
 ['colapso','Colapso inmunitario','event',2,'Todos cambian su mano y vuelves a jugar.']
];
export const cards=Object.fromEntries(definitions.map(([id,name,kind,count,text])=>[id,{id,name,kind,count,text,art:`assets/cartas/${id}.png`} ]));
export const kindNames={system:'Sistema',infection:'Infección',defense:'Defensa',treatment:'Tratamiento',event:'Evento global'};
export const kindColors={system:'#75a3ea',infection:'#bf91df',defense:'#64bea9',treatment:'#a6aabc',event:'#ecaa66'};
export const regionById=id=>regions.find(r=>r.id===id);
export const illnessNames={viral:'viral',bacteriana:'bacteriana',fungica:'fúngica',severa:'severa',pandemia:'global'};

const lessonTemplates=[
 {site:'respiratorio',action:'build',card:'respiratorio',title:'¡A respirar!',task:'Elige el sistema respiratorio y constrúyelo en la isla de los pulmones.',question:'¿Qué nos ayuda a respirar?',choices:['Los pulmones','Los huesos','El cabello'],correct:0,explanation:'Los pulmones toman oxígeno del aire y expulsan dióxido de carbono.'},
 {site:'respiratorio',action:'cure',card:'anticuerpo',illness:'viral',title:'Visitantes morados',task:'Usa anticuerpos para retirar todos los niveles virales del Respiratorio.',question:'¿Qué deja el anticuerpo cuando elimina la última infección viral?',choices:['Memoria inmunológica','Una infección nueva','Un antibiótico'],correct:0,explanation:'En INMUNO, eliminar la última infección viral con un anticuerpo deja una ficha de memoria.'},
 {site:'respiratorio',action:'vaccinate',card:'vacuna',title:'La defensa recuerda',task:'Añade una vacuna al sistema con memoria y activa la inmunización.',question:'En el juego, ¿qué dos elementos forman la inmunización completa?',choices:['Vacuna y memoria','Dos infecciones','Dos sistemas iguales'],correct:0,explanation:'Una vacuna y una ficha de memoria pueden convertirse en inmunización completa. Es una regla del juego.'},
 {site:'circulatorio',action:'build',card:'circulatorio',title:'El gran transporte',task:'Construye el sistema circulatorio en la isla del corazón.',question:'¿Qué hace el corazón?',choices:['Impulsa la sangre','Produce pensamientos','Guarda el aire'],correct:0,explanation:'El corazón impulsa la sangre, que transporta oxígeno, nutrientes y células de defensa.'},
 {site:'circulatorio',action:'cure',card:'antibiotico',illness:'bacteriana',title:'Bacterias a la vista',task:'Elige antibióticos para retirar los niveles bacterianos del Circulatorio.',question:'¿Contra qué actúan los antibióticos?',choices:['Bacterias','Virus','Todos los microbios por igual'],correct:0,explanation:'Los antibióticos actúan contra bacterias; no eliminan virus.'},
 {site:'nervioso',action:'build',card:'nervioso',title:'Mensajes a toda velocidad',task:'Construye la estación del sistema nervioso.',question:'¿Qué coordina el sistema nervioso?',choices:['Movimientos y respuestas','Solo el color de los ojos','El tamaño de las cartas'],correct:0,explanation:'El sistema nervioso recibe información y coordina movimientos y respuestas.'},
 {site:'nervioso',action:'cure',card:'respuesta',illness:'severa',title:'Una respuesta en equipo',task:'Retira la infección con Respuesta inmunitaria o Defensa integral.',question:'Una infección severa tiene 2 niveles. ¿Cuántas defensas que retiran 1 nivel necesitas?',choices:['Dos','Una','Ninguna'],correct:0,explanation:'Cada defensa retira un nivel. Para retirar dos niveles hacen falta dos acciones.'},
 {site:'inmunologico',action:'build',card:'inmunologico',title:'La ciudad de los guardianes',task:'Construye el sistema inmunológico en la isla del escudo.',question:'¿Qué función tienen las defensas?',choices:['Reconocer y combatir amenazas','Hacer que todos los microbios sean malos','Evitar que aprendamos'],correct:0,explanation:'Las defensas reconocen y combaten amenazas. Muchos microorganismos son inofensivos o beneficiosos.'},
 {site:'inmunologico',action:'cure',card:'integral',illness:'fungica',title:'El último equilibrio',task:'Retira los niveles fúngicos con Defensa integral o Respuesta inmunitaria.',question:'En INMUNO, ¿qué significa un sistema estable?',choices:['No tiene infección','Tiene más microbios','Ha colapsado'],correct:0,explanation:'Un sistema estable está libre de infección y puede estar protegido, vacunado, con memoria o inmunizado.'}
];
export function lessonsFor(level){
 if(level===1)return [
  {...lessonTemplates[1],title:'Cuida los pulmones',task:'El microbio es morado. Elige el anticuerpo y ayuda a los pulmones.',question:'¿Qué nos ayuda a respirar?',choices:['Los pulmones','El pelo'],explanation:lessonTemplates[0].explanation},
  {...lessonTemplates[4],title:'Cuida el corazón',task:'La bacteria es verde. Elige el antibiótico y cuida esta isla.',question:'¿Qué mueve el corazón?',choices:['La sangre','Las nubes'],explanation:lessonTemplates[3].explanation},
  {...lessonTemplates[6],illness:'viral',title:'Cuida el cerebro',task:'Elige Respuesta inmunitaria para ayudar al cerebro.',question:'¿Qué nos ayuda a pensar?',choices:['El cerebro','El zapato'],explanation:lessonTemplates[5].explanation},
  {...lessonTemplates[8],title:'Cuida las defensas',task:'Elige el escudo multicolor de Defensa integral.',question:'¿Las defensas ayudan a protegernos?',choices:['Sí','No'],explanation:lessonTemplates[7].explanation}
 ];
 const list=lessonTemplates.map(l=>({...l,choices:[...l.choices]}));
 if(level===3){list[1].question='¿Por qué el virus coloca 2 niveles al llegar al Respiratorio?';list[1].choices=['Por la afinidad de esa carta en el juego','Porque todos los sistemas reciben siempre 2','Porque un antibiótico lo refuerza'];list[1].explanation='La afinidad viral con el Respiratorio añade un nivel extra en INMUNO.';list[8].question='¿Cuándo crece la infección fúngica en el Inmunológico?';list[8].choices=['Tras una ronda, si no se ha eliminado','En cualquier sistema por igual','Solo después de una vacuna'];list[8].explanation='En el juego, su afinidad con el Inmunológico añade un nivel una vez, al pasar una ronda.';}
 return list;
}

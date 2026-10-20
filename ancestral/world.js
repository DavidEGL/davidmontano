import * as THREE from 'three';
import {heroes,zones} from './data.js';

// Real WebGL geometry for the world; the original illustrated characters are billboards.
export function createWorld({host,labels,assetURL,onHero,onEnemy,onMove,onQuest,onTreasure,onNotice}){
 let renderer;
 try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});}
 catch{host.parentElement.classList.add('world-fallback');onNotice('Tu navegador usa la vista de tablero. Las reglas y los controles siguen disponibles.');return null;}
 host.append(renderer.domElement);host.parentElement.classList.add('webgl-mode');
 renderer.domElement.setAttribute('aria-label','Mundo 3D: arrastra para girar, usa la rueda para acercarte y pulsa para explorar.');
 renderer.domElement.setAttribute('role','img');renderer.domElement.tabIndex=0;
 const gl=renderer.getContext(),debug=gl.getExtension('WEBGL_debug_renderer_info');const software=debug?/swiftshader|llvmpipe|software/i.test(String(gl.getParameter(debug.UNMASKED_RENDERER_WEBGL))):false;
 document.body.classList.toggle('low-power',software);
 renderer.setPixelRatio(software?.75:Math.min(devicePixelRatio,1.6));renderer.shadowMap.enabled=!software;
 renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.outputColorSpace=THREE.SRGBColorSpace;
 renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.25;
 const scene=new THREE.Scene();scene.background=new THREE.Color('#0b1227');scene.fog=new THREE.FogExp2('#0b1227',.018);
 const camera=new THREE.PerspectiveCamera(43,1,.1,160),raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();
 const root=new THREE.Group();scene.add(root);
 const hemi=new THREE.HemisphereLight('#a3d6ff','#1d143b',2.1);scene.add(hemi);
 const sun=new THREE.DirectionalLight('#ffdfb0',3.4);sun.position.set(-9,18,10);sun.castShadow=true;
 sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-17,right:17,top:17,bottom:-17,near:1,far:65});sun.shadow.bias=-.0005;sun.shadow.normalBias=.03;scene.add(sun);
 const rim=new THREE.DirectionalLight('#5d83ff',2);rim.position.set(7,9,-15);scene.add(rim);
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 let state=null,zone=-1,time=0,last=performance.now(),theta=.32,phi=.85,distance=30,desiredTheta=.32,desiredPhi=.85,desiredDistance=30;
 const focus=new THREE.Vector3(0,1,-.8),desiredFocus=focus.clone();
 let actors=[],picks=[],surfaces=[],decor=[],torches=[],effects=[],floating=[],cameraShake=0,rolling=null,frame;
 const textures=new Map();let seed=12345;
 const rand=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/4294967296;};
 const mat=(color,options={})=>new THREE.MeshStandardMaterial({color,roughness:.84,metalness:.08,...options});
 function mesh(geometry,material,parent=root,x=0,y=0,z=0){const m=new THREE.Mesh(geometry,material);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 const box=(w,h,d,material,parent,x,y,z)=>mesh(new THREE.BoxGeometry(w,h,d),material,parent,x,y,z);
 function texture(path){if(!textures.has(path)){const t=new THREE.TextureLoader().load(assetURL(path));t.colorSpace=THREE.SRGBColorSpace;textures.set(path,t);}return textures.get(path);}
 function glowTexture(){const c=document.createElement('canvas');c.width=c.height=128;const g=c.getContext('2d'),r=g.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,'#fff');r.addColorStop(.2,'#ffffffa0');r.addColorStop(1,'#ffffff00');g.fillStyle=r;g.fillRect(0,0,128,128);return new THREE.CanvasTexture(c);}
 const halo=glowTexture();
 function glow(parent,color,size,x,y,z){const s=new THREE.Sprite(new THREE.SpriteMaterial({map:halo,color,transparent:true,opacity:.7,blending:THREE.AdditiveBlending,depthWrite:false}));s.scale.set(size,size,1);s.position.set(x,y,z);parent.add(s);return s;}
 function platform(x,z,w,d,stone){
  box(w,1.1,d,stone,root,x,-.02,z);
  const dark=mat('#172134');box(w-.25,1.2,d-.25,dark,root,x,-.9,z);
  const surface=box(w,.01,d,new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false}),root,x,.57,z);surface.userData.kind='ground';surfaces.push(surface);
  const tiles=new THREE.InstancedMesh(new THREE.BoxGeometry(.94,.08,.94),mat('#ffffff'),Math.floor(w)*Math.floor(d)),dummy=new THREE.Object3D();let tileIndex=0;
  for(let ix=0;ix<Math.floor(w);ix++)for(let iz=0;iz<Math.floor(d);iz++){const tone=['#7a8990','#788189','#667985','#8b9697'][Math.floor(rand()*4)];dummy.position.set(x-w/2+ix+.5,.57+rand()*.025,z-d/2+iz+.5);dummy.updateMatrix();tiles.setMatrixAt(tileIndex,dummy.matrix);tiles.setColorAt(tileIndex,new THREE.Color(tone));tileIndex++;}tiles.receiveShadow=true;root.add(tiles);
  for(let i=0;i<Math.ceil((w+d)*1.2);i++){
   const edge=i%2===0,px=edge?x+(rand()-.5)*w:x+(i%4===1?-1:1)*(w/2-.25),pz=edge?z+(i%4===0?-1:1)*(d/2-.25):z+(rand()-.5)*d;
   const rock=mesh(new THREE.DodecahedronGeometry(.65+rand()*.5,0),mat(i%2?'#27354a':'#344555'),root,px,-.65,pz);rock.scale.set(1,.7+rand(),1);rock.rotation.set(rand(),rand(),rand());
  }
 }
 function pillar(x,z,height=4){const g=new THREE.Group();g.position.set(x,.65,z);root.add(g);
  box(1,.3,1,mat('#b6a47e'),g,0,.15,0);box(.68,height,.68,mat('#737e87'),g,0,height/2+.25,0);box(1,.27,1,mat('#c2af86'),g,0,height+.4,0);
  for(let i=0;i<3;i++)box(.73,.07,.73,mat('#bea36b',{metalness:.7,roughness:.4}),g,0,.8+i*(height/3),0);
  return g;
 }
 function torch(x,z,color='#ffb651'){
  const g=new THREE.Group();g.position.set(x,.65,z);root.add(g);
  box(.7,.22,.7,mat('#71645c'),g,0,.1,0);mesh(new THREE.CylinderGeometry(.23,.3,1.1,6),mat('#283543'),g,0,.7,0);
  mesh(new THREE.CylinderGeometry(.4,.19,.34,8),mat('#d1a45b',{metalness:.7}),g,0,1.38,0);
  const flame=mesh(new THREE.OctahedronGeometry(.34,0),mat(color,{emissive:color,emissiveIntensity:2}),g,0,1.85,0);flame.scale.y=1.65;
  const light=new THREE.PointLight(color,12,7,2);light.position.y=1.9;if(torches.length%(software?4:2)===0)g.add(light);const shine=glow(g,color,2.5,0,1.8,0);torches.push({flame,light,shine,offset:rand()*6});
 }
 function crystal(x,z,color='#54dfff',scale=1){const g=new THREE.Group();g.position.set(x,.8,z);root.add(g);for(let i=0;i<3;i++){const c=mesh(new THREE.OctahedronGeometry(.6,0),mat(color,{emissive:color,emissiveIntensity:.65,metalness:.5,roughness:.22}),g,(i-1)*.35,.6+(i===1?.3:0),(i%2)*.2);c.scale.set(.6,1.7-i*.25,.65);c.rotation.z=(i-1)*.3;}g.scale.setScalar(scale);glow(g,color,3.3,0,.9,0);decor.push({type:'crystal',node:g,baseY:.8,offset:rand()*6});}
 let portal=null,chest=null,barrier=null;
 function createPortal(){
  const g=new THREE.Group();g.position.set(0,.65,-9);root.add(g);portal=g;
  pillar(-2.2,-9,4.5);pillar(2.2,-9,4.5);box(5.4,.65,1.1,mat('#9aa4a7'),root,0,5.7,-9);
  for(let i=0;i<3;i++)box(4.4+i*.5,.2,1.3+i*.2,mat('#65778c'),root,0,.73+i*.2,-8.6+i*.3);
  const ring=mesh(new THREE.TorusGeometry(1.65,.095,8,64),mat('#d7bd78',{emissive:'#e5a74d',emissiveIntensity:.7,metalness:.6}),g,0,2.6,0);
  const inner=mesh(new THREE.TorusGeometry(1.42,.035,6,64),mat('#6ceaff',{emissive:'#53e0ff',emissiveIntensity:2}),g,0,2.6,.02);decor.push({type:'ring',node:inner});
  const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,uniforms:{uTime:{value:0},uColor:{value:new THREE.Color('#4eacff')}},vertexShader:'varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec2 vUv;uniform float uTime;uniform vec3 uColor;void main(){vec2 p=(vUv-.5)*2.;float r=length(p);float a=atan(p.y,p.x);float energy=.5+.5*sin(r*24.-uTime*2.+a*3.);float alpha=(1.-smoothstep(.65,1.,r))*(.3+energy*.55);gl_FragColor=vec4(uColor*(.6+energy),alpha);}'});
  const veil=mesh(new THREE.CircleGeometry(1.55,64),material,g,0,2.6,.04);veil.userData.kind='quest';picks.push(veil);decor.push({type:'portal',node:veil});
  for(let i=0;i<8;i++){const a=i/8*Math.PI*2;mesh(new THREE.OctahedronGeometry(.12),mat('#b9edff',{emissive:'#80d7ff',emissiveIntensity:1}),g,Math.cos(a)*1.85,2.6+Math.sin(a)*1.85,.1);}
  glow(g,'#4cb8ff',6.5,0,2.6,-.2);const light=new THREE.PointLight('#70d4ff',15,12);light.position.set(0,2.5,1);g.add(light);
  hotspot('world-portal','Portal ancestral',new THREE.Vector3(0,5.4,-9),onQuest,'✧');
 }
 function createChest(){const g=new THREE.Group();g.position.set(-5.8,.75,2.6);root.add(g);chest=g;
  const wood=mat('#544631'),gold=mat('#d5af62',{metalness:.7,roughness:.35});box(1.25,.75,.85,wood,g,0,.4,0);
  for(const x of [-.43,.43])box(.12,.8,.9,gold,g,x,.4,0);
  const lid=new THREE.Group();lid.position.set(0,.8,-.43);g.add(lid);box(1.3,.25,.9,wood,lid,0,.08,.43);for(const x of [-.43,.43])box(.12,.28,.93,gold,lid,x,.1,.43);box(.18,.3,.1,gold,g,0,.55,.48);
  const hit=box(1.5,1.2,1.2,new THREE.MeshBasicMaterial({visible:false}),g,0,.6,0);hit.userData.kind='treasure';picks.push(hit);g.userData.lid=lid;
  g.userData.glow=glow(g,'#ffcc55',3,0,.9,0);hotspot('world-chest','Cofre de runas',new THREE.Vector3(-5.8,2.8,2.6),onTreasure,'◇');
 }
 let hotspotList=[];
 function hotspot(id,title,position,callback,symbol){const b=document.createElement('button');b.id=id;b.className='world-hotspot';b.innerHTML=`<span>${symbol}</span><small>${title}</small>`;b.setAttribute('aria-label',title);b.onclick=e=>{e.stopPropagation();callback();};labels.append(b);hotspotList.push({element:b,position});}
 function actor(kind,index,path,name,position,color,scale){
  const group=new THREE.Group();group.position.copy(position);root.add(group);
  const tex=texture(path),sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:tex,transparent:true,depthWrite:false}));
  const ratio=kind==='hero'?[443/354,1,1,439/353,470/353][index]:zone===0?364/273:308/461;
  sprite.scale.set(scale*ratio,scale,1);sprite.position.y=scale/2+.18;group.add(sprite);sprite.userData={kind,index};picks.push(sprite);
  const ring=mesh(new THREE.TorusGeometry(kind==='hero'?.58:.8,.025,6,40),new THREE.MeshBasicMaterial({color,transparent:true,opacity:.7}),group,0,.06,0);ring.rotation.x=-Math.PI/2;
  const shadow=mesh(new THREE.CircleGeometry(.7,24),new THREE.MeshBasicMaterial({color:'#07101e',transparent:true,opacity:.55,depthWrite:false}),group,0,.025,0);shadow.rotation.x=-Math.PI/2;
  const prison=mesh(new THREE.SphereGeometry(scale*.65,12,8),new THREE.MeshBasicMaterial({color:'#a78bfa',wireframe:true,transparent:true,opacity:.4}),group,0,scale/2,0);prison.visible=false;
  const label=document.createElement('button');label.className=`actor-label ${kind}`;label.innerHTML='<span></span><i><b></b></i>';label.querySelector('span').textContent=name;label.setAttribute('aria-label',`${kind==='hero'?'Seleccionar héroe':'Seleccionar enemigo'} ${name}`);label.onclick=e=>{e.stopPropagation();kind==='hero'?onHero(index):onEnemy(index);};labels.append(label);
  const a={kind,index,group,sprite,ring,shadow,prison,label,target:position.clone(),scale,color,flash:0,move:0,hp:1,max:1,dead:false,lunging:null};actors.push(a);return a;
 }
 function toWorld(pos){return new THREE.Vector3((pos[0]-50)*.16,.75,(pos[1]-50)*.22);}
 function safePosition(p){if(surfaces.some(s=>Math.abs(p.x-s.position.x)<=s.geometry.parameters.width/2&&Math.abs(p.z-s.position.z)<=s.geometry.parameters.depth/2))return p;return new THREE.Vector3(THREE.MathUtils.clamp(p.x,-5.3,5.3),.75,THREE.MathUtils.clamp(p.z,3.3,9.3));}
 function fromWorld(p){return [(p.x/.16)+50,(p.z/.22)+50];}
 const waterMaterial=new THREE.ShaderMaterial({uniforms:{uTime:{value:0},uColor:{value:new THREE.Color('#12374e')}},vertexShader:'varying vec3 vWorld;uniform float uTime;void main(){vec3 p=position;p.z+=sin(p.x*.55+uTime*.6)*.08+cos(p.y*.6+uTime*.4)*.09;vec4 w=modelMatrix*vec4(p,1.);vWorld=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}',fragmentShader:'varying vec3 vWorld;uniform float uTime;uniform vec3 uColor;void main(){float r=sin(vWorld.x*1.7+sin(vWorld.z*.4+uTime*.4)*1.6+uTime*.35);float s=pow(max(0.,r),16.)*.18;float fog=1.-exp(-distance(cameraPosition,vWorld)*.023);gl_FragColor=vec4(mix(uColor+vec3(.1,.4,.55)*s,vec3(.043,.07,.153),fog),1.);}'});
 const water=mesh(new THREE.PlaneGeometry(160,160,90,90),waterMaterial,scene,0,-1.8,0);water.rotation.x=-Math.PI/2;water.receiveShadow=false;
 const starGeometry=new THREE.BufferGeometry(),stars=[];for(let i=0;i<350;i++)stars.push((rand()-.5)*140,10+rand()*55,(rand()-.5)*140);starGeometry.setAttribute('position',new THREE.Float32BufferAttribute(stars,3));scene.add(new THREE.Points(starGeometry,new THREE.PointsMaterial({color:'#c7dfff',size:.075,transparent:true,opacity:.8,depthWrite:false})));
 const moon=mesh(new THREE.SphereGeometry(5.5,24,16),new THREE.MeshBasicMaterial({color:'#7195c1'}),scene,-24,15,-36);glow(scene,'#5f8fe0',24,-24,15,-36);
 const motesGeometry=new THREE.BufferGeometry(),motes=[];for(let i=0;i<110;i++)motes.push((rand()-.5)*27,.8+rand()*8,(rand()-.5)*27);motesGeometry.setAttribute('position',new THREE.Float32BufferAttribute(motes,3));const motesMesh=new THREE.Points(motesGeometry,new THREE.PointsMaterial({map:halo,color:'#82f4ef',size:.17,transparent:true,opacity:.6,depthWrite:false,blending:THREE.AdditiveBlending}));scene.add(motesMesh);
 function build(nextZone){
  for(const a of actors)a.label.remove();for(const h of hotspotList)h.element.remove();for(const f of floating)f.element.remove();
  root.traverse(n=>{if(n.geometry)n.geometry.dispose();if(n.material){for(const m of Array.isArray(n.material)?n.material:[n.material])m.dispose();}});root.clear();actors=[];picks=[];surfaces=[];decor=[];torches=[];effects=[];floating=[];hotspotList=[];zone=nextZone;seed=4251+zone*719;
  const stone=mat(zone===1?'#293446':'#526575');platform(0,6.3,12,7,stone);platform(0,-5.6,14,9,stone);platform(0,1.2,3,4,stone);platform(-5.5,2,3,3,stone);
  for(let i=0;i<8;i++){const z=-.4+i*.48;box(3.12,.12,.11,mat('#cfb371',{metalness:.55}),root,0,.72,z);}
  for(const side of [-1,1]){
   for(const z of [4,8,-3,-7]){torch(side*(z>0?4.9:5.9),z,zone===1?'#ffac57':'#63d8ff');}
   for(let i=0;i<3;i++){const z=-4-i*2.25;pillar(side*6.1,z,2.3+(i%2)*1.4);}
   crystal(side*6.1,6.5,zone===2?'#ba8aff':'#5ae9ef',.7);
  }
  if(zone===1){for(const side of [-1,1]){box(1.2,3.5,9.3,mat('#28303e'),root,side*7.1,1.1,-5.6);for(let i=0;i<8;i++)box(1.4,.35,.5,mat('#7c7462'),root,side*7.1,3,-9.5+i*1.2);}
   for(let i=0;i<5;i++){const gear=mesh(new THREE.TorusGeometry(.75,.15,6,12),mat('#bf9c51',{metalness:.75}),root,(i%2?-1:1)*6.45,1.6,-3-i*1.3);gear.rotation.y=Math.PI/2;decor.push({type:'gear',node:gear});}
  }else if(zone===2){const circle=mesh(new THREE.CylinderGeometry(4.6,4.8,.25,48),mat('#1a4261',{metalness:.7,roughness:.2}),root,0,.73,-5.3);
   for(let i=0;i<3;i++){const r=mesh(new THREE.TorusGeometry(3.2+i*.6,.028,6,64),new THREE.MeshBasicMaterial({color:i%2?'#e6ba70':'#65eaff'}),root,0,.9,-5.3);r.rotation.x=-Math.PI/2;}
   const orbit=mesh(new THREE.TorusGeometry(2.2,.04,6,64),new THREE.MeshBasicMaterial({color:'#a68bff',transparent:true,opacity:.8}),root,0,5,-5.3);orbit.rotation.x=.7;decor.push({type:'vortex',node:orbit});glow(root,'#a16dff',9,0,4,-5.3);
  }else{
   for(let i=0;i<7;i++){const side=i%2?-1:1;const x=side*(13+rand()*13),z=-8-rand()*21;const rock=mesh(new THREE.DodecahedronGeometry(2+rand()*2),mat('#23374e'),root,x,-2,z);rock.scale.y=.65;pillar(x,z,2+rand()*3);}
  }
  createPortal();createChest();
  heroes.forEach((hero,i)=>actor('hero',i,hero.art,hero.name,safePosition(toWorld(state.heroes[i].pos)),hero.color,2.05));
  state.enemies.forEach((enemy,i)=>{const p=zone===0?[[-3.7,-4.8],[0,-6.2],[3.7,-4.8]][i]:[0,-5.2];actor('enemy',i,zones[zone].art,enemy.name,new THREE.Vector3(p[0],.75,p[1]),'#f5a074',zone===0?2:3.9);});
  barrier=mesh(new THREE.SphereGeometry(3,24,16),new THREE.MeshBasicMaterial({color:'#68c4ff',wireframe:true,transparent:true,opacity:.18}),root,0,2,-5.3);barrier.visible=false;
  waterMaterial.uniforms.uColor.value.set(zone===0?'#16445b':zone===1?'#101526':'#102b50');motesMesh.material.color.set(zone===2?'#bd94ff':zone===1?'#ffc876':'#94ffff');
  resetCamera();
 }
 function update(nextState){state=nextState;if(zone!==state.zone)build(state.zone);
  for(const a of actors){const data=a.kind==='hero'?state.heroes[a.index]:state.enemies[a.index];a.hp=data.hp;a.max=a.kind==='hero'?heroes[a.index].hp:data.max;a.dead=a.hp<=0;
   if(a.kind==='hero'){a.target.copy(safePosition(toWorld(data.pos)));a.ring.material.opacity=state.selected===a.index?1:.25;a.ring.scale.setScalar(state.selected===a.index?1.25:1);a.prison.visible=data.prison;}
   else{a.ring.material.opacity=state.target===a.index?1:.25;}
   a.label.classList.toggle('selected',a.kind==='hero'?state.selected===a.index:state.target===a.index);a.label.classList.toggle('dead',a.dead);a.label.querySelector('b').style.width=`${a.hp/a.max*100}%`;a.label.title=`${a.hp}/${a.max} PV`;
   a.sprite.material.opacity=a.dead?.22:1;a.sprite.material.color.set(a.dead?'#6b7693':'#ffffff');
  }
  barrier.visible=state.barrier;const opened=Array.isArray(state.treasures)&&state.treasures.includes(zone);chest.userData.lid.rotation.x=opened?-1:0;chest.userData.glow.material.opacity=opened?.2:.7;
  document.querySelector('#world-chest').classList.toggle('claimed',opened);document.querySelector('#world-portal small').textContent=state.phase==='cleared'?'Siguiente capítulo':state.phase==='victory'?'Código restaurado':'Portal ancestral';
 }
 function resetCamera(){desiredTheta=.32;desiredPhi=.85;desiredDistance=30;desiredFocus.set(0,1,-.8);}
 function view(mode){if(mode==='top'){desiredTheta=0;desiredPhi=.28;desiredDistance=32;desiredFocus.set(0,0,0);}else if(mode==='hero'){const a=actors.find(a=>a.kind==='hero'&&a.index===state.selected);if(a){desiredFocus.copy(a.target);desiredDistance=17;desiredPhi=.98;}}else resetCamera();}
 function project(position){const p=position.clone().project(camera);return {x:(p.x+1)*host.clientWidth/2,y:(1-p.y)*host.clientHeight/2,visible:p.z<1&&p.z>0&&Math.abs(p.x)<1.15&&Math.abs(p.y)<1.2};}
 function labelAt(text,position,color='#fff',life=1.6){const el=document.createElement('div');el.className='combat-float';el.textContent=text;el.style.color=color;labels.append(el);floating.push({element:el,position:position.clone(),age:0,life});}
 function burst(position,color,count=22){const g=new THREE.Group();root.add(g);g.position.copy(position);const particles=[];for(let i=0;i<count;i++){const m=mesh(new THREE.OctahedronGeometry(.06+rand()*.07),new THREE.MeshBasicMaterial({color,transparent:true}),g,0,0,0);particles.push({node:m,velocity:new THREE.Vector3((rand()-.5)*5,1+rand()*4,(rand()-.5)*5)});}effects.push({type:'burst',node:g,particles,age:0,life:1.2});}
 function wave(position,color,radius=2){const r=mesh(new THREE.TorusGeometry(.3,.045,6,48),new THREE.MeshBasicMaterial({color,transparent:true}),root,position.x,.9,position.z);r.rotation.x=-Math.PI/2;effects.push({type:'wave',node:r,age:0,life:.8,radius});}
 function bolt(from,to,color,delay=0){const ball=mesh(new THREE.SphereGeometry(.16,10,8),new THREE.MeshBasicMaterial({color}),root,from.x,from.y,from.z);glow(ball,color,1.6,0,0,0);effects.push({type:'bolt',node:ball,from:from.clone(),to:to.clone(),age:-delay,life:.55});}
 function react(c,result,before,after){
  const hero=actors.find(a=>a.kind==='hero'&&a.index===c.hero),enemy=actors.find(a=>a.kind==='enemy'&&a.index===(c.target??state.target));
  if(c.kind==='action'&&hero){const type=c.action[2];
   if(result==='wrong'){labelAt('FALLO',hero.group.position.clone().add(new THREE.Vector3(0,3,0)),'#ffada1');wave(hero.group.position,'#ff7c8a',1);}
   else if(['attack','area','stun','distract'].includes(type)){
    const targets=type==='area'?actors.filter(a=>a.kind==='enemy'):enemy?[enemy]:[];
    for(const target of targets){const from=hero.group.position.clone().add(new THREE.Vector3(0,1.7,0)),to=target.group.position.clone().add(new THREE.Vector3(0,1.6,0));
     if(c.hero===0||c.hero===4)hero.lunging={from:hero.group.position.clone(),to:target.group.position.clone(),age:0};
     else bolt(from,to,c.hero===1?'#b08aff':c.hero===3?'#7ef2ff':'#ffe5a2');
     wave(target.group.position,c.hero===1?'#b08aff':'#ffe3a1',2);burst(to,c.hero===1?'#b78eff':'#fff0a6');target.flash=.8;cameraShake=.13;
    }
   }else{const target=type==='heal'?actors.find(a=>a.kind==='hero'&&a.index===before.ally):hero;if(target){wave(target.group.position,type==='heal'?'#92ffc4':'#78dfff',3);burst(target.group.position.clone().add(new THREE.Vector3(0,1,0)),type==='heal'?'#a8ffd4':'#81dbff',30);}}
  }else if(c.kind==='defense'){const target=actors.find(a=>a.kind==='hero'&&a.index===c.hero),source=actors.find(a=>a.kind==='enemy'&&!a.dead);if(target){if(result==='correct'){wave(target.group.position,'#8bffff',2);labelAt('BLOQUEADO',target.group.position.clone().add(new THREE.Vector3(0,2.7,0)),'#9effeb');}else if(source){bolt(source.group.position.clone().add(new THREE.Vector3(0,2,0)),target.group.position.clone().add(new THREE.Vector3(0,1.5,0)),'#ff737d');target.flash=.8;cameraShake=.22;}}}
  else{const at=c.kind==='treasure'?new THREE.Vector3(-5.8,1.8,2.6):new THREE.Vector3(0,2,-8);wave(at,result==='correct'?'#79fff1':'#ff8c8c',5);burst(at,result==='correct'?'#ffe5a0':'#ff7e88',35);}
  for(const a of actors){const old=a.kind==='hero'?before.heroes[a.index]?.hp:before.enemies[a.index]?.hp,now=a.kind==='hero'?after.heroes[a.index]?.hp:after.enemies[a.index]?.hp;if(typeof old==='number'&&typeof now==='number'&&now!==old){labelAt(now>old?`+${now-old}`:`−${old-now}`,a.group.position.clone().add(new THREE.Vector3(0,a.scale+.5,0)),now>old?'#9bffd3':'#ffe2b1');if(now<old)a.flash=.7;}}
 }
 function celebrate(){for(let i=0;i<4;i++)burst(new THREE.Vector3((rand()-.5)*9,2+rand()*5,-4+rand()*8),i%2?'#85ffff':'#ffe0a1',35);cameraShake=.08;}
 const diceGroup=new THREE.Group();scene.add(diceGroup);diceGroup.visible=false;
 const diceGeometry=new THREE.IcosahedronGeometry(.85,0),uvs=[];diceGeometry.clearGroups();const diceMaterials=[];
 for(let i=0;i<20;i++){const c=document.createElement('canvas');c.width=c.height=128;const g=c.getContext('2d');g.fillStyle='#172541';g.fillRect(0,0,128,128);g.strokeStyle='#e9c779';g.lineWidth=5;g.beginPath();g.moveTo(6,6);g.lineTo(122,6);g.lineTo(64,122);g.closePath();g.stroke();g.fillStyle='#fff2c6';g.font='bold 43px Georgia';g.textAlign='center';g.fillText(String(i+1),64,64);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;diceMaterials.push(new THREE.MeshStandardMaterial({map:t,metalness:.3,roughness:.3}));diceGeometry.addGroup(i*3,3,i);uvs.push(0,0,1,0,.5,1);}
 diceGeometry.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));const diceMesh=mesh(diceGeometry,diceMaterials,diceGroup,0,0,0);
 const wire=new THREE.LineSegments(new THREE.EdgesGeometry(diceGeometry),new THREE.LineBasicMaterial({color:'#ffe3a8'}));diceGroup.add(wire);glow(diceGroup,'#6aaeff',3,0,0,0);
 function rollDice(value){if(rolling)return Promise.resolve();diceGroup.visible=true;diceGroup.position.copy(focus).add(new THREE.Vector3(0,4,2));diceMesh.quaternion.identity();wire.quaternion.identity();const normal=new THREE.Vector3().fromBufferAttribute(diceGeometry.getAttribute('normal'),(value-1)*3).normalize();const desired=new THREE.Quaternion().setFromUnitVectors(normal,camera.position.clone().sub(diceGroup.position).normalize());return new Promise(resolve=>{rolling={age:0,life:reduced?.25:1.15,resolve,target:desired};});}
 const canvas=renderer.domElement;let pressed=null;
 canvas.addEventListener('pointerdown',e=>{if(document.querySelector('dialog[open]'))return;pressed={x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,moved:false};canvas.setPointerCapture(e.pointerId);canvas.focus({preventScroll:true});});
 canvas.addEventListener('pointermove',e=>{if(pressed){const dx=e.clientX-pressed.lastX,dy=e.clientY-pressed.lastY;if(Math.hypot(e.clientX-pressed.x,e.clientY-pressed.y)>5)pressed.moved=true;if(pressed.moved){desiredTheta-=dx*.006;desiredPhi=THREE.MathUtils.clamp(desiredPhi+dy*.004,.25,1.27);}pressed.lastX=e.clientX;pressed.lastY=e.clientY;}else{const rect=canvas.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObjects(picks,false)[0];canvas.style.cursor=hit?'pointer':'grab';}});
 canvas.addEventListener('pointerup',e=>{if(!pressed)return;const moved=pressed.moved;pressed=null;if(moved||document.querySelector('dialog[open]'))return;const rect=canvas.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObjects(picks,false)[0];if(hit){const {kind,index}=hit.object.userData;if(kind==='hero')onHero(index);else if(kind==='enemy')onEnemy(index);else if(kind==='quest')onQuest();else if(kind==='treasure')onTreasure();return;}const ground=raycaster.intersectObjects(surfaces,false)[0];if(ground)onMove(fromWorld(ground.point));});
 canvas.addEventListener('pointercancel',()=>{pressed=null;});canvas.addEventListener('wheel',e=>{e.preventDefault();desiredDistance=THREE.MathUtils.clamp(desiredDistance+e.deltaY*.018,17,44);},{passive:false});
 canvas.addEventListener('keydown',e=>{if(document.querySelector('dialog[open]'))return;if(e.key.toLowerCase()==='q'){desiredTheta+=.2;e.preventDefault();return;}if(e.key.toLowerCase()==='e'){desiredTheta-=.2;e.preventDefault();return;}const directions={ArrowUp:[0,-.65],w:[0,-.65],ArrowDown:[0,.65],s:[0,.65],ArrowLeft:[-.65,0],a:[-.65,0],ArrowRight:[.65,0],d:[.65,0]};const dir=directions[e.key];if(!dir||!state?.started)return;e.preventDefault();const a=actors.find(a=>a.kind==='hero'&&a.index===state.selected),point=a.target.clone().add(new THREE.Vector3(dir[0],0,dir[1]));raycaster.set(new THREE.Vector3(point.x,10,point.z),new THREE.Vector3(0,-1,0));if(raycaster.intersectObjects(surfaces,false).length)onMove(fromWorld(point));});
 const observer=new ResizeObserver(()=>{const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();});observer.observe(host);
 function disposeEffect(e){root.remove(e.node);e.node.traverse(n=>{n.geometry?.dispose();if(n.material){for(const m of Array.isArray(n.material)?n.material:[n.material])m.dispose();}});}
 function tick(now){frame=requestAnimationFrame(tick);const dt=Math.min((now-last)/1000,.1);last=now;if(document.hidden||document.querySelector('dialog[open]'))return;time+=dt;
  if(state?.phase==='intro'&&!pressed&&!reduced)desiredTheta+=dt*.018;
  theta=THREE.MathUtils.damp(theta,desiredTheta,5,dt);phi=THREE.MathUtils.damp(phi,desiredPhi,5,dt);distance=THREE.MathUtils.damp(distance,desiredDistance,5,dt);focus.lerp(desiredFocus,1-Math.exp(-dt*4));
  const effectiveDistance=distance*(camera.aspect<1?Math.min(1.55,1/camera.aspect):1);camera.position.set(Math.sin(theta)*Math.sin(phi)*effectiveDistance,Math.cos(phi)*effectiveDistance,Math.cos(theta)*Math.sin(phi)*effectiveDistance).add(focus);
  if(cameraShake>.005&&!reduced){camera.position.x+=(rand()-.5)*cameraShake;camera.position.y+=(rand()-.5)*cameraShake;cameraShake*=.91;}camera.lookAt(focus);camera.updateMatrixWorld();
  waterMaterial.uniforms.uTime.value=time;
  for(const d of decor){if(d.type==='portal')d.node.material.uniforms.uTime.value=time;if(!reduced){if(d.type==='ring')d.node.rotation.z=time*.15;if(d.type==='gear')d.node.rotation.z=time*.16;if(d.type==='vortex'){d.node.rotation.z=time*.3;d.node.rotation.y=Math.sin(time*.2)*.4;}if(d.type==='crystal')d.node.position.y=d.baseY+Math.sin(time+d.offset)*.06;}}
  for(const t of torches){const pulse=1+Math.sin(time*9+t.offset)*.09;t.flame.scale.y=1.65*pulse;t.light.intensity=12*pulse;t.shine.material.opacity=.6+pulse*.08;}
  for(const a of actors){if(a.lunging){a.lunging.age+=dt;const progress=a.lunging.age/.8;const amount=Math.sin(Math.min(1,progress)*Math.PI)*.72;a.group.position.lerpVectors(a.lunging.from,a.lunging.to,amount);if(progress>=1)a.lunging=null;}else a.group.position.lerp(a.target,reduced?1:1-Math.exp(-dt*7));
   a.sprite.position.y=a.scale/2+.18+(reduced?0:Math.sin(time*(a.kind==='enemy'&&zone===0?3:1.6)+a.index)*.055);a.prison.rotation.y=time*.15;
   if(a.flash>0){a.flash-=dt;a.sprite.material.color.set(Math.sin(a.flash*25)>0?'#ffa68e':'#ffffff');}else a.sprite.material.color.set(a.dead?'#6b7693':'#ffffff');
   const p=project(a.group.position.clone().add(new THREE.Vector3(0,.02,0)));a.label.style.transform=`translate(${p.x}px,${p.y+13}px) translate(-50%,0)`;a.label.hidden=!p.visible;
  }
  for(const h of hotspotList){const p=project(h.position);h.element.style.transform=`translate(${THREE.MathUtils.clamp(p.x,65,host.clientWidth-65)}px,${THREE.MathUtils.clamp(p.y,90,host.clientHeight-45)}px) translate(-50%,-100%)`;h.element.hidden=!p.visible;}
  for(const f of floating){f.age+=dt;const pos=f.position.clone();pos.y+=f.age*.95;const p=project(pos);f.element.style.transform=`translate(${p.x}px,${p.y}px) translate(-50%,-50%)`;f.element.style.opacity=String(Math.max(0,1-f.age/f.life));}floating=floating.filter(f=>{if(f.age>=f.life){f.element.remove();return false;}return true;});
  for(const e of effects){e.age+=dt;if(e.age<0)continue;const p=e.age/e.life;if(e.type==='bolt'){e.node.position.lerpVectors(e.from,e.to,p);e.node.position.y+=Math.sin(p*Math.PI)*.65;if(p>=1)burst(e.to,e.node.material.color,12);}if(e.type==='wave'){e.node.scale.setScalar(1+p*e.radius*3);e.node.material.opacity=1-p;}if(e.type==='burst'){for(const part of e.particles){part.velocity.y-=dt*5;part.node.position.addScaledVector(part.velocity,dt);part.node.rotation.x+=dt*3;part.node.material.opacity=1-p;}}}effects=effects.filter(e=>{if(e.age>=e.life){disposeEffect(e);return false;}return true;});
  if(rolling){rolling.age+=dt;const p=rolling.age/rolling.life;if(p<.65){diceMesh.rotation.x+=dt*9;diceMesh.rotation.y+=dt*12;}else diceMesh.quaternion.slerp(rolling.target,Math.min(1,dt*14));wire.quaternion.copy(diceMesh.quaternion);diceGroup.position.y=focus.y+4+Math.sin(Math.min(1,p)*Math.PI)*1.2;if(p>=1){diceGroup.visible=false;const resolve=rolling.resolve;rolling=null;resolve();}}
  const positions=motesGeometry.getAttribute('position');if(!reduced){for(let i=0;i<positions.count;i++){positions.array[i*3+1]+=dt*.12;if(positions.array[i*3+1]>10)positions.array[i*3+1]=.8;}positions.needsUpdate=true;}
  renderer.render(scene,camera);
 }
 frame=requestAnimationFrame(tick);
 return {update,view,react,celebrate,rollDice,resize(){observer.disconnect();observer.observe(host);},dispose(){cancelAnimationFrame(frame);observer.disconnect();renderer.dispose();textures.forEach(t=>t.dispose());},get available(){return true;},get camera(){return {theta,phi,distance};}};
}

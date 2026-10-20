import * as T from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {regions} from './data.js';
import {load} from './engine.js';
export function createWorld(host,labels,onSite){
 let renderer;try{renderer=new T.WebGLRenderer({antialias:true,alpha:false,powerPreference:'low-power'});}catch{return {available:false,update(){},travel(){},view(){},effect(){},pause(){}};}
 host.append(renderer.domElement);renderer.domElement.setAttribute('aria-label','Mundo 3D del cuerpo. Usa el mapa para visitar sus sistemas.');
 const gl=renderer.getContext(),debug=gl.getExtension('WEBGL_debug_renderer_info'),software=debug&&/swiftshader|llvmpipe/i.test(gl.getParameter(debug.UNMASKED_RENDERER_WEBGL));
 renderer.setPixelRatio(Math.min(devicePixelRatio,software?.75:1.7));renderer.setClearColor('#e2f1ed');renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;document.body.classList.toggle('low-power',!!software);
 const scene=new T.Scene();scene.fog=new T.Fog('#e2f1ed',40,85);
 const camera=new T.PerspectiveCamera(40,1,.1,150);camera.position.set(22,26,28);
 const controls=new OrbitControls(camera,renderer.domElement);controls.target.set(0,0,0);controls.enableDamping=true;controls.minDistance=15;controls.maxDistance=55;controls.maxPolarAngle=Math.PI/2.25;controls.enablePan=false;
 scene.add(new T.HemisphereLight('#ffffff','#c58ca0',3));const sun=new T.DirectionalLight('#fff9e3',3.2);sun.position.set(-12,22,8);scene.add(sun);
 const mat=(color,roughness=.4,metalness=0)=>new T.MeshStandardMaterial({color,roughness,metalness});
 const cream=mat('#fff9eb'),white=mat('#fffdf8'),teal=mat('#57c9b4'),dark=mat('#253e4f'),gold=mat('#f7cd70',.28,.35),pink=mat('#f397ac');
 function mesh(g,m,parent,pos=[0,0,0],scale=[1,1,1]){const o=new T.Mesh(g,m);o.position.set(...pos);o.scale.set(...scale);parent.add(o);return o;}
 const sphere=new T.SphereGeometry(1,20,14),cyl=new T.CylinderGeometry(1,1,1,36),torus=new T.TorusGeometry(1,.12,8,40);
 const ball=(m,parent,pos,scale)=>mesh(sphere,m,parent,pos,scale);
 const stations=new Map(),rayTargets=[],floating=[];
 function tube(points,r,m,parent){return mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),24,r,8,false),m,parent);}
 function cross(parent,color=white){mesh(new T.BoxGeometry(.22,.7,.16),color,parent);mesh(new T.BoxGeometry(.65,.22,.16),color,parent);}
 function heart(parent,m,scale=1){const shape=new T.Shape();shape.moveTo(0,-1);shape.bezierCurveTo(-2,.2,-1.3,1.9,0,.8);shape.bezierCurveTo(1.3,1.9,2,.2,0,-1);const o=mesh(new T.ExtrudeGeometry(shape,{depth:.45,bevelEnabled:true,bevelSize:.18,bevelThickness:.18,bevelSegments:3,steps:1,curveSegments:14}),m,parent,[0,1.5,0],[scale,scale,scale]);return o;}
 function shield(parent){const s=new T.Shape();s.moveTo(0,1.4);s.lineTo(1.15,.8);s.lineTo(.9,-.7);s.lineTo(0,-1.5);s.lineTo(-.9,-.7);s.lineTo(-1.15,.8);s.closePath();return mesh(new T.ExtrudeGeometry(s,{depth:.35,bevelEnabled:true,bevelSize:.12,bevelThickness:.12,bevelSegments:2,steps:1}),teal,parent,[0,1.9,0]);}
 for(const r of regions){
  const g=new T.Group();g.position.set(r.position[0],0,r.position[1]);scene.add(g);const color=mat(r.color);
  const base=mesh(cyl,color,g,[0,-.65,0],[3.05,.55,3.05]);base.userData.site=r.id;rayTargets.push(base);mesh(cyl,cream,g,[0,-.3,0],[2.92,.2,2.92]);const rim=mesh(torus,color,g,[0,-.12,0],[2.72,2.72,2.72]);rim.rotation.x=Math.PI/2;
  // Broad translucent-looking vessel paths, made from solid softly shaded geometry.
  if(r.id!=='adaptativo'){const [x,z]=r.position;const length=Math.hypot(x,z);const a=[x*3.1/length,-.65,z*3.1/length],b=[x*(1-3.1/length),-.65,z*(1-3.1/length)];tube([a,[(a[0]+b[0])/2,-.3,(a[2]+b[2])/2],b],.62,mat('#d4e4dc'),scene);tube([[a[0],-.02,a[2]],[(a[0]+b[0])/2,.03,(a[2]+b[2])/2],[b[0],-.02,b[2]]],.09,color,scene);}
  const organ=new T.Group();g.add(organ);
  if(r.id==='respiratorio'){ball(color,organ,[-.85,1.5,0],[.75,1.35,.65]);ball(color,organ,[.85,1.5,0],[.75,1.35,.65]);tube([[0,3.05,0],[0,2,0],[-.65,1.3,.4]],.15,white,organ);tube([[0,2.1,0],[.15,1.8,0],[.65,1.3,.4]],.15,white,organ);}
  if(r.id==='circulatorio'){heart(organ,pink,1.2);tube([[-.5,2.9,0],[-.5,3.4,0],[.2,3.4,0],[.3,2.7,0]],.19,teal,organ);}
  if(r.id==='nervioso'){for(let i=0;i<16;i++){const a=i*2.399;ball(color,organ,[Math.cos(a)*(.45+(i%3)*.25),1.9+(i%4)*.24,Math.sin(a)*.65],[.55,.55,.55]);}mesh(new T.CylinderGeometry(.17,.25,1.3,12),white,organ,[0,.9,0]);}
  if(r.id==='inmunologico'){shield(organ);const badge=new T.Group();badge.position.set(0,1.9,.57);badge.scale.setScalar(1.3);cross(badge);organ.add(badge);for(const x of [-1.7,1.7]){ball(teal,organ,[x,.65,0],[.5,.5,.5]);ball(dark,organ,[x-.13,.72,.46],[.06,.09,.04]);ball(dark,organ,[x+.13,.72,.46],[.06,.09,.04]);}}
  if(r.id==='adaptativo'){const arch=mesh(new T.TorusGeometry(1.65,.28,12,48,Math.PI),gold,organ,[0,.9,0]);for(const x of [-1.65,1.65])mesh(cyl,teal,organ,[x,.45,0],[.28,.95,.28]);const gem=mesh(new T.OctahedronGeometry(.75),mat('#72d9cf',.15,.2),organ,[0,2.3,0]);floating.push(gem);}
  organ.traverse(o=>{if(o.isMesh){o.userData.site=r.id;rayTargets.push(o);}});
  const marker=mesh(new T.TorusGeometry(3.18,.06,6,48),gold,g,[0,-.15,0]);marker.rotation.x=Math.PI/2;marker.visible=false;
  const microbes=new T.Group();g.add(microbes);const protection=mesh(new T.TorusGeometry(1.9,.09,8,44),teal,g,[0,1.8,0]);protection.visible=false;
  const label=document.createElement('button');label.className='world-label';label.dataset.site=r.id;label.innerHTML=`<span>${r.icon}</span>${r.name}<small></small>`;label.onclick=()=>onSite(r.id);labels.append(label);
  stations.set(r.id,{g,organ,microbes,marker,protection,label,signature:'',baseY:0});
 }
 // Friendly cell explorer: spherical body, boots, arms, backpack and face, all real geometry.
 const avatar=new T.Group();scene.add(avatar);avatar.position.set(0,.1,2.2);
 ball(white,avatar,[0,.9,0],[.6,.72,.52]);ball(teal,avatar,[0,.92,-.48],[.45,.45,.2]);for(const x of [-1,1]){ball(teal,avatar,[x*.27,.16,.12],[.25,.16,.34]);ball(white,avatar,[x*.67,.8,0],[.17,.35,.18]);ball(dark,avatar,[x*.19,1.05,.47],[.075,.12,.05]);ball(pink,avatar,[x*.34,.82,.44],[.1,.055,.035]);}const patch=new T.Group();patch.position.set(0,.6,.48);patch.scale.setScalar(.4);cross(patch,teal);avatar.add(patch);
 // A cloud of little cells around the floating islands, batched into two draw calls.
 const decor=new T.InstancedMesh(sphere,mat('#d9b8c7'),50),deco2=new T.InstancedMesh(torus,mat('#e8a0b1'),36),dummy=new T.Object3D();
 for(let i=0;i<50;i++){const a=i*2.399,r=15+(i%7)*1.1;dummy.position.set(Math.cos(a)*r,-2.4+(i%5)*1.1,Math.sin(a)*r);dummy.scale.setScalar(.15+(i%4)*.13);dummy.updateMatrix();decor.setMatrixAt(i,dummy.matrix);}scene.add(decor);
 for(let i=0;i<36;i++){const a=i*2.399,r=16+i%6;dummy.position.set(Math.cos(a)*r,-1-i%3,Math.sin(a)*r);dummy.rotation.set(i,0,i*.7);dummy.scale.setScalar(.22+i%3*.12);dummy.updateMatrix();deco2.setMatrixAt(i,dummy.matrix);}scene.add(deco2);
 let paused=false,selected='adaptativo',destination=new T.Vector3(0,.1,2.2),last=0,flashUntil=0;
 const pointer=new T.Vector2(),ray=new T.Raycaster();let press;
 renderer.domElement.addEventListener('pointerdown',e=>press=[e.clientX,e.clientY]);renderer.domElement.addEventListener('pointerup',e=>{if(!press||Math.hypot(e.clientX-press[0],e.clientY-press[1])>7)return;const b=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-b.left)/b.width*2-1,-(e.clientY-b.top)/b.height*2+1);ray.setFromCamera(pointer,camera);const hit=ray.intersectObjects(rayTargets)[0];if(hit)onSite(hit.object.userData.site);});
 let portrait=false;function resize(){const b=host.getBoundingClientRect(),next=b.width<600;if(next!==portrait){camera.position.sub(controls.target).multiplyScalar(next?1.5:1/1.5).add(controls.target);portrait=next;}controls.maxDistance=portrait?90:55;renderer.setSize(b.width,b.height);camera.aspect=b.width/b.height;camera.updateProjectionMatrix();}new ResizeObserver(resize).observe(host);resize();
 function update(systems=[],site='adaptativo'){
  selected=site;
  for(const r of regions){const st=stations.get(r.id),sys=systems.find(s=>s.type===r.id),n=sys?load(sys):0;st.marker.visible=site===r.id;st.organ.visible=true;st.organ.scale.setScalar(r.id==='adaptativo'||sys?1:.55);st.label.classList.toggle('active',site===r.id);st.label.querySelector('small').textContent=r.id==='adaptativo'?'Punto de encuentro':!sys?'Por construir':n?`${n} nivel${n>1?'es':''} · Ayuda aquí`:sys.immune?'Inmunizado':sys.vaccine?'Vacunado':sys.memory?'Con memoria':sys.shield?'Con escudo':'Estable';
   st.protection.visible=!!(sys&&(sys.immune||sys.vaccine||sys.shield||sys.memory));st.protection.material=sys?.immune?gold:teal;
   const signature=sys?JSON.stringify(sys.illnesses):'';if(signature!==st.signature){st.signature=signature;for(const child of [...st.microbes.children])st.microbes.remove(child);let index=0;for(const illness of sys?.illnesses||[]){const m=mat(illness.type==='bacteriana'?'#a1cf73':illness.type==='fungica'?'#f2b265':'#a58ad7');for(let i=0;i<illness.level;i++){const a=(index++)*2.3,bug=new T.Group();bug.position.set(Math.cos(a)*1.9,1.1,Math.sin(a)*1.9);ball(m,bug,[0,0,0],[.4,.38,.4]);for(let j=0;j<6;j++){const b=j*Math.PI/3;ball(m,bug,[Math.cos(b)*.45,Math.sin(b)*.45,0],[.13,.13,.13]);}for(const x of [-.13,.13])ball(dark,bug,[x,.04,.36],[.055,.08,.04]);st.microbes.add(bug);}}}
  }
 }
 function travel(site){const r=regions.find(r=>r.id===site);if(!r)return;destination.set(r.position[0],.1,r.position[1]+2);}
 function view(mode){controls.target.set(0,0,0);camera.position.set(...(mode==='top'?[0,42,.1]:[22,26,28]));if(portrait)camera.position.multiplyScalar(1.5);controls.update();}
 function frame(now){requestAnimationFrame(frame);if(paused||document.hidden||now-last<(software?55:24))return;const dt=Math.min(.1,(now-last)/1000);last=now;controls.update();avatar.position.lerp(destination,Math.min(1,dt*3));avatar.position.y=.1+Math.sin(now*.004)*.08;avatar.rotation.y=Math.sin(now*.001)*.15;
  for(const o of floating){o.rotation.y=now*.0006;o.position.y=2.3+Math.sin(now*.0015)*.15;}
  for(const st of stations.values()){st.microbes.children.forEach((bug,i)=>{bug.position.y=1.1+Math.sin(now*.003+i)*.16;bug.rotation.y=now*.0004;});st.protection.rotation.y=now*.0004;st.marker.material=now<flashUntil&&st.g.userData.flash?teal:gold;const v=new T.Vector3(st.g.position.x,.4,st.g.position.z+3.4).project(camera);st.label.style.left=`${(v.x*.5+.5)*100}%`;st.label.style.top=`${(-v.y*.5+.5)*100}%`;st.label.hidden=v.z>1;}
  renderer.render(scene,camera);
 }requestAnimationFrame(frame);update();
 return {available:true,update,travel,view,pause(value){paused=value;},effect(site){flashUntil=performance.now()+1000;for(const [id,s]of stations)s.g.userData.flash=id===site;}};
}

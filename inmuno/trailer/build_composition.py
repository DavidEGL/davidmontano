from pathlib import Path
import json,html,math
import numpy as np
import soundfile as sf
root=Path(__file__).resolve().parent
timing=json.loads((root/'timing.json').read_text());total=timing['duration'];scenes=timing['scenes']
labels=['Expedición interior','Explora y escanea','Elige tu defensa','Recupera el tejido','Mapa del cuerpo']
titles=['La aventura está dentro de ti.','Acércate. Escanea.','Identifica y decide.','Devuelve el equilibrio.','Cuatro regiones. Tu misión.']
notes=['Un nanobot. Cuatro regiones. Tú tomas las decisiones.','Muévete y pulsa E junto al foco.','Elige 1, 2 o 3. Apunta y actúa.','Despeja el foco. Después mantén E para recuperar tejido.','Pulmones, circulación, neuronas y ganglios.']
parts=[];animations=[]
for i,scene in enumerate(scenes):
 start=scene['start'];picture=i
 visual=f'<img id="shot-{i}" class="game-shot" src="assets/paso-{picture}.png" alt="Captura real del juego INMUNO">'
 facts='<div class="facts"><span>Virus → Anticuerpo</span><span>Bacterias → Antibiótico</span></div>' if i==2 else ''
 parts.append(f'<section id="scene-{i}" class="scene" style="z-index:{i+1};opacity:{1 if i==0 else 0}">{visual}<div class="scene-content"><article class="instruction"><div class="step">{labels[i]}</div><h1>{titles[i]}</h1><p>{notes[i]}</p>{facts}</article></div></section>')
 if i:animations.append(f'tl.set("#scene-{i}",{{opacity:1}},{start});tl.from("#scene-{i}",{{clipPath:"circle(0% at 82% 50%)",duration:.65,ease:"power2.inOut"}},{start});')
 animations += [f'tl.from("#shot-{i}" ,{{scale:1.04,opacity:0,duration:.7,ease:"sine.out"}},{start+.12});',f'tl.from("#scene-{i} .step",{{y:15,opacity:0,duration:.5,ease:"power3.out"}},{start+.3});',f'tl.from("#scene-{i} h1",{{x:-30,opacity:0,duration:.65,ease:"back.out(1.1)"}},{start+.42});',f'tl.from("#scene-{i} p",{{y:20,opacity:0,duration:.6,ease:"sine.out"}},{start+.62});']
 if facts:animations.append(f'tl.from("#scene-{i} .facts span",{{scale:.9,opacity:0,stagger:.14,duration:.6,ease:"power2.out"}},{start+.9});')
# Captions are a distinct timed track; short phrases remain readable on a phone.
for i,scene in enumerate(scenes):
 words=scene['text'].split();groups=[words[j:j+11] for j in range(0,len(words),11)];cursor=scene['start']+.25
 weights=[len(' '.join(g)) for g in groups];weight=sum(weights)
 for j,(group,w) in enumerate(zip(groups,weights)):
  duration=scene['speech']*w/weight;cid=f'caption-{i}-{j}'
  parts.append(f'<div id="{cid}" class="caption clip" data-start="{cursor:.5f}" data-duration="{max(.2,duration-.03):.5f}" data-track-index="4">{html.escape(" ".join(group))}</div>')
  animations.append(f'tl.from("#{cid}",{{y:6,opacity:0,duration:.18,ease:"power1.out"}},{cursor+.03:.5f});');cursor+=duration
for i,scene in enumerate(scenes):parts.append(f'<audio id="voice-{i}" class="clip" data-start="{scene["start"]+.25}" data-duration="{scene["speech"]}" data-track-index="2" data-volume="1" src="assets/voz-{i}.wav"></audio>')
parts.append(f'<audio id="music" class="clip" data-start="0" data-duration="{total}" data-track-index="3" data-volume="0.17" src="assets/musica.wav"></audio>')
content='''<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=1280,height=720"><script src="assets/gsap.min.js"></script><style>
@font-face{font-family:Guia;src:url('assets/GuiaSans.ttf')}*{box-sizing:border-box}html,body{margin:0;width:1280px;height:720px;overflow:hidden;background:#172f3d;font-family:Guia,sans-serif;color:#eef5f1}#root{width:1280px;height:720px;position:relative;overflow:hidden}.scene{position:absolute;inset:0;overflow:hidden;background-color:#172f3d;clip-path:circle(150% at 82% 50%)}.game-shot{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.scene-content{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%;height:100%;padding:35px 36px 120px;gap:18px}.instruction{width:490px;padding:30px;background:#172f3ded;border:1px solid #ffffff40;border-left:6px solid #92ded2;border-radius:10px;box-shadow:0 15px 50px #172f3d50}.step{font-size:18px;font-family:Guia,sans-serif;font-weight:700;letter-spacing:0;color:#b6e9db}h1{font-size:60px;line-height:1.06;letter-spacing:-2px;font-weight:900;margin:18px 0;color:#eef5f1}p{font-size:25px;line-height:1.5;font-weight:400;color:#d7eee7;margin:0}.facts{display:flex;flex-direction:column;gap:12px;margin-top:24px}.facts span{font-size:22px;padding:12px;border-radius:12px;background:#ffffff12;color:#92ded2}.caption{position:absolute;z-index:20;bottom:22px;left:36px;max-width:850px;min-height:44px;padding:13px 18px;border-radius:12px;background:#172f3df5;color:#eef5f1;font-size:26px;line-height:1.4;font-weight:400;box-shadow:0 4px 20px #172f3d30}#scene-3 .instruction{width:500px}#scene-4 h1{color:#92ded2}
</style></head><body>'''
content+=f'<div id="root" data-composition-id="inmuno-trailer" data-start="0" data-duration="{total}" data-width="1280" data-height="720" data-fps="24">'+''.join(parts)+'</div><script>window.__timelines=window.__timelines||{};const tl=gsap.timeline({paused:true});'+''.join(animations)+'window.__timelines["inmuno-trailer"]=tl;</script></body></html>'
(root/'index.html').write_text(content)
# Gentle original music bed. No samples or downloaded music.
sr=24000;t=np.arange(int(total*sr))/sr;signal=np.zeros_like(t)
chords=[[48,52,55],[53,57,60],[55,59,62],[48,52,55]]
for bar in range(math.ceil(total/4)):
 mask=(t>=bar*4)&(t<(bar+1)*4);local=t[mask]-bar*4;env=np.minimum(1,local/.4)*np.minimum(1,(4-local)/.8)
 for note in chords[bar%4]:
  f=440*2**((note-69)/12);signal[mask]+=env*(np.sin(2*np.pi*f*local)+.18*np.sin(2*np.pi*f*2*local))*.045
signal*=np.minimum(1,t/.8)*np.minimum(1,(total-t)/1.5)
sf.write(root/'assets/musica.wav',signal,sr)
print('Composition ready:',total,'seconds, five scenes, Spanish narration and short captions.')

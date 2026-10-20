from pathlib import Path
import json,html,math
import numpy as np
import soundfile as sf
root=Path(__file__).resolve().parent
timing=json.loads((root/'timing.json').read_text());total=timing['duration'];scenes=timing['scenes']
labels=['TU CUERPO TE NECESITA','PASO 1 · LLEGA A LA MISIÓN','PASO 2 · PROTEGE LA ZONA','PASO 3 · DESCUBRE Y APRENDE','TU AVENTURA CONTINÚA']
titles=['Un pequeño héroe. Una gran misión.','Sigue las luces.','Mantén Proteger.','Responde y gana tu insignia.','Una misión cada vez.']
notes=['Recupera cuatro sistemas con la ayuda de Lumi.','Pulsa Guíame o usa las flechas y el joystick.','Tu agente apunta y elige la defensa adecuada.','Si te equivocas, tienes una pista y puedes repetir.','Pulmones, corazón, cerebro y defensas. ¡Empieza!']
parts=[];animations=[]
for i,scene in enumerate(scenes):
 start=scene['start'];picture=1 if i==0 else i
 visual=f'<img id="shot-{i}" class="game-shot" src="assets/paso-{picture}.png" alt="Captura real del juego INMUNO">'
 if i==1:
  mark=json.loads((root/'capture.json').read_text())['walk']
  visual=f'<video id="walk" class="game-shot clip" data-start="{start}" data-duration="{scene["duration"]}" data-media-start="{mark}" data-track-index="0" src="assets/partida.webm" muted playsinline></video>'
 facts='<div class="facts"><span>Virus → Anticuerpo</span><span>Bacterias → Antibiótico</span></div>' if i==2 else ''
 parts.append(f'<section id="scene-{i}" class="scene" style="z-index:{i+1};opacity:{1 if i==0 else 0}">{visual}<div class="scene-content"><article class="instruction"><div class="step">{labels[i]}</div><h1>{titles[i]}</h1><p>{notes[i]}</p>{facts}</article></div></section>')
 if i:animations.append(f'tl.set("#scene-{i}",{{opacity:1}},{start});tl.from("#scene-{i}",{{clipPath:"circle(0% at 82% 50%)",duration:.65,ease:"power2.inOut"}},{start});')
 animations += [f'tl.from("#shot-{i}" ,{{scale:1.04,opacity:0,duration:.7,ease:"sine.out"}},{start+.12});' if i!=1 else f'tl.from("#walk",{{scale:1.03,opacity:0,duration:.7,ease:"sine.out"}},{start+.15});',f'tl.from("#scene-{i} .step",{{y:15,opacity:0,duration:.5,ease:"power3.out"}},{start+.3});',f'tl.from("#scene-{i} h1",{{x:-30,opacity:0,duration:.65,ease:"back.out(1.1)"}},{start+.42});',f'tl.from("#scene-{i} p",{{y:20,opacity:0,duration:.6,ease:"sine.out"}},{start+.62});']
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
@font-face{font-family:Guia;src:url('assets/GuiaSans.ttf')}*{box-sizing:border-box}html,body{margin:0;width:1280px;height:720px;overflow:hidden;background:#12394b;font-family:Guia,sans-serif;color:#fff7e9}#root{width:1280px;height:720px;position:relative;overflow:hidden}.scene{position:absolute;inset:0;overflow:hidden;background-color:#12394b;clip-path:circle(150% at 82% 50%)}.game-shot{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.scene-content{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%;height:100%;padding:35px 36px 120px;gap:18px}.instruction{width:490px;padding:30px;background:#12394bed;border:1px solid #ffffff40;border-left:6px solid #ffd166;border-radius:22px;box-shadow:0 15px 50px #12394b50}.step{font-size:17px;font-family:'Courier New',monospace;font-weight:700;letter-spacing:1px;color:#a3efda}h1{font-size:60px;line-height:1.06;letter-spacing:-2px;font-weight:900;margin:18px 0;color:#fff7e9}p{font-size:25px;line-height:1.5;font-weight:400;color:#d7eee7;margin:0}.facts{display:flex;flex-direction:column;gap:12px;margin-top:24px}.facts span{font-size:22px;padding:12px;border-radius:12px;background:#ffffff12;color:#ffd166}.caption{position:absolute;z-index:20;bottom:22px;left:36px;max-width:850px;min-height:44px;padding:13px 18px;border-radius:12px;background:#12394bf5;color:#fff7e9;font-size:26px;line-height:1.4;font-weight:400;box-shadow:0 4px 20px #12394b30}#scene-3 .instruction{width:500px}#scene-4 h1{color:#ffd166}
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

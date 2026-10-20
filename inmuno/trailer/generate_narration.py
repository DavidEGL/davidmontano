"""Generate the Spanish local narration with the same Kokoro engine used by HyperFrames TTS.
The CLI's fixed home cache is read-only in this environment, so model files live in /workspace/.cache.
No model files are added to the repository.
"""
from pathlib import Path
import json,os,inspect
import numpy as np
import soundfile as sf
from kokoro_onnx import Kokoro
from kokoro_onnx.config import EspeakConfig
import espeakng_loader
root=Path(__file__).resolve().parent
cache=Path('/workspace/.cache/inmuno-tts')
print('Espeak config:',inspect.signature(EspeakConfig),flush=True)
config=EspeakConfig(lib_path=espeakng_loader.get_library_path(),data_path=espeakng_loader.get_data_path())
model=Kokoro(str(cache/'kokoro-v1.0.onnx'),str(cache/'voices-v1.0.bin'),espeak_config=config)
segments=[
('La aventura está dentro de ti','En Inmuno, la aventura está dentro de ti. Explora tejidos del cuerpo humano con tu nanobot. Tú decides cada acción.'),
('Explora y escanea','Muévete con las flechas o con el joystick. Arrastra para mirar. Acércate a un foco y pulsa E para escanearlo.'),
('Identifica y decide','Identifica la amenaza y elige tu defensa. Anticuerpo contra virus. Antibiótico contra bacterias. Apunta con el círculo central y pulsa para actuar.'),
('Recupera el tejido','Después de despejar el foco, vuelve al tejido y mantén E para recuperarlo. Usa el campo protector y recoge recursos si necesitas ayuda.'),
('Una ruta por el cuerpo','Completa tres focos en cada región. Viaja por los pulmones, la circulación, las neuronas y los ganglios. Abre el mapa para ver tu siguiente misión.')]

timing=[];clock=0
for i,(title,text) in enumerate(segments):
 audio,rate=model.create(text,voice='ef_dora',speed=.93,lang='es')
 duration=len(audio)/rate
 sf.write(root/'assets'/f'voz-{i}.wav',audio,rate)
 timing.append({'title':title,'text':text,'start':round(clock,3),'speech':round(duration,3),'duration':round(duration+1.2,3)})
 clock+=duration+1.2
 print(i,round(duration,2),'seconds',flush=True)
(root/'timing.json').write_text(json.dumps({'duration':round(clock,3),'scenes':timing},ensure_ascii=False,indent=2))
print('Narration ready:',clock,'seconds',flush=True)

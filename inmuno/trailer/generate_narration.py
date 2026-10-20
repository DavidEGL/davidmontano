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
('Tu cuerpo te necesita','¡Bienvenido a Inmuno! Eres un pequeño agente dentro del cuerpo. Tu misión es recuperar cuatro sistemas.'),
('Sigue las luces','Primero, pulsa Guíame. Tu agente seguirá el camino de luces hasta los pulmones. También puedes moverte con las flechas o el joystick.'),
('Mantén pulsado Proteger','Después, mantén pulsado Proteger. Lumi elegirá la defensa correcta y te ayudará a apuntar. Los anticuerpos actúan contra virus. Los antibióticos actúan contra bacterias.'),
('Aprende y gana tu insignia','Cuando la zona esté limpia, responde una pregunta corta. Si te equivocas, puedes probar otra vez. ¡Así recuperas el sistema y ganas tu insignia!'),
('Cuatro misiones. Un gran equipo.','Repite la aventura en el corazón, el cerebro y la fortaleza de las defensas. Recupera las cuatro zonas y protege el núcleo. ¡Lumi te acompañará paso a paso!')]
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

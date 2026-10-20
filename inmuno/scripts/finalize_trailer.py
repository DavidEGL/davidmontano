"""Set a clear classroom listening level after the HyperFrames render."""
from pathlib import Path
import subprocess
root=Path(__file__).resolve().parents[1]
video=root/'media/TRAILER-INMUNO.mp4'
normalized=video.with_name('TRAILER-INMUNO.normalized.mp4')
subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y','-i',str(video),'-c:v','copy','-af','loudnorm=I=-16:TP=-1.5:LRA=9','-ar','48000','-c:a','aac','-b:a','128k','-movflags','+faststart',str(normalized)],check=True)
normalized.replace(video)
print('Narración normalizada para reproducción clara en aula; vídeo conservado sin recodificar.')

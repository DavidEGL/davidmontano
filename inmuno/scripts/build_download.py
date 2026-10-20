from pathlib import Path
import base64,json,subprocess,zipfile,re
root=Path(__file__).resolve().parents[1]
subprocess.run(['node','scripts/build.mjs'],cwd=root,check=True)
assets={p.relative_to(root).as_posix():'data:image/'+('jpeg' if p.suffix=='.jpg' else 'png')+';base64,'+base64.b64encode(p.read_bytes()).decode() for p in sorted((p for p in (root/'assets').rglob('*') if p.suffix in ['.png','.jpg']))}
assert len(assets)==28
js='globalThis.__INMUNO_ASSETS__='+json.dumps(assets)+';\n'+(root/'build/game.js').read_text()
out=root/'descarga';out.mkdir(exist_ok=True)
js='globalThis.__INMUNO_OFFLINE__=true;'+js
for source,target,css in [('index.html','JUGAR-INMUNO.html','action.css'),('cartas.html','MODO-CARTAS.html','style.css')]:
 html=(root/source).read_text()
 html=re.sub(r'<link\s+rel="stylesheet"\s+href="'+re.escape(css)+r'"\s*/?>',lambda match:'<style>'+(root/css).read_text()+'</style>',html,count=1)
 html=html.replace('<script src="build/game.js" defer></script>','<script>'+js.replace('</script','<\\/script')+'</script>')
 assert 'src="build/game.js"' not in html and 'href="'+css+'"' not in html
 (out/target).write_text(html)
video=root/'media/TRAILER-INMUNO.mp4'
assert video.exists() and video.stat().st_size>100000,'Primero renderiza el tráiler.'
readme='''INMUNO · EXPEDICIÓN INTERIOR · VERSIÓN 4

Extrae todos los archivos del ZIP y abre JUGAR-INMUNO.html en Chrome, Edge o Firefox.
El juego funciona sin Internet. Necesita WebGL 2 y aceleración gráfica.

Elige nivel: 1.º–2.º, 3.º–4.º o 5.º–6.º de primaria.
Lee o escucha las tres instrucciones antes de entrar al bronquiolo.

CONTROLES
WASD o flechas: mover al nanobot. Mayúsculas: avanzar más rápido.
Ratón derecho + arrastrar: orientar la cámara. Z y C también giran la cámara.
Clic izquierdo o Espacio: actuar apuntando con el círculo central.
1 / 2 / 3: elegir Anticuerpo, Antibiótico o Fagocitosis.
E: escanear un foco cercano. Mantén E tras despejarlo para recuperar tejido.
Q: campo protector temporal. Consume energía y tiene tiempo de recarga.
M: mapa corporal. Esc: pausa, sonido, ayuda y progreso.
En pantalla táctil: joystick, área derecha para mirar y botones de acción.

TÚ TOMAS LAS DECISIONES
No hay piloto automático ni selección automática de herramienta o enemigo.
No se regenera la salud al quedarse quieto: recoge recursos o recupera tejido.
La energía del instrumental sí se recarga. Una defensa equivocada no causa daño.
El antibiótico no elimina virus; Fagocitosis requiere actuar de cerca.

Recupera tres focos por región. Completa cuatro misiones dentro del cuerpo:
bronquiolo y alvéolos; endotelio de un vaso; conexiones neuronales en orden;
y contención de hongos en un ganglio linfático.
La escala, el nanobot y las acciones son una adaptación educativa de INMUNO.
Los medicamentos solo se usan con indicación profesional.
Las cartas originales están disponibles desde Pausa. El juego físico completo
se conserva en MODO-CARTAS.html.

El progreso se guarda entre regiones. Puedes exportarlo/importarlo desde Pausa.
Música y efectos se pueden desactivar por separado.
TRAILER-INMUNO.mp4 muestra la nueva versión y sus controles.

Código y procedencia de las habilidades:
https://github.com/DavidEGL/davidmontano/tree/codex/juego-codigo-ancestral/inmuno
'''
with zipfile.ZipFile(out/'JUEGO-INMUNO.zip','w',zipfile.ZIP_DEFLATED) as z:
 for name in ['JUGAR-INMUNO.html','MODO-CARTAS.html']:z.write(out/name,name)
 z.write(video,'TRAILER-INMUNO.mp4')
 z.writestr('LEEME.txt',readme)
print('Listo: expedición interior, tráiler, modo cartas y LEEME; todo sin red.')

from pathlib import Path
import base64,json,subprocess,zipfile,re
root=Path(__file__).resolve().parents[1]
subprocess.run(['node','scripts/build.mjs'],cwd=root,check=True)
assets={p.relative_to(root).as_posix():'data:image/png;base64,'+base64.b64encode(p.read_bytes()).decode() for p in sorted((root/'assets').rglob('*.png'))}
assert len(assets)==27
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
readme='''INMUNO · MISIONES GUIADAS · VERSIÓN 3

1. Extrae el ZIP en tu computadora.
2. Abre JUGAR-INMUNO.html con Chrome, Edge o Firefox.
3. Elige nivel y pulsa Ver tráiler y jugar, o Empezar tutorial.

CÓMO JUGAR: solo dos acciones principales.
1. Pulsa GUÍAME. Tu agente seguirá las luces y activará la misión al llegar.
2. Mantén PROTEGER. El personaje apunta y elige la defensa adecuada.
3. Responde una pregunta corta y gana tu insignia. Pulsa Siguiente misión.

El tráiler incluido explica esos pasos con narración española y subtítulos.
Se abre desde Ver tráiler y jugar y se puede repetir desde Pausa > Cómo jugar.
Conserva TRAILER-INMUNO.mp4 en la misma carpeta que JUGAR-INMUNO.html.

También puedes moverte con flechas o WASD; en móvil hay joystick.
Lumi acompaña la cámara, activa escudos y recarga energía cuando hace falta.
No necesitas cambiar herramientas, controlar cámara, saltar ni construir.
P permite proteger con teclado. El botón también admite Espacio/Enter con el foco.

Recupera pulmones, corazón, cerebro y defensas. Las cuatro insignias abren el núcleo.
Tres niveles para toda primaria: 1.º–2.º, 3.º–4.º y 5.º–6.º.
Es una aventura individual local. El progreso se guarda al completar cada región.
Pausa permite exportar/importar el progreso, ver el códex o cambiar el nivel.
Música, efectos y volumen se controlan por separado desde Sonido.

Extrae TODOS los archivos del ZIP. No se necesitan programas ni Internet.
Para el videojuego de acción necesitas un navegador con WebGL 2.
El archivo MODO-CARTAS.html conserva el juego anterior por turnos.
La aventura guiada adapta INMUNO; no reproduce las rondas ni el mazo del juego físico.

Código: https://github.com/DavidEGL/davidmontano/tree/codex/juego-codigo-ancestral/inmuno
'''
with zipfile.ZipFile(out/'JUEGO-INMUNO.zip','w',zipfile.ZIP_DEFLATED) as z:
 for name in ['JUGAR-INMUNO.html','MODO-CARTAS.html']:z.write(out/name,name)
 z.write(video,'TRAILER-INMUNO.mp4')
 z.writestr('LEEME.txt',readme)
print('Listo: aventura guiada, tráiler español, modo cartas y LEEME; todo sin red.')

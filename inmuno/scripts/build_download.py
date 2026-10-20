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
readme='''INMUNO · DEFENSORES DEL CUERPO · VIDEOJUEGO 3D

1. Extrae el ZIP en tu computadora.
2. Abre JUGAR-INMUNO.html con Chrome, Edge o Firefox.
3. Elige nivel y pulsa Entrar al mundo.

CONTROLES: WASD o flechas para moverte; Mayús para correr; Espacio para saltar.
Botón derecho + arrastrar para girar la cámara. Clic mantenido para lanzar.
1: Anticuerpo (virus). 2: Antibiótico (bacterias). 3: Defensa integral (universal).
Q: escudo temporal. F: construir barrera. E: activar estación o portal.
Escape: pausa. En móvil: joystick, arrastrar a la derecha para mirar y botones táctiles.

Recorre las cuatro regiones del cuerpo. Sigue el marcador amarillo y activa cada
estación. Supera la oleada en tiempo real y responde para recuperar el sistema.
Tras las cuatro regiones, vuelve al portal central y entra al núcleo.
Si pierdes toda tu salud puedes reintentar. Se conservan las regiones recuperadas.

NIVELES: 1.º–2.º, 3.º–4.º y 5.º–6.º. Cambian ayuda al apuntar, dificultad,
número de enemigos y resistencia del núcleo. Es una partida individual local.

Incluye mundo 3D, música, efectos y cartas originales, sin red ni instalación.
Necesita WebGL 2. Sonido permite desactivar música y efectos por separado.
Pausa permite ver controles, códex, exportar/importar progreso o cambiar nivel.
La lectura en voz alta depende de las voces disponibles en tu navegador.
El guardado conserva regiones completadas; una oleada se reinicia si recargas.
MODO-CARTAS.html conserva el juego anterior por turnos y las aventuras educativas.
El modo de acción es una adaptación nueva, no las reglas del mazo de INMUNO.

Código: https://github.com/DavidEGL/davidmontano/tree/codex/juego-codigo-ancestral/inmuno
'''
with zipfile.ZipFile(out/'JUEGO-INMUNO.zip','w',zipfile.ZIP_DEFLATED) as z:
 for name in ['JUGAR-INMUNO.html','MODO-CARTAS.html']:z.write(out/name,name)
 z.writestr('LEEME.txt',readme)
print('Listo: videojuego de acción 3D y modo de cartas autónomos, sin red.')

from pathlib import Path
import base64,json,subprocess,zipfile
root=Path(__file__).resolve().parents[1]
subprocess.run(['node','scripts/build.mjs'],cwd=root,check=True)
assets={p.relative_to(root).as_posix():'data:image/png;base64,'+base64.b64encode(p.read_bytes()).decode() for p in sorted((root/'assets').rglob('*.png'))}
assert len(assets)==27
js='globalThis.__INMUNO_ASSETS__='+json.dumps(assets)+';\n'+(root/'build/game.js').read_text()
html=(root/'index.html').read_text().replace('<link rel="stylesheet" href="style.css">','<style>'+(root/'style.css').read_text()+'</style>').replace('<script src="build/game.js" defer></script>','<script>'+js.replace('</script','<\\/script')+'</script>')
assert 'src="build/game.js"' not in html and 'href="style.css"' not in html
out=root/'descarga';out.mkdir(exist_ok=True)
(out/'JUGAR-INMUNO.html').write_text(html)
readme='''INMUNO · UN MUNDO DENTRO DE TI

1. Extrae el ZIP en tu computadora.
2. Abre JUGAR-INMUNO.html con Chrome, Edge o Firefox.
3. Elige el nivel y pulsa ¡Vamos a explorar!

No requiere instalar programas ni conexión. Contiene el mundo 3D, las 23
ilustraciones originales de cartas, música y efectos.
Necesitas WebGL 2 para ver el mundo 3D. El mapa permite jugar aunque no esté disponible.

NIVELES: Exploradores (1.º–2.º), Defensores (3.º–4.º), Estrategas (5.º–6.º).
AVENTURA: elige carta, pulsa una isla, Usa aquí, responde y abre el portal final.
DUELO: contra bots o entre 2 y 6 personas en la misma pantalla. Sin juego remoto.
Arrastra para girar; rueda para acercar. El mapa permite visitar cada sistema.
Sonido: música, efectos y volumen independientes. Escuchar lee las instrucciones
si tu navegador dispone de una voz española. La música empieza con tu primer clic.
El guardado es local. Sesión permite exportar e importar una partida.

Reglas y código: https://github.com/DavidEGL/davidmontano/tree/codex/juego-codigo-ancestral/inmuno
'''
with zipfile.ZipFile(out/'JUEGO-INMUNO.zip','w',zipfile.ZIP_DEFLATED) as z:
 z.write(out/'JUGAR-INMUNO.html','JUGAR-INMUNO.html');z.writestr('LEEME.txt',readme)
print('Listo: HTML autónomo y ZIP con 27 imágenes integradas.')

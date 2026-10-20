"""Build the standalone game, including every original map and character image."""
from pathlib import Path
import base64
import json
import re
import zipfile

root = Path(__file__).resolve().parents[1]
output = root / "descarga"
output.mkdir(exist_ok=True)
assets = {
    image.relative_to(root).as_posix(): "data:image/png;base64,"
    + base64.b64encode(image.read_bytes()).decode("ascii")
    for image in sorted((root / "assets").rglob("*.png"))
}
assert len(assets) == 11, "Expected three maps and eight original character images"
modules = []
for name in ("data.js", "engine.js", "audio.js", "app.js"):
    source = (root / name).read_text()
    source = re.sub(r"^import .*?;\n", "", source, flags=re.MULTILINE)
    source = re.sub(r"\bexport (?=(?:const|function)\b)", "", source)
    modules.append(source)
javascript = "const EMBEDDED_ASSETS=" + json.dumps(assets) + ";\n" + "\n".join(modules)
assert "function assetURL(path){return path;}" in javascript
javascript = javascript.replace(
    "function assetURL(path){return path;}",
    "function assetURL(path){return EMBEDDED_ASSETS[path]||path;}",
)
html = (root / "index.html").read_text()
html = html.replace(
    '<link rel="stylesheet" href="style.css">',
    "<style>" + (root / "style.css").read_text() + "</style>",
)
html = html.replace('href="./"', 'href="#"')
html = html.replace(
    '<script type="module" src="app.js"></script>',
    "<script>\n(()=>{\n" + javascript.replace("</script", "<\\/script") + "\n})();\n</script>",
)
assert 'src="app.js"' not in html and 'href="style.css"' not in html
assert html.count("data:image/png;base64,") == 11
(output / "JUGAR-CODIGO-ANCESTRAL.html").write_text(html)
instructions = """EL DESPERTAR DEL CÓDIGO ANCESTRAL

1. Extrae este ZIP en tu computadora.
2. Abre JUGAR-CODIGO-ANCESTRAL.html con Chrome, Edge o Firefox.
3. Pulsa Comenzar aventura.

Las ocho ilustraciones originales (cinco héroes y tres enemigos), los tres
tableros, los estilos y el juego completo ya están incluidos en el HTML.
No tienes que cargar fichas ni instalar nada. Funciona sin conexión a Internet.
Música y efectos incluidos. El botón Sonido controla volumen y activación por separado.
Usa Sesión > Descargar partida para respaldar tu progreso.
Mesa de aula: una pantalla compartida, sin multijugador remoto.
"""
with zipfile.ZipFile(output / "JUEGO-CODIGO-ANCESTRAL.zip", "w", zipfile.ZIP_DEFLATED) as archive:
    archive.write(output / "JUGAR-CODIGO-ANCESTRAL.html", "JUGAR-CODIGO-ANCESTRAL.html")
    archive.writestr("LEEME.txt", instructions)
print("Standalone and ZIP ready: 3 maps, 5 heroes, 3 enemies; no external assets.")

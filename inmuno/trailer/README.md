# Tráiler explicativo de INMUNO

Composición HyperFrames de 48,603 segundos, 1280×720 a 24 fps, con cinco escenas: misión, camino de luces, Proteger, pregunta e insignia. Usa capturas reales del videojuego, una grabación de la primera ruta, narración española de Kokoro (`ef_dora`), subtítulos cortos y música original generada por síntesis.

## Fuentes y reproducción

- `DESIGN.md`: identidad visual.
- `index.html`: composición y timeline GSAP pausado, determinista.
- `assets/paso-*.png`: capturas reales.
- `assets/partida.webm`: captura de la partida con Playwright y FFmpeg.
- `capture.json`: posiciones de la grabación usadas en el montaje.
- `timing.json`: tiempos reales medidos de la narración.
- `assets/voz-*.wav`: narración española local, conservada para no necesitar un modelo al renderizar.
- `assets/musica.wav`: música original, generada por `build_composition.py`.
- `assets/GuiaSans.ttf`: DejaVu Sans; licencia en `assets/FONT-LICENSE.txt`.
- `assets/gsap.min.js`: GSAP 3.14.2, con la licencia incorporada.

Después del render, `python scripts/finalize_trailer.py` normaliza la narración a un nivel de escucha claro en aula (−16 LUFS, pico −1,5 dBTP) conservando el vídeo sin recodificar.

El MP4 de entrega está en `../media/TRAILER-INMUNO.mp4` y se incluye en el ZIP del juego. Conserva ese MP4 junto al HTML al extraer la descarga. El vídeo está narrado y subtitulado; no necesita una voz instalada en el navegador.

## Validación y render

Desde la raíz de INMUNO:

```bash
HYPERFRAMES_BROWSER_PATH=/usr/bin/chromium HYPERFRAMES_FONT_CACHE_DIR=/workspace/.cache/hyperframes/fonts npm exec --yes --cache /workspace/.npm-cache --package hyperframes@0.8.181 -- hyperframes check trailer
HYPERFRAMES_BROWSER_PATH=/usr/bin/chromium HYPERFRAMES_FONT_CACHE_DIR=/workspace/.cache/hyperframes/fonts npm exec --yes --cache /workspace/.npm-cache --package hyperframes@0.8.181 -- hyperframes render trailer --output media/TRAILER-INMUNO.mp4 --fps 24 --quality high --workers 2
```

`check` revisa lint, runtime, layout, movimiento y contraste. Las verificaciones se realizan sobre esta composición, no sobre la plantilla inicial. El entorno tiene el directorio personal de herramientas en solo lectura; se usan cachés bajo `/workspace`. Los avisos de historial/telemetría que no puede guardar el CLI no impiden validar ni renderizar.

La grabación WebM original tiene fotogramas clave espaciados; el render extrae fotogramas con FFmpeg para usar posiciones deterministas. La frecuencia de la captura depende de la GPU de software del entorno y no representa el rendimiento de un navegador con GPU física.

## Volver a generar las fuentes

`../scripts/capture-trailer.cjs` recorre la primera misión de verdad. Requiere el juego servido en 8090 y Playwright con una herramienta FFmpeg disponible. En este entorno se reutiliza el FFmpeg del sistema mediante el caché de Playwright en `/workspace/.cache/ms-playwright`.

`generate_narration.py` usa Python 3.12, `kokoro-onnx`, `soundfile` y `espeakng-loader`. Los modelos oficiales de Kokoro están en `/workspace/.cache/inmuno-tts`; no se incluyen en Git. Se usa el mismo motor local que HyperFrames TTS, con caché de modelos separado porque el CLI no permite escribir en el directorio personal de este entorno. `build_composition.py` usa el tiempo de cada WAV, escribe el HTML y crea el fondo musical. No se necesitan modelos ni Python para ver el MP4 ya generado.

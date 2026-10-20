# Explicación de Expedición interior

Composición HyperFrames de 46,277 segundos, 1280×720 a 24 fps. Cinco escenas con capturas reales: interior del bronquiolo, escaneo, elección y apuntado, recuperación del tejido y mapa corporal. La voz española es Kokoro `ef_dora`; incluye subtítulos cortos y música instrumental original. Las imágenes del juego son capturas estáticas con una entrada animada, no una grabación continua de movimiento.

`DESIGN.md` define paleta, tipografía y movimiento. `index.html` registra un timeline GSAP pausado y determinista. `timing.json` contiene la duración medida de cada WAV; `assets/voz-*.wav` conserva la voz para no necesitar modelos al renderizar. DejaVu Sans se conserva en `assets/GuiaSans.ttf` con su licencia. GSAP incluye su licencia en el archivo local.

Para regenerar las capturas con el juego servido en 8090:

```sh
node scripts/capture-interior.cjs
/workspace/.inmuno-media-venv/bin/python trailer/generate_narration.py
/workspace/.inmuno-media-venv/bin/python trailer/build_composition.py
npm run trailer:check
HYPERFRAMES_BROWSER_PATH=/usr/bin/chromium HYPERFRAMES_FONT_CACHE_DIR=/workspace/.cache/hyperframes/fonts npm exec --yes --cache /workspace/.npm-cache --package hyperframes@0.8.181 -- hyperframes render trailer --output media/TRAILER-INMUNO.mp4 --fps 24 --quality high --workers 2
python scripts/finalize_trailer.py
```

El capturador usa controles reales y un control de poses de prueba para encuadrar objetivos. No modifica las reglas de defensa ni simula una victoria inexistente. La generación de voz requiere los modelos oficiales de Kokoro en `/workspace/.cache/inmuno-tts`; esos modelos no se incluyen en Git. La voz se normaliza a −16 LUFS y pico −1,5 dBTP.

El MP4 final está en `../media/TRAILER-INMUNO.mp4` y se incluye en la descarga. El botón «Ver cómo se juega» abre el vídeo con controles nativos y permite volver sin reproducirlo entero. También está en Pausa. Mantén el MP4 junto a JUGAR-INMUNO.html al extraer el ZIP. La reproducción no depende de voces del navegador.

La grabación `assets/partida.webm` y `capture.json` pertenecen a la versión anterior; la composición actual no los utiliza.

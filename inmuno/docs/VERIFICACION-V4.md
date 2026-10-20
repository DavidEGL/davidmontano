# Verificación de Expedición interior · 20 de octubre de 2026

- `npm test`: 49 pruebas correctas. 14 de la nueva simulación anatómica, incluidas campañas completas en los tres niveles; 35 conservan los motores anteriores y las reglas por cartas.
- `npm run test:browser`: campaña de cuatro regiones completada mediante acciones de escaneo, selección, apuntado y recuperación; movimiento real con teclado; guardado entre regiones; disposición móvil a 390×844; sin errores JavaScript.
- `npm run test:media`: HTML autónomo exacto servido mediante un origen interceptado; toda la red real bloqueada. Textura y cartas embebidas cargan, selección manual permanece, vídeo MP4 reproduce y controles de música, efectos y volumen funcionan.
- `npm run trailer:check`: cero errores de lint, ejecución, disposición y movimiento; 22/22 comprobaciones de texto pasan contraste WCAG AA.
- MP4: H.264 y AAC, 1280×720, 24 fps, 46,3 segundos. Narración normalizada para reproducción clara.
- ZIP: comprobación de CRC sin errores; contiene JUGAR-INMUNO.html, MODO-CARTAS.html, TRAILER-INMUNO.mp4 y LEEME.txt.

Las pruebas de campaña en navegador usan un control de poses disponible solo con `?qa=1` para visitar objetivos sin largos desplazamientos sobre la GPU de software. La simulación de defensas, daño, energía y reparación es la misma que usa el juego. Los tests no equivalen a una sesión de evaluación de dificultad y diversión con alumnado.

El Chromium administrado del entorno restringe navegación `file://`. Por ello se verifican los bytes exactos del HTML descargable en una ruta sintética que intercepta las solicitudes y bloquea Internet. WebGL sigue dependiendo de soporte y aceleración del navegador del usuario.

Los modelos son geometría procedural y la textura epitelial es generada, no un escaneo anatómico. Las capturas muestran la implementación real. No se ha medido rendimiento en una muestra de dispositivos del alumnado ni realizado una revisión clínica.

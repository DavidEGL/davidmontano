# El despertar del código ancestral · Aventura 3D

Juego cooperativo de matemáticas para 1º de secundaria. El profesor dirige una pantalla compartida; cinco equipos controlan al Guerrero, Mago, Clérigo, Arquero y Ladrón.

## Probar el juego

Descarga `descarga/JUEGO-CODIGO-ANCESTRAL.zip`, extrae sus dos archivos y abre `JUGAR-CODIGO-ANCESTRAL.html` con Chrome, Edge o Firefox. El HTML incluye Three.js, el mundo, las ilustraciones, los tableros y el audio: no necesita Internet ni servidor. El navegador necesita WebGL 2 para mostrar la escena 3D. Si WebGL no está disponible se conserva una vista de tablero con las reglas y las acciones.

El escenario utiliza geometría 3D real. Los personajes mantienen las ilustraciones originales de los PDF, orientadas hacia la cámara dentro del mundo; no son modelos de personajes con un esqueleto articulado.

## Controles e interacción

- Arrastrar: girar la cámara. Rueda: acercar o alejar.
- Botones de cámara: vista general, táctica desde arriba, acercamiento al héroe y modo cinematográfico.
- Pulsar un héroe o su retrato: seleccionarlo. Pulsar un enemigo: elegir el objetivo.
- Pulsar el suelo: mover al héroe por las plataformas y los puentes. Con el escenario enfocado, WASD o las flechas también permiten moverlo; Q/E giran la cámara.
- Cofre: resuelve una runa Normal y gana una pista. Una recompensa por zona; no consume una acción de combate. Un fallo o parcial cuesta 1 PV.
- Portal: activa el acertijo del capítulo o cruza a la siguiente zona cuando hayas derrotado a sus enemigos.
- En la primera zona, selecciona las dos gemas equivalentes para activar el encuentro. En las otras zonas, introduce la respuesta de la runa. El profesor también conserva la evaluación manual.
- Teclas 1/2/3: elegir habilidad. Espacio: tirar el dado cuando el héroe pueda actuar.
- Sonido: controles independientes de música y efectos, volumen y silencio total. El audio se inicia con una interacción y se pausa al ocultar la pestaña.

El movimiento es exploratorio y no consume acciones ni cambia el alcance de las habilidades. La guía no especifica reglas tácticas de distancias o colisiones entre personajes. Las plataformas limitan el movimiento para que los héroes no caminen sobre el agua.

## Combate y campaña

1. Pulsa **Comenzar aventura** y asigna un nombre a cada uno de los cinco equipos.
2. Activa la cerradura de la zona.
3. Selecciona héroe, habilidad y enemigo; para sanar, selecciona un aliado.
4. El d20 animado utiliza la misma tirada que determina el reto matemático. El profesor evalúa resultado y procedimiento como Correcto, Parcial o Incorrecto.
5. Después de tres héroes diferentes, o de todos los disponibles si son menos, el profesor elige un ataque enemigo. La defensa requiere un ejercicio Normal.
6. Derrota los tres enjambres de 10 PV, al Guardián de 30 PV y al Cronomante de 60 PV. Al finalizar, imprime el reconocimiento.

Los ataques tienen proyectiles o desplazamientos, impactos, partículas y números de daño; la curación y la defensa tienen sus propios efectos. La siguiente clase disponible se selecciona automáticamente después de una acción, conservando la posibilidad de elegir otro héroe.

## Guardado

Se guarda automáticamente en `localStorage`. **Sesión** permite cambiar nombres, deshacer la última resolución, exportar/restaurar una partida JSON y comenzar de nuevo con confirmación. Las partidas anteriores siguen siendo compatibles. Las preferencias de sonido se guardan por separado. No hay cuentas, sincronización de equipos ni multijugador remoto. Evita escribir datos personales de alumnos en los nombres de equipos.

## Material original y decisiones de adaptación

- Las cinco clases mantienen los PV, acciones, pasivas y límites descritos en la guía.
- Las ocho ilustraciones originales se extrajeron de los PDF de personajes y sesión, incluyendo sus máscaras de transparencia. No hay que cargarlas. `assets/fichas/origen.json` registra la procedencia y la huella SHA-256 de los PDF.
- Los tres tableros originales están disponibles en **Consultar tablero original**; el nuevo mundo 3D interpreta sus ambientes. Los PNG se extrajeron de `TABLERO 1.pdf`, `TABLEROS  2.pdf` y `TABLERO FINAL.pdf`.
- Los tres acertijos y el banco de 15 filas × 6 dificultades (90 retos) proceden de la guía. Se normalizó la notación de fracciones y se calcularon las soluciones para esta versión. El profesor puede reconocer respuestas equivalentes y errores parciales.
- El PDF completo de cartas superaba el límite de transferencia de 32 MB. Las ilustraciones de los mismos personajes estaban disponibles en los otros PDF y se recuperaron de ellos.

Reglas no especificadas completamente en el material: parcial ofensivo cuesta 1 PV y aplica mitad de daño o cura, redondeada hacia abajo (mínimo 1); las utilidades requieren acierto completo. Parcial defensivo cuesta 1 PV, excepto al Guerrero. Crítico duplica daño y curación. Los enjambres comparten un ataque por turno. Aturdimiento impide actuar una ronda y Purificar puede eliminarlo. Romper barreras y liberar prisioneros no consume una acción. La prisión dispone de un minuto por intento y se puede volver a intentar. Huir reinicia a los enemigos sin restaurar PV. La cerradura del Ladrón ofrece una orientación técnica. La curación puede reactivar a héroes con 0 PV.

Los cofres y las superficies transitables son añadidos de esta adaptación interactiva.

## Música y efectos

La banda sonora original se sintetiza mediante Web Audio: progresión en re menor, cuerdas y metales sintetizados, arpegios, bajo y percusión a 88 BPM. No utiliza servicios externos. Efectos de dado, acierto, impacto, daño, curación, enemigo, victoria y derrota. El control **Sonido** permite activar música y efectos de forma independiente, ajustar volumen y silenciar todo.

## Desarrollo

El paquete ya incluye `build/game.js`, por lo que se puede servir sin instalar dependencias:

```sh
npm start
```

Esto inicia el servidor de Python en el puerto 8080 desde esta carpeta. Para modificar y reconstruir el código se necesita Node.js y las dependencias fijadas en el lockfile:

```sh
npm ci
npm run build
npm run build:download
```

`build` empaqueta Three.js y el juego con esbuild. `build:download` también reconstruye el HTML autónomo y el ZIP con las 11 imágenes incorporadas. No se requieren claves ni servicios de backend.

Archivos principales: `world.js` (escenario, cámara, selección y efectos), `engine.js` (reglas), `data.js` (material y ejercicios), `app.js` (interfaz y profesor), `audio.js` (música), `style.css` (interfaz) y `scripts/` (paquetes).

## Pruebas

```sh
npm test
```

19 pruebas del motor: rangos del dado, ataques, críticos, curación, límites, escudos, estados, turnos, progresión, victoria, derrota y validación de partidas.

Las pruebas de navegador requieren Playwright y Chromium, externos a las dependencias necesarias para jugar:

```sh
npm run test:world
npm run test:browser
npm run test:media
```

`test:world` recorre movimiento por el suelo 3D, cámara, cofre, gemas, dado, ataque de área y vista móvil. `test:browser` completa las tres zonas hasta la victoria. `test:media` verifica carga de ilustraciones, señal de música/efectos, silencio, preferencias y diseño móvil. Se puede indicar un Playwright externo mediante `PLAYWRIGHT_MODULE`, un navegador mediante `CHROMIUM_PATH` y otra dirección mediante `GAME_URL`. Las campañas automatizadas usan dados controlados y movimiento reducido para ser repetibles; la prueba del mundo comprueba las animaciones con su duración normal.

El juego nuevo no depende del paquete incompleto de Epic Boost que estaba previamente en el repositorio.

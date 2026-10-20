# El despertar del código ancestral

Juego web cooperativo de matemáticas para 1º de secundaria, basado en los materiales compartidos. Mesa de aula para un profesor y cinco equipos, en una pantalla compartida.

## Ejecutar

Desde `/workspace/davidmontano/ancestral`:

```sh
npm start
```

Sirve la aplicación en el puerto 8080 con Python. No requiere instalar paquetes, compilar, claves ni servicios externos. También se puede ejecutar directamente:

```sh
python -m http.server 8080 --bind 0.0.0.0
```

Publica el contenido de esta carpeta en cualquier alojamiento estático HTTPS para que sea accesible en Internet. No se ha desplegado en un alojamiento público.

## Jugar

1. Pulsa **Comenzar aventura** y asigna nombres a los cinco equipos.
2. Resuelve la cerradura de cada zona; el profesor califica la respuesta.
3. Selecciona héroe, habilidad y enemigo. Para sanar, selecciona un aliado.
4. Tira el dado, resuelve el reto y califica. La solución tiene una confirmación previa para evitar revelarla accidentalmente a la clase.
5. Después de tres héroes distintos, el profesor selecciona un ataque enemigo. Resuelve la defensa y continúa la siguiente ronda.
6. Derrota a todos los enemigos para abrir la siguiente zona. Al vencer al Cronomante, imprime el reconocimiento.

El progreso se guarda en `localStorage`. **Sesión** permite editar equipos, deshacer la última resolución, descargar/restaurar partidas y comenzar de nuevo con confirmación. No hay cuentas, sincronización entre dispositivos ni multijugador remoto. Las copias JSON permiten trasladar partidas. El archivo descargado incluye nombres de equipos y progreso; no recoge datos de alumnos salvo lo que escriba el profesor.

Las fichas pueden moverse libremente pulsando sobre el tablero. El movimiento es visual: la guía no especifica reglas por casillas. La ampliación del tablero conserva las posiciones relativas de las fichas respecto a la vista; no implementa rutas ni colisiones.

## Contenido y adaptación

- Cinco clases con los PV, acciones, pasivas y límites indicados en las guías.
- Tres mapas originales extraídos de `TABLERO 1.pdf`, `TABLEROS  2.pdf` y `TABLERO FINAL.pdf`.
- Tres acertijos de progreso, tres enjambres de 10 PV, el Guardián de 30 PV y el Cronomante de 60 PV.
- Banco de 15 filas × 6 dificultades (90 ejercicios) transcrito de la guía. Las fracciones extraídas por OCR se normalizaron; las soluciones se calcularon para la versión web. El profesor puede valorar respuestas equivalentes y razonamientos, ya que la corrección es manual.
- Retratos vectoriales propios inspirados en los héroes robóticos de las referencias. **Sesión → Cargar hoja de fichas** permite incorporar la imagen original de 4 columnas × 2 filas (hasta 2 MB): clérigo, mago, ladrón, guerrero / murciélago, guardián, Cronomante, arquero. Se conserva en ese navegador; el recorte se realiza visualmente mediante CSS. Actualmente esta hoja personaliza los cinco héroes; los enemigos usan símbolos por defecto.
- El PDF de cartas para imprimir no se pudo descargar porque excede el límite de transferencia de 32 MB. Las imágenes compartidas se usaron como referencia visual y de reglas, pero no están incluidas como archivos originales en el repositorio.

Decisiones donde el material no precisa un algoritmo: parcial ofensivo cuesta 1 PV y aplica mitad del daño o cura, redondeada hacia abajo (mínimo 1); utilidades requieren acierto completo. Parcial defensivo cuesta 1 PV, salvo al Guerrero. El crítico duplica daño y sanación. Los tres enjambres comparten un ataque por turno enemigo. Se juega con tres héroes distintos por ronda, o todos los disponibles si son menos. Aturdimiento impide actuar durante una ronda; Purificar puede eliminarlo. Romper barreras y liberar prisioneros no consumen acción de héroe. Un intento de prisión dispone de un minuto; puede repetirse. Huir con ventaja reinicia el encuentro sin recuperar PV. La cerradura facilitada del Ladrón añade una orientación técnica. La sanación puede reactivar a un héroe con 0 PV. El detalle de reglas está también en **Cómo jugar**.

## Verificación

```sh
npm test
```

Pruebas de motor: dificultad inversa, ataques, críticos, sanación, límites, escudos, estados, turnos, progresión, victoria, derrota y validación de partidas.

Se comprobó además con Chromium: inicio, acertijo, resultados correcto/parcial/incorrecto, defensa enemiga, cambio de ronda, guardado al recargar, edición de equipos, diseño móvil sin desbordamiento y ayuda. También se recorrieron las tres zonas hasta la victoria y el reconocimiento final: 28 acciones en 9 rondas, con dados controlados para que la prueba sea repetible, sin errores de JavaScript.

`npm run test:browser` reproduce el recorrido completo contra un servidor ya iniciado. Esta comprobación opcional requiere Playwright y Chromium. Si están instalados fuera del proyecto, indica sus rutas mediante `PLAYWRIGHT_MODULE` y `CHROMIUM_PATH`. `GAME_URL` permite apuntar a otro servidor. Estas herramientas no son dependencias para jugar.

Los navegadores cargan módulos ES; sirve la carpeta por HTTP, no abras `index.html` con `file://`.

## Archivos

- `data.js`: personajes, escenarios y banco matemático.
- `engine.js`: reglas y validación del estado.
- `app.js`: interfaz, persistencia y control del profesor.
- `assets/`: tableros optimizados.
- `tests/`: pruebas automatizadas.

La aplicación no incorpora el paquete incompleto de Epic Boost que ya existía en el repositorio.

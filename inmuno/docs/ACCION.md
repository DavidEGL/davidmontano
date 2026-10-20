# INMUNO: Defensores del cuerpo · modo de acción

Versión 2: el punto de entrada principal es un videojuego 3D en tercera persona, con movimiento continuo, cámara tras el hombro, salto y acción en tiempo real. Se conserva el modo anterior en `cartas.html` / `MODO-CARTAS.html`.

## Partida

1. Elige la dificultad de primaria. Sigue el marcador hasta el Valle de los Pulmones.
2. Acércate a la estación y actívala. Neutraliza la oleada, esquiva ataques y recoge energía.
3. Responde a la pregunta de descubrimiento para recuperar el sistema. Los errores permiten repetir.
4. Recupera Circulatorio, Nervioso e Inmunológico. El mapa señala las regiones y los enemigos activos.
5. Vuelve al portal central y entra al núcleo. Supera la anomalía final para completar la expedición.

No hay límite de tiempo ni eliminación permanente. Perder la salud permite reintentar la región actual. Se conserva cada región completada; al recargar se reinicia una oleada que estuviera en curso. Las preguntas pausan la acción. Música y efectos tienen controles independientes.

## Controles

| Acción | Teclado y ratón | Pantalla táctil |
|---|---|---|
| Mover | WASD o flechas | Joystick izquierdo |
| Correr | Mayús + dirección | Movimiento normal |
| Saltar | Espacio | ↟ |
| Girar cámara | Botón derecho + arrastrar; captura opcional desde Controles | Arrastrar en la mitad derecha |
| Lanzar herramienta | Mantener clic izquierdo | Mantener ◎ |
| Cambiar herramienta | 1, 2, 3 o botones del inventario | Botones del inventario |
| Escudo temporal | Q | ◈ |
| Construir barrera | F | ▥ |
| Activar estación / portal | E o botón en pantalla | Botón en pantalla |
| Pausa | Escape o Ⅱ | Ⅱ |

El escudo dura 3,5 segundos y tarda 9 en recargar desde su activación. La barrera dura 12 segundos, se puede construir cada 10 y detiene microbios y proyectiles. Las rampas permiten subir al puente elevado; los órganos y los contenedores tienen colisión con el personaje. La munición es ilimitada. Hay asistencia de apuntado dentro de un cono frontal; no se fijan objetivos que queden detrás del personaje.

## Niveles y herramientas

| Nivel | Oleada por región | Resistencia por microbio | Núcleo | Preguntas |
|---|---:|---:|---:|---|
| Exploradores, 1.º–2.º | 4 | 1 impacto | 14 impactos + 2 acompañantes | 2 respuestas |
| Defensores, 3.º–4.º | 6 | 2 impactos | 18 impactos + 3 acompañantes | 3 respuestas |
| Estrategas, 5.º–6.º | 8 | 2 impactos; enemigos más rápidos | 22 impactos + 4 acompañantes | 3 respuestas |

Anticuerpo neutraliza virus morados. Antibiótico neutraliza bacterias verdes. Defensa integral sirve para cualquier amenaza y tiene una cadencia más lenta. Los hongos y las amenazas severas requieren Integral. Ante la anomalía del núcleo sirven las tres herramientas. Los cristales recuperan salud y suman puntos.

Se adapta el contenido del juego de mesa a habilidades de acción: aquí no hay mazo, rondas ni victoria por cuatro cartas en mesa. Las defensas son representaciones lúdicas. El hecho educativo de que los antibióticos actúan contra bacterias y no virus se mantiene. Las ilustraciones originales están incluidas en el códex y en los descubrimientos.

## Implementación y límites

`action-engine.js` controla movimiento, colisiones, salto, proyectiles, enemigos, barreras, oleadas, preguntas y progreso. `action-world.js` crea terreno, rampas, regiones, órganos, personaje articulado, enemigos y efectos con Three.js. `action-app.js` integra controles, interfaz, sonido, pausa y guardado. `app.js` selecciona el punto de entrada según el HTML.

Es una partida individual local de exploración y combate contra microbios. La referencia a juegos de tercera persona se aplica al control del personaje y la acción; no incluye battle royale, partidas online, emparejamiento ni un editor de construcción. La construcción disponible es una barrera de energía.

Las pruebas del motor completan los tres niveles usando movimiento, apuntado, disparos y escudos simulados; verifican también daño, elección de herramienta, rampas, bloqueos y reintentos. La prueba de navegador usa entradas reales de teclado y ratón para llegar a la primera región, activar la oleada, disparar y recuperar el sistema; además comprueba pausa, sonido, guardado, joystick táctil y el paquete sin acceso a red. El navegador administrado del entorno bloquea `file://`, por lo que el HTML autónomo se verifica en un origen sintético, interceptando la única navegación y bloqueando el resto de la red.

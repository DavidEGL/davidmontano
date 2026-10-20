# INMUNO · misiones guiadas (versión 3)

El objetivo de esta revisión es hacer comprensible la aventura para primaria antes de pedir destreza con teclado o ratón. La referencia de tercera persona se conserva, pero el contenido y los objetivos son de INMUNO.

## Cómo empieza

La portada ofrece tres niveles de primaria y dos entradas: **Ver tráiler y jugar** o **Empezar tutorial**. El tráiler dura unos 49 segundos, tiene narración española y subtítulos, y utiliza capturas reales del mismo juego. Al terminar se presenta la primera misión con sus tres pasos. El vídeo se puede volver a ver desde Pausa → Cómo jugar.

La pantalla enseña una misión cada vez. Hay dos acciones principales:

- **Guíame:** el personaje recorre físicamente el camino de luces hasta la estación y activa la misión al llegar. Se puede detener la guía y usar flechas, WASD o joystick. La guía evita obstáculos y las paredes del puente; no teletransporta entre regiones.
- **Mantén Proteger:** apunta automáticamente y elige Anticuerpo para virus, Antibiótico para bacterias o Defensa integral para otras amenazas. La cámara acompaña al personaje. Se pueden usar teclado o joystick mientras se protege; el botón también admite Espacio/Enter cuando tiene el foco, y P permite proteger con teclado.

Lumi activa un escudo cuando hay peligro y recarga energía si baja demasiado. Las preguntas dan pistas y admiten reintento. No hace falta manejar cámara, cambiar herramientas, construir ni saltar para completar la aventura. Los controles manuales de movimiento permanecen disponibles.

## Estructura de las misiones

| Misión | Acción en el mundo | Aprendizaje | Premio |
|---|---|---|---|
| Devuelve el aire | Sigue las luces hasta los pulmones y neutraliza virus | Los pulmones ayudan a respirar; anticuerpos contra virus | Insignia Respiratorio |
| Pon el corazón en marcha | Recupera la ciudad del corazón frente a bacterias | El corazón impulsa sangre; antibióticos contra bacterias | Insignia Circulatorio |
| Enciende las señales | Protege el bosque del sistema nervioso | El sistema nervioso coordina movimientos y respuestas | Insignia Nervioso |
| Refuerza las defensas | Recupera la fortaleza ante hongos | Las defensas reconocen amenazas; no todos los microbios son dañinos | Insignia Inmunológico |
| Protege el núcleo | Regresa al portal y cierra la anomalía | Aplicación de lo aprendido en una acción final guiada | Final de la aventura |

Cada misión tiene una presentación, una acción dentro del mundo, una pregunta y una pantalla de insignia. El botón Siguiente misión abre el siguiente objetivo. El progreso se guarda por regiones completadas; al recargar no se conserva una oleada a medias. Las cuatro regiones se completan en orden.

Exploradores, 1.º–2.º: tres microbios por zona, un impacto y dos respuestas. Defensores, 3.º–4.º: cuatro microbios por zona y dos impactos. Estrategas, 5.º–6.º: cinco microbios por zona, dos impactos y amenazas más rápidas. Los dos niveles mayores tienen tres respuestas. La guía y las ayudas están disponibles en los tres niveles.

## Aspecto visual

Personaje articulado con armadura perlada, visor, casco y mochila de soporte; microbios con siluetas diferenciadas; terreno con altura real, textura y variación de color; vegetación por instancias; cielo, nubes, colinas, luces de guía y sombras de contacto. Las tarjetas originales siguen disponibles en el códex. Los dispositivos con GPU disponen además de sombras dinámicas. El diseño está documentado en `DESIGN.md`.

## Tráiler y reproducción sin conexión

`media/TRAILER-INMUNO.mp4` es el vídeo final. La composición HyperFrames y sus fuentes están en `trailer/`. La narración española se generó localmente con Kokoro, voz `ef_dora`; no depende de las voces del navegador para reproducir el vídeo. La música de fondo del vídeo es una composición original y las imágenes son capturas del juego, no conceptos promocionales.

El ZIP incluye **JUGAR-INMUNO.html**, **TRAILER-INMUNO.mp4**, **MODO-CARTAS.html** y **LEEME.txt**. Extrae todo en la misma carpeta. El HTML de acción contiene código, estilos e ilustraciones; el vídeo se carga desde el MP4 contiguo. No hay conexión a Internet durante el juego. El modo de cartas conserva la adaptación anterior y no utiliza las ayudas del videojuego.

## Verificación

`npm test` ejecuta 35 pruebas: motor de acción, motor de cartas, rutas, selección automática de defensas y los tres recorridos guiados completos. La prueba de navegador `npm run test:browser` recorre las cuatro misiones y el núcleo con los botones Guíame y Proteger, comprueba preguntas, insignias, guardado y adaptación móvil. La comprobación del tráiler verifica metadatos, reproducción y audio. HyperFrames comprueba tiempos, movimiento, contraste y distribución antes del render.

El Chromium administrado de este entorno bloquea `file://`; el paquete autónomo se prueba con una ruta interceptada y toda la red externa bloqueada. La apertura desde el explorador de archivos requiere revisión en el navegador del usuario. La lectura opcional de preguntas dentro del juego sigue usando las voces que tenga disponibles el navegador.

Es una aventura individual local. Los antibióticos se relacionan con bacterias y los anticuerpos con virus; el resto de poderes, escudos y afinidades son mecánicas del juego, no una simulación médica.

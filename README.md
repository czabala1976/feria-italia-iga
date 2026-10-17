# Italia, ¡a la mesa!

Sitio estático para una feria gastronómica. Incluye 20 curiosidades, seis secciones, desplegables nativos y un quiz de seis preguntas con explicaciones, repaso y reinicio. HTML, CSS y JavaScript sin frameworks ni backend.

## Publicar en GitHub Pages

1. Crea un repositorio público, por ejemplo `italia-gastronomica`.
2. Descomprime el ZIP. Sube **el contenido de esta carpeta** a la raíz del repositorio: `index.html`, `styles.css`, `script.js`, `assets/`, `README.md` y `.nojekyll`. No subas el ZIP ni dejes `index.html` dentro de otra carpeta.
3. En el repositorio, abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama **main** y la carpeta **/ (root)**. Guarda.
6. Cuando GitHub termine de publicar, usa **Visit site** para confirmar la dirección. Normalmente será `https://TU-USUARIO.github.io/italia-gastronomica/`.
7. Abre esa dirección en un teléfono y prueba el quiz. Utiliza la **URL publicada real** para crear el QR de la futura infografía A4.

GitHub Pages está disponible para repositorios públicos en GitHub Free. La publicación puede tardar unos minutos.

Guía oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
Configuración de la fuente: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Vista previa

Puedes abrir `index.html` directamente en un navegador; no necesita instalación ni compilación. También puedes servir la carpeta con cualquier servidor estático. Todas las rutas de recursos son relativas, compatibles con la subcarpeta de un repositorio de GitHub Pages.

## Archivos

- `index.html`: contenido, etiquetas de hecho/costumbre/leyenda/historia y fuentes enlazadas por curiosidad.
- `styles.css`: diseño mobile-first, tamaños responsive, foco visible y movimiento reducido.
- `script.js`: preguntas, respuestas, explicaciones y lógica del quiz.
- `assets/mesa-italiana.svg`: ilustración vectorial original creada para este sitio.
- `assets/favicon.svg`: icono original.
- `.nojekyll`: indica que se sirven los archivos estáticos directamente.

## Editar

Cambia los textos en `index.html`, la paleta en las variables al inicio de `styles.css` y las seis preguntas en el arreglo `questions` de `script.js`. En cada pregunta, `correct` es el índice de la respuesta válida, empezando en cero. Mantén sincronizadas las preguntas con el contenido.

## Accesibilidad y privacidad

Idioma español, estructura semántica, salto al contenido, navegación por teclado, desplegables `<details>`, texto alternativo en la ilustración, estados del quiz con texto y color y avisos mediante `aria-live`. Las tarjetas y fuentes funcionan sin JavaScript; el quiz requiere JavaScript. Los resultados se conservan solo en memoria hasta recargar o cerrar la página. No se envían ni guardan respuestas, no se usan cookies ni servicios externos de tipografía o imágenes. Las fuentes se abren en otra pestaña.

## Criterio editorial

Son 14 curiosidades en las primeras cuatro secciones y seis paradas regionales en el viaje. Las costumbres no se presentan como reglas universales, las leyendas se identifican como relatos y la historia documentada se distingue de un origen demostrado. El casu marzu se presenta como curiosidad cultural. Fuentes revisadas en octubre de 2026: turismo oficial de Italia y Florencia, UNESCO, Treccani, Credem, Biblioteca Salaborsa, Ayuntamiento de Milán, Accademia Italiana della Cucina y publicaciones gastronómicas. La primera costumbre sobre spaghetti se marca como observación cultural, sin atribución histórica específica.

El sitio se entrega listo para publicar; no se ha subido a una cuenta de GitHub ni se ha generado todavía un QR con URL definitiva.

# Italia · FEXPO IGA 2026 - SABORES DEL MUNDO

Sitio estático del stand de Italia en FEXPO IGA 2026 - SABORES DEL MUNDO. Incluye las cinco recetas del menú de la feria, con imágenes y desplegables, además de 23 curiosidades y un quiz de seis preguntas con explicaciones, repaso y reinicio. HTML, CSS y JavaScript sin frameworks ni backend.

## Publicar en GitHub Pages

1. Crea un repositorio público, por ejemplo `italia-gastronomica`.
2. Descomprime el ZIP. Sube **el contenido de esta carpeta** a la raíz del repositorio: `index.html`, `styles.css`, `fexpo.css`, `campaign.css`, `script.js`, `assets/`, `README.md` y `.nojekyll`. No subas el ZIP ni dejes `index.html` dentro de otra carpeta.
3. En el repositorio, abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama **main** y la carpeta **/ (root)**. Guarda.
6. Cuando GitHub termine de publicar, usa **Visit site** para confirmar la dirección. Normalmente será `https://TU-USUARIO.github.io/italia-gastronomica/`.
7. Abre esa dirección en un teléfono y prueba el quiz. Utiliza la **URL publicada real** para crear el QR de la futura infografía A4.

GitHub Pages está disponible para repositorios públicos en GitHub Free. La publicación puede tardar unos minutos.

Guía oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
Configuración de la fuente: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Vista previa

Puedes abrir `index.html` directamente en un navegador; no necesita instalación ni compilación. También puedes servir la carpeta con cualquier servidor estático. Las fotografías se incluyen en `assets/photos/`, con créditos y licencias en la página y en `assets/photo-credits.json`. Todas las rutas de recursos son relativas, compatibles con la subcarpeta de un repositorio de GitHub Pages.

## Archivos

- `index.html`: contenido, etiquetas de hecho/costumbre/leyenda/historia y fuentes enlazadas por curiosidad.
- `styles.css`: estructura responsive, foco visible y movimiento reducido.
- `fexpo.css`: identidad visual FEXPO IGA 2026, logo, recetario y ajustes para celular.
- `campaign.css`: adaptación al afiche suministrado, portada con cartela blanca, formas de color y refinamiento de tarjetas.
- `assets/logo-iga.png`: logo oficial proporcionado por el grupo.
- `assets/recipes/`: imágenes ilustrativas, transcripción de recetas y registro de generación.
- `script.js`: preguntas, respuestas, explicaciones y lógica del quiz.
- `assets/mesa-italiana.svg`: ilustración vectorial original creada para este sitio.
- `assets/favicon.svg`: icono original.
- `.nojekyll`: indica que se sirven los archivos estáticos directamente.

## Editar

Cambia los textos en `index.html`, la paleta en las variables al inicio de `styles.css` y las seis preguntas en el arreglo `questions` de `script.js`. En cada pregunta, `correct` es el índice de la respuesta válida, empezando en cero. Mantén sincronizadas las preguntas con el contenido.

## Accesibilidad y privacidad

Idioma español, estructura semántica, salto al contenido, navegación por teclado, desplegables `<details>`, texto alternativo en la ilustración, estados del quiz con texto y color y avisos mediante `aria-live`. Las tarjetas y fuentes funcionan sin JavaScript; el quiz requiere JavaScript. Los resultados se conservan solo en memoria hasta recargar o cerrar la página. No se envían ni guardan respuestas, no se usan cookies ni servicios externos de tipografía o imágenes. Las fuentes se abren en otra pestaña.

## Criterio editorial

Son 17 curiosidades en las primeras cuatro secciones y seis paradas regionales en el viaje. Las costumbres no se presentan como reglas universales, las leyendas se identifican como relatos y la historia documentada se distingue de un origen demostrado. El casu marzu se presenta como curiosidad cultural. Fuentes revisadas en octubre de 2026: turismo oficial de Italia y Florencia, UNESCO, Treccani, Credem, Biblioteca Salaborsa, Ayuntamiento de Milán, Accademia Italiana della Cucina y publicaciones gastronómicas, además de Ferrero y el Museo del Pomodoro. La primera costumbre sobre spaghetti se marca como observación cultural, sin atribución histórica específica.

El sitio se entrega listo para publicar; no se ha subido a una cuenta de GitHub ni se ha generado todavía un QR con URL definitiva.


## Contraste con «curiosidades italia.docx»

Se revisaron los cinco temas del documento proporcionado. Ahora todos están cubiertos en el sitio; los textos se contrastaron con las fuentes enlazadas y se corrigieron las simplificaciones históricas.

| Tema del documento | Situación anterior | Actualización |
|---|---|---|
| Banco que acepta queso | Ya estaba | Se amplió con 40 kg de peso medio, unos 550 litros de leche y al menos 12 meses de maduración; fuentes del Consorcio. Se añadió un bloque gráfico. |
| Tomate procedente de América | Faltaba | Nueva tarjeta, con llegada a Europa en el XVI y primeras recetas impresas italianas ya a finales del XVII. Se aclara que la papa hace posibles los ñoquis de papa, no todos los ñoquis. |
| Historia de Nutella | Faltaba | Nueva tarjeta con la secuencia correcta: Giandujot 1946, Supercrema 1951, Nutella 1964. Fuente del fabricante. |
| Significado y origen disputado del tiramisù | Significado incluido | Se amplió con las reivindicaciones de Véneto y Friuli-Venecia Julia y la tradición reconocida en Friuli, sin presentar la inscripción como prueba definitiva del origen. |
| Platos italianos e italoamericanos | Carbonara incluida parcialmente | Nueva tarjeta comparativa. Las fettuccine Alfredo tienen origen romano; la versión con pollo es una adaptación. Los spaghetti con grandes albóndigas son un emblema italoamericano. Se evitaron afirmaciones universales sobre lo que Italia «no conoce». |

### Identidad de la feria

El nombre oficial «FEXPO IGA 2026 - SABORES DEL MUNDO» aparece en la franja de apertura, portada, recetario, cierre, equipo y pie de página. Se incluyen los integrantes del documento actualizado: Melany Callisaya, Dylan Revollo y Nancy Figueroa. Se utiliza el logo oficial IGA proporcionado por el grupo. El amarillo, rojo, azul y turquesa, los títulos condensados y las formas redondeadas retoman el estilo de las piezas promocionales entregadas. Las capturas de redes sociales se utilizaron como referencia visual, sin incrustar su interfaz en la web.

### Fotografías

Diez fotografías locales alusivas a pizza, tiramisù, Parmigiano Reggiano, tomates, Nutella sobre pan, cappuccino, lampredotto, casu marzu, bottarga y tortellini. Las fotos de cappuccino y tortellini aparecen dentro de sus desplegables. Se añadió una ilustración propia de pimientos. Los autores, páginas originales y licencias de cada fotografía figuran en el desplegable de créditos del sitio y en `assets/photo-credits.json`. Las fotografías ilustran alimentos y no se presentan como fotos del evento IGA. Los recortes de encuadre conservan la licencia de cada imagen.


## Recetario oficial incorporado · 20 de octubre de 2026

Las cinco preparaciones de «Recetas_oficial.docx» se transcribieron a HTML, sin modificar cantidades, temperaturas, tiempos o rendimientos indicados en el documento. Se normalizó la tilde de «ragú» en el título. Los ingredientes aparecen agrupados y los 22 pasos de preparación se consultan en desplegables que también funcionan sin JavaScript.

1. Arancinis de ragú con jamón.
2. Focaccia rellena con jamón, estilo sándwich gratinado.
3. Mini cannoli de crema pastelera de naranja.
4. Gaseosa casera de menta.
5. Tiramisú clásico.

El botón principal «Ver las recetas de la feria» y el enlace «Nuestras recetas» de la cabecera llevan al recetario, situado antes de las curiosidades. La cabecera permanece visible al desplazarse. Los accesos rápidos de cada preparación llevan a su tarjeta.

### Imágenes del menú

Son imágenes fotográficas ilustrativas generadas con la herramienta integrada `image_gen` a partir de las recetas, identificadas como tales en cada tarjeta. No son fotografías de platos servidos en el evento. El logo oficial se conserva sin alteraciones. Las fotografías anteriores de las curiosidades mantienen sus créditos y licencias.

Archivos finales guardados dentro del sitio:

- `assets/recipes/arancini.jpg`: arancinis abiertos con arroz amarillo, ragú, jamón, arvejas y mozzarella.
- `assets/recipes/focaccia.jpg`: focaccia de dos capas con jamón, tomate y mozzarella gratinada.
- `assets/recipes/cannoli.jpg`: mini cannoli con crema pastelera de naranja.
- `assets/recipes/menta.jpg`: gaseosa de menta natural, de color pálido y con burbujas.

El conjunto completo de instrucciones de generación se conserva en [image-generation.json](assets/recipes/image-generation.json). La transcripción estructurada de las recetas está en [recipes.json](assets/recipes/recipes.json). El sitio no necesita cargar estos archivos JSON para funcionar; el recetario está incluido en el HTML.

### Comprobaciones de esta versión

Revisión visual en escritorio, tableta y celular; comprobación de enlaces al recetario, desplegables con teclado, recursos locales y respuesta del quiz. No requiere servidor, base de datos ni instalación de dependencias. Se entrega como ZIP estático listo para GitHub Pages; no se ha publicado en una cuenta de GitHub.


## Quinta receta: Tiramisú Clásico

Se incorporó el tiramisú del documento actualizado, con su rendimiento de 45 porciones de aproximadamente 130 g, los cuatro grupos de ingredientes y utensilios y sus siete pasos completos. Se conservaron exactamente sus cantidades, temperaturas, tiempos y las indicaciones de conservación del recetario. Las cuatro recetas anteriores no cambiaron.

Se actualizaron el contador de portada, la introducción del menú, la descripción, el quinto acceso rápido y la lista de integrantes (Melany Callisaya, Dylan Revollo y Nancy Figueroa). La tarjeta del tiramisú incluye la fotografía `assets/photos/tiramisu.jpg`, ya presente en el sitio: Markus Mitterauer, Wikimedia Commons, CC BY-SA 2.0, con recorte de encuadre. Es una foto de referencia, no una fotografía de la preparación servida en la feria. Las cuatro imágenes generadas con IA del menú anterior se conservan.

Para actualizar una publicación existente, el ZIP de cambios contiene únicamente `index.html`, `fexpo.css`, `assets/recipes/recipes.json` y `README.md`. Sustituye estos archivos en las mismas rutas del repositorio; conserva los demás recursos. El ZIP completo también incluye todas las imágenes y archivos necesarios para una publicación nueva.


## Edición visual con el afiche · 21 de octubre de 2026

La portada utiliza directamente el afiche suministrado `IMG_2426.jpg`, guardado como `assets/feria/fexpo-iga-2026-afiche.jpg`. El archivo original se conserva sin retocar. El encuadre en la web recorta el lateral derecho mediante CSS para dejar fuera los botones de la captura social y conservar el nombre FEXPO IGA 2026, el lema y la información del afiche. Se mantienen la fecha y el lugar que aparecen en la pieza original.

Se ajustaron la portada, las cartelas, franjas, formas curvas, accesos al recetario, numeración y tarjetas a la paleta de amarillo, rojo, azul y turquesa. Los ingredientes, pasos de las cinco recetas, 23 curiosidades y lógica del quiz se conservan.

Para actualizar desde la versión de cinco recetas, el ZIP de actualización visual contiene `index.html`, `campaign.css`, `assets/feria/fexpo-iga-2026-afiche.jpg` y `README.md`. Copia los cuatro archivos en las mismas rutas del repositorio y conserva los demás archivos. También se entrega un ZIP con el sitio completo actualizado.

# IDEA — Nueva web de Mauricio Correa

> Documento rector del proyecto. Define la idea, el concepto creativo, el sistema visual y de movimiento, la estructura, el contenido y la arquitectura técnica de la nueva web.
> Fecha: 20 de octubre de 2026 · Estado: idea aprobada para iniciar la Fase 1.

---

## 1. Resumen del proyecto

**Qué es:** la web personal y portafolio de **Mauricio Correa — UI/UX Web Designer & Web Developer**. Reemplaza a la web actual (maurouix.com, marca "MauroUIX") y se construye desde cero con la nueva identidad de marca personal.

**Para qué:**
1. Mostrar el portafolio con casos reales y bien contados.
2. Explicar con claridad los servicios: diseño de interfaces web (UI/UX), desarrollo de sitios web e imagen corporativa.
3. Convertir visitas en conversaciones por WhatsApp o email.
4. Ser una prueba de lo que Mauricio sabe hacer: la web misma es la pieza más importante del portafolio.

**Para quién (hipótesis por validar):** dueños de negocio y profesionales que necesitan una web nueva o mejorar la que ya tienen, en Latinoamérica y EE. UU.

**Cómo sabremos que funciona:**
- Clics en WhatsApp / email / "Hablemos" (eventos medidos).
- Tiempo de lectura y profundidad de scroll en los casos de estudio.
- Lighthouse ≥ 90 en rendimiento, accesibilidad, buenas prácticas y SEO, incluso con todas las animaciones.

### Decisiones confirmadas

| Tema | Decisión |
|---|---|
| Marca | **Mauricio Correa** (logo M + paleta CM). Se retira "MauroUIX" como marca principal. |
| Dominio | **mauriciocorread.com**. `maurouix.com` redirige con 301, incluidas las rutas `/proyectos/*`. |
| Tipografía | **Geist** para todo el sistema + una **display condensada** solo para titulares-cartel gigantes. |
| Idiomas | **Español** (por defecto, `/`) + **Inglés** (`/en`). |
| Fotos de Mauricio | **No.** Sobre mí se resuelve con collage, tipografía y objetos surrealistas. |
| Stack | **Astro**. **Sin CMS por ahora**, preparado para integrar Strapi (u otro headless) más adelante. |

---

## 2. Concepto creativo — "Carteles en movimiento"

La web es una **edición impresa retro-futurista que cobra vida**. Cada sección es una **lámina** numerada de una revista o serie de carteles: tiene su propio fondo a sangre, titular protagonista, marcas de imprenta, coordenadas, sellos y etiquetas. Hacer scroll es **pasar páginas**: las láminas se apilan, se deslizan, se abren como portales y se imprimen frente al usuario.

**Lema de la edición:** *Inspirado en el oficio, diseñado para mañana.*

Este concepto une tres fuentes:

| Fuente | Qué aporta |
|---|---|
| **Referencias visuales** (Web Resources) | Cartel editorial retro-futurista, papel con grano, tipografía gigante condensada, collage recortado, sellos circulares, tickets y etiquetas de papel, arcos-ventana, órbitas y radares, marquees, tarjetas con datos. |
| **Manual de marca** | Constructivismo (diagonales, bloques, jerarquía contundente), surrealismo (objetos e interfaz flotando con sentido), acabado duotono con degradados suaves, luces de color y grano fino. Paleta CM. Reducir grandes superficies crema y alternar fondos gunmetal, turquesa y naranja. |
| **Web actual** | Lenguaje de "Señal / Recorrido", numeración "01 / 05", tono personal y directo, los 8 casos, las 3 capacidades, los 4 principios y el cierre "Cada diseño cuenta una historia". |

**Resultado:** una web con personalidad de cartel (cada pantalla se podría imprimir y colgar) pero con la claridad de una buena interfaz. El diseño atrae y la estructura orienta.

### Tres momentos firma (lo que la hace única)

1. **El portal M.** La M del logo funciona como ventana y máscara. En el hero contiene el collage; al hacer scroll, la cámara "atraviesa" la M y la siguiente lámina aparece dentro de ella hasta llenar la pantalla.
2. **Imprenta en vivo.** Las imágenes entran como si se imprimieran: dos capas de duotono (naranja y turquesa) llegan desregistradas, se alinean al entrar en pantalla y la imagen pasa a color. Es una referencia al oficio gráfico, no un efecto genérico.
3. **Tipografía que respira.** Los titulares-cartel usan una fuente variable con eje de ancho (`wdth`): se estiran y comprimen levemente según la velocidad del scroll y reaccionan al cursor.

---

## 3. Sistema visual

### 3.1 Paleta

| Token | Hex | Rol principal |
|---|---|---|
| `--cm-cream` | `#F8F3EA` | Superficie de papel, texto sobre gunmetal, zonas de descanso. |
| `--cm-turquoise` | `#00AEAE` | Color protagonista junto al naranja: bloques, luces, láminas a sangre. |
| `--cm-orange` | `#FF6B30` | Color protagonista: titulares-cartel, láminas a sangre, acentos, CTA. |
| `--cm-gunmetal` | `#1D2730` | Estructura, texto principal, láminas oscuras, profundidad. |
| `--cm-red` | `#EB3D40` | Alternativa puntual (estados, un detalle). No entra por defecto. |

- Combinación principal: **naranja + turquesa + crema**, con **gunmetal** como cuarto color.
- Se permiten tonos intermedios y degradados entre colores de la paleta (por ejemplo, turquesa → gunmetal, naranja → rojo suave), con luces de color y grano.
- **Ritmo de fondos:** ninguna lámina repite el fondo de la anterior. Se evitan las grandes superficies crema continuas.

### 3.2 Reglas de contraste (obligatorias)

Combinaciones medidas según WCAG:

| Texto / Fondo | Contraste | Uso permitido |
|---|---|---|
| Crema sobre gunmetal | ~13.7 : 1 | Todo tipo de texto. |
| Gunmetal sobre crema | ~13.7 : 1 | Todo tipo de texto. |
| Gunmetal sobre turquesa | ~5.5 : 1 | Todo tipo de texto. |
| Gunmetal sobre naranja | ~5.4 : 1 | Todo tipo de texto. |
| Turquesa sobre gunmetal | ~5.5 : 1 | Titulares, etiquetas, enlaces. |
| Naranja sobre gunmetal | ~5.4 : 1 | Titulares, etiquetas, enlaces. |
| Naranja sobre crema | ~2.6 : 1 | **Solo display decorativo gigante.** El mensaje también debe existir en texto accesible. |
| Crema sobre naranja / turquesa | ~2.5 : 1 | **Solo display decorativo gigante.** Nunca en texto de lectura ni botones. |

Consecuencia práctica: en láminas naranja o turquesa, el texto de lectura y los botones van en **gunmetal**. El crema sobre color solo se usa en titulares-cartel decorativos.

### 3.3 Tipografía

| Rol | Fuente | Detalle |
|---|---|---|
| Sistema (todo) | **Geist** (variable) | Regular/Medium para lectura, Bold/Black para titulares de sección, etiquetas y números. |
| Etiquetas técnicas | **Geist Mono** | Coordenadas, numeración "01 / 05", fichas técnicas, tickets. Encaja con el lenguaje de imprenta. |
| Display cartel | **Archivo** (variable, ejes `wdth` 62–125 y `wght`) | Solo titulares gigantes: nombre, títulos de casos, "HABLEMOS". Permite el efecto "tipografía que respira". *Alternativa:* Big Shoulders Display. |

- Escala fluida con `clamp()`. Los titulares-cartel van de ~18vw en móvil hasta ~22vw en escritorio, con recortes en los bordes controlados para que la palabra siga siendo legible.
- Titulares en mayúsculas para la display. Geist en mayúsculas/minúsculas normales.
- La composición tipográfica varía entre láminas: bandas diagonales, palabras escalonadas, texto en arco alrededor de sellos y titulares con objetos por delante o por detrás mediante máscaras. Siempre es **tipografía plana**: sin 3D, extrusiones ni biseles.

### 3.4 Texturas y acabados

- **Grano** fino y animado sobre toda la web (canvas o SVG `feTurbulence`, con baja opacidad). No se aplica sobre el texto.
- **Papel:** las láminas crema tienen una textura sutil de papel.
- **Duotono** naranja/turquesa o gunmetal/crema en imágenes y capturas. Pasan a color al hover o al terminar su entrada.
- **Recortes de collage:** imágenes con bordes rectos o en arco, algunas con "cinta adhesiva" o esquinas de papel, como en las referencias.
- Se excluyen textura desgastada, pinceladas secas, líneas de velocidad, rayos decorativos y subrayados de pincel (regla de marca).

### 3.5 Elementos gráficos de marca

- **La M** (del logo) como ventana, máscara y portal. Se usa en el hero, el preloader, las transiciones de página y la 404.
- **Sellos circulares** con texto en arco que gira lentamente: "UI/UX · WEB · BRANDING · +10 AÑOS", "DISEÑO · CÓDIGO · DIRECCIÓN".
- **Tickets / pases** de papel: CTA de contacto ("DESTINO: TU PROYECTO"), fichas de servicios y fichas técnicas de casos.
- **Órbitas, radares y retículas** en línea fina: fondos del hero y del proceso.
- **Estrella de 4 puntas** como separador y viñeta.
- **Marcas de imprenta:** marcas de registro, reglas, coordenadas ("SEÑAL / 001", "LÁMINA 03 — TRABAJO"), contadores "01 / 05".
- **Marquees** de texto gigante en bandas a sangre (inspiradas en "try now").

---

## 4. Sistema de movimiento

Principio: **todo se mueve con intención y suavidad, nada se mueve sin motivo.** El movimiento guía la lectura, nunca la bloquea.

### 4.1 Tecnología

- **Lenis** para scroll suave, sincronizado con GSAP.
- **GSAP 3** con ScrollTrigger, SplitText, Flip y CustomEase (todos los plugins son gratuitos).
- **Astro View Transitions** + GSAP para las transiciones entre páginas.
- Inicialización por sección y diferida. Solo se carga el JS de los efectos que la página usa.

### 4.2 Tokens

| Token | Valor | Uso |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16, 1, .3, 1)` | Entradas generales (expo-out). |
| `--ease-in-out` | `cubic-bezier(.76, 0, .24, 1)` | Cortinas, portales, transiciones. |
| `--ease-soft` | `cubic-bezier(.33, 1, .68, 1)` | Hover, micro-interacciones. |
| `--dur-xs / s / m / l / xl` | 0.2 / 0.45 / 0.8 / 1.2 / 1.6 s | De micro-interacciones a cortinas. |
| Stagger | 0.04 s (caracteres) · 0.08 s (líneas) · 0.12 s (tarjetas) | Revelados en cascada. |

### 4.3 Biblioteca de efectos

| Nombre | Qué hace | Dónde |
|---|---|---|
| **Preloader M** | Dos bloques diagonales arman la M, contador 00→100 en la display y una cortina naranja/turquesa abre la página. Solo en la primera visita de la sesión. | Inicio |
| **Line Reveal** | Las líneas del titular suben desde una máscara (SplitText por líneas) con un leve skew que se corrige. | Todos los titulares |
| **Char Cascade** | Los caracteres de la display caen o suben en cascada con rebote mínimo. | Nombre, títulos de casos |
| **Respiración** | Eje `wdth` de la display ligado a la velocidad del scroll (se suaviza con lerp). | Titulares-cartel |
| **Scrub Words** | Las palabras pasan de opacidad 0.15 a 1 y cambian de color mientras se hace scroll. | Manifiesto |
| **Imprenta** | Imagen en duotono: capas desplazadas que se registran, `clip-path` que se abre y escala 1.2→1. | Imágenes de casos y collage |
| **Clip Reveal** | Apertura con `clip-path` (inset, diagonal, arco o forma M) más parallax interno de la imagen. | Galerías, portadas |
| **Parallax por capas** | Elementos del collage a distintas velocidades (`data-speed`); en el hero también reaccionan al ratón. | Hero, Mirada, Contacto |
| **Portal M** | La M escala hasta llenar la pantalla y revela la lámina siguiente dentro. | Hero → Manifiesto, transiciones de página |
| **Pinned Horizontal** | La sección se fija y los carteles se deslizan en horizontal; cada uno tiene parallax interno y número grande. | Trabajo seleccionado |
| **Stack Cards** | Tarjetas o tickets que se apilan al hacer scroll; la anterior se escala y oscurece. | Capacidades |
| **Trayectoria** | Una línea SVG se dibuja con el scroll y conecta estaciones que se iluminan. | Proceso |
| **Contadores** | Los números suben de 0 a su valor con la display, al entrar en pantalla. | Cifras |
| **Sello** | El sello entra "estampado" (escala 1.4→1, giro y una sacudida mínima) y luego gira lento. | Sellos en todas las láminas |
| **Marquee** | Banda de texto infinita; su velocidad y su skew responden al scroll y se invierte la dirección al subir. | Entre láminas |
| **Hover Image** | Al pasar por una fila de la lista, una imagen sigue al cursor con inercia y rotación leve. | Archivo |
| **Cursor** | Punto con inercia que cambia de estado: "Ver caso", "Arrastra", "Abrir", "Copiar". Se desactiva en táctil. | Global (escritorio) |
| **Magnético** | Botones y enlaces principales atraen el cursor. | CTA |
| **Ticket Tear** | Al hover, el talón del ticket se separa ligeramente por la línea perforada. | CTA de contacto |
| **Cortina de página** | Transición entre páginas: cortina de color con la M al centro y el nombre de la página destino. | Global |
| **Footer Reveal** | El footer queda detrás del contenido y se descubre con parallax. | Global |

### 4.4 Movimiento reducido y rendimiento

- Con `prefers-reduced-motion: reduce`: sin scroll suave, sin parallax ni pin. Los revelados se cambian por fundidos cortos y todo el contenido queda visible y legible.
- Solo se anima `transform`, `opacity` y `clip-path`, con `will-change` puntual.
- El contenido nunca depende del JS para existir: es HTML estático y la animación se aplica encima.
- Los efectos pesados (pin horizontal, cursor, hover image) solo se activan en escritorio. En móvil se usan versiones verticales más ligeras.

---

## 5. Mapa del sitio

| Página | ES | EN |
|---|---|---|
| Inicio | `/` | `/en/` |
| Proyectos (índice) | `/proyectos` | `/en/projects` |
| Caso de estudio ×8 | `/proyectos/[slug]` | `/en/projects/[slug]` |
| Servicios | `/servicios` | `/en/services` |
| Sobre mí | `/sobre-mi` | `/en/about` |
| Contacto | `/contacto` | `/en/contact` |
| 404 | `/404` | `/en/404` |

Se mantienen los slugs de proyectos actuales (`autovenz`, `encanto-amatista`, `dacatrader`, `spartan-helmets`, `chanell-clean-co`, `xsports-helmets`, `tdb-uniforms`, `we-care-master-service`) para que las redirecciones desde maurouix.com sean directas.

**Navegación:** logo M · Proyectos · Servicios · Sobre mí · Contacto · selector ES/EN · botón "Hablemos ↗". El menú móvil es un panel a pantalla completa en naranja con los enlaces en la display y entrada en cascada.

---

## 6. Inicio, lámina por lámina

> El copy conserva los textos actuales y los mejora o amplía. Lo marcado como **[confirmar]** necesita validación de Mauricio.

### 00 · Preloader
- **Fondo:** gunmetal.
- **Composición:** la M se arma al centro con dos bloques diagonales (naranja y turquesa). Debajo, el contador 00→100 en la display y la etiqueta mono "MAURICIO CORREA — EDICIÓN 2026".
- **Salida:** la M escala, se convierte en portal y descubre el hero.

### 01 · Hero
- **Fondo:** crema con grano, dominado por grandes bloques de color: un arco turquesa a sangre a la derecha y un sol naranja.
- **Copy:**
  - Etiqueta: `EDICIÓN 2026 · DISEÑO WEB · UI/UX · DESARROLLO`
  - Display gigante (en dos líneas que se cruzan con el collage): **MAURICIO / CORREA**
  - H1 (texto accesible y SEO): **Transformo ideas en experiencias digitales.**
  - Apoyo: *Diseño interfaces y construyo sitios web que convierten tu identidad en una experiencia clara, memorable y lista para crecer.*
  - Botones: **Ver proyectos ↘** · **Hablemos ↗**
  - Dato: **+10 años** creando soluciones digitales para marcas y empresas.
  - Sello giratorio: `UI/UX · WEB · BRANDING · +10 AÑOS ·`
  - Marcas: `SEÑAL / 001` · `LAT 6.2° N` **[confirmar ciudad/coordenadas]** · `Desliza para entrar ↓`
- **Composición:** el collage vive dentro de la M-portal: módulos de interfaz (tarjetas, botones, una ventana de navegador abstracta), órbitas en línea fina, una estrella de 4 puntas y una imagen surrealista con duotono. El nombre pasa por delante y por detrás de piezas del collage (máscaras).
- **Efectos:** Char Cascade en el nombre, Line Reveal en el H1, parallax por capas y de ratón, Sello, Respiración. Al hacer scroll se activa el **Portal M** hacia el Manifiesto.

### 02 · Manifiesto
- **Fondo:** gunmetal.
- **Copy:**
  - Etiqueta: `LÁMINA 02 — MIRADA`
  - Frase protagonista: **Diseñar es decidir qué merece ser visto.**
  - Apoyo (nuevo): *Cada proyecto empieza con una pregunta simple: ¿qué necesita entender tu cliente en los primeros segundos? Desde ahí ordeno, diseño y construyo.*
- **Efectos:** Scrub Words (las palabras se iluminan en crema y "merece ser visto" pasa a naranja). Una banda Marquee de cierre: `DISEÑO ✦ CÓDIGO ✦ DIRECCIÓN ✦`.

### 03 · Trabajo seleccionado
- **Fondo:** cambia con cada cartel (naranja → turquesa → gunmetal → crema → naranja).
- **Copy:**
  - Etiqueta: `LÁMINA 03 — TRABAJO SELECCIONADO`
  - Titular: **El trabajo habla primero.**
  - Apoyo: *Cada caso conecta el concepto, las decisiones de interfaz y el sitio real. Sin pasos ocultos.*
- **Carteles (5):** cada caso es un cartel a pantalla completa con el número gigante ("01"), el nombre en la display, una frase corta, las etiquetas, una captura con efecto Imprenta y los botones **Ver caso ↗** / **Visitar sitio ↗**.

| # | Proyecto | Categoría | Frase corta (mejorada) | Stack |
|---|---|---|---|---|
| 01 | AutoVenz | Diseño Web · Imagen Corporativa | Presencia digital B2B para una empresa que impulsa el mercado automotriz e industrial. | WordPress · Bricks · Figma · Branding |
| 02 | Encanto Amatista | Diseño Web · E-Commerce | Una tienda de joyería que enamora desde el primer scroll. | WordPress · Bricks · WooCommerce · Figma |
| 03 | Daca Trader | Diseño Web · UI/UX | Confianza B2B para importar motores desde China y Dubai. | WordPress · Bricks · Figma · UI/UX |
| 04 | Spartan Helmets | Diseño Web · E-Commerce | Un e-commerce robusto para equipamiento certificado DOT, ECE y CE. | WordPress · WooCommerce · Divi · Figma |
| 05 | Chanell Clean Co | Diseño Web · Servicios Locales | Orden, confianza y contacto directo para clientes en Chicagoland. | WordPress · Bricks · Figma · UI/UX |

- **Efectos:** Pinned Horizontal (en escritorio) con barra de progreso "01 / 05", Imprenta en cada captura, cursor "Arrastra" / "Ver caso". En móvil, los carteles se apilan en vertical con Clip Reveal.

### 04 · Archivo
- **Fondo:** crema.
- **Copy:** etiqueta `ARCHIVO` · titular **Más proyectos** · apoyo *Una selección adicional de interfaces, tiendas y experiencias digitales.*
- **Lista:** 06 X Sports Helmets (Diseño Web · E-Commerce) · 07 TDB Uniforms (Diseño Web · E-Commerce) · 08 We Care Master Service (Diseño Web · Servicios Locales). Cada fila tiene número, nombre en la display mediana, categoría y "Abrir caso ↗".
- **Efectos:** Hover Image (la captura sigue al cursor), la fila se desplaza y su número cambia a naranja. Enlace final: **Ver todos los proyectos ↗**.

### 05 · Capacidades
- **Fondo:** turquesa a sangre (texto en gunmetal).
- **Copy:**
  - Etiqueta: `LÁMINA 05 — CAPACIDADES`
  - Titular: **Una idea. Cuatro formas de hacerla funcionar.** (desde oct. 2026 se suma IA y automatización como cuarto servicio)
  - Apoyo: *Tres capacidades conectadas para que una idea conserve su intención desde el primer boceto hasta el sitio publicado.*
- **Tres tickets apilados** (cara frontal = servicio; talón = "lo que recibes"):
  1. **Diseño de interfaces web (UI/UX)** — *Interfaces intuitivas que equilibran estética y funcionalidad para una navegación fluida.* Recibes: arquitectura de contenido, wireframes, prototipo en Figma y diseño responsive. **[confirmar entregables]**
  2. **Desarrollo de sitios web creativos** — *Sitios modernos y únicos que hacen destacar tu marca, construidos con las mejores herramientas del mercado.* Recibes: desarrollo responsive (WordPress + Bricks Builder, WooCommerce o Astro), optimización de velocidad, SEO técnico base y capacitación para administrar. **[confirmar entregables]**
  3. **Conceptualización de imagen corporativa** — *Soluciones a medida que reflejan la identidad y los valores de cada cliente, desde el logotipo hasta la presencia digital completa.* Recibes: logotipo, paleta, tipografía, guía básica de marca y aplicaciones digitales. **[confirmar entregables]**
- **Efectos:** Stack Cards, Ticket Tear y un sello "DISEÑO · CÓDIGO · DIRECCIÓN". Enlace: **Ver servicios en detalle ↗**.

### 06 · Proceso *(nuevo)*
- **Fondo:** gunmetal con retícula de radar en línea fina.
- **Copy:**
  - Etiqueta: `LÁMINA 06 — RECORRIDO 01—04`
  - Titular: **Del primer boceto al sitio publicado.**
  - Estaciones **[confirmar textos]**:
    1. **Descubrir** — Entiendo tu negocio, tu público y lo que la web debe lograr.
    2. **Diseñar** — Estructura, prototipo y diseño visual en Figma, validados contigo antes de escribir código.
    3. **Construir** — Desarrollo responsive, rápido y fácil de administrar.
    4. **Lanzar** — Publicación, pruebas finales y acompañamiento para que tu sitio siga creciendo.
- **Efectos:** Trayectoria (la línea se dibuja con el scroll y cada estación se enciende en naranja/turquesa). Sección fijada en escritorio y lineal en móvil.

### 07 · Cifras *(nuevo)*
- **Fondo:** naranja a sangre (números en gunmetal, display gigante).
- **Datos (solo verificables):**
  - **+10** años diseñando y desarrollando para la web.
  - **8** proyectos publicados en este portafolio.
  - **3** capacidades conectadas: diseño, código y dirección de marca.
  - **2** mercados: Latinoamérica y EE. UU. **[confirmar]**
- No se publican tasas de conversión, número de clientes ni resultados sin evidencia.
- **Efectos:** Contadores y Respiración en los números. Esta lámina reinterpreta la franja de estadísticas de las referencias.

### 08 · Mirada / Sobre mí
- **Fondo:** crema con collage (sin fotos de Mauricio).
- **Copy:**
  - Etiqueta: `LÁMINA 08 — SOBRE MÍ`
  - Titular: **Hola, soy Mauricio Correa.**
  - Texto: *Diseñador gráfico y web con más de una década de experiencia transformando ideas en experiencias visuales impactantes y funcionales. Mi objetivo es ayudarte a contar tu historia a través del diseño, con soluciones que reflejen la identidad única de tu marca y conecten con tu audiencia de forma significativa.*
  - **4 principios como sellos:** Innovación creativa · Experiencia del usuario · Personalización única · Calidad y detalle (con sus textos actuales).
  - **"Guía de herramientas"** (etiqueta de papel, como "Future Guide" de la referencia): Figma · WordPress · Bricks Builder · WooCommerce · Astro · UI/UX · Diseño gráfico · Identidad corporativa.
- **Composición:** collage surrealista (una silla de diseñador vacía frente a una pantalla, o una mano que sostiene una ventana como espejo; ver sección 11) dentro de un arco, con los sellos alrededor.
- **Efectos:** parallax por capas, Sello y Clip Reveal en arco. Enlace: **Conoce más ↗** hacia `/sobre-mi`.

### 09 · Contacto (CTA)
- **Fondo:** naranja a sangre que se funde con el footer gunmetal.
- **Copy:**
  - Etiqueta: `SIGUIENTE / TU PROYECTO`
  - Display gigante: **HABLEMOS**
  - Titular: **¿Tienes un proyecto en mente?**
  - Apoyo: *Conversemos sobre el objetivo, la experiencia y la forma más clara de llevarlo a la web.*
  - **Ticket de embarque:** `PASAJERO: Tu marca · DESTINO: Tu nueva web · SALIDA: Hoy · PUERTA: WhatsApp`
  - Botones: **Escríbeme por WhatsApp ↗** (+57 302 372 5631) · **Enviar email ↗** (con botón "Copiar") **[confirmar email]**
- **Efectos:** Magnético, Ticket Tear y Char Cascade en "HABLEMOS".

### Footer
- **Fondo:** gunmetal (Footer Reveal).
- **Copy:** cierre grande **Cada diseño cuenta una historia. ¿Cuál es la tuya?** · navegación · redes (Instagram @mauriciocorread **[confirmar si reemplaza a @maurouix]**, LinkedIn /in/mcorread, Facebook /MauricioCorreaD) · `© 2026 Mauricio Correa` · selector de idioma · "Volver arriba ↑".
- Logotipo M + "MAURICIO CORREA" gigante en la display, que se revela al llegar al final.

---

## 7. Plantilla de caso de estudio

Cada caso se presenta como un **cartel que se abre en reportaje**:

1. **Portada-cartel:** número del caso gigante, nombre en la display, categoría, fondo de color propio (rotando la paleta) y captura principal con Imprenta. La transición desde el Inicio usa Flip: la imagen del cartel "viaja" a la portada.
2. **Ficha técnica** (estilo ticket, en Geist Mono): Cliente · Año **[completar]** · Rol · Stack · Enlaces (Visitar sitio ↗, Ver en Figma ↗ cuando exista).
3. **Proyecto** — contexto (texto actual).
4. **Desafío** — el problema (texto actual).
5. **Lo que construimos** — lista de decisiones con estrellas de 4 puntas y aparición en cascada (texto actual).
6. **Vistas del proyecto:** galería con mockups de escritorio y móvil, Clip Reveal y parallax interno. Bloque "Diseñado para cada pantalla."
7. **Resultado / aprendizaje** *(opcional, solo con evidencia real)*.
8. **CTA:** *¿Tienes un proyecto similar? Hablemos. Hagámoslo realidad.*
9. **Proyecto siguiente:** el nombre del siguiente caso en la display ocupa la pantalla; al hacer scroll o clic entra con Portal M.

**Contenido disponible:** los 8 casos tienen textos completos de Proyecto, Desafío y Lo que construimos en la web actual, y se migran tal cual con corrección de estilo. Nota: Spartan Helmets y X Sports Helmets se desarrollaron durante el trabajo de Mauricio en Naikka; se mantiene esa mención.

---

## 8. Páginas internas

- **Proyectos:** índice con los 8 casos. Vista de cuadrícula de carteles y vista de lista (alternables con Flip), filtros por categoría (Diseño Web, E-Commerce, UI/UX, Servicios Locales, Imagen Corporativa).
- **Servicios:** una lámina por cada capacidad con un titular-cartel, descripción ampliada, entregables, para quién es, proyectos relacionados y CTA. Cierra con el Proceso completo y una sección de preguntas frecuentes **[confirmar preguntas]**.
- **Sobre mí:** historia profesional (+10 años, diseño gráfico → web, herramientas), los 4 principios, la forma de trabajar y el collage surrealista. Sin fotos personales.
- **Contacto:** "HABLEMOS" gigante, ticket, WhatsApp, email con copiar y redes. Opcional más adelante: formulario de brief corto (tipo de proyecto, plazo, enlace actual) con un servicio de formularios **[decidir en F4]**.
- **404 "Señal perdida":** un televisor retro con estática dentro de la M, el texto *Esta página se perdió en la transmisión* y el botón **Volver al inicio**.

---

## 9. Arquitectura técnica

### 9.1 Stack

- **Astro** (última versión estable) + **TypeScript**, salida **estática**.
- **CSS nativo con tokens** (custom properties) y estilos con alcance de Astro. Sin framework de UI; los componentes interactivos son scripts ligeros.
- **GSAP 3** (ScrollTrigger, SplitText, Flip, CustomEase) + **Lenis**.
- **i18n nativo de Astro** (`es` por defecto sin prefijo, `en` con prefijo `/en`).
- **`astro:assets`** para imágenes: AVIF/WebP, tamaños responsivos y lazy loading.
- **Fuentes:** Geist y Geist Mono (paquete oficial `geist` o Fontsource) y Archivo variable con eje `wdth` (Fontsource). Auto-alojadas, con subset y precarga de las críticas.
- **Deploy:** Coolify con Docker (build con pnpm + nginx). Redirecciones 301 desde maurouix.com.
- **Analítica:** Cloudflare Web Analytics (sin cookies), con eventos en clics de contacto.

### 9.2 Contenido sin CMS, listo para CMS

Todo el contenido editable vive en **archivos locales** cargados con el **Content Layer de Astro** y validados con **esquemas Zod**. Los componentes **solo consumen colecciones**: no hay textos fijos dentro de los componentes; los textos de interfaz menores van en un diccionario i18n.

| Colección | Formato local | Contenido | Futuro tipo en Strapi |
|---|---|---|---|
| `projects` | `src/content/projects/{es,en}/<slug>.md` | Ficha, textos, etiquetas, imágenes, orden, destacado | Collection Type **Project** (i18n) |
| `services` | `src/content/services/{es,en}/<slug>.md` | Servicio, descripción, entregables | Collection Type **Service** (i18n) |
| `pages` | `src/content/pages/{es,en}/<page>.json` | Textos de cada lámina (hero, manifiesto, proceso…) | Single Types **Home**, **About**, **Services page**, **Contact** |
| `settings` | `src/content/settings/{es,en}.json` | Navegación, contacto, redes, SEO por defecto | Single Type **Global** |

**Para integrar Strapi más adelante:**
1. Crear en Strapi los tipos de contenido con los mismos campos que los esquemas Zod.
2. Sustituir el *loader* de cada colección (`glob`/`file` → loader propio que consulta `GET /api/<tipo>?locale=es&populate=*`). Los esquemas y los componentes no cambian.
3. Elegir la estrategia de publicación: reconstrucción del sitio estático por **webhook** de Strapi → redeploy en Coolify (recomendado), o modo híbrido/SSR si se necesita contenido en tiempo real.
4. Configurar el dominio de medios de Strapi para `astro:assets` (imágenes remotas).

### 9.3 Estructura de carpetas propuesta

```
mauriciocorread/
├─ IDEA.md
├─ astro.config.mjs
├─ package.json
├─ public/                      # favicons, og por defecto, robots.txt, _redirects
├─ src/
│  ├─ content.config.ts         # colecciones + esquemas Zod
│  ├─ content/
│  │  ├─ projects/{es,en}/
│  │  ├─ services/{es,en}/
│  │  ├─ pages/{es,en}/
│  │  └─ settings/
│  ├─ assets/
│  │  ├─ brand/                 # logo M (SVG), sellos
│  │  ├─ projects/<slug>/       # capturas y mockups
│  │  └─ collage/               # imágenes surrealistas
│  ├─ components/
│  │  ├─ ui/                    # Button, Stamp, Ticket, Marquee, Cursor, Grain, Counter, Tag
│  │  ├─ sections/              # Hero, Manifesto, Work, Archive, Capabilities, Process, Stats, About, ContactCTA
│  │  └─ layout/                # Header, MobileMenu, Footer, Preloader, PageTransition
│  ├─ layouts/BaseLayout.astro
│  ├─ pages/                    # index, proyectos/, servicios, sobre-mi, contacto, 404, en/…
│  ├─ scripts/motion/           # lenis, reveals, parallax, imprenta, portal, pinned, cursor, magnetic, transitions
│  ├─ i18n/                     # diccionario de UI y mapa de rutas ES↔EN
│  └─ styles/                   # tokens.css, base.css, typography.css, utilities.css
```

---

## 10. Rendimiento, accesibilidad y SEO

**Rendimiento**
- LCP < 2.5 s, CLS < 0.1 e INP < 200 ms en móvil 4G.
- El hero se pinta sin esperar al preloader (el preloader es una capa encima y tiene un tiempo máximo).
- JS por sección y diferido. GSAP y Lenis se cargan una vez y se comparten.
- Imágenes AVIF/WebP con `sizes` correctos. El collage del hero va en una sola imagen optimizada o en SVG cuando sea posible.

**Accesibilidad (AA)**
- Reglas de contraste de la sección 3.2.
- Los titulares-cartel decorativos tienen su equivalente accesible (el H1 real existe en el HTML).
- Foco visible con la marca (contorno naranja sobre fondos oscuros y gunmetal sobre claros), enlace "Saltar al contenido", navegación completa por teclado y menú móvil con gestión de foco.
- `prefers-reduced-motion` respetado en todos los efectos.
- `lang` correcto por idioma y textos alternativos en todas las capturas.

**SEO**
- Títulos y descripciones por página e idioma. Open Graph con imagen por caso (generada con el estilo cartel).
- JSON-LD: `Person` (Mauricio Correa, UI/UX Web Designer & Web Developer) + `ProfessionalService` + `CreativeWork` por caso.
- `sitemap.xml` con `hreflang` ES/EN, `robots.txt` y URLs canónicas.
- Redirecciones 301 maurouix.com → mauriciocorread.com página por página para conservar el posicionamiento.

---

## 11. Recursos y pendientes

**Disponibles**
- Logo M en SVG en 5 colores: `/Volumes/Workspace/Studio/Clients/Mauricio Correa/Brand/`.
- Paleta y reglas de marca: `Skills/content-mauricio-correa/references/brand.md`.
- Referencias visuales: `Web Resources/`.
- Textos completos de los 8 casos y de todas las secciones en la web actual.
- Capturas de los casos en la web actual (se descargan para el nuevo sitio). Las de mejor calidad deben salir de Figma o de nuevas capturas de los sitios en vivo.

**Imágenes surrealistas a generar** (con el patrón de 7 líneas de la marca: paleta CM, duotono, degradados, grano fino, sin texto, sin logo y sin paisajes decorativos):

| Uso | Motivo propuesto |
|---|---|
| Hero (collage) | Módulos de interfaz (tarjetas, botones, ventana de navegador) flotando y formando un portal en arco, con un sol naranja detrás, sobre un degradado turquesa → gunmetal. |
| Manifiesto | Una lente o lupa de imprenta sobre una retícula de interfaz, con la mitad enfocada. |
| Capacidades ×3 | Diseño: un cursor-lápiz trazando una retícula. Código: bloques de construcción con forma de corchetes `</>`. Dirección: un compás o brújula sobre una paleta de color. |
| Proceso | Una órbita con cuatro estaciones-planeta en línea fina. |
| Sobre mí | Una silla de diseñador vacía frente a una pantalla encendida, o una mano que sostiene una ventana de navegador como si fuera un espejo. |
| Contacto | Una puerta en arco entreabierta con luz naranja saliendo hacia un pasillo turquesa. |
| 404 | Un televisor retro con estática dentro de la silueta de la M. |
| OG / social | Plantilla cartel con el nombre del caso en la display. |

**Pendientes de Mauricio**
- [ ] Email de contacto definitivo (en la web actual aparece oculto).
- [ ] Confirmar la compra o el acceso del dominio mauriciocorread.com y su DNS apuntando al servidor de Coolify.
- [ ] Confirmar la cuenta de Instagram (@mauriciocorread vs @maurouix).
- [ ] Años de cada proyecto (solo Daca Trader indica 2024).
- [ ] Validar los entregables de servicios (`src/content/services/`), los textos del proceso y las preguntas frecuentes.
- [ ] Confirmar la cifra "2 mercados: Latinoamérica y EE. UU." — se retiró de la web hasta que Mauricio la confirme.
- [ ] Ciudad o coordenadas para las marcas de imprenta (opcional).
- [ ] Testimonios **reales** de clientes. Si existen, se añade una lámina "Lo que dicen"; si no, no se incluye. Nunca se inventan.
- [ ] Capturas de alta calidad o enlaces de Figma de cada proyecto.
- [ ] Aprobar la fuente display (Archivo variable o la alternativa).

---

## 12. Hoja de ruta

| Fase | Entregable | Resultado verificable |
|---|---|---|
| **F0** | `IDEA.md` (este documento) | Idea aprobada. |
| **F1** | Proyecto Astro, tokens, tipografías, grano, componentes base (Button, Stamp, Ticket, Marquee, Cursor) y **prototipo del hero** con Preloader M, parallax y Portal M | Mauricio aprueba el look & feel y el movimiento en el navegador. |
| **F2** | Inicio completo (láminas 01–09 + footer) con contenido en colecciones | Inicio navegable en escritorio y móvil, con reduced-motion. |
| **F3** | Plantilla de caso + los 8 casos migrados + índice de proyectos | Todos los casos accesibles por URL con transiciones. |
| **F4** | Servicios, Sobre mí, Contacto, 404 + **versión en inglés** | Sitio completo ES/EN. |
| **F5** | Pulido de movimiento, rendimiento, accesibilidad y SEO | Lighthouse ≥ 90 en todo, auditoría AA y revisión en dispositivos reales. |
| **F6** | Deploy en Cloudflare Pages, dominio, redirecciones 301 y analítica | mauriciocorread.com en producción y maurouix.com redirigiendo. |
| **Futuro** | Integración de Strapi (sección 9.2) y blog o artículos | Contenido editable sin tocar código. |

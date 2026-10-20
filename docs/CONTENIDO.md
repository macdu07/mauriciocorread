# Editar contenido

Guía para cambiar textos, enlaces, imágenes y datos del sitio. Todo el contenido editable vive en `src/content/`. Los componentes no contienen textos fijos.

## Regla principal

**Cada cambio se hace en español y en inglés.** Los dos archivos de un mismo tipo deben tener la misma estructura. Si el esquema de `src/content.config.ts` cambia, cambian los dos.

## Dónde está cada cosa

| Qué | Dónde | Idioma |
|---|---|---|
| Nombre, cargo, navegación, botón "Hablemos", selector de idioma, contacto, redes, pie | `src/content/settings/es.json` y `en.json` | Uno por idioma |
| Textos de la home (héroe, manifiesto, marquesina, contacto) | `src/content/pages/es/home.json` y `en/home.json` | Uno por idioma |
| Etiquetas menores de interfaz (botones y mensajes del sistema) | `src/i18n/index.ts` | Hoy solo tiene utilidades de idioma; las etiquetas nuevas van aquí, en ES y EN |
| Imágenes de proyectos | `src/assets/projects/` | Compartidas |
| Logotipo y favicon | `src/assets/brand/`, `public/brand/`, `public/favicon.svg` | Compartidos |

Las páginas de proyectos, servicios, sobre mí y contacto todavía no tienen archivo de contenido: se crearán con el rediseño (`pages/{es,en}/<slug>.json`).

## Ajustes generales (`settings`)

Cada archivo de `src/content/settings/` describe la navegación, el contacto y el pie. Campos principales:

- `siteName`, `role`: nombre y cargo que aparecen en la cabecera y el pie.
- `nav`: lista de enlaces `{ label, href }` del menú principal.
- `navCta`: botón de la cabecera (por defecto "Hablemos", enlaza a `#contacto`).
- `langSwitch`: enlace para cambiar de idioma. En español apunta a `/en/`; en inglés, a `/` (con `lang: "es"`).
- `contact.whatsapp`: número en formato internacional **sin el signo +** (ej. `573023725631`).
- `contact.whatsappDisplay`: cómo se muestra el número en pantalla.
- `contact.whatsappMessage`: mensaje precargado al abrir WhatsApp.
- `contact.email`: **pendiente de confirmar por Mauricio.** Hoy está vacío.
- `social`: lista de redes `{ label, href }`.
- `footer`: frase de cierre, copyright y texto del botón "Volver arriba".

## Textos de la home (`pages/<idioma>/home.json`)

Estructura por bloques:

- `meta`: título y descripción para buscadores y para compartir enlaces.
- `preloader.edition`: texto de la pantalla de carga.
- `hero`: nombre en dos líneas, titular, texto de apoyo, dos botones, estadística, sello giratorio, pista de scroll y capturas de proyectos (`screens`, cada una con `image`, `alt` y `name`).
- `manifesto`: folio, frase principal (`statement`), parte resaltada (`highlight`) y cuerpo.
- `marquee`: palabras de la franja animada.
- `contact`: folio, título, texto, tarjeta de datos (`ticket`) y etiquetas de los botones de contacto.

Cada `alt` de imagen debe describir la captura, no repetir el nombre del proyecto solo.

## Imágenes

- Guardar las imágenes en `src/assets/projects/` en formato `.webp`.
- Referenciarlas desde JSON con ruta relativa, por ejemplo `"../../../assets/projects/autovenz.webp"`.
- Astro las optimiza en el build.
- No usar fotos de Mauricio.

## Lo que no se inventa

El sitio no puede incluir cifras, testimonios, nombres de clientes, resultados ni años de proyectos que no estén confirmados. Lo que falta se deja marcado y se consulta a Mauricio. Pendientes actuales (según [PRODUCT.md](../PRODUCT.md)):

- Correo de contacto definitivo.
- Handle de Instagram: `@mauriciocorread` o `@maurouix`.
- Año de cada proyecto (hoy solo consta el de Daca Trader: 2024).
- Entregables de cada servicio.
- Redacción del proceso de trabajo.
- Preguntas frecuentes y, si aplica, formulario de brief.

## Migración a un CMS (Strapi)

Los esquemas de `src/content.config.ts` son la fuente de verdad. Para conectar Strapi:

1. Sustituir el `loader` de cada colección por uno que consulte la API.
2. Mantener los mismos campos y esquemas Zod.
3. Los componentes no cambian.

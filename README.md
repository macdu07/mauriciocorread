# mauriciocorread.com

Web personal y portafolio de **Mauricio Correa — UI/UX Web Designer & Web Developer**.
Bilingüe: español por defecto (`/`) e inglés (`/en`). Reemplaza a maurouix.com ("MauroUIX").

> Para agentes de IA (Claude Code, Codex, Cursor…) las reglas de trabajo están en [AGENTS.md](AGENTS.md). Este README es para personas.

## Documentación

| Documento | Para qué sirve |
|---|---|
| [README.md](README.md) | Este archivo: puesta en marcha, comandos, estructura y despliegue. |
| [AGENTS.md](AGENTS.md) | Reglas de contenido, marca, movimiento y calidad mínima antes de dar algo por terminado. |
| [PRODUCT.md](PRODUCT.md) | Verdad de producto: usuarios, propósito, compromisos de marca y evidencia disponible. |
| [IDEA.md](IDEA.md) | Idea completa: concepto "Carteles en movimiento", sistema visual y de movimiento, mapa del sitio, copy por sección y hoja de ruta. |
| [docs/CONTENIDO.md](docs/CONTENIDO.md) | Cómo editar textos, imágenes y proyectos en español e inglés. |
| `DESIGN.md` | Sistema de diseño tal como quedó construido. Se genera al cerrar la fase visual; todavía no existe. |
| `.impeccable/` | Brief de superficie y contrato de dirección. Solo para desarrollo; nunca se copia al código servido. |

## Stack

- **Astro 7** en salida estática + **TypeScript**.
- **CSS nativo con tokens** (`src/styles/tokens.css`), con estilos acotados a cada componente `.astro`. Sin Tailwind ni framework de UI.
- **GSAP 3** (ScrollTrigger, SplitText, Flip, CustomEase) y **Lenis** para el scroll suave.
- Fuentes auto-alojadas en `public/fonts/`: Geist, Geist Mono y Archivo variable.
- Despliegue previsto en **Cloudflare Pages**.

## Puesta en marcha

Requisitos: Node.js y npm.

```bash
npm install
npm run dev
```

El sitio queda en <http://localhost:4321>.

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo en `localhost:4321`. |
| `npm run build` | Build estático en `dist/`. Debe terminar sin errores. |
| `npm run preview` | Sirve el build generado para revisarlo tal como irá a producción. |
| `npm run check` | Verificación de tipos de Astro. |

## Estructura

```
src/
  content.config.ts      # colecciones y esquemas Zod
  content/               # todo el texto editable, por idioma
    pages/{es,en}/       # textos de cada sección
    settings/            # navegación, contacto, redes y pie
  assets/                # imágenes procesadas por astro:assets
  components/
    ui/                  # piezas reutilizables (Button, Stamp, Marquee, Cursor…)
    sections/            # láminas de la home
    layout/              # Header, Footer, Preloader
  i18n/                  # etiquetas menores de interfaz (ES/EN)
  layouts/
  pages/                 # rutas: español sin prefijo, inglés en /en/
  scripts/motion/        # módulos de animación (GSAP y Lenis)
  styles/                # tokens, base y tipografía
public/                  # fuentes, favicon y logotipo sin procesar
```

## Idiomas y rutas

- Español: `/` (idioma por defecto, sin prefijo).
- Inglés: `/en/`.
- Cada cambio de contenido se hace en **ambos idiomas**.

## Editar contenido

Todos los textos viven en `src/content/`, no en los componentes. Ver [docs/CONTENIDO.md](docs/CONTENIDO.md) para el detalle de cada archivo y de los campos.

Esto permite conectar más adelante un CMS (Strapi) cambiando solo los *loaders* de `src/content.config.ts`, sin tocar componentes ni esquemas.

## Reglas básicas

- **Sin cifras, testimonios, clientes ni años inventados.** Lo pendiente se marca y se consulta a Mauricio.
- **Mauricio no aparece en fotos.**
- **Movimiento:** anima solo `transform`, `opacity`, `clip-path` y `mask`. El contenido debe verse sin JavaScript. Con `prefers-reduced-motion` no hay Lenis, parallax ni pin.
- **Paleta fija:** crema `#F8F3EA`, turquesa `#00AEAE`, naranja `#FF6B30`, gunmetal `#1D2730`, rojo `#EB3D40` (solo puntual).
- **Tipografía:** Geist para todo. Archivo solo para titulares-cartel gigantes.

## Calidad antes de dar algo por terminado

- `npm run build` sin errores.
- Revisión en navegador a 1440 px y 390 px, y con movimiento reducido.
- Contraste AA, foco visible, navegación por teclado y `alt` en las imágenes.
- Objetivo: Lighthouse ≥ 90 en las cuatro categorías.

## Despliegue

- Build: `npm run build`.
- Carpeta de salida: `dist/`.
- Destino: Cloudflare Pages.
- Dominio `mauriciocorread.com` y acceso a Cloudflare: **pendientes de confirmar por Mauricio** (ver [PRODUCT.md](PRODUCT.md), sección *Operating Context*).
- Tras el lanzamiento, maurouix.com debe redirigir con 301 a mauriciocorread.com conservando los slugs de los proyectos.

## Git

El repositorio no hace commit ni push salvo que Mauricio lo pida.

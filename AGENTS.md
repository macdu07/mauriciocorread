# AGENTS.md — mauriciocorread.com

Instrucciones para cualquier agente de IA (Claude Code, Codex, Cursor, Copilot…) que trabaje en este repositorio.

## Qué es este proyecto

Web personal y portafolio de **Mauricio Correa — UI/UX Web Designer & Web Developer**. Reemplaza a maurouix.com ("MauroUIX"). Bilingüe: español (por defecto, `/`) e inglés (`/en`).

Documentos rectores (leer antes de cambiar algo relevante):

| Archivo | Contenido |
|---|---|
| `IDEA.md` | Idea completa: concepto "Carteles en movimiento", sistema visual y de movimiento, mapa del sitio, copy por sección, arquitectura, hoja de ruta por fases. |
| `PRODUCT.md` | Verdad de producto: usuarios, propósito, compromisos de marca, evidencia disponible. |
| `DESIGN.md` | Sistema de diseño tal como está construido (se genera al cerrar cada fase visual). |
| `.impeccable/` | Brief de superficie y contrato de dirección (solo desarrollo; nunca copiar a código servido). |

## Stack

- **Astro 7** (salida estática) + **TypeScript**.
- **CSS nativo con tokens** (`src/styles/tokens.css`); estilos con alcance en componentes `.astro`. Sin Tailwind ni framework de UI.
- **GSAP 3** (ScrollTrigger, SplitText, Flip, CustomEase) + **Lenis** para el scroll suave.
- Fuentes auto-alojadas en `public/fonts/`: Geist, Geist Mono y Archivo variable (ejes `wdth` 62–125 y `wght`).
- Gestor de paquetes: **pnpm** (no usar npm ni yarn; el único lockfile es `pnpm-lock.yaml`).
- Deploy: **Coolify** con el `Dockerfile` del repo (build con pnpm → nginx sirviendo `dist/` en el puerto 80; config en `nginx.conf`).

## Comandos

```bash
pnpm dev       # servidor de desarrollo (http://localhost:4321)
pnpm build     # build estático en dist/
pnpm preview   # sirve el build
pnpm check     # verificación de tipos de Astro
```

## Estructura

```
src/
  content.config.ts      # colecciones + esquemas Zod
  content/               # TODO el contenido editable (por idioma)
    pages/{es,en}/       # textos de cada sección
    projects/{es,en}/    # casos de estudio
    services/{es,en}/
    settings/            # navegación, contacto, redes, SEO
  assets/                # imágenes procesadas por astro:assets
  components/
    ui/                  # piezas reutilizables (Button, Stamp, Marquee, Cursor, Grain…)
    sections/            # láminas del Inicio
    layout/              # Header, Footer, Preloader, transiciones
  layouts/
  pages/                 # rutas (es sin prefijo, en/ con prefijo)
  scripts/motion/        # módulos de animación
  styles/                # tokens, base, tipografía
```

## Reglas de contenido (importantes)

1. **Sin textos fijos en componentes.** Todo texto visible sale de las colecciones en `src/content/`. Las etiquetas menores de interfaz van en `src/i18n/`. Así se podrá conectar Strapi más adelante cambiando solo los *loaders* de `content.config.ts`, sin tocar componentes ni esquemas.
2. **Nunca inventar** cifras, testimonios, clientes, resultados ni años de proyectos. Lo pendiente se marca y se le consulta a Mauricio.
3. Mauricio **no aparece en fotos**.
4. Voz: primera persona, cercana, profesional, directa y en español natural.
5. Cada cambio de contenido se hace en **ES y EN**.

## Reglas de marca y diseño

- Paleta (no añadir colores fuera de ella; se permiten tonos intermedios en degradados): crema `#F8F3EA`, turquesa `#00AEAE`, naranja `#FF6B30`, gunmetal `#1D2730`, rojo `#EB3D40` (solo puntual).
- **Contraste:** el texto de lectura y los botones sobre naranja o turquesa van en gunmetal. El crema sobre naranja o turquesa (~2.5:1) solo se usa en titulares-cartel decorativos que tengan un equivalente accesible.
- Tipografía: Geist para todo; Archivo (display condensada) **solo** para titulares-cartel gigantes. Tipografía plana: sin 3D, extrusiones ni sombras volumétricas.
- Excluidos: texturas desgastadas, pinceladas, líneas de velocidad, rayos decorativos, subrayados de pincel, texto con degradado, glassmorphism decorativo y emojis como iconos.
- Evitar grandes superficies crema continuas; alternar fondos gunmetal, turquesa y naranja a sangre.

## Reglas de movimiento

- Animar solo `transform`, `opacity`, `clip-path` y `mask`. El contenido es visible sin JS; la animación se aplica encima.
- Respetar siempre `prefers-reduced-motion`: sin Lenis, sin parallax ni pin; los revelados se cambian por fundidos cortos.
- Usar los easings y duraciones de `tokens.css`; no inventar curvas sueltas.
- Los efectos pesados (pin horizontal, cursor, imagen que sigue al cursor) solo se activan en escritorio y con puntero fino.
- Limpiar ScrollTriggers y listeners al cambiar de página (View Transitions).

## Calidad mínima antes de dar algo por terminado

- `pnpm build` sin errores.
- Revisar en navegador a 1440 px y 390 px, más el modo de movimiento reducido.
- Contraste AA, foco visible, navegación por teclado y `alt` en las imágenes.
- Objetivo: Lighthouse ≥ 90 en las cuatro categorías.

## Git

No hacer commit ni push salvo que Mauricio lo pida.

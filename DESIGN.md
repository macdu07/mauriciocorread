---
name: Mauricio Correa
description: Personal site and portfolio of a UI/UX web designer and developer, set as a retro-futurist print edition coming alive.
colors:
  cm-orange: "#ff6b30"
  cm-turquoise: "#00aeae"
  cm-turquoise-deep: "#00797d"
  cm-cream: "#f8f3ea"
  cm-cream-deep: "#efe6d6"
  cm-gunmetal: "#1d2730"
  cm-gunmetal-soft: "#2a3742"
  cm-ink-soft: "color-mix(in oklab, #1d2730 78%, #f8f3ea)"
  cm-cream-soft: "color-mix(in oklab, #f8f3ea 74%, #1d2730)"
typography:
  display:
    fontFamily: "Archivo, Geist, sans-serif"
    fontSize: "clamp(5.5rem, 15.5vw, 17rem)"
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 62"
  display-name:
    fontFamily: "Archivo, Geist, sans-serif"
    fontSize: "clamp(5rem, 12.4vw, 15rem)"
    fontWeight: 900
    lineHeight: 0.8
    fontVariation: "'wdth' 62"
  display-case-name:
    fontFamily: "Archivo, Geist, sans-serif"
    fontSize: "min(clamp(4.5rem, 11vw, 14rem), var(--fit))"
    fontWeight: 900
    lineHeight: 0.8
    fontVariation: "'wdth' 62"
  display-figure:
    fontFamily: "Archivo, Geist, sans-serif"
    fontSize: "clamp(6rem, 15vw, 16rem)"
    fontWeight: 900
    lineHeight: 0.78
    fontVariation: "'wdth' 62"
    fontFeature: "'tnum' 1"
  display-row:
    fontFamily: "Archivo, Geist, sans-serif"
    fontSize: "clamp(2.6rem, 6.4vw, 6.5rem)"
    fontWeight: 900
    lineHeight: 0.86
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.5rem + 2.2vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline-large:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.8rem + 3.6vw, 5rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.25rem + 1.1vw, 2.2rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  body-large:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.1rem + 0.5vw, 1.45rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.25vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.55
  nav:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(0.84rem, 0.8rem + 0.18vw, 0.94rem)"
    fontWeight: 500
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "clamp(0.72rem, 0.7rem + 0.1vw, 0.78rem)"
    fontWeight: 400
    letterSpacing: "0.06em"
    fontFeature: "'tnum' 1"
rounded:
  s: "3px"
  frame: "6px"
  m: "10px"
  device: "14px"
  arch: "999px 999px 8px 8px"
spacing:
  2xs: "0.375rem"
  xs: "0.75rem"
  s: "1rem"
  m: "1.5rem"
  l: "clamp(2rem, 1.5rem + 2vw, 3.25rem)"
  xl: "clamp(3rem, 2rem + 4vw, 6rem)"
  2xl: "clamp(5rem, 3rem + 8vw, 11rem)"
  gutter: "clamp(1rem, 0.5rem + 2.4vw, 3rem)"
components:
  button-ink:
    backgroundColor: "{colors.cm-gunmetal}"
    textColor: "{colors.cm-cream}"
    rounded: "{rounded.s}"
    padding: "0 1.15rem 0 1.4rem"
    height: "3.25rem"
  button-ink-hover:
    backgroundColor: "{colors.cm-gunmetal-soft}"
    textColor: "{colors.cm-cream}"
  button-orange:
    backgroundColor: "{colors.cm-orange}"
    textColor: "{colors.cm-gunmetal}"
    rounded: "{rounded.s}"
    padding: "0 1.15rem 0 1.4rem"
    height: "3.25rem"
  button-cream:
    backgroundColor: "{colors.cm-cream}"
    textColor: "{colors.cm-gunmetal}"
    rounded: "{rounded.s}"
    padding: "0 1.15rem 0 1.4rem"
    height: "3.25rem"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.cm-gunmetal}"
    rounded: "{rounded.s}"
    padding: "0 1.15rem 0 1.4rem"
    height: "3.25rem"
  ticket:
    backgroundColor: "{colors.cm-cream}"
    textColor: "{colors.cm-gunmetal}"
    rounded: "{rounded.m}"
    padding: "2rem 2.2rem"
  ticket-compact:
    backgroundColor: "{colors.cm-cream}"
    textColor: "{colors.cm-gunmetal}"
    rounded: "{rounded.m}"
    padding: "2rem 2.2rem"
  stamp:
    backgroundColor: "{colors.cm-cream}"
    textColor: "{colors.cm-gunmetal}"
    size: "9rem"
  stamp-orange:
    backgroundColor: "{colors.cm-orange}"
    textColor: "{colors.cm-gunmetal}"
    size: "7.5rem"
  nav-link:
    textColor: "{colors.cm-gunmetal}"
    typography: "{typography.nav}"
  nav-link-on-dark:
    textColor: "{colors.cm-cream}"
    typography: "{typography.nav}"
  capability-ticket:
    backgroundColor: "{colors.cm-cream}"
    textColor: "{colors.cm-gunmetal}"
    rounded: "{rounded.m}"
    padding: "clamp(1.5rem, 3vw, 3rem)"
  browser-frame:
    backgroundColor: "{colors.cm-cream}"
    textColor: "{colors.cm-gunmetal}"
    rounded: "{rounded.frame}"
  phone-mockup:
    backgroundColor: "{colors.cm-gunmetal}"
    rounded: "{rounded.device}"
  progress-chip:
    backgroundColor: "{colors.cm-cream}"
    textColor: "{colors.cm-gunmetal}"
    rounded: "{rounded.s}"
    padding: "0.4rem 0.7rem"
  tag-chip:
    backgroundColor: "transparent"
    textColor: "{colors.cm-gunmetal}"
    typography: "{typography.label}"
    rounded: "{rounded.s}"
    padding: "0.35rem 0.6rem"
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.cm-cream}"
    rounded: "{rounded.s}"
    padding: "0.55rem 0.85rem"
  filter-chip-active:
    backgroundColor: "{colors.cm-orange}"
    textColor: "{colors.cm-gunmetal}"
    rounded: "{rounded.s}"
    padding: "0.55rem 0.85rem"
  project-card:
    rounded: "{rounded.m}"
    padding: "{spacing.m}"
  collage-card:
    backgroundColor: "{colors.cm-cream}"
    textColor: "{colors.cm-gunmetal}"
    rounded: "{rounded.m}"
    padding: "1rem 1.1rem"
  paper-label:
    backgroundColor: "{colors.cm-cream-deep}"
    textColor: "{colors.cm-gunmetal}"
    rounded: "{rounded.s}"
    padding: "1.4rem 1.6rem"
---

# Design System: Mauricio Correa

<!-- Recorded after Phase 1 (Preloader, Hero, Manifesto, Marquee, Contact close, Footer), updated after Phase 2 (03 Work, 04 Archive, 05 Capabilities, 06 Process, 07 Figures, 08 About) and after Phase 3 (case studies /proyectos/[slug] and /en/projects/[slug], projects index /proyectos and /en/projects, cross-document View Transitions; ES + EN) from the shipped build in src/styles, src/components and src/scripts/motion. Remaining inner pages are planned in IDEA.md and not built yet; they inherit this system and must extend it, not redefine it. -->

## Overview

**Creative North Star: "The Print Edition Coming Alive"**

The site is a retro-futurist poster series. Every section is a full-bleed plate: a flat field of cream paper, turquoise, orange or gunmetal, with fine animated grain under the content and giant condensed poster lettering that changes colour where it crosses a field. Scrolling turns the pages. The brand M is the recurring device: window, mask, preloader and portal into the next plate.

Two voices carry the type. Archivo, compressed to its narrowest width and set in black uppercase, is the poster: decorative, enormous, often hidden from assistive tech because an accessible Geist heading says the same thing. Geist carries everything that is read, from the H1 down to the button labels, and Geist Mono sets folios, ticket fields and the stamp ring like a printer's slug. Imagery registers like a print run: grayscale source with an orange multiply plate and a deep-turquoise screen plate sliding into register.

Density is low and theatrical at display size, tight and plain at reading size. Ornament is limited to the printer's furniture the world owns natively: rotating circular stamps, ticket stubs, thin orbit lines, four-point stars, registration marks and folios in the margins. Composition is constructivist and flat; depth comes from layering, parallax and colour, never from dimensional type.

**Key Characteristics:**
- Full-bleed colour plates (cream, turquoise, orange, gunmetal) set by a `data-surface` attribute, each with fine grain under the content.
- Archivo 900 at 62% width for poster display only; Geist for everything read.
- The brand M as window, mask, preloader and portal.
- Printer's furniture as ornament: stamps, ticket stubs, orbits, four-point stars, registration marks, corner folios.
- Duotone "print run" imagery with offset colour plates.
- Expo-out motion over Lenis smooth scroll, with a full reduced-motion alternative.
- Home plate order as built: hero (turquoise/cream) → 02 manifesto (gunmetal) → marquee (orange) → 03 work (gunmetal intro, then orange / turquoise / cream / gunmetal / orange posters) → 04 archive (cream) → 05 capabilities (turquoise) → 06 process (gunmetal) → 07 figures (orange) → 08 about (cream) → 09 contact.
- Case page plate order as built: cover (the project's tone) → brief (cream) → what we built (gunmetal) → views (turquoise, or orange when the case tone is turquoise) → CTA (gunmetal) → next project (the next case's tone) → footer. The projects index is one gunmetal plate holding toned project cards.
- Pages change like plates: the new page wipes up over the old one, and a project's cover screenshot travels between home poster, index card and case cover.

### Contract amendments made during the build

Two decisions in the first viewport differ from the original direction contract. The builder made them and they are recorded here as the shipped truth:

- **The M window is ~70vh tall, not ~85vh.** The window is sized `min(56vw, 112svh)` wide at the M's 880:695 ratio, which lands at about 70% of viewport height at 1440 x 900. A larger window covered the H1 column at 1440 wide.
- **The hero field is a turquoise to deep-turquoise gradient, with gunmetal inside the M.** The field runs top to bottom from turquoise to deep turquoise, with a soft turquoise-cream light at the top right. The M window itself is filled with gunmetal (gunmetal-soft to gunmetal), so its project screens, orange sun and orbit lines keep their contrast against the field.

## Colors

The palette is the brand's binding five-colour set. Orange and turquoise with cream lead, and gunmetal supports. Intermediate tones are derived only from the palette, never introduced from outside it.

### Primary
- **Signal Orange** (cm-orange): the action colour. Used for the "Hablemos" button, the contact plate, the marquee plate, the preloader count, the hero sun disc, the manifesto accent words on gunmetal, the focus ring, text selection, the scrollbar thumb, the cursor dot and four-point stars. In Phase 2 it is also the figures plate, two of the five work posters, the project name on the gunmetal poster, the drawn process route and lit stations, the work progress fill, the archive number on hover and the halftone sun in the about arch. In Phase 3 it is the fitted "PROYECTOS" title on the gunmetal index, the active filter chip, the numbers of the "what we built" list, the fitted CTA word and the CTA body line on gunmetal, and the poster name of every gunmetal-tone case, card and next plate.

### Secondary
- **Print Turquoise** (cm-turquoise): the hero field, the capabilities plate, one work poster, orbit and radar linework on gunmetal (radar at 35% mix), process station numerals and unlit station rings, the cursor hover state and the right half of the preloader M. In Phase 3 it is the default views plate on case pages.
- **Deep Turquoise** (cm-turquoise-deep): the lower end of the hero field gradient, the middle of the about arch gradient (turquoise → deep turquoise → gunmetal), and the screen-blended second plate in duotone imagery.

### Neutral
- **Edition Cream** (cm-cream): paper. Body background, stamps, tickets, browser-frame screens, and poster display type where it crosses a colour field.
- **Cream Deep** (cm-cream-deep): a second paper stock for objects resting on cream, such as the tools paper label in About.
- **Gunmetal Ink** (cm-gunmetal): all reading text on cream, orange and turquoise; the primary button; the manifesto and footer plates; the projects index, the "what we built" plate and the case CTA plate; the inside of the M window; the html background behind everything.
- **Gunmetal Soft** (cm-gunmetal-soft): ink-button hover, the ghost poster words on gunmetal plates (manifesto, "what we built"), the tonal numbers on gunmetal (work intro count, index count, gunmetal-tone case number), the top of the M window gradient.
- **Ink Soft** (cm-ink-soft): secondary reading text on cream (the hero lead, ticket field labels).
- **Cream Soft** (cm-cream-soft): secondary text and registration marks on gunmetal (folios, legal line).
- **Derived mixes in use:** body copy on gunmetal plates is cream mixed 82% with turquoise; giant tonal numerals are currentColor at 9% (work posters, case covers) or turquoise 30% into cream (capability tickets); dashed perforations and dashed routes are gunmetal or cream at 25–40%; rules and chip strokes on gunmetal are cream at 18–45% (row and list rules 22%, idle chip stroke 45%, gunmetal card edge 18%).

CM-RED (#EB3D40) is part of the brand palette, marked "occasional", and is declared in tokens.css. No Phase 1 or Phase 2 surface uses it, so it is held in reserve rather than recorded as a live token.

### Named Rules
**The Gunmetal Reads Rule.** On orange and turquoise plates, every reading word and every button label is gunmetal (~5.4:1 and ~5.5:1). Cream on orange or turquoise (~2.5:1) and orange on cream (~2.6:1) are allowed only for giant decorative display type marked `aria-hidden`, with the same message present in accessible text nearby. Never use them for body copy, buttons or labels.

**The Plate Rule.** A section takes one full-bleed field through `data-surface` (cream, turquoise, orange or gunmetal), and that attribute sets both the background and the default text colour. Avoid long, unbroken cream stretches. Alternate plates so orange and turquoise carry the edition.

**The Colour-Swap Rule.** Where a poster name crosses an image or a colour field, its letters switch to cream through an `aria-hidden` copy clipped to the crossing area, never by hiding or masking out letters. The hero does it with the M mask (inside the window) and the field clip (over turquoise); the work posters do it with a cream copy clipped to the screenshot rectangle, recomputed on every refresh. The accessible name underneath stays whole.

**The Project Tone Rule.** Every project owns one plate tone by its order, in the fixed rotation orange, turquoise, cream, gunmetal, repeating (`projectTone` in src/i18n). The tone follows the project everywhere it appears: home poster, index card, case cover and the next-project plate that points to it. On a gunmetal tone the poster name switches to orange. A case's views plate takes turquoise, or orange when the case itself is turquoise, so two adjacent plates never share a field.

**The Derived Tones Rule.** New tints come from `color-mix(in oklab, ...)` between palette colours. No colour from outside the palette enters the system.

## Typography

**Display Font:** Archivo variable (wdth 62–125), falling back to Geist
**Body Font:** Geist variable (with ui-sans-serif, system-ui)
**Label/Mono Font:** Geist Mono variable (with ui-monospace)

**Character:** Condensed black poster lettering against a clean, tight grotesk. Archivo shouts the plate's word; Geist explains it in plain first person.

Geist is brand-binding (brand manual: "Tipografía fija: Geist"; PRODUCT.md). The detector's overused-font rule is suppressed for `geist` and `geist mono` in `.impeccable/config.json` for that reason. This is a brand commitment, not a taste call, and it does not license other overused faces.

### Hierarchy
- **Display / Poster** (display, Archivo 900, 62% width, uppercase, line-height 0.8): the hero name stack, the contact plate word, marquee words, the footer signature, the mobile menu links, the manifesto's ghost word, the hero stat figure, the preloader count. It is decorative and `aria-hidden` wherever it repeats a heading. Contact display size is fitted to the word's letter count (capped at 24rem).
- **Case Name** (display-case-name): the case cover's h1, fitted to its longest word (see The Fitted Poster Name Rule), capped at clamp(4.5rem, 11vw, 14rem) on desktop and 17vw on mobile. The next-project name uses the same fit with a larger cap (clamp(5rem, 15vw, 18rem)); the index title "PROYECTOS"/"PROJECTS" is fitted against clamp(5.5rem, 17vw, 20rem) at line-height 0.78.
- **Card Name** (Archivo, line-height 0.84): project names on index cards, sized by the card's span: clamp(3.6rem, 8vw, 9rem) on the full-width card, clamp(3.4rem, 6vw, 7rem) on 7 columns, clamp(2.8rem, 4.6vw, 5.5rem) by default, clamp(2.6rem, 3.6vw, 4rem) on 4 columns, and clamp(2.6rem, 5vw, 5rem) in list view.
- **Project Name** (display-name): the work poster's project heading, a real h3. Deliberately smaller than the hero's 15.5vw so two-word names fit on one poster without breaking; 17vw on mobile, where it stacks freely.
- **Figure** (display-figure, tabular): the figures plate numbers, real `dd` values with a count-up. The lead figure steps up to clamp(7rem, 20vw, 22rem).
- **Row Name** (display-row, line-height 0.86): archive project names inside the row link.
- **Numerals** (Archivo, aria-hidden): process station numbers (clamp(4rem, 7vw, 7rem), turquoise), capability ticket numbers (clamp(8rem, 16vw, 15rem), pale turquoise tone), work poster numbers (clamp(14rem, 30vw, 34rem), 9% tone, parallax), the work intro count (clamp(14rem, 34vw, 40rem), gunmetal-soft), the case cover number (clamp(16rem, 36vw, 42rem), 9% tone, gunmetal-soft on gunmetal) and the index count (clamp(12rem, 30vw, 34rem), gunmetal-soft).
- **Statement** (Geist 700, clamp(2.6rem, 1.4rem + 5.6vw, 7.5rem), line-height 0.98, -0.04em): the manifesto statement on gunmetal. Accent words switch to orange.
- **Headline Large** (Geist 700, step 4, line-height 0.98, -0.04em): section headings such as the contact title.
- **Headline** (Geist 700, step 3, line-height 1, -0.035em): the hero H1, which carries the accessible meaning of the poster name.
- **Title** (Geist 700, step 2, line-height 1.15, -0.03em): ticket values and short data headings.
- **Body Large** (Geist 400, step 1, line-height 1.4–1.45, max 34–38ch): manifesto and contact body copy.
- **Body** (Geist 400, step 0, line-height 1.55, max ~40ch for leads): default reading text. Headings use `text-wrap: balance` and paragraphs use `pretty`.
- **Nav** (Geist 500, step -1): header links, with a 1.5px underline that wipes in from the left.
- **Label / Folio** (Geist Mono, step -2, 0.06–0.08em tracking, uppercase, tabular numerals): folios, ticket field labels, the language switch, browser-bar captions, preloader meta.

### Named Rules
**The Poster-Only Rule.** Archivo appears only at poster scale, at 62% width, weight 900 and uppercase: giant display words, project names (work poster headings, archive row names, case cover and next-project names, index card and list names), figures, and giant numerals (process stations, capability tickets, work posters). A project name or figure may be the accessible text itself when it is a name or a number, not a sentence. Never use Archivo for running text, buttons, small UI, or anything under 2.6rem. The one sub-scale exception is the type-specimen card in the About collage, which shows the face as a sample inside an `aria-hidden` illustration.

**The Breathing Width Rule.** Poster lines marked `data-breathe` (hero name, work project names and their swap copies, figures) widen with scroll velocity, from 62% up to 72% width, then ease back. The shared velocity decays to zero once Lenis stops, so every breathing line returns to 62% at rest. Width is the only axis that breathes. Weight and size stay fixed.

**The Fitted Poster Name Rule.** A poster name that has to hold a column is sized to its longest word, never broken mid-word: `font-size: min(role cap, k / (longest word length × 0.5) vw)`, where 0.5 approximates one Archivo character at 62% width in em and k is the width in vw the longest word may take (case cover 37 desktop and 88 mobile, next-project name 52, index title 88). The value is computed at build time into `--fit` (and `--fit-m` for mobile), so a one-word name and a three-word name land at the widest size that keeps every word whole. Single-word display lines that run the full plate use the same idea against their total length (the case CTA word: min(82 / (length × 0.6) vw, 22rem); the contact word, capped at 24rem). Any char cascade on a fitted name splits as words plus chars (`type: 'words,chars'`), so each word stays an unbreakable box when lines are set.

**The Corner Folio Rule.** Folios ("02 · MANIFIESTO") live in a corner of the plate (top right, at the gutter) or along the margin, prefixed by a registration-mark glyph drawn in CSS. They are never eyebrows stacked above a heading. Inline mono labels next to data, such as "WhatsApp" before the phone number, are fine.

## Layout

Plates are full-bleed and edge to edge. Content sits inside a fluid gutter (clamp(1rem, 0.5rem + 2.4vw, 3rem)), and the vertical rhythm runs on a fluid scale from 2xs to 2xl. Plates open with generous top padding (clamp(4.5–5rem, 10–14svh, 7–9rem)) and close on the 2xl step. The header is fixed at 4.5rem: a three-column grid with the M logo and name, centred links, then the language switch and orange CTA. It hides on scroll down and turns solid cream (94%) with a hairline once the page leaves the hero.

The hero is a 100svh stage built from absolutely positioned layers driven by custom properties: the field starts at 59vw, the M window is anchored bottom right and straddles the cream/turquoise seam, and the name stack starts under the header with its second line indented 17vw. The H1 copy block sits bottom left at min(36vw, 36rem). The manifesto uses a 12-column grid: the statement spans 11 columns and the aside starts at column 6.

Phase 2 plates run on the same gutter and open on the 2xl step. Work is a pinned horizontal track on desktop: a 58vw gunmetal intro, then 88vw x 100svh project posters in a 0.9fr / 1.1fr text-and-media grid, scrubbed by vertical scroll. Archive and capabilities use a two-column head (title, then lead aligned to the bottom). The figures plate is a constructivist 12-column staircase: each figure takes a 6–7 column span and steps down and across (columns 1, 6, 2). Process sets four stations across the route, alternating high and low to follow the curve. About pairs the copy with a 4:5 collage, then a 1.7fr / 1fr lower band of principles and the tools label under a 1.5px rule.

Phase 3 pages run on the same gutter. The case cover is a 100svh plate on a 0.85fr / 1.15fr grid: the text column holds the fitted name, a Geist 600 summary (step 2, max 24ch) and a mono category line; the media column holds the cover frame. A mono back link sits top left and the corner folio top right, both just under the header, and the giant case number bleeds off the lower right behind the frame. The brief is a 0.9fr / 1.4fr cream plate: a sticky sheet column (top at the header plus the m step) and the reading column (Geist headings at step 3, a step-2 lead at max 34ch, step-1 body in ink-soft at max 52ch). "What we built" is a two-column numbered list under 1px cream 22% rules. Views is a two-column head over a stage padded 14% on the right so the phone can overhang. The CTA is a full-width fitted word above a 1fr / 1fr grid of copy and ticket. The next-project plate is 80svh on a 1.2fr / 0.8fr grid. The projects index opens with the fitted title over the tonal count, then a control bar ruled top and bottom (filters left, Grid/List right), then a 12-column dense grid where cards repeat the span sequence 7/5, 5/7, 12, 4/4/4; the 12-column card composes horizontally (1.3fr image, 1fr text). Under 860px every Phase 3 grid goes to one column, the sheet stops sticking, the case phone grows to 34% and the views stamp is dropped.

Breakpoints: 1180px (copy block narrows and the name indent drops to 12vw), 860px (mobile: the header collapses to logo plus menu button, the M window moves to the top, the field becomes a top band, then the name stack, H1 and buttons; grids go to one column; work becomes a vertical stack of posters with the image first; capability tickets stop sticking and stack the stub under the body; the process route turns into a vertical dashed line with stations on it; figures go full width), 640px (ticket and footer stack), 520px (about principles go to one column and lose their stagger).

## Elevation & Depth

The system is flat paper at rest. Depth comes from layering plates, parallax (pointer-driven layers in the M window, scroll-driven name and field), duotone plate offsets, and the M as an aperture into a deeper gunmetal space. Shadows are soft, gunmetal-tinted and reserved for objects that sit on the paper. Plates themselves never cast them.

### Shadow Vocabulary
- **Button lift** (`box-shadow: 0 10px 24px -12px rgb(29 39 48 / 0.55)`): hover on orange and cream buttons only.
- **Ticket drop** (`filter: drop-shadow(0 18px 30px rgb(29 39 48 / 0.28))`): the boarding ticket, which uses drop-shadow so the shadow follows the notched mask.
- **Screen float** (`box-shadow: 0 30px 50px -20px rgb(0 0 0 / 0.55)`): project screens floating inside the gunmetal M window.
- **Object drop** (`0 24px 40px -22px` to `0 40px 60px -30px`, gunmetal at 0.5–0.6): Phase 2 objects on the paper, from the tools label (lightest) through collage cards, capability tickets, the phone mockup and archive cursor shots up to the work browser frame. Larger object, deeper drop.
- **Cover drop** (`box-shadow: 0 40px 70px -30px rgb(29 39 48 / 0.6)`, 0.55 on the views frame): the deepest step, for the case cover frame and the views desktop frame. Index card covers take `0 24px 40px -24px` at 0.55; the next-project cover `0 30px 50px -25px` at 0.55.
- **Header hairline** (`box-shadow: 0 1px 0 rgb(29 39 48 / 0.12)`): the solid header state.

### Named Rules
**The Flat Plate Rule.** Plates and type never carry shadow, glow or bevel. Only physical objects resting on the paper (tickets, buttons on hover, browser frames, phones, collage cards, paper labels, floating screens) get a soft, negative-spread shadow tinted toward gunmetal.

**The Covered Ticket Rule.** In the capability stack, depth is shown by scale, not shadow: as the next ticket slides over, the covered one scales back (about 0.94, less for each deeper ticket), lifts 4%, and fades its title, description and stub, leaving only its edge and giant numeral visible.

## Shapes

Corners are nearly square, on a five-step radius scale:
- **s (3px):** buttons, the skip link, button icon chips, tag chips, filter chips, the index card arrow box, the archive arrow box, the work progress chip, palette swatches, the tools paper label.
- **frame (6px):** browser frames (hero screens, work posters) and archive cursor-follow shots.
- **m (10px):** tickets (boarding, compact and capability tickets), collage cards and project cards on the index (squared to 0 in list view). Tickets carry semicircular notches (0.9–1rem) cut by a mask at the stub line and a 2px dashed perforation.
- **device (14px):** the phone mockup, inside a 5px gunmetal bezel.
- **arch (999px 999px 8px 8px):** the about collage arch, a window shape with a round top and nearly square feet. Circles are reserved for printer's marks: stamps, the cursor dot, the sun disc, the orbit planet and registration marks. The M silhouette (`/brand/m.svg`) is the system's signature shape, used as a CSS mask for the logo, the hero window, the inverse name layer and the preloader halves. Linework runs 1–1.5px in currentColor; routes and perforations run 2px, dashed where they are a path not yet taken.

## Components

### Buttons
Solid, square-shouldered print blocks with a rolling label.
- **Shape:** near-square (rounded.s, 3px), min-height 3.25rem (2.6rem in the header), with a trailing 2rem icon chip tinted 12% of the label colour.
- **Ink (primary):** gunmetal with cream label, Geist 600. "Ver proyectos" and the WhatsApp CTA.
- **Orange:** orange with gunmetal label. "Hablemos" in the header and hero.
- **Cream:** cream with gunmetal label, for use on dark or colour plates.
- **Line:** transparent with an inset 1.5px currentColor stroke, for secondary actions such as email.
- **Hover / Focus:** the label rolls up to a duplicate copy, the arrow rotates 45deg, ink deepens to gunmetal-soft, and orange and cream lift with the button shadow. Buttons are magnetic toward the pointer on fine pointers, and `:active` scales to 0.98. Focus is a 2px orange outline at 4px offset, which switches to gunmetal on cream, orange and turquoise plates.

### Navigation
- **Header:** fixed, transparent over the hero and solid cream once scrolled. Links are Geist 500 at step -1 with a left-origin 1.5px underline wipe. The ES/EN switch is a Geist Mono box with a 1px inset stroke.
- **Header on dark:** a page whose first plate is dark sets `headerOnDark` on the layout (the projects index, and case pages whose tone is gunmetal). Until the header turns solid, its text is cream and the menu button inverts to a cream square with a gunmetal icon; once solid it returns to the standard cream bar with gunmetal ink. The header carries `view-transition-name: site-header` and its transition group is not animated, so it stays put while pages wipe beneath it.
- **Language switch:** the ES/EN link (header, mobile menu and footer) points to the equivalent page in the other locale through the layout's `alternate` pair, not to the other home.
- **Mobile (860px and below):** a gunmetal square menu button opens a full-screen menu that clips down from the top, with poster links (clamp(3.6rem, 17vw, 7rem)) rising line by line and a mono foot row.

### Stamp (signature)
A circular printer's stamp. Two 1.5px rings, a Geist Mono text ring set on a path, and an orange four-point star at the core. It spins continuously, faster as scroll speeds up, and lands in the hero with a back-out spin. Tones: ink (cream disc), cream (transparent) and orange (orange disc with a gunmetal star). It is always `aria-hidden` and sits on a seam or overlaps an object's corner.

### Ticket (signature)
The boarding ticket for the contact close. A cream body with a two-column dl (mono uppercase labels in ink-soft, Geist 700 title values), plus a 6.5rem stub with an orange star, a vertical mono code and a barcode, behind a dashed perforation with notches. It sits rotated -3deg, tilts in 3D toward the pointer (±7deg), and the whole ticket is one link to WhatsApp. The case CTA reuses it as a boarding pass (reference, destination, gate) linked to WhatsApp, rotated -3deg (-2deg on mobile).
- **Compact variant:** one column instead of two, values at step 1 with -0.02em tracking, for technical sheets whose values run long (client, category, year only when confirmed, stack). Its stub code reads the case label and number ("CA/02").

### Marquee
A full-bleed plate band between 1.5px gunmetal rules, carrying poster words (clamp(3.5rem, 9vw, 9rem)) separated by stars. Stars are cream on orange plates and orange on gunmetal. It loops in 28s, skews up to ±8deg with scroll velocity, and wraps into static lines under reduced motion.

### M Window and Portal M (signature)
The hero's M-shaped mask over a gunmetal interior holds three duotone project screens in browser frames, the orange halftone sun and cream orbit lines, each layer moving in pointer parallax. The window enters by clipping upward, and the name layer inside it turns cream. On scroll, the Portal M scales the window through itself while the field slides out right and a gunmetal veil comes up, landing on the gunmetal manifesto plate.

### Preloader M
A gunmetal screen where the M splits into an orange left half and a turquoise right half that slide together. Above a mono meta row, an Archivo orange counter counts up. The M then scales 26x from its 11%/72% origin, matching the window, to reveal the hero.

### Cursor
On fine pointers only: a 12px orange dot. It grows 2.6x and turns turquoise over interactive elements, and grows 7.5x with a gunmetal mono label (for example "WhatsApp") on labelled targets.

### Print-registration imagery ("Imprenta")
Grayscale images under two plates, orange multiply and deep turquoise screen: contrast 1.15 with plates at 0.85 / 0.7 in the hero, contrast 1.12 with plates at 0.8 / 0.6 on work posters, case covers, index cards and the next-project cover. On hover the plates fade and the image returns to true colour (index cards also scale the image to 1.04). On entrance, the plates slide from offset (±18% x, ±6% y) into register while the frame rises 60px and settles its rotation.

### Work Poster (signature)
Each featured project is one full-bleed plate in a fixed rotation: orange, turquoise, cream, gunmetal, orange. A gunmetal intro panel opens the track with the giant project count in gunmetal-soft, the section heading, lead and a drag hint in orange mono.
- **Text column:** the Archivo project name (h3, gunmetal; orange on the gunmetal poster), a Geist 600 summary at step 2, a mono category line with the credit appended, mono tag chips with a 1px inset stroke, then Ink and Line buttons (Orange and Line on the gunmetal poster).
- **Media:** an Imprenta browser frame (cream, frame radius, rotated 2deg, mono domain caption set to the right so the name can cross the start of the bar) with CSS registration marks at two corners, and a true-colour phone mockup overlapping the lower right (22% wide, rotated 6deg) that rises in with a counter-spin.
- **Furniture:** a corner folio reading "01 / 05", and a giant tonal number at the lower left that drifts against the track (parallax ±30%).
- **Motion:** pinned horizontal track scrubbed by scroll (scrub 0.6); prints register as each panel enters via containerAnimation; the name's cream swap copy is clipped to the screenshot. A cream progress chip (current / total, 8rem orange fill bar) sits at the lower left while the track is active.
- **Mobile and reduced motion:** posters stack vertically, image first, with no pin and no swap layer.

### Archive List
A cream plate with a ruled list: 1.5px gunmetal rules above and between rows. Each row is one link holding a mono number, the Archivo row name, a mono category and credit line, and a 3rem arrow box with an inset stroke. On hover the number turns orange and the arrow box fills gunmetal and turns 45deg. On fine pointers a cursor-follow float (frame radius, clamp(16rem, 24vw, 24rem), 3:2) shows the hovered project's screenshot, trailing the pointer and tilting up to ±10deg with horizontal speed. A text link with a 1.5px underline that retracts to 30% on hover closes the list.

### Capability Ticket Stack (signature)
A turquoise plate with a cream Stamp tilted 10deg at the head's upper right. Each service is a cream ticket (rounded m, notched at 61.5%) split 1.6fr / 1fr: the main part holds a giant pale-turquoise numeral at the upper right, a Geist title at step 3 and description; the perforated stub (2px dashed) carries the mono label "Lo que recibes" / "What you get" and deliverables marked with orange four-point stars. On desktop the tickets stick under the header, each offset 1.6rem lower, and covered tickets scale back and fade their content so only the edge and numeral remain. Under 860px and under reduced motion they stack normally, notches drop and the perforation moves to the top of the stub.

### Process Route (signature)
A gunmetal plate with radar linework (four concentric circles, one dotted, and crosshairs, turquoise at 35%) bleeding off the right edge. A dotted cream ghost route carries a solid 2px orange route that draws with scroll. Four stations sit along the curve, each with a dot (gunmetal with turquoise ring, turning orange and scaling 1.35 when lit), a turquoise Archivo numeral, a Geist title at step 2 and cream-turquoise body copy. Stations light in sequence and rise in with a short stagger. Under 860px the route becomes a vertical 2px dashed line with the dots on it.

### Figures Steps
An orange plate with up to four figures set as a constructivist staircase. Each step is a gunmetal 1.5px top rule, the Archivo figure (with optional "+" prefix) and a Geist 600 label at step 1 beside it. Figures breathe with scroll and count up from zero once on entry. A cream and a gunmetal four-point star float in the margins.

### About Collage (signature)
A cream plate. The collage is `aria-hidden` and built from the system's own materials: an arch (turquoise → deep turquoise → gunmetal) holding an orange halftone sun and two cream orbit ellipses, plus three rotated cards (palette swatches, a type specimen, a gunmetal code card with turquoise and orange syntax). Each layer moves at its own depth with scroll. Below a 1.5px rule, the principles are a 2x2 grid of ink Stamps (7.5rem) whose ring text repeats the principle word, tilted -8deg and 7deg and staggered 3.5rem on even items, each beside a Geist title and body. The tools list sits on a cream-deep paper label rotated -1.5deg, with a mono title over a dashed rule and starred items in two columns.

### Case Dossier (signature)
The home poster opened into a printed dossier, one per project, in the project's tone.
- **Cover:** the fitted Archivo name (h1, gunmetal; orange on gunmetal), summary and mono category with credit; an Imprenta browser frame (frame radius, rotated 1.5deg, mono domain caption right-aligned, cover drop) carrying the shared cover name; a mono back link to the index with a reversed arrow that nudges left on hover; corner folio "Caso 02 / 08" / "Case 02 / 08"; the giant tonal case number.
- **Brief:** a cream plate with the compact Ticket and the Visit site (Ink) and Figma (Line) buttons in a sticky column beside the Project and Challenge headings and copy.
- **What we built:** a gunmetal plate with the ghost word set in gunmetal-soft at the bottom right (breathing), a Geist heading and a numbered list (orange mono numbers, step-1 cream items).
- **Views:** turquoise or orange plate; the desktop frame clips open from the top and its screenshot drifts inside the frame (±6%, scale 1.12, scrubbed); a true-colour phone (device radius, 6px gunmetal bezel, rotated 4deg) overhangs the lower right and rises in with a counter-spin; an ink Stamp with the project name and domain on its ring sits on the frame's upper-left corner (desktop only).
- **CTA:** a gunmetal plate with the fitted orange word (aria-hidden, breathing), the accessible Geist heading, an orange body line, the orange WhatsApp button, and the boarding Ticket.
- **Next project:** the whole plate is one link in the next case's tone: corner folio "Proyecto siguiente · 03 / 08", the fitted next name drifting in from 12% with scroll and nudging right on hover, its summary, and the next case's duotone cover (rotated 3deg, straightening on hover) carrying that case's shared cover name.

### Projects Index
A gunmetal plate with the header on dark. The fitted orange title sits over the giant tonal count, then a Geist 600 lead.
- **Filter Chips:** Geist Mono step -1 uppercase with 0.04em tracking, rounded s, an idle inset stroke in cream 45% (full cream on hover), active state solid orange with gunmetal text. Filters are built from categories that do not apply to every project. Chips are real buttons with `aria-pressed`, grouped and labelled; a Grid/List pair uses the same chip.
- **Project Card:** a toned link (data-surface by project tone, rounded m, padding m) with a mono number top right, the duotone cover at 3:2 with the shared cover name, the Archivo name, a Geist 600 summary, a mono category line and a 2.75rem square arrow box that turns 45deg on hover. The gunmetal card takes a cream 18% edge stroke so it separates from the gunmetal plate.
- **List view:** one column of ruled rows (cream 22% bottom rule): mono number, Archivo name (2.6rem minimum), mono category, arrow box. No thumbnails in the rows; on fine pointers a cursor-follow cover float (frame radius, clamp(16rem, 24vw, 24rem), 3:2) shows the hovered project, as in the Archive List.
- **Motion:** filtering and switching layout run through GSAP Flip (0.8s mc-inout; entering cards scale in from 0.92, leaving cards fade out). Under reduced motion the filters and toggle still work and apply instantly. Cards rise in batches on scroll (y 40, 0.9s, stagger 0.08).

### Content truth on Phase 2 plates
The figures plate shows only confirmed numbers; a "2 markets" figure was removed pending Mauricio's confirmation and must not return without it. Projects built while employed elsewhere carry a credit line ("Desarrollado durante mi trabajo en Naikka" / "Built while working at Naikka" on Spartan Helmets and X Sports Helmets), shown after the categories in work posters and archive rows.

### Motion grammar
Lenis smooth scroll plus GSAP. Two custom eases mirror the CSS tokens: `mc-out` (0.16, 1, 0.3, 1) and `mc-inout` (0.76, 0, 0.24, 1). Lines and characters reveal from below a clip (yPercent 105–110, 0.035–0.08 stagger), images enter in print registration (the frame clips open from the top while the plates slide ±16% into register; on hover the duotone lifts to true colour), poster width breathes, stamps spin, the marquee skews, buttons are magnetic and the cursor changes state. Phase 2 adds the pinned horizontal work track, the sticky ticket stack, the drawn process route, figure count-ups and scroll depth in the about collage. Phase 3 adds the case cover intro (name chars cascading in from 105% with a 0.03 stagger, the cover image settling from 1.15 while the plates register from ±16% x / ±5% y), the cascading built list, the views clip reveal and inner parallax, the phone entry, the next-name drift, index Flip filters and card batch reveals, and cross-document page transitions. Scroll-scrubbed effects use linear ease by design; everything else uses the token eases. All of it lives in its own module, is created only when motion is allowed, and the pinned and sticky layouts fall back to plain stacks without it. Fine grain shifts in 6 steps every 1.1s. Under `prefers-reduced-motion`, Lenis and every timeline are skipped, the grain stops, and the content stands complete without JS.

**The Plate Wipe Rule.** Page changes are cross-document View Transitions (`@view-transition { navigation: auto }`): the new page enters as a plate wiping up from the bottom (clip-path inset(100% 0 0 0) to inset(0), 0.9s on the mc-inout curve) while the old page holds still beneath it. The header is excluded and stays fixed. Under `prefers-reduced-motion` navigation transitions are switched off, and transitions the browser skips (reload, hidden tab) are silenced rather than reported as errors.

**The Shared Cover Rule.** Every place a project's cover is shown as the project's primary image carries `view-transition-name: cover-<slug>`: the home work poster frame, the index card cover, the case cover frame, and the next-project cover. A name appears at most once per page, so cursor-follow floats (archive, index list) never carry it, and a case page's own cover and its next-project cover always name different slugs. Between pages, the matching cover morphs on the same 0.9s mc-inout curve as the plate wipe.

## Do's and Don'ts

### Do:
- **Do** set every section as a full-bleed plate through `data-surface` (cream, turquoise, orange or gunmetal) with `.grain` under the content.
- **Do** set reading text and button labels in gunmetal on orange and turquoise plates.
- **Do** keep cream-on-orange, cream-on-turquoise and orange-on-cream (~2.5–2.6:1) for giant `aria-hidden` poster display only, with the same message in an accessible Geist heading.
- **Do** use Archivo only at poster scale (2.6rem and up): display words, project names, figures and giant numerals, at weight 900, 62% width, uppercase, line-height 0.78–0.86.
- **Do** switch poster letters to cream where they cross an image or field with a clipped `aria-hidden` copy, keeping the real name whole.
- **Do** pick radii from the scale by object: s for chips and buttons, frame for browser frames and shots, m for tickets and cards, device for phones, arch for the about arch.
- **Do** use Geist for everything read and Geist Mono for folios, data labels and stamp text.
- **Do** place folios in the plate corner (top right at the gutter) or along the margin, with the CSS registration mark.
- **Do** take ornament from the world's own furniture: stamps, ticket stubs, 1–1.5px orbit lines, four-point stars, registration marks, the M silhouette.
- **Do** finish imagery as duotone print plates (orange multiply plus deep-turquoise screen over grayscale).
- **Do** use `mc-out` for entrances and `mc-inout` for wipes and portals, and ship a complete reduced-motion state.
- **Do** give each project its tone by order (orange, turquoise, cream, gunmetal) and carry that tone to every surface that shows the project.
- **Do** fit poster names to their longest word through `--fit`, and split any char cascade on them as words plus chars.
- **Do** put `view-transition-name: cover-<slug>` on every primary appearance of a project's cover, once per page.
- **Do** set `headerOnDark` when a page opens on a dark plate, and point the language switch to the same page in the other locale.

### Don't:
- **Don't** use cream or orange text on colour plates for body copy, buttons, links or labels.
- **Don't** use Archivo for running text, buttons or small UI, or swap Geist for another system face.
- **Don't** hide or mask out letters of a poster name to make it fit over an image; resize the name or swap its colour.
- **Don't** put a folio, kicker or eyebrow label above a heading.
- **Don't** use 3D or extruded type, gradient-filled text, or glow halos around type or UI. Colour light lives only as soft gradients inside a plate's field.
- **Don't** bring in colours from outside the five-colour palette. Derive tints with oklab `color-mix`.
- **Don't** use worn textures, dry brush, speed lines, decorative rays or brush underlines.
- **Don't** put shadows on plates or type. Shadows belong only to objects resting on the paper.
- **Don't** show photos of Mauricio; imagery is the work and surreal, content-tied illustration.
- **Don't** break a poster name mid-word or let a split cascade break it; resize it with the fit instead.
- **Don't** repeat a `cover-<slug>` view-transition name on one page; a duplicate aborts the morph.

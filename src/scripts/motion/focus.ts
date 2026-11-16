/* ==========================================================================
   Lo que se revela con el scroll nunca queda fuera del teclado.
   Los revelados animan opacity (no visibility, que saca del orden de tabulación)
   y, si el foco llega antes que el scroll, el elemento se muestra al instante.
   ========================================================================== */

import gsap from 'gsap';

export function showOnFocus(els: Iterable<Element>) {
  for (const el of els) {
    el.addEventListener('focusin', () => {
      gsap.getTweensOf(el).forEach((t) => t.progress(1));
      gsap.set(el, { opacity: 1, y: 0 });
    });
  }
}

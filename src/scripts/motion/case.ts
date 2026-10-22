/* ==========================================================================
   Movimiento de los casos de estudio y del índice de proyectos (Fase 3)
   ========================================================================== */

import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(Flip);

const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const $ = (sel: string, root: ParentNode = document) => root.querySelector<HTMLElement>(sel);
const $$ = (sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<HTMLElement>(sel));

/* ---------- Intro de la portada (caso o índice) ---------- */
export function prepareCaseIntro() {
  const name = $('[data-case-name]');
  if (!name) return null;
  const tl = gsap.timeline({ paused: true, defaults: { ease: 'mc-out' } });
  // words + chars: cada palabra queda indivisible al ajustar líneas
  const chars = SplitText.create(name, { type: 'words,chars', mask: 'chars', charsClass: 'ch' }).chars;
  tl.from(chars, { yPercent: 105, duration: 1.1, stagger: 0.03 }, 0);

  const cover = $('[data-case-cover]');
  const print = cover?.querySelector<HTMLElement>('[data-print]');
  if (cover && print) {
    const [a, b] = $$('.print__plate', print);
    // Solo escritorio: escala y planchas con blend repintan la imagen en cada frame.
    if (finePointer) {
      tl.from(print.querySelector('img'), { scale: 1.15, duration: 1.6 }, 0)
        .from(a, { xPercent: -16, yPercent: 5, duration: 1.4 }, 0.2)
        .from(b, { xPercent: 16, yPercent: -5, duration: 1.4 }, 0.2);
    }
  }
  return tl;
}

/* ---------- Caso de estudio ---------- */
export function initCase() {
  const root = $('[data-case]');
  if (!root) return;

  // Lo que construimos: los puntos entran en cascada
  const list = $('[data-built-list]', root);
  if (list) {
    gsap.from(list.children, {
      y: 30,
      autoAlpha: 0,
      duration: 0.9,
      stagger: 0.07,
      ease: 'mc-out',
      scrollTrigger: { trigger: list, start: 'top 80%', once: true },
    });
  }

  // Vistas: la captura se abre y se desplaza dentro de su marco; el móvil sube
  const desktop = $('[data-views-desktop]', root);
  const img = $('[data-views-img]', root);
  const phone = $('[data-views-phone]', root);
  if (desktop) {
    gsap.from(desktop, {
      clipPath: 'inset(0% 0% 100% 0%)',
      duration: 1.3,
      ease: 'mc-inout',
      clearProps: 'clipPath',
      scrollTrigger: { trigger: desktop, start: 'top 80%', once: true },
    });
  }
  if (img && finePointer) {
    gsap.fromTo(
      img,
      { yPercent: -6, scale: 1.12 },
      { yPercent: 6, scale: 1.12, ease: 'none', scrollTrigger: { trigger: desktop ?? img, start: 'top bottom', end: 'bottom top', scrub: true } },
    );
  }
  if (phone) {
    gsap.from(phone, {
      yPercent: 30,
      rotate: 14,
      autoAlpha: 0,
      duration: 1.2,
      ease: 'mc-out',
      scrollTrigger: { trigger: phone, start: 'top 95%', once: true },
    });
  }

  // Proyecto siguiente: el nombre avanza con el scroll
  const next = $('[data-case-next]', root);
  const nextName = next?.querySelector<HTMLElement>('.case-next__name');
  if (next && nextName) {
    gsap.fromTo(nextName, { xPercent: 12 }, { xPercent: 0, ease: 'none', scrollTrigger: { trigger: next, start: 'top bottom', end: 'top 30%', scrub: true } });
  }
}

/* ---------- Índice: filtros y vista con Flip ---------- */
export function initProjectsIndex(reduce: boolean) {
  const root = $('[data-pindex]');
  const list = $('[data-pindex-list]', root ?? document);
  if (!root || !list) return;
  const cards = $$('[data-flip-id]', list);
  const empty = $('[data-pindex-empty]', root);

  const animate = (change: () => void) => {
    if (reduce) return change();
    const state = Flip.getState(cards, { props: 'borderRadius' });
    change();
    Flip.from(state, {
      duration: 0.8,
      ease: 'mc-inout',
      absolute: true,
      nested: true,
      onEnter: (els) => gsap.fromTo(els, { autoAlpha: 0, scale: 0.92 }, { autoAlpha: 1, scale: 1, duration: 0.6, ease: 'mc-out' }),
      onLeave: (els) => gsap.to(els, { autoAlpha: 0, scale: 0.92, duration: 0.4 }),
      onComplete: () => ScrollTrigger.refresh(),
    });
  };

  const setPressed = (group: HTMLElement[], active: HTMLElement) =>
    group.forEach((b) => {
      const on = b === active;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    });

  const filters = $$('[data-filter]', root);
  filters.forEach((btn) =>
    btn.addEventListener('click', () => {
      const f = btn.dataset.filter!;
      setPressed(filters, btn);
      animate(() => {
        let visible = 0;
        cards.forEach((card) => {
          const cats: string[] = JSON.parse(card.dataset.cats || '[]');
          const show = f === '*' || cats.includes(f);
          card.hidden = !show;
          if (show) visible++;
        });
        if (empty) empty.hidden = visible > 0;
      });
    }),
  );

  const views = $$('[data-view]', root);
  views.forEach((btn) =>
    btn.addEventListener('click', () => {
      setPressed(views, btn);
      animate(() => (list.dataset.layout = btn.dataset.view));
    }),
  );

  const float = $('[data-index-float]', root);
  if (float && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const fx = gsap.quickTo(float, 'x', { duration: 0.7, ease: 'power3.out' });
    const fy = gsap.quickTo(float, 'y', { duration: 0.7, ease: 'power3.out' });
    gsap.set(float, { xPercent: -50, yPercent: -60 });
    const shots = $$('[data-index-shot]', float);
    root.addEventListener('pointermove', (e) => {
      fx(e.clientX);
      fy(e.clientY);
    });
    $$('[data-index-row]', root).forEach((row) => {
      const shot = shots.find((s) => s.dataset.indexShot === row.dataset.indexRow);
      row.addEventListener('pointerenter', () => {
        if (list.dataset.layout !== 'list') return;
        gsap.to(shots, { autoAlpha: 0, duration: 0.25, overwrite: true });
        if (shot) gsap.to(shot, { autoAlpha: 1, duration: 0.45, ease: 'mc-out', overwrite: true });
      });
      row.addEventListener('pointerleave', () => shot && gsap.to(shot, { autoAlpha: 0, duration: 0.3, overwrite: true }));
    });
  }

  if (!reduce) {
    gsap.set(cards, { y: 40, autoAlpha: 0 });
    ScrollTrigger.batch(cards, {
      start: 'top 92%',
      once: true,
      onEnter: (batch) => gsap.to(batch, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.08, ease: 'mc-out' }),
    });
  }
}

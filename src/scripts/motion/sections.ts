/* ==========================================================================
   Movimiento de las láminas del Inicio (Fase 2)
   Se llama desde main.ts solo con movimiento permitido.
   ========================================================================== */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const $ = (sel: string, root: ParentNode = document) => root.querySelector<HTMLElement>(sel);
const $$ = (sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<HTMLElement>(sel));
const html = document.documentElement;
const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ---------- Imprenta: las planchas se registran al entrar ---------- */
function printIn(print: HTMLElement, trigger: ScrollTrigger.Vars) {
  const [a, b] = $$('.print__plate', print);
  const frame = print.closest<HTMLElement>('figure') ?? print;
  const tl = gsap.timeline({ defaults: { ease: 'mc-out' }, scrollTrigger: { ...trigger, once: true } });
  tl.from(frame, { clipPath: 'inset(0% 0% 100% 0%)', duration: 1.2, ease: 'mc-inout', clearProps: 'clipPath' }, 0)
    .from(print.querySelector('img'), { scale: 1.2, duration: 1.6 }, 0)
    .from(a, { xPercent: -16, yPercent: 5, duration: 1.4 }, 0.15)
    .from(b, { xPercent: 16, yPercent: -5, duration: 1.4 }, 0.15);
  return tl;
}

/* ---------- 03 · Trabajo seleccionado: recorrido horizontal ---------- */
export function initWork() {
  const section = $('[data-work]');
  if (!section) return;
  const pin = $('[data-work-pin]', section)!;
  const track = $('[data-work-track]', section)!;
  const panels = $$('[data-work-panel]', section);
  const current = $('[data-work-current]', section);
  const fill = $('[data-work-fill]', section);

  // Las capturas fuera de pantalla se piden antes de llegar: el recorrido no muestra marcos vacíos.
  ScrollTrigger.create({
    trigger: section,
    start: 'top 250%',
    once: true,
    onEnter: () => $$('img[loading="lazy"]', section).forEach((img) => ((img as HTMLImageElement).loading = 'eager')),
  });

  const mm = gsap.matchMedia();

  mm.add('(min-width: 861px)', () => {
    html.classList.add('has-hscroll');
    const swaps = panels.map((panel) => setupNameSwap(panel)).filter(Boolean) as (() => void)[];
    const updateSwaps = () => swaps.forEach((fn) => fn());
    ScrollTrigger.addEventListener('refresh', updateSwaps);
    const distance = () => track.scrollWidth - window.innerWidth;

    const move = gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        pin,
        start: 'top top',
        end: () => `+=${distance()}`,
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const idx = Math.min(panels.length, Math.max(1, Math.round(self.progress * panels.length + 0.4)));
          if (current) current.textContent = String(idx).padStart(2, '0');
          if (fill) gsap.set(fill, { scaleX: self.progress });
        },
      },
    });

    panels.forEach((panel) => {
      const print = $('[data-print]', panel);
      if (print) printIn(print, { trigger: panel, containerAnimation: move, start: 'left 70%' });
      gsap.from($('[data-work-phone]', panel), {
        yPercent: 40,
        rotate: -16,
        autoAlpha: 0,
        duration: 1.2,
        ease: 'mc-out',
        scrollTrigger: { trigger: panel, containerAnimation: move, start: 'left 55%', once: true },
      });
      // El número del cartel se desliza más lento que el panel (parallax dentro del recorrido)
      gsap.fromTo(
        $('.work__num', panel),
        { xPercent: 30 },
        { xPercent: -30, ease: 'none', scrollTrigger: { trigger: panel, containerAnimation: move, start: 'left right', end: 'right left', scrub: true } },
      );
    });

    ScrollTrigger.refresh();
    updateSwaps();
    return () => {
      ScrollTrigger.removeEventListener('refresh', updateSwaps);
      $$('.work__name--swap', section).forEach((el) => el.remove());
      html.classList.remove('has-hscroll');
    };
  });

  mm.add('(max-width: 860px)', () => {
    panels.forEach((panel) => {
      const print = $('[data-print]', panel);
      if (print) printIn(print, { trigger: panel, start: 'top 80%' });
    });
  });
}

/*
 * Cambio de color del nombre-cartel: una copia crema, alineada con el nombre,
 * se recorta al rectángulo de la captura. Las letras que cruzan la imagen pasan a crema
 * sin ocultar ninguna. Se recalcula en cada refresh (el panel se mueve entero).
 */
function setupNameSwap(panel: HTMLElement) {
  const name = $('[data-work-name]', panel);
  const frame = $('[data-work-media] .print', panel);
  if (!name || !frame) return null;
  const swap = document.createElement('p');
  swap.className = `${name.className} work__name--swap`;
  swap.setAttribute('aria-hidden', 'true');
  swap.setAttribute('data-breathe', '');
  swap.removeAttribute('id');
  swap.textContent = name.textContent;
  for (const attr of name.getAttributeNames()) if (attr.startsWith('data-astro-cid')) swap.setAttribute(attr, '');
  name.after(swap);

  // La copia no adivina los saltos de línea por ancho (un redondeo de píxel bastaba para
  // partir distinto): lee las líneas que el navegador hizo en el nombre y las reproduce tal cual.
  swap.style.whiteSpace = 'nowrap';
  swap.style.width = 'auto';
  swap.style.maxWidth = 'none';
  let lastLines = '';
  const readLines = () => {
    const text = name.firstChild;
    if (!text || text.nodeType !== Node.TEXT_NODE) return [name.textContent ?? ''];
    const value = text.textContent ?? '';
    const lines: string[] = [];
    let lineTop: number | null = null;
    let current = '';
    const range = document.createRange();
    let start = 0;
    for (const word of value.split(' ')) {
      range.setStart(text, start);
      range.setEnd(text, start + word.length);
      const top = Math.round(range.getBoundingClientRect().top);
      if (lineTop === null || Math.abs(top - lineTop) < 4) current = current ? `${current} ${word}` : word;
      else {
        lines.push(current);
        current = word;
      }
      lineTop = lineTop === null || Math.abs(top - lineTop) >= 4 ? top : lineTop;
      start += word.length + 1;
    }
    lines.push(current);
    return lines;
  };

  const update = () => {
    swap.style.left = `${name.offsetLeft}px`;
    swap.style.top = `${name.offsetTop}px`;
    const lines = readLines();
    const key = lines.join('\n');
    if (key !== lastLines) {
      lastLines = key;
      swap.replaceChildren(...lines.flatMap((line, i) => (i ? [document.createElement('br'), line] : [line])));
    }
    const n = name.getBoundingClientRect();
    const f = frame.getBoundingClientRect();
    const top = Math.max(0, f.top - n.top);
    const left = Math.max(0, f.left - n.left);
    const right = Math.max(0, n.right - f.right);
    const bottom = Math.max(0, n.bottom - f.bottom);
    swap.style.clipPath = left >= n.width || top >= n.height ? 'inset(0 0 0 100%)' : `inset(${top}px ${right}px ${bottom}px ${left}px)`;
  };
  // Si el nombre cambia de tamaño (respiración del ancho, carga de fuentes), la copia lo sigue.
  new ResizeObserver(update).observe(name);
  return update;
}

/* ---------- 04 · Archivo: la captura sigue al cursor ---------- */
export function initArchive() {
  const section = $('[data-archive]');
  const float = $('[data-archive-float]', section ?? document);
  if (!section || !float || !finePointer()) return;

  const x = gsap.quickTo(float, 'x', { duration: 0.7, ease: 'power3.out' });
  const y = gsap.quickTo(float, 'y', { duration: 0.7, ease: 'power3.out' });
  const rot = gsap.quickTo(float, 'rotate', { duration: 0.9, ease: 'power3.out' });
  let lastX = 0;
  gsap.set(float, { xPercent: -50, yPercent: -60 });

  section.addEventListener('pointermove', (e) => {
    x(e.clientX);
    y(e.clientY);
    rot(gsap.utils.clamp(-10, 10, (e.clientX - lastX) * 0.6));
    lastX = e.clientX;
  });

  const shots = $$('[data-archive-shot]', float);
  $$('[data-archive-row]', section).forEach((row) => {
    const shot = shots.find((s) => s.dataset.archiveShot === row.dataset.archiveRow);
    row.addEventListener('pointerenter', () => {
      gsap.to(shots, { autoAlpha: 0, scale: 0.92, duration: 0.3, overwrite: true });
      if (shot) gsap.to(shot, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'mc-out', overwrite: true });
    });
    row.addEventListener('pointerleave', () => {
      if (shot) gsap.to(shot, { autoAlpha: 0, scale: 0.92, duration: 0.3, overwrite: true });
    });
  });
}

/* ---------- 05 · Capacidades: los tickets se apilan ---------- */
export function initCapabilities() {
  const items = $$('[data-cap]');
  if (items.length < 2) return;
  const mm = gsap.matchMedia();
  mm.add('(min-width: 861px)', () => {
    items.slice(0, -1).forEach((item, i) => {
      const card = item.querySelector<HTMLElement>('.cap');
      const next = items[i + 1];
      if (!card) return;
      const st = { trigger: next, start: 'top bottom', end: 'top 30%', scrub: true };
      gsap.to(card, { scale: 0.94 - (items.length - 2 - i) * 0.02, yPercent: -4, ease: 'none', scrollTrigger: st });
      gsap.to(card.querySelectorAll('.cap__title, .cap__desc, .cap__stub'), { autoAlpha: 0, ease: 'none', scrollTrigger: { ...st, start: 'top 75%', end: 'top 40%' } });
    });
  });
}

/* ---------- 06 · Proceso: la trayectoria se dibuja ---------- */
export function initProcess() {
  const section = $('[data-process]');
  if (!section) return;
  const line = section.querySelector<SVGPathElement>('[data-process-line]');
  const steps = $$('[data-process-step]', section);
  const route = $('.process__route', section) ?? section;

  if (line && line.getBBox().width > 0) {
    const length = line.getTotalLength();
    gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
    gsap.to(line, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: { trigger: route, start: 'top 75%', end: 'bottom 55%', scrub: 0.5 },
    });
  }

  steps.forEach((step, i) => {
    ScrollTrigger.create({
      trigger: route,
      start: () => `top+=${(i / steps.length) * route.offsetHeight * 0.6} 70%`,
      onEnter: () => step.classList.add('is-lit'),
      onLeaveBack: () => step.classList.remove('is-lit'),
    });
    gsap.from(step, {
      y: 40,
      autoAlpha: 0,
      duration: 1,
      ease: 'mc-out',
      delay: i * 0.08,
      scrollTrigger: { trigger: route, start: 'top 80%', once: true },
    });
  });
}

/* ---------- 07 · Cifras: contadores ---------- */
export function initStats() {
  $$('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count);
    const obj = { v: 0 };
    el.textContent = '0';
    gsap.to(obj, {
      v: target,
      duration: 1.6,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      onUpdate: () => (el.textContent = String(Math.round(obj.v))),
    });
  });
}

/* ---------- 08 · Sobre mí: el collage se separa por capas ---------- */
export function initAboutDepth() {
  $$('[data-depth-scroll]').forEach((el) => {
    const depth = parseFloat(el.dataset.depthScroll || '0');
    gsap.fromTo(
      el,
      { yPercent: depth * 100 },
      {
        yPercent: depth * -100,
        ease: 'none',
        scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  });
}

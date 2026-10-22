/* ==========================================================================
   Motor de movimiento — Mauricio Correa
   Lenis + GSAP (ScrollTrigger, SplitText, CustomEase).
   El contenido existe sin JS; aquí solo se anima encima.
   ========================================================================== */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { CustomEase } from 'gsap/CustomEase';
import Lenis from 'lenis';
import { initCase, initProjectsIndex, prepareCaseIntro } from './case';
import { initAboutDepth, initArchive, initCapabilities, initProcess, initStats, initWork } from './sections';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);
CustomEase.create('mc-out', '0.16, 1, 0.3, 1');
CustomEase.create('mc-inout', '0.76, 0, 0.24, 1');

const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T & Element>(sel) as T | null;
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll(sel)) as T[];

const html = document.documentElement;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

let lenis: Lenis | null = null;
let velocity = 0; // velocidad de scroll suavizada, compartida por varios efectos

export function boot() {
  initMenu();
  initHeader();
  initCopy();
  // Los filtros del índice funcionan también con movimiento reducido.
  initProjectsIndex(reduce);

  if (reduce) {
    html.classList.remove('is-loading', 'motion-pending');
    return;
  }

  // El scroll nativo táctil ya es fluido; Lenis solo aporta en escritorio y cuesta CPU en móvil.
  if (finePointer) initLenis();
  else initNativeVelocity();
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (finePointer) {
    initCursor();
    initMagnetic();
  }

  // El preloader arranca de inmediato; la intro espera a las fuentes y al preloader.
  const preloaderDone = html.classList.contains('is-loading')
    ? new Promise<void>((resolve) => runPreloader(resolve))
    : Promise.resolve();

  document.fonts.ready.then(() => {
    const intro = prepareHeroIntro() ?? prepareCaseIntro();
    // Los pines se crean en orden de página antes que los demás disparadores.
    initPortal();
    initWork();
    initScrubWords();
    initReveals();
    initArchive();
    initCapabilities();
    initProcess();
    initStats();
    initAboutDepth();
    initCase();
    initMarquee();
    initStamps();
    initBreathe();
    initParallaxDepth();
    initTicket();
    initFooter();
    ScrollTrigger.refresh();

    preloaderDone.then(() => {
      html.classList.remove('motion-pending');
      intro?.play();
    });
  });
}

/* ---------- Scroll suave ---------- */
function initLenis() {
  lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 1, smoothWheel: true });
  lenis.on('scroll', (e: Lenis) => {
    ScrollTrigger.update();
    velocity = gsap.utils.interpolate(velocity, e.velocity, 0.2);
  });
  gsap.ticker.add((t) => lenis?.raf(t * 1000));
  // Lenis deja de emitir al detenerse: la velocidad compartida se apaga sola.
  gsap.ticker.add(() => {
    if (!lenis?.isScrolling) velocity *= 0.86;
  });
  gsap.ticker.lagSmoothing(0);

  // Anclas internas con scroll suave
  $$<HTMLAnchorElement>('a[href^="#"], a[href^="/#"], a[href^="/en/#"]').forEach((a) => {
    a.addEventListener('click', (ev) => {
      const hash = a.getAttribute('href')!.split('#')[1];
      const target = hash ? document.getElementById(hash) : null;
      if (!target) return;
      ev.preventDefault();
      lenis?.scrollTo(target, { offset: 0, duration: 1.6, easing: (x) => 1 - Math.pow(1 - x, 4) });
      history.replaceState(null, '', `#${hash}`);
    });
  });
}

/* Velocidad de scroll sin Lenis (táctil): se lee del scroll nativo. */
function initNativeVelocity() {
  let last = window.scrollY;
  gsap.ticker.add(() => {
    const y = window.scrollY;
    velocity = gsap.utils.interpolate(velocity, y - last, 0.2);
    last = y;
  });
}

/* Ejecuta `fn` en cada frame solo mientras `el` está en pantalla. */
function tickWhileVisible(el: Element, fn: (time: number, delta: number) => void) {
  let visible = true;
  new IntersectionObserver(([entry]) => (visible = entry.isIntersecting), { rootMargin: '100px' }).observe(el);
  gsap.ticker.add((time, delta) => {
    if (visible) fn(time, delta);
  });
}

/* ---------- Preloader: la M se arma, contador y cortina ---------- */
function runPreloader(done: () => void) {
  const root = $('[data-preloader]');
  if (!root) return done();
  lenis?.stop();
  const left = $('[data-preloader-l]', root);
  const right = $('[data-preloader-r]', root);
  const count = $('[data-preloader-count]', root);
  const mark = $('[data-preloader-mark]', root);
  const counter = { v: 0 };

  const tl = gsap.timeline({
    onComplete: () => {
      html.classList.remove('is-loading');
      try {
        sessionStorage.setItem('mc-seen', '1');
      } catch {}
      lenis?.start();
    },
  });

  // Táctil: versión corta y sin el portal (escalar 26× una máscara SVG a pantalla completa es lo más caro del arranque).
  if (!finePointer) {
    tl.from(left, { xPercent: -40, yPercent: -30, autoAlpha: 0, duration: 0.6, ease: 'mc-out' }, 0)
      .from(right, { xPercent: 40, yPercent: -30, autoAlpha: 0, duration: 0.6, ease: 'mc-out' }, 0.08)
      .to(counter, {
        v: 100,
        duration: 0.8,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (count) count.textContent = String(Math.round(counter.v)).padStart(2, '0');
        },
      }, 0)
      .add(done, 0.8)
      .to(root, { autoAlpha: 0, duration: 0.3, ease: 'power1.out' }, 0.85);
    return;
  }

  tl.from(left, { xPercent: -40, yPercent: -30, autoAlpha: 0, duration: 0.9, ease: 'mc-out' }, 0.1)
    .from(right, { xPercent: 40, yPercent: -30, autoAlpha: 0, duration: 0.9, ease: 'mc-out' }, 0.22)
    .to(counter, {
      v: 100,
      duration: 1.3,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (count) count.textContent = String(Math.round(counter.v)).padStart(2, '0');
      },
    }, 0)
    // La M se convierte en portal y descubre la página
    .to(mark, { scale: 26, transformOrigin: '11% 72%', duration: 1, ease: 'mc-inout' }, 1.35)
    .to(root, { backgroundColor: 'rgba(29,39,48,0)', duration: 0.01 }, 1.75)
    .to(root, { autoAlpha: 0, duration: 0.35, ease: 'power1.out' }, 2.05)
    .add(done, 1.85);
}

/* ---------- Intro del hero ---------- */
function prepareHeroIntro() {
  const hero = $('[data-hero]');
  if (!hero) return null;

  const tl = gsap.timeline({ paused: true, defaults: { ease: 'mc-out' } });
  const nameLayers = $$('[data-hero-name], [data-hero-name-inverse], [data-hero-name-field]', hero);

  // Las tres capas del nombre (base, crema en la M, crema en el campo) se mueven con los mismos parámetros para seguir alineados.
  nameLayers.forEach((layer) => {
    const chars = $$('[data-split-chars]', layer).flatMap((el) => SplitText.create(el, { type: 'chars' }).chars);
    tl.from(chars, { yPercent: 105, duration: 1.1, stagger: 0.035 }, 0.05);
  });

  const win = $('[data-portal]', hero);
  const inner = $('[data-portal-inner]', hero);
  if (win && inner) {
    tl.fromTo(win, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'mc-inout', clearProps: 'clipPath' }, 0);
    if (finePointer) tl.from(inner, { scale: 1.15, duration: 1.6 }, 0);
  }

  // Imprenta: las planchas de color llegan desregistradas y se alinean
  $$('[data-print]', hero).forEach((print, i) => {
    const [a, b] = $$('.print__plate', print);
    const at = 0.55 + i * 0.12;
    tl.from(print.parentElement, { y: 60, rotate: `+=${i % 2 ? 6 : -6}`, autoAlpha: 0, duration: 1.2 }, at);
    // Las planchas llevan mix-blend-mode: animarlas obliga a recomponer la imagen en cada frame (solo escritorio).
    if (finePointer) {
      tl.from(a, { xPercent: -18, yPercent: 6, duration: 1.4 }, at).from(b, { xPercent: 18, yPercent: -6, duration: 1.4 }, at);
    }
  });

  const stamp = $('[data-hero-stamp]', hero);
  if (stamp) tl.from(stamp, { scale: 1.8, rotate: -60, autoAlpha: 0, duration: 0.7, ease: 'back.out(2.2)' }, 0.95);

  const title = $('[data-split-lines]', hero);
  if (title) {
    const lines = SplitText.create(title, { type: 'lines', mask: 'lines' }).lines;
    tl.from(lines, { yPercent: 110, duration: 1, stagger: 0.08 }, 0.45);
  }
  tl.from($$('[data-reveal]', hero), { y: 24, autoAlpha: 0, duration: 0.9, stagger: 0.1 }, 0.7);
  tl.from($$('[data-hero-meta]', hero), { autoAlpha: 0, duration: 0.8, stagger: 0.1 }, 1);
  tl.from($('[data-hero-field]', hero), { scaleY: 0, transformOrigin: '50% 0%', duration: 1.2, ease: 'mc-inout' }, 0);

  return tl;
}

/* ---------- Portal M: el scroll atraviesa la M ---------- */
function initPortal() {
  const hero = $('[data-hero]');
  const stage = $('[data-hero-stage]', hero ?? document);
  const win = $('[data-portal]', hero ?? document);
  if (!hero || !stage || !win) return;

  const veil = $('[data-portal-veil]', win);
  const frame = $('[data-portal-inner]', win);
  if (!frame) return;
  // La pierna izquierda de la M mide ~22 % del ancho; la máscara crece hasta cubrir la pantalla.
  // offsetWidth ignora transformaciones, así el cálculo no depende del punto del scroll.
  const portalScale = () => (Math.max(window.innerWidth, window.innerHeight) / (frame.offsetWidth * 0.2)) * 1.5;

  const mm = gsap.matchMedia();

  // Móvil: sin pin; la ventana y el nombre se separan con un parallax suave.
  mm.add('(max-width: 860px)', () => {
    gsap.to(frame, {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
    });
    gsap.to($$('[data-hero-name-inverse], [data-hero-name-field]', hero), { autoAlpha: 0, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: '+=80', scrub: true } });
  });

  mm.add('(min-width: 861px)', () => portalTimeline(hero, stage, win, frame, veil, portalScale));
}

function portalTimeline(hero: HTMLElement, stage: HTMLElement, win: HTMLElement, frame: HTMLElement, veil: HTMLElement | null, portalScale: () => number) {
  const tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: '+=115%',
      scrub: 0.8,
      pin: stage,
      invalidateOnRefresh: true,
    },
  });

  // fromTo explícitos: la intro anima estos mismos elementos y no deben heredar su estado inicial.
  const off = { immediateRender: false };
  tl.fromTo($('[data-hero-name-inverse]', hero), { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.06, ...off }, 0)
    .fromTo($$('[data-hero-name], [data-hero-name-field]', hero), { yPercent: 0, autoAlpha: 1 }, { yPercent: -18, autoAlpha: 0, duration: 0.35, ...off }, 0)
    .fromTo($('[data-hero-copy]', hero), { y: 0, autoAlpha: 1 }, { y: -80, autoAlpha: 0, duration: 0.3, ...off }, 0)
    .fromTo($$('[data-hero-meta], [data-hero-stamp]', hero), { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.2, ...off }, 0)
    .fromTo($('[data-hero-field]', hero), { xPercent: 0 }, { xPercent: 100, duration: 0.55, ease: 'power2.in', ...off }, 0)
    .fromTo(win, { '--ms': 1 }, { '--ms': portalScale, duration: 1, ease: 'power3.in', ...off }, 0)
    .fromTo(frame, { scale: 1 }, { scale: 2.2, duration: 1, ease: 'power2.in', ...off }, 0)
    .to(veil, { opacity: 1, duration: 0.45 }, 0.45)
    .fromTo(hero, { backgroundColor: '#f8f3ea' }, { backgroundColor: '#1d2730', duration: 0.05, immediateRender: false }, 0.9);

  // El manifiesto se monta sobre el final del portal: sin tramo vacío entre ambos.
  const manifesto = $('[data-manifesto]');
  if (manifesto) {
    html.classList.add('has-portal');
    gsap.set(manifesto, { autoAlpha: 0 });
    tl.fromTo(manifesto, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.14, ease: 'power1.out', immediateRender: false }, 0.86);
  }
  ScrollTrigger.refresh();

  return () => {
    html.classList.remove('has-portal');
    if (manifesto) gsap.set(manifesto, { clearProps: 'opacity,visibility' });
    tl.kill();
  };
}

/* ---------- Manifiesto: las palabras se encienden con el scroll ---------- */
function initScrubWords() {
  $$('[data-scrub-words]').forEach((el) => {
    const words = $$('.w', el);
    gsap.fromTo(
      words,
      { opacity: 0.14 },
      {
        opacity: 1,
        ease: 'none',
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true },
      },
    );
  });
}

/* ---------- Revelados genéricos fuera del hero ---------- */
function initReveals() {
  $$('[data-split-lines]').forEach((el) => {
    if (el.closest('[data-hero]')) return;
    SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, {
          yPercent: 110,
          duration: 1.1,
          stagger: 0.08,
          ease: 'mc-out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        }),
    });
  });

  $$('[data-split-chars]').forEach((el) => {
    if (el.closest('[data-hero]')) return;
    const chars = SplitText.create(el, { type: 'chars', mask: 'chars', charsClass: 'ch' }).chars;
    gsap.from(chars, {
      yPercent: 100,
      duration: 1.2,
      stagger: 0.045,
      ease: 'mc-out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
  });

  const items = $$('[data-reveal]').filter((el) => !el.closest('[data-hero]'));
  gsap.set(items, { y: 28, autoAlpha: 0 });
  ScrollTrigger.batch(items, {
    start: 'top 88%',
    once: true,
    onEnter: (batch) => gsap.to(batch, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.1, ease: 'mc-out' }),
  });
}

/* ---------- Marquee ligado a la velocidad ---------- */
function initMarquee() {
  $$('[data-marquee]').forEach((root) => {
    const track = $('[data-marquee-track]', root);
    if (!track) return;
    const loop = gsap.to(track, { xPercent: -50, duration: 28, ease: 'none', repeat: -1 });
    const skew = gsap.quickTo(track, 'skewX', { duration: 0.5, ease: 'power3.out' });
    // Fuera de pantalla el bucle se pausa y el ticker no trabaja.
    new IntersectionObserver(([entry]) => (entry.isIntersecting ? loop.resume() : loop.pause()), { rootMargin: '100px' }).observe(root);
    tickWhileVisible(root, () => {
      const v = gsap.utils.clamp(-40, 40, velocity);
      loop.timeScale(v < -0.5 ? -1 - Math.abs(v) / 8 : 1 + Math.abs(v) / 8);
      skew(gsap.utils.clamp(-8, 8, -v / 4));
    });
  });
}

/* ---------- Sellos: giro continuo con impulso del scroll ---------- */
function initStamps() {
  $$('[data-stamp-ring]').forEach((ring) => {
    let rot = 0;
    gsap.set(ring, { transformOrigin: '50% 50%' });
    const setRot = gsap.quickSetter(ring, 'rotate', 'deg');
    tickWhileVisible(ring, (_, delta) => {
      rot += (delta / 1000) * (14 + Math.abs(velocity) * 6);
      setRot(rot);
    });
  });
}

/* ---------- Tipografía que respira (eje de ancho) ---------- */
function initBreathe() {
  // Cambiar el eje de ancho re-maqueta el texto en cada frame: solo escritorio, solo en pantalla y solo si el valor cambió.
  if (!finePointer) return;
  const els = $$('[data-breathe]');
  if (!els.length) return;
  const visible = new Set<HTMLElement>();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? visible.add(e.target as HTMLElement) : visible.delete(e.target as HTMLElement)));
  }, { rootMargin: '100px' });
  els.forEach((el) => io.observe(el));
  let current = 62;
  let written = -1;
  gsap.ticker.add(() => {
    const target = 62 + gsap.utils.clamp(0, 10, Math.abs(velocity) * 0.9);
    current += (target - current) * 0.08;
    const value = Math.round(current * 10) / 10;
    if (value === written) return;
    written = value;
    visible.forEach((el) => (el.style.fontStretch = `${value}%`));
  });
}

/* ---------- Parallax por capas con el ratón (hero) ---------- */
function initParallaxDepth() {
  if (!finePointer) return;
  const layers = $$('[data-depth]').map((el) => ({
    depth: parseFloat(el.dataset.depth || '0'),
    x: gsap.quickTo(el, 'x', { duration: 1.1, ease: 'power3.out' }),
    y: gsap.quickTo(el, 'y', { duration: 1.1, ease: 'power3.out' }),
  }));
  window.addEventListener('pointermove', (e) => {
    const nx = e.clientX / window.innerWidth - 0.5;
    const ny = e.clientY / window.innerHeight - 0.5;
    layers.forEach((l) => {
      l.x(nx * l.depth * -60);
      l.y(ny * l.depth * -40);
    });
  });
}

/* ---------- Ticket: se inclina hacia el cursor ---------- */
function initTicket() {
  if (!finePointer) return;
  $$('[data-ticket-wrap]').forEach((wrap) => {
    const ticket = $('[data-ticket]', wrap);
    if (!ticket) return;
    const rx = gsap.quickTo(ticket, 'rotationX', { duration: 0.8, ease: 'power3.out' });
    const ry = gsap.quickTo(ticket, 'rotationY', { duration: 0.8, ease: 'power3.out' });
    gsap.set(wrap, { perspective: 900 });
    wrap.addEventListener('pointermove', (e) => {
      const r = wrap.getBoundingClientRect();
      ry(((e.clientX - r.left) / r.width - 0.5) * 14);
      rx(((e.clientY - r.top) / r.height - 0.5) * -14);
    });
    wrap.addEventListener('pointerleave', () => {
      rx(0);
      ry(0);
    });
  });
}

/* ---------- Footer: se descubre por debajo ---------- */
function initFooter() {
  const inner = $('[data-footer-inner]');
  if (!inner) return;
  gsap.matchMedia().add('(min-width: 861px)', () => {
    gsap.from(inner, {
      yPercent: -35,
      ease: 'none',
      scrollTrigger: { trigger: inner.parentElement, start: 'top bottom', end: 'bottom bottom', scrub: true },
    });
  });
}

/* ---------- Cursor ---------- */
function initCursor() {
  const el = $('[data-cursor-el]');
  const label = $('[data-cursor-label]');
  if (!el || !label) return;
  html.classList.add('has-cursor');
  const x = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3.out' });
  const y = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3.out' });
  window.addEventListener('pointermove', (e) => {
    x(e.clientX);
    y(e.clientY);
  });
  document.addEventListener('pointerover', (e) => {
    const t = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor], a, button');
    el.classList.remove('is-label', 'is-hover');
    if (!t) return;
    if (t.dataset.cursor) {
      label.textContent = t.dataset.cursor;
      el.classList.add('is-label');
    } else el.classList.add('is-hover');
  });
  document.addEventListener('pointerleave', () => el.classList.add('is-hidden'));
  document.addEventListener('pointerenter', () => el.classList.remove('is-hidden'));
}

/* ---------- Botones magnéticos ---------- */
function initMagnetic() {
  $$('[data-magnetic]').forEach((btn) => {
    const x = gsap.quickTo(btn, 'x', { duration: 0.6, ease: 'power3.out' });
    const y = gsap.quickTo(btn, 'y', { duration: 0.6, ease: 'power3.out' });
    btn.addEventListener('pointermove', (e) => {
      const r = btn.getBoundingClientRect();
      x((e.clientX - r.left - r.width / 2) * 0.25);
      y((e.clientY - r.top - r.height / 2) * 0.35);
    });
    btn.addEventListener('pointerleave', () => {
      x(0);
      y(0);
    });
  });
}

/* ---------- Header: se oculta al bajar, vuelve al subir ---------- */
function initHeader() {
  const header = $('[data-header]');
  if (!header) return;
  let last = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-solid', y > 40);
    const menuOpen = header.querySelector('[data-menu]:not([hidden])');
    header.classList.toggle('is-hidden', !menuOpen && y > last && y > window.innerHeight * 0.4);
    last = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- Menú móvil ---------- */
function initMenu() {
  const toggle = $<HTMLButtonElement>('[data-menu-toggle]');
  const menu = $('[data-menu]');
  const label = $('[data-menu-label]');
  if (!toggle || !menu) return;

  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    if (label) label.textContent = (open ? label.dataset.close : label.dataset.open) ?? '';
    if (open) {
      menu.hidden = false;
      lenis?.stop();
      if (!reduce) {
        gsap.fromTo(menu, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.8, ease: 'mc-inout' });
        gsap.from($$('.menu__link', menu), { yPercent: 110, duration: 0.9, stagger: 0.06, ease: 'mc-out', delay: 0.2 });
      }
      $('a', menu)?.focus();
    } else {
      const close = () => {
        menu.hidden = true;
        lenis?.start();
      };
      if (reduce) close();
      else gsap.to(menu, { clipPath: 'inset(0 0 100% 0)', duration: 0.6, ease: 'mc-inout', onComplete: close });
      toggle.focus();
    }
  };

  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setOpen(false);
  });
  $$('a', menu).forEach((a) => a.addEventListener('click', () => setOpen(false)));
}

/* ---------- Copiar email ---------- */
function initCopy() {
  $$<HTMLButtonElement>('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy ?? '');
        const original = btn.textContent;
        btn.textContent = btn.dataset.copied ?? original;
        setTimeout(() => (btn.textContent = original), 1800);
      } catch {}
    });
  });
}

import { getCollection, getEntry } from 'astro:content';

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export function toLocale(value: string | undefined): Locale {
  return value === 'en' ? 'en' : 'es';
}

export async function getSettings(locale: Locale) {
  const entry = await getEntry('settings', locale);
  if (!entry) throw new Error(`Faltan los ajustes para "${locale}"`);
  return entry.data;
}

export async function getPage(locale: Locale, slug: string) {
  const entry = await getEntry('pages', `${locale}/${slug}`);
  if (!entry) throw new Error(`Falta la página "${slug}" en "${locale}"`);
  return entry.data;
}

export function whatsappHref(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export async function getProjects(locale: Locale) {
  const all = await getCollection('projects', (p) => p.id.startsWith(`${locale}/`));
  return all.map((p) => ({ ...p.data, slug: p.id.split('/')[1] })).sort((a, b) => a.order - b.order);
}

export async function getServices(locale: Locale) {
  const all = await getCollection('services', (s) => s.id.startsWith(`${locale}/`));
  return all.map((s) => ({ ...s.data, slug: s.id.split('/')[1] })).sort((a, b) => a.order - b.order);
}

export function projectHref(locale: Locale, slug: string) {
  return locale === 'en' ? `/en/projects/${slug}` : `/proyectos/${slug}`;
}

export function projectsHref(locale: Locale) {
  return locale === 'en' ? '/en/projects' : '/proyectos';
}

/** Color de lámina de cada proyecto (mismo orden que los carteles del Inicio). */
export const tones = ['orange', 'turquoise', 'cream', 'gunmetal'] as const;
export type Tone = (typeof tones)[number];
export function projectTone(order: number): Tone {
  const sequence: Tone[] = ['orange', 'turquoise', 'cream', 'gunmetal', 'orange', 'turquoise', 'cream', 'gunmetal'];
  return sequence[(order - 1) % sequence.length];
}

export function fill(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (_, k) => values[k] ?? '');
}

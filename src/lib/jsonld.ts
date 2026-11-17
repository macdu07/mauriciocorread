/*
 * Datos estructurados (schema.org) generados desde las colecciones.
 * Nada se escribe a mano: si un dato no existe en el contenido (fechas, email), no se emite.
 */

import { projectsHref, type getProjects, type getSettings, type Locale } from '../i18n';
import type { ShareImage } from './share-image';

type Settings = Awaited<ReturnType<typeof getSettings>>;
type Project = Awaited<ReturnType<typeof getProjects>>[number];

const homeHref = (locale: Locale) => (locale === 'en' ? '/en/' : '/');
const abs = (path: string, site: URL) => new URL(path, site).href;
const personId = (site: URL) => abs('/#person', site);

function person(settings: Settings, site: URL) {
  return {
    '@type': 'Person',
    '@id': personId(site),
    name: settings.siteName,
    url: site.href,
    jobTitle: settings.role,
    ...(settings.contact.email && { email: `mailto:${settings.contact.email}` }),
    sameAs: settings.social.map((s) => s.href),
  };
}

export function homeJsonLd(settings: Settings, locale: Locale, site: URL) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      person(settings, site),
      {
        '@type': 'WebSite',
        '@id': abs(`${homeHref(locale)}#website`, site),
        url: abs(homeHref(locale), site),
        name: settings.siteName,
        inLanguage: locale,
        publisher: { '@id': personId(site) },
      },
    ],
  };
}

export function caseJsonLd(project: Project, settings: Settings, locale: Locale, site: URL, url: URL, image: ShareImage) {
  const projectsLabel = settings.nav.find((l) => l.href === projectsHref(locale))?.label;

  const graph: Record<string, unknown>[] = [
    person(settings, site),
    {
      '@type': 'CreativeWork',
      '@id': `${url.href}#work`,
      name: project.title,
      description: project.summary,
      url: url.href,
      image: abs(image.src, site),
      inLanguage: locale,
      keywords: project.categories.join(', '),
      creator: { '@id': personId(site) },
      about: { '@type': 'WebSite', name: project.title, url: project.url },
    },
  ];
  if (projectsLabel) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: settings.siteName, item: abs(homeHref(locale), site) },
        { '@type': 'ListItem', position: 2, name: projectsLabel, item: abs(projectsHref(locale), site) },
        { '@type': 'ListItem', position: 3, name: project.title, item: url.href },
      ],
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/*
 * Todo el contenido editable vive aquí, por idioma (`es/…`, `en/…`).
 * Para migrar a Strapi: sustituir cada `loader` por uno que consulte la API
 * (manteniendo los mismos esquemas). Los componentes no cambian.
 */

const link = z.object({ label: z.string(), href: z.string() });

const settings = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/settings' }),
  schema: z.object({
    siteName: z.string(),
    role: z.string(),
    skipLink: z.string(),
    nav: z.array(link),
    navCta: link,
    langSwitch: z.object({ label: z.string(), href: z.string(), lang: z.string() }),
    menuLabel: z.object({ open: z.string(), close: z.string() }),
    contact: z.object({
      whatsapp: z.string(),
      whatsappDisplay: z.string(),
      whatsappMessage: z.string(),
      email: z.string().optional(),
    }),
    social: z.array(link),
    footer: z.object({
      closing: z.string(),
      copyright: z.string(),
      backToTop: z.string(),
    }),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/pages' }),
  schema: ({ image }) =>
    z.object({
      meta: z.object({ title: z.string(), description: z.string() }),
      preloader: z.object({ edition: z.string() }).optional(),
      hero: z
        .object({
          nameLines: z.array(z.string()),
          title: z.string(),
          lead: z.string(),
          primaryCta: link,
          secondaryCta: link,
          stat: z.object({ value: z.string(), label: z.string() }),
          stamp: z.string(),
          scrollHint: z.string(),
          screens: z.array(z.object({ image: image(), alt: z.string(), name: z.string() })),
        })
        .optional(),
      manifesto: z
        .object({
          folio: z.string(),
          statement: z.string(),
          highlight: z.string(),
          body: z.string(),
        })
        .optional(),
      marquee: z.array(z.string()).optional(),
      index: z
        .object({
          folio: z.string(),
          title: z.string(),
          lead: z.string(),
          all: z.string(),
          filterLabel: z.string(),
          viewLabel: z.string(),
          grid: z.string(),
          list: z.string(),
          viewCase: z.string(),
          empty: z.string(),
        })
        .optional(),
      case: z.record(z.string(), z.string()).optional(),
      servicesPage: z
        .object({
          title: z.string(),
          lead: z.string(),
          forWho: z.string(),
          receives: z.string(),
          related: z.string(),
          faqTitle: z.string(),
          faq: z.array(z.object({ q: z.string(), a: z.string() })),
        })
        .optional(),
      aboutPage: z
        .object({ title: z.string(), lead: z.string(), storyTitle: z.string(), story: z.array(z.string()), storyFolio: z.string(), storyFrom: z.string(), storyTo: z.string() })
        .optional(),
      contactPage: z
        .object({
          channelsTitle: z.string(),
          whatsapp: z.string(),
          email: z.string(),
          social: z.string(),
          briefTitle: z.string(),
          brief: z.array(z.string()),
        })
        .optional(),
      notFound: z
        .object({
          display: z.string(),
          title: z.string(),
          body: z.string(),
          home: z.string(),
          projects: z.string(),
          alt: z.string(),
          altHome: z.string(),
        })
        .optional(),
      work: z
        .object({
          folio: z.string(),
          title: z.string(),
          lead: z.string(),
          viewCase: z.string(),
          visitSite: z.string(),
          dragHint: z.string(),
        })
        .optional(),
      archive: z
        .object({ folio: z.string(), title: z.string(), lead: z.string(), openCase: z.string(), all: link })
        .optional(),
      capabilities: z
        .object({ folio: z.string(), title: z.string(), lead: z.string(), receives: z.string(), link: link, stamp: z.string() })
        .optional(),
      process: z
        .object({
          folio: z.string(),
          title: z.string(),
          steps: z.array(z.object({ title: z.string(), body: z.string() })),
        })
        .optional(),
      stats: z
        .object({ folio: z.string(), items: z.array(z.object({ value: z.number(), prefix: z.string().optional(), label: z.string() })) })
        .optional(),
      about: z
        .object({
          folio: z.string(),
          title: z.string(),
          body: z.array(z.string()),
          principles: z.array(z.object({ title: z.string(), body: z.string() })),
          toolsTitle: z.string(),
          tools: z.array(z.string()),
          link: link,
          cards: z.object({ palette: z.string(), type: z.string(), code: z.string() }),
        })
        .optional(),
      contact: z
        .object({
          folio: z.string(),
          display: z.string(),
          title: z.string(),
          body: z.string(),
          ticket: z.array(z.object({ label: z.string(), value: z.string() })),
          whatsappLabel: z.string(),
          emailLabel: z.string(),
          copyLabel: z.string(),
          copiedLabel: z.string(),
        })
        .optional(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number(),
      featured: z.boolean(),
      year: z.number().nullable(),
      categories: z.array(z.string()),
      stack: z.array(z.string()),
      summary: z.string(),
      description: z.string(),
      url: z.url(),
      figma: z.url().nullable(),
      cover: image(),
      detail: image(),
      mobile: image(),
      credit: z.string().optional(),
      project: z.string(),
      challenge: z.string(),
      built: z.array(z.string()),
    }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    short: z.string(),
    description: z.string(),
    deliverables: z.array(z.string()),
    forWho: z.string().optional(),
    related: z.array(z.string()).optional(),
  }),
});

export const collections = { settings, pages, projects, services };

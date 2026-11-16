/*
 * Imagen para compartir (Open Graph / WhatsApp): la portada del caso a 1200×630.
 * Las portadas son 3:2; el recorte parte de arriba para conservar cabecera y hero del sitio.
 * JPEG porque es el formato que todas las apps de mensajería muestran.
 */

import { getImage } from 'astro:assets';
import type { getProjects } from '../i18n';

type Project = Awaited<ReturnType<typeof getProjects>>[number];

export type ShareImage = { src: string; width: number; height: number; alt: string };

export async function projectShareImage(project: Project): Promise<ShareImage> {
  const width = 1200;
  const height = 630;
  const img = await getImage({ src: project.cover, width, height, fit: 'cover', position: 'top', format: 'jpg', quality: 80 });
  return { src: img.src, width, height, alt: `${project.title} — ${project.summary}` };
}

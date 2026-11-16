/*
 * Genera las imágenes para compartir de las páginas sin imagen propia: public/og/{es,en}.png.
 * El texto sale de src/content/settings; volver a ejecutar si cambian siteName o role.
 * Uso: pnpm og   (necesita Google Chrome; otra ruta con CHROME_PATH=…)
 */

import { execFileSync } from 'node:child_process';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve(import.meta.dirname, '../..');
const chrome = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const site = new URL((await readFile(join(root, 'astro.config.mjs'), 'utf8')).match(/site:\s*'([^']+)'/)[1]);
const template = await readFile(join(import.meta.dirname, 'template.html'), 'utf8');
// La máscara va en data URI: Chrome no aplica máscaras cargadas desde file://.
const mask = `data:image/svg+xml,${encodeURIComponent(await readFile(join(root, 'public/brand/m.svg'), 'utf8'))}`;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const work = await mkdtemp(join(tmpdir(), 'mc-og-'));
await mkdir(join(root, 'public/og'), { recursive: true });

for (const locale of ['es', 'en']) {
  const settings = JSON.parse(await readFile(join(root, `src/content/settings/${locale}.json`), 'utf8'));
  const html = template
    .replaceAll('{{fonts}}', pathToFileURL(join(root, 'public/fonts')).href)
    .replace('{{mask}}', mask)
    .replace('{{domain}}', esc(site.hostname))
    .replace('{{nameLines}}', settings.siteName.split(' ').map((w) => `<span>${esc(w)}</span>`).join(''))
    .replace('{{role}}', esc(settings.role));
  const page = join(work, `${locale}.html`);
  const out = join(root, `public/og/${locale}.png`);
  await writeFile(page, html);
  execFileSync(chrome, [
    '--headless=new',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    '--virtual-time-budget=3000',
    `--screenshot=${out}`,
    pathToFileURL(page).href,
  ], { stdio: 'ignore' });
  console.log(`public/og/${locale}.png`);
}

await rm(work, { recursive: true });

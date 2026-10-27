// Génère public/sitemap.xml et public/robots.txt avant chaque build.
// Définir VITE_SITE_URL dans .env (ex. https://www.votre-domaine.ma) pour des URL correctes.
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { services } from '../src/data/site.js'
import { projects } from '../src/data/projects.js'
import { posts } from '../src/data/blog.js'

function readEnv() {
  if (process.env.VITE_SITE_URL) return process.env.VITE_SITE_URL
  if (!existsSync('.env')) return ''
  const line = readFileSync('.env', 'utf8')
    .split(/\r?\n/)
    .find((l) => l.startsWith('VITE_SITE_URL='))
  return line ? line.split('=')[1].trim() : ''
}

let base = readEnv().replace(/\/$/, '')
if (!base) {
  base = 'https://www.example.ma'
  console.warn('⚠ VITE_SITE_URL absent du .env : sitemap généré avec https://www.example.ma (à corriger avant la mise en ligne).')
}

const paths = [
  '/',
  ...services.map((s) => `/services/${s.slug}`),
  ...projects.map((p) => `/realisations/${p.id}`),
  '/blog',
  ...posts.map((p) => `/blog/${p.slug}`),
  '/mentions-legales',
  '/confidentialite',
]

const today = new Date().toISOString().slice(0, 10)
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${base}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`

writeFileSync('public/sitemap.xml', xml)
writeFileSync('public/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`)
console.log(`sitemap.xml (${paths.length} pages) et robots.txt générés pour ${base}`)

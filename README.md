# Overall Style Designer (OSD) — site vitrine

React + Vite + Tailwind CSS + Framer Motion + React Router + EmailJS.

## Lancer
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # génère sitemap.xml, robots.txt puis le dossier dist/
```

## Pages
| URL | Contenu |
|---|---|
| `/` | Accueil : services, réalisations filtrables, à propos et méthode, avis (si renseignés), contact et devis |
| `/services/:slug` | Une page détaillée par service (description, étapes, avantages, réalisations liées) |
| `/realisations/:id` | Une page par projet : curseur avant/après, vidéo facultative |
| `/blog`, `/blog/:slug` | Articles de conseils, filtrables par catégorie |
| `/mentions-legales`, `/confidentialite` | Obligations légales (loi 09-08) |

## Où modifier les contenus
- `src/data/site.js` : nom, téléphone, WhatsApp, e-mail, adresse, réseaux sociaux, services, méthode, **informations légales** (`legal`).
- `src/data/projects.js` : projets avant/après (photos dans `public/projects/`, vidéo facultative). Les projets actuels sont des **exemples**.
- `src/data/blog.js` : articles du blog (exemples à remplacer).
- `src/data/testimonials.js` : avis clients. Vide = la section n'apparaît pas. Ne rien inventer, uniquement des avis réels.
- `public/images/hero.jpg` : photo de couverture de l'accueil.
- `src/components/Brand.jsx` : logo provisoire à remplacer par le logo OSD. Les couleurs sont dans `src/index.css` (`@theme`).

## Formulaire de devis (EmailJS)
1. Créer un compte sur emailjs.com, ajouter un service e-mail et un template.
   Variables du template : `from_name`, `phone`, `reply_to`, `project_type`, `city`, `budget`, `message`.
2. Copier `.env.example` en `.env` et renseigner les clés.
3. **Pièce jointe** : le champ s'appelle `attachment`. Il faut activer les pièces jointes dans le template EmailJS (fonction disponible selon l'offre EmailJS). Sans cela, un envoi avec fichier peut échouer : le formulaire sans fichier fonctionne toujours.
4. Sans clés, le formulaire ouvre le client mail avec le message pré-rempli (sans pièce jointe).

## SEO, cookies, suivi
- Renseigner `VITE_SITE_URL` dans `.env` avant le build : il sert au sitemap, à robots.txt et à la balise canonique.
- Google Search Console : ajouter le site puis soumettre `/sitemap.xml`. Lier la fiche Google Business Profile dans `mapQuery` et `social` de `site.js`.
- `VITE_GA_ID` (Google Analytics) et `VITE_META_PIXEL_ID` (Meta Pixel) sont facultatifs. Ils ne se chargent qu'après acceptation du bandeau cookies.

## Déploiement
Firebase Hosting : `npm run build` puis `firebase deploy` (le fichier `firebase.json` redirige toutes les URL vers `index.html`).
Netlify et Vercel : `public/_redirects` et `vercel.json` sont déjà prévus. Brancher ensuite le domaine .ma.

## Pas encore inclus (options du cahier des charges)
Version multilingue (arabe/anglais), flux Instagram intégré.

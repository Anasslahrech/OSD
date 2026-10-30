// Pour ajouter un projet : déposer les photos dans /public/projects puis renseigner "gallery".
// Facultatif : "before" / "after" pour afficher le curseur avant / après, "video" pour une vidéo.
export const categories = ['Tous', 'Cabinets', 'Cuisines', 'Menuiserie', 'Faux plafond']

const n = (prefix, count) => Array.from({ length: count }, (_, i) => `/projects/${prefix}-${i + 1}.jpg`)

export const projects = [
  {
    id: 'cabinet',
    title: 'Aménagement de cabinet',
    category: 'Cabinets',
    service: 'Aménagement des espaces plateaux',
    city: 'Rabat',
    year: 2025,
    description: "Aménagement complet d'un cabinet : cloisons, faux plafonds, menuiserie sur mesure et finitions soignées.",
    gallery: n('cabinet', 7),
    video: '',
  },
  {
    id: 'cuisine',
    title: 'Aménagement de cuisine',
    category: 'Cuisines',
    service: 'Aménagement intérieur',
    city: 'Kénitra',
    year: 2025,
    description: 'Cuisine aménagée sur mesure : agencement, rangements et finitions.',
    gallery: n('cuisine', 3),
    video: '',
  },
  {
    id: 'menuiserie',
    title: 'Menuiserie sur mesure',
    category: 'Menuiserie',
    service: 'Menuiserie',
    city: 'Kénitra',
    year: 2025,
    description: 'Menuiserie sur mesure : portes, placards et agencements réalisés dans nos ateliers.',
    gallery: n('menuiserie', 3),
    video: '',
  },
  {
    id: 'faux-plafond',
    title: 'Faux plafonds',
    category: 'Faux plafond',
    service: 'Faux plafond',
    city: 'Rabat',
    year: 2025,
    description: 'Faux plafonds décoratifs avec éclairage intégré, pour des intérieurs modernes.',
    gallery: n('faux-plafond', 6),
    video: '',
  },
]
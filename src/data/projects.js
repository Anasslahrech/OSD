// Pour ajouter un projet : déposer les photos dans /public/projects puis renseigner "gallery".
// Facultatif : "videos" (liste de { src, poster }) pour afficher des vidéos sur la page du projet.
export const categories = [
  'Tous',
  'Cabinets',
  'Cuisines',
  'Menuiserie',
  'Faux plafond',
  'Aménagement',
  'Plans',
]

const n = (prefix, count) => Array.from({ length: count }, (_, i) => `/projects/${prefix}-${i + 1}.jpg`)

export const projects = [
  {
    id: 'cabinet',
    title: 'Aménagement de cabinet',
    category: 'Cabinets',
    service: 'Aménagement des espaces plateaux',
    city: 'Rabat',
    year: 2025,
    description:
      "Aménagement complet d'un cabinet : cloisons, faux plafonds, menuiserie sur mesure, mobilier et rangements fabriqués dans nos ateliers, jusqu'aux finitions soignées.",
    gallery: [...n('cabinet', 7), ...n('cabinet-medical', 7)],
    videos: [],
  },

  {
    id: 'salle-conference',
    title: 'Aménagement de salle de conférence',
    category: 'Aménagement',
    service: 'Aménagement des espaces plateaux',
    city: 'Rabat', // à corriger si la ville est différente
    year: 2025,
    description: "Aménagement d'une salle de conférence : cloisons, menuiserie sur mesure et finitions soignées.",
    // La première image sert de couverture. Les captures sont tirées de la vidéo.
    gallery: [
      '/videos/cabinet-meuble.jpg',
      '/videos/cabinet-meuble-porte-entree.jpg',
    ],
    videos: [{ src: '/videos/cabinet-meuble.mp4', poster: '/videos/cabinet-meuble.jpg' }],
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
    videos: [],
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
    videos: [],
  },
  {
    id: 'porte-noyer',
    title: 'Porte en bois de noyer',
    category: 'Menuiserie',
    service: 'Menuiserie',
    city: 'Kénitra',
    year: 2026,
    description: 'Porte en bois de noyer fabriquée sur mesure et posée avec une finition soignée.',
    gallery: n('porte-noyer', 1),
    videos: [{ src: '/videos/porte-noyer.mp4', poster: '/videos/porte-noyer.jpg' }],
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
    videos: [],
  },
  {
    id: 'salon',
    title: 'Aménagement de salon',
    category: 'Aménagement',
    service: 'Aménagement intérieur',
    city: 'Kénitra',
    year: 2026,
    description:
      "Transformation d'un salon : faux plafond avec éclairage LED, finitions murales et sol. Les photos « après » sont suivies des photos « avant ».",
    gallery: n('salon', 7),
    videos: [],
  },
  {
    id: 'dessins-plans',
    title: 'Dessins et plans',
    category: 'Plans',
    service: 'Conception et plans 3D',
    city: 'Kénitra',
    year: 2026,
    description: 'Plans et dessins 3D réalisés avant le chantier pour visualiser le projet : construction, cuisine, agencement.',
    gallery: n('plans', 2),
    videos: [],
  },
]

// Ancien filtre « Vidéos » (supprimé du site). Conservé pour un usage futur.
export const otherVideos = [
  {
    id: 'porte-bois',
    title: 'Porte en bois',
    service: 'Menuiserie',
    description: 'Porte en bois sur mesure, posée avec une finition soignée.',
    src: '/videos/realisation-1.mp4',
    poster: '/videos/realisation-1.jpg',
  },
]
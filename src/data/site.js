// Modifier ici les informations de l'entreprise (nom, contacts, réseaux, mentions légales).
// Tous les textes sont des propositions : ils seront remplacés par ceux de la chargée de communication.
export const site = {
  name: 'Overall Style Designer',
  shortName: 'OSD',
  tagline: 'Construire, rénover et aménager vos espaces.',
  zone: ['Rabat', 'Salé', 'Kénitra', 'Tanger et régions', 'Khemisset'],
  city: 'Kénitra',
  phone: '06 07 02 20 22',
  phoneRaw: '+212607022022',
  whatsapp: '212607022022', // sans le +
  email: 'overalstyle.inf@gmail.com',
  address: 'Kénitra, Maroc',
  hours: 'Lun – Sam · 8h30 – 18h30',
  // Requête utilisée par la carte Google Maps (remplacer par l'adresse exacte du bureau)
    mapQuery: '34.26287078857422,-6.627573490142822',
  mapLink: 'https://maps.google.com/maps?q=34.26287078857422%2C-6.627573490142822&z=17&hl=fr',
   social: {
    instagram: 'https://www.instagram.com/overall_style_designer',
    facebook: '#',
    tiktok: '#',
    linkedin: '#',
  },
  // Chiffres neutres pour une entreprise récente (à remplacer par de vrais chiffres au fil des chantiers)
  stats: [
    { value: 30, suffix: '+', label: "Ans d'expérience" },
    { value: 5, suffix: '', label: "Villes d'intervention" },
    { value: 5, suffix: '', label: "Étapes, de l'écoute à la garantie" },
  ],
}

// Informations légales affichées dans « Mentions légales » (laisser vide tant qu'elles ne sont pas fournies).
export const legal = {
  companyName: 'Overall Style Designer (OSD)',
  legalForm: '', // ex. SARL, SARL AU, auto-entrepreneur
  capital: '',
  ice: '',
  rc: '',
  if: '',
  address: '',
  publicationDirector: '',
  host: 'Google Firebase Hosting (Google LLC)',
}

export const services = [
  {
    slug: 'construction',
    icon: 'Building2',
    title: 'Construction de villas et maisons',
    text: 'De la dalle à la livraison : gros œuvre, second œuvre et finitions, avec un seul interlocuteur.',
    intro:
      "Vous avez un terrain et un projet de villa ou de maison ? Nous prenons en charge la construction complète, du gros œuvre aux finitions, avec un planning et un devis détaillés dès le départ.",
    steps: [
      { title: 'Étude du projet', text: 'Visite du terrain, écoute de vos besoins, validation des plans avec votre architecte.' },
      { title: 'Devis détaillé', text: 'Chiffrage poste par poste : terrassement, gros œuvre, second œuvre, finitions.' },
      { title: 'Chantier suivi', text: 'Planning signé, points réguliers et photos d\'avancement.' },
      { title: 'Livraison', text: 'Contrôle final, levée des réserves et remise des clés.' },
    ],
    benefits: ['Un seul interlocuteur du début à la fin', 'Matériaux sélectionnés et artisans qualifiés', 'Planning et budget clairs dès la signature'],
    category: 'Villas',
  },
  {
    slug: 'renovation',
    icon: 'Hammer',
    title: 'Rénovation complète ou partielle',
    text: 'Transformation d\'appartements, maisons et villas : structure, distribution, façade et remise aux normes.',
    intro:
      "Appartement ancien, maison à moderniser, villa à agrandir : nous rénovons en totalité ou pièce par pièce, en limitant les nuisances et en respectant vos délais.",
    steps: [
      { title: 'Diagnostic', text: 'État des lieux, repérage des contraintes techniques et des travaux prioritaires.' },
      { title: 'Proposition et devis', text: 'Solutions adaptées à votre budget, avec options chiffrées séparément.' },
      { title: 'Travaux', text: 'Démolition, reprise de structure, plomberie, électricité, cloisons et revêtements.' },
      { title: 'Finitions et réception', text: 'Peinture, pose, nettoyage de fin de chantier et réception avec vous.' },
    ],
    benefits: ['Rénovation totale ou par étapes', 'Chantier propre et protégé', 'Remise aux normes plomberie et électricité'],
    category: 'Rénovation',
  },
  {
    slug: 'amenagement-cabinets',
    icon: 'Stethoscope',
    title: 'Aménagement des espaces plateau',
    text: 'Cabinets médicaux, laboratoires d\'analyses, espaces commerciaux : circulation, acoustique, éclairage et finitions soignées.',
    intro:
      "Cabinet médical, laboratoire d'analyses, espace commercial : votre local est votre outil de travail. Nous l'aménageons pour qu'il soit fonctionnel, accueillant et livré à la date prévue pour ne pas retarder votre ouverture.",
    steps: [
      { title: 'Cahier des besoins', text: 'Accueil, salles de soins ou d\'analyses, espace de vente, stockage : chaque usage est défini avec vous.' },
      { title: 'Plan et devis', text: 'Implantation des pièces, réseaux (eau, électricité, données) et chiffrage détaillé.' },
      { title: 'Réalisation', text: 'Cloisons, faux plafonds, électricité, plomberie, menuiserie sur mesure, revêtements.' },
      { title: 'Livraison clés en main', text: 'Local prêt à équiper et à recevoir vos patients ou clients.' },
    ],
    benefits: ['Respect strict du calendrier d\'ouverture', 'Confort acoustique et éclairage adaptés', 'Image professionnelle et soignée'],
    category: 'Cabinets',
  },
  {
    slug: 'amenagement-facades',
    icon: 'Layers',
    title: 'Aménagement de façades',
    text: 'Habillage en alucobond, profil trespa, aluminium, bardage et autres solutions pour une façade moderne et durable.',
    intro:
      "Une façade donne la première impression de votre bâtiment. Nous réalisons l'habillage en alucobond, en profil trespa, en aluminium, le bardage et d'autres solutions pour moderniser et protéger vos façades.",
    steps: [
      { title: 'Relevé et choix des matériaux', text: 'Visite du bâtiment, relevé des dimensions et choix de l\'habillage et des teintes.' },
      { title: 'Plan et devis', text: 'Chiffrage détaillé et calepinage de la façade avant le début des travaux.' },
      { title: 'Pose de l\'habillage', text: 'Ossature, fixation et pose de l\'alucobond, du trespa, de l\'aluminium ou du bardage.' },
      { title: 'Contrôle final', text: 'Vérification des alignements, des joints et des finitions avant réception.' },
    ],
    benefits: ['Alucobond, trespa, aluminium, bardage', 'Façade moderne et résistante', 'Finitions nettes et alignements précis'],
    category: 'Rénovation',
  },
  {
    slug: 'finitions',
    icon: 'PaintRoller',
    title: 'Peinture, carrelage et revêtements',
    text: 'Zellige, marbre, carrelage grand format, enduits décoratifs et peinture haut de gamme.',
    intro:
      "Les finitions font la différence. Nous posons carrelage, marbre, zellige et revêtements décoratifs, et réalisons des peintures nettes, durables et adaptées à chaque pièce.",
    steps: [
      { title: 'Choix des matériaux', text: 'Conseils sur les teintes, formats et matières selon l\'usage de chaque pièce.' },
      { title: 'Préparation des supports', text: 'Ragréage, enduits et traitements pour une base parfaitement plane.' },
      { title: 'Pose et application', text: 'Pose soignée, joints réguliers, peinture en plusieurs couches.' },
      { title: 'Contrôle final', text: 'Vérification pièce par pièce avant remise des clés.' },
    ],
    benefits: ['Pose soignée et alignements précis', 'Large choix de revêtements', 'Finitions durables'],
    category: 'Rénovation',
  },
  {
    slug: 'plomberie-electricite',
    icon: 'Wrench',
    title: 'Plomberie et électricité',
    text: 'Installations neuves ou reprises complètes, conformes et testées avant livraison.',
    intro:
      "Réseaux d'eau, évacuations, tableaux électriques, éclairage : nous réalisons des installations neuves ou reprenons l'existant pour plus de sécurité et de confort.",
    steps: [
      { title: 'Relevé et schéma', text: 'Repérage des points d\'eau et d\'électricité, dimensionnement des réseaux.' },
      { title: 'Installation', text: 'Pose des canalisations, gaines, tableau et appareillage.' },
      { title: 'Tests', text: 'Essais en pression, contrôle des protections et du fonctionnement.' },
      { title: 'Remise des plans', text: 'Repérage des circuits pour faciliter les interventions futures.' },
    ],
    benefits: ['Installations conformes et sécurisées', 'Essais avant livraison', 'Intégration discrète dans la décoration'],
    category: 'Rénovation',
  },
  {
    slug: 'amenagement-interieur-exterieur',
    icon: 'Trees',
    title: 'Aménagement intérieur et extérieur',
    text: 'Cuisines, dressings, menuiserie sur mesure, travaux en placoplâtre (biatris), terrasses, piscines et jardins.',
    intro:
      "Cuisine ouverte, dressing sur mesure, terrasse, piscine ou jardin : nous aménageons vos espaces de vie pour qu'ils soient beaux, pratiques et faciles à entretenir.",
    steps: [
      { title: 'Conception', text: 'Plans, ambiances et choix des matériaux avec vous.' },
      { title: 'Fabrication et préparation', text: 'Menuiserie sur mesure, travaux en placoplâtre (biatris) et préparation des supports intérieurs et extérieurs.' },
      { title: 'Installation', text: 'Pose, raccordements et aménagements extérieurs.' },
      { title: 'Réception', text: 'Contrôle des finitions et conseils d\'entretien.' },
    ],
    benefits: ['Menuiserie sur mesure', 'Travaux en placoplâtre (biatris)', 'Cohérence entre intérieur et extérieur', 'Conseils d\'entretien inclus'],
    category: 'Rénovation',
  },
  {
    slug: 'isolation',
    icon: 'Package',
    title: 'Vente de produits d\'isolation',
    text: 'Polystyrène, polyuréthane et polycoffre, en collaboration avec SMH Le Designeur.',
    intro:
      "Nous proposons à la vente des produits d'isolation : polystyrène, polyuréthane et polycoffre, en collaboration avec SMH Le Designeur.",
    steps: [
      { title: 'Choix du produit', text: 'Conseil sur le type d\'isolant adapté à votre projet : polystyrène, polyuréthane ou polycoffre.' },
      { title: 'Devis', text: 'Quantités et prix détaillés selon vos besoins.' },
      { title: 'Livraison', text: 'Commande préparée et livrée selon le calendrier de votre chantier.' },
    ],
    benefits: ['Polystyrène, polyuréthane, polycoffre', 'Conseil pour choisir le bon isolant', 'En collaboration avec SMH Le Designeur'],
    category: 'Isolation',
    partner: {
      label: 'En collaboration avec',
      name: 'SMH Le Designeur',
      logo: '/images/smh-le-designeur.png',
    },
  },
]

export const values = [
  { title: 'Rigueur', text: 'Des chantiers organisés, suivis et contrôlés.' },
  { title: 'Transparence', text: 'Des devis clairs, une communication honnête.' },
  { title: 'Esthétique', text: 'Le souci du détail, du choix des matériaux à la finition.' },
  { title: 'Respect des engagements', text: 'Des délais et des budgets annoncés pour être tenus.' },
]

export const method = [
  { title: 'Écoute et visite', text: 'Nous nous déplaçons, écoutons votre projet et relevons les contraintes du lieu.' },
  { title: 'Devis et conception', text: 'Un devis clair, poste par poste, et une conception adaptée à votre projet.' },
  { title: 'Planification', text: 'Un planning précis, validé avec vous avant le début des travaux.' },
  { title: 'Réalisation et suivi', text: 'Un chantier organisé, suivi et contrôlé, avec des points réguliers.' },
  { title: 'Livraison et garantie', text: 'Réception avec vous, levée des réserves et garantie après livraison.' },
]

export const targets = [
  'Particuliers : appartements, villas, maisons',
  'Professionnels : médecins, dentistes, avocats, cabinets',
  'Partenaires : architectes, décorateurs, agences immobilières, promoteurs',
]

export const projectTypes = [
  'Construction de villa',
  'Construction de maison',
  'Rénovation d\'appartement',
  'Rénovation de villa ou maison',
  'Aménagement de cabinet professionnel',
  'Aménagement d\'autres locaux',
  'Finitions (peinture, carrelage…)',
  'Aménagement de façade',
  'Produits d\'isolation',
  'Autre',
]
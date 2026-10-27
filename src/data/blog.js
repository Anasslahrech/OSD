// Articles de conseils (utiles au référencement). Les textes ci-dessous sont des EXEMPLES
// à remplacer par ceux de la chargée de communication.
// Pour ajouter un article : copier une entrée, choisir un "slug" unique (sans accents ni espaces)
// et une catégorie existante (ou nouvelle). "paragraphs" accepte du texte simple.
export const blogCategories = ['Tous', 'Rénovation', 'Construction', 'Cabinets']

export const posts = [
  {
    slug: 'renover-un-appartement-par-ou-commencer',
    title: 'Rénover un appartement : par où commencer ?',
    category: 'Rénovation',
    date: '2026-10-15',
    excerpt: "Les premières décisions à prendre avant de lancer des travaux, pour garder le budget et le planning sous contrôle.",
    paragraphs: [
      "Avant de choisir la couleur des murs, commencez par définir l'objectif de votre rénovation : gagner de la place, moderniser, ou remettre l'appartement aux normes. Cet objectif guide tous les choix qui suivent.",
      "Faites ensuite un état des lieux : humidité, électricité, plomberie, sols. Ce sont les travaux invisibles qui pèsent le plus sur le budget, mieux vaut les connaître avant de signer un devis.",
      "Demandez un devis détaillé poste par poste, avec un planning. Cela permet de comparer, de prioriser et, si besoin, de répartir les travaux en plusieurs étapes.",
      "Enfin, prévoyez une marge pour les imprévus. Dans une rénovation, il est courant de découvrir des problèmes une fois les murs ouverts.",
    ],
  },
  {
    slug: 'amenager-un-cabinet-medical-points-cles',
    title: 'Aménager un cabinet médical : les points clés',
    category: 'Cabinets',
    date: '2026-10-08',
    excerpt: "Circulation, acoustique, réseaux : ce qu'il faut prévoir pour un cabinet confortable pour les patients et efficace pour vous.",
    paragraphs: [
      "Un cabinet se prépare autour du parcours du patient : accueil, attente, consultation. Une bonne implantation évite les croisements et préserve la confidentialité.",
      "L'acoustique est souvent oubliée. Des cloisons adaptées et des portes bien posées évitent que les conversations se propagent jusqu'à la salle d'attente.",
      "Anticipez les réseaux : eau, électricité, informatique, climatisation. Les prévoir avant les cloisons évite des reprises coûteuses.",
      "Pensez enfin au calendrier : un chantier bien planifié permet d'ouvrir à la date prévue.",
    ],
  },
  {
    slug: 'construire-une-villa-les-etapes',
    title: 'Construire une villa : les grandes étapes',
    category: 'Construction',
    date: '2026-09-28',
    excerpt: "De l'étude du terrain à la remise des clés, les étapes à connaître avant de se lancer.",
    paragraphs: [
      "Tout commence par le terrain et les plans : étude du sol, autorisations et choix de l'architecte. Cette phase conditionne la qualité et le coût de la construction.",
      "Vient ensuite le gros œuvre : fondations, structure, murs et toiture. C'est l'étape la plus longue et celle où le suivi de chantier compte le plus.",
      "Le second œuvre regroupe les cloisons, la plomberie, l'électricité et les menuiseries. Puis les finitions : carrelage, peinture, éclairage.",
      "À la fin, une réception avec liste de réserves permet de vérifier chaque détail avant de prendre possession de la villa.",
    ],
  },
]

// Toutes les informations qui changent souvent (coordonnées, textes, services,
// avis, liens) sont centralisées ici pour faciliter les mises à jour futures.

export const brand = {
  name: "RÉNOV HABITAT",
  legalName: "Rénov Habitat",
};

// ⚠️ Numéros à remplacer par les vrais numéros de l'entreprise avant mise en ligne définitive.
export const contact = {
  emergencyLabel: "Service d'urgence 24h/24 et 7j/7",
  phonePrimaryDisplay: "05 61 00 00 00",
  phonePrimaryHref: "tel:0561000000",
  phoneSecondaryDisplay: "06 00 00 00 00",
  phoneSecondaryHref: "tel:0600000000",
  email: "info@renov-habitat.fr",
  emailHref: "mailto:info@renov-habitat.fr",
  city: "Toulouse, France",
};

export const nav = [
  { label: "Nos services", href: "/services" },
  { label: "À qui nous servons", href: "/clientele" },
  { label: "À propos", href: "/a-propos" },
];

export const ctaLabel = "Obtenir une soumission gratuite";

export const hero = {
  heading: "Redonnez vie à votre maison avec des experts en rénovation",
  reassurance:
    "Dégât d'eau, incendie, urgence ? Nous sommes là pour vous aider à remettre en état et rénover, à tout moment, de jour comme de nuit.",
};

export const partners = [
  { name: "Mr. Rooter", size: 16, weight: 800, tracking: "-0.01em" },
  { name: "Benjamin Moore", size: 16, weight: 600, tracking: "0.01em" },
  { name: "ATLANTIC PAINT", size: 15, weight: 400, tracking: "0.12em" },
  { name: "Rosedale Flooring", size: 15, weight: 600, tracking: "0.02em" },
  { name: "Sherwin Williams", size: 16, weight: 700, italic: true },
  {
    name: "FLASH",
    size: 17,
    weight: 800,
    italic: true,
    tracking: "-0.02em",
  },
];

export type PhotoTile = {
  label: string;
  image: string;
  href: string;
  placeholder?: false;
};
export type PlaceholderTile = {
  label: string;
  placeholder: true;
  caption: string;
  href: string;
};

const remiseEnEtatHref = "/services/remise-en-etat";
const renovationHref = "/services/renovation";

export const restorationServices: PhotoTile[] = [
  { label: "Intervention d'urgence", image: "urgence-tempete", href: remiseEnEtatHref },
  { label: "Dégât d'eau", image: "degat-eau", href: remiseEnEtatHref },
  { label: "Incendie et fumée", image: "incendie-fumee", href: remiseEnEtatHref },
  { label: "Élimination des moisissures", image: "moisissures", href: remiseEnEtatHref },
];

export const services: (PhotoTile | PlaceholderTile)[] = [
  {
    label: "Installation",
    placeholder: true,
    caption: "photo installation",
    href: renovationHref,
  },
  { label: "Travaux", image: "travaux", href: renovationHref },
  { label: "Revêtement de sol", image: "revetement-sol", href: renovationHref },
  { label: "Carrelage", image: "carrelage", href: renovationHref },
  {
    label: "Finition de salle de bain",
    placeholder: true,
    caption: "photo salle de bain",
    href: renovationHref,
  },
  {
    label: "Aménagement de sous-sol",
    placeholder: true,
    caption: "photo sous-sol",
    href: renovationHref,
  },
  { label: "Peinture", image: "peinture", href: renovationHref },
  {
    label: "Démolition",
    placeholder: true,
    caption: "photo démolition",
    href: remiseEnEtatHref,
  },
];

export const clientele = [
  {
    title: "Propriétés résidentielles",
    icon: "house" as const,
    body: "Que vous soyez propriétaire d'une maison, d'un condo ou responsable d'un immeuble locatif, nous intervenons rapidement pour limiter les dégâts et remettre les lieux en état, sans compliquer votre quotidien.",
    items: [
      "Gestionnaires d'immeubles résidentiels",
      "Propriétaires de maisons",
      "Propriétaires de condos",
      "Locataires",
    ],
  },
  {
    title: "Propriétés commerciales",
    icon: "building" as const,
    body: "Un sinistre dans un commerce ou un immeuble locatif coûte cher à chaque jour d'arrêt. Nous coordonnons nos interventions pour limiter l'impact sur votre activité et vos locataires.",
    items: [
      "Propriétaires d'immeubles commerciaux",
      "Gestionnaires de propriétés commerciales",
      "Espaces à louer pour entreprises",
      "Secteur de l'hôtellerie",
    ],
  },
  {
    title: "Professionnels de l'assurance",
    icon: "person" as const,
    body: "Nous travaillons couramment avec les courtiers et experts en sinistres : rapports clairs, documentation photo et suivi rigoureux pour accélérer le traitement des dossiers.",
    items: [
      "Courtiers",
      "Experts en sinistres",
      "Experts indépendants",
      "Gestionnaires de sinistres",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Rénov Habitat a été très facile à contacter et m'a tenu informé de chaque étape, tout était clair.",
    name: "Maired Raupach",
    tone: "light" as const,
  },
  {
    quote:
      "Leur prise en charge avec l'assurance a été très efficace et m'a évité bien des tracas.",
    name: "Joel Saalfeld",
    tone: "lighter" as const,
  },
  {
    quote:
      "La démolition et le nettoyage ont été rapides et efficaces, avec une équipe soucieuse de la sécurité (protection contre la poussière, déshumidification, stérilisation).",
    name: "Emese Tokes",
    tone: "light" as const,
  },
  {
    quote:
      "Intervention en pleine nuit après un dégât d'eau : équipe sur place en moins d'une heure.",
    name: "Philippe Cardin",
    tone: "lighter" as const,
  },
];

export const googleReviewsLabel = "Voir plus de 100 avis Google";
export const testimonialsSubline =
  "Note moyenne de 5 étoiles basée sur tous les avis";

export const stats = [
  { icon: "stars" as const, value: "5 étoiles", caption: "Note moyenne" },
  { icon: "briefcase" as const, value: "570 projets", caption: "Réalisés" },
  { icon: "calendar" as const, value: "22 ans", caption: "D'expérience" },
];

export const closingCta = {
  heading: "Prêt à remettre votre maison en état ?",
  body: "Nous sommes là pour vous aider, afin que vous retrouviez la tranquillité d'esprit.",
};

export const trustBadges = [
  { color: "#1544F5", shape: "diamond" as const, label: "Garantie\n3 ans" },
  { color: "#2E8B57", shape: "circle" as const, label: "IICRC\ncertifié" },
];

export const footerColumns = [
  {
    title: "Rénovation",
    links: [
      { label: "Réparations de gypse", href: "/services/renovation" },
      { label: "Portes et moulures", href: "/services/renovation" },
      { label: "Revêtement de sol", href: "/services/renovation" },
      { label: "Carrelage", href: "/services/renovation" },
      { label: "Peinture", href: "/services/renovation" },
    ],
  },
  {
    title: "Remise en état",
    links: [
      { label: "Intervention d'urgence", href: "/services/remise-en-etat" },
      { label: "Dégât d'eau", href: "/services/remise-en-etat" },
      { label: "Élimination des moisissures", href: "/services/remise-en-etat" },
      { label: "Incendie et fumée", href: "/services/remise-en-etat" },
      { label: "Démolition", href: "/services/remise-en-etat" },
    ],
  },
  {
    title: "Plus d'informations",
    links: [
      { label: "À propos", href: "/a-propos" },
      { label: "Nos services", href: "/services" },
      { label: "Secteurs desservis", href: "/clientele" },
      { label: "Nous contacter", href: "#soumission" },
    ],
  },
];

export const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Conditions d'utilisation", href: "/conditions-utilisation" },
];

export const copyright = "© 2024 Rénov Habitat. Tous droits réservés.";

// --- Pages de détail (services, à propos, avis, pages légales) ---

export const servicesHub = {
  intro:
    "Deux façons de travailler avec nous : des projets de rénovation planifiés, et des interventions de remise en état après un sinistre. Dans les deux cas, une seule équipe, du premier appel jusqu'à la fin des travaux.",
  categories: [
    {
      title: "Rénovation",
      href: "/services/renovation",
      body: "Gypse, portes et moulures, revêtement de sol, carrelage, peinture, salle de bain, sous-sol : des travaux planifiés, réalisés proprement et dans les délais annoncés.",
    },
    {
      title: "Remise en état",
      href: "/services/remise-en-etat",
      body: "Dégât d'eau, incendie, moisissure : une équipe disponible 24h/24 et 7j/7 pour intervenir vite et limiter l'ampleur des dommages.",
    },
  ],
};

export const renovationDetail = [
  {
    title: "Réparations de gypse",
    body: "Trous, fissures, dégâts d'eau ou de choc : réparation et finition du gypse avant peinture, avec un résultat invisible une fois le mur repeint.",
  },
  {
    title: "Portes et moulures",
    body: "Installation et remplacement de portes intérieures et extérieures, plinthes et moulures, pour une finition soignée à chaque pièce.",
  },
  {
    title: "Revêtement de sol",
    body: "Bois franc, stratifié, vinyle : pose de revêtement de sol adaptée à chaque pièce et à votre budget, avec un fini durable.",
  },
  {
    title: "Carrelage",
    body: "Pose de carrelage mural et au sol — cuisines, salles de bain, entrées — avec un travail de coupe et de joint précis.",
  },
  {
    title: "Peinture",
    body: "Peinture intérieure et extérieure, préparation des surfaces comprise, avec des produits de qualité professionnelle et une protection soignée des lieux.",
  },
  {
    title: "Installation",
    body: "Armoires, comptoirs, électroménagers, accessoires : installation soignée pour vos projets de cuisine, salle de bain ou aménagement intérieur.",
  },
  {
    title: "Finition de salle de bain",
    body: "Rénovation complète ou partielle de salle de bain : plomberie, carrelage, vanité, douche — un projet coordonné du début à la fin.",
  },
  {
    title: "Aménagement de sous-sol",
    body: "Transformation de sous-sol en espace de vie : isolation, cloisons, électricité, finition — pour gagner de l'espace habitable.",
  },
];

export const remiseEnEtatDetail = [
  {
    title: "Intervention d'urgence",
    body: "Une équipe joignable 24h/24 et 7j/7 pour sécuriser les lieux dès les premières heures suivant un sinistre, de jour comme de nuit.",
  },
  {
    title: "Dégât d'eau",
    body: "Extraction de l'eau, déshumidification et séchage contrôlé pour limiter la propagation des dommages et prévenir l'apparition de moisissure.",
  },
  {
    title: "Incendie et fumée",
    body: "Nettoyage et désodorisation après un incendie, inspection des structures et des surfaces touchées par la suie et la fumée.",
  },
  {
    title: "Élimination des moisissures",
    body: "Détection, confinement et retrait sécurisé de la moisissure, avec protection contre la poussière et stérilisation des surfaces traitées.",
  },
  {
    title: "Démolition",
    body: "Démolition ciblée des matériaux endommagés ou contaminés, étape préalable indispensable avant toute reconstruction.",
  },
];

export const aboutPage = {
  intro:
    "Rénov Habitat est une entreprise française de rénovation et de remise en état basée à Toulouse. Nous intervenons aussi bien sur des projets de rénovation planifiés que sur des urgences liées à un dégât d'eau, un incendie ou une moisissure.",
  story:
    "Fondée par des gens de métier, l'entreprise s'est construite autour d'une idée simple : une seule équipe, responsable du premier appel jusqu'à la fin des travaux, sans sous-traitance en cascade ni mauvaises surprises sur la facture.",
  values: [
    {
      title: "Disponibilité",
      body: "Une ligne d'urgence active 24h/24 et 7j/7 pour les sinistres qui n'attendent pas.",
    },
    {
      title: "Transparence",
      body: "Des soumissions claires et un suivi de chantier honnête, sans coûts cachés.",
    },
    {
      title: "Métier",
      body: "Des équipes certifiées et formées aux normes de l'industrie, pas de sous-traitance improvisée.",
    },
  ],
};

export const avisPage = {
  intro:
    "Note moyenne de 5 étoiles sur plus de 100 avis Google. Voici quelques retours de clients récents.",
  extraTestimonials: [
    {
      quote:
        "Équipe professionnelle du début à la fin, on nous a expliqué chaque étape avant de commencer les travaux.",
      name: "Sophie Tremblay",
      tone: "light" as const,
    },
    {
      quote:
        "Rénovation de salle de bain impeccable, livrée dans les délais annoncés. Je recommande sans hésiter.",
      name: "Marc-André Bouchard",
      tone: "lighter" as const,
    },
    {
      quote:
        "Après un dégât d'eau chez un locataire, l'équipe est intervenue le soir même. Vraiment rassurant.",
      name: "Nadia Belkacem",
      tone: "light" as const,
    },
    {
      quote:
        "Communication claire avec notre assureur, ça nous a évité beaucoup de démarches.",
      name: "David Ferreira",
      tone: "lighter" as const,
    },
  ],
};

// ⚠️ Champs marqués [à compléter] : informations légales réelles à fournir
// (forme juridique, SIRET, capital social, RCS...) avant mise en ligne définitive.
export const legalNotice = {
  updated: "Dernière mise à jour : septembre 2026",
  sections: [
    {
      title: "Éditeur du site",
      body: "Rénov Habitat, [à compléter — forme juridique, ex. SASU], au capital de [à compléter] €. Siège social : [à compléter — adresse complète], Toulouse, France. SIRET : [à compléter]. RCS Toulouse : [à compléter]. TVA intracommunautaire : [à compléter].",
    },
    {
      title: "Directeur de la publication",
      body: "[À compléter — nom du responsable de publication, généralement le gérant ou président de l'entreprise].",
    },
    {
      title: "Contact",
      body: `${contact.email} — ${contact.phonePrimaryDisplay}`,
    },
    {
      title: "Hébergement",
      body: "Ce site est hébergé par Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis.",
    },
    {
      title: "Propriété intellectuelle",
      body: "L'ensemble des textes, photographies et éléments visuels présents sur ce site est la propriété de Rénov Habitat, sauf mention contraire, et ne peut être reproduit sans autorisation écrite préalable.",
    },
    {
      title: "Litiges",
      body: "Le présent site est soumis au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.",
    },
  ],
};

export const privacyPolicy = {
  updated: "Dernière mise à jour : septembre 2026",
  sections: [
    {
      title: "Renseignements que nous recueillons",
      body: "Lorsque vous nous contactez ou demandez une soumission, nous recueillons les renseignements que vous nous fournissez volontairement : nom, coordonnées, adresse du chantier et description des travaux ou du sinistre.",
    },
    {
      title: "Utilisation des renseignements",
      body: "Ces renseignements servent uniquement à préparer votre soumission, planifier une intervention et assurer le suivi de votre dossier, y compris avec votre assureur lorsque applicable.",
    },
    {
      title: "Partage des renseignements",
      body: "Nous ne vendons ni ne louons vos renseignements personnels. Ils peuvent être partagés avec un assureur ou un expert en sinistres uniquement à votre demande ou avec votre consentement.",
    },
    {
      title: "Conservation et sécurité",
      body: "Vos renseignements sont conservés le temps nécessaire à la réalisation des travaux et au suivi de garantie, puis supprimés ou archivés de façon sécurisée, conformément au Règlement général sur la protection des données (RGPD) et à la législation française applicable.",
    },
    {
      title: "Vos droits",
      body: "Vous pouvez en tout temps demander l'accès, la correction ou la suppression des renseignements que nous détenons à votre sujet en nous contactant directement.",
    },
  ],
};

export const termsOfUse = {
  updated: "Dernière mise à jour : septembre 2026",
  sections: [
    {
      title: "Objet du site",
      body: "Ce site présente les services de rénovation et de remise en état de Rénov Habitat. Il a un but informatif et ne constitue pas une soumission ferme tant qu'un devis écrit n'a pas été émis.",
    },
    {
      title: "Exactitude du contenu",
      body: "Nous mettons à jour ce site régulièrement, mais certains éléments (photos, tarifs indicatifs, disponibilité) peuvent varier. Contactez-nous pour confirmer toute information avant de prendre une décision.",
    },
    {
      title: "Propriété intellectuelle",
      body: "Les textes, photos et éléments visuels de ce site sont la propriété de Rénov Habitat et ne peuvent être reproduits sans autorisation écrite préalable.",
    },
    {
      title: "Garanties de travaux",
      body: "Les garanties applicables à nos travaux sont précisées dans chaque soumission écrite et peuvent varier selon la nature du projet.",
    },
    {
      title: "Limitation de responsabilité",
      body: "Rénov Habitat ne peut être tenue responsable des dommages indirects résultant de l'utilisation de ce site. En cas de sinistre, contactez-nous directement pour toute question urgente.",
    },
  ],
};

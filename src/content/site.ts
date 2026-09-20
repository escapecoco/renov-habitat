// Toutes les informations qui changent souvent (coordonnées, textes, services,
// avis, liens) sont centralisées ici pour faciliter les mises à jour futures.

export const brand = {
  name: "APL RÉNOVATION",
  legalName: "APL Rénovation Ltée",
};

export const contact = {
  emergencyLabel: "Service d'urgence 24h/24 et 7j/7",
  phonePrimaryDisplay: "1-833-760-NORD (1-833-760-4663)",
  phonePrimaryHref: "tel:18337604663",
  phoneSecondaryDisplay: "604-446-2773",
  phoneSecondaryHref: "tel:6044462773",
  email: "info@aplrenovation.ca",
  emailHref: "mailto:info@aplrenovation.ca",
  city: "Vancouver, C.-B.",
};

export const nav = [
  { label: "Nos services", href: "#services" },
  { label: "À qui nous servons", href: "#clientele" },
  { label: "À propos", href: "#apropos" },
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
  placeholder?: false;
};
export type PlaceholderTile = {
  label: string;
  placeholder: true;
  caption: string;
};

export const restorationServices: PhotoTile[] = [
  { label: "Intervention d'urgence", image: "urgence-tempete" },
  { label: "Dégât d'eau", image: "degat-eau" },
  { label: "Incendie et fumée", image: "incendie-fumee" },
  { label: "Élimination des moisissures", image: "moisissures" },
];

export const services: (PhotoTile | PlaceholderTile)[] = [
  { label: "Installation", placeholder: true, caption: "photo installation" },
  { label: "Travaux", image: "travaux" },
  { label: "Revêtement de sol", image: "revetement-sol" },
  { label: "Carrelage", image: "carrelage" },
  {
    label: "Finition de salle de bain",
    placeholder: true,
    caption: "photo salle de bain",
  },
  {
    label: "Aménagement de sous-sol",
    placeholder: true,
    caption: "photo sous-sol",
  },
  { label: "Peinture", image: "peinture" },
  { label: "Démolition", placeholder: true, caption: "photo démolition" },
];

export const clientele = [
  {
    title: "Propriétés résidentielles",
    icon: "house" as const,
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
      "APL a été très facile à contacter et m'a tenu informé de chaque étape, tout était clair.",
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
  { color: "#D8232A", shape: "rect" as const, label: "Entreprise\ncanadienne" },
  { color: "#1544F5", shape: "diamond" as const, label: "Garantie\n3 ans" },
  { color: "#2E8B57", shape: "circle" as const, label: "IICRC\ncertifié" },
];

export const footerColumns = [
  {
    title: "Rénovation",
    links: [
      { label: "Réparations de gypse", href: "#services" },
      { label: "Portes et moulures", href: "#services" },
      { label: "Revêtement de sol", href: "#services" },
      { label: "Carrelage", href: "#services" },
      { label: "Peinture", href: "#services" },
    ],
  },
  {
    title: "Remise en état",
    links: [
      { label: "Intervention d'urgence", href: "#services" },
      { label: "Dégât d'eau", href: "#services" },
      { label: "Élimination des moisissures", href: "#services" },
      { label: "Incendie et fumée", href: "#services" },
      { label: "Démolition", href: "#services" },
    ],
  },
  {
    title: "Plus d'informations",
    links: [
      { label: "À propos", href: "#apropos" },
      { label: "Nos services", href: "#services" },
      { label: "Secteurs desservis", href: "#clientele" },
      { label: "Nous contacter", href: "#soumission" },
    ],
  },
];

export const legalLinks = [
  { label: "Politique de confidentialité", href: "#apropos" },
  { label: "Conditions d'utilisation", href: "#apropos" },
];

export const copyright = "© 2024 APL Rénovation Ltée. Tous droits réservés.";

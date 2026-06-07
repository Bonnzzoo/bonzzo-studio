export interface ProjectData {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  accent: string;
  company: string;
  tools: string;
  year: string;
  duration: string;
  description: string;
  type: "ui-ux" | "vibe-landing" | "shopify" | "vibe-website";
  workflow?: {
    number: string;
    label: string;
  }[];
  liveLink?: string;
  hasImage?: boolean;
  image?: string;
  prototypeUrl?: string;
  githubUrl?: string;
  [key: string]: any;
}

export const projectsData: Record<string, ProjectData> = {
  /* ─────────────────────────────────────
     UI/UX PROJECTS
     ───────────────────────────────────── */
  "you-app": {
    slug: "you-app",
    title: "You App.",
    category: "Travel and Booking",
    tags: ["UX", "UI", "App Design"],
    accent: "#CDFF4D",
    company: "Crete Agency",
    tools: "Figma, FigJam",
    year: "2025",
    duration: "2 months",
    type: "ui-ux",
    hasImage: true,
    image: "/projects/ui-ux/You.png",
    liveLink: "https://you-app.net/en",
    description: "A smart travel companion app designed for seamless booking experiences and exclusive travel offers, unlocking adventures effortlessly.",
  },
  trvly: {
    slug: "trvly",
    title: "Trvly",
    category: "Social Travel App",
    tags: ["UI/UX", "App Design", "UX Research"],
    accent: "#FF6B6B",
    company: "Crete Agency",
    tools: "Figma, FigJam",
    year: "2025",
    duration: "2 months",
    type: "ui-ux",
    hasImage: false,
    description: "A social-first travel platform combining short-form video discovery with seamless hotel booking.",
  },
  autoclub: {
    slug: "autoclub",
    title: "AutoClub",
    category: "Automotive Services",
    tags: ["UI/UX", "Product Design"],
    accent: "#1E90FF",
    company: "Crete Agency",
    tools: "Figma",
    year: "2025",
    duration: "2 months",
    type: "ui-ux",
    hasImage: true,
    image: "/projects/ui-ux/AC.png",
    liveLink: "https://autoclub.app/",
    description: "An all-in-one automotive services app for buying, selling, insurance, and maintenance scheduling.",
  },
  "mazad-el-arab": {
    slug: "mazad-el-arab",
    title: "Mazad el Arab",
    category: "Auction Platform",
    tags: ["UI/UX", "App Design"],
    accent: "#D4AF37",
    company: "Crete Agency",
    tools: "Figma",
    year: "2025",
    duration: "2 months",
    type: "ui-ux",
    hasImage: true,
    image: "/projects/ui-ux/Mazad Ell Arab.jpg",
    liveLink: "https://mzadqatar.com/en",
    description: "A digital auction platform for the Arab market, enabling real-time bidding on vehicles, properties, and collectibles.",
  },
  "boomroom": {
    slug: "boomroom",
    title: "Boom Room",
    category: "Entertainment Platform",
    tags: ["UI/UX", "Web Design"],
    accent: "#FF1493",
    company: "Crete Agency",
    tools: "Figma",
    year: "2024",
    duration: "1 month",
    type: "ui-ux",
    hasImage: true,
    image: "/projects/ui-ux/Boom Room.png",
    description: "A high-energy promotional platform capturing a vibrant entertainment venue atmosphere.",
  },
  "mohamed-fahmy": {
    slug: "mohamed-fahmy",
    title: "Mohamed Fahmy",
    category: "Personal Portfolio",
    tags: ["UI/UX", "Web Design"],
    accent: "#5C5C5C",
    company: "Independent",
    tools: "Figma",
    year: "2024",
    duration: "3 weeks",
    type: "ui-ux",
    hasImage: true,
    image: "/projects/ui-ux/Mohamed Fahmy website.png",
    description: "A sleek, professional portfolio design highlighting key achievements and services.",
  },

  /* ─────────────────────────────────────
     VIBE CODED LANDING PAGES
     ───────────────────────────────────── */
  zajel: {
    slug: "zajel",
    title: "Zajel",
    category: "Landing Page",
    tags: ["Web Design", "Landing Page"],
    accent: "#FF1493",
    company: "Crete Agency",
    tools: "Figma, Next.js",
    year: "2025",
    duration: "3 weeks",
    type: "vibe-website",
    hasImage: true,
    image: "/projects/landing-page/Zajel.jpg",
    liveLink: "https://zajel.ai/en",
    description: "A high-conversion landing page for Zajel AI, featuring modern aesthetics and smooth animations.",
  },
  manzuma: {
    slug: "manzuma",
    title: "Manzuma AI",
    category: "AI Landing Page",
    tags: ["Web Design", "UI/UX"],
    accent: "#7B68EE",
    company: "Crete Agency",
    tools: "Next.js",
    year: "2025",
    duration: "2 weeks",
    type: "vibe-website",
    hasImage: true,
    image: "/projects/landing-page/Manzuma.jpg",
    liveLink: "https://manzumaai.com/en",
    description: "A conversion-focused landing page for an AI solutions provider, driving consultation requests and demo bookings.",
  },
  /* ─────────────────────────────────────
     SHOPIFY CUSTOM STORES
     ───────────────────────────────────── */
  "quatra": {
    slug: "quatra",
    title: "Quatra",
    category: "Handcrafted Luxury Jewelry",
    tags: ["shopify", "Custom Store", "Jewelry", "E-commerce"],
    accent: "#66001f",
    company: "Quatra",
    tools: "shopify, Liquid",
    year: "2025",
    duration: "1 month",
    type: "shopify",
    hasImage: true,
    image: "/projects/shopify/Quatra.png",
    liveLink: "https://quatra.co",
    description: "Handcrafted luxury silver rings forged by master artisans in Cairo. Built with a premium shopify custom theme focusing on high-conversion product pages and sleek UI.",
  },
  "waggs-gear": {
    slug: "waggs-gear",
    title: "Waggs Gear",
    category: "Pet Lifestyle & Gear",
    tags: ["shopify", "Theme Development", "E-commerce"],
    accent: "#8b6914",
    company: "Waggs Gear",
    tools: "shopify, Liquid",
    year: "2025",
    duration: "6 weeks",
    type: "shopify",
    hasImage: true,
    image: "/projects/shopify/Waggs.png",
    liveLink: "https://waggsgear.com",
    description: "A lifestyle brand offering high-quality, durable gear for dogs and their owners. Developed with an interactive collection grid and seamless sliding cart experience.",
  },
  "stories-by-snaps": {
    slug: "stories-by-snaps",
    title: "Stories by Snaps",
    category: "AI Creative Photography",
    tags: ["shopify", "AI Modeling", "Visual Storytelling"],
    accent: "#846dec",
    company: "Snaps Ai",
    tools: "shopify",
    year: "2025",
    duration: "1 month",
    type: "shopify",
    hasImage: true,
    image: "/projects/shopify/Stories.png",
    liveLink: "https://stories.bysnaps.ai",
    description: "AI Stories featuring Egyptian AI Models. An elegant custom shopify experience built for the first creative AI platform in Egypt and MENA, prioritizing visual storytelling.",
  },
  "plain-fashion": {
    slug: "plain-fashion",
    title: "Plain Fashion",
    category: "Minimalist Fashion Store",
    tags: ["shopify", "Fashion", "E-commerce"],
    accent: "#1a1a1a",
    company: "Plain Fashion",
    tools: "shopify, Liquid",
    year: "2025",
    duration: "1 month",
    type: "shopify",
    hasImage: true,
    image: "/projects/shopify/Plain.png",
    liveLink: "https://plain-fashion.com",
    description: "A minimalist, high-fidelity shopify storefront for a modern fashion brand, emphasizing sleek typography, neutral palettes, and large editorial imagery.",
  },

  /* ─────────────────────────────────────
     VIBE CODED WEBSITES
     ───────────────────────────────────── */
  "mega-plug": {
    slug: "mega-plug",
    title: "MegaPlug",
    category: "Infrastructure Platform",
    tags: ["Web Design", "Development"],
    accent: "#00D4AA",
    company: "Crete Agency",
    tools: "Next.js, Tailwind CSS",
    year: "2026",
    duration: "Ongoing",
    type: "vibe-website",
    hasImage: true,
    image: "/projects/landing-page/Mega Plug.jpg",
    description: "Egypt's premier EV charging network platform with a premium dark-mode interface and real-time interactive mapping.",
  },
  "crete-website": {
    slug: "crete-website",
    title: "Crete Agency",
    category: "Agency Website",
    tags: ["UI/UX", "Development"],
    accent: "#FF5733",
    company: "Crete Agency",
    tools: "Next.js, Framer Motion",
    year: "2025",
    duration: "2 months",
    type: "ui-ux",
    hasImage: true,
    image: "/projects/ui-ux/Crete-agency.jpg",
    liveLink: "https://creteailabs.com/",
    description: "A bold, modern website redesign for a digital agency, featuring smooth scroll interactions and an immersive project showcase.",
  },
  monazzem: {
    slug: "monazzem",
    title: "Monazzem",
    category: "SaaS Platform",
    tags: ["Web Design", "Development"],
    accent: "#6C63FF",
    company: "Crete Agency",
    tools: "Next.js",
    year: "2025",
    duration: "3 months",
    type: "vibe-website",
    hasImage: true,
    image: "/projects/landing-page/Monazzem.jpg",
    liveLink: "https://monazzem.net/",
    description: "An elegant SaaS platform uniting task management and data analytics into a cohesive, vibe-coded workflow experience.",
  },
};

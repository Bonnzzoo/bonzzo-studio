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
  type: "project" | "landing-page";
  workflow: {
    number: string;
    label: string;
  }[];
  personas?: {
    headers: string[];
    rows: { label: string; values: string[] }[];
  };
  sharedBehavior?: string[];
  hasImage?: boolean;
  prototypeUrl?: string;
}
export const projectsData: Record<string, ProjectData> = {
  /* ─────────────────────────────────────
     MAIN PROJECTS
     ───────────────────────────────────── */

  "you-app": {
    slug: "you-app",
    title: "You App.",
    category: "Travel and Booking — Egypt",
    tags: ["UX", "UI", "App Design", "Website Design", "Responsive Design"],
    accent: "#CDFF4D",
    company: "Crete Agency",
    tools: "Figma, FigJam and Miro",
    year: "2025",
    duration: "2 months",
    type: "project",
    hasImage: true,
    description:
      "YOU is your smart travel companion, designed for explorers who crave seamless booking experiences and exclusive travel offers—all in one place. Whether it's flights, hotels, or getaway packages, YOU brings it all together. This platform is about unlocking adventures, making memories, and giving you the power to travel your way. With YOU, every journey begins with ease and ends with discovery.",
    workflow: [
      { number: "01", label: "Research" },
      { number: "02", label: "UX Stage" },
      { number: "03", label: "App Development" },
      { number: "04", label: "UI Design" },
    ],
    personas: {
      headers: ["Category", "Locals", "Tourists"],
      rows: [
        { label: "Age", values: ["18 - 40 (core: 20-35)", "25-60 (core: 30-50)"] },
        { label: "Gender", values: ["55% Female / 45% Male", "50% Female / 50% Male"] },
        {
          label: "Booking Style",
          values: ["Spontaneous / Mobile-first", "Planned / Info-driven"],
        },
        {
          label: "Interest Types",
          values: [
            "Restaurants, events, concerts, activities",
            "Culture, activities, cruises",
          ],
        },
        {
          label: "Pain Points",
          values: [
            "Scattered info, no live booking",
            "Confusing processes, lack of trust",
          ],
        },
        {
          label: "Preferred Devices",
          values: ["Mobile-first (iOS & Android)", "Mobile-first + web fallback"],
        },
      ],
    },
    sharedBehavior: [
      "Desire for a trustworthy, centralized platform.",
      "Preference for seamless, mobile-first booking.",
      "Interest in photos, reviews, and social proof.",
      "Want to filter experiences by mood, interest, and location.",
      "Value in multi-language support and customer service.",
    ],
  },

  "snaps-ai": {
    slug: "snaps-ai",
    title: "Snaps AI",
    category: "AI Photography Platform",
    tags: ["Product Design", "UX Research", "Visual Identity", "Branding"],
    accent: "#00AAFF",
    company: "Snaps Ai",
    tools: "Figma, Adobe Suite",
    year: "2025",
    duration: "Ongoing",
    type: "project",
    hasImage: true,
    description:
      "Snaps AI is an innovative platform that leverages artificial intelligence to transform the photography experience. From intelligent editing tools to automated workflows, the platform empowers photographers and content creators to produce stunning visuals with unprecedented speed and quality.",
    workflow: [
      { number: "01", label: "Research" },
      { number: "02", label: "Brand Identity" },
      { number: "03", label: "Product Design" },
      { number: "04", label: "Delivery" },
    ],
  },

  monazzem: {
    slug: "monazzem",
    title: "Monazzem",
    category: "SaaS Organization Platform",
    tags: ["UI/UX", "Web Design", "Branding", "Development"],
    accent: "#6C63FF",
    company: "Crete Agency",
    tools: "Figma, Next.js, Framer Motion",
    year: "2025",
    duration: "3 months",
    type: "project",
    hasImage: true,
    description:
      "Monazzem is a comprehensive SaaS platform designed to streamline organizational workflows. The platform brings together task management, team collaboration, and data analytics into a unified, elegant interface that empowers teams to work smarter.",
    workflow: [
      { number: "01", label: "Discovery" },
      { number: "02", label: "UX Architecture" },
      { number: "03", label: "UI Design" },
      { number: "04", label: "Development" },
    ],
  },

  "waggs-gear": {
    slug: "waggs-gear",
    title: "Waggs Gear",
    category: "Shopify — Pet Lifestyle Brand",
    tags: ["Shopify", "Ecommerce", "Branding", "Theme Development"],
    accent: "#C9B99A",
    company: "Independent",
    tools: "Shopify, Liquid, Figma",
    year: "2025",
    duration: "6 weeks",
    type: "project",
    hasImage: true,
    description:
      "Waggs Gear is a premium pet lifestyle brand that combines functional pet accessories with elevated design aesthetics. Built on Shopify with a fully custom Dawn theme, the store features luxury product pages, an interactive collection bento grid, and a slide-out cart with shipping progress gamification.",
    workflow: [
      { number: "01", label: "Brand Strategy" },
      { number: "02", label: "Shopify Setup" },
      { number: "03", label: "Theme Design" },
      { number: "04", label: "Launch" },
    ],
  },

  "mega-plug": {
    slug: "mega-plug",
    title: "MegaPlug",
    category: "EV Charging Infrastructure",
    tags: ["Web Design", "Development", "Technical"],
    accent: "#00D4AA",
    company: "Crete Agency",
    tools: "Next.js, Tailwind CSS, Leaflet",
    year: "2026",
    duration: "Ongoing",
    type: "project",
    description:
      "MegaPlug is Egypt's premier EV charging network, connecting drivers with reliable, fast-charging stations across the country. The platform features real-time station mapping, technical hardware specifications, and a premium dark-mode interface that communicates infrastructure-scale engineering.",
    workflow: [
      { number: "01", label: "Research" },
      { number: "02", label: "Architecture" },
      { number: "03", label: "Development" },
      { number: "04", label: "Deployment" },
    ],
  },

  "crete-website": {
    slug: "crete-website",
    title: "Crete Agency",
    category: "Digital Agency — Website",
    tags: ["Web Design", "UI/UX", "Development", "Branding"],
    accent: "#FF5733",
    company: "Crete Agency",
    tools: "Figma, Next.js, Framer Motion",
    year: "2025",
    duration: "2 months",
    type: "project",
    description:
      "A complete website redesign for Crete Digital Solutions — a Cairo-based creative agency specializing in branding, UI/UX, and web development. The site showcases the agency's portfolio, services, and team with a bold, modern aesthetic that reflects their creative capabilities.",
    workflow: [
      { number: "01", label: "Content Strategy" },
      { number: "02", label: "UI/UX Design" },
      { number: "03", label: "Development" },
      { number: "04", label: "Launch" },
    ],
  },

  trvly: {
    slug: "trvly",
    title: "Trvly",
    category: "Social Travel & Booking App",
    tags: ["UI/UX", "App Design", "Product Design", "UX Research"],
    accent: "#FF6B6B",
    company: "Crete Agency",
    tools: "Figma, FigJam",
    year: "2025",
    duration: "2 months",
    type: "project",
    description:
      "Trvly is a social-first travel platform that combines short-form video discovery with seamless hotel booking. Users explore destinations through immersive video tours and user-generated content, then book with confidence. The app bridges the gap between travel inspiration and action.",
    workflow: [
      { number: "01", label: "Research" },
      { number: "02", label: "UX Design" },
      { number: "03", label: "UI Design" },
      { number: "04", label: "Prototyping" },
    ],
  },

  "boom-room": {
    slug: "boom-room",
    title: "Boom Room",
    category: "Social Entertainment Hub — Egypt",
    tags: ["Branding", "UI/UX", "App Design", "Visual Identity"],
    accent: "#E040FB",
    company: "Crete Agency",
    tools: "Figma, Adobe Illustrator",
    year: "2025",
    duration: "3 months",
    type: "project",
    description:
      "Boom Room is Egypt's first social entertainment hub — a 2,000 sqm venue at Open Air Mall, Madinaty, featuring indoor mini-golf, bowling, social darts, arcade gaming, and live performances. The digital experience spans branding, a booking app, and an immersive web presence that captures the venue's electric energy.",
    workflow: [
      { number: "01", label: "Brand Strategy" },
      { number: "02", label: "Visual Identity" },
      { number: "03", label: "App Design" },
      { number: "04", label: "Delivery" },
    ],
  },

  "mazad-el-arab": {
    slug: "mazad-el-arab",
    title: "Mazad el Arab",
    category: "Online Auction Platform",
    tags: ["UI/UX", "Web Design", "App Design", "Product Design"],
    accent: "#D4AF37",
    company: "Crete Agency",
    tools: "Figma, FigJam",
    year: "2025",
    duration: "2 months",
    type: "project",
    description:
      "Mazad el Arab is a digital auction platform designed for the Arab market, enabling users to bid on vehicles, electronics, properties, and collectibles. The platform features real-time bidding, secure payment gateways, and a premium interface that brings the excitement of live auctions into the digital space.",
    workflow: [
      { number: "01", label: "UX Research" },
      { number: "02", label: "Information Architecture" },
      { number: "03", label: "UI Design" },
      { number: "04", label: "Handoff" },
    ],
  },

  autoclub: {
    slug: "autoclub",
    title: "AutoClub",
    category: "Automotive Services App — Egypt",
    tags: ["UI/UX", "App Design", "Product Design", "UX Research"],
    accent: "#1E90FF",
    company: "Crete Agency",
    tools: "Figma, FigJam",
    year: "2025",
    duration: "2 months",
    type: "project",
    description:
      "AutoClub is an all-in-one automotive services app for the Egyptian market. From buying and selling cars to insurance, financing, and maintenance scheduling — the platform consolidates every car-related need into a single, intuitive experience. Built with a focus on trust, transparency, and ease of use.",
    workflow: [
      { number: "01", label: "User Research" },
      { number: "02", label: "UX Design" },
      { number: "03", label: "UI Design" },
      { number: "04", label: "Prototyping" },
    ],
  },

  /* ─────────────────────────────────────
     LANDING PAGES
     ───────────────────────────────────── */

  gec: {
    slug: "gec",
    title: "GEC",
    category: "Engineering Consultants — Landing Page",
    tags: ["Web Design", "Landing Page", "Development"],
    accent: "#2E86AB",
    company: "Crete Agency",
    tools: "Figma, Next.js",
    year: "2025",
    duration: "3 weeks",
    type: "landing-page",
    description:
      "A premium landing page for GEC — a leading engineering consultancy firm. The design communicates trust, technical precision, and corporate authority through clean layouts, structured content hierarchy, and professional imagery that showcases infrastructure-scale projects.",
    workflow: [
      { number: "01", label: "Content Strategy" },
      { number: "02", label: "UI Design" },
      { number: "03", label: "Development" },
      { number: "04", label: "Launch" },
    ],
  },

  itmam: {
    slug: "itmam",
    title: "Itmam",
    category: "Digital Solutions — Landing Page",
    tags: ["Web Design", "Landing Page", "UI/UX"],
    accent: "#7B68EE",
    company: "Crete Agency",
    tools: "Figma, Next.js",
    year: "2025",
    duration: "2 weeks",
    type: "landing-page",
    description:
      "A conversion-focused landing page for Itmam — a technology and digital solutions provider specializing in ERP systems and enterprise software. The page is designed to clearly communicate complex service offerings while driving consultation requests and demo bookings.",
    workflow: [
      { number: "01", label: "Content Strategy" },
      { number: "02", label: "UI Design" },
      { number: "03", label: "Development" },
      { number: "04", label: "Launch" },
    ],
  },

  "boomroom-landing": {
    slug: "boomroom-landing",
    title: "BoomRoom",
    category: "Entertainment Venue — Landing Page",
    tags: ["Web Design", "Landing Page", "Motion Design"],
    accent: "#FF1493",
    company: "Crete Agency",
    tools: "Figma, Next.js, GSAP",
    year: "2025",
    duration: "3 weeks",
    type: "landing-page",
    description:
      "A high-energy promotional landing page for Boom Room entertainment venue. The page captures the venue's vibrant atmosphere with bold typography, dynamic scroll animations, and immersive imagery — designed to drive event bookings and foot traffic to Open Air Mall, Madinaty.",
    workflow: [
      { number: "01", label: "Creative Direction" },
      { number: "02", label: "UI Design" },
      { number: "03", label: "Animation" },
      { number: "04", label: "Launch" },
    ],
  },
};

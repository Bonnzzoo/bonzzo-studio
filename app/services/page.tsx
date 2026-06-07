import ServicesLayout from "../components/ServicesLayout";

const servicesData = [
  {
    id: "ui-visual-design",
    title: "UI / Visual Design",
    tags: [
      "High-Fidelity Interfaces",
      "Design Systems",
      "Responsive Design",
      "Component Libraries",
      "Visual Language",
      "Interaction Design",
    ],
    projects: [
      { id: "you-app", title: "You App", client: "Travel & Booking", image: "/projects/you-app.png" },
      { id: "monazzem", title: "Monazzem", client: "SaaS Platform", image: "/projects/monazzem.png" },
      { id: "mazad-el-arab", title: "Mazad el Arab", client: "Online Auctions", image: "/projects/mazad-el-arab.png" },
    ],
  },
  {
    id: "creative-development",
    title: "Creative Development",
    tags: [
      "Next.js",
      "React",
      "Framer Motion",
      "GSAP Animations",
      "Performance Optimization",
      "Responsive Engineering",
    ],
    projects: [
      { id: "mega-plug", title: "MegaPlug", client: "EV Infrastructure", image: "/projects/mega-plug.png" },
      { id: "crete-website", title: "Crete Agency", client: "Digital Agency", image: "/projects/crete-website.png" },
      { id: "boomroom-landing", title: "BoomRoom", client: "Entertainment Venue", image: "/projects/boomroom-landing.png" },
    ],
  },
  {
    id: "shopify-solutions",
    title: "Shopify Solutions",
    tags: [
      "Theme Development",
      "Liquid Customization",
      "E-Commerce UX",
      "Product Page Design",
      "Conversion Optimization",
      "Store Setup",
    ],
    projects: [
      { id: "waggs-gear", title: "Waggs Gear", client: "Pet Lifestyle Brand", image: "/projects/waggs-gear.png" },
    ],
  },
];

export const metadata = {
  title: "Services — Bonzzo Studio",
  description: "Our comprehensive capabilities from Branding to Digital experiences.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesLayout sections={servicesData} />
    </main>
  );
}

import type { Metadata } from "next";
import { Koulen, Roboto_Mono, Albert_Sans, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Preloader from "./components/Preloader";
import dynamic from 'next/dynamic';

const CustomCursor = dynamic(() => import('./components/CustomCursor'), { ssr: false });
import { ContactProvider } from "./components/ContactContext";
import "./globals.css";

const ateq = localFont({
  src: [
    { path: "../public/ateq-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/ateq-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/ateq-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/ateq-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/ateq-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/ateq-ExtraBold.ttf", weight: "800", style: "normal" }
  ],
  variable: "--font-arabic",
  display: "swap",
});

const koulen = Koulen({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const albertSans = Albert_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const guthen = localFont({
  src: "../public/Guthen Jaqueline Regular.otf",
  variable: "--font-script",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bonzzo Studio — Premium UI/UX Design & Creative Development",
  description:
    "Portfolio of Bonzzo Studio — A digital agency specializing in premium digital product design, brand identity, creative development, and Shopify solutions.",
  keywords: [
    "UI/UX Design Agency",
    "Product Design",
    "Creative Development",
    "Shopify Custom Stores",
    "Bonzzo Studio",
    "Digital Agency",
  ],
  openGraph: {
    title: "Bonzzo Studio — Premium UI/UX Design & Creative Development",
    description: "A digital agency specializing in premium digital product design, brand identity, creative development, and Shopify solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Bonzzo Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonzzo Studio — Premium UI/UX Design & Creative Development",
    description: "A digital agency specializing in premium digital product design, brand identity, creative development, and Shopify solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${koulen.variable} ${robotoMono.variable} ${albertSans.variable} ${ateq.variable} ${guthen.variable} ${spaceGrotesk.variable}`}
    >
      <body suppressHydrationWarning>
        <ContactProvider>
          <CustomCursor />
          <Preloader />
          <WhatsAppWidget />
          <Navbar />
          <SmoothScroll>{children}</SmoothScroll>
        </ContactProvider>
      </body>
    </html>
  );
}

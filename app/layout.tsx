import type { Metadata } from "next";
import { Koulen, Roboto_Mono, Albert_Sans, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import SmoothScroll from "./components/SmoothScroll";
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

const playfair = Playfair_Display({
  variable: "--font-script",
  subsets: ["latin"],
  style: "italic",
  weight: "500",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Youssef Sayed — UI/UX Designer & Creative Developer",
  description:
    "Portfolio of Youssef Sayed — Senior UI/UX Designer specializing in digital product design, brand identity, creative development, and Shopify solutions.",
  keywords: [
    "UI/UX Designer",
    "Product Designer",
    "Creative Developer",
    "Shopify Developer",
    "Portfolio",
    "Youssef Sayed",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${koulen.variable} ${robotoMono.variable} ${albertSans.variable} ${ateq.variable} ${playfair.variable}`}
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

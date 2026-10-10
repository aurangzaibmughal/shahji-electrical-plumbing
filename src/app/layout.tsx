import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { COMPANY_CONFIG } from "@/config/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shahjihome.com"),
  title: {
    default: `${COMPANY_CONFIG.name} | Islamabad, Pakistan`,
    template: `%s | ${COMPANY_CONFIG.name}`,
  },
  description: COMPANY_CONFIG.shortDescription,
  keywords: [
    "Shahji Electrical & Plumbing Services",
    "electrician Islamabad",
    "plumber Islamabad",
    "G-7 Islamabad",
    "G-13 Islamabad",
    "electrical repair Islamabad",
    "plumbing services Islamabad Pakistan",
    "pipe leakage repair Islamabad",
    "house wiring Islamabad",
    "SMC private limited",
  ],
  authors: [{ name: COMPANY_CONFIG.legalName }],
  creator: COMPANY_CONFIG.legalName,
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://shahjihome.com",
    title: `${COMPANY_CONFIG.name} | Islamabad, Pakistan`,
    description: COMPANY_CONFIG.shortDescription,
    siteName: COMPANY_CONFIG.name,
    images: [
      {
        url: "/images/shahji-logo.jpg",
        width: 1200,
        height: 630,
        alt: COMPANY_CONFIG.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data Schema for Local Business in Islamabad, Pakistan
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "Electrician", "Plumber"],
    name: COMPANY_CONFIG.name,
    legalName: COMPANY_CONFIG.legalName,
    description: COMPANY_CONFIG.longDescription,
    email: COMPANY_CONFIG.email,
    telephone: COMPANY_CONFIG.phones.map((p) => p.value),
    hasMap: COMPANY_CONFIG.googleMapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_CONFIG.address,
      addressLocality: COMPANY_CONFIG.city,
      postalCode: COMPANY_CONFIG.postalCode,
      addressCountry: COMPANY_CONFIG.country,
    },
    openingHours: "Mo-Sa 08:00-21:00",
    image: "https://shahjihome.com/images/shahji-logo.jpg",
    priceRange: "$$",
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-900 bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}

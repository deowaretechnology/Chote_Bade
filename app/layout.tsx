import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import siteConfig from "@/data/siteConfig.json";

const SITE_URL = "https://chotebade.in";
const SITE_TITLE = "ChoteBade — Chhota Business, Bade Sapne. Aapki Digital Key.";
const SITE_DESCRIPTION =
  "Hum sirf websites nahi banate. Hum small businesses ki real problems samajhkar simple digital solutions banate hain. Websites, tools & automation for small businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | ChoteBade",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "ChoteBade",
    "small business website",
    "affordable website India",
    "salon website",
    "boutique website",
    "restaurant website",
    "WhatsApp booking website",
    "small business digital solutions",
    "website for small shop",
    "Kolkata web developer",
  ],
  authors: [{ name: "ChoteBade" }],
  creator: "ChoteBade",
  publisher: "ChoteBade",
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "ChoteBade",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "ChoteBade" }],
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ChoteBade",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  email: siteConfig.brand.email,
  telephone: siteConfig.brand.phone1,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    postalCode: "700102",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "ChoteBade — Chhota Business, Bade Sapne. Aapki Digital Key.",
  description:
    "Hum sirf websites nahi banate. Hum small businesses ki real problems samajhkar simple digital solutions banate hain. Websites, tools & automation for small businesses.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

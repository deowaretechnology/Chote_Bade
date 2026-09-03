"use client";

import { MessageCircle } from "lucide-react";
import siteConfig from "../data/siteConfig.json";

export default function WhatsAppButton() {
  return (
    <a
      href={siteConfig.brand.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-green flex items-center justify-center shadow-[0_10px_30px_-8px_rgba(30,122,85,0.6)] hover:scale-105 active:scale-95 transition-transform"
    >
      <MessageCircle className="text-white" size={24} fill="currentColor" strokeWidth={0} />
    </a>
  );
}

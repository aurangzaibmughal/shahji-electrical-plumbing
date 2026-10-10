"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { COMPANY_CONFIG } from "@/config/company";
import { formatPhoneLink, formatWhatsAppLink } from "@/lib/utils";

export const FloatingContact: React.FC = () => {
  return (
    <aside aria-label="Quick contact buttons" className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={formatWhatsAppLink(COMPANY_CONFIG.whatsapp.number, COMPANY_CONFIG.whatsapp.message)}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        aria-label="Chat with Shahji team on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-sm px-0 group-hover:px-2">
          WhatsApp Us
        </span>
      </a>

      {/* Direct Call Button */}
      <a
        href={formatPhoneLink(COMPANY_CONFIG.phones[0].value)}
        className="group flex items-center bg-brand-blue-500 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        aria-label="Direct Phone Call"
      >
        <Phone className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-sm px-0 group-hover:px-2">
          Call Now
        </span>
      </a>
    </aside>
  );
};

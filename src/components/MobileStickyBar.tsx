"use client";

import React from "react";
import { Phone, Calendar } from "lucide-react";
import { triggerQuoteModal } from "./LeadForms";

export default function MobileStickyBar() {
  const whatsappUrl = `https://wa.me/918217331984?text=${encodeURIComponent(
    "Hi Arka WoodTech Interiors,\nI would like a free consultation for my home interiors."
  )}`;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1E120D] border-t border-stone-850 grid grid-cols-3 h-16 shadow-2xl">
      {/* Call Now */}
      <a
        href="tel:8217331984"
        className="flex flex-col items-center justify-center text-stone-300 active:text-[#C89B5E] border-r border-stone-900/60"
      >
        <Phone className="w-5 h-5 text-[#C89B5E]" />
        <span className="text-[10px] font-sans font-medium uppercase tracking-wider mt-1">
          Call Now
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center text-stone-300 active:text-[#25D366] border-r border-stone-900/60"
      >
        <svg className="w-5 h-5 text-[#25D366] fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.26-4.883l.343.203c1.6.95 3.374 1.45 5.2 1.451 5.4 0 9.794-4.394 9.798-9.8.002-2.618-1.017-5.08-2.87-6.934C16.877 2.183 14.417.965 12 1c-5.402 0-9.798 4.4-9.802 9.803-.001 1.905.49 3.766 1.42 5.395l.22.382-.94 3.433 3.518-.922z" />
        </svg>
        <span className="text-[10px] font-sans font-medium uppercase tracking-wider mt-1">
          WhatsApp
        </span>
      </a>

      {/* Get Quote */}
      <button
        onClick={triggerQuoteModal}
        className="bg-[#C89B5E] text-[#1E120D] flex flex-col items-center justify-center cursor-pointer active:bg-[#B3874B]"
      >
        <Calendar className="w-5 h-5 text-[#1E120D]" />
        <span className="text-[10px] font-sans font-bold uppercase tracking-wider mt-1">
          Get Quote
        </span>
      </button>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { Phone, Calendar, ArrowUp } from "lucide-react";
import { triggerQuoteModal } from "./LeadForms";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/918217331984?text=${encodeURIComponent(
    "Hi Arka WoodTech Interiors,\nI would like a free consultation for my home interiors."
  )}`;

  return (
    <>
      {/* Sticky Bottom Actions Column */}
      <div className={`fixed bottom-24 right-6 z-40 flex flex-col space-y-3 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}>
        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:border-[#C89B5E] flex items-center justify-center shadow-lg transition-all cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        {/* Floating Call */}
        <a
          href="tel:8217331984"
          className="w-12 h-12 rounded-full bg-stone-900 border border-[#C89B5E]/30 text-[#C89B5E] hover:bg-stone-800 flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          aria-label="Call Arka WoodTech"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Floating WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 hover:bg-[#20ba59]"
          aria-label="WhatsApp Chat"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.26-4.883l.343.203c1.6.95 3.374 1.45 5.2 1.451 5.4 0 9.794-4.394 9.798-9.8.002-2.618-1.017-5.08-2.87-6.934C16.877 2.183 14.417.965 12 1c-5.402 0-9.798 4.4-9.802 9.803-.001 1.905.49 3.766 1.42 5.395l.22.382-.94 3.433 3.518-.922z" />
          </svg>
        </a>
      </div>

      {/* Sticky side consultation trigger (hidden on small mobile screens to prevent layout overlap) */}
      <button
        onClick={triggerQuoteModal}
        className={`fixed left-0 top-1/2 -translate-y-1/2 bg-[#C89B5E] text-[#1E120D] text-[10px] uppercase font-sans font-bold tracking-widest py-3 px-1.5 rounded-r-md z-40 transition-all duration-300 origin-left flex items-center space-x-1.5 shadow-lg border border-l-0 border-[#B3874B] cursor-pointer hover:bg-[#B3874B] ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
        }`}
        style={{ writingMode: "vertical-rl" }}
      >
        <Calendar className="w-4.5 h-4.5 text-[#1E120D]" style={{ transform: "rotate(90deg)" }} />
        <span>Book Consultation</span>
      </button>
    </>
  );
}

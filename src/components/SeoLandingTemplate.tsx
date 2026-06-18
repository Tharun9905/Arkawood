"use client";

import React, { useState } from "react";
import { Check, Star, ShieldCheck, ChevronDown, PhoneCall, Factory } from "lucide-react";
import { ContactForm, triggerQuoteModal } from "@/components/LeadForms";
import { motion, AnimatePresence } from "framer-motion";

interface SeoFAQ {
  question: string;
  answer: string;
}

interface SeoLandingTemplateProps {
  pageTitle: string;
  metaHeading: string;
  introText: string;
  secondaryText: string;
  benefits: string[];
  specs: { title: string; desc: string }[];
  faqs: SeoFAQ[];
  keywords: string[];
  bannerImage: string;
}

export default function SeoLandingTemplate({
  pageTitle,
  metaHeading,
  introText,
  secondaryText,
  benefits,
  specs,
  faqs,
  keywords,
  bannerImage,
}: SeoLandingTemplateProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whatsappUrl = `https://wa.me/918217331984?text=${encodeURIComponent(
    `Hi Arka WoodTech, I would like to consult on my ${pageTitle} project layout.`
  )}`;

  return (
    <div className="bg-[#120A07] text-[#F7F5F0]">
      {/* Hero Header */}
      <section className="relative py-20 bg-stone-950 border-b border-stone-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 pointer-events-none"
          style={{ backgroundImage: `url('${bannerImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120A07] to-transparent pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 text-center z-10 space-y-4">
          <span className="text-[10px] tracking-[0.25em] font-sans font-bold text-[#C89B5E] uppercase block">
            Localized Service Excellence
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-white max-w-4xl mx-auto leading-tight">
            {metaHeading}
          </h1>
          <div className="w-16 h-1 bg-[#C89B5E] mx-auto mt-2" />
          <p className="text-stone-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {introText}
          </p>
        </div>
      </section>

      {/* DETAILED CONTENT WORK */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Content side (7 Columns) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <h2 className="text-xl md:text-3xl font-serif text-white leading-tight font-semibold">
                Factory Finished Modular Quality Tailored for You
              </h2>
              <p className="text-stone-300 text-xs md:text-sm leading-relaxed font-sans">
                {secondaryText}
              </p>
            </div>

            {/* Localized benefits checklist */}
            <div className="bg-stone-950 p-6 rounded-xl border border-stone-900 space-y-4">
              <h3 className="font-serif text-white text-base">Key Design Advantages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-stone-300">
                    <Check className="w-4 h-4 text-[#C89B5E] flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {specs.map((item, idx) => (
                <div key={idx} className="bg-stone-900 border border-stone-850 p-4 rounded text-left">
                  <h4 className="font-serif font-bold text-[#C89B5E] text-xs uppercase tracking-wider">
                    {item.title}
                  </h4>
                  <p className="text-stone-400 text-[10px] mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* FAQ Accordion Section */}
            <div className="space-y-4 pt-6">
              <h3 className="text-xl font-serif text-white">Target Service FAQs</h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-stone-900 border border-stone-855 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-4 text-left font-serif text-white font-semibold text-xs md:text-sm hover:text-[#C89B5E] transition-colors cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#C89B5E] transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                          >
                            <div className="p-4 pt-0 border-t border-stone-850/40 text-stone-400 text-xs leading-relaxed font-sans">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form side (5 Columns) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div className="bg-stone-900 border border-stone-850 p-5 rounded-xl text-left space-y-3">
              <span className="text-[9px] uppercase tracking-widest bg-[#C89B5E]/15 text-[#C89B5E] px-2 py-0.5 rounded font-sans font-bold">
                Online Lead Portal
              </span>
              <h3 className="font-serif text-white text-lg font-bold">Book Space Planning Session</h3>
              <p className="text-stone-400 text-[10px] leading-relaxed">
                Connect with our Design Directors to draft initial estimates, browse swatches, and finalize layouts.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* BOTTOM CONVERSION FOOTER BANNER */}
      <section className="bg-stone-950 py-16 border-t border-stone-900 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-5">
          <h2 className="text-2xl font-serif text-white">Let&apos;s Design Your Dream Space</h2>
          <p className="text-stone-400 text-xs max-w-md mx-auto leading-relaxed">
            Avail a free quote and detailed material layout breakup within 24 hours of submission.
          </p>
          <div className="flex justify-center space-x-3 pt-2">
            <button
              onClick={triggerQuoteModal}
              className="bg-[#C89B5E] hover:bg-[#B3874B] text-[#1E120D] text-xs font-sans font-bold uppercase tracking-widest px-6 py-3.5 rounded transition-all cursor-pointer shadow-md"
            >
              Get Free Consultation
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-stone-700 hover:border-white text-stone-300 hover:text-white text-xs font-sans font-bold uppercase tracking-widest px-6 py-3.5 rounded transition-colors"
            >
              Consult via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SEO keywords tag footer */}
      <div className="hidden">
        {keywords.map((kw, idx) => (
          <span key={idx}>{kw}</span>
        ))}
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { Check, ShieldCheck, Cpu, Star, MessageSquare } from "lucide-react";
import { productsData, kitchenCollections, wardrobeCollections } from "@/data/arkaData";
import { triggerQuoteModal } from "@/components/LeadForms";

export default function ProductsPage() {
  const whatsappUrl = `https://wa.me/918217331984?text=${encodeURIComponent(
    "Hi Arka WoodTech Interiors,\nI would like a free consultation and catalogue for my home interiors."
  )}`;

  return (
    <div className="bg-[#120A07] text-[#F7F5F0]">
      {/* Page Header */}
      <section className="relative py-20 bg-stone-950 border-b border-stone-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120A07] to-transparent pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 text-center z-10 space-y-4">
          <span className="text-[10px] tracking-[0.3em] font-sans font-bold text-[#C89B5E] uppercase block">
            Premium Modular Catalog
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-white">Our Furniture & Products</h1>
          <div className="w-16 h-1 bg-[#C89B5E] mx-auto mt-2" />
          <p className="text-stone-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Discover precision factory-assembled modular kitchens, sliding wardrobes, profile console TV sets, and space-maximizing storage units.
          </p>
        </div>
      </section>

      {/* DETAILED CATEGORY SHOWCASE */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8 space-y-24">
        {productsData.map((prod, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={prod.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-stone-900 pb-20 last:border-0"
            >
              {/* Product Image */}
              <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="rounded-xl border border-stone-850 object-cover h-[340px] w-full shadow-lg"
                />
              </div>

              {/* Product Specifications & features */}
              <div className={`lg:col-span-6 text-left space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <div className="space-y-2">
                  <span className="text-[10px] tracking-widest text-[#C89B5E] font-sans font-bold uppercase block">
                    Product Specifications
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif text-white">{prod.title}</h2>
                </div>

                <p className="text-stone-300 text-xs md:text-sm leading-relaxed font-sans">
                  {prod.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {prod.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-center space-x-2 text-xs text-stone-300">
                      <Check className="w-4 h-4 text-[#C89B5E] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4 pt-2">
                  <button
                    onClick={triggerQuoteModal}
                    className="bg-[#C89B5E] hover:bg-[#B3874B] text-[#1E120D] text-xs font-sans font-bold uppercase tracking-widest px-6 py-3 rounded transition-all cursor-pointer shadow-md"
                  >
                    Custom Quote
                  </button>
                  <a
                    href={`https://wa.me/918217331984?text=${encodeURIComponent(
                      `Hi Arka WoodTech, I would like to enquire about modular layouts for ${prod.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-stone-700 hover:border-white text-stone-300 hover:text-white text-xs font-sans font-bold uppercase tracking-widest px-6 py-3 rounded transition-colors"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* HARDWARE BRAND PARTNERS */}
      <section className="bg-stone-950 py-16 border-y border-stone-900 text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] tracking-widest text-[#C89B5E] font-sans font-bold uppercase block">
              Certified Genuine Fixtures
            </span>
            <h3 className="text-xl md:text-2xl font-serif text-white">Our Hardware & Fitting Partners</h3>
            <p className="text-stone-400 text-xs max-w-sm mx-auto">
              We exclusively fit drawer channels, gas lifts, soft-close hinges, and slides from global leaders.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto pt-4">
            {[
              { name: "Blum", origin: "Austria • Premium Tandembox & Hinges" },
              { name: "Hettich", origin: "Germany • Sensys soft-close slider rails" },
              { name: "Ebco", origin: "India • Heavy Duty slides & gas pumps" },
              { name: "Hafele", origin: "Germany • Custom functional pullouts" },
            ].map((br, idx) => (
              <div key={idx} className="bg-stone-900 border border-stone-850 p-5 rounded-lg flex flex-col justify-center items-center">
                <span className="text-lg font-bold font-serif text-white tracking-widest">{br.name}</span>
                <span className="text-[9px] text-stone-500 mt-1 uppercase text-center leading-relaxed">
                  {br.origin}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD BROCHURE CTA */}
      <section className="py-20 text-center max-w-4xl mx-auto px-4 space-y-6">
        <h2 className="text-2xl md:text-3xl font-serif text-white">Get Our Full Visual Catalog</h2>
        <p className="text-stone-400 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
          Contains design finishes, laminate palettes, acrylic samples, wardrobe shutter sizes, and full pricing layouts.
        </p>
        <div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C89B5E] hover:bg-[#B3874B] text-[#1E120D] text-xs font-sans font-bold uppercase tracking-widest px-8 py-4 rounded transition-all inline-block shadow-lg"
          >
            Download Digital Brochure (PDF)
          </a>
        </div>
      </section>
    </div>
  );
}

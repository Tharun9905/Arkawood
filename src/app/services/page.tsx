"use client";

import React from "react";
import { Check, ArrowRight, Home, Building2, Paintbrush, Compass, Eye, ShieldCheck, Hammer, MessageSquare } from "lucide-react";
import { servicesData } from "@/data/arkaData";
import { triggerQuoteModal } from "@/components/LeadForms";

export default function ServicesPage() {
  const getIcon = (id: string) => {
    switch (id) {
      case "complete-home":
        return <Home className="w-5 h-5 text-[#C89B5E]" />;
      case "villa-interiors":
        return <Building2 className="w-5 h-5 text-[#C89B5E]" />;
      case "apartment-interiors":
        return <Building2 className="w-5 h-5 text-[#C89B5E]" />;
      case "premium-custom-homes":
        return <ShieldCheck className="w-5 h-5 text-[#C89B5E]" />;
      case "interior-consultation":
        return <MessageSquare className="w-5 h-5 text-[#C89B5E]" />;
      case "space-planning":
        return <Compass className="w-5 h-5 text-[#C89B5E]" />;
      case "3d-visualization":
        return <Eye className="w-5 h-5 text-[#C89B5E]" />;
      case "renovation-solutions":
        return <Hammer className="w-5 h-5 text-[#C89B5E]" />;
      default:
        return <Paintbrush className="w-5 h-5 text-[#C89B5E]" />;
    }
  };

  return (
    <div className="bg-[#120A07] text-[#F7F5F0]">
      {/* Page Header */}
      <section className="relative py-20 bg-stone-950 border-b border-stone-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120A07] to-transparent pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 text-center z-10 space-y-4">
          <span className="text-[10px] tracking-[0.3em] font-sans font-bold text-[#C89B5E] uppercase block">
            End-To-End Execution
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-white">Our Interior Services</h1>
          <div className="w-16 h-1 bg-[#C89B5E] mx-auto mt-2" />
          <p className="text-stone-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            From preliminary layouts and structural civil adjustments to precision edge banding and site assemblies, discover our home solutions.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8 space-y-20">
        {servicesData.map((srv, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={srv.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-stone-900 pb-16 last:border-0`}
            >
              {/* Image Column */}
              <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="rounded-xl border border-stone-850 object-cover h-[380px] w-full shadow-lg"
                />
              </div>

              {/* Text Column */}
              <div className={`lg:col-span-6 space-y-6 text-left ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center">
                    {getIcon(srv.id)}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif text-white font-semibold">
                    {srv.title}
                  </h2>
                </div>

                <p className="text-stone-300 text-xs md:text-sm leading-relaxed font-sans">
                  {srv.detailedDescription}
                </p>

                {/* Benefits */}
                <div className="space-y-2.5">
                  <h4 className="text-stone-400 text-xs uppercase tracking-wider font-semibold font-sans">
                    Key Value Handovers:
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {srv.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex items-start space-x-2 text-xs text-stone-300">
                        <Check className="w-4 h-4 text-[#C89B5E] flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex space-x-4 pt-2">
                  <button
                    onClick={triggerQuoteModal}
                    className="bg-[#C89B5E] hover:bg-[#B3874B] text-[#1E120D] text-xs font-sans font-bold uppercase tracking-widest px-6 py-3 rounded transition-all cursor-pointer shadow-md"
                  >
                    Request Quote
                  </button>
                  <a
                    href={`https://wa.me/918217331984?text=${encodeURIComponent(
                      `Hi Arka WoodTech, I would like to book a free consultation for your ${srv.title} service.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-stone-700 hover:border-white text-stone-300 hover:text-white text-xs font-sans font-bold uppercase tracking-widest px-6 py-3 rounded transition-colors"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ASSURANCE SECTION */}
      <section className="bg-stone-950 py-20 border-t border-stone-900 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-serif text-white">Our Execution Handovers</h2>
          <p className="text-stone-400 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            All modular wood elements are engineered, edge-sealed, and quality-inspected at our Bangalore facility, arriving at your doorstep ready for dry structural assembly.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 text-left max-w-3xl mx-auto">
            {[
              { title: "BWP Grade carcass", val: "100% Water Proof" },
              { title: "Signed Guarantee", val: "10 Year Warranty" },
              { title: "German Slides", val: "Blum & Hettich" },
              { title: "Millimeter Cuts", val: "Factory CNC Finish" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-stone-900 border border-stone-850 p-4 rounded">
                <p className="text-[#C89B5E] font-serif font-bold text-sm">{stat.val}</p>
                <p className="text-stone-400 text-[10px] uppercase tracking-wider mt-1">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

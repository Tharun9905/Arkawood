"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Check, Maximize2, X } from "lucide-react";
import BeforeAfterSlider from "@/components/interactive/BeforeAfterSlider";
import { projectsData } from "@/data/arkaData";
import { triggerQuoteModal } from "@/components/LeadForms";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const projectCategories = [
    "All",
    "Modular Kitchens",
    "Wardrobes",
    "TV Units",
    "Living Rooms",
    "Bedrooms",
    "Apartments",
    "Villas",
    "Custom Homes",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((proj) => proj.category === activeCategory);

  return (
    <div className="bg-[#120A07] text-[#F7F5F0]">
      {/* Page Header */}
      <section className="relative py-20 bg-stone-950 border-b border-stone-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120A07] to-transparent pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 text-center z-10 space-y-4">
          <span className="text-[10px] tracking-[0.3em] font-sans font-bold text-[#C89B5E] uppercase block">
            Craftsmanship Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-white">Our Projects Gallery</h1>
          <div className="w-16 h-1 bg-[#C89B5E] mx-auto mt-2" />
          <p className="text-stone-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Inspect our completed residential interior handovers. Move the sliders to view before-and-after construction transitions.
          </p>
        </div>
      </section>

      {/* FEATURED BEFORE/AFTER COMPARISON */}
      <section className="py-16 max-w-5xl mx-auto px-4 md:px-8 text-center space-y-10">
        <div className="space-y-2">
          <span className="text-[10px] tracking-widest text-[#C89B5E] font-sans font-bold uppercase block">
            Site Transformation
          </span>
          <h2 className="text-xl md:text-2xl font-serif text-white">Interactive Transformation Sliders</h2>
          <p className="text-stone-400 text-xs max-w-sm mx-auto">
            Drag the handle to view the raw builder handovers transformed into luxury modular spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div>
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
              afterImage="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
              beforeLabel="Raw Shell Handover"
              afterLabel="Luxury PU Kitchen"
              className="h-[320px]"
            />
            <p className="text-stone-400 text-xs mt-3 font-medium">Modular L-Shape Kitchen, JP Nagar</p>
          </div>
          <div>
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
              afterImage="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80"
              beforeLabel="Brick Wall Structural"
              afterLabel="Finished Living Room"
              className="h-[320px]"
            />
            <p className="text-stone-400 text-xs mt-3 font-medium">Lakeside Apartment living, Bangalore</p>
          </div>
        </div>
      </section>

      {/* FILTERABLE PORTFOLIO GALLERY */}
      <section className="bg-stone-950 py-20 border-t border-stone-900">
        {/* Category Buttons */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-wrap justify-center gap-2.5 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4.5 py-1.5 text-xs rounded-full cursor-pointer transition-all duration-300 uppercase tracking-wider font-semibold font-sans ${
                activeCategory === cat
                  ? "bg-[#C89B5E] text-[#1E120D] border border-[#C89B5E]"
                  : "bg-stone-900 text-stone-300 hover:text-white border border-stone-850 hover:bg-stone-855"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={proj.id}
                className="group relative bg-stone-900 border border-stone-850 rounded-lg overflow-hidden h-[360px] cursor-pointer flex flex-col justify-between"
                onClick={() => setLightboxImage(proj.image)}
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent" />
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between text-left">
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] uppercase tracking-widest font-sans bg-[#C89B5E]/20 text-[#C89B5E] px-2 py-0.5 rounded">
                        {proj.category}
                      </span>
                      <span className="text-[10px] text-stone-500 flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-[#C89B5E]" />
                        <span>{proj.location}</span>
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-white text-sm pt-1.5 line-clamp-1">
                      {proj.title}
                    </h4>
                  </div>

                  {/* Material Specs */}
                  <div className="space-y-1 border-t border-stone-850 pt-2.5">
                    {proj.specs.slice(0, 2).map((sp, sidx) => (
                      <div key={sidx} className="flex items-center space-x-1.5 text-[9px] text-stone-400">
                        <Check className="w-3 h-3 text-[#C89B5E] flex-shrink-0" />
                        <span>{sp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Maximize zoom icon */}
                <div className="absolute top-4 right-4 w-7.5 h-7.5 rounded-full bg-stone-900/60 backdrop-blur-sm border border-stone-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-stone-300" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Gallery Lightbox */}
        <AnimatePresence>
          {lightboxImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 text-stone-400 hover:text-white transition-colors cursor-pointer bg-stone-900/40 p-2 rounded-full border border-stone-800"
              >
                <X className="w-6 h-6" />
              </button>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-lg border border-stone-850"
              >
                <img
                  src={lightboxImage}
                  alt="Expanded project view"
                  className="w-full h-full object-contain max-h-[80vh]"
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 text-center max-w-4xl mx-auto px-4 space-y-6">
        <h2 className="text-2xl md:text-3xl font-serif text-white">Inspired By Our Designs?</h2>
        <p className="text-stone-400 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
          Book a free session to discuss your own project coordinates and get custom mockups.
        </p>
        <div>
          <button
            onClick={triggerQuoteModal}
            className="bg-[#C89B5E] hover:bg-[#B3874B] text-[#1E120D] text-xs font-sans font-bold uppercase tracking-widest px-8 py-4 rounded transition-all cursor-pointer shadow-lg"
          >
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}

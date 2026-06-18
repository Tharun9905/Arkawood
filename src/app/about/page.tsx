"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Sparkles, Award, Factory, Target, Compass, Users } from "lucide-react";
import Link from "next/link";
import { triggerQuoteModal } from "@/components/LeadForms";

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/918217331984?text=${encodeURIComponent(
    "Hi Arka WoodTech Interiors,\nI would like a free consultation for my home interiors."
  )}`;

  return (
    <div className="bg-[#120A07] text-[#F7F5F0]">
      {/* Hero header */}
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
            Crafting Legacy Since 2019
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-white">About Arka WoodTech</h1>
          <div className="w-16 h-1 bg-[#C89B5E] mx-auto mt-2" />
          <p className="text-stone-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Discover the manufacturing precision and creative design direction that defines our premium home interior transformations.
          </p>
        </div>
      </section>

      {/* STORY & ORIGIN */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 text-left">
            <h2 className="text-2xl md:text-4xl font-serif text-white leading-tight">
              Crafting High-End Interiors with Millimeter Accuracy
            </h2>
            <div className="w-12 h-0.5 bg-[#C89B5E]" />
            <p className="text-stone-300 text-xs md:text-sm leading-relaxed">
              Arka WoodTech Interiors was founded to address a critical gap in the residential interior market: the disparity between beautiful 3D design plans and poorly executed physical carpenter installations. 
            </p>
            <p className="text-stone-400 text-xs leading-relaxed">
              With 7+ years of experience in furniture fabrication and space optimization, our founders established a state-of-the-art modular manufacturing plant in Bangalore. This plant leverages computerized CNC machinery to ensure zero structural misalignments, wood chipping, or raw-edge water leaks—problems that standard manual tools cannot solve.
            </p>
            <p className="text-stone-400 text-xs leading-relaxed">
              Today, with over 50+ successful projects executed across Bangalore, Mysore, Bellary, Chitradurga, and Anantapur, we are recognized as a premier execution partner for villa and luxury apartment owners.
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <img
              src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80"
              alt="Arka designer workspace"
              className="rounded-xl border border-stone-850 object-cover h-[380px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#C89B5E] p-6 rounded-lg text-[#1E120D] hidden md:block">
              <p className="text-3xl font-serif font-bold leading-none">50+</p>
              <p className="text-[10px] tracking-wider uppercase font-semibold mt-1">Homes Transformed</p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-stone-950 py-16 border-y border-stone-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-stone-900 border border-stone-850 p-8 rounded-xl flex items-start space-x-4 text-left">
            <div className="w-12 h-12 rounded bg-stone-950 flex items-center justify-center text-[#C89B5E] flex-shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-white text-lg">Our Mission</h3>
              <p className="text-stone-400 text-xs leading-relaxed">
                To engineer premium, water-resistant modular furniture systems that combine luxury aesthetics with robust structural durability. We aim to remove the stress of interior design by handling layout sketches, CNC factory production, and onsite alignment audits under a single transparent pricing model.
              </p>
            </div>
          </div>

          <div className="bg-stone-900 border border-stone-850 p-8 rounded-xl flex items-start space-x-4 text-left">
            <div className="w-12 h-12 rounded bg-stone-950 flex items-center justify-center text-[#C89B5E] flex-shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-white text-lg">Our Vision</h3>
              <p className="text-stone-400 text-xs leading-relaxed">
                To be South India&apos;s most trusted luxury modular interior brand, representing the standard for factory-controlled wood finishes, edge durability, and transparent pricing. We aspire to make high-end ₹50L+ designs accessible through smart material modular systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8 text-center space-y-12">
        <div className="space-y-3">
          <span className="text-[10px] tracking-[0.25em] font-sans font-bold text-[#C89B5E] uppercase block">
            What Drives Us
          </span>
          <h2 className="text-2xl md:text-4xl font-serif text-white">Our Core Values</h2>
          <div className="w-16 h-1 bg-[#C89B5E] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Custom by Choice",
              desc: "We do not believe in cookie-cutter template drawers. Every layout, wardrobe drawer depth, and profile glass width is custom-made to align with your storage goals and routine.",
              icon: <Sparkles className="w-6 h-6 text-[#C89B5E]" />,
            },
            {
              title: "Trust by Design",
              desc: "No hidden charges, zero markup expansions, and 100% genuine BWP Marine plywood base. We provide open material inspections and an official signed 10-year warranty handbook.",
              icon: <Shield className="w-6 h-6 text-[#C89B5E]" />,
            },
            {
              title: "Built for You",
              desc: "Built to look premium and last a lifetime. By blending computerized cutting edge-banding with artisan hardware adjustments, we build spaces you are proud to live in.",
              icon: <Award className="w-6 h-6 text-[#C89B5E]" />,
            },
          ].map((val, idx) => (
            <div
              key={idx}
              className="bg-stone-900 border border-stone-850 p-6 rounded-lg text-left space-y-3"
            >
              <div className="w-12 h-12 rounded bg-stone-950 flex items-center justify-center mb-4">
                {val.icon}
              </div>
              <h3 className="font-serif font-bold text-white text-base">{val.title}</h3>
              <p className="text-stone-400 text-xs leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MANUFACTURING CAPABILITY */}
      <section className="bg-stone-950 py-20 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-[10px] tracking-[0.25em] font-sans font-bold text-[#C89B5E] uppercase block">
              Advanced Automation Facility
            </span>
            <h2 className="text-2xl md:text-4xl font-serif text-white leading-tight">
              Factory Precision Over Carpenter Error
            </h2>
            <div className="w-12 h-0.5 bg-[#C89B5E]" />
            <p className="text-stone-300 text-xs md:text-sm leading-relaxed">
              Standard hand-cutting leads to uneven gaps, rough edges, and loose door hinges that warp over time. At Arka WoodTech, we manufacture all panels in our high-capacity Bangalore facility.
            </p>
            <div className="space-y-4 pt-2">
              {[
                { title: "Computerized Panel Saws", desc: "Guarantees perfectly square cabinet structures with zero chip-outs." },
                { title: "Heavy Duty Edge Banders", desc: "hot-melt PUR adhesive sealing that keeps humidity out of the plywood cores." },
                { title: "Multi-spindle CNC Borers", desc: "Standardized drill positions for stable modular hinge mountings." },
              ].map((m, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs">
                  <div className="w-5 h-5 rounded-full bg-[#C89B5E]/10 border border-[#C89B5E]/30 text-[#C89B5E] font-serif font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{m.title}</h4>
                    <p className="text-stone-400 text-[11px] mt-0.5">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
              alt="Modular CNC machinery"
              className="rounded-xl border border-stone-850 object-cover h-[350px] w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center max-w-4xl mx-auto px-4 space-y-6">
        <h2 className="text-3xl md:text-4xl font-serif text-white">Let&apos;s Design Your Dream Space</h2>
        <p className="text-stone-400 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
          Collaborate with our Design Directors to map out layouts, inspect material finishes, and sketch budget estimations tailored to your routines.
        </p>
        <div className="flex justify-center space-x-4 pt-2">
          <button
            onClick={triggerQuoteModal}
            className="bg-[#C89B5E] hover:bg-[#B3874B] text-[#1E120D] text-xs font-sans font-bold uppercase tracking-widest px-8 py-3.5 rounded transition-all cursor-pointer"
          >
            Book Consultation
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-stone-700 hover:border-white text-stone-300 hover:text-white text-xs font-sans font-bold uppercase tracking-widest px-8 py-3.5 rounded transition-colors inline-flex items-center space-x-2"
          >
            <span>WhatsApp Chat</span>
          </a>
        </div>
      </section>
    </div>
  );
}

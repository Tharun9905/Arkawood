"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Star,
  Award,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  TrendingUp,
  Cpu,
  ShieldAlert,
  ShieldCheck,
  Factory,
  Hammer,
  DollarSign,
  UserCheck,
  RotateCw,
  Search,
  Maximize2,
  X,
  Map
} from "lucide-react";
import Link from "next/link";
import CostCalculator from "@/components/interactive/CostCalculator";
import BeforeAfterSlider from "@/components/interactive/BeforeAfterSlider";
import { ContactForm, triggerQuoteModal } from "@/components/LeadForms";
import {
  servicesData,
  productsData,
  kitchenCollections,
  wardrobeCollections,
  interiorPackages,
  projectsData,
  testimonialsData,
  faqData,
  locationsData,
} from "@/data/arkaData";

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log("Autoplay blocked or failed:", err);
      });
    }
  }, []);

  // Gallery states
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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

  const whatsappUrl = `https://wa.me/918217331984?text=${encodeURIComponent(
    "Hi Arka WoodTech Interiors,\nI would like a free consultation for my home interiors."
  )}`;

  return (
    <div className="overflow-hidden bg-[#120A07]">
      {/* SECTION 1 – HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-[#120A07] pt-24 pb-16 overflow-hidden">
        {/* Luxury dark wood backdrop overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,94,0.06),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120A07] via-transparent to-black/40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Text content & Actions */}
            <div className="lg:col-span-6 text-left space-y-6 md:space-y-8 flex flex-col items-start">
              {/* Subheader Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-1.5 bg-[#C89B5E]/10 border border-[#C89B5E]/30 px-3.5 py-1.5 rounded-full text-xs font-sans tracking-widest text-[#C89B5E] uppercase font-semibold"
              >
                <span>Precision • Passion • Perfection</span>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-tight text-white"
              >
                Transform Your Space Into A <span className="text-[#C89B5E] italic">Masterpiece</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans max-w-xl"
              >
                Custom Interior Design, Modular Kitchens, Wardrobes & Complete Home Solutions Crafted With German Precision Machinery & Flawless Finishing.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto"
              >
                <button
                  onClick={triggerQuoteModal}
                  className="w-full sm:w-auto bg-[#C89B5E] hover:bg-[#B3874B] text-[#1E120D] text-xs font-sans font-bold uppercase tracking-widest px-8 py-4 rounded transition-all duration-300 cursor-pointer shadow-lg border border-[#C89B5E] text-center"
                >
                  Get Free Consultation
                </button>
                <Link
                  href="/projects"
                  className="w-full sm:w-auto border border-stone-700 hover:border-white text-stone-300 hover:text-white text-xs font-sans font-bold uppercase tracking-widest px-8 py-4 rounded transition-colors text-center"
                >
                  View Projects
                </Link>
              </motion.div>

              {/* Micro badges inline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="grid grid-cols-2 gap-4 w-full pt-6 border-t border-stone-900/60"
              >
                <div className="flex items-center space-x-2 text-stone-400">
                  <Check className="w-4 h-4 text-[#C89B5E] flex-shrink-0" />
                  <span className="text-[11px] font-sans font-medium uppercase tracking-wider">7+ Years Exp</span>
                </div>
                <div className="flex items-center space-x-2 text-stone-400">
                  <Check className="w-4 h-4 text-[#C89B5E] flex-shrink-0" />
                  <span className="text-[11px] font-sans font-medium uppercase tracking-wider">50+ Happy Families</span>
                </div>
                <div className="flex items-center space-x-2 text-stone-400">
                  <Check className="w-4 h-4 text-[#C89B5E] flex-shrink-0" />
                  <span className="text-[11px] font-sans font-medium uppercase tracking-wider">In-House Carpenters</span>
                </div>
                <div className="flex items-center space-x-2 text-stone-400">
                  <Check className="w-4 h-4 text-[#C89B5E] flex-shrink-0" />
                  <span className="text-[11px] font-sans font-medium uppercase tracking-wider">Advanced CNC Fab</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Premium Showroom Video Player */}
            <div className="lg:col-span-6 w-full flex justify-center mt-6 lg:mt-0 relative">
              {/* Outer soft gold glow highlight */}
              <div className="absolute inset-0 bg-[#C89B5E]/5 blur-3xl rounded-full scale-75 -z-10" />

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative w-full aspect-video rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-stone-800 bg-stone-950 group"
              >
                {/* Gold thin border overlay */}
                <div className="absolute inset-0 border border-[#C89B5E]/15 rounded-xl pointer-events-none group-hover:border-[#C89B5E]/30 transition-colors duration-500 z-20" />

                <video
                  ref={videoRef}
                  src="/Build_a_PREMIUM_LUXURY_HIGH_.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover z-10 relative"
                  poster="https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&w=1920&q=80"
                />

                {/* Subtle vignette layer */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none z-20" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 – TRUST STATS (Badges Section) */}
      <section className="relative z-10 bg-[#1E120D] py-8 border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-3 border-r border-stone-800 last:border-0">
              <h3 className="text-3xl md:text-4xl font-serif text-[#C89B5E] font-bold">7+</h3>
              <p className="text-[10px] tracking-widest uppercase text-stone-400 font-sans mt-1">Years Experience</p>
            </div>
            <div className="p-3 border-r border-stone-800 last:border-0">
              <h3 className="text-3xl md:text-4xl font-serif text-[#C89B5E] font-bold">50+</h3>
              <p className="text-[10px] tracking-widest uppercase text-stone-400 font-sans mt-1">Happy Families Served</p>
            </div>
            <div className="p-3 border-r border-stone-800 last:border-0">
              <h3 className="text-3xl md:text-4xl font-serif text-[#C89B5E] font-bold">100%</h3>
              <p className="text-[10px] tracking-widest uppercase text-stone-400 font-sans mt-1">Customized Designs</p>
            </div>
            <div className="p-3">
              <h3 className="text-3xl md:text-4xl font-serif text-[#C89B5E] font-bold">5+</h3>
              <p className="text-[10px] tracking-widest uppercase text-stone-400 font-sans mt-1">Cities Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 – ABOUT ARKA */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] tracking-[0.25em] font-sans font-bold text-[#C89B5E] uppercase block">
              Luxury Woodcraft Partners
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
              One Stop Solution For Design, Production & Implementation
            </h2>
            <div className="w-16 h-1 bg-[#C89B5E]" />
            <p className="text-stone-300 text-sm leading-relaxed font-sans">
              Arka WoodTech Interiors brings over 7+ years of experience delivering premium customized home interior solutions. Combining artisan craftsmanship with high-capacity factory automation, we fabricate furniture layouts tailored to each client&apos;s routine.
            </p>
            <p className="text-stone-400 text-xs leading-relaxed font-sans">
              We specialize in space layout design, modular kitchen structures, closets, TV cabinets, and architectural panelling for apartments, villas, and premium custom residences across Karnataka and Andhra Pradesh.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-xs font-sans font-bold text-[#C89B5E] uppercase tracking-wider hover:text-white transition-colors"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
              alt="Luxury modular kitchen"
              className="rounded-lg border border-stone-900 object-cover h-[350px] w-full mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=600&q=80"
              alt="Premium living space design"
              className="rounded-lg border border-stone-900 object-cover h-[350px] w-full"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 – WHY HOMEOWNERS TRUST ARKA */}
      <section className="bg-stone-950 py-20 md:py-24 border-y border-stone-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4 mb-14">
          <span className="text-[10px] tracking-[0.25em] font-sans font-bold text-[#C89B5E] uppercase block">
            The Arka Assurance
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white">Why Homeowners Trust Arka</h2>
          <div className="w-16 h-1 bg-[#C89B5E] mx-auto" />
          <p className="text-stone-400 text-xs max-w-lg mx-auto">
            From honest transparent billing to robust warranties, we make your interior journey transparent.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Factory Finished Products",
              desc: "Engineered panel cutting and edge banding using heavy-duty computer-guided factory machines.",
              icon: <Factory className="w-6 h-6 text-[#C89B5E]" />,
            },
            {
              title: "Transparent Pricing",
              desc: "Detailed modular item breakups. Zero hidden markups or sudden estimation expansions.",
              icon: <DollarSign className="w-6 h-6 text-[#C89B5E]" />,
            },
            {
              title: "Dedicated Project Manager",
              desc: "A single coordinate manager sending weekly site progress photo logs and tracking schedules.",
              icon: <UserCheck className="w-6 h-6 text-[#C89B5E]" />,
            },
            {
              title: "Premium Hardware & Accessories",
              desc: "100% authentic sliding hinges, pullouts, and trays sourced from Blum, Hettich, and Ebco.",
              icon: <Cpu className="w-6 h-6 text-[#C89B5E]" />,
            },
            {
              title: "On-Time Delivery",
              desc: "Rigorous milestone tracking ensuring key project handovers completed in 40 working days.",
              icon: <Clock className="w-6 h-6 text-[#C89B5E]" />,
            },
            {
              title: "Professional Installation",
              desc: "Experienced, trained installers executing alignment checks on site for squeak-free panels.",
              icon: <Hammer className="w-6 h-6 text-[#C89B5E]" />,
            },
            {
              title: "Warranty Support",
              desc: "Official signed 10-year warranty handbook on BWP Marine grade boards and metal hinges.",
              icon: <ShieldCheck className="w-6 h-6 text-[#C89B5E]" />,
            },
            {
              title: "End-to-End Execution",
              desc: "We handle civil structural mods, wiring changes, false ceilings, modular styling, and site cleanup.",
              icon: <RotateCw className="w-6 h-6 text-[#C89B5E]" />,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-stone-900 border border-stone-850 p-6 rounded-lg space-y-3 flex flex-col text-left transition-all duration-300"
            >
              <div className="w-12 h-12 rounded bg-stone-950 flex items-center justify-center shadow-inner">
                {item.icon}
              </div>
              <h4 className="font-serif font-semibold text-white text-base pt-1">{item.title}</h4>
              <p className="text-stone-400 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5 – SERVICES */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14">
          <div className="space-y-3 text-left">
            <span className="text-[10px] tracking-[0.25em] font-sans font-bold text-[#C89B5E] uppercase block">
              Tailored Architecture
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white">Our Services</h2>
            <div className="w-16 h-1 bg-[#C89B5E]" />
          </div>
          <p className="text-stone-400 text-xs max-w-md mt-4 md:mt-0 leading-relaxed">
            From consultation meetings and 3D mockups to factory fabrication and field assembly, we manage your home transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((srv) => (
            <motion.div
              key={srv.id}
              className="group relative bg-stone-900 border border-stone-850 overflow-hidden rounded-lg flex flex-col h-[340px] shadow-lg"
            >
              <div className="h-40 overflow-hidden relative">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent opacity-80" />
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between text-left">
                <div className="space-y-1.5">
                  <h4 className="font-serif font-bold text-white text-base group-hover:text-[#C89B5E] transition-colors">
                    {srv.title}
                  </h4>
                  <p className="text-stone-400 text-[11px] leading-relaxed line-clamp-3">
                    {srv.description}
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/services"
                    className="text-[10px] uppercase font-sans font-bold text-[#C89B5E] tracking-widest inline-flex items-center space-x-1 hover:text-white"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 6 – PRODUCTS SHOWCASE */}
      <section className="bg-stone-950 py-20 md:py-24 border-y border-stone-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4 mb-14">
          <span className="text-[10px] tracking-[0.25em] font-sans font-bold text-[#C89B5E] uppercase block">
            Craftsmanship Catalogue
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white">Our Product Categories</h2>
          <div className="w-16 h-1 bg-[#C89B5E] mx-auto" />
          <p className="text-stone-400 text-xs max-w-lg mx-auto">
            Precisely finished closets, state-of-the-art kitchen platforms, and modular entertainment consoles built with premium plywood.
          </p>
        </div>

        {/* 9 Product Categories Grid */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {productsData.map((prod) => (
            <div
              key={prod.id}
              className="bg-stone-900 border border-stone-850 rounded-xl overflow-hidden shadow-lg group hover:border-[#C89B5E]/30 transition-colors"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-550"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
              </div>
              <div className="p-6 text-left space-y-4">
                <div>
                  <h4 className="font-serif font-bold text-white text-lg">{prod.title}</h4>
                  <p className="text-stone-400 text-xs mt-1.5 leading-relaxed">{prod.description}</p>
                </div>

                <div className="space-y-1.5 pt-1">
                  {prod.features.slice(0, 3).map((feat, fidx) => (
                    <div key={fidx} className="flex items-center space-x-1.5 text-[11px] text-stone-300">
                      <Check className="w-3.5 h-3.5 text-[#C89B5E] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#C89B5E]/10 hover:bg-[#C89B5E] text-[#C89B5E] hover:text-[#1E120D] text-center border border-[#C89B5E]/30 py-2.5 text-xs font-sans font-bold uppercase tracking-widest rounded transition-all block cursor-pointer"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SUBSECTION – KITCHEN COLLECTIONS */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 border-t border-stone-900">
          <div className="text-center space-y-3 mb-10">
            <h3 className="text-2xl font-serif text-white italic">Modular Kitchen Collections</h3>
            <p className="text-stone-400 text-xs">Curated cabinet layouts mapped to project scale and design finish levels.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kitchenCollections.map((col, idx) => (
              <div key={idx} className="bg-stone-900/60 border border-stone-850 p-5 rounded-lg flex flex-col justify-between text-left">
                <div className="space-y-3">
                  <img src={col.image} alt={col.name} className="w-full h-36 object-cover rounded border border-stone-950 mb-2" />
                  <h4 className="font-serif font-bold text-[#C89B5E] text-base">{col.name}</h4>
                  <p className="text-stone-300 text-xs leading-relaxed">{col.description}</p>
                  <div className="space-y-1">
                    {col.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-center space-x-1 text-[10px] text-stone-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C89B5E] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={triggerQuoteModal}
                  className="w-full bg-stone-950 text-stone-300 hover:text-[#C89B5E] border border-stone-850 hover:border-[#C89B5E]/40 text-center py-2 text-xs font-sans font-semibold uppercase tracking-wider rounded transition-colors mt-6 cursor-pointer"
                >
                  Consult on {col.name}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* SUBSECTION – WARDROBE COLLECTIONS */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16">
          <div className="text-center space-y-3 mb-10">
            <h3 className="text-2xl font-serif text-white italic">Wardrobe Collections</h3>
            <p className="text-stone-400 text-xs">Clever shutter sliding operations and walk-in dresser organizer setups.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {wardrobeCollections.map((col, idx) => (
              <div key={idx} className="bg-stone-900/60 border border-stone-850 p-4.5 rounded-lg flex flex-col justify-between text-left">
                <div className="space-y-3">
                  <img src={col.image} alt={col.name} className="w-full h-32 object-cover rounded border border-stone-950 mb-2" />
                  <h4 className="font-serif font-bold text-[#C89B5E] text-base">{col.name}</h4>
                  <p className="text-stone-300 text-[11px] leading-relaxed">{col.description}</p>
                  <div className="space-y-1">
                    {col.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-center space-x-1 text-[10px] text-stone-400">
                        <span className="w-1 h-1 rounded-full bg-[#C89B5E] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={triggerQuoteModal}
                  className="w-full bg-stone-950 text-stone-300 hover:text-[#C89B5E] border border-stone-850 hover:border-[#C89B5E]/40 text-center py-2 text-xs font-sans font-semibold uppercase tracking-wider rounded transition-colors mt-5 cursor-pointer"
                >
                  Configure Style
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* SUBSECTION – HOME INTERIOR PACKAGES */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16">
          <div className="text-center space-y-3 mb-10">
            <h3 className="text-2xl font-serif text-white">Home Interior Packages</h3>
            <p className="text-stone-400 text-xs">Standard price packages mapped out for common structural plans.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {interiorPackages.map((col, idx) => (
              <div key={idx} className="bg-stone-900 border border-stone-850 p-5 rounded-lg flex flex-col justify-between text-left">
                <div className="space-y-3">
                  <span className="text-[9px] uppercase tracking-widest font-sans font-bold text-[#C89B5E] block">
                    {col.tagline}
                  </span>
                  <h4 className="font-serif font-bold text-white text-lg">{col.name}</h4>
                  <p className="text-stone-400 text-[11px] leading-relaxed">{col.description}</p>
                  <div className="text-[#C89B5E] font-serif font-semibold text-sm pt-1 pb-2 border-y border-stone-850/50">
                    Est. Range: {col.priceEstimate}
                  </div>
                  <div className="space-y-1 pt-1">
                    {col.includes.map((feat, fidx) => (
                      <div key={fidx} className="flex items-start space-x-1.5 text-[10px] text-stone-300">
                        <Check className="w-3 h-3 text-[#C89B5E] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={triggerQuoteModal}
                  className="w-full bg-[#C89B5E] hover:bg-[#B3874B] text-[#1E120D] text-center py-2.5 text-xs font-sans font-bold uppercase tracking-widest rounded transition-colors mt-6 cursor-pointer"
                >
                  Book Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 – FACTORY ADVANTAGE (Manufacturing Timeline) */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[10px] tracking-[0.25em] font-sans font-bold text-[#C89B5E] uppercase block">
            Industrial Finishing
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white">Precision Manufacturing Meets Exceptional Finishing</h2>
          <div className="w-16 h-1 bg-[#C89B5E] mx-auto" />
          <p className="text-stone-400 text-xs max-w-lg mx-auto">
            How we translate your customized layout blueprint ideas into millimeter-accurate modular boards.
          </p>
        </div>

        {/* Custom horizontal process timeline block */}
        <div className="grid grid-cols-2 lg:grid-cols-8 gap-4 text-center">
          {[
            { step: "1", title: "Consultation", desc: "Space requirement analysis" },
            { step: "2", title: "Design Approval", desc: "3D render sign-off" },
            { step: "3", title: "Precision Cutting", desc: "German panel sizing boards" },
            { step: "4", title: "CNC Processing", desc: "High accuracy boring & drills" },
            { step: "5", title: "Edge Banding", desc: "Hot-melt water-tight seals" },
            { step: "6", title: "Factory Finish", desc: "Premium acrylic overlays laminates" },
            { step: "7", title: "Quality Check", desc: "mTLS grade joint alignments" },
            { step: "8", title: "Site Install", desc: "Squeak-free board fittings" },
          ].map((item, idx) => (
            <div key={idx} className="relative bg-stone-900 border border-stone-850 p-4 rounded-lg flex flex-col justify-between items-center text-center">
              {/* Arrow connector indicator */}
              {idx < 7 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-20 text-[#C89B5E]">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
              <div className="w-8 h-8 rounded-full bg-[#C89B5E]/10 border border-[#C89B5E]/30 text-[#C89B5E] font-serif font-bold text-xs flex items-center justify-center mb-3">
                {item.step}
              </div>
              <h4 className="font-serif font-bold text-white text-xs leading-tight mb-1">{item.title}</h4>
              <p className="text-stone-400 text-[9px] leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8 – COST CALCULATOR */}
      <section id="cost-calculator" className="bg-stone-950 py-20 md:py-24 border-y border-stone-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center space-y-4 mb-12">
            <span className="text-[10px] tracking-[0.25em] font-sans font-bold text-[#C89B5E] uppercase block">
              Budget Estimator
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white">Instant Home Interior Cost Calculator</h2>
            <div className="w-16 h-1 bg-[#C89B5E] mx-auto" />
            <p className="text-stone-400 text-xs max-w-md mx-auto">
              Get an instant calculated budget range matching your property BHK layout configuration, material grades, and project scope.
            </p>
          </div>
          <CostCalculator />
        </div>
      </section>

      {/* SECTION 9 – OUR PROCESS */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[10px] tracking-[0.25em] font-sans font-bold text-[#C89B5E] uppercase block">
            The Customer Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white">Our 7-Step Design Process</h2>
          <div className="w-16 h-1 bg-[#C89B5E] mx-auto" />
          <p className="text-stone-400 text-xs max-w-lg mx-auto">
            From your first enquiry click to final keys handover, here is how we construct your luxury spaces.
          </p>
        </div>

        {/* Visual vertical-to-horizontal timeline grids */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {[
            { step: "01", name: "Consultation", detail: "Initial layout idea mappings & materials tour" },
            { step: "02", name: "Site Measure", detail: "Laser-accurate wall and plumbing checks" },
            { step: "03", name: "Design Pitch", detail: "Detailed space planning & custom layouts" },
            { step: "04", name: "3D Rendering", detail: "Photo-realistic material color validations" },
            { step: "05", name: "Fabrication", detail: "German CNC panel processing & edge band" },
            { step: "06", name: "Installation", detail: "Expert modular assembling & quality checks" },
            { step: "07", name: "Handover", detail: "Final site cleaning & warranty handbook sign-off" },
          ].map((item, idx) => (
            <div key={idx} className="bg-stone-900 border border-stone-850 p-5 rounded-lg flex flex-col justify-between text-left space-y-4">
              <span className="text-2xl font-serif text-[#C89B5E] font-bold opacity-30">{item.step}</span>
              <div>
                <h4 className="font-serif font-bold text-white text-sm leading-tight mb-1">{item.name}</h4>
                <p className="text-stone-400 text-[10px] leading-normal">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10 – PROJECT GALLERY */}
      <section className="bg-stone-950 py-20 md:py-24 border-y border-stone-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4 mb-12">
          <span className="text-[10px] tracking-[0.25em] font-sans font-bold text-[#C89B5E] uppercase block">
            Bespoke Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white">Our Projects Gallery</h2>
          <div className="w-16 h-1 bg-[#C89B5E] mx-auto" />
          <p className="text-stone-400 text-xs max-w-lg mx-auto">
            Filter and inspect some of our completed high-end modular interior configurations across Karnataka and Andhra Pradesh.
          </p>
        </div>

        {/* Category Filters */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-wrap justify-center gap-2 mb-10">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4.5 py-1.5 text-xs rounded-full cursor-pointer transition-all duration-300 uppercase tracking-wider font-semibold font-sans ${activeCategory === cat
                  ? "bg-[#C89B5E] text-[#1E120D] border border-[#C89B5E]"
                  : "bg-stone-900 text-stone-300 hover:text-white border border-stone-850 hover:bg-stone-855"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
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
                className="group relative bg-stone-900 border border-stone-850 rounded-lg overflow-hidden h-[300px] cursor-pointer"
                onClick={() => setLightboxImage(proj.image)}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 right-4 text-left space-y-1">
                  <span className="text-[9px] uppercase tracking-widest font-sans bg-[#C89B5E]/20 text-[#C89B5E] border border-[#C89B5E]/20 px-2 py-0.5 rounded">
                    {proj.category}
                  </span>
                  <h4 className="font-serif font-bold text-white text-sm pt-1 line-clamp-1">
                    {proj.title}
                  </h4>
                  <p className="text-stone-400 text-[10px] flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-[#C89B5E]" />
                    <span>{proj.location}</span>
                  </p>
                </div>
                {/* Maximize zoom logo icon */}
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-stone-900/60 backdrop-blur-sm border border-stone-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-stone-300" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic Lightbox Modal */}
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

      {/* SECTION 11 – TESTIMONIALS (Google Reviews Layout) */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[10px] tracking-[0.25em] font-sans font-bold text-[#C89B5E] uppercase block">
            Google Reviews Rating
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white">What Families Say About Arka</h2>
          <div className="w-16 h-1 bg-[#C89B5E] mx-auto" />

          {/* Core rating layout */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-stone-900 border border-stone-850 p-4 rounded-xl max-w-md mx-auto mt-6">
            <div className="text-center sm:text-left">
              <div className="flex items-center space-x-1 justify-center sm:justify-start">
                <span className="text-3xl font-bold font-serif text-white">4.9</span>
                <span className="text-sm text-stone-400 mt-1">/ 5.0</span>
              </div>
              <p className="text-[10px] tracking-wider uppercase text-stone-400 font-sans mt-0.5">
                Google Reviews Verified
              </p>
            </div>
            <div className="h-px sm:h-10 w-16 sm:w-px bg-stone-800" />
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex space-x-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-[#C89B5E] text-[#C89B5E]" />
                ))}
              </div>
              <p className="text-[10px] text-stone-300 mt-1">based on 68+ customer reviews</p>
            </div>
          </div>
        </div>

        {/* Testimonials Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-stone-900 border border-stone-850 p-6 md:p-8 rounded-xl flex flex-col justify-between text-left space-y-6 shadow-lg hover:border-[#C89B5E]/20 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-[#C89B5E] text-[#C89B5E]" />
                  ))}
                </div>
                <p className="text-stone-300 text-xs md:text-sm italic leading-relaxed font-sans">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-stone-850/60">
                <div className="flex items-center space-x-3">
                  <img
                    src={item.projectPhoto}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-stone-800"
                  />
                  <div>
                    <h5 className="font-serif font-bold text-white text-sm">{item.name}</h5>
                    <p className="text-stone-400 text-[10px]">{item.location}</p>
                  </div>
                </div>
                <span className="text-[10px] tracking-wide bg-stone-950 text-stone-400 px-3 py-1 rounded font-sans border border-stone-850">
                  {item.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 12 – FAQs */}
      <section className="bg-stone-950 py-20 md:py-24 border-y border-stone-900">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center space-y-4 mb-14">
            <span className="text-[10px] tracking-[0.25em] font-sans font-bold text-[#C89B5E] uppercase block">
              Support Center
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-[#C89B5E] mx-auto" />
            <p className="text-stone-400 text-xs max-w-md mx-auto">
              Answers regarding materials, signed warranties, modular cutting machinery, and locations.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-stone-900 border border-stone-850 rounded-lg overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-serif text-white font-semibold text-sm md:text-base hover:text-[#C89B5E] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#C89B5E] transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-5 pt-0 border-t border-stone-850/40 text-stone-400 text-xs md:text-sm leading-relaxed font-sans">
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
      </section>

      {/* SECTION 13 – SERVICE LOCATIONS */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[10px] tracking-[0.25em] font-sans font-bold text-[#C89B5E] uppercase block">
            Regional Coverage
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white">Locations We Serve</h2>
          <div className="w-16 h-1 bg-[#C89B5E] mx-auto" />
          <p className="text-stone-400 text-xs max-w-md mx-auto">
            Fabricated at our state-of-the-art Bangalore plant and assembled on site by professional installer teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {locationsData.map((loc, idx) => (
            <div
              key={idx}
              className="bg-stone-900 border border-stone-850 p-5 rounded-lg flex flex-col justify-between text-left h-[200px] hover:border-[#C89B5E]/30 transition-colors"
            >
              <div>
                <span className="text-[9px] uppercase tracking-widest font-sans font-bold text-[#C89B5E] bg-[#C89B5E]/10 border border-[#C89B5E]/20 px-2 py-0.5 rounded">
                  Active Region
                </span>
                <h4 className="font-serif font-bold text-white text-base mt-2.5">{loc.city}</h4>
                <p className="text-stone-400 text-[10px] mt-1.5 leading-relaxed">{loc.address}</p>
              </div>
              <p className="text-[10px] text-stone-500 font-sans tracking-wide pt-2 border-t border-stone-850/50">
                {loc.status}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 14 – CONTACT FORM */}
      <section id="contact-section" className="bg-stone-950 py-20 md:py-24 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Info panel */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="space-y-3">
                <span className="text-[10px] tracking-[0.25em] font-sans font-bold text-[#C89B5E] uppercase block">
                  Book A Consult
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-white">Let&apos;s Design Your Dream Space</h2>
                <div className="w-16 h-1 bg-[#C89B5E]" />
              </div>
              <p className="text-stone-300 text-xs leading-relaxed font-sans">
                Ready to transform your home with factory-grade custom woodcraft? Submit your property specifications and layout goals, and our design planners will coordinate a direct workspace session.
              </p>

              <div className="space-y-4 text-stone-400 text-xs">
                <div className="flex items-center space-x-3">
                  <span className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-[#C89B5E] flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-stone-500">Call Support</p>
                    <a href="tel:8217331984" className="hover:text-white font-semibold text-stone-300 transition-colors">
                      +91 8217331984
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-[#C89B5E] flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-stone-500">Email Address</p>
                    <a href="mailto:arkainteriors.blr@gmail.com" className="hover:text-white font-semibold text-stone-300 transition-colors">
                      arkainteriors.blr@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-[#C89B5E] flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-stone-500">Main Office & Factory</p>
                    <p className="text-stone-300 font-medium">
                      Hongasandra, Begur Main Road, Bangalore
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form panel */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

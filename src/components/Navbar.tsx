"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall, Calendar } from "lucide-react";
import ArkaLogo from "./ui/ArkaLogo";
import { triggerQuoteModal } from "./LeadForms";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Projects", path: "/projects" },
    { name: "Locations", path: "/locations" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#1E120D]/95 backdrop-blur-md border-b border-stone-900 py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/">
            <ArkaLogo variant="white" className="h-10 md:h-12" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-xs uppercase tracking-wider transition-colors duration-300 font-sans font-medium hover:text-[#C89B5E] ${
                    isActive ? "text-[#C89B5E]" : "text-stone-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTAs Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:8217331984"
              className="flex items-center space-x-2 text-stone-300 hover:text-[#C89B5E] transition-colors text-xs font-sans font-medium uppercase tracking-wider"
            >
              <PhoneCall className="w-4 h-4 text-[#C89B5E]" />
              <span>8217331984</span>
            </a>
            <button
              onClick={triggerQuoteModal}
              className="bg-[#C89B5E] hover:bg-[#B3874B] text-[#1E120D] text-xs font-sans font-semibold uppercase tracking-widest px-5 py-2.5 rounded transition-all duration-300 cursor-pointer shadow-md"
            >
              Get Free Consultation
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-[#C89B5E] transition-colors cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <nav
          className={`absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#1E120D] border-l border-stone-850 p-6 pt-24 flex flex-col space-y-4 shadow-2xl transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-sm uppercase tracking-widest block py-2 border-b border-stone-900/60 font-sans font-medium hover:text-[#C89B5E] transition-colors ${
                  isActive ? "text-[#C89B5E] font-semibold" : "text-stone-300"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-8 flex flex-col space-y-4">
            <a
              href="tel:8217331984"
              className="flex items-center space-x-2 text-stone-300 hover:text-[#C89B5E] py-2 text-sm"
            >
              <PhoneCall className="w-4 h-4 text-[#C89B5E]" />
              <span>Call: 8217331984</span>
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                triggerQuoteModal();
              }}
              className="w-full bg-[#C89B5E] text-[#1E120D] text-xs font-sans font-bold uppercase tracking-widest py-3 text-center rounded transition-all duration-300 cursor-pointer"
            >
              Get Free Consultation
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

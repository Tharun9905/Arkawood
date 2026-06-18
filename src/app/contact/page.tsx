"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { ContactForm } from "@/components/LeadForms";
import { locationsData } from "@/data/arkaData";

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/918217331984?text=${encodeURIComponent(
    "Hi Arka WoodTech Interiors,\nI would like a free consultation for my home interiors."
  )}`;

  return (
    <div className="bg-[#120A07] text-[#F7F5F0]">
      {/* Page Header */}
      <section className="relative py-20 bg-stone-950 border-b border-stone-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120A07] to-transparent pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 text-center z-10 space-y-4">
          <span className="text-[10px] tracking-[0.3em] font-sans font-bold text-[#C89B5E] uppercase block">
            Let&apos;s Connect
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-white">Contact Our Team</h1>
          <div className="w-16 h-1 bg-[#C89B5E] mx-auto mt-2" />
          <p className="text-stone-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Reach out via phone, WhatsApp, or drop by our showroom factory. Request quotes and coordinates for all Karnataka and AP sites.
          </p>
        </div>
      </section>

      {/* DETAILED CONTENT SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Side (5 Columns) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif text-white font-semibold">
                Get In Touch Today
              </h2>
              <p className="text-stone-300 text-xs leading-relaxed font-sans">
                Our team is ready to map specifications for your living spaces. Fill out the enquiry sheet or use instant contact routes below.
              </p>
            </div>

            {/* Structured Contact info cards */}
            <div className="space-y-4">
              <div className="bg-stone-900 border border-stone-850 p-5 rounded-lg flex items-start space-x-3.5">
                <MapPin className="w-5 h-5 text-[#C89B5E] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">Main Office & Factory</h4>
                  <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                    #48/1 Ground Floor, 10th A Main, SunkaReddy Compound, Hongasandra, Begur Main Road, Bangalore – 560068
                  </p>
                </div>
              </div>

              <div className="bg-stone-900 border border-stone-850 p-5 rounded-lg flex items-start space-x-3.5">
                <Phone className="w-5 h-5 text-[#C89B5E] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">Call / WhatsApp</h4>
                  <p className="text-stone-300 text-xs mt-1 font-semibold hover:text-[#C89B5E]">
                    <a href="tel:8217331984">+91 8217331984</a>
                  </p>
                  <p className="text-[10px] text-stone-500 mt-0.5">Avail consultations 9 AM - 7 PM</p>
                </div>
              </div>

              <div className="bg-stone-900 border border-stone-850 p-5 rounded-lg flex items-start space-x-3.5">
                <Mail className="w-5 h-5 text-[#C89B5E] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">Email Address</h4>
                  <p className="text-stone-300 text-xs mt-1 hover:text-[#C89B5E]">
                    <a href="mailto:arkainteriors.blr@gmail.com">arkainteriors.blr@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="bg-stone-900 border border-stone-850 p-5 rounded-lg flex items-start space-x-3.5">
                <svg className="w-5 h-5 text-[#C89B5E] flex-shrink-0 mt-0.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">Instagram Connect</h4>
                  <p className="text-stone-300 text-xs mt-1 hover:text-[#C89B5E]">
                    <a
                      href="https://www.instagram.com/arkawoodtech_interiors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @arkawoodtech_interiors
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Coverage Bullet checklist */}
            <div className="space-y-2">
              <h4 className="text-stone-400 text-xs uppercase tracking-wider font-bold">
                Coverage Areas Active:
              </h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {locationsData.map((loc, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] tracking-wide bg-stone-950 text-stone-400 border border-stone-850 px-3 py-1 rounded"
                  >
                    {loc.city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side (7 Columns) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Showroom Map section */}
      <section className="bg-stone-950 py-12 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center space-y-3 mb-8">
            <h3 className="text-xl font-serif text-white">Find Us On Google Maps</h3>
            <p className="text-stone-400 text-xs max-w-sm mx-auto">
              Get directions directly to our Hongasandra Begur showroom plant coordinates.
            </p>
          </div>
          <div className="h-96 rounded-xl overflow-hidden border border-stone-850 shadow-md">
            <iframe
              title="Arka WoodTech Showroom Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7561845620946!2d77.6321287!3d12.8912443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14c27a92233f%3A0xc3b827e85741a6b0!2sBegur%20Main%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1687000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

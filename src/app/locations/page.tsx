"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Compass, ShieldCheck } from "lucide-react";
import { locationsData } from "@/data/arkaData";
import { triggerQuoteModal } from "@/components/LeadForms";

export default function LocationsPage() {
  const [selectedCity, setSelectedCity] = useState(locationsData[0]);

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
            Regional Service Offices
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-white">Locations We Serve</h1>
          <div className="w-16 h-1 bg-[#C89B5E] mx-auto mt-2" />
          <p className="text-stone-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            All custom panels are machined in Bangalore and transported directly by our crews for professional on-site installation.
          </p>
        </div>
      </section>

      {/* CORE MAP & CARDS AREA */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* List of Locations Cards (Left) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <h3 className="text-sm font-sans font-bold uppercase tracking-wider text-stone-400">
              Select Your Region:
            </h3>
            <div className="space-y-3">
              {locationsData.map((loc, idx) => {
                const isSelected = selectedCity.city === loc.city;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedCity(loc)}
                    className={`w-full p-5 rounded-lg border text-left transition-all duration-300 cursor-pointer flex justify-between items-center ${
                      isSelected
                        ? "border-[#C89B5E] bg-[#C89B5E]/5 text-white"
                        : "border-stone-850 bg-stone-900 hover:bg-stone-850 text-stone-300"
                    }`}
                  >
                    <div>
                      <h4 className="font-serif font-bold text-base">{loc.city}</h4>
                      <p className="text-stone-400 text-[10px] mt-1 leading-normal">
                        {loc.address.slice(0, 50)}...
                      </p>
                    </div>
                    <span className="text-[9px] uppercase tracking-wider bg-stone-800 text-stone-300 px-2 py-0.5 rounded">
                      {loc.city === "Bangalore" ? "HQ" : "Hub"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Map/Details Panel (Right) */}
          <div className="lg:col-span-7 bg-stone-900 border border-stone-850 p-6 md:p-8 rounded-xl text-left space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div>
                  <h3 className="text-2xl font-serif text-white">{selectedCity.city} Operations</h3>
                  <span className="text-[10px] font-sans text-stone-400 uppercase tracking-wider block mt-1">
                    {selectedCity.status}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#C89B5E]/10 flex items-center justify-center text-[#C89B5E]">
                  <Compass className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-3 text-xs text-stone-300 pt-2">
                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-[#C89B5E] flex-shrink-0 mt-0.5" />
                  <span>{selectedCity.address}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-[#C89B5E]" />
                  <a href={`tel:${selectedCity.phone}`} className="hover:text-white transition-colors">
                    {selectedCity.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-[#C89B5E]" />
                  <a href={`mailto:${selectedCity.email}`} className="hover:text-white transition-colors">
                    {selectedCity.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Embed (or fallback map graphics) */}
            <div className="h-64 rounded bg-stone-950 border border-stone-850/60 overflow-hidden relative mt-4">
              {selectedCity.googleMapUrl ? (
                <iframe
                  title={`Map showing ${selectedCity.city}`}
                  src={selectedCity.googleMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center space-y-2 text-stone-500 p-4 text-center">
                  <MapPin className="w-8 h-8 text-[#C89B5E]/40" />
                  <p className="text-[11px] uppercase tracking-wider">Map coverage active</p>
                  <p className="text-[9px] text-stone-600">
                    Precision installation crews cover a 50km radius around the {selectedCity.city} hub.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={triggerQuoteModal}
                className="flex-1 bg-[#C89B5E] hover:bg-[#B3874B] text-[#1E120D] text-center py-3 rounded text-xs font-sans font-bold uppercase tracking-widest transition-colors cursor-pointer"
              >
                Book consultation in {selectedCity.city}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* REGIONAL LOGISTICS */}
      <section className="bg-stone-950 py-16 border-t border-stone-900 text-center">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2 text-left">
            <h4 className="font-serif font-bold text-white text-base">HQ Factory Loading</h4>
            <p className="text-stone-400 text-xs leading-relaxed">
              All board panels are cut, edge-banded, and boxed in Bangalore to ensure strict factory finishing parameters.
            </p>
          </div>
          <div className="space-y-2 text-left">
            <h4 className="font-serif font-bold text-white text-base">Direct Fleet Transit</h4>
            <p className="text-stone-400 text-xs leading-relaxed">
              We operate dedicated trucks shipping flat-pack modular boxes straight to site, eliminating local courier shipping delays.
            </p>
          </div>
          <div className="space-y-2 text-left">
            <h4 className="font-serif font-bold text-white text-base">Local Crew Handovers</h4>
            <p className="text-stone-400 text-xs leading-relaxed">
              Arka&apos;s installation crew coordinates offloading, alignment mapping, electrical work, and cleanup on-site.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

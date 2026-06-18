"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Calculator, CheckCircle2, ShieldCheck, Flame, Phone } from "lucide-react";

export default function CostCalculator() {
  const [step, setStep] = useState(1);
  const [property, setProperty] = useState("2 BHK");
  const [finish, setFinish] = useState("Premium");
  const [scope, setScope] = useState("Full Home Interiors");

  // Lead Details
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("Bangalore");
  const [error, setError] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Options Definitions
  const propertyOptions = [
    { name: "1 BHK", label: "1 BHK Apartment", desc: "Compact & modern spaces" },
    { name: "2 BHK", label: "2 BHK Apartment", desc: "Standard family layouts" },
    { name: "3 BHK", label: "3 BHK Apartment", desc: "Spacious premium homes" },
    { name: "Villa", label: "Luxury Villa", desc: "Bespoke multi-floor layouts" },
  ];

  const finishOptions = [
    {
      name: "Essential",
      label: "Essential Collection",
      desc: "Matte laminates, high-durability Ebco/local hardware, BWR plywood base.",
      badge: "Value Focus",
    },
    {
      name: "Premium",
      label: "Premium Collection",
      desc: "Anti-fingerprint acrylic, Hettich soft-close hinges, BWP Marine plywood base.",
      badge: "Most Popular",
    },
    {
      name: "Luxury",
      label: "Luxury Collection",
      desc: "Seamless PU lacquer or back-lacquered glass, Blum runner tracks, custom edge-banding.",
      badge: "High-End",
    },
  ];

  const scopeOptions = [
    { name: "Kitchen Only", label: "Modular Kitchen Only", desc: "Wet/dry zone counter cabinets" },
    { name: "Wardrobes Only", label: "Wardrobes & Closet Storage", desc: "Bedroom sliding/hinged spaces" },
    { name: "Full Home Interiors", label: "Complete Home Interiors", desc: "Foyer, living, kitchen, bedrooms, pooja" },
  ];

  // Logic calculation
  const calculatePrice = () => {
    let basePrice = 380000; // default Full Home
    if (scope === "Kitchen Only") basePrice = 140000;
    else if (scope === "Wardrobes Only") basePrice = 160000;

    let sizeMultiplier = 1.5; // default 2 BHK
    if (property === "1 BHK") sizeMultiplier = 1.0;
    else if (property === "3 BHK") sizeMultiplier = 2.2;
    else if (property === "Villa") sizeMultiplier = 3.6;

    let finishMultiplier = 1.6; // default Premium
    if (finish === "Essential") finishMultiplier = 1.0;
    else if (finish === "Luxury") finishMultiplier = 2.4;

    const price = basePrice * sizeMultiplier * finishMultiplier;
    const minPrice = Math.round((price * 0.95) / 10000) * 10000;
    const maxPrice = Math.round((price * 1.08) / 10000) * 10000;

    return {
      min: minPrice.toLocaleString("en-IN"),
      max: maxPrice.toLocaleString("en-IN"),
      rawMin: minPrice,
      rawMax: maxPrice,
    };
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Name and mobile number are required");
      return;
    }
    if (!/^\d{10}$/.test(phone.replace(/[\s-+]/g, ""))) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    setError("");
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          city,
          propertyType: property,
          projectSize: "",
          budgetRange: finish,
          startDate: "Immediate",
          message: `Calculated estimate for ${property} with ${finish} finish level and ${scope} scope.`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setIsCalculated(true);
      } else {
        setError(data.error || "Failed to log estimate details");
      }
    } catch (err) {
      setError("Network connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const restartCalculator = () => {
    setStep(1);
    setName("");
    setPhone("");
    setEmail("");
    setIsCalculated(false);
  };

  const results = calculatePrice();

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto">
      {/* Top Progress bar */}
      {!isCalculated && (
        <div className="w-full bg-stone-950 h-2 flex">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-full transition-all duration-500 ${
                step >= s ? "bg-[#C89B5E]" : "bg-stone-800"
              }`}
              style={{ width: "25%" }}
            />
          ))}
        </div>
      )}

      <div className="p-6 md:p-10">
        {!isCalculated ? (
          <div>
            {/* Steps titles */}
            <div className="mb-6">
              <span className="text-[10px] tracking-[0.2em] font-sans font-bold text-[#C89B5E] uppercase block mb-1">
                Step {step} of 4
              </span>
              <h3 className="text-xl md:text-2xl font-serif text-white">
                {step === 1 && "Select Your Property Configuration"}
                {step === 2 && "Choose Material Finish Standard"}
                {step === 3 && "Define Project Execution Scope"}
                {step === 4 && "Where Should We Send Your Detailed Breakdown?"}
              </h3>
            </div>

            {/* STEP 1: PROPERTY TYPE */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {propertyOptions.map((opt) => (
                  <button
                    key={opt.name}
                    type="button"
                    onClick={() => {
                      setProperty(opt.name);
                      handleNext();
                    }}
                    className={`p-5 rounded-lg border text-left transition-all duration-300 cursor-pointer flex justify-between items-center ${
                      property === opt.name
                        ? "border-[#C89B5E] bg-[#C89B5E]/5 text-white"
                        : "border-stone-800 bg-stone-950 hover:bg-stone-900 text-stone-300"
                    }`}
                  >
                    <div>
                      <p className="font-serif font-semibold text-lg">{opt.label}</p>
                      <p className="text-stone-400 text-xs mt-1">{opt.desc}</p>
                    </div>
                    {property === opt.name && (
                      <div className="w-6 h-6 rounded-full bg-[#C89B5E] flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#1E120D]" />
                      </div>
                    )}
                  </button>
                ))}
              </motion.div>
            )}

            {/* STEP 2: FINISH LEVEL */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-3"
              >
                {finishOptions.map((opt) => (
                  <button
                    key={opt.name}
                    type="button"
                    onClick={() => {
                      setFinish(opt.name);
                      handleNext();
                    }}
                    className={`p-5 rounded-lg border text-left transition-all duration-300 w-full cursor-pointer flex justify-between items-start ${
                      finish === opt.name
                        ? "border-[#C89B5E] bg-[#C89B5E]/5 text-white"
                        : "border-stone-800 bg-stone-950 hover:bg-stone-900/50 text-stone-300"
                    }`}
                  >
                    <div className="max-w-[85%]">
                      <div className="flex items-center space-x-2">
                        <p className="font-serif font-semibold text-base">{opt.label}</p>
                        <span className="text-[9px] uppercase tracking-wider bg-stone-800 text-stone-300 px-2 py-0.5 rounded">
                          {opt.badge}
                        </span>
                      </div>
                      <p className="text-stone-400 text-xs mt-1.5 leading-relaxed">{opt.desc}</p>
                    </div>
                    {finish === opt.name && (
                      <div className="w-6 h-6 rounded-full bg-[#C89B5E] flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-[#1E120D]" />
                      </div>
                    )}
                  </button>
                ))}
              </motion.div>
            )}

            {/* STEP 3: SCOPE */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="grid grid-cols-1 gap-3"
              >
                {scopeOptions.map((opt) => (
                  <button
                    key={opt.name}
                    type="button"
                    onClick={() => {
                      setScope(opt.name);
                      handleNext();
                    }}
                    className={`p-5 rounded-lg border text-left transition-all duration-300 cursor-pointer flex justify-between items-center ${
                      scope === opt.name
                        ? "border-[#C89B5E] bg-[#C89B5E]/5 text-white"
                        : "border-stone-800 bg-stone-950 hover:bg-stone-900 text-stone-300"
                    }`}
                  >
                    <div>
                      <p className="font-serif font-semibold text-base">{opt.label}</p>
                      <p className="text-stone-400 text-xs mt-1">{opt.desc}</p>
                    </div>
                    {scope === opt.name && (
                      <div className="w-6 h-6 rounded-full bg-[#C89B5E] flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#1E120D]" />
                      </div>
                    )}
                  </button>
                ))}
              </motion.div>
            )}

            {/* STEP 4: GATED LEAD DETAILS */}
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <form onSubmit={handleSubmitLead} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-stone-400 uppercase tracking-wider mb-1">Full Name *</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-stone-950 border border-stone-800 rounded px-3.5 py-2 text-white text-sm focus:border-[#C89B5E] focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-stone-400 uppercase tracking-wider mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        placeholder="8217331984"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-stone-950 border border-stone-800 rounded px-3.5 py-2 text-white text-sm focus:border-[#C89B5E] focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-stone-400 uppercase tracking-wider mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="example@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-stone-950 border border-stone-800 rounded px-3.5 py-2 text-white text-sm focus:border-[#C89B5E] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-stone-400 uppercase tracking-wider mb-1">City *</label>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-stone-950 border border-stone-800 rounded px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#C89B5E]"
                      >
                        <option value="Bangalore">Bangalore</option>
                        <option value="Mysore">Mysore</option>
                        <option value="Chitradurga">Chitradurga</option>
                        <option value="Bellary">Bellary</option>
                        <option value="Anantapur">Anantapur</option>
                      </select>
                    </div>
                  </div>

                  {error && <p className="text-red-400 text-xs text-center">{error}</p>}

                  <div className="bg-stone-950 p-4 border border-stone-800 rounded text-stone-400 text-[11px] leading-relaxed flex items-start space-x-2">
                    <ShieldCheck className="w-5 h-5 text-[#C89B5E] flex-shrink-0 mt-0.5" />
                    <span>
                      We respect your privacy. In accordance with our security principles, your data is used exclusively to formulate your estimate and coordinate a design call. We do not spam.
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C89B5E] hover:bg-[#B3874B] text-[#1E120D] py-3 text-sm font-sans font-semibold rounded tracking-wider uppercase transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? "Calculating..." : "View Cost Estimation"}
                  </button>
                </form>
              </motion.div>
            )}

            {/* Bottom buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-stone-800">
              <button
                type="button"
                onClick={handlePrev}
                disabled={step === 1}
                className={`text-xs uppercase tracking-wider font-semibold cursor-pointer ${
                  step === 1 ? "text-stone-600 cursor-not-allowed" : "text-stone-400 hover:text-white"
                }`}
              >
                Back
              </button>
              {step < 4 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center space-x-1.5 text-xs text-[#C89B5E] hover:text-[#B3874B] font-semibold uppercase tracking-wider cursor-pointer"
                >
                  <span>Skip / Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* RESULTS DISPLAY */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="text-center pb-6 border-b border-stone-800">
              <span className="w-10 h-10 rounded-full bg-[#C89B5E]/10 flex items-center justify-center mx-auto mb-2 text-[#C89B5E]">
                <Calculator className="w-5 h-5" />
              </span>
              <h4 className="text-xs uppercase tracking-[0.2em] font-sans text-stone-400 font-semibold">
                Estimated Price Range
              </h4>
              <p className="text-3xl md:text-5xl font-serif text-[#C89B5E] mt-3 font-semibold">
                ₹{results.min} - ₹{results.max}
              </p>
              <p className="text-[11px] text-stone-400 mt-2 italic">
                *Estimated cost range based on standard material consumption for a {property} layout.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-sm font-sans font-bold text-white uppercase tracking-wider mb-3">
                  Selection Specs
                </h5>
                <ul className="space-y-2 text-stone-300 text-xs">
                  <li className="flex justify-between py-1 border-b border-stone-800/40">
                    <span className="text-stone-400">Property Configuration</span>
                    <span className="font-semibold text-white">{property}</span>
                  </li>
                  <li className="flex justify-between py-1 border-b border-stone-800/40">
                    <span className="text-stone-400">Material Standard</span>
                    <span className="font-semibold text-[#C89B5E]">{finish} Collection</span>
                  </li>
                  <li className="flex justify-between py-1 border-b border-stone-800/40">
                    <span className="text-stone-400">Execution Scope</span>
                    <span className="font-semibold text-white">{scope}</span>
                  </li>
                  <li className="flex justify-between py-1 border-b border-stone-800/40">
                    <span className="text-stone-400">Assured Warranty</span>
                    <span className="font-semibold text-white">10 Years (Signed)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-sm font-sans font-bold text-white uppercase tracking-wider mb-3">
                  Included Subsystems
                </h5>
                <div className="grid grid-cols-1 gap-2 text-stone-300 text-[11px]">
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C89B5E] flex-shrink-0" />
                    <span>18mm Plywood carcass frame systems</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C89B5E] flex-shrink-0" />
                    <span>Laminate/Acrylic anti-scratch shutter overlays</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C89B5E] flex-shrink-0" />
                    <span>German Soft-close functional hinges</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C89B5E] flex-shrink-0" />
                    <span>Dust-seal gaskets & PVC edge banded corners</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 pt-6 border-t border-stone-800">
              <a
                href={`https://wa.me/918217331984?text=${encodeURIComponent(
                  `Hi Arka WoodTech, I calculated my estimate for a ${property} (${finish} finish, ${scope}) which is ₹${results.min} - ₹${results.max}. Please send me a detailed PDF bill of materials.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#C89B5E] hover:bg-[#B3874B] text-[#1E120D] text-center py-3 rounded text-sm font-sans font-semibold tracking-wider uppercase transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Get Detailed PDF on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={restartCalculator}
                className="border border-stone-700 hover:border-white text-stone-300 hover:text-white px-6 py-3 rounded text-xs tracking-wider uppercase transition-colors cursor-pointer"
              >
                Recalculate
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

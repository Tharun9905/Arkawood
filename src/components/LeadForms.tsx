"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Phone, CheckCircle, Award, Star } from "lucide-react";

// Types for form values
export interface LeadFormValues {
  name: string;
  phone: string;
  email: string;
  city: string;
  propertyType: string;
  projectSize: string;
  budgetRange: string;
  startDate: string;
  message: string;
}

// Global modal triggers helper
let openQuoteModalGlobal: () => void = () => {};
export const triggerQuoteModal = () => {
  openQuoteModalGlobal();
};

// --- CONTACT FORM (Full structural lead capture) ---
export function ContactForm() {
  const [form, setForm] = useState<LeadFormValues>({
    name: "",
    phone: "",
    email: "",
    city: "Bangalore",
    propertyType: "3 BHK",
    projectSize: "",
    budgetRange: "₹5L - ₹8L",
    startDate: "Immediate",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<LeadFormValues>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const newErrors: Partial<LeadFormValues> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else if (!/^\d{10}$/.test(form.phone.replace(/[\s-+]/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }
    if (form.email.trim() && !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setSubmitError("");
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        if (data.success) {
          setIsSubmitted(true);
        } else {
          setSubmitError(data.error || "Failed to submit request.");
        }
      } catch (err) {
        setSubmitError("Network connection error. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-stone-900 border border-stone-800 p-8 rounded-xl text-center flex flex-col items-center justify-center min-h-[400px]"
      >
        <CheckCircle className="w-16 h-16 text-[#C89B5E] mb-4" />
        <h3 className="text-2xl font-serif text-white mb-2">Thank You, {form.name}!</h3>
        <p className="text-stone-400 text-sm max-w-md mb-6">
          Your luxury interior enquiry has been logged successfully. A dedicated Design Director will contact you within 2 business hours.
        </p>
        <a
          href={`https://wa.me/918217331984?text=${encodeURIComponent(
            `Hi Arka WoodTech, I just submitted the contact form for my ${form.propertyType} in ${form.city}. Please connect me with a design director.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#C89B5E] hover:bg-[#B3874B] text-[#1E120D] px-6 py-3 font-sans font-semibold rounded-lg tracking-wider transition-all duration-300 inline-flex items-center space-x-2"
        >
          <span>Connect Instantly on WhatsApp</span>
        </a>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-stone-900/60 backdrop-blur-md border border-stone-800 p-6 md:p-8 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1 font-semibold">Full Name *</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2 text-white text-sm focus:border-[#C89B5E] focus:outline-none transition-colors"
            placeholder="John Doe"
            required
          />
          {errors.name && <p className="text-red-400 text-[10px] mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1 font-semibold">Mobile Number *</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2 text-white text-sm focus:border-[#C89B5E] focus:outline-none transition-colors"
            placeholder="8217331984"
            required
          />
          {errors.phone && <p className="text-red-400 text-[10px] mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1 font-semibold">Email Address</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2 text-white text-sm focus:border-[#C89B5E] focus:outline-none transition-colors"
            placeholder="example@mail.com"
          />
          {errors.email && <p className="text-red-400 text-[10px] mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1 font-semibold">City *</label>
          <select
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2.5 text-white text-sm focus:border-[#C89B5E] focus:outline-none transition-colors"
          >
            <option value="Bangalore">Bangalore</option>
            <option value="Mysore">Mysore</option>
            <option value="Chitradurga">Chitradurga</option>
            <option value="Bellary">Bellary</option>
            <option value="Anantapur">Anantapur</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1 font-semibold">Property Type *</label>
          <select
            value={form.propertyType}
            onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
            className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2.5 text-white text-sm focus:border-[#C89B5E] focus:outline-none transition-colors"
          >
            <option value="1 BHK">1 BHK Apartment</option>
            <option value="2 BHK">2 BHK Apartment</option>
            <option value="3 BHK">3 BHK Apartment</option>
            <option value="Villa">Luxury Villa</option>
            <option value="Premium Custom Home">Premium Custom Home</option>
            <option value="Renovation">Renovation Space</option>
            <option value="Commercial">Office / Commercial</option>
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1 font-semibold">Approx. Area (Sq.Ft.)</label>
          <input
            type="number"
            value={form.projectSize}
            onChange={(e) => setForm({ ...form, projectSize: e.target.value })}
            className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2 text-white text-sm focus:border-[#C89B5E] focus:outline-none transition-colors"
            placeholder="e.g. 1500"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1 font-semibold">Budget Range *</label>
          <select
            value={form.budgetRange}
            onChange={(e) => setForm({ ...form, budgetRange: e.target.value })}
            className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2.5 text-white text-sm focus:border-[#C89B5E] focus:outline-none transition-colors"
          >
            <option value="Under ₹3 Lakhs">Under ₹3 Lakhs</option>
            <option value="₹3L - ₹5L">₹3L - ₹5L</option>
            <option value="₹5L - ₹8L">₹5L - ₹8L</option>
            <option value="₹8L - ₹12L">₹8L - ₹12L</option>
            <option value="₹12L+">₹12L+</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1 font-semibold">Expected Start Date *</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {["Immediate", "Within 1 Month", "Within 3 Months", "3+ Months"].map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setForm({ ...form, startDate: opt })}
              className={`border text-center py-2 text-xs rounded transition-all cursor-pointer ${
                form.startDate === opt
                  ? "border-[#C89B5E] bg-[#C89B5E]/10 text-[#C89B5E]"
                  : "border-stone-800 bg-stone-950 hover:bg-stone-900 text-stone-300"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1 font-semibold">Your Design Requirement & Ideas</label>
        <textarea
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2 text-white text-sm focus:border-[#C89B5E] focus:outline-none transition-colors resize-none"
          placeholder="Describe any custom modular styling, storage, or finish layouts you have in mind..."
        />
      </div>

      {submitError && <p className="text-red-400 text-xs text-center">{submitError}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#C89B5E] hover:bg-[#B3874B] text-[#1E120D] py-3 text-sm font-sans font-semibold rounded tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit Design Inquiry"}
      </button>
    </form>
  );
}

// --- FREE DESIGN CONSULTATION POPUP (Triggers after 20 seconds) ---
export function FreeConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("Bangalore");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // 20-second delay
    const timer = setTimeout(() => {
      // Check if user has already interacted/closed the popup
      const dismissed = sessionStorage.getItem("consultation_popup_dismissed");
      if (!dismissed) {
        setIsOpen(true);
      }
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("consultation_popup_dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Please fill in all fields");
      return;
    }
    if (!/^\d{10}$/.test(phone.replace(/[\s-+]/g, ""))) {
      setError("Please enter a valid 10-digit number");
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
          email: "",
          city: location,
          propertyType: "Free Consultation Popup",
          projectSize: "",
          budgetRange: "",
          startDate: "Immediate",
          message: "Enquiry submitted via 20-second Delayed Consultation Popup.",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        setError(data.error || "Failed to log consultation request.");
      }
    } catch (err) {
      setError("Network connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-lg overflow-hidden bg-stone-900 border border-stone-800 rounded-xl shadow-2xl"
          >
            {/* Design header accent */}
            <div className="h-1.5 bg-[#C89B5E]" />

            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-8">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-6">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#C89B5E]/10 text-[#C89B5E] mb-2">
                      <Star className="w-3.5 h-3.5 fill-[#C89B5E] text-[#C89B5E]" />
                      <span>Limited Time Offer</span>
                    </span>
                    <h3 className="text-2xl font-serif text-white mt-1">Book Your FREE Design Consultation</h3>
                    <p className="text-stone-400 text-xs mt-2 max-w-sm mx-auto">
                      Collaborate with our Design Directors to map layouts, select premium finishes, and sketch your dream spaces.
                    </p>
                  </div>

                  {/* Included benefits checklist */}
                  <div className="grid grid-cols-2 gap-2 bg-stone-950 p-3 rounded-lg text-left text-[11px] mb-6 text-stone-300 border border-stone-800">
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C89B5E] flex-shrink-0" />
                      <span>Space Planning Layout</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C89B5E] flex-shrink-0" />
                      <span>Design Suggestions</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C89B5E] flex-shrink-0" />
                      <span>Budget Estimation</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C89B5E] flex-shrink-0" />
                      <span>Premium Material Tour</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2 text-white text-sm focus:border-[#C89B5E] focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Your Mobile Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2 text-white text-sm focus:border-[#C89B5E] focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2 text-white text-sm focus:border-[#C89B5E] focus:outline-none transition-colors"
                      >
                        <option value="Bangalore">Bangalore</option>
                        <option value="Mysore">Mysore</option>
                        <option value="Chitradurga">Chitradurga</option>
                        <option value="Bellary">Bellary</option>
                        <option value="Anantapur">Anantapur</option>
                        <option value="Other">Other Location</option>
                      </select>
                    </div>

                    {error && <p className="text-red-400 text-xs text-center">{error}</p>}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#C89B5E] hover:bg-[#B3874B] text-[#1E120D] py-3 text-sm font-sans font-semibold rounded tracking-wider uppercase transition-colors duration-300 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? "Securing..." : "Secure Free Session"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-6 flex flex-col items-center">
                  <CheckCircle className="w-16 h-16 text-[#C89B5E] mb-4" />
                  <h3 className="text-2xl font-serif text-white mb-2">Consultation Booked!</h3>
                  <p className="text-stone-400 text-xs max-w-sm mb-6">
                    Thank you {name}. We will call you shortly to confirm your preferred slot for the space planning session.
                  </p>
                  <button
                    onClick={handleClose}
                    className="border border-stone-800 text-stone-300 hover:text-white px-5 py-2 text-xs rounded transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// --- EXIT INTENT POPUP ---
export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if mouse goes above the viewport (indicates closing tab or typing URL)
      if (e.clientY < 5) {
        const exitShown = sessionStorage.getItem("exit_intent_popup_shown");
        if (!exitShown) {
          setIsOpen(true);
          sessionStorage.setItem("exit_intent_popup_shown", "true");
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Name and Phone are required");
      return;
    }
    if (!/^\d{10}$/.test(phone.replace(/[\s-+]/g, ""))) {
      setError("Please enter a valid 10-digit number");
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
          city: "Bangalore",
          propertyType: "Exit Intent Popup",
          projectSize: "",
          budgetRange: "",
          startDate: "Immediate",
          message: "Requesting luxury catalogue & Free Pooja Unit voucher.",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        setError(data.error || "Failed to submit request.");
      }
    } catch (err) {
      setError("Network connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md bg-stone-900 border border-stone-800 rounded-xl overflow-hidden shadow-2xl"
          >
            {/* Header Accent */}
            <div className="h-1 bg-[#C89B5E]" />

            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-8">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-6">
                    <Award className="w-10 h-10 text-[#C89B5E] mx-auto mb-2" />
                    <h3 className="text-xl font-serif text-white">Wait! Don&apos;t Leave empty-handed</h3>
                    <p className="text-stone-400 text-[11px] mt-1.5 leading-relaxed">
                      Download our **Premium Luxury Catalogue** and receive a voucher for a **Free Modular Pooja Unit** on bookings made this month!
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2 text-white text-xs focus:border-[#C89B5E] focus:outline-none transition-colors"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Your Mobile Number *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2 text-white text-xs focus:border-[#C89B5E] focus:outline-none transition-colors"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2 text-white text-xs focus:border-[#C89B5E] focus:outline-none transition-colors"
                    />

                    {error && <p className="text-red-400 text-[10px] text-center">{error}</p>}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#C89B5E] hover:bg-[#B3874B] text-[#1E120D] py-2.5 text-xs font-sans font-semibold rounded tracking-wider uppercase transition-colors cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? "Securing..." : "Get Catalogue & Offer"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-4">
                  <CheckCircle className="w-12 h-12 text-[#C89B5E] mx-auto mb-3" />
                  <h4 className="text-lg font-serif text-white mb-1">Offer Secured!</h4>
                  <p className="text-stone-400 text-xs mb-4">
                    We have emailed you the catalogue. One of our design coordinators will text you on WhatsApp to activate your Pooja Unit voucher.
                  </p>
                  <button
                    onClick={handleClose}
                    className="bg-stone-800 text-stone-200 hover:bg-stone-700 px-4 py-2 text-xs rounded transition-colors cursor-pointer"
                  >
                    Finish
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// --- DYNAMIC QUOTE REQUEST MODAL (Global helper integration) ---
export function QuoteRequestModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<LeadFormValues>({
    name: "",
    phone: "",
    email: "",
    city: "Bangalore",
    propertyType: "3 BHK",
    projectSize: "",
    budgetRange: "₹5L - ₹8L",
    startDate: "Immediate",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<LeadFormValues>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    openQuoteModalGlobal = () => {
      setIsSubmitted(false);
      setForm({
        name: "",
        phone: "",
        email: "",
        city: "Bangalore",
        propertyType: "3 BHK",
        projectSize: "",
        budgetRange: "₹5L - ₹8L",
        startDate: "Immediate",
        message: "",
      });
      setErrors({});
      setIsOpen(true);
    };
  }, []);

  const validate = () => {
    const newErrors: Partial<LeadFormValues> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else if (!/^\d{10}$/.test(form.phone.replace(/[\s-+]/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setSubmitError("");
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        if (data.success) {
          setIsSubmitted(true);
        } else {
          setSubmitError(data.error || "Failed to submit request.");
        }
      } catch (err) {
        setSubmitError("Network connection error. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-lg bg-stone-900 border border-stone-800 rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="h-1 bg-[#C89B5E]" />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
              {!isSubmitted ? (
                <>
                  <div className="mb-4">
                    <h3 className="text-xl font-serif text-white">Request Luxury Custom Quote</h3>
                    <p className="text-stone-400 text-xs mt-1">
                      Provide details about your property, and we will formulate an architectural estimate for your spaces.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-0.5">Name *</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-1.5 text-white text-xs focus:border-[#C89B5E] focus:outline-none"
                          required
                        />
                        {errors.name && <p className="text-red-400 text-[9px] mt-0.5">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-0.5">Phone *</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-1.5 text-white text-xs focus:border-[#C89B5E] focus:outline-none"
                          required
                        />
                        {errors.phone && <p className="text-red-400 text-[9px] mt-0.5">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-0.5">Email</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-1.5 text-white text-xs focus:border-[#C89B5E] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-0.5">City *</label>
                        <select
                          value={form.city}
                          onChange={(e) => setForm({ ...form, city: e.target.value })}
                          className="w-full bg-stone-950 border border-stone-800 rounded px-3.5 py-2 text-white text-xs focus:outline-none focus:border-[#C89B5E]"
                        >
                          <option value="Bangalore">Bangalore</option>
                          <option value="Mysore">Mysore</option>
                          <option value="Chitradurga">Chitradurga</option>
                          <option value="Bellary">Bellary</option>
                          <option value="Anantapur">Anantapur</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-0.5">Property Type *</label>
                        <select
                          value={form.propertyType}
                          onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
                          className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2 text-white text-xs focus:outline-none"
                        >
                          <option value="1 BHK">1 BHK</option>
                          <option value="2 BHK">2 BHK</option>
                          <option value="3 BHK">3 BHK</option>
                          <option value="Villa">Villa</option>
                          <option value="Custom Home">Custom Home</option>
                          <option value="Renovation">Renovation</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-0.5">Area (Sq.Ft.)</label>
                        <input
                          type="number"
                          placeholder="e.g. 1200"
                          value={form.projectSize}
                          onChange={(e) => setForm({ ...form, projectSize: e.target.value })}
                          className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-1.5 text-white text-xs focus:border-[#C89B5E] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-0.5">Budget *</label>
                        <select
                          value={form.budgetRange}
                          onChange={(e) => setForm({ ...form, budgetRange: e.target.value })}
                          className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2 text-white text-xs focus:outline-none"
                        >
                          <option value="Under ₹3 Lakhs">Under ₹3L</option>
                          <option value="₹3L - ₹5L">₹3L - ₹5L</option>
                          <option value="₹5L - ₹8L">₹5L - ₹8L</option>
                          <option value="₹8L - ₹12L">₹8L - ₹12L</option>
                          <option value="₹12L+">₹12L+</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-0.5">Expected Start *</label>
                        <select
                          value={form.startDate}
                          onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                          className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2 text-white text-xs focus:outline-none"
                        >
                          <option value="Immediate">Immediate</option>
                          <option value="Within 1 Month">Within 1 Month</option>
                          <option value="Within 3 Months">Within 3 Months</option>
                          <option value="3+ Months">3+ Months</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-0.5">Note</label>
                        <input
                          type="text"
                          placeholder="Special requests..."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-1.5 text-white text-xs focus:outline-none"
                        />
                      </div>
                    </div>

                    {submitError && <p className="text-red-400 text-xs text-center">{submitError}</p>}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#C89B5E] hover:bg-[#B3874B] text-[#1E120D] py-3 text-xs font-sans font-semibold rounded tracking-wider uppercase transition-colors duration-300 mt-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <CheckCircle className="w-16 h-16 text-[#C89B5E] mx-auto mb-4" />
                  <h4 className="text-xl font-serif text-white mb-2">Quote Request Submitted</h4>
                  <p className="text-stone-400 text-xs mb-6">
                    Our technical Estimator is checking your specifications. We will send you an initial draft estimate within 4 business hours.
                  </p>
                  <div className="flex space-x-3 justify-center">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="border border-stone-800 text-stone-300 hover:text-white px-5 py-2 text-xs rounded transition-colors cursor-pointer"
                    >
                      Close Window
                    </button>
                    <a
                      href={`https://wa.me/918217331984?text=${encodeURIComponent(
                        `Hi Arka WoodTech, I would like to double check my estimation quote for my ${form.propertyType} project.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#C89B5E] text-[#1E120D] px-5 py-2 text-xs rounded font-sans font-semibold transition-colors hover:bg-[#B3874B]"
                    >
                      WhatsApp Support
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

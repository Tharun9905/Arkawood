import React from "react";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modern Apartment Interior Designers Bangalore | Arka WoodTech",
  description: "Smart space-saving modular interior designers for apartments in Bangalore. Murphy beds, tall pantries, and custom furniture setups.",
};

export default function ApartmentInteriorsBangalorePage() {
  return (
    <SeoLandingTemplate
      pageTitle="Apartment Interiors Bangalore"
      metaHeading="Modern Apartment Interior Designers in Bangalore"
      bannerImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
      introText="Arka WoodTech Interiors builds space-maximizing, modern, and smart modular setups. 2 BHK and 3 BHK apartment interiors designed with contemporary aesthetics and high-density vertical storage."
      secondaryText="Apartment layouts require a balance of storage utility and walking room. We utilize builder floorplans to engineer smart modular storage units that fit into blind corners, niches, and alcoves. All panels are fabricated in our Bangalore factory, arriving on site in flat-packs for fast, quiet assembly."
      benefits={[
        "Space-saving modular furniture (hidden beds, wall consoles)",
        "Flat-pack factory delivery for fast and dust-free site assembly",
        "Anti-scratch laminate and high-gloss acrylic finishes",
        "Corner cabinet carousel pull-outs that maximize storage",
        "Dedicated project managers coordinating with society rules",
        "Official 10-Year warranty handbook with post-install audit reviews"
      ]}
      specs={[
        { title: "BWR carcass base", desc: "18mm Boiling Water Resistant plywood core resisting dampness and moisture" },
        { title: "Smart Storage", desc: "Ventilated shoe consoles, multi-tier utility pantries, and custom study desk combos" },
        { title: "Society Compliance", desc: "Our teams adhere strictly to apartment rules regarding work hours, noise, and safety" }
      ]}
      faqs={[
        {
          question: "How do you ensure modular cabinets fit builder layout walls?",
          answer: "Our designers take high-precision laser site measurements to account for wall offsets, plug points, and plumbing lines before compiling modular cuts drawings."
        },
        {
          question: "Can we install modular interiors in a rented apartment?",
          answer: "Yes, we can design semi-modular or freestanding storage solutions that can be dismantled and moved if you change properties."
        },
        {
          question: "What is your process for society work approvals?",
          answer: "We supply all required layout drawings, carpenter details, material specifications, and insurance papers to secure society clearances."
        }
      ]}
      keywords={[
        "Apartment Interiors Bangalore",
        "Apartment Interior Designers Bangalore",
        "Best Apartment Interiors Bangalore",
        "2 BHK Apartment Interiors Bangalore"
      ]}
    />
  );
}

import React from "react";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Villa Interior Designers Bangalore | Arka WoodTech Interiors",
  description: "Bespoke double-height living room paneling, PU painted premium kitchens, and luxury walk-in wardrobes for premium villa buyers.",
};

export default function VillaInteriorsBangalorePage() {
  return (
    <SeoLandingTemplate
      pageTitle="Villa Interiors Bangalore"
      metaHeading="Luxury Villa Interior Designers in Bangalore"
      bannerImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
      introText="Arka WoodTech Interiors delivers grand, bespoke villa interior solutions. Double-height wood paneling, walk-in vanity closets, island PU kitchens, and custom woodwork built to architectural scale."
      secondaryText="Villas and spacious row houses require high-end custom cabinetry and wall panelling that off-the-shelf modular furniture cannot match. We operate closely with custom design drawings, translating complex architectural concepts into millimeter-accurate factory shop drawings. This ensures seamless wall transitions and clean veneer alignments."
      benefits={[
        "Custom grand double-height veneer and fluted wall paneling",
        "PU lacquer painted cabinets and custom sliding glass panel dividers",
        "Spacious island kitchens with Blum Legrabox drawer runner runners",
        "Exquisite walk-in closets with sensory LEDs and jewelry drawers",
        "Solid teak wood Pooja mandirs with backlit CNC jali patterns",
        "Experienced site supervisors directing custom execution tasks"
      ]}
      specs={[
        { title: "Veneer Finish", desc: "Premium natural teak or walnut wood veneers with dust-resistant matte sealer coats" },
        { title: "Island Kitchens", desc: "Designed with custom stone counter extensions, breakfast tables, and wine racks" },
        { title: "Warranty Coverage", desc: "10-Year signed warranty on BWP Marine grade panel structures" }
      ]}
      faqs={[
        {
          question: "How do you coordinate with our independent villa architects?",
          answer: "We act as your precision engineering and manufacturing partner. We review your architect's 3D and AutoCAD files, verify site dimensions, compile detailed shop cuts drawings, and handle full factory fabrication."
        },
        {
          question: "What materials do you use for high-end villa cabinets?",
          answer: "We use 18mm BWP Marine plywood carcass base, coated with natural wood veneer, high-gloss acrylic, or premium multi-layer PU painted finishes."
        },
        {
          question: "How long does a full villa interior project take?",
          answer: "A complete villa project takes about 45 to 60 working days, as it involves intricate wall paneling, ceiling works, custom paints, and detailed fittings."
        }
      ]}
      keywords={[
        "Villa Interiors Bangalore",
        "Villa Interior Designers Bangalore",
        "Luxury Villa Interiors Bangalore",
        "Bespoke Villa Interiors Bangalore"
      ]}
    />
  );
}

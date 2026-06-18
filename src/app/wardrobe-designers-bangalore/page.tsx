import React from "react";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Wardrobe Designers Bangalore | Arka WoodTech Interiors",
  description: "Modern custom sliding & hinged wardrobe designers in Bangalore. Profile LED designs, custom storage spaces, factory precision finishes.",
};

export default function WardrobeDesignersBangalorePage() {
  return (
    <SeoLandingTemplate
      pageTitle="Wardrobe Designers Bangalore"
      metaHeading="Premium Sliding & Hinged Wardrobe Designers in Bangalore"
      bannerImage="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80"
      introText="Arka WoodTech crafts elegant, space-maximizing wardrobes. Sliding closets, hinged shutter doors, walk-in closets, and study storage combos built with luxury laminates."
      secondaryText="Bedroom storage should adapt to your personal wardrobe. We avoid generic sizes and design modular interiors with custom drawer sets, pull-out trouser racks, jewelry trays, and integrated LED lighting. All panels are edge-banded with zero joints to prevent dust accumulation."
      benefits={[
        "Smooth soft-close sliding rails and heavy load hinges",
        "Anodized gold & black profile glass doors with tinted glass",
        "Custom inner layout divisions (hanging rods, organizer trays)",
        "Zero-joint premium edge banding prevent panel splits",
        "Floor-to-ceiling heights capturing maximum storage volume",
        "10-Year Warranty against manufacturing warping defects"
      ]}
      specs={[
        { title: "BWR carcass base", desc: "18mm Boiling Water Resistant plywood core resisting dampness and moisture" },
        { title: "Sliding Channels", desc: "Heavy-duty bottom roller rails that operate smoothly for 50,000 cycles" },
        { title: "LED profile slots", desc: "Sensory, motion-activated interior LEDs lighting closet sections" }
      ]}
      faqs={[
        {
          question: "Which is better: sliding or hinged wardrobes for Bangalore apartments?",
          answer: "Sliding wardrobes are highly recommended for compact bedrooms because the door slider does not take up floor clearance. Hinged closets are ideal for larger rooms and allow you to view the entire wardrobe space at once."
        },
        {
          question: "Do you configure matching dressing units and study desks?",
          answer: "Yes, we customize integrated dressing mirrors, study desks, and side consoles matching your wardrobe laminates."
        },
        {
          question: "Can I inspect wood materials before installation?",
          answer: "Yes, we send you the checklist of materials and you can verify the BWR plywood markings when the modular crates arrive at your site."
        }
      ]}
      keywords={[
        "Wardrobe Designers Bangalore",
        "Best Wardrobe Designers Bangalore",
        "Sliding Wardrobe Bangalore",
        "Custom Wardrobe Bangalore"
      ]}
    />
  );
}

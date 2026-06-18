import React from "react";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Home Interiors Bangalore | Arka WoodTech Interiors",
  description: "End-to-end premium home interior designers in Bangalore. 2 BHK, 3 BHK & villa package layouts with factory finishing control.",
};

export default function HomeInteriorsBangalorePage() {
  return (
    <SeoLandingTemplate
      pageTitle="Home Interiors Bangalore"
      metaHeading="Premium Complete Home Interior Solutions in Bangalore"
      bannerImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
      introText="Arka WoodTech Interiors is a premium execution partner for full home design makeovers. We manufacture and install modular kitchens, wardrobes, foyers, and TV panels."
      secondaryText="Choosing a single company for complete home interiors eliminates coordination stress with multiple carpenters, painters, and electrical workers. We provide full end-to-end management. From civil modifications, plumbing shifts, and false ceiling panels to factory modular installations, we coordinate all tasks under a dedicated project manager."
      benefits={[
        "Single-point coordination under one dedicated manager",
        "Cohesive design aesthetics matching colors across rooms",
        "Cost-effective package estimates (2 BHK, 3 BHK, Villas)",
        "Premium factory finishes: Acrylic, UV laminate, PU lacquer",
        "10-Year warranty handbook with mTLS alignment audit checks",
        "Complete site clean-up and dust removal before final keys handover"
      ]}
      specs={[
        { title: "Material Standards", desc: "Genuine BWR and BWP Marine Plywood carcass base (zero particle board)" },
        { title: "Signed Guarantee", desc: "Official 10-year warranty certificate handed over on final checklist sign-off" },
        { title: "Delivery Timeline", desc: "Completed within 35 to 45 working days depending on structural scope" }
      ]}
      faqs={[
        {
          question: "What items are included in your 3 BHK interior package?",
          answer: "Our 3 BHK package includes a premium modular kitchen with acrylic panels and Hettich hardware, master bedroom closet with vanity, guest/kids bedroom wardrobes with built-in desks, foyer shoe console, backlit TV back panel, and designer screens."
        },
        {
          question: "Can we modify package contents?",
          answer: "Absolutely. Every package is fully customizable. You can scale storage spaces up or down, alter laminates, choose different handles, or change material grades."
        },
        {
          question: "Do you charge extra for design renders?",
          answer: "No, 2D floor plans and 3D photo-realistic representations are completely included once the booking advance is processed."
        }
      ]}
      keywords={[
        "Home Interiors Bangalore",
        "Complete Home Interiors Bangalore",
        "Best Home Interiors Bangalore",
        "Luxury Home Interiors Bangalore"
      ]}
    />
  );
}

import React from "react";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Interior Designers in Bangalore | Arka WoodTech Interiors",
  description: "Top interior design company in Bangalore offering bespoke home interiors, modular kitchens, and wardrobes with 7+ years of expert craft.",
};

export default function BangaloreInteriorsPage() {
  return (
    <SeoLandingTemplate
      pageTitle="Interior Designers Bangalore"
      metaHeading="Top Luxury Interior Designers in Bangalore"
      bannerImage="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80"
      introText="Arka WoodTech Interiors delivers end-to-end customized residential home designs. From layout sketches to precision edge banding, we turn flats and villas into luxury landmarks."
      secondaryText="Finding the right interior designer in Bangalore can be challenging, as standard local carpenters frequently fail on alignment, edge finishes, and timeline promises. We solve this by operating a state-of-the-art modular manufacturing plant in Bangalore. By cutting and routing panels using computerized saws, we ensure millimeter accuracy and error-free execution."
      benefits={[
        "Dedicated in-house designers mapping space ergonomics",
        "Computer-guided factory cutting & premium edge banding",
        "Official signed 10-Year Warranty handbook",
        "Complete structural civil, plumbing, and wiring coverage",
        "Daily progress logs & dedicated project managers",
        "Squeak-free board fittings and layout audits"
      ]}
      specs={[
        { title: "BWP Carcass", desc: "100% Water Proof Boiling Water Proof Marine Plywood base structures" },
        { title: "Hardware Guarantee", desc: "Lifetime warranty on authentic Blum, Hettich & Ebco systems" },
        { title: "Timeline Commitment", desc: "Handovers completed within 40 working days from design sign-off" }
      ]}
      faqs={[
        {
          question: "Why choose Arka WoodTech over local carpenter work in Bangalore?",
          answer: "Local carpenters use manual tools that often cause chipped laminate edges, uneven cabinet gaps, and weak joints. Arka uses heavy-duty computer saws and edge-banders at our Bangalore factory, guaranteeing flawless luxury finishes and zero moisture absorption."
        },
        {
          question: "How do your design consultations work?",
          answer: "Our designers visit your property in HSR, Whitefield, JP Nagar, etc. to take laser site measurements. We then host a design discussion and present detailed 3D rendering visualizations and transparent quotes."
        },
        {
          question: "What is your warranty coverage?",
          answer: "We provide an official 10-year warranty handbook covering our BWP Marine plywood boards and a lifetime replacement warranty on soft-close metal hinge drawer fixtures."
        }
      ]}
      keywords={[
        "Interior Designers Bangalore",
        "Best Interior Designers Bangalore",
        "Luxury Interior Designers Bangalore",
        "Home Interior Designers Bangalore"
      ]}
    />
  );
}

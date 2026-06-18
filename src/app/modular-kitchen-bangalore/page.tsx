import React from "react";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Modular Kitchen Bangalore | Arka WoodTech Interiors",
  description: "Fabricate water-proof modular kitchens in Bangalore. BWR & BWP marine plywood, Acrylic & PU lacquer finishes with 10-year warranty.",
};

export default function ModularKitchenBangalorePage() {
  return (
    <SeoLandingTemplate
      pageTitle="Modular Kitchen Bangalore"
      metaHeading="Luxury Modular Kitchen Manufacturers in Bangalore"
      bannerImage="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
      introText="Arka WoodTech manufactures highly durable, ergonomic, water-resistant modular kitchens. Custom U-Shape, L-Shape, Parallel, and Island layouts fabricated with German machine precision."
      secondaryText="Kitchens are high-moisture zones with constant exposure to oil, heat, and water. Standard commercial plywood or low-density particle boards swell and disintegrate within years. Arka prevents this by exclusively manufacturing kitchen base cabinets using 100% genuine BWP (Boiling Water Proof) Marine Plywood with PU hot-melt edge sealing."
      benefits={[
        "100% Water-proof BWP Marine plywood base cabinets",
        "Anti-scratch glossy acrylic & premium PU lacquer overlays",
        "Sensys soft-close auto-closing hinges from Hettich",
        "Organized pullouts, grain trolleys & tall pantry units",
        "Ergonomic kitchen work triangle alignment (Sink-Stove-Fridge)",
        "Water-tight edge banding that prevents structural swelling"
      ]}
      specs={[
        { title: "BWP Marine carcass", desc: "Premium grade core boards that withstand 72 hours of boiling water testing" },
        { title: "German Slides", desc: "Lifetime warranty Blum & Hettich sliding drawer systems" },
        { title: "Quartz Countertops", desc: "Stunning, non-porous scratch-resistant quartz stone counters" }
      ]}
      faqs={[
        {
          question: "What is the difference between BWR and BWP plywood for kitchens?",
          answer: "BWP (Boiling Water Proof) plywood uses premium phenolic glue and can withstand continuous direct water contact, making it mandatory for kitchen sink and stove base units. BWR (Boiling Water Resistant) is water-resistant and suited for dry bedroom wardrobes."
        },
        {
          question: "Can you customize cabinets to fit my specific appliances?",
          answer: "Yes, we custom-route modular spaces to accommodate your built-in hob, chimney, microwave, dishwasher, and refrigerator sizes."
        },
        {
          question: "How long does kitchen fabrication and site assembly take?",
          answer: "It takes about 30 working days for factory production and just 3-5 days for dry assembly on site, ensuring minimal home disruption."
        }
      ]}
      keywords={[
        "Modular Kitchen Bangalore",
        "Modular Kitchen Manufacturers Bangalore",
        "Best Modular Kitchen Bangalore",
        "Luxury Modular Kitchen Bangalore"
      ]}
    />
  );
}

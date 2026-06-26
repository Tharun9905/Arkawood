import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import MobileStickyBar from "@/components/MobileStickyBar";
import {
  FreeConsultationPopup,
  ExitIntentPopup,
  QuoteRequestModal,
} from "@/components/LeadForms";

const serifFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARKA WOODTECH INTERIORS | Premium Home Interiors & Modular Kitchens Bangalore",
  description:
    "Premium interior design company in Bangalore offering modular kitchens, wardrobes, living room interiors and complete home solutions with 10+ years experience.",
  keywords: [
    "Interior Designers Bangalore",
    "Modular Kitchen Bangalore",
    "Wardrobe Designers Bangalore",
    "Home Interiors Bangalore",
    "Luxury Interior Designers Bangalore",
    "Custom Furniture Bangalore",
    "Villa Interiors Bangalore",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#120A07] text-[#F7F5F0]">
        {/* Navigation Header */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow pt-20">{children}</main>

        {/* Global Overlays & Lead Capture triggers */}
        <FreeConsultationPopup />
        <ExitIntentPopup />
        <QuoteRequestModal />

        {/* Global Floating CTAs */}
        <FloatingActions />
        <MobileStickyBar />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

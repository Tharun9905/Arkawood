"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import ArkaLogo from "./ui/ArkaLogo";
import { triggerQuoteModal } from "./LeadForms";

export default function Footer() {
  const categories = [
    { name: "Modular Kitchens", path: "/products" },
    { name: "Wardrobes & Closets", path: "/products" },
    { name: "TV & Entertainment", path: "/products" },
    { name: "Living Room Design", path: "/products" },
    { name: "Bespoke Pooja Units", path: "/products" },
    { name: "Bedroom Furniture", path: "/products" },
  ];

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Projects Gallery", path: "/projects" },
    { name: "Coverage Locations", path: "/locations" },
    { name: "Interior Design Blog", path: "/blog" },
    { name: "Contact & Location", path: "/contact" },
  ];

  const seoLinks = [
    { name: "Interior Designers Bangalore", path: "/interior-designers-bangalore" },
    { name: "Modular Kitchen Bangalore", path: "/modular-kitchen-bangalore" },
    { name: "Wardrobe Designers Bangalore", path: "/wardrobe-designers-bangalore" },
    { name: "Home Interiors Bangalore", path: "/home-interiors-bangalore" },
    { name: "Villa Interiors Bangalore", path: "/villa-interiors-bangalore" },
    { name: "Apartment Interiors Bangalore", path: "/apartment-interiors-bangalore" },
  ];

  return (
    <footer className="bg-[#120A07] border-t border-stone-900 text-stone-300 pt-16 pb-24 md:pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <ArkaLogo variant="footer" className="h-10" />
            <p className="text-xs text-stone-400 leading-relaxed mt-2">
              Bespoke luxury interior designs and modular manufacturing. Serving Bangalore and Karnataka with factory-finished precision since 2019.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://www.instagram.com/arkawoodtech_interiors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-[#C89B5E] hover:border-[#C89B5E] transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href={`https://wa.me/918217331984?text=${encodeURIComponent(
                  "Hi Arka WoodTech, I would like to book a free consultation session."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-[#C89B5E] hover:border-[#C89B5E] transition-all duration-300"
              >
                {/* Custom WhatsApp Icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.371a9.936 9.936 0 0 0 4.779 1.229h.004c5.505 0 9.988-4.478 9.99-9.984a9.96 9.96 0 0 0-2.926-7.062A9.96 9.96 0 0 0 12.012 2zm5.787 14.153c-.318.895-1.579 1.637-2.182 1.702-.552.059-1.258.118-3.411-.77-2.155-.89-3.513-3.13-3.621-3.277-.107-.147-.872-1.164-.872-2.222 0-1.058.535-1.578.75-1.801.214-.223.469-.279.626-.279.157 0 .313.001.45.008.143.007.336-.054.524.402.193.47.66 1.614.717 1.73.057.115.096.25.019.402-.077.153-.153.248-.307.429-.153.181-.321.402-.459.54-.153.153-.313.32-.134.629.179.308.797 1.314 1.708 2.126.911.812 1.678 1.063 1.998 1.224.32.161.506.134.695-.084.189-.218.807-.941.979-1.266.173-.324.346-.271.584-.183.238.088 1.509.712 1.767.842.257.13.429.195.492.302.064.108.064.621-.254 1.516z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-white mb-4">
              Quick Navigation
            </h5>
            <ul className="space-y-2.5 text-xs text-stone-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="hover:text-[#C89B5E] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h5 className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-white mb-4">
              Our Collections
            </h5>
            <ul className="space-y-2.5 text-xs text-stone-400">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <Link href={cat.path} className="hover:text-[#C89B5E] transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h5 className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-white mb-4">
              Contact Details
            </h5>
            <ul className="space-y-3.5 text-xs text-stone-400">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#C89B5E] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  #48/1 Ground Floor, Hongasandra, Begur Main Road, Bangalore – 560068
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#C89B5E]" />
                <a href="tel:8217331984" className="hover:text-white">
                  +91 8217331984
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#C89B5E]" />
                <a href="mailto:arkainteriors.blr@gmail.com" className="hover:text-white">
                  arkainteriors.blr@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Local Landing Pages Sitemap List */}
        <div className="border-t border-stone-900/60 py-6 mb-6">
          <p className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold mb-3">
            Popular Service Regions
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {seoLinks.map((seo) => (
              <Link
                key={seo.name}
                href={seo.path}
                className="text-[10px] text-stone-500 hover:text-[#C89B5E] flex items-center space-x-0.5"
              >
                <span>{seo.name}</span>
                <ArrowUpRight className="w-3 h-3 text-stone-600" />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-stone-900/80 pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-stone-500">
          <p>&copy; {new Date().getFullYear()} Arka WoodTech Interiors. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <span className="hover:text-stone-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-stone-300 cursor-pointer">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

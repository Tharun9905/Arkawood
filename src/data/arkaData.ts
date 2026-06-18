export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  detailedDescription: string;
  benefits: string[];
  image: string;
}

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface CollectionItem {
  name: string;
  description: string;
  features: string[];
  image: string;
}

export interface PackageItem {
  name: string;
  tagline: string;
  description: string;
  priceEstimate: string;
  includes: string[];
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  beforeImage: string; // For before/after comparisons
  specs: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  projectType: string;
  projectPhoto: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogItem {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "complete-home",
    title: "Complete Home Interiors",
    slug: "complete-home-interiors",
    description: "End-to-end transformation of your entire living space, customized to your lifestyle and aesthetic preferences.",
    detailedDescription: "Our signature service provides a comprehensive, stress-free interior transformation. From initial layout design to custom modular manufacturing and professional on-site installation, we handle every details under one roof. Our design experts ensure cohesion across your kitchen, living area, bedrooms, and bathrooms.",
    benefits: [
      "Cohesive aesthetic theme throughout the entire house",
      "Optimized storage and functional layout planning",
      "Single point of contact: dedicated project manager",
      "Factory-controlled finish and alignment",
      "Saves time and eliminates coordination hassle"
    ],
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "villa-interiors",
    title: "Villa Interiors",
    slug: "villa-interiors",
    description: "Grand, spacious, and luxury custom interior solutions tailored specifically for villas and row houses.",
    detailedDescription: "Villa spaces deserve high-end structural custom planning. We design spacious, multi-level architectural concepts emphasizing double-height living areas, home bars, grand master suites, and bespoke luxury entertainment rooms that reflect your personal legacy.",
    benefits: [
      "Grand-scale modular and bespoke furniture combinations",
      "Specialized lighting plans for high ceilings and large spaces",
      "Premium materials: high-gloss acrylics, premium veneers, and stone integrations",
      "Coordination with outdoor landscape aesthetics",
      "Experienced implementation of high-end details"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "apartment-interiors",
    title: "Apartment Interiors",
    slug: "apartment-interiors",
    description: "Smart, space-maximizing, and highly functional modular interior setups for modern luxury apartments.",
    detailedDescription: "Modern apartments require a balance between styling elegance and space efficiency. We utilize multi-functional furniture, smart wardrobe systems, and clever layouts to make your apartment feel airy, spacious, and premium.",
    benefits: [
      "Space-saving modular designs (Murphy beds, hidden storage)",
      "Vibrant colors and materials that amplify natural light",
      "Perfect fits customized to exact apartment builder floorplans",
      "Quick and quiet factory-assembled execution on-site",
      "Durable, family-friendly materials and hardware"
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "premium-custom-homes",
    title: "Premium Custom Homes",
    slug: "premium-custom-homes",
    description: "Exquisite tailor-made woodcraft, paneling, and custom furniture for unique architectural builds.",
    detailedDescription: "For homeowners working with custom architects, we act as the precision manufacturing partner. We convert complex 3D blueprints into highly accurate modular and solid-wood interior elements, ensuring flawless alignment and luxury finishing.",
    benefits: [
      "Translation of complex architect drawings to precise shop drawings",
      "Uncompromising material selection tailored to custom specs",
      "Advanced edge-banding and CNC cutting precision",
      "Experienced carpenters for challenging on-site fittings",
      "Flawless luxury matte and glossy lacquer finishes"
    ],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "interior-consultation",
    title: "Interior Consultation",
    slug: "interior-consultation",
    description: "Expert material curation, color scheme advisory, and layout planning sessions with design specialists.",
    detailedDescription: "Not sure where to start? Speak with our principal design directors. We analyze your carpet area, explain modern material grades (such as BWR plywood vs MDF), recommend paint combinations, and outline step-by-step budgets tailored to your project.",
    benefits: [
      "Clear understanding of materials and industry pricing structures",
      "Initial space optimization and workflow guidance",
      "Material palette visualization (veneer, acrylic, laminate swatches)",
      "Realistic timeline estimation based on scope",
      "No-obligation detailed quote proposal"
    ],
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "space-planning",
    title: "Space Planning",
    slug: "space-planning",
    description: "Ergonomic 2D layouts optimizing storage utility, high-traffic passages, and structural utility access.",
    detailedDescription: "A beautiful home begins with a functional layout. We carefully plan storage locations, path clearances, appliance utilities, and electrical plumbing layouts, ensuring your home is both comfortable to live in and highly efficient.",
    benefits: [
      "Ergonomic kitchen work triangle (sink, stove, fridge mapping)",
      "Adequate walking clearance in high-traffic pathways",
      "Clever storage utilization in blind corners and vertical zones",
      "Strategic lighting and plug-point positioning guidance",
      "Ensures fluid transition between living spaces"
    ],
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "3d-visualization",
    title: "3D Design Visualization",
    slug: "3d-visualization",
    description: "High-definition 3D rendering of your space before production begins to preview materials and lighting.",
    detailedDescription: "Eliminate guesswork. Our design team creates photo-realistic 3D walkthroughs of your proposed interiors. You can test different laminates, visualize ambient lighting fixtures, and tweak structural cabinet heights before a single board is cut.",
    benefits: [
      "100% confidence in the look and feel before fabrication",
      "Accurate representation of texture, lighting, and reflections",
      "Saves costly modification expenses during installation",
      "Easy adjustments of drawers, shelves, and accessory placements",
      "Realistic perspective of the home's volumetric feel"
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "renovation-solutions",
    title: "Renovation Solutions",
    slug: "renovation-solutions",
    description: "Complete revamp of old kitchens, wardrobes, and living rooms with modern machinery fittings.",
    detailedDescription: "Transform your dated, cluttered spaces into modern luxury zones. We handle dismantle tasks, upgrade old cabinet slides to Blum soft-close systems, install elegant modular accessories, and replace worn laminates with premium finishes.",
    benefits: [
      "Modernization of storage cabinets with smart pull-outs",
      "Replacement of old carpenter work with sleek factory modular setups",
      "Durable, water-resistant plywood retrofitting for kitchens",
      "Minimal disruption with fast factory-to-site assembly",
      "Significantly increases property rental or resale value"
    ],
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
  }
];

export const productsData: ProductItem[] = [
  {
    id: "modular-kitchens",
    title: "Modular Kitchens",
    description: "Ergonomically designed, water-resistant modular kitchens with advanced storage fittings and elegant aesthetics.",
    features: ["BWP Marine Plywood base", "Blum/Hettich Soft-close hardware", "Custom layouts: L-Shape, Parallel, U-Shape, Island", "Premium Acrylic & PU Finishes"],
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "wardrobes",
    title: "Wardrobes & Custom Closets",
    description: "Luxury storage solutions matching your bedroom layout, with smart organizers, profile lights, and premium hardware.",
    features: ["Sliding, Hinged & Walk-in variants", "Custom inner configurations", "Profile LED glass doors", "Anti-scratch laminate interiors"],
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "tv-units",
    title: "TV & Entertainment Units",
    description: "Modern, wall-mounted or freestanding entertainment units with sleek marble-look paneling and hidden cable channels.",
    features: ["Charcoal & Louver wood panel accents", "Integrated LED ambient backlighting", "Floating shelves & storage drawers", "Clean wire-management planning"],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "living-rooms",
    title: "Living Room Interiors",
    description: "Exquisite wood wall paneling, partition screens, custom display units, and premium furniture matching your styling tone.",
    features: ["Custom wood paneling", "Elegant partition screens", "Premium display units", "Bespoke console tables"],
    image: "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "bedrooms",
    title: "Bedroom Furniture",
    description: "Luxury custom-built beds, headboard panels, dresser tables, and side stands tailored for a cozy, upscale look.",
    features: ["Upholstered custom headboards", "Under-bed hydraulic storage options", "Matching bedside drawer tables", "Floating luxury dressing mirrors"],
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "crockery-units",
    title: "Crockery Units",
    description: "Exquisite display units for fine dining dining areas, with glass shutter doors, sensory lighting, and drawer systems.",
    features: ["Fluted glass shutters", "Motion-activated interior LED strip lights", "Gold profile framing accents", "Integrated wine rack panels"],
    image: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "pooja-units",
    title: "Pooja Units",
    description: "Traditional and modern worship spaces designed with CNC cut-work panels, sacred geometries, and hidden storage drawers.",
    features: ["CNC custom backlit mandir screens", "Solid teak wood accents or premium veneers", "Storage drawers for worship accessories", "Dedicated space planning for lamps and bells"],
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "study-units",
    title: "Study Units & Home Offices",
    description: "Ergonomic study tables, bookshelves, and overhead cabinets custom-crafted for work-from-home focus and studying.",
    features: ["Floating desk layouts with hidden cable boxes", "Open & closed book storage cabinets", "Magnetic whiteboard/pinboard backdrops", "Robust matte laminate writing surfaces"],
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "storage-solutions",
    title: "Storage & Utility Cabinets",
    description: "Heavy-duty custom cabinets for utility areas, balconies, shoe consoles, and corridors, maximizing vertical storage.",
    features: ["Ventilated custom shoe racks", "Laundry organizer cabinets", "Heavy-load pantry shelving racks", "Water-resistant exterior grade boards"],
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
  }
];

export const kitchenCollections: CollectionItem[] = [
  {
    name: "Essential Collection",
    description: "High durability, highly cost-effective modular kitchen using premium matte laminates and robust local accessories.",
    features: ["18mm BWR Plywood base", "Premium matte laminates", "Ebco soft-close drawer tracks", "Stunning quartz stone countertops"],
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Premium Collection",
    description: "Our most popular setup, merging luxury aesthetics with global hardware and highly durable anti-fingerprint surfaces.",
    features: ["18mm BWP Marine Plywood base", "Anti-fingerprint acrylic or glass finish panels", "Hettich Sensys soft-close hinge hardware", "Integrated LED profile lights under overhead wall cabinets"],
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Luxury Collection",
    description: "The peak of kitchen craftsmanship featuring flawless seamless lacquered glass or PU panels, premium Blum mechanisms, and marble stone finishes.",
    features: ["Seamless PU painted shutters or backlacquered glass", "Blum Legrabox drawer runner drawer mechanisms", "Sleek Gola profile finger-pull handles", "Custom matching pantry pull-out units"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
  }
];

export const wardrobeCollections: CollectionItem[] = [
  {
    name: "Sliding Wardrobes",
    description: "Space-efficient closets with ultra-smooth sliding systems, perfect for standard to tight bedroom layouts.",
    features: ["Premium soft-close sliding channels", "Floor-to-ceiling heights to capture extra vertical storage", "Profile glass door accent panels", "Integrated custom tie & belt organizers"],
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Hinged Wardrobes",
    description: "Classic wardrobe layouts with premium swing doors, providing full cabinet visibility when open.",
    features: ["Hettich 110-degree auto-closing hinges", "Custom metallic sleek handle profiles", "Symmetrical multi-door designs", "Integrated mirror panels inside shutters"],
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Walk-In Wardrobes",
    description: "The absolute luxury setup. An entire private dressing room with open shelves, premium islands, and sensory LEDs.",
    features: ["Luxury frame-less custom cabinet layouts", "Dresser island with glass top drawer sets", "Motion-activated interior LED strip lights", "Plush velvet jewelry display dividers"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Custom Storage Solutions",
    description: "Niche cabinetry custom fitted around windows, alcoves, stairs, and structural pillars.",
    features: ["Corner cabinet design extensions", "Integrated pull-out clothing hampers", "Integrated electronic safe drawers", "Built-in ironing board drawer configurations"],
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
  }
];

export const interiorPackages: PackageItem[] = [
  {
    name: "2 BHK Interior Package",
    tagline: "Essential Comfort & Elegance",
    description: "Complete design and modular installation for 2 BHK apartments, ideal for first home buyers or rental properties.",
    priceEstimate: "₹4.5 Lakhs - ₹6.5 Lakhs",
    includes: [
      "Modular L-shape Kitchen (Matte Laminate, BWR Plywood)",
      "Master Bedroom Wardrobe (Hinged doors, internal drawer)",
      "Kids Bedroom Wardrobe (Hinged doors, internal drawer)",
      "Premium Wall-mounted TV Console unit in Living area",
      "Essential Pooja Shelf Mandir unit"
    ],
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "3 BHK Interior Package",
    tagline: "Premium Styling & Expanded Comfort",
    description: "Complete design execution for 3 BHK homes, balancing high durability with contemporary luxury aesthetics.",
    priceEstimate: "₹6.8 Lakhs - ₹9.5 Lakhs",
    includes: [
      "Premium Modular Kitchen (Acrylic shutters, Hettich fittings)",
      "Master Suite Wardrobe with glass profiles and dresser",
      "Kids Bedroom Wardrobe with customized study desk unit",
      "Guest Bedroom wardrobe and storage console",
      "Grand TV Unit with backlighting and stone veneer backdrop",
      "Foyer Shoe console and decorative panel screen"
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Villa Interior Package",
    tagline: "The Zenith of Custom Grandeur",
    description: "Bespoke high-end designs tailored for multi-floor villas, focusing on custom woodworking, grand panels, and veneers.",
    priceEstimate: "₹12.0 Lakhs - ₹18.0 Lakhs",
    includes: [
      "Luxury Island Kitchen with PU Paint and Blum Legrabox drawer systems",
      "Grand master Walk-in closet with gold profiles and LEDs",
      "Two Premium guest closets & one kids customized bedroom closet",
      "Double-height wall wood veneer paneling and library shelf",
      "Luxury bar counter and crockery display cabinet",
      "Teak wood finish Pooja room with CNC backlit screens"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Premium Custom Home Package",
    tagline: "Bespoke Execution from Blueprints",
    description: "Architectural alignment partner package. Complete custom fabrication of panelling, cabinetry, and bespoke furniture.",
    priceEstimate: "Custom Quote Basis",
    includes: [
      "Custom wall paneling (Charcoal, Louvers, Fluted, Veneer panels)",
      "Architect design verification and layout engineering",
      "Custom size storage units fitted to structural architectural shapes",
      "mTLS grade quality inspections on all boards and joints",
      "Dedicated senior install manager on-site for 45 days"
    ],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80"
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Elegant L-Shape Kitchen, HSR Layout",
    category: "Modular Kitchens",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    specs: ["BWP Marine Plywood", "High Gloss White Acrylic", "Hettich soft-close sliders", "Quartz Stone top"]
  },
  {
    id: "proj-2",
    title: "Premium 3 BHK Apartment Interiors, Prestige Lakeside",
    category: "Apartments",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80",
    beforeImage: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    specs: ["Anti-fingerprint cabinets", "Teak Pooja room panels", "Profile LED wardrobes", "Custom TV console"]
  },
  {
    id: "proj-3",
    title: "Bespoke Glass Profile Wardrobe, Whitefield",
    category: "Wardrobes",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    specs: ["Gold profile framing", "Tinted glass shutters", "Internal drawer lights", "Plush velvet drawer organizers"]
  },
  {
    id: "proj-4",
    title: "Luxury Modern TV & Wall Panel, JP Nagar",
    category: "TV Units",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    beforeImage: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    specs: ["Louvered wood backing panels", "Italian marble-finish laminates", "Floating push-to-open cabinets", "Integrated wire canals"]
  },
  {
    id: "proj-5",
    title: "Grand Villa Interior Makeover, Mysore Meadows",
    category: "Villas",
    location: "Mysore",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    specs: ["Full home automation paneling", "Double height living wall paneling", "Premium PU painted modular kitchen", "Teak mandir screen"]
  },
  {
    id: "proj-6",
    title: "Contemporary Cozy Bedroom Interiors, Bellary Heights",
    category: "Bedrooms",
    location: "Bellary",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    specs: ["Hydraulic storage king-size bed", "Upholstered leatherette headboard paneling", "Side study console desk table", "Sliding laminate wardrobe"]
  },
  {
    id: "proj-7",
    title: "Custom High-End Apartment, Chitradurga Residency",
    category: "Custom Homes",
    location: "Chitradurga",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    beforeImage: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    specs: ["L-Shape modular kitchen setup", "Glass crockery showcase unit", "Master wardrobe & kids dresser", "Foyer shoe rack console"]
  },
  {
    id: "proj-8",
    title: "Luxury Duplex Villa Interiors, Anantapur Enclave",
    category: "Villas",
    location: "Anantapur",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    specs: ["Gold leafing ceiling panels", "Seamless acrylic kitchen cupboards", "Premium walk-in wardrobes", "Floating storage console tables"]
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Arun K. Sharma",
    location: "JP Nagar, Bangalore",
    rating: 5,
    text: "Arka WoodTech transformed our 3 BHK apartment into a premium luxury space. Their factory finish is outstanding—everything aligned perfectly. The project manager sent daily video updates and delivered exactly on time. High recommended!",
    projectType: "3 BHK Apartment Interiors",
    projectPhoto: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "test-2",
    name: "Priyanjali Rao",
    location: "Mysore Hills, Mysore",
    rating: 5,
    text: "We opted for their Premium Kitchen Collection for our new home. The water-resistant marine plywood quality is top-notch, and the acrylic finish looks extremely rich. The Hettich hinges close so smoothly. A 10/10 experience.",
    projectType: "Premium Modular Kitchen",
    projectPhoto: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "test-3",
    name: "Dr. Vikram Gowda",
    location: "Prestige Lakeview, Bangalore",
    rating: 5,
    text: "Being a doctor, I didn't have time to manage painters and carpenters. Arka handled everything from 3D designs to final handover. The transparent pricing structure with no hidden fees was highly reassuring. Outstanding work!",
    projectType: "Full Home Renovation",
    projectPhoto: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "test-4",
    name: "Karthik Reddy",
    location: "Anantapur Rural, Anantapur",
    rating: 5,
    text: "We wanted custom villa interiors but found local carpenters unreliable. Arka WoodTech did factory-precision cutting in Bangalore and assembled everything at our site in Anantapur within 5 days. Absolute professional execution.",
    projectType: "Luxury Duplex Villa Interiors",
    projectPhoto: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=150&q=80"
  }
];

export const faqData: FAQItem[] = [
  {
    question: "How long does a complete home interior project take?",
    answer: "A standard 2 BHK or 3 BHK apartment takes approximately 35 to 45 working days from design sign-off to site installation. For large scale custom villas or premium architectural homes, it can take 45 to 60 days depending on the structural complexities."
  },
  {
    question: "What materials do you use for your modular kitchens and wardrobes?",
    answer: "We use high-grade 18mm BWP (Boiling Water Proof) Marine Plywood for all kitchen wet areas to ensure zero bloating or water damage. For wardrobes and dry cabinets, we use BWR (Boiling Water Resistant) plywood. We completely avoid low-density particle boards."
  },
  {
    question: "Do you offer any warranty on your furniture products?",
    answer: "Yes, we offer a solid 10-Year Warranty against manufacturing defects on our BWP Marine plywood and a lifetime warranty on premium hardware fixtures from Hettich, Blum, and Ebco. Every project receives an official signed warranty handbook."
  },
  {
    question: "Can we see a 3D visualization of our home before production?",
    answer: "Absolutely. After initial site measurements and design layouts are discussed, our design team creates detailed photo-realistic 3D renders. This allows you to inspect material colors, texture finishes, lighting angles, and alignments before production."
  },
  {
    question: "Which locations in Karnataka and Andhra Pradesh do you serve?",
    answer: "We have fully functional installation crews covering Bangalore (all regions), Mysore, Chitradurga, Bellary, and Anantapur (Andhra Pradesh). All products are precisely fabricated at our state-of-the-art factory in Bangalore and transported directly."
  },
  {
    question: "What is your manufacturing process at the factory?",
    answer: "Our factory uses computerized CNC machinery for precision panel cutting, automated double-stage edge banding, and quality inspections. This ensures zero chip-outs, water-tight edges, and a smooth level finish that standard hand carpentry can never match."
  }
];

export const blogsData: BlogItem[] = [
  {
    slug: "modular-kitchen-materials-guide",
    title: "Understanding Kitchen Materials: BWR vs. BWP Plywood",
    excerpt: "Confused about material options? Discover why BWP Marine plywood is essential for your kitchen and how to avoid carpenter frauds.",
    content: "When building a modular kitchen in India, the choice of core substrate material is the single most important decision. A kitchen is a high-humidity environment with constant exposure to water, heat, and cooking steam. Using the wrong wood will lead to warping, fungal growth, and complete degradation within 2-3 years. \n\nAt Arka WoodTech, we use 100% BWP (Boiling Water Proof) Marine Plywood for all wet-zone cabinetry base panels. BWP plywood is manufactured using superior synthetic phenolic resins which bind the wood veneers under intense heat and pressure. This makes the wood completely water-proof, termite-resistant, and chemically stable. \n\nBWR (Boiling Water Resistant) plywood, on the other hand, uses melamine-urea formaldehyde and is suitable for dry areas like bedroom closets or TV panels but should not be submerged or placed directly near kitchen sinks. Always ask your supplier for lab certificates and verify the stamp markings on the plywood boards to ensure you are getting genuine marine grade panels.",
    category: "Modular Kitchens",
    date: "June 12, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
  },
  {
    slug: "maximize-space-small-apartments",
    title: "7 Space-Saving Modular Hacks for Modern Luxury Apartments",
    excerpt: "Maximize your apartment's square footage with smart pull-outs, hidden custom storage, and multi-functional designs.",
    content: "With apartment sizes scaling down in urban hubs like Bangalore, space optimization is no longer a luxury—it's a necessity. However, space-saving doesn't mean you have to compromise on elegance. Here are 7 modern design hacks that optimize storage without cluttering your layout:\n\n1. Floating TV consoles with integrated wire chambers\n2. Hydraulic-lift bed frames providing full mattress under-bed storage\n3. Corner kitchen carousel pull-outs that utilize blind spaces\n4. Floor-to-ceiling sliding wardrobes that add 30% more space than hinged doors\n5. Hideaway pull-out study desks integrated within closets\n6. Tall utility pantries with multi-tier basket pull-out racks\n7. Premium shoe-rack consoles that double as decorative foyer entry benches.",
    category: "Space Optimization",
    date: "May 28, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
  },
  {
    slug: "luxury-living-room-lighting-tips",
    title: "How to Plan Luxury Lighting for Your Living Room",
    excerpt: "Learn the rules of combining ambient, task, and accent lighting to create a warm, premium ₹50 lakh+ look in your living room.",
    content: "Even the most premium Italian marble floor or hand-finished teak paneling will look dull under basic tube lighting. Luxury interior brands design with 'layered lighting' to bring out texture, add depth, and establish moods. Here are three key layers to plan for your living room:\n\n**Ambient Layer:** The base level of light. Use warm LED COB spotlights recessed into your false ceiling, pointing downwards. Avoid white lights; opt for warm white (3000K) or neutral white (4000K) to enhance wood tones.\n\n**Task Layer:** Focused light for reading or working. Include modern designer floor lamps beside lounge chairs or adjustable desk lighting.\n\n**Accent Layer:** This is where the luxury feel happens. Install flexible profile LED strips inside glass display units, under floating shelves, or behind TV panels to create a floating glowing effect. Highlight artwork with narrow-beam wall-washer spotlights.",
    category: "Living Room",
    date: "April 15, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80"
  }
];

export const locationsData = [
  {
    city: "Bangalore",
    office: "Hongasandra (Begur Main Road)",
    phone: "+91 8217331984",
    email: "arkainteriors.blr@gmail.com",
    address: "#48/1 Ground Floor, 10th A Main, SunkaReddy Compound, Hongasandra, Begur Main Road, Bangalore – 560068",
    googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7561845620946!2d77.6321287!3d12.8912443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14c27a92233f%3A0xc3b827e85741a6b0!2sBegur%20Main%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1687000000000!5m2!1sen!2sin",
    status: "Headquarters & Manufacturing Hub"
  },
  {
    city: "Mysore",
    office: "Mysore Regional Office",
    phone: "+91 8217331984",
    email: "arkainteriors.blr@gmail.com",
    address: "Mysore Outer Ring Road Junction, Mysore, Karnataka",
    status: "Design Consultant Center & Install Crews"
  },
  {
    city: "Chitradurga",
    office: "Chitradurga Hub",
    phone: "+91 8217331984",
    email: "arkainteriors.blr@gmail.com",
    address: "Chitradurga Main Town Road, Chitradurga, Karnataka",
    status: "Installation Support Center"
  },
  {
    city: "Bellary",
    office: "Bellary Hub",
    phone: "+91 8217331984",
    email: "arkainteriors.blr@gmail.com",
    address: "Infantry Road, Bellary, Karnataka",
    status: "Installation Support Center"
  },
  {
    city: "Anantapur",
    office: "Anantapur Office (Andhra Pradesh)",
    phone: "+91 8217331984",
    email: "arkainteriors.blr@gmail.com",
    address: "Subhash Road, Anantapur, Andhra Pradesh – 515001",
    status: "Design Consultant Center & Install Crews"
  }
];

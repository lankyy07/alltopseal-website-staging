// Centralized site data for ALL TOPSEAL (Emma Onyeco Investment Company Limited)

export const company = {
  legalName: "Emma Onyeco Investment Company Limited",
  brand: "ALL TOPSEAL",
  tagline: "Reliable supply. Technical support. Practical industrial sealing solutions.",
  address:
    "Zone D, Block 5, Shop 79, ASPAMDA, Lagos International Trade Fair Complex, Lagos-Badagry Expressway, Lagos State, Nigeria",
  shortAddress: "ASPAMDA, Lagos International Trade Fair Complex, Lagos",
  phone: "0811 688 6306",
  phoneIntl: "+234 811 688 6306",
  whatsapp: "2348116886306",
  whatsappUser: "@alltopseal",
  email: "mbuchi619@gmail.com",
  website: "www.alltopseal.com",
  websiteUrl: "https://www.alltopseal.com",
};

export const waMessage =
  "Hello ALL TOPSEAL, I would like to request a quotation for an industrial sealing product.";

export const waLink = (msg = waMessage) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:+${company.whatsapp}`;
export const mailLink = `mailto:${company.email}`;

// Bundled catalogue imagery stored in public/assets/ (illustrative, not a specification).
export const images = {
  hero: "/assets/hero.webp",
  flangeGaskets: "/assets/flange.webp",
  customGaskets: "/assets/custom.webp",
  nonAsbestos: "/assets/non-asbestos.webp",
  sbrRubber: "/assets/sbr.webp",
  rubberisedCork: "/assets/cork.webp",
  glandPacking: "/assets/packing.webp",
  sealingRope: "/assets/rope.webp",
  spiralWound: "/assets/spiral-wound.webp",
  industrialPlant: "/assets/industrial-plant.webp",
  fabrication: "/assets/fabrication.webp",
};

export const products = [
  {
    slug: "flange-gaskets",
    name: "Flange Gaskets",
    tagline: "Flat ring, full-face and custom flange profiles cut to specification.",
    image: images.flangeGaskets,
    short:
      "Precision-cut flange gaskets supplied from dimensions, drawings or physical samples — flat ring, full-face and custom bolt-hole configurations.",
    overview:
      "Flange gaskets seal the interface between flanged pipe joints, valves and equipment. We supply flat ring (IBC) gaskets, full-face gaskets and custom flange profiles cut to your specified dimensions, PCD and bolt-hole configuration. Gaskets can be fabricated from drawings, dimensions or physical samples supplied by your engineering or maintenance team.",
    applications: [
      "Pipe flange joints and valve connections",
      "Pump and equipment flanges",
      "Heat exchanger and cooler joints",
      "Plant maintenance and shutdown replacements",
      "Oil, gas and process piping",
    ],
    forms: [
      "Flat ring (inner bolt circle) gaskets",
      "Full-face flange gaskets",
      "Custom flange profiles",
      "Various bolt-hole quantities and diameters",
      "Fabrication from drawing, dimensions or sample",
    ],
    requestInfo: [
      "OD (outside diameter)",
      "ID (inside diameter)",
      "Thickness",
      "PCD (pitch circle diameter)",
      "Bolt-hole quantity",
      "Bolt-hole diameter",
      "Material preference",
      "Quantity",
      "Application details",
    ],
    technicalNotes: [
      "Provide OD, ID, thickness and PCD where known for accurate fabrication.",
      "Full-face gaskets require bolt-hole quantity and diameter in addition to OD and ID.",
      "Material selection depends on medium, temperature and pressure — share service conditions for guidance.",
      "Physical samples can be supplied for reverse-engineering of unlabelled flanges.",
    ],
    seo: {
      title: "Flange Gasket Supplier Lagos, Nigeria | ALL TOPSEAL",
      description:
        "Flat ring, full-face and custom flange gaskets cut to your dimensions, PCD and bolt-hole configuration. Fabricated from drawings, dimensions or samples. ALL TOPSEAL, Lagos.",
    },
  },
  {
    slug: "custom-gaskets",
    name: "Custom Gasket Fabrication",
    tagline: "From technical drawing, dimensions, photograph or physical sample.",
    image: images.customGaskets,
    short:
      "Custom gasket fabrication from drawings, dimensions, photographs or samples — rectangular, circular, double-window, manhole and irregular profiles.",
    overview:
      "Custom gasket fabrication is a core capability. We work from technical drawings, dimension sheets, photographs, equipment references or physical samples to produce gaskets in circular, rectangular, double-window, manhole and irregular profiles. Where operating details are provided, we can assist with material selection to suit the service conditions.",
    applications: [
      "Custom and obsolete equipment gaskets",
      "Manhole and handhole covers",
      "Heat exchanger and cooler gaskets",
      "Double-window and irregular profiles",
      "One-off and low-volume fabrication",
    ],
    forms: [
      "Circular gaskets (OD / ID / thickness / PCD)",
      "Rectangular gaskets (length / width / opening)",
      "Double-window gaskets",
      "Manhole and handhole gaskets",
      "Irregular and equipment-specific profiles",
    ],
    requestInfo: [
      "Technical drawing or dimension sheet",
      "Photographs of the gasket or equipment",
      "Physical sample (where available)",
      "Equipment reference / tag number",
      "Material preference or service conditions",
      "Quantity",
    ],
    technicalNotes: [
      "Drawings can be submitted by email or WhatsApp — PDF, JPG or PNG accepted.",
      "For circular gaskets provide OD, ID, thickness, PCD, bolt-hole diameter and quantity.",
      "For rectangular gaskets provide overall length, width, internal opening, thickness and hole spacing.",
      "Samples can be sent to our Lagos facility for reverse-engineering.",
    ],
    seo: {
      title: "Custom Gasket Fabrication Nigeria | Drawings & Dimensions | ALL TOPSEAL",
      description:
        "Custom gaskets fabricated from drawings, dimensions, photographs or samples. Circular, rectangular, double-window, manhole and irregular profiles. ALL TOPSEAL, Lagos.",
    },
  },
  {
    slug: "non-asbestos-gasket-sheets",
    name: "Non-Asbestos Gasket Sheets",
    tagline: "Compressed fibre gasket sheet supply and custom cutting.",
    image: images.nonAsbestos,
    short:
      "Non-asbestos compressed gasket sheets supplied in full sheets or custom-cut to your dimensions, subject to stock and technical confirmation.",
    overview:
      "Non-asbestos gasket sheets are compressed fibre materials used for a wide range of industrial sealing applications. We supply full sheets and, where applicable, custom-cut gaskets to your dimensions. Grades and thicknesses are subject to stock availability and technical confirmation. Where technical datasheets are available they can be provided on request.",
    applications: [
      "General industrial flange sealing",
      "Pipe joints and valve glands",
      "Compressor and pump connections",
      "Process plant maintenance",
    ],
    forms: [
      "Full sheet supply",
      "Custom cutting where applicable",
      "Various grades and thicknesses (subject to stock)",
      "Technical datasheets where available",
    ],
    requestInfo: [
      "Sheet size or cut dimensions",
      "Thickness",
      "Grade / material preference",
      "Quantity",
      "Application and service conditions",
    ],
    technicalNotes: [
      "Grades and thicknesses are subject to stock and technical confirmation.",
      "Operating limits are not published unless supported by a verified technical datasheet.",
      "Share medium, temperature and pressure for material selection guidance.",
    ],
    seo: {
      title: "Non-Asbestos Gasket Sheet Supplier Lagos | ALL TOPSEAL",
      description:
        "Non-asbestos compressed gasket sheets supplied full or custom-cut to dimensions. Grades and thicknesses subject to stock. Technical datasheets on request. ALL TOPSEAL, Lagos.",
    },
  },
  {
    slug: "sbr-rubber-sheets",
    name: "SBR Rubber Sheets",
    tagline: "General-purpose industrial rubber sheet supply and cutting.",
    image: images.sbrRubber,
    short:
      "General-purpose SBR rubber sheets for industrial sealing and cushioning applications, with custom cutting where applicable.",
    overview:
      "SBR (styrene-butadiene rubber) sheets are a general-purpose industrial rubber material used for sealing, gasketing, cushioning and padding applications. We supply rubber sheet in a range of thicknesses and sizes, with custom cutting available where applicable.",
    applications: [
      "General sealing and gasketing",
      "Cushioning and padding",
      "Anti-vibration pads",
      "Protective linings",
    ],
    forms: [
      "Sheet supply in various thicknesses",
      "Range of sheet sizes",
      "Custom cutting where applicable",
    ],
    requestInfo: ["Sheet size or cut dimensions", "Thickness", "Quantity", "Application"],
    technicalNotes: [
      "Thickness and size availability subject to stock.",
      "SBR is a general-purpose rubber — share service conditions for suitability guidance.",
    ],
    seo: {
      title: "SBR Rubber Sheet Supplier Nigeria | ALL TOPSEAL",
      description:
        "General-purpose SBR industrial rubber sheets supplied in various thicknesses and sizes, with custom cutting where applicable. ALL TOPSEAL, Lagos.",
    },
  },
  {
    slug: "rubberised-cork",
    name: "Rubberised Cork Sheets",
    tagline: "Industrial sealing and oil-sealing cork-rubber sheet.",
    image: images.rubberisedCork,
    short:
      "Rubberised cork sheets for industrial sealing applications including transformer and oil-sealing contexts, with custom cutting.",
    overview:
      "Rubberised cork (cork-rubber) sheets combine cork granules with a rubber binder to produce a compressible sealing material used in industrial sealing applications, including transformer sealing and oil-sealing contexts. Sheet sizes and thicknesses are subject to availability, with custom cutting available where applicable.",
    applications: [
      "Industrial sealing applications",
      "Transformer and oil-sealing contexts",
      "General gasketing where compressibility is required",
    ],
    forms: [
      "Sheet supply in available sizes and thicknesses",
      "Custom cutting where applicable",
    ],
    requestInfo: ["Sheet size or cut dimensions", "Thickness", "Quantity", "Application"],
    technicalNotes: [
      "Sheet sizes and thicknesses subject to availability.",
      "Suitability for transformer and oil-sealing applications should be confirmed against your service conditions.",
    ],
    seo: {
      title: "Rubberised Cork Sheet Supplier Nigeria | ALL TOPSEAL",
      description:
        "Rubberised cork sheets for industrial sealing, transformer and oil-sealing applications. Custom cutting available. Sheet sizes and thicknesses subject to availability. ALL TOPSEAL, Lagos.",
    },
  },
  {
    slug: "gland-packing",
    name: "Gland / Compression Packing",
    tagline: "Braided packing for pumps, valves and industrial equipment.",
    image: images.glandPacking,
    short:
      "Braided gland packing for pumps and valves, with material selection assistance based on your service conditions.",
    overview:
      "Gland (compression) packing is braided sealing material used to seal pumps, valves and rotating or reciprocating equipment. We supply pump packing, valve packing and braided industrial packing in suitable materials depending on the service conditions. Our technical sales team can assist with material selection based on your medium, temperature and pressure.",
    applications: [
      "Pump packing",
      "Valve packing",
      "Rotating and reciprocating equipment",
      "Industrial plant maintenance",
    ],
    forms: [
      "Braided packing in various cross-sections",
      "Pump and valve packing",
      "Materials selected to suit service conditions",
    ],
    requestInfo: [
      "Equipment type (pump / valve)",
      "Shaft / stem diameter and packing cross-section",
      "Medium, temperature and pressure",
      "Quantity",
    ],
    technicalNotes: [
      "Material selection depends on medium, temperature, pressure and shaft speed.",
      "Provide equipment details for technical selection assistance.",
    ],
    seo: {
      title: "Gland Packing Supplier Nigeria | ALL TOPSEAL",
      description:
        "Braided gland and compression packing for pumps, valves and industrial equipment. Material selection assistance based on service conditions. ALL TOPSEAL, Lagos.",
    },
  },
  {
    slug: "sealing-rope-tape",
    name: "Industrial Sealing Rope & Tape",
    tagline: "General-purpose industrial sealing rope and tape.",
    image: images.sealingRope,
    short:
      "General-purpose industrial sealing rope and tape for a range of sealing and packing applications.",
    overview:
      "We supply general-purpose industrial sealing rope and tape for a range of sealing, packing and jointing applications. Content is kept conservative and technical; suitable materials can be selected based on your application and service conditions.",
    applications: [
      "General industrial sealing",
      "Joint and gap sealing",
      "Packing and jointing support",
    ],
    forms: ["Sealing rope", "Sealing tape", "Various sizes subject to availability"],
    requestInfo: ["Application", "Size / diameter", "Quantity", "Service conditions"],
    technicalNotes: [
      "Suitability should be confirmed against your service conditions.",
      "Contact technical sales for material selection guidance.",
    ],
    seo: {
      title: "Industrial Sealing Rope & Tape Supplier Nigeria | ALL TOPSEAL",
      description:
        "General-purpose industrial sealing rope and tape for sealing, packing and jointing applications. ALL TOPSEAL, Lagos.",
    },
  },
  {
    slug: "spiral-wound-gaskets",
    name: "Spiral Wound Gaskets",
    tagline: "Outsourced spiral wound gaskets for higher-pressure flange sealing applications.",
    image: images.spiralWound,
    short:
      "Spiral wound gaskets sourced to customer specification for industrial flange joints, including class 150 to 1500 requirements.",
    overview:
      "ALL TOPSEAL can support outsourced supply of spiral wound gaskets for industrial flange applications where customers need a reliable sourcing partner. These gaskets are commonly specified for raised-face and flat-face flange joints in more demanding services. We can assist with enquiries for standard and custom requirements, including class 150, 300, 600, 900 and 1500 configurations, subject to technical confirmation and sourcing lead time.",
    applications: [
      "Process piping and refinery flange joints",
      "Heat exchangers, boilers and pressure equipment",
      "Oil & gas, petrochemical and power applications",
      "Steam, hydrocarbon and general industrial service",
      "Maintenance shutdown replacements and project supply",
    ],
    forms: [
      "Spiral wound gaskets with outer ring",
      "Spiral wound gaskets with inner and outer ring",
      "Raised-face and flat-face flange configurations",
      "ASME pressure classes 150 to 1500",
      "Sizes and materials subject to sourcing and confirmation",
    ],
    requestInfo: [
      "Nominal pipe size / flange size",
      "Pressure class (150 - 1500)",
      "Flange facing type (RF / FF / other)",
      "Winding metal and filler material if known",
      "Inner ring / outer ring requirement",
      "Applicable standard or drawing",
      "Quantity",
      "Application and service conditions",
    ],
    technicalNotes: [
      "Please share the flange standard, size and pressure class for accurate quotation.",
      "Material selection depends on medium, temperature, pressure and corrosion requirements.",
      "Class 150 to 1500 supply is supported on an outsourced / sourcing basis.",
      "Lead time, MOQ and final availability are confirmed against each enquiry.",
    ],
    seo: {
      title: "Spiral Wound Gasket Supplier Nigeria | ALL TOPSEAL",
      description:
        "Outsourced spiral wound gaskets for industrial flange applications, including class 150 to 1500 requirements. Send your flange size, class and specification to ALL TOPSEAL, Lagos.",
    },
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);

export const industries = [
  {
    name: "Oil & Gas",
    icon: "Flame",
    sealing:
      "Flange gaskets, custom gaskets and gland packing for piping, valves, pumps and process equipment.",
    products: ["Flange Gaskets", "Custom Gasket Fabrication", "Gland / Compression Packing", "Non-Asbestos Gasket Sheets"],
    why: "Hydrocarbon service demands correctly specified materials and accurate flange dimensions to maintain joint integrity.",
  },
  {
    name: "Power Generation",
    icon: "Zap",
    sealing:
      "High-temperature gaskets, manhole and handhole gaskets, and packing for turbines, boilers and auxiliaries.",
    products: ["Custom Gasket Fabrication", "Flange Gaskets", "Gland / Compression Packing"],
    why: "Boiler and turbine maintenance requires reliable replacement gaskets fabricated to exact equipment dimensions.",
  },
  {
    name: "Petrochemical",
    icon: "FlaskConical",
    sealing:
      "Chemical-resistant gasket sheets and custom gaskets for process piping and vessels.",
    products: ["Non-Asbestos Gasket Sheets", "Custom Gasket Fabrication", "Flange Gaskets"],
    why: "Chemical compatibility and correct material specification are critical to safe, leak-free process operation.",
  },
  {
    name: "Marine",
    icon: "Anchor",
    sealing:
      "Flange and custom gaskets for shipboard piping, engines and deck equipment.",
    products: ["Flange Gaskets", "Custom Gasket Fabrication", "Rubberised Cork Sheets"],
    why: "Marine maintenance often requires one-off gaskets fabricated from samples during port calls.",
  },
  {
    name: "Manufacturing",
    icon: "Factory",
    sealing:
      "General-purpose gasket sheets, rubber sheets and packing for plant maintenance.",
    products: ["Non-Asbestos Gasket Sheets", "SBR Rubber Sheets", "Gland / Compression Packing"],
    why: "Diverse equipment across a plant benefits from a responsive supplier of cut gaskets and sheet material.",
  },
  {
    name: "Water Treatment",
    icon: "Droplets",
    sealing:
      "Full-face flange gaskets and rubber sheets for water and effluent piping.",
    products: ["Flange Gaskets", "SBR Rubber Sheets", "Rubberised Cork Sheets"],
    why: "Water service generally requires full-face gaskets cut to standard flange dimensions.",
  },
  {
    name: "Mining",
    icon: "Mountain",
    sealing:
      "Durable gaskets and packing for slurry, water and hydraulic service.",
    products: ["Flange Gaskets", "Gland / Compression Packing", "SBR Rubber Sheets"],
    why: "Harsh service conditions require robust sealing products selected against the operating medium.",
  },
  {
    name: "HVAC",
    icon: "Wind",
    sealing:
      "Gasketing for ductwork, access panels and chilled-water flanges.",
    products: ["Rubberised Cork Sheets", "SBR Rubber Sheets", "Custom Gasket Fabrication"],
    why: "Compressible sheet materials suit access panels and flanged water connections in HVAC systems.",
  },
  {
    name: "Food Processing",
    icon: "UtensilsCrossed",
    sealing:
      "Gasket sheets and custom gaskets for processing equipment (material suitability to be confirmed).",
    products: ["Non-Asbestos Gasket Sheets", "Custom Gasket Fabrication", "SBR Rubber Sheets"],
    why: "Material suitability for food-contact applications should be confirmed against your requirements.",
  },
  {
    name: "Engineering & Maintenance",
    icon: "Wrench",
    sealing:
      "Custom gasket fabrication and general sealing materials for maintenance teams and workshops.",
    products: ["Custom Gasket Fabrication", "Flange Gaskets", "Non-Asbestos Gasket Sheets", "Gland / Compression Packing"],
    why: "Maintenance teams need a responsive partner who can work from samples and drawings to keep equipment running.",
  },
];

export const trustBlocks = [
  {
    icon: "ClipboardList",
    title: "Technical RFQ Support",
    text: "Send drawings, dimensions or samples — our technical sales team responds with a quotation.",
  },
  {
    icon: "Ruler",
    title: "Custom Fabrication",
    text: "Gaskets cut to your specification from drawings, dimensions, photographs or physical samples.",
  },
  {
    icon: "Package",
    title: "Industrial Supply",
    text: "Wholesale supply of gasket sheets, rubber, cork and packing materials to B2B buyers.",
  },
  {
    icon: "MessageCircle",
    title: "Responsive Customer Support",
    text: "Reach us by email, phone or WhatsApp for quotations and technical assistance.",
  },
];

export const navItems = [
  { label: "Home", to: "/" },
  {
    label: "Products",
    children: products.map((p) => ({ label: p.name, to: `/products/${p.slug}` })),
  },
  { label: "Custom Gaskets", to: "/products/custom-gaskets" },
  { label: "Industries", to: "/industries" },
  { label: "Technical Resources", to: "/technical-resources" },
  { label: "About", to: "/about" },
  { label: "Request Quote", to: "/request-quote", cta: true },
];
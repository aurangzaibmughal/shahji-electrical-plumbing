export interface CompanyConfig {
  name: string;
  brandName: string;
  legalName: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  phones: {
    display: string;
    value: string;
    label?: string;
  }[];
  whatsapp: {
    display: string;
    number: string;
    message: string;
  };
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  businessHours: {
    regular: string;
    emergency: string;
    days: string;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    whatsapp?: string;
    youtube?: string;
    tiktok?: string;
  };
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
}

/**
 * EXACT BUSINESS CONSTANTS
 */
export const BUSINESS_NAME = "Shahji Electrical & Plumbing Services";
export const BUSINESS_ADDRESS =
  process.env.NEXT_PUBLIC_BUSINESS_ADDRESS ||
  "130, Shop Number 11, 4 G-13, G-7/3, G-7, Islamabad, 44220, Pakistan";
export const BUSINESS_EMAIL = "shahjielectricplumberforhome@gmail.com";
export const GOOGLE_MAPS_URL =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ||
  "https://maps.app.goo.gl/Cjz9wNL2QSc3ewNBA?g_st=awb";
export const GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

/**
 * CENTRAL COMPANY CONFIGURATION
 */
export const COMPANY_CONFIG: CompanyConfig = {
  name: "Shahji Electrical & Plumbing Services",
  brandName: "Shahji Electrical & Plumbing Services",
  legalName: "SHAHJI HOME MAINTENANCE & CONSTRUCTION (SMC-PRIVATE) LIMITED",
  tagline: "Premier Electrical & Plumbing Engineering in Islamabad, Pakistan",
  shortDescription:
    "Leading provider of certified electrical, plumbing, home maintenance, and construction solutions for homes and businesses across Islamabad, Pakistan.",
  longDescription:
    "Shahji Electrical & Plumbing Services (SHAHJI HOME MAINTENANCE & CONSTRUCTION (SMC-PRIVATE) LIMITED) is a premier service provider in Islamabad, Pakistan, specializing in certified electrical repairs, residential & commercial wiring, advanced plumbing diagnostics, leak detection, and maintenance.",
  
  phones: [
    {
      display: "+92 348 140672",
      value: "+92348140672",
      label: "Primary Helpline / Plumbing Services",
    },
    {
      display: "+92 313 7172889",
      value: "+923137172889",
      label: "Technical Support / Electrical Services",
    },
  ],

  whatsapp: {
    display: "+92 348 140672",
    number: "92348140672",
    message: "Hello Shahji Electrical & Plumbing Services, I would like to book a service in Islamabad.",
  },

  email: BUSINESS_EMAIL,

  address: BUSINESS_ADDRESS,
  city: "Islamabad",
  postalCode: "44220",
  country: "Pakistan",
  googleMapsUrl: GOOGLE_MAPS_URL,
  googleMapsEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(
    "Shahji Electrical & Plumber Services For Home, 130, Shop Number 11, 4 G-13, G-7/3, G-7, Islamabad, 44220, Pakistan"
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`,

  businessHours: {
    regular: "8:00 AM - 9:00 PM",
    days: "Monday - Saturday",
    emergency: "24/7 Emergency Response Available",
  },

  socialLinks: {
    facebook: "https://www.facebook.com/shahjielectricalandplumbing",
    instagram: "https://www.instagram.com/shahjielectricalplumbing",
    whatsapp: "https://wa.me/92348140672?text=Hello%20Shahji%20Electrical%20%26%20Plumbing%20Services%2C%20I%20would%20like%20to%20book%20a%20service%20in%20Islamabad.",
    youtube: "https://www.youtube.com/@shahjielectricalplumbing",
    tiktok: "https://www.tiktok.com/@shahjielectricalplumbing",
  },

  stats: [
    {
      label: "Rapid Response",
      value: "< 45 Mins",
      subtext: "Fast on-site dispatch across Islamabad",
    },
    {
      label: "Certified Pros",
      value: "100%",
      subtext: "Vetted & skilled technicians",
    },
    {
      label: "Dual Expertise",
      value: "Plumbing & Electrical",
      subtext: "Complete home & site coverage",
    },
    {
      label: "Client Guarantee",
      value: "Guaranteed",
      subtext: "Workmanship warranty",
    },
  ],
};

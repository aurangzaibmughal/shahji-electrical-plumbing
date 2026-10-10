export interface ServiceItem {
  id: string;
  title: string;
  category: "plumbing" | "electrical" | "carpenter" | "ac" | "refrigerator" | "cleaning" | "construction" | "maintenance";
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  commonIssues?: string[];
  benefits: string[];
  imageUrl: string;
}

export interface MaintenanceServiceCategory {
  id: string;
  title: string;
  categoryKey: string;
  shortDescription: string;
  features: string[];
  icon: string;
  imageUrl: string;
  accentColor: "green" | "blue" | "teal" | "amber";
}

export interface VlogPost {
  id: string;
  slug: string;
  title: string;
  category: "Plumbing Tips" | "Electrical Safety" | "Home Maintenance" | "Construction" | "Maintenance Guides";
  readTime: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  tags: string[];
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  serviceType:
    | "Plumbing"
    | "Electrical"
    | "Carpenter"
    | "AC Services"
    | "Refrigerator"
    | "Cleaning"
    | "Home Maintenance"
    | "Construction"
    | "Other";
  urgency?: "Normal" | "Urgent / Emergency" | "Planned Project";
  address?: string;
  message: string;
}

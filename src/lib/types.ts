export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  priceLabel: string;
  type: "Residential" | "Commercial" | "Plot";
  category: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  areaUnit: string;
  status: "Ready to Move" | "Under Construction" | "Available";
  featured: boolean;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Stat {
  value: string;
  label: string;
  description: string;
  icon: string;
}

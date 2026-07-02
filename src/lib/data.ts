import type { Property, Testimonial, Service, Stat } from "./types";

export const COMPANY = {
  name: "Zenith Dwellings and Properties Pvt. Ltd.",
  shortName: "Zenith Dwellings",
  tagline: "Building Dreams, Delivering Trust",
  chairman: "Aniket Kumar Jha",
  chairmanExperience: "10+",
  address: "Pune, Maharashtra, India",
  email: "info@zenithdwellings.in",
  phone: "+91 98765 43210",
  altPhone: "+91 87654 32109",
  cities: ["Pune", "PCMC (Pimpri-Chinchwad)"],
  established: "2014",
  totalCustomers: "100+",
  socialLinks: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
};

export const STATS: Stat[] = [
  {
    value: "100+",
    label: "Satisfied Customers",
    description: "Families who trust us",
    icon: "Users",
  },
  {
    value: "10+",
    label: "Years Experience",
    description: "In real estate industry",
    icon: "Award",
  },
  {
    value: "4",
    label: "Core Services",
    description: "Comprehensive offerings",
    icon: "Briefcase",
  },
  {
    value: "2",
    label: "Cities Active",
    description: "Pune & PCMC",
    icon: "MapPin",
  },
];

export const SERVICES: Service[] = [
  {
    id: "residential",
    icon: "Home",
    title: "Residential Properties",
    description:
      "From cozy 1BHK apartments to luxurious 4BHK villas — we find the home that matches your lifestyle and budget.",
    features: [
      "Apartments & Flats",
      "Villas & Bungalows",
      "Row Houses",
      "Ready to Move",
    ],
  },
  {
    id: "commercial",
    icon: "Building2",
    title: "Commercial Properties",
    description:
      "Strategic commercial spaces for your business growth — offices, retail shops, and premium spaces in prime locations.",
    features: [
      "Office Spaces",
      "Retail Shops",
      "Co-working Spaces",
      "Warehouses",
    ],
  },
  {
    id: "plots",
    icon: "Layers",
    title: "Plots & Land",
    description:
      "NA-approved plots and land across Pune and PCMC — ideal for construction, development, or long-term investment.",
    features: [
      "NA Approved Plots",
      "Agricultural Land",
      "Industrial Plots",
      "Investment Plots",
    ],
  },
  {
    id: "management",
    icon: "Settings",
    title: "Property Management",
    description:
      "End-to-end property management — from legal documentation and valuation to tenant management and maintenance.",
    features: [
      "Documentation Help",
      "Legal Advisory",
      "Tenant Management",
      "Property Valuation",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Home Buyer, Kharadi",
    initials: "PS",
    rating: 5,
    quote:
      "Buying our first home felt overwhelming, but the team made the entire process smooth and transparent. They understood our requirements, guided us at every step, and helped us find the perfect home within our budget. Highly recommended!",
  },
  {
    id: "2",
    name: "Rahul Mehta",
    role: "Property Investor, Baner",
    initials: "RM",
    rating: 5,
    quote:
      "I was impressed by their professionalism and prompt communication. From property visits to documentation, everything was handled efficiently. It was a stress-free experience, and I would definitely work with them again.",
  },
  {
    id: "3",
    name: "Anjali & Vikram Nair",
    role: "Investment Buyers, Wakad",
    initials: "AV",
    rating: 5,
    quote:
      "We were looking for an investment property and received honest advice throughout the journey. Their market knowledge and attention to detail gave us confidence in our decision. Thank you for the excellent service!",
  },
  {
    id: "4",
    name: "Sandeep Kumar",
    role: "Home Buyer, PCMC",
    initials: "SK",
    rating: 5,
    quote:
      "The team exceeded my expectations with their customer-first approach. They listened carefully to my needs, shortlisted the right properties, and ensured a seamless buying experience. I couldn't be happier with my new home.",
  },
];

export const PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Luxury 3BHK Apartment",
    location: "Kharadi, Pune",
    price: 12500000,
    priceLabel: "₹1.25 Cr",
    type: "Residential",
    category: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    area: 1350,
    areaUnit: "sq.ft",
    status: "Ready to Move",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80",
    description:
      "Spacious 3BHK luxury apartment in prime Kharadi with modern amenities, clubhouse access, and easy connectivity to EON IT Park.",
  },
  {
    id: "2",
    title: "2BHK Premium Flat",
    location: "Wakad, PCMC",
    price: 6500000,
    priceLabel: "₹65 Lakh",
    type: "Residential",
    category: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 980,
    areaUnit: "sq.ft",
    status: "Under Construction",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=700&q=80",
    description:
      "Modern 2BHK flat in Wakad with excellent connectivity to Hinjewadi IT hub. Possession by Dec 2025.",
  },
  {
    id: "3",
    title: "Prime Commercial Shop",
    location: "Chinchwad, PCMC",
    price: 4500000,
    priceLabel: "₹45 Lakh",
    type: "Commercial",
    category: "Shop",
    bedrooms: 0,
    bathrooms: 1,
    area: 450,
    areaUnit: "sq.ft",
    status: "Ready to Move",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
    description:
      "Prime commercial shop in the heart of Chinchwad market. High footfall location ideal for retail business.",
  },
  {
    id: "4",
    title: "NA Approved Residential Plot",
    location: "Talegaon, Pune",
    price: 3500000,
    priceLabel: "₹35 Lakh",
    type: "Plot",
    category: "Plot",
    bedrooms: 0,
    bathrooms: 0,
    area: 1200,
    areaUnit: "sq.ft",
    status: "Available",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&q=80",
    description:
      "NA approved plot in Talegaon with clear title. Excellent investment opportunity in a developing suburb.",
  },
  {
    id: "5",
    title: "4BHK Luxury Villa",
    location: "Baner, Pune",
    price: 25000000,
    priceLabel: "₹2.5 Cr",
    type: "Residential",
    category: "Villa",
    bedrooms: 4,
    bathrooms: 4,
    area: 2800,
    areaUnit: "sq.ft",
    status: "Ready to Move",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&q=80",
    description:
      "Exquisite 4BHK luxury villa in prime Baner with private garden, modular kitchen, and 2-car parking.",
  },
  {
    id: "6",
    title: "Grade-A IT Office Space",
    location: "Hinjewadi, Pune",
    price: 8000000,
    priceLabel: "₹80 Lakh",
    type: "Commercial",
    category: "Office",
    bedrooms: 0,
    bathrooms: 2,
    area: 1800,
    areaUnit: "sq.ft",
    status: "Ready to Move",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=700&q=80",
    description:
      "Grade-A office space in Hinjewadi IT park with world-class infrastructure, 24/7 power backup, and ample parking.",
  },
  {
    id: "7",
    title: "1BHK Starter Apartment",
    location: "Pimple Saudagar, PCMC",
    price: 3800000,
    priceLabel: "₹38 Lakh",
    type: "Residential",
    category: "Apartment",
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    areaUnit: "sq.ft",
    status: "Under Construction",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
    description:
      "Compact and affordable 1BHK perfect for young professionals. Located near schools, malls, and transport hubs.",
  },
  {
    id: "8",
    title: "3BHK Independent Row House",
    location: "Ravet, PCMC",
    price: 9500000,
    priceLabel: "₹95 Lakh",
    type: "Residential",
    category: "Row House",
    bedrooms: 3,
    bathrooms: 3,
    area: 1800,
    areaUnit: "sq.ft",
    status: "Ready to Move",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=700&q=80",
    description:
      "Beautiful 3BHK row house in Ravet with independent entrance, private terrace, modular kitchen, and landscaped garden.",
  },
];

import {
  Printer,
  Layers,
  Package,
  Megaphone,
  Palette,
  Maximize,
  Building2,
  Utensils,
  Home,
  HeartPulse,
  GraduationCap,
  Rocket,
  CalendarDays,
  Briefcase,
  Zap,
  Award,
  Sparkles,
  Cog,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
  features: string[];
}

export const services: Service[] = [
  { icon: Printer, title: "Offset Printing", desc: "High-volume, vibrant offset for brochures, books, and corporate stationery.", features: ["Pantone matching", "Bulk runs", "Premium paper stock"] },
  { icon: Layers, title: "Digital Printing", desc: "Short runs, on-demand printing with sharp detail and quick turnaround.", features: ["Same-day options", "Variable data", "Photo-grade output"] },
  { icon: Package, title: "Packaging", desc: "Custom mono-cartons, rigid boxes, and product packaging that sells.", features: ["Structural design", "Foil & emboss", "Eco materials"] },
  { icon: Megaphone, title: "Signage", desc: "Indoor and outdoor signage that builds presence and recall.", features: ["LED & neon", "ACP & vinyl", "Installation"] },
  { icon: Palette, title: "Branding", desc: "Identity systems, collateral, and brand guidelines built to last.", features: ["Logo design", "Brand systems", "Stationery"] },
  { icon: Maximize, title: "Large Format", desc: "Banners, hoardings, and exhibition graphics at uncompromising quality.", features: ["UV print", "Weather-proof", "Up to 5m wide"] },
];

export const industries = [
  { icon: Briefcase, title: "Retail", desc: "Store branding, signage, and packaging." },
  { icon: Utensils, title: "Restaurants", desc: "Menus, kits, and storefront branding." },
  { icon: Home, title: "Real Estate", desc: "Brochures, hoardings, and site collateral." },
  { icon: HeartPulse, title: "Hospitals", desc: "Wayfinding, signage, and patient material." },
  { icon: GraduationCap, title: "Schools", desc: "Prospectus, ID cards, and event print." },
  { icon: Rocket, title: "Startups", desc: "Identity systems and launch packaging." },
  { icon: CalendarDays, title: "Events", desc: "Standees, backdrops, and badges." },
  { icon: Building2, title: "Corporate", desc: "Reports, stationery, and exhibition graphics." },
];

export const whyUs = [
  { icon: Zap, title: "Fast Delivery", desc: "Industry-leading turnaround across India." },
  { icon: Award, title: "Premium Quality", desc: "Color-managed workflow, every job." },
  { icon: Sparkles, title: "Creative Design", desc: "An in-house studio that obsesses over craft." },
  { icon: Cog, title: "Modern Machinery", desc: "Heidelberg, Konica, and large-format UV." },
  { icon: Users, title: "Experienced Team", desc: "Two decades in Hyderabad's print scene." },
];

export const process = [
  { step: "01", title: "Consultation", desc: "We understand your brand, scope, and timeline." },
  { step: "02", title: "Design", desc: "Studio mockups, revisions, and pre-press proofs." },
  { step: "03", title: "Production", desc: "Color-managed printing on premium substrates." },
  { step: "04", title: "Delivery", desc: "Quality-checked, packed, and dispatched on time." },
];

export const testimonials = [
  { name: "Ananya Reddy", role: "Founder, Bloom Café", quote: "Indian Graphics rebuilt our packaging and storefront — sales jumped within a month. The craft is unreal." },
  { name: "Rahul Mehta", role: "Marketing Head, Vertex Realty", quote: "From hoardings to walk-through brochures, the quality and speed have been consistently excellent." },
  { name: "Sneha Kapoor", role: "Brand Lead, Nova Studios", quote: "An end-to-end partner. The team treats every print like their own brand is on the line." },
  { name: "Imran Khan", role: "CEO, Lumen Health", quote: "Wayfinding and signage across our hospital network — flawless rollout, no surprises." },
];

export const portfolio = [
  { title: "Bloom Café Identity", category: "Branding", color: "from-orange-400 to-rose-500", image: "coffee" },
  { title: "Vertex Realty Brochure", category: "Printing", color: "from-blue-500 to-indigo-600", image: "catalogue" },
  { title: "Nova Cosmetics Box", category: "Packaging", color: "from-pink-400 to-fuchsia-600", image: "skincare" },
  { title: "Lumen Hospital Wayfinding", category: "Signage", color: "from-emerald-400 to-teal-600", image: "lumen" },
  { title: "Spice Route Menu Suite", category: "Branding", color: "from-amber-500 to-orange-600", image: "social-kit" },
  { title: "Atlas Coffee Mono-Carton", category: "Packaging", color: "from-yellow-600 to-amber-800", image: "boxes" },
  { title: "Skyline Hoarding Series", category: "Signage", color: "from-cyan-400 to-blue-600", image: "pulse" },
  { title: "Edge Reports Annual Print", category: "Printing", color: "from-slate-500 to-zinc-700", image: "report" },
  { title: "Atelier Notebook System", category: "Branding", color: "from-violet-500 to-purple-700", image: "web" },
];

export const posts = [
  { title: "Offset vs Digital Printing: Which Should You Choose?", date: "May 20, 2026", excerpt: "A practical guide to picking the right press for your run size, finish, and budget." },
  { title: "Packaging Trends Shaping Indian Brands in 2026", date: "May 10, 2026", excerpt: "Sustainable substrates, tactile finishes, and the rise of unboxing-first design." },
  { title: "The Best Branding Materials for Premium Brands", date: "April 28, 2026", excerpt: "From soft-touch laminates to GF Smith papers — what to specify when quality matters." },
  { title: "Store Branding Tips for Independent Retailers", date: "April 12, 2026", excerpt: "Small budgets, big impact: signage, window vinyl, and in-store collateral that converts." },
];

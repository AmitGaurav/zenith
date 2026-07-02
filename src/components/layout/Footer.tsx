import Link from "next/link";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { COMPANY } from "@/lib/data";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/properties?type=Residential", label: "Residential Properties" },
  { href: "/properties?type=Commercial", label: "Commercial Properties" },
  { href: "/properties?type=Plot", label: "Plots & Land" },
  { href: "/contact", label: "Property Management" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center group-hover:bg-gold-400 transition-colors">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-xl tracking-wide">
                  ZENITH
                </span>
                <span className="text-gold-400 text-[9px] tracking-[0.18em] uppercase font-medium">
                  Dwellings &amp; Properties
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {COMPANY.tagline}. Your trusted partner for residential,
              commercial, and plot investments in Pune &amp; PCMC since{" "}
              {COMPANY.established}.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { label: "f", title: "Facebook", href: COMPANY.socialLinks.facebook },
                { label: "in", title: "Instagram", href: COMPANY.socialLinks.instagram },
                { label: "li", title: "LinkedIn", href: COMPANY.socialLinks.linkedin },
                { label: "𝕏", title: "X (Twitter)", href: COMPANY.socialLinks.twitter },
              ].map(({ label, title, href }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gold-500 flex items-center justify-center transition-colors group"
                  aria-label={title}
                >
                  <span className="text-white/60 group-hover:text-white text-xs font-bold select-none">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-white/60 hover:text-gold-400 text-sm transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-white/60 hover:text-gold-400 text-sm transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">
                  {COMPANY.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="text-white/60 hover:text-gold-400 text-sm transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a
                  href={`tel:${COMPANY.altPhone.replace(/\s/g, "")}`}
                  className="text-white/60 hover:text-gold-400 text-sm transition-colors"
                >
                  {COMPANY.altPhone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-white/60 hover:text-gold-400 text-sm transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="text-white/40 hover:text-gold-400 text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/contact"
              className="text-white/40 hover:text-gold-400 text-xs transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/contact"
              className="text-white/40 hover:text-gold-400 text-xs transition-colors"
            >
              RERA Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-navy-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center group-hover:bg-gold-400 transition-colors shadow-lg">
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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  pathname === link.href
                    ? "text-gold-400"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gold-400 transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:+919876543210`}
              className="hidden lg:flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 98765 43210</span>
            </a>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center bg-gold-500 hover:bg-gold-400 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Schedule Visit
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-navy-800 border-t border-white/10 px-4 pb-5 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3 text-sm font-medium border-b border-white/5 transition-colors ${
                pathname === link.href
                  ? "text-gold-400"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 block w-full text-center bg-gold-500 hover:bg-gold-400 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors"
          >
            Schedule a Visit
          </Link>
          <a
            href="tel:+919876543210"
            className="mt-3 flex items-center justify-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            +91 98765 43210
          </a>
        </div>
      </div>
    </header>
  );
}

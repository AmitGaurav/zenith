"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import { COMPANY } from "@/lib/data";

const SERVICES_LIST = [
  "Residential Properties",
  "Commercial Properties",
  "Plots & Land",
  "Property Management",
  "Property Valuation",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-800 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 to-navy-700 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </div>
          <div className="max-w-2xl">
            <span className="inline-block text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Talk to Our Experts
            </h1>
            <p className="text-white/65 text-lg">
              Have a question or ready to find your dream property? Reach out —
              we respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Info cards */}
              {[
                {
                  icon: MapPin,
                  title: "Our Office",
                  lines: [COMPANY.address, "Serving Pune & PCMC"],
                },
                {
                  icon: Phone,
                  title: "Phone",
                  lines: [COMPANY.phone, COMPANY.altPhone],
                  href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
                },
                {
                  icon: Mail,
                  title: "Email",
                  lines: [COMPANY.email],
                  href: `mailto:${COMPANY.email}`,
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sun: 10:00 AM – 4:00 PM"],
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gold-300 hover:shadow-md transition-all flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-navy-800 font-semibold mb-1">
                      {item.title}
                    </h3>
                    {item.lines.map((line, i) =>
                      item.href && i === 0 ? (
                        <a
                          key={i}
                          href={item.href}
                          className="block text-gray-500 text-sm hover:text-gold-500 transition-colors"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={i} className="text-gray-500 text-sm">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}

              {/* Quick action */}
              <div className="bg-navy-800 rounded-2xl p-6 text-center">
                <h3 className="text-white font-bold text-lg mb-2">
                  Want a Callback?
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  Share your number and our expert will call you back within 2 hours.
                </p>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-800 mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-gray-500 max-w-sm mb-8">
                      Thank you for reaching out. Our team will get back to you
                      within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" }); }}
                      className="text-navy-700 hover:text-gold-500 font-semibold text-sm transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-navy-800 mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-gray-500 text-sm mb-8">
                      Fill in the details below and our team will get back to you shortly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-medium text-navy-800 mb-2">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="e.g. Rahul Sharma"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/10 text-navy-800 text-sm placeholder:text-gray-400 transition-colors"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-sm font-medium text-navy-800 mb-2">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/10 text-navy-800 text-sm placeholder:text-gray-400 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        {/* Phone */}
                        <div>
                          <label className="block text-sm font-medium text-navy-800 mb-2">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/10 text-navy-800 text-sm placeholder:text-gray-400 transition-colors"
                          />
                        </div>

                        {/* Service */}
                        <div>
                          <label className="block text-sm font-medium text-navy-800 mb-2">
                            Interested In
                          </label>
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/10 text-navy-800 text-sm transition-colors cursor-pointer"
                          >
                            <option value="">Select a service</option>
                            {SERVICES_LIST.map((s) => (
                              <option key={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Budget */}
                      <div>
                        <label className="block text-sm font-medium text-navy-800 mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/10 text-navy-800 text-sm transition-colors cursor-pointer"
                        >
                          <option value="">Select budget</option>
                          <option>Under ₹30 Lakh</option>
                          <option>₹30 – ₹60 Lakh</option>
                          <option>₹60 Lakh – ₹1 Cr</option>
                          <option>₹1 Cr – ₹2 Cr</option>
                          <option>Above ₹2 Cr</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-navy-800 mb-2">
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Tell us about your requirements — location preference, property type, timeline, etc."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/10 text-navy-800 text-sm placeholder:text-gray-400 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-700 disabled:opacity-70 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg text-sm"
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-64 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-800 to-navy-700" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-10 h-10 text-gold-400 mx-auto mb-3" />
            <p className="text-white font-semibold text-lg">
              {COMPANY.address}
            </p>
            <p className="text-white/60 text-sm mt-1">
              Serving Pune &amp; Pimpri-Chinchwad (PCMC)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

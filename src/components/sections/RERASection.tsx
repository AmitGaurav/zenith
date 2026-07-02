"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, ShieldCheck, ExternalLink } from "lucide-react";
import { COMPANY } from "@/lib/data";

export default function RERASection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">
              Compliance &amp; Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-3">
              MahaRERA Registered Agent
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Zenith Dwellings is a fully licensed and MahaRERA-registered real
              estate agent — ensuring every transaction is legal, transparent,
              and fully compliant.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* RERA details card */}
              <div className="bg-gradient-to-br from-navy-800 to-navy-700 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-widest">
                      Regulatory Authority
                    </p>
                    <p className="text-white font-bold text-lg">MahaRERA</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      label: "Registration Number",
                      value: COMPANY.rera.number,
                      highlight: true,
                    },
                    {
                      label: "Agent Name",
                      value: COMPANY.chairman,
                    },
                    {
                      label: "Valid From",
                      value: COMPANY.rera.validFrom,
                    },
                    {
                      label: "Valid Until",
                      value: COMPANY.rera.validTo,
                    },
                    {
                      label: "State",
                      value: COMPANY.rera.state,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between items-center py-3 border-b border-white/10 last:border-0"
                    >
                      <span className="text-white/60 text-sm">{item.label}</span>
                      <span
                        className={`font-semibold text-sm ${
                          item.highlight ? "text-gold-300 font-bold text-base" : "text-white"
                        }`}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://maharerait.mahaonline.gov.in`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify on MahaRERA Portal
                </a>
              </div>

              {/* Certificate preview */}
              <div className="relative group cursor-pointer" onClick={() => setOpen(true)}>
                <div className="relative rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-gold-300 transition-colors shadow-lg">
                  <Image
                    src="/rera-certificate.jpg"
                    alt="MahaRERA Registration Certificate — Aniket Kumar Jha"
                    width={600}
                    height={800}
                    className="w-full object-contain"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-navy-800/0 group-hover:bg-navy-800/30 transition-all flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                        <ZoomIn className="w-6 h-6 text-navy-800" />
                      </div>
                      <span className="text-white font-semibold text-sm drop-shadow">
                        View Certificate
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-center text-xs text-gray-400 mt-2">
                  Click to view full certificate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-navy-800 text-white flex items-center justify-center hover:bg-navy-700 transition-colors shadow-lg"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <Image
              src="/rera-certificate.jpg"
              alt="MahaRERA Registration Certificate"
              width={800}
              height={1100}
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}

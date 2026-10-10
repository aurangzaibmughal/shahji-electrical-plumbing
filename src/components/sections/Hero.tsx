import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck, Wrench, Zap, Clock, CheckCircle2, MapPin } from "lucide-react";
import { COMPANY_CONFIG, BUSINESS_NAME } from "@/config/company";
import { formatPhoneLink } from "@/lib/utils";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-brand-dark-900 to-slate-900 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Subtle Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Decorative Glow Orbs Inspired by Logo Colors (Green & Blue) */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-green-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust Pill & Location Badge */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 bg-brand-green-500/15 border border-brand-green-500/40 px-3.5 py-1.5 rounded-full text-xs font-semibold text-brand-green-300 shadow-inner">
                <MapPin className="w-3.5 h-3.5 text-brand-green-400 shrink-0" />
                <span className="font-bold tracking-wide">Islamabad, Pakistan</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-slate-800/90 border border-slate-700/80 px-3 py-1.5 rounded-full text-xs font-medium text-slate-300">
                <span className="w-2 h-2 rounded-full bg-brand-green-400 animate-ping" />
                <span>Incorporated SMC-Private Limited</span>
              </div>
            </div>

            {/* Main H1 Headline with Exact Company Name */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-400 via-brand-teal-300 to-brand-blue-400 drop-shadow-sm">
                {BUSINESS_NAME}
              </span>
            </h1>

            {/* Prominent Islamabad Mention & Supporting Text */}
            <div className="space-y-2">
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                Professional electrical and plumbing solutions for homes and businesses across <strong className="text-white font-semibold underline decoration-brand-green-400 decoration-2 underline-offset-4">Islamabad, Pakistan</strong>. Reliable service, quality workmanship, and customer-focused solutions.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-blue-400 shrink-0" />
                <span>Head Office: 130, Shop No 11, G-7/3, Islamabad • Rapid On-Site Dispatch</span>
              </p>
            </div>

            {/* Dual Category Visual Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-2 bg-brand-blue-950/60 border border-brand-blue-800/60 px-3.5 py-2 rounded-xl text-xs font-semibold text-brand-blue-200">
                <Wrench className="w-4 h-4 text-brand-blue-400" />
                <span>Expert Plumbing & Leak Detection</span>
              </div>
              <div className="flex items-center gap-2 bg-brand-green-950/60 border border-brand-green-800/60 px-3.5 py-2 rounded-xl text-xs font-semibold text-brand-green-200">
                <Zap className="w-4 h-4 text-brand-green-400" />
                <span>Certified Electrical Wiring & DBs</span>
              </div>
            </div>

            {/* Prominent CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Button 1: Call Now (tel:+92348140672) */}
              <a
                href={formatPhoneLink(COMPANY_CONFIG.phones[0].value)}
                className="inline-flex items-center justify-center font-bold text-base px-8 py-4 rounded-xl bg-brand-green-500 hover:bg-brand-green-600 text-white shadow-glow-green transition-all duration-200 active:scale-[0.98] group"
              >
                <Phone className="w-5 h-5 mr-2.5 animate-pulse" />
                <span>Call Now ({COMPANY_CONFIG.phones[0].display})</span>
              </a>

              {/* Button 2: Explore Our Services (#services) */}
              <Link
                href="/#services"
                className="inline-flex items-center justify-center font-bold text-base px-7 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-white border border-brand-blue-500/50 hover:border-brand-blue-400 shadow-md transition-all active:scale-[0.98] group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 ml-2 text-brand-blue-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Key Trust Signals Under CTA */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-green-400 shrink-0" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-brand-blue-400 shrink-0" />
                <span>&lt; 45 Min Islamabad Dispatch</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-brand-green-400 shrink-0" />
                <span>Workmanship Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Cards (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="relative h-96 sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700/80 group">
                <Image
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80"
                  alt="Shahji Certified Master Technician Serving Islamabad, Pakistan"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-green-400" />
                      Islamabad Dispatch Center
                    </span>
                    <span className="flex items-center gap-1 text-brand-green-400 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-brand-green-400 animate-ping" />
                      Active On Call
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Serving G-7, G-13, F-6, F-7, F-8, F-10, E-11, DHA & Bahria Town.
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Electrical Excellence (Top Right) */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-slate-900/95 border border-brand-green-500/50 p-3.5 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-green-500/20 border border-brand-green-500/40 flex items-center justify-center text-brand-green-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Electrical Division</div>
                  <div className="text-[11px] text-brand-green-400 font-medium">100% IEC Standard</div>
                </div>
              </div>

              {/* Floating Badge 2: Plumbing Excellence (Bottom Left) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-slate-900/95 border border-brand-blue-500/50 p-3.5 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-blue-500/20 border border-brand-blue-500/40 flex items-center justify-center text-brand-blue-400">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Plumbing Division</div>
                  <div className="text-[11px] text-brand-blue-400 font-medium">Non-Invasive Leak Fix</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

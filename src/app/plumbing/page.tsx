import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Wrench, Droplets, RotateCw, Bath, Utensils, Activity, ShieldAlert, Phone, CheckCircle2, ArrowRight, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { PLUMBING_SERVICES } from "@/data/servicesData";
import { COMPANY_CONFIG } from "@/config/company";
import { formatPhoneLink } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/forms/ContactForm";
import { CTASection } from "@/components/sections/CTASection";
import { ComprehensiveServices } from "@/components/sections/ComprehensiveServices";

export const metadata: Metadata = {
  title: "Professional Plumbing Services | Leak Repair & Pipe Systems",
  description:
    "Expert plumbing services by Shahji Home Maintenance: pipe leak detection, motorized drain unclogging, bathroom sanitary fixtures, and water booster pump repairs.",
};

export default function PlumbingPage() {
  return (
    <div className="bg-white">
      {/* Plumbing Hero Banner */}
      <section className="bg-gradient-to-b from-brand-blue-950 via-slate-900 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0080ff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="blue" icon={<Wrench className="w-3.5 h-3.5" />}>
                Hydraulic & Sanitary Engineering Division
              </Badge>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Professional Plumbing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-400 to-cyan-300">
                  Services & Leak Solutions
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Precision pipe repairs, sub-surface seepage detection, motorized drain clearing, and complete sanitary installations executed by verified master plumbers.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="/contact?service=Plumbing"
                  variant="primary-blue"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Book Plumbing Service
                </Button>

                <a
                  href={formatPhoneLink(COMPANY_CONFIG.phones[0].value)}
                  className="inline-flex items-center justify-center font-bold text-base px-6 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-white border border-brand-blue-500/40 shadow-md transition-all"
                >
                  <Phone className="w-4 h-4 mr-2 text-brand-blue-400" />
                  <span>Call {COMPANY_CONFIG.phones[0].display}</span>
                </a>
              </div>

              {/* Fast Features */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue-400" />
                  <span>Non-Invasive Leak Pinpoint</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue-400" />
                  <span>Certified PPRC/CPVC Joints</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue-400" />
                  <span>24/7 Emergency Dispatch</span>
                </div>
              </div>
            </div>

            {/* Right Visual Image (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-blue-500/40 h-96 group">
                <Image
                  src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1000&q=80"
                  alt="Professional Plumber Fixing Water Conduit"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-brand-blue-500/30 flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Rapid Leakage Detection Unit</span>
                  <span className="text-xs text-brand-blue-300 font-semibold">On Call</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-20 bg-slate-50" id="services-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <Badge variant="blue">Our Comprehensive Plumbing Scope</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900">
              Specialized Hydraulic Engineering Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore our core plumbing and drainage capabilities designed to safeguard your property from leaks and water damage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PLUMBING_SERVICES.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl border border-brand-blue-100 shadow-soft hover:shadow-card hover:border-brand-blue-300 transition-all flex flex-col justify-between overflow-hidden group scroll-mt-24"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.fullDescription}
                    </p>

                    <div className="space-y-2 pt-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-brand-blue-700">
                        Technical Highlights:
                      </div>
                      <ul className="space-y-1.5">
                        {service.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <a
                    href={formatPhoneLink(COMPANY_CONFIG.phones[0].value)}
                    className="text-xs font-bold text-brand-blue-600 hover:text-brand-blue-700 flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Hotline</span>
                  </a>

                  <Button
                    href={`/contact?service=Plumbing&note=${encodeURIComponent(service.title)}`}
                    variant="primary-blue"
                    size="sm"
                  >
                    Book This Service
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Categorized Plumbing Jobs Catalog */}
      <ComprehensiveServices initialDivision="plumbing" id="all-plumbing-jobs" />

      {/* Dedicated Interactive Plumbing Booking Section */}
      <section className="py-20 bg-white" id="book-plumbing">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="blue">Instant Dispatch</Badge>
              <h3 className="text-2xl sm:text-3xl font-black text-brand-dark-900">
                Book a Certified Plumber
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Need urgent assistance for a burst pipe, leaking drain, or new bathroom installation? Fill out the form or dial our direct phone line.
              </p>

              <div className="p-5 rounded-2xl bg-brand-blue-50 border border-brand-blue-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-blue-800">
                  Direct Plumbing Phone Line:
                </div>
                <a
                  href={formatPhoneLink(COMPANY_CONFIG.phones[0].value)}
                  className="flex items-center gap-2 text-lg font-black text-brand-blue-700 hover:text-brand-blue-800"
                >
                  <Phone className="w-5 h-5 animate-pulse" />
                  <span>{COMPANY_CONFIG.phones[0].display}</span>
                </a>
                <p className="text-xs text-slate-500">
                  Immediate triage and emergency scheduling across all sectors.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-soft">
              <React.Suspense fallback={<div className="p-8 text-center text-slate-400 text-xs">Loading booking form...</div>}>
                <ContactForm initialService="Plumbing" />
              </React.Suspense>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Stop Water Leaks Before They Cause Structural Damage"
        subtitle="Call Shahji Plumbing Division right away or book online for immediate technician dispatch."
      />
    </div>
  );
}

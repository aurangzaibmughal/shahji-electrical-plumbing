import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Zap, ShieldAlert, Sliders, ToggleRight, Lightbulb, Search, Building2, Phone, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Flame } from "lucide-react";
import { ELECTRICAL_SERVICES } from "@/data/servicesData";
import { COMPANY_CONFIG } from "@/config/company";
import { formatPhoneLink } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { CTASection } from "@/components/sections/CTASection";
import { ComprehensiveServices } from "@/components/sections/ComprehensiveServices";

export const metadata: Metadata = {
  title: "Reliable Electrical Services | House Wiring & Short Circuit Repairs",
  description:
    "Certified electrical services by Shahji Home Maintenance: complete house wiring, distribution boards, RCD shock protection, fault diagnosis, and lighting installation.",
};

const SAFETY_PILLARS = [
  {
    title: "Zero-Tolerance Fire Safety",
    description: "We use exclusively 99.9% pure electrolytic copper cables with Flame Retardant Low Smoke (FRLS) insulation to prevent overheating fires.",
  },
  {
    title: "Shock & Electrocution Protection",
    description: "Every distribution board overhaul includes 30mA Residual Current Devices (RCD/ELCB) to trip within milliseconds upon human contact.",
  },
  {
    title: "Precision Digital Diagnostics",
    description: "Thermal imaging cameras and Megger insulation testers identify hot spots and cable degradation before catastrophic failures occur.",
  },
];

export default function ElectricalPage() {
  return (
    <div className="bg-white">
      {/* Electrical Hero Banner */}
      <section className="bg-gradient-to-b from-brand-green-950 via-slate-900 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00a859_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-green-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="green" icon={<Zap className="w-3.5 h-3.5" />}>
                Electrical Power & Systems Engineering
              </Badge>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Reliable Electrical <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-400 to-emerald-200">
                  Services & Infrastructure
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Safe residential and commercial wiring, distribution board overhauls, RCD earth-leakage protection, and precision short-circuit diagnosis by certified master electricians.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="/contact?service=Electrical"
                  variant="primary-green"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Book Electrical Service
                </Button>

                <a
                  href={formatPhoneLink(COMPANY_CONFIG.phones[1].value)}
                  className="inline-flex items-center justify-center font-bold text-base px-6 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-white border border-brand-green-500/40 shadow-md transition-all"
                >
                  <Phone className="w-4 h-4 mr-2 text-brand-green-400" />
                  <span>Call {COMPANY_CONFIG.phones[1].display}</span>
                </a>
              </div>

              {/* Fast Features */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-400" />
                  <span>Pure 99.9% Copper Cables</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-400" />
                  <span>RCD Shock Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-400" />
                  <span>FLIR Thermal Audits</span>
                </div>
              </div>
            </div>

            {/* Right Visual Image (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-green-500/40 h-96 group">
                <Image
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80"
                  alt="Certified Electrician Testing Main Distribution Board"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-brand-green-500/30 flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Certified Master Electricians</span>
                  <span className="text-xs text-brand-green-300 font-semibold">100% Tested</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Electrical Safety First Banner */}
      <section className="py-12 bg-amber-500/10 border-y border-amber-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAFETY_PILLARS.map((pillar, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white border border-amber-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>{pillar.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-20 bg-slate-50" id="electrical-services-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <Badge variant="green">Our Comprehensive Electrical Scope</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900">
              Specialized Electrical Engineering Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore our core electrical installation, repair, and diagnostic solutions built for durability and total safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ELECTRICAL_SERVICES.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl border border-brand-green-100 shadow-soft hover:shadow-card hover:border-brand-green-300 transition-all flex flex-col justify-between overflow-hidden group scroll-mt-24"
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
                      <div className="text-xs font-bold uppercase tracking-wider text-brand-green-700">
                        Technical Highlights:
                      </div>
                      <ul className="space-y-1.5">
                        {service.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-green-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <a
                    href={formatPhoneLink(COMPANY_CONFIG.phones[1].value)}
                    className="text-xs font-bold text-brand-green-600 hover:text-brand-green-700 flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Hotline</span>
                  </a>

                  <Button
                    href={`/contact?service=Electrical&note=${encodeURIComponent(service.title)}`}
                    variant="primary-green"
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

      {/* Comprehensive Categorized Electrical Jobs Catalog */}
      <ComprehensiveServices initialDivision="electrical" id="all-electrical-jobs" />

      {/* Dedicated Interactive Electrical Booking Section */}
      <section className="py-20 bg-white" id="book-electrical">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="green">Instant Technical Dispatch</Badge>
              <h3 className="text-2xl sm:text-3xl font-black text-brand-dark-900">
                Book a Certified Electrician
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Facing a tripped breaker, burning smell, short circuit, or planning a full house rewiring? Get in touch with our certified engineers.
              </p>

              <div className="p-5 rounded-2xl bg-brand-green-50 border border-brand-green-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-green-800">
                  Direct Electrical Phone Line:
                </div>
                <a
                  href={formatPhoneLink(COMPANY_CONFIG.phones[1].value)}
                  className="flex items-center gap-2 text-lg font-black text-brand-green-700 hover:text-brand-green-800"
                >
                  <Phone className="w-5 h-5 animate-pulse" />
                  <span>{COMPANY_CONFIG.phones[1].display}</span>
                </a>
                <p className="text-xs text-slate-500">
                  Immediate triage, surge fault isolation, and certified scheduling.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-soft">
              <React.Suspense fallback={<div className="p-8 text-center text-slate-400 text-xs">Loading booking form...</div>}>
                <ContactForm initialService="Electrical" />
              </React.Suspense>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ensure 100% Electrical Safety in Your Property"
        subtitle="Contact Shahji Electrical Division today for certified wiring inspections, DB panels, and surge protection."
      />
    </div>
  );
}

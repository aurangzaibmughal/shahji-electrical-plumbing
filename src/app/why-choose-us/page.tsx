import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, ShieldCheck, Clock, Users, CheckCircle2, ThumbsUp, Building2, Wrench, Zap, Phone, ArrowRight, Sparkles, Scale, FileCheck } from "lucide-react";
import { COMPANY_CONFIG } from "@/config/company";
import { formatPhoneLink } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Why Choose Us | Certified Standards & Guarantees",
  description:
    "Discover why homeowners, property managers, and commercial businesses choose Shahji Home Maintenance for electrical, plumbing, and building repairs.",
};

const DETAILED_PILLARS = [
  {
    icon: Users,
    title: "1. Professional Certified Team",
    subtitle: "Trained, Verified & Background-Checked",
    description: "Unlike informal day-laborers, our technicians undergo rigorous testing in electrical theory, sanitary engineering, and occupational safety. Every team member wears official identification and respects your home privacy.",
    color: "green",
  },
  {
    icon: Award,
    title: "2. Uncompromising Quality Workmanship",
    subtitle: "Built to International Codes",
    description: "We follow strict IEC and CPVC/PPRC plumbing specifications. We never use counterfeit circuit breakers or brittle recycled PVC pipes that deteriorate under water pressure.",
    color: "blue",
  },
  {
    icon: Clock,
    title: "3. Rapid & Dependable Service",
    subtitle: "Under 45 Minute Emergency Dispatch",
    description: "When an underground pipe bursts or a distribution panel sparks, every minute counts. Our mobile technical units carry essential replacement valves, breakers, and conduits for same-visit resolution.",
    color: "teal",
  },
  {
    icon: Scale,
    title: "4. Transparent Communication & Pricing",
    subtitle: "No Hidden Costs or Surprise Surcharges",
    description: "We provide upfront, transparent cost estimates before beginning any work. You will know exactly what components are being replaced and why.",
    color: "dark",
  },
  {
    icon: ThumbsUp,
    title: "5. Absolute Customer Satisfaction",
    subtitle: "Full Workmanship Warranty",
    description: "Our job isn't finished until you test and approve the repair. We back our labor and installations with a comprehensive post-service quality warranty.",
    color: "green",
  },
  {
    icon: Building2,
    title: "6. Home & Commercial Capacity",
    subtitle: "Villas, Apartments, Plazas & Facilities",
    description: "Equipped with industrial hydro-jetters, heavy Megohmmeter testers, and scaffolding tools capable of servicing large corporate structures as smoothly as private residences.",
    color: "blue",
  },
  {
    icon: ShieldCheck,
    title: "7. Safety First Protocols",
    subtitle: "RCD Breakers & Hydrostatic Testing",
    description: "We prioritize total life safety. All electrical works are tested against phase-neutral ground faults, and all plumbing repairs undergo hydrostatic pressure testing before handover.",
    color: "teal",
  },
  {
    icon: FileCheck,
    title: "8. Registered Corporate Governance",
    subtitle: "Incorporated SMC-Private Limited",
    description: "As an officially registered single-member private limited company, we provide corporate invoices, GST/NTN compliance, and institutional accountability.",
    color: "dark",
  },
];

export default function WhyChooseUsPage() {
  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-dark-900 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00a859_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-4">
          <Badge variant="green" icon={<Award className="w-3.5 h-3.5" />}>
            The Shahji Advantage
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight max-w-4xl mx-auto">
            Why Property Owners Choose <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-400 via-brand-teal-300 to-brand-blue-400">
              SHAHJI HOME MAINTENANCE
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our 8 pillars of engineering excellence, customer accountability, and certified safety that set us apart from informal contractors.
          </p>
        </div>
      </section>

      {/* 8 Detailed Trust Pillars Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DETAILED_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-soft hover:shadow-card hover:border-slate-300 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                          pillar.color === "green"
                            ? "bg-brand-green-100 text-brand-green-600"
                            : pillar.color === "blue"
                            ? "bg-brand-blue-100 text-brand-blue-600"
                            : pillar.color === "teal"
                            ? "bg-brand-teal-100 text-brand-teal-600"
                            : "bg-slate-800 text-white"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Pillar 0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-brand-dark-900 group-hover:text-brand-dark-800">
                        {pillar.title}
                      </h3>
                      <div className="text-xs font-bold text-brand-green-600 mt-0.5">
                        {pillar.subtitle}
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-green-500" />
                    <span>Standard in Every Service Visit</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table Section: Shahji vs Typical Informal Contractors */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <Badge variant="blue">Comparison Matrix</Badge>
            <h2 className="text-3xl font-extrabold text-brand-dark-900">
              The Difference is in the Details
            </h2>
            <p className="text-slate-600 text-sm">
              See how our professional engineering workflow contrasts with uncertified local repairmen.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-soft">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4 sm:p-5">Service Aspect</th>
                  <th className="p-4 sm:p-5 text-brand-green-400">Shahji Home Maintenance</th>
                  <th className="p-4 sm:p-5 text-slate-400">Informal Repairmen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 sm:p-5 font-bold">Technician Credentials</td>
                  <td className="p-4 sm:p-5 font-semibold text-brand-green-700 bg-brand-green-50/40">
                    ✓ Verified Master Electricians & Plumbers
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500">✗ Unverified day labor</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 sm:p-5 font-bold">Materials & Conduits</td>
                  <td className="p-4 sm:p-5 font-semibold text-brand-green-700 bg-brand-green-50/40">
                    ✓ 99.9% Pure Copper & Pressure-Rated Pipes
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500">✗ Low-grade CCA wires & cheap fittings</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 sm:p-5 font-bold">Diagnostic Technology</td>
                  <td className="p-4 sm:p-5 font-semibold text-brand-green-700 bg-brand-green-50/40">
                    ✓ FLIR Thermal Cameras & Electronic Leak Testers
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500">✗ Guesswork & destructive wall breaking</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 sm:p-5 font-bold">Pricing Transparency</td>
                  <td className="p-4 sm:p-5 font-semibold text-brand-green-700 bg-brand-green-50/40">
                    ✓ Itemized upfront quotes & zero hidden fees
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500">✗ Arbitrary pricing & unexpected add-ons</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 sm:p-5 font-bold">Warranty & Follow-up</td>
                  <td className="p-4 sm:p-5 font-semibold text-brand-green-700 bg-brand-green-50/40">
                    ✓ Full Workmanship Guarantee
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500">✗ No post-service accountability</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection
        title="Experience the Shahji Difference Today"
        subtitle="Book your plumbing or electrical maintenance request with our certified team."
      />
    </div>
  );
}

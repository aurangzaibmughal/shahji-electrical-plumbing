import React from "react";
import { Phone, Calendar, ArrowRight, ShieldCheck, Zap, Wrench } from "lucide-react";
import { COMPANY_CONFIG } from "@/config/company";
import { formatPhoneLink } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: "gradient" | "dark" | "blue" | "green";
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Need a Professional Plumbing or Electrical Service?",
  subtitle = "Contact Shahji certified technicians today for prompt inspection, upfront quotes, and guaranteed repair work.",
  variant = "gradient",
}) => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-brand-dark-900 via-slate-900 to-brand-dark-900 text-white">
      {/* Visual Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-green-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative space-y-8">
        <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-4 py-1.5 rounded-full text-xs font-bold text-slate-300">
          <Wrench className="w-3.5 h-3.5 text-brand-blue-400" />
          <span>Plumbing</span>
          <span className="text-slate-600">•</span>
          <Zap className="w-3.5 h-3.5 text-brand-green-400" />
          <span>Electrical</span>
          <span className="text-slate-600">•</span>
          <ShieldCheck className="w-3.5 h-3.5 text-brand-teal-400" />
          <span>100% Quality Guaranteed</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Dual CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            href="/contact"
            variant="primary-green"
            size="lg"
            className="w-full sm:w-auto px-8 py-4 text-base shadow-glow-green"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Book a Service Online
          </Button>

          <a
            href={formatPhoneLink(COMPANY_CONFIG.phones[0].value)}
            className="w-full sm:w-auto inline-flex items-center justify-center font-bold text-base px-8 py-4 rounded-lg bg-brand-blue-500 hover:bg-brand-blue-600 text-white shadow-glow-blue transition-all active:scale-[0.98]"
          >
            <Phone className="w-5 h-5 mr-2 animate-pulse" />
            <span>Call Hotline: {COMPANY_CONFIG.phones[0].display}</span>
          </a>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span>✓ Rapid Emergency Dispatch</span>
          <span>✓ Upfront Pricing</span>
          <span>✓ Genuine Spare Parts</span>
          <span>✓ SMC-Private Limited</span>
        </div>
      </div>
    </section>
  );
};

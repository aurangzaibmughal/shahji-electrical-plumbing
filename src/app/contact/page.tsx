import React, { Suspense } from "react";
import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck, ArrowRight, Sparkles, Navigation, ExternalLink } from "lucide-react";
import { COMPANY_CONFIG, BUSINESS_ADDRESS, BUSINESS_EMAIL, GOOGLE_MAPS_URL, BUSINESS_NAME } from "@/config/company";
import { formatPhoneLink, formatWhatsAppLink } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapSection } from "@/components/sections/MapSection";

export const metadata: Metadata = {
  title: "Contact Us | Islamabad Service Hotline & Booking",
  description:
    "Contact Shahji Electrical & Plumbing Services in Islamabad, Pakistan. Address: 130, Shop Number 11, 4 G-13, G-7/3, G-7, Islamabad. Call +92 348 140672 or email shahjielectricplumberforhome@gmail.com.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-dark-900 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00a859_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-4">
          <Badge variant="green" icon={<MapPin className="w-3.5 h-3.5" />}>
            Islamabad, Pakistan
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight max-w-4xl mx-auto">
            Contact <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-400 via-brand-teal-300 to-brand-blue-400">
              {BUSINESS_NAME}
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Our workshop and mobile dispatch teams are stationed in Islamabad to provide rapid on-site electrical and plumbing solutions.
          </p>
        </div>
      </section>

      {/* Contact Cards & Form Split Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Complete Address Card & Direct Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <Badge variant="blue">Official Business Details</Badge>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900">
                  Head Office & Direct Access
                </h2>
                <p className="text-sm text-slate-600">
                  Find our complete business address, email, phone numbers, and direct GPS navigation.
                </p>
              </div>

              {/* Complete Business Address Card with Get Directions Button */}
              <div className="p-6 rounded-3xl bg-white border-2 border-brand-green-200 shadow-soft hover:shadow-card transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-green-700 uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-brand-green-600" />
                    <span>Complete Business Address:</span>
                  </div>
                  <span className="text-[11px] bg-brand-green-50 text-brand-green-800 font-bold px-2.5 py-0.5 rounded-full border border-brand-green-200">
                    Verified
                  </span>
                </div>

                <p className="text-base font-bold text-slate-900 leading-relaxed">
                  {BUSINESS_ADDRESS}
                </p>

                {/* Clearly Visible Get Directions Button */}
                <div className="pt-2">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center font-bold text-sm px-5 py-3.5 rounded-xl bg-gradient-to-r from-brand-green-500 to-brand-blue-500 hover:from-brand-green-600 hover:to-brand-blue-600 text-white shadow-md transition-all active:scale-[0.98] gap-2"
                  >
                    <Navigation className="w-4 h-4 animate-pulse" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>
              </div>

              {/* Clickable Official Email Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft space-y-2">
                <div className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-blue-500" />
                  <span>Official Email Address:</span>
                </div>
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="text-base font-bold text-brand-blue-600 hover:text-brand-blue-700 transition-colors block break-all underline decoration-brand-blue-300 underline-offset-4"
                >
                  {BUSINESS_EMAIL}
                </a>
              </div>

              {/* Direct Phone Lines */}
              <div className="space-y-3">
                {/* Phone Card 1 */}
                <a
                  href={formatPhoneLink(COMPANY_CONFIG.phones[0].value)}
                  className="block p-5 rounded-2xl bg-white border border-slate-200 shadow-soft hover:shadow-card hover:border-brand-green-400 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-green-100 text-brand-green-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Phone className="w-5 h-5 animate-pulse" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-slate-400 uppercase">
                          Helpline 1 (Plumbing)
                        </div>
                        <div className="text-lg font-extrabold text-brand-dark-900 group-hover:text-brand-green-600 transition-colors">
                          {COMPANY_CONFIG.phones[0].display}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-brand-green-600 bg-brand-green-50 px-2.5 py-1 rounded-lg">
                      Call
                    </span>
                  </div>
                </a>

                {/* Phone Card 2 */}
                <a
                  href={formatPhoneLink(COMPANY_CONFIG.phones[1].value)}
                  className="block p-5 rounded-2xl bg-white border border-slate-200 shadow-soft hover:shadow-card hover:border-brand-blue-400 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-blue-100 text-brand-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Phone className="w-5 h-5 animate-pulse" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-slate-400 uppercase">
                          Helpline 2 (Electrical)
                        </div>
                        <div className="text-lg font-extrabold text-brand-dark-900 group-hover:text-brand-blue-600 transition-colors">
                          {COMPANY_CONFIG.phones[1].display}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-brand-blue-600 bg-brand-blue-50 px-2.5 py-1 rounded-lg">
                      Call
                    </span>
                  </div>
                </a>

                {/* WhatsApp Quick Action Card */}
                <a
                  href={formatWhatsAppLink(COMPANY_CONFIG.whatsapp.number, COMPANY_CONFIG.whatsapp.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/40 shadow-soft hover:shadow-card hover:border-[#25D366] transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                        <MessageCircle className="w-5 h-5 fill-current" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-[#1e7e34] uppercase">
                          WhatsApp Chat
                        </div>
                        <div className="text-base font-bold text-slate-900">
                          {COMPANY_CONFIG.whatsapp.display}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold bg-white text-[#1e7e34] px-2.5 py-1 rounded-lg border border-[#25D366]/30 shadow-sm">
                      Chat Live
                    </span>
                  </div>
                </a>
              </div>

              {/* Working Hours Info Box */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>Working Hours in Islamabad:</span>
                </div>
                <p>• Regular Business: <span className="font-semibold text-slate-800">{COMPANY_CONFIG.businessHours.regular}</span> ({COMPANY_CONFIG.businessHours.days})</p>
                <p>• Emergency Response: <span className="font-semibold text-brand-green-700">{COMPANY_CONFIG.businessHours.emergency}</span></p>
              </div>

              {/* Official Social Media Channels in Contact Section */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft space-y-3">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Connect on Social Media:
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href={COMPANY_CONFIG.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Shahji on Facebook"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 hover:bg-[#1877F2] text-slate-700 hover:text-white border border-slate-200 text-xs font-bold transition-all shadow-xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span>Facebook</span>
                  </a>
                  <a
                    href={COMPANY_CONFIG.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Shahji on Instagram"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 hover:bg-[#E4405F] text-slate-700 hover:text-white border border-slate-200 text-xs font-bold transition-all shadow-xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>Instagram</span>
                  </a>
                  <a
                    href={COMPANY_CONFIG.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Shahji on YouTube"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 hover:bg-[#FF0000] text-slate-700 hover:text-white border border-slate-200 text-xs font-bold transition-all shadow-xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span>YouTube</span>
                  </a>
                  <a
                    href={COMPANY_CONFIG.socialLinks.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Shahji on TikTok"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 hover:bg-black text-slate-700 hover:text-[#00f2fe] border border-slate-200 text-xs font-bold transition-all shadow-xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                    <span>TikTok</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Booking Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-card space-y-6">
              <div className="space-y-2">
                <Badge variant="teal" icon={<Sparkles className="w-3.5 h-3.5" />}>
                  Online Request Form
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-black text-brand-dark-900">
                  Book an Inspection or Service
                </h3>
                <p className="text-sm text-slate-600">
                  Submit your details below and our Islamabad technical team will call to confirm timing and dispatch.
                </p>
              </div>

              <Suspense fallback={<div className="p-8 text-center text-slate-400">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Searchable Google Maps Section with Verified Location */}
      <MapSection
        title="Find Shahji on Google Maps"
        subtitle="Visit our shop in Islamabad or navigate turn-by-turn with Google Maps."
      />
    </div>
  );
}

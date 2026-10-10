import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowRight, Shield, Wrench, Zap, CheckCircle2 } from "lucide-react";
import { COMPANY_CONFIG } from "@/config/company";
import { formatPhoneLink } from "@/lib/utils";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Identity (5 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              className="inline-block bg-white p-3.5 rounded-2xl shadow-md border border-slate-700/60 transition-transform hover:scale-[1.02] shrink-0"
              aria-label="Shahji Electrical and Plumbing Services"
            >
              <div className="w-[185px] sm:w-[210px] shrink-0 flex items-center">
                <Image
                  src="/images/shahji-logo.jpg"
                  alt="Shahji Electrical and Plumbing Services Logo"
                  width={1024}
                  height={682}
                  className="w-full h-auto object-contain block shrink-0 select-none"
                  sizes="(max-width: 640px) 185px, 210px"
                />
              </div>
            </Link>

            <div>
              <h3 className="text-white font-bold text-base leading-snug tracking-wide">
                {COMPANY_CONFIG.legalName}
              </h3>
              <p className="text-xs text-brand-green-400 font-medium mt-1 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-brand-green-400" />
                Incorporated SMC-Private Limited Company
              </p>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Professional engineering solutions for high-end residential, commercial, and industrial facilities. Delivering precision electrical wiring, advanced plumbing diagnostics, and comprehensive building maintenance across Pakistan.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-brand-green-400" />
                Verified Technicians
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-brand-blue-400" />
                Quality Guaranteed
              </div>
            </div>

            {/* Official Social Media Channels */}
            <div className="pt-2 space-y-2.5">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <span>Follow Our Work:</span>
              </div>
              <div className="flex items-center gap-2.5 flex-wrap">
                {/* Facebook */}
                <a
                  href={COMPANY_CONFIG.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Shahji Electrical & Plumbing Services on Facebook"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center border border-slate-700/80 shadow-xs hover:scale-105 transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href={COMPANY_CONFIG.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Shahji Electrical & Plumbing Services on Instagram"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-slate-300 hover:text-white flex items-center justify-center border border-slate-700/80 shadow-xs hover:scale-105 transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsapp.number}?text=${encodeURIComponent(COMPANY_CONFIG.whatsapp.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Shahji Electrical & Plumbing Services on WhatsApp"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#25D366] text-slate-300 hover:text-white flex items-center justify-center border border-slate-700/80 shadow-xs hover:scale-105 transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href={COMPANY_CONFIG.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Shahji Electrical & Plumbing Services on YouTube"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#FF0000] text-slate-300 hover:text-white flex items-center justify-center border border-slate-700/80 shadow-xs hover:scale-105 transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href={COMPANY_CONFIG.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Shahji Electrical & Plumbing Services on TikTok"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-black text-slate-300 hover:text-[#00f2fe] flex items-center justify-center border border-slate-700/80 shadow-xs hover:scale-105 transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-brand-green-500 pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-green-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-green-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/plumbing" className="hover:text-brand-blue-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  Plumbing
                </Link>
              </li>
              <li>
                <Link href="/electrical" className="hover:text-brand-green-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  Electrical
                </Link>
              </li>
              <li>
                <Link href="/vlog" className="hover:text-brand-green-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  Vlog & Guides
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="hover:text-brand-green-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-green-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-brand-blue-500 pl-2.5">
              Service Divisions
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="group">
                <Link href="/plumbing" className="block p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800 transition-all border border-slate-700/50">
                  <div className="flex items-center justify-between font-semibold text-white group-hover:text-brand-blue-400">
                    <span className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-brand-blue-400" />
                      Plumbing Services
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">Pipe repair, leakages, pumps, sanitary</p>
                </Link>
              </li>
              <li className="group">
                <Link href="/electrical" className="block p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800 transition-all border border-slate-700/50">
                  <div className="flex items-center justify-between font-semibold text-white group-hover:text-brand-green-400">
                    <span className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-brand-green-400" />
                      Electrical Services
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">Wiring, DB panels, lighting, fault audit</p>
                </Link>
              </li>
              <li className="group">
                <Link href="/contact?service=Carpenter" className="block p-2 rounded-lg bg-slate-800/20 hover:bg-slate-800 transition-all border border-slate-700/30">
                  <div className="flex items-center justify-between font-semibold text-slate-200 group-hover:text-amber-400">
                    <span>Carpenter Services</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">Furniture repair, door fitting, woodwork</p>
                </Link>
              </li>
              <li className="group">
                <Link href="/contact?service=AC%20Services" className="block p-2 rounded-lg bg-slate-800/20 hover:bg-slate-800 transition-all border border-slate-700/30">
                  <div className="flex items-center justify-between font-semibold text-slate-200 group-hover:text-sky-400">
                    <span>AC Installation & Repair</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">Split AC servicing, cooling troubleshooting</p>
                </Link>
              </li>
              <li className="group">
                <Link href="/contact?service=Refrigerator" className="block p-2 rounded-lg bg-slate-800/20 hover:bg-slate-800 transition-all border border-slate-700/30">
                  <div className="flex items-center justify-between font-semibold text-slate-200 group-hover:text-teal-400">
                    <span>Refrigerator Services</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">Cooling diagnosis, parts, repair</p>
                </Link>
              </li>
              <li className="group">
                <Link href="/contact?service=Cleaning" className="block p-2 rounded-lg bg-slate-800/20 hover:bg-slate-800 transition-all border border-slate-700/30">
                  <div className="flex items-center justify-between font-semibold text-slate-200 group-hover:text-emerald-400">
                    <span>Cleaning Services</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">Home, office & deep sanitization</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hotlines (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-brand-green-500 pl-2.5">
              Contact & Support
            </h4>

            <div className="space-y-3 text-sm">
              <div className="space-y-2">
                <div className="text-xs text-slate-400 uppercase font-semibold">24/7 Phone Hotlines:</div>
                <a
                  href={formatPhoneLink(COMPANY_CONFIG.phones[0].value)}
                  className="flex items-center gap-2 text-white hover:text-brand-green-400 font-bold bg-slate-800/60 p-2.5 rounded-lg border border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-green-400 shrink-0" />
                  <span>{COMPANY_CONFIG.phones[0].display}</span>
                </a>
                <a
                  href={formatPhoneLink(COMPANY_CONFIG.phones[1].value)}
                  className="flex items-center gap-2 text-white hover:text-brand-blue-400 font-bold bg-slate-800/60 p-2.5 rounded-lg border border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-blue-400 shrink-0" />
                  <span>{COMPANY_CONFIG.phones[1].display}</span>
                </a>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-300 pt-1">
                <MapPin className="w-4 h-4 text-brand-green-400 shrink-0 mt-0.5" />
                <a
                  href={COMPANY_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  title="Open in Google Maps"
                >
                  {COMPANY_CONFIG.address}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Mail className="w-4 h-4 text-brand-blue-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_CONFIG.email}`}
                  className="hover:text-white transition-colors underline decoration-brand-blue-400 underline-offset-2"
                >
                  {COMPANY_CONFIG.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_CONFIG.businessHours.regular} ({COMPANY_CONFIG.businessHours.days})</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_CONFIG.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Engineering • Maintenance • Construction</span>
            <span>|</span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Support
            </Link>
            <Link href="/vlog" className="hover:text-slate-300 transition-colors">
              Knowledge Base
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

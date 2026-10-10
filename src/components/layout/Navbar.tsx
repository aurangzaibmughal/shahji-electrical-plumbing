"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ShieldCheck, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { COMPANY_CONFIG } from "@/config/company";
import { formatPhoneLink } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Announcement & Emergency Bar */}
      <div className="bg-brand-dark-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href={COMPANY_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-brand-green-400 font-semibold hover:text-white transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-brand-green-400" />
              <span>Islamabad, Pakistan</span>
            </a>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-brand-blue-400" />
              {COMPANY_CONFIG.businessHours.regular} ({COMPANY_CONFIG.businessHours.days})
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-slate-400">24/7 Emergency Dispatch:</span>
            <a
              href={formatPhoneLink(COMPANY_CONFIG.phones[0].value)}
              className="font-bold text-white hover:text-brand-green-400 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-brand-green-400" />
              {COMPANY_CONFIG.phones[0].display}
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={formatPhoneLink(COMPANY_CONFIG.phones[1].value)}
              className="font-bold text-white hover:text-brand-blue-400 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue-400" />
              {COMPANY_CONFIG.phones[1].display}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-md shadow-md border-b border-slate-200/90"
            : "bg-white border-b border-slate-100"
        } h-14 sm:h-16 flex items-center`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-4 sm:gap-6">
          {/* Left Group: Logo on Far Left + Navigation Links Immediately Beside It */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 min-w-0">
            {/* 1. Brand Logo on the far left - Clean & properly centered within 56px/64px navbar */}
            <Link
              href="/"
              className="flex items-center shrink-0 focus:outline-none focus:ring-2 focus:ring-brand-green-500 rounded-lg p-0.5 group"
              aria-label="Shahji Electrical & Plumbing Services Home"
            >
              <div className="h-9 sm:h-11 w-auto shrink-0 flex items-center">
                <Image
                  src="/images/shahji-logo.jpg"
                  alt="Shahji Electrical and Plumbing Services Logo"
                  width={1024}
                  height={682}
                  priority
                  className="h-full w-auto object-contain block shrink-0 select-none group-hover:scale-[1.02] transition-transform duration-200"
                  sizes="(max-width: 640px) 130px, 180px"
                />
              </div>
            </Link>

            {/* 2. Navigation links immediately to the right of the logo: Home, About, Services, Contact */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-lg text-xs lg:text-sm font-semibold transition-all duration-200 shrink-0 ${
                      isActive
                        ? "bg-slate-100 text-brand-dark-900 shadow-xs border border-slate-200/80 font-bold"
                        : "text-slate-700 hover:text-brand-dark-900 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Group: Contact Us CTA Button on the right side */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <Link
              href="/contact"
              className="bg-brand-green-500 hover:bg-brand-green-600 text-white text-xs lg:text-sm font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-md shadow-brand-green-500/20 hover:shadow-lg transition-all active:scale-[0.98] shrink-0"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={`https://wa.me/${COMPANY_CONFIG.whatsapp.number}?text=${encodeURIComponent(COMPANY_CONFIG.whatsapp.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp with Shahji Electrical & Plumbing Services"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white text-xs lg:text-sm font-bold px-3 py-2 rounded-xl flex items-center gap-1.5 shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all active:scale-[0.98] shrink-0"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Actions: Call Helpline + Hamburger Toggle */}
          <div className="flex items-center gap-2 md:hidden shrink-0">
            <a
              href={formatPhoneLink(COMPANY_CONFIG.phones[0].value)}
              className="bg-brand-green-500 text-white p-2 rounded-lg shadow-sm flex items-center justify-center shrink-0"
              aria-label="Call Shahji helpline"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-14 sm:top-16 bg-white border-b border-slate-200 shadow-2xl animate-in slide-in-from-top-3 duration-200 max-h-[calc(100vh-64px)] overflow-y-auto">
            {/* Mobile Drawer Header with Clear Logo */}
            <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
              <div className="w-[145px] shrink-0 flex items-center">
                <Image
                  src="/images/shahji-logo.jpg"
                  alt="Shahji Electrical and Plumbing Services Logo"
                  width={1024}
                  height={682}
                  className="w-full h-auto object-contain shrink-0"
                />
              </div>
              <span className="text-[11px] font-bold text-slate-600 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                Islamabad, PK
              </span>
            </div>

            <div className="p-4 space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between transition-colors ${
                      isActive
                        ? "bg-slate-100 text-brand-dark-900 font-bold border-l-4 border-brand-green-500"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="p-3 bg-slate-50 rounded-xl space-y-2">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Direct Phone Hotlines
                  </div>
                  <a
                    href={formatPhoneLink(COMPANY_CONFIG.phones[0].value)}
                    className="flex items-center justify-between text-brand-green-600 font-bold text-sm bg-white p-2.5 rounded-lg border border-slate-200 shadow-sm"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-brand-green-500" />
                      {COMPANY_CONFIG.phones[0].display}
                    </span>
                    <span className="text-xs bg-brand-green-50 text-brand-green-700 px-2 py-0.5 rounded">
                      Helpline 1
                    </span>
                  </a>
                  <a
                    href={formatPhoneLink(COMPANY_CONFIG.phones[1].value)}
                    className="flex items-center justify-between text-brand-blue-600 font-bold text-sm bg-white p-2.5 rounded-lg border border-slate-200 shadow-sm"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-brand-blue-500" />
                      {COMPANY_CONFIG.phones[1].display}
                    </span>
                    <span className="text-xs bg-brand-blue-50 text-brand-blue-700 px-2 py-0.5 rounded">
                      Helpline 2
                    </span>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <Link
                    href="/contact"
                    className="bg-brand-green-500 hover:bg-brand-green-600 text-white font-bold py-3 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md text-xs text-center"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={`https://wa.me/${COMPANY_CONFIG.whatsapp.number}?text=${encodeURIComponent(COMPANY_CONFIG.whatsapp.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md text-xs text-center"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

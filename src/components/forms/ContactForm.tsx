"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, PhoneCall, Loader2, Sparkles } from "lucide-react";
import { ContactFormData } from "@/lib/types";
import { COMPANY_CONFIG } from "@/config/company";
import { formatPhoneLink } from "@/lib/utils";

interface ContactFormProps {
  initialService?: string;
  initialNote?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialService, initialNote }) => {
  const searchParams = useSearchParams();
  const queryService = searchParams ? searchParams.get("service") : null;
  const queryNote = searchParams ? searchParams.get("note") : null;

  const resolvedService = (queryService || initialService || "Plumbing") as any;
  const resolvedNote = queryNote || initialNote || "";

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    serviceType: resolvedService,
    urgency: "Normal",
    address: "",
    message: resolvedNote ? `Required Service: ${resolvedNote}` : "",
  });

  useEffect(() => {
    if (queryService) {
      setFormData((prev) => ({
        ...prev,
        serviceType: queryService as any,
        message: queryNote ? `Required Service: ${queryNote}` : prev.message,
      }));
    } else if (queryNote) {
      setFormData((prev) => ({
        ...prev,
        message: `Required Service: ${queryNote}`,
      }));
    }
  }, [queryService, queryNote]);

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter a valid contact phone number.";
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 9) {
      newErrors.phone = "Please enter a valid phone number (at least 9-11 digits).";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe your maintenance or construction requirement.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real-world asynchronous dispatch
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-50/80 border-2 border-emerald-300 rounded-2xl p-8 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-brand-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-brand-green-500/30">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900">
            Request Received Successfully!
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our technical dispatch desk has logged your request for <span className="font-semibold text-brand-green-700">{formData.serviceType}</span>.
          </p>
        </div>

        <div className="p-4 bg-white rounded-xl border border-emerald-200 text-left max-w-md mx-auto space-y-2 text-xs text-slate-600 shadow-sm">
          <div className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-brand-green-600" />
            Next Steps:
          </div>
          <p>• A senior supervisor will review your problem within 15–30 minutes.</p>
          <p>• We will call you at <span className="font-bold text-slate-800">{formData.phone}</span> to confirm schedule & technician arrival.</p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={formatPhoneLink(COMPANY_CONFIG.phones[0].value)}
            className="w-full sm:w-auto bg-brand-green-500 hover:bg-brand-green-600 text-white font-bold text-sm px-6 py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <PhoneCall className="w-4 h-4" />
            Call Emergency Desk
          </a>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                phone: "",
                email: "",
                serviceType: "Plumbing",
                urgency: "Normal",
                address: "",
                message: "",
              });
            }}
            className="w-full sm:w-auto text-xs font-semibold text-slate-600 hover:text-slate-900 px-4 py-2"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Tariq Mehmood"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.name
                ? "border-red-400 focus:ring-red-300"
                : "border-slate-200 focus:border-brand-blue-500 focus:ring-brand-blue-200"
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3 h-3" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Contact Phone */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. 0348 1234567"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.phone
                ? "border-red-400 focus:ring-red-300"
                : "border-slate-200 focus:border-brand-green-500 focus:ring-brand-green-200"
            }`}
          />
          {errors.phone && (
            <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3 h-3" />
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email Address */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Email Address <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. yourname@domain.com"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.email
                ? "border-red-400 focus:ring-red-300"
                : "border-slate-200 focus:border-brand-blue-500 focus:ring-brand-blue-200"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3 h-3" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Service Type */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Required Service <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.serviceType}
            onChange={(e) => setFormData({ ...formData, serviceType: e.target.value as any })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-200 transition-all cursor-pointer font-medium"
          >
            <option value="Plumbing">Plumbing (Pipes, Leaks, Drains, Fixtures)</option>
            <option value="Electrical">Electrical (Wiring, Panels, Lighting, Repairs)</option>
            <option value="Carpenter">Carpenter Services (Woodwork, Furniture, Doors)</option>
            <option value="AC Services">AC Services (Installation, Repair, Servicing)</option>
            <option value="Refrigerator">Refrigerator Services (Troubleshooting & Repair)</option>
            <option value="Cleaning">Cleaning Services (Home, Office & Deep Cleaning)</option>
            <option value="Home Maintenance">General Home Maintenance & Waterproofing</option>
            <option value="Construction">Construction & MEP Conduit Work</option>
            <option value="Other">Other Maintenance Inquiries</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Urgency Level */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Urgency / Timeline
          </label>
          <select
            value={formData.urgency}
            onChange={(e) => setFormData({ ...formData, urgency: e.target.value as any })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-brand-green-500 focus:ring-2 focus:ring-brand-green-200 transition-all cursor-pointer font-medium"
          >
            <option value="Normal">Normal Schedule (Today / Tomorrow)</option>
            <option value="Urgent / Emergency">🚨 Urgent / Emergency (Immediate Dispatch)</option>
            <option value="Planned Project">Planned Project / Quotation</option>
          </select>
        </div>

        {/* Location / Area */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Property Area / Sector
          </label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            placeholder="e.g. DHA Phase 6 / Gulshan / Clifton"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-200 transition-all"
          />
        </div>
      </div>

      {/* Message Description */}
      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
          Problem Description <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please describe the issue in detail (e.g. kitchen sink water leaking into lower floor, main circuit breaker tripping repeatedly)..."
          className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
            errors.message
              ? "border-red-400 focus:ring-red-300"
              : "border-slate-200 focus:border-brand-blue-500 focus:ring-brand-blue-200"
          }`}
        />
        {errors.message && (
          <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
            <AlertCircle className="w-3 h-3" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-brand-green-500 to-brand-blue-500 hover:from-brand-green-600 hover:to-brand-blue-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-brand-blue-500/20 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed text-base"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Transmitting Request to Dispatch...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Submit Service Request</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-center text-slate-400">
        🔒 Your information is confidential and used solely for service scheduling and technician dispatch.
      </p>
    </form>
  );
};

import React from "react";
import Link from "next/link";
import { Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-card text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-green-50 text-brand-green-600 flex items-center justify-center mx-auto text-2xl font-black">
          404
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-brand-dark-900">
            Page Not Found
          </h2>
          <p className="text-sm text-slate-500">
            The page you are looking for does not exist or has been relocated.
          </p>
        </div>
        <div className="pt-2 flex flex-col gap-3">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center font-bold text-sm px-5 py-3 rounded-xl bg-brand-green-500 hover:bg-brand-green-600 text-white shadow-md transition-all gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/contact"
            className="w-full inline-flex items-center justify-center font-bold text-sm px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

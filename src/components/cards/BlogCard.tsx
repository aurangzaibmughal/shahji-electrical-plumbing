"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, Calendar, ArrowRight, User, X, ChevronRight } from "lucide-react";
import { VlogPost } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface BlogCardProps {
  post: VlogPost;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const getCategoryVariant = (cat: string) => {
    if (cat.includes("Plumbing")) return "blue";
    if (cat.includes("Electrical")) return "green";
    if (cat.includes("Maintenance")) return "teal";
    return "dark";
  };

  return (
    <>
      <Card
        accent={post.category.includes("Plumbing") ? "blue" : "green"}
        className={`flex flex-col h-full group bg-white border border-slate-200 hover:border-slate-300 ${
          featured ? "md:grid md:grid-cols-12 md:gap-6" : ""
        }`}
      >
        {/* Thumbnail Image */}
        <div
          className={`relative overflow-hidden bg-slate-100 ${
            featured ? "md:col-span-5 h-56 md:h-full" : "h-48 w-full"
          }`}
        >
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <Badge variant={getCategoryVariant(post.category)}>{post.category}</Badge>
          </div>
        </div>

        {/* Content */}
        <div
          className={`p-6 flex-1 flex flex-col justify-between ${
            featured ? "md:col-span-7" : ""
          }`}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark-900 group-hover:text-brand-blue-600 transition-colors leading-snug">
              {post.title}
            </h3>

            <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.author}</span>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="text-xs font-bold text-brand-green-600 hover:text-brand-green-700 flex items-center gap-1 group-hover:gap-1.5 transition-all focus:outline-none"
            >
              <span>Read Full Guide</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Card>

      {/* Interactive Modal for Reading Full Article */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative h-64 sm:h-80 w-full bg-slate-100">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full backdrop-blur-md shadow transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white space-y-2">
                <Badge variant={getCategoryVariant(post.category)}>{post.category}</Badge>
                <h2 className="text-xl sm:text-2xl font-bold leading-tight">{post.title}</h2>
                <div className="flex items-center gap-4 text-xs text-slate-300">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>By {post.author}</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                {post.content}
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Need Professional Assistance?</h4>
                  <p className="text-xs text-slate-500">Our certified engineers are available for diagnostics and repair.</p>
                </div>
                <Button
                  href="/contact"
                  variant="primary-green"
                  size="sm"
                  onClick={() => setModalOpen(false)}
                >
                  Contact Technician
                </Button>
              </div>

              <div className="text-right">
                <Button variant="ghost" size="sm" onClick={() => setModalOpen(false)}>
                  Close Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "blue" | "teal" | "dark" | "outline";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "green",
  className,
  icon,
}) => {
  const variantStyles = {
    green: "bg-brand-green-50 text-brand-green-700 border-brand-green-200",
    blue: "bg-brand-blue-50 text-brand-blue-700 border-brand-blue-200",
    teal: "bg-brand-teal-50 text-brand-teal-700 border-brand-teal-200",
    dark: "bg-slate-900 text-slate-100 border-slate-700",
    outline: "bg-transparent text-slate-700 border-slate-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border tracking-wide uppercase shadow-sm",
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      {children}
    </span>
  );
};

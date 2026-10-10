import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  accent?: "green" | "blue" | "teal" | "none";
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
  accent = "none",
  ...props
}) => {
  const accentStyles = {
    green: "border-t-4 border-t-brand-green-500",
    blue: "border-t-4 border-t-brand-blue-500",
    teal: "border-t-4 border-t-brand-teal-500",
    none: "",
  };

  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-slate-200/80 shadow-soft overflow-hidden transition-all duration-300",
        hoverEffect && "hover:shadow-card hover:-translate-y-1 hover:border-slate-300",
        accentStyles[accent],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

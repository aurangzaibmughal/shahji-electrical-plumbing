import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary-green" | "primary-blue" | "outline-green" | "outline-blue" | "dark" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isExternal?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  href,
  variant = "primary-green",
  size = "md",
  icon,
  iconPosition = "right",
  isExternal,
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 shadow-md",
  };

  const variantStyles = {
    "primary-green":
      "bg-brand-green-500 hover:bg-brand-green-600 text-white focus:ring-brand-green-400 shadow-brand-green-500/20 shadow-md hover:shadow-lg hover:shadow-brand-green-500/30",
    "primary-blue":
      "bg-brand-blue-500 hover:bg-brand-blue-600 text-white focus:ring-brand-blue-400 shadow-brand-blue-500/20 shadow-md hover:shadow-lg hover:shadow-brand-blue-500/30",
    "outline-green":
      "border-2 border-brand-green-500 text-brand-green-600 hover:bg-brand-green-50 focus:ring-brand-green-400",
    "outline-blue":
      "border-2 border-brand-blue-500 text-brand-blue-600 hover:bg-brand-blue-50 focus:ring-brand-blue-400",
    dark:
      "bg-brand-dark-800 hover:bg-brand-dark-900 text-white focus:ring-brand-dark-700 shadow-md",
    ghost:
      "text-brand-dark-700 hover:bg-slate-100 focus:ring-slate-300",
    white:
      "bg-white text-brand-dark-900 hover:bg-slate-50 shadow-md hover:shadow-lg focus:ring-white",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    if (isExternal || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {content}
    </button>
  );
};

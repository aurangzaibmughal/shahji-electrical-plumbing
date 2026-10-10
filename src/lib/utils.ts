import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneLink(phone: string): string {
  return `tel:${phone.replace(/[^0-9+]/g, "")}`;
}

export function formatWhatsAppLink(phone: string, message: string): string {
  const cleanNumber = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

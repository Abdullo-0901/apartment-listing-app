import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Merges class names and resolves Tailwind conflicts (clsx + twMerge)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

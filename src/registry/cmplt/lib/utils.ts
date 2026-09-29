import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes cleanly with conflict resolution.
 * Part of @cmplt/utils registry item.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

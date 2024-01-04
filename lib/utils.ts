import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function slugify(str: string | string[] | undefined | null) {
  if (typeof str !== 'string' || !str) {
    return ''; // Return an empty string or a default slug if necessary.
  }

  return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}
  export function unslugify(str: string) {
    return str.replace(/-/g, " ");
  }
  
  export function toTitleCase(str: string) {
    return str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
    );
  }
  export function formatTitleWithUnderscores(str: string | string[] | undefined | null) {
    if (str === undefined || str === null) {
      return ''; // or any default value you prefer
    }
  
    if (Array.isArray(str)) {
      // If it's an array, join the elements and then replace underscores
      return toTitleCase(str.join(' ').replace(/_/g, ' '));
    }
  
    // If it's a string, replace underscores
    return toTitleCase(str.replace(/_/g, ' '));
  }
  export function truncate(str: string, length: number) {
    return str.length > length ? `${str.substring(0, length)}...` : str;
  }
  
  export function toSentenceCase(str: string) {
    return str
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  }

  
  export function isMacOs() {
    if (typeof window === "undefined") return false
  
    return window.navigator.userAgent.includes("Mac")
  }


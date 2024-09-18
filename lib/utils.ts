import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timeAgo(date: Date): string {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) return `${interval} Years ago`;

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) return `${interval} Months ago`;

  interval = Math.floor(seconds / 86400);
  if (interval > 1) return `${interval} Days ago`;

  interval = Math.floor(seconds / 3600);
  if (interval > 1) return `${interval} Hours ago`;

  interval = Math.floor(seconds / 60);
  if (interval > 1) return `${interval} Minutes ago`;

  return `${Math.floor(seconds)} Seconds ago`;
}

export function extractFirstName(fullName: string): string {
  if (!fullName) return "";
  const names = fullName.trim().split(" ");
  return names[0];
}

export function extractNumericalValue(value: string): number {
  // Use a regular expression to extract digits and commas
  const numericalPart = value.match(/\d{1,3}(,\d{3})*(\.\d+)?/);

  if (numericalPart) {
    // Remove commas and convert to number
    return parseInt(numericalPart[0].replace(/,/g, ""), 10);
  }

  // Return 0 if no numerical part is found
  return 0;
}

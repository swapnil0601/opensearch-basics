import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const token = 'admin:admin'
export const encodedToken = Buffer.from(token).toString("base64")

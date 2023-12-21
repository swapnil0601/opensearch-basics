import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from 'axios';
import https from 'https';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const useInsecureAxios = () => {
  const insecureAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  const customAxios = axios.create({
    httpsAgent: insecureAgent,
  });

  return customAxios;
};



export const token = 'admin:admin'
export const encodedToken = Buffer.from(token).toString("base64")

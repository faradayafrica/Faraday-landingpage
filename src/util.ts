import Airtable from 'airtable';
import { clsx, type ClassValue } from 'clsx';
import { Roboto, Work_Sans } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

export const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-workSans',
});
export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-roboto',
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
}).base(process.env.NEXT_PUBLIC_BASE!);

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../styles/globals.scss';
import Navbar from '@/views/Navbar';
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Muhamad Abdul Azis',
  description: 'Portfolio website of Muhamad Abdul Azis created using NEXT.js and Typescript stack.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

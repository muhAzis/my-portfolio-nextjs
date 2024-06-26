import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../styles/globals.scss';
import { Analytics } from '@vercel/analytics/react';
import { getServerSession, Session } from 'next-auth';
import UserDataProvider from '@/contexts/UserDataContext';
import ContextWrapper from './ContextWrapper';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Muhamad Abdul Azis',
  description: 'Portfolio website of Muhamad Abdul Azis created using NEXT.js and Typescript stack.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
      </head>
      <body className={poppins.className}>
        <UserDataProvider session={session as Session}>
          <ContextWrapper>{children}</ContextWrapper>
        </UserDataProvider>
        <Analytics />
      </body>
    </html>
  );
}

import './globals.css';

import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { metaData } from '@/data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='uk'>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}

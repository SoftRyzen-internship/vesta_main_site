import './globals.css';

import { ReactNode } from 'react';
import { Metadata } from 'next';
import localFont from 'next/font/local';

import { clsx } from 'clsx';

import { metaData } from '@/data';
import { Footer } from '@/layout/Footer';


import { Header } from './layout/Header';

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
};

const KyivTypeSans = localFont({
  src: '../../public/fonts/KyivTypeSans-VarGX.ttf',
  weight: '700',
  display: 'swap',
  variable: '--font-kyiv',
});

const eUkraine = localFont({
  src: [
    {
      path: '../../public/fonts/e-Ukraine-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/e-Ukraine-UltraLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/e-Ukraine-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/e-Ukraine-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/e-Ukraine-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/e-Ukraine-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-eukraine',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='uk'>
      <body
        className={clsx(
          eUkraine.variable,
          KyivTypeSans.variable,
          'h-full min-h-screen',
        )}
      >
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

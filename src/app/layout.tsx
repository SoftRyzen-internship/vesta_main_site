import './globals.css';

import { ReactNode } from 'react';
import { Metadata } from 'next';
import localFont from 'next/font/local';

import { clsx } from 'clsx';

import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';

import { metaData } from '@/data';

import ogImage from './ogp.webp';

const BASE_APP_URL = process.env.NEXT_PUBLIC_BASE_APP_URL as string;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_APP_URL),
  title: metaData.title,
  description: metaData.description,
  keywords: metaData.keywords,
  icons: metaData.icons,
  alternates: {
    canonical: `${BASE_APP_URL}`,
  },
  openGraph: {
    type: 'website',
    url: BASE_APP_URL,
    title: metaData.ogTitle,
    description: metaData.ogDescription,
    siteName: metaData.ogSiteName,
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
        alt: metaData.image.alt,
      },
    ],
  },
  other: {
    'color-scheme': 'light',
  },
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
        className={clsx(eUkraine.variable, KyivTypeSans.variable, 'scroll')}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

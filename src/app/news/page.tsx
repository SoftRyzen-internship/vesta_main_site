import { Metadata } from 'next';

import { News } from '@/sections/pageNews/News';

import { metaData } from '@/data';

const BASE_APP_URL = process.env.NEXT_PUBLIC_BASE_APP_URL as string;

export const metadata: Metadata = {
  title: metaData.titleNews,
  description: metaData.descriptionNews,
  alternates: {
    canonical: `${BASE_APP_URL}/news`,
  },
};

export default function Page() {
  return <News />;
}

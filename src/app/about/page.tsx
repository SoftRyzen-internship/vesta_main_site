import { Metadata } from 'next';

import { Partners } from '@/sections/Partners';
import { Team } from '@/sections/Team';
import { HeroLess } from '@/sections/HeroLess';
import { Support } from '@/sections/pageAboutUs/Support';
import { News } from '@/sections/News';

import { metaData } from '@/data';

const BASE_APP_URL = process.env.BASE_APP_URL as string;

export const metadata: Metadata = {
  title: metaData.titleAbout,
  description: metaData.descriptionAbout,
  alternates: {
    canonical: `${BASE_APP_URL}/about`,
  },
}


export default function Page() {
  return (
    <>
      <HeroLess />
      <Support />
      <Team />
      <Partners />
      <News />
    </>
  );
}

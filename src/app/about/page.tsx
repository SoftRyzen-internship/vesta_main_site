import { Metadata } from 'next';

import { Partners } from '@/sections/Partners';
import { Team } from '@/sections/Team';
import { HeroLess } from '@/sections/HeroLess';
import { Support } from '@/sections/pageAboutUs/Support';
import { News } from '@/sections/News';

import { heroLessData, metaData } from '@/data';

const BASE_APP_URL = process.env.BASE_APP_URL as string;

export const metadata: Metadata = {
  title: metaData.titleAbout,
  description: metaData.descriptionAbout,
  alternates: {
    canonical: `${BASE_APP_URL}/about`,
  },
};

export default function Page() {
  const { toAboutId, titleAbout, descriptionAbout } = heroLessData;

  return (
    <>
      <HeroLess
        link={toAboutId}
        title={titleAbout}
        description={descriptionAbout}
      />
      <Support />
      <Team page='/about'/>
      <Partners page='/about'/>
      <News />
    </>
  );
}

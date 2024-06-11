import { Metadata } from 'next';

import { HeroLess } from '@/sections/HeroLess';
import { Projects } from '@/sections/pageProjects/Projects';

import { metaData } from '@/data';


const BASE_APP_URL = process.env.BASE_APP_URL as string;

export const metadata: Metadata = {
  title: metaData.titleProjects,
  description: metaData.descriptionProjects,
  alternates: {
    canonical: `${BASE_APP_URL}/projects`,
  },
}

export default function Page() {
  return (
    <>
      <HeroLess />
      <Projects />
    </>
  );
}

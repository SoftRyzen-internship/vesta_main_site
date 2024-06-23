import { Metadata } from 'next';

import { HeroLess } from '@/sections/HeroLess';
import { Projects } from '@/sections/pageProjects/Projects';

import { heroLessData, metaData } from '@/data';

const BASE_APP_URL = process.env.NEXT_PUBLIC_BASE_APP_URL as string;

export const metadata: Metadata = {
  title: metaData.titleProjects,
  description: metaData.descriptionProjects,
  alternates: {
    canonical: `${BASE_APP_URL}/projects`,
  },
};

export default function Page() {
  const { toProjectsId, titleProjects, descriptionProjects } = heroLessData;

  return (
    <>
      <HeroLess
        link={toProjectsId}
        title={titleProjects}
        description={descriptionProjects}
      />
      <Projects />
    </>
  );
}

import { Viewer } from '@/Viewer';

import { MainHero } from '@/sections/MainHero';
import { Donation } from '@/sections/Donation';
import { MainProjects } from '@/sections/MainProjects';
import { Contacts } from '@/sections/Contacts';
import { News } from '@/sections/News';
import { AboutOrganisation } from '@/sections/AboutOrganisation';

export default function Home() {
  return (
    <>
      <MainHero />
      <AboutOrganisation/>
      <MainProjects />
      <Donation />
      <Contacts />
      <News />

      <Viewer />
    </>
  );
}

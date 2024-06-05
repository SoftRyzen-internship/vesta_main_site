import { Viewer } from '@/Viewer';

import { MainHero } from '@/sections/MainHero';
import { Donation } from '@/sections/Donation';
import { MainProjects } from '@/sections/MainProjects';
import { Contacts } from '@/sections/Contacts';
import { News } from '@/sections/News';

export default function Home() {
  return (
    <>
      <MainHero />
      <MainProjects />
      <Donation />
      <Contacts />
      <News />

      <Viewer />
    </>
  );
}

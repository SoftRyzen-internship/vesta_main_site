import { Viewer } from '@/Viewer';

import { MainHero } from '@/sections/MainHero';
import { Donation } from '@/sections/Donation';
import { Partners } from '@/sections/Partners';
import { MainProjects } from '@/sections/MainProjects';
import { Contacts } from '@/sections/Contacts';

export default function Home() {
  return (
    <>
      <MainHero />
      <Donation />
      <Partners />
      <MainProjects />
      <Contacts />

      <Viewer />
    </>
  );
}

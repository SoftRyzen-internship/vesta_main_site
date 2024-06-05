import { Viewer } from '@/Viewer';

import { MainHero } from '@/sections/MainHero';
import { Donation } from '@/sections/Donation';
import { MainProjects } from '@/sections/MainProjects';
import { Contacts } from '@/sections/Contacts';
import { Partners } from '@/sections/Partners';

export default function Home() {
  return (
    <>
      <MainHero />
      <Donation />
      <MainProjects />
      <Contacts />
      <Partners path={'main'}/>

      <Viewer />
    </>
  );
}

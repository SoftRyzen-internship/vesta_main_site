import { Viewer } from '@/Viewer';

import { MainHero } from '@/sections/MainHero';
import { Donation } from '@/sections/Donation';
import { MainProjects } from '@/sections/MainProjects';
import { Services } from '@/sections/Services';

export default function Home() {
  return (
    <>
      <MainHero />
      <Donation />
      <MainProjects />
      <Services />
      <Viewer />
    </>
  );
}

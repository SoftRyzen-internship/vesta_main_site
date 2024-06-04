import { Viewer } from '@/Viewer';

import { MainHero } from '@/sections/MainHero';
import { Donation } from '@/sections/Donation';
import { MainProjects } from '@/sections/MainProjects';

export default function Home() {
  return (
    <>
      <MainHero />
      <Donation />
      <MainProjects />
      <Viewer />
    </>
  );
}

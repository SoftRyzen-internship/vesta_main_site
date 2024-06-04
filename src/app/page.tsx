import { Viewer } from '@/Viewer';

import { MainHero } from '@/sections/MainHero';
import { Donation } from '@/sections/Donation';
import { Partners } from '@/sections/Partners';

export default function Home() {
  return (
    <>
      <MainHero />
      <Donation />
      <Partners />
      <Viewer />
    </>
  );
}

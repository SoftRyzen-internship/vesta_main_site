import { Viewer } from '@/Viewer';

import { MainHero } from '@/sections/MainHero';
import { Donation } from '@/sections/Donation';

export default function Home() {
  return (
    <>
      <MainHero />
      <Donation />
      <Viewer />
    </>
  );
}

import { Viewer } from '@/Viewer';

import { MainHero } from '@/sections/MainHero';
import { Donation } from '@/sections/Donation/Donation';

export default function Home() {
  return (
    <>
      <MainHero />
      <Donation />
      <Viewer />
    </>
  );
}

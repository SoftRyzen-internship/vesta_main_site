import { Viewer } from '@/Viewer';

import { MainHero } from '@/sections/MainHero';
import { Donation } from '@/sections/Donation';
import { Contacts } from '@/sections/Contacts';

export default function Home() {
  return (
    <>
      <MainHero />
      <Donation />
      <Contacts />

      <Viewer />
    </>
  );
}

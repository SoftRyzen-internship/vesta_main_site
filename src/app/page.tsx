import { Viewer } from '@/Viewer';

import { MainHero } from '@/sections/MainHero';
import { Donation } from '@/sections/Donation';
import { Partners } from '@/sections/Partners';
import { Team } from '@/sections/Team';
import { MainProjects } from '@/sections/MainProjects';
import { Services } from '@/sections/Services';
import { Contacts } from '@/sections/Contacts';
import { Dwelling } from '@/sections/Dwelling';
import { News } from '@/sections/News';


export default function Home() {
  return (
    <>
      <MainHero />
      <MainProjects />
      <Services />
      <Donation />
      <Partners />
      <Team />
      <Contacts />
      <Dwelling />
      <News />

      <Viewer />
    </>
  );
}

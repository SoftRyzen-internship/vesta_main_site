import { HeroMain } from '@/sections/HeroMain';
import { AboutOrganisation } from '@/sections/AboutOrganisation';
import { Projects } from '@/sections/Projects';
import { Services } from '@/sections/Services';
import { Donation } from '@/sections/Donation';
import { Partners } from '@/sections/Partners';
import { Team } from '@/sections/Team';
import { Contacts } from '@/sections/Contacts';
import { Dwelling } from '@/sections/Dwelling';
// import { News } from '@/sections/News';

export default function Home() {
  return (
    <>
      <HeroMain />
      <AboutOrganisation />
      <Projects />
      <Services />
      <Donation />
      <Partners />
      <Team />
      <Contacts />
      <Dwelling />
      {/* <News /> */}
    </>
  );
}

import { Partners } from '@/sections/Partners';
import { Team } from '@/sections/Team';
import { HeroLess } from '@/sections/HeroLess';
import { Support } from '@/sections/pageAboutUs/Support';
import { News } from '@/sections/News';

export default function Page() {
  return (
    <>
      <HeroLess />
      <Support />
      <Team />
      <Partners />
      <News />
    </>
  );
}

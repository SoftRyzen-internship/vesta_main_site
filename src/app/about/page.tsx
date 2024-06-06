
import { Partners } from '@/sections/Partners';
import { Team } from '@/sections/Team';
import { HeroAboutPage } from '@/sections/HeroAboutPage';
import { Support } from '@/sections/Support';
import { News } from '@/sections/News';

export default function Page() {
  return (
    <>
      <HeroAboutPage/>
      <Support />
      <Partners />
      <Team />
      <News />
    </>
  );
}

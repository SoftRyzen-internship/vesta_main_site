import { Viewer } from '@/Viewer';
import { MainHero } from '@/sections/MainHero';
import { Services } from '@/sections/Services';

export default function Home() {
  return (
    <>
      <MainHero />
      <Services />
      <Viewer />
    </>
  );
}

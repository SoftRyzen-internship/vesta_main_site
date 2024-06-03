import { Viewer } from '@/Viewer';
import { MainHero } from '@/sections/MainHero';
import { MainProjects } from '@/sections/MainProjects';

export default function Home() {
  return (
    <>
      <MainHero />
      <MainProjects />
      <Viewer />
    </>
  );
}

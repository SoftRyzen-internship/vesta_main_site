'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';

import { CardsList } from '@/components/common/CardsList';
import { TeamCard } from '@/components/common/TeamCard';

import { useWindowSize } from '@/utils';
import { teamCard, teamData } from '@/data';

export const Team: FC = () => {
  const pathName = usePathname();
  const sizes = useWindowSize();
  const numberOfCards =
    pathName === '/about' ? 24 : sizes.width && sizes.width >= 768 ? 5 : 3;

  return (
    <section id='teams'>
      <div className='container pt-[60px] md:pt-[100px] xl:pt-[130px]'>
        <div className='mb-[40px] flex  flex-col gap-[24px] md:mb-[50px] xl:mb-[60px] xl:flex-row xl:justify-between'>
          <h2 className='xl:text-h2_desc font-kyiv text-h2 md:text-h2_tab'>
            {teamData.title}
          </h2>
        </div>
        <CardsList
          items={teamCard.slice(0, numberOfCards)}
          CardComponent={TeamCard}
          path={pathName}
          section='team'
        />
      </div>
    </section>
  );
};

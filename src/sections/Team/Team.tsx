'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';

import { clsx } from 'clsx';

import { CardsList } from '@/components/common/CardsList';
import { TeamCard } from '@/components/common/TeamCard';

import { TeamProps } from './Team.types';

import { teamData } from '@/data';

export const Team: FC<TeamProps> = ({ team }) => {
  const pathName = usePathname();

  return (
    <section
      id='team'
      className={clsx(
        pathName === '/about' && 'smOnly:pb-0',
        pathName !== '/about' && 'pb-[60px] md:pb-[100px] xl:pb-[130px]',
        'md:pt-[100px] xl:pt-[130px]',
      )}
    >
      <div className='container'>
        <div className='mb-[40px] flex  flex-col gap-[24px] md:mb-[50px] xl:mb-[60px] xl:flex-row xl:justify-between'>
          <h2 className='xl:text-h2_desc font-kyiv text-h2 md:text-h2_tab'>
            {teamData.title}
          </h2>
        </div>
        <CardsList
          items={team}
          CardComponent={TeamCard}
          path={pathName}
          section='team'
        />
      </div>
    </section>
  );
};

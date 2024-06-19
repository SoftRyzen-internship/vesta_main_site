'use client'
import { FC, useState, useEffect} from 'react';

import { usePathname } from 'next/navigation';

import { clsx } from 'clsx';

import { CardsList } from '@/components/common/CardsList';
import { TeamCard } from '@/components/common/TeamCard';

import { TeamProps } from './Team.types';

import { useWindowSize } from '@/utils';

import { teamData } from '@/data';

export const Team: FC<TeamProps> = ({team}) => {
  const pathName = usePathname();
  const {width} = useWindowSize();
  const isDesktop = width && width > 1279 ? true : false;
const [teamForRender, setTeam] = useState(team)
useEffect(() => {
  if (!isDesktop && pathName !== '/about') {
    setTeam(team.slice(0, 6));
  } else {
    setTeam(team);
  }
}, [isDesktop, pathName, team]);

  return (
    <section
      id='team'
      className={clsx(
        pathName === '/about' && 'smOnly:pb-0',
        pathName !== '/about' && 'md:pb-[100px] xl:pb-[130px]',
        'smOnly:pb-[60px] md:pt-[100px] xl:pt-[130px]',
      )}
    >
      <div className='container'>
        <div className='mb-[40px] flex  flex-col gap-[24px] md:mb-[50px] xl:mb-[60px] xl:flex-row xl:justify-between'>
          <h2 className='xl:text-h2_desc font-kyiv text-h2 md:text-h2_tab'>
            {teamData.title}
          </h2>
        </div>
        <CardsList
          items={teamForRender}
          CardComponent={TeamCard}
          path={pathName}
          section='team'
        />
      </div>
    </section>
  );
};

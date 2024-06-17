'use client';

import { FC, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { clsx } from 'clsx';

import { CardsList } from '@/components/common/CardsList';
import { TeamCard } from '@/components/common/TeamCard';

import { ITeamData, IDataAttributes } from './Team.types';

import { fetchData } from '@/actions/fetchData';
import { getTeam } from '@/graphql/teamSchema';

import { useWindowSize } from '@/utils';

import { teamData } from '@/data';

export const Team: FC = () => {
  const pathName = usePathname();
  const sizes = useWindowSize();
  let numberOfCards;
  const [team, setTeam] = useState<IDataAttributes[]>([]);
  if (pathName === '/about') {
    numberOfCards = 24;
  } else if (sizes.width && sizes.width >= 768) {
    numberOfCards = 5;
  } else {
    numberOfCards = 3;
  }

  useEffect(() => {
    const fetchPartnersData = async () => {
      const data: ITeamData = await fetchData<ITeamData>(getTeam(1, numberOfCards));
      setTeam(data.team.data);
    };
    fetchPartnersData();
  }, []);

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
          items={team}
          CardComponent={TeamCard}
          path={pathName}
          section='team'
        />
      </div>
    </section>
  );
};

import { FC} from 'react';

import { clsx } from 'clsx';

import { CardsList } from '@/components/common/CardsList';
import { TeamCard } from '@/components/common/TeamCard';

import { ITeamData, TeamProps } from './Team.types';

import { fetchData } from '@/actions/fetchData';
import { getTeam } from '@/graphql/teamSchema';

import { teamData } from '@/data';

export const Team: FC<TeamProps> = async({page}) => {
 let team;
  if (page === '/about') {
    const data: ITeamData = await fetchData<ITeamData>(
      getTeam(),
    );
    team = data.team.data.attributes.itemTeam;
  } else {
    const data: ITeamData = await fetchData<ITeamData>(
      getTeam(0, 4),
    );
    team = data.team.data.attributes.itemTeam;
  }
  return (
    <section
      id='team'
      className={clsx(
        page === '/about' && 'smOnly:pb-0',
        page !== '/about' && 'md:pb-[100px] xl:pb-[130px]',
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
          path={page}
          section='team'
        />
      </div>
    </section>
  );
};

import { Metadata } from 'next';

import { Partners } from '@/sections/Partners';
import { Team } from '@/sections/Team';
import { HeroLess } from '@/sections/HeroLess';
import { Support } from '@/sections/pageAboutUs/Support';
import { News } from '@/sections/News';

import { heroLessData, metaData } from '@/data';

import { fetchData } from '@/actions/fetchData';
import { IPartnersData } from '@/sections/Partners/Partners.types';
import { getPartner } from '@/graphql/partnerSchema';

import { ITeamData } from '@/sections/Team/Team.types';
import { getTeam } from '@/graphql/teamSchema';


const BASE_APP_URL = process.env.BASE_APP_URL as string;

export const metadata: Metadata = {
  title: metaData.titleAbout,
  description: metaData.descriptionAbout,
  alternates: {
    canonical: `${BASE_APP_URL}/about`,
  },
};

export default async function Page() {
  const { toAboutId, titleAbout, descriptionAbout } = heroLessData;

  const dataAllPartners: IPartnersData = await fetchData<IPartnersData>(getPartner);
  const partners = dataAllPartners.partner?.data?.attributes?.item ?? [];

  const dataAllTeam: ITeamData = await fetchData<ITeamData>(getTeam);
  const team = dataAllTeam.team?.data?.attributes?.itemTeam ?? [];

  return (
    <>
      <HeroLess
        link={toAboutId}
        title={titleAbout}
        description={descriptionAbout}
      />
      <Support />
      <Team team={team}/>
      <Partners partners={partners}/>
      <News />
    </>
  );
}

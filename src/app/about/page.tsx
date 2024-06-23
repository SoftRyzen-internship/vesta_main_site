import { Metadata } from 'next';

import { Partners } from '@/sections/Partners';
import { Team } from '@/sections/Team';
import { HeroLess } from '@/sections/HeroLess';
import { Support } from '@/sections/pageAboutUs/Support';
import { News } from '@/sections/News';

import { IPartnersData } from '@/sections/Partners/Partners.types';
import { ITeamData } from '@/sections/Team/Team.types';

import { fetchData } from '@/actions/fetchData';
import { getTeamPagination } from '@/graphql/teamPaginationSchema';
import { getPartnersPagination } from '@/graphql/partnersPaginationSchema';

import { heroLessData, metaData } from '@/data';

const BASE_APP_URL = process.env.NEXT_PUBLIC_BASE_APP_URL as string;

export const metadata: Metadata = {
  title: metaData.titleAbout,
  description: metaData.descriptionAbout,
  alternates: {
    canonical: `${BASE_APP_URL}/about`,
  },
};

export default async function Page() {
  const { toAboutId, titleAbout, descriptionAbout } = heroLessData;

  const dataPartners: IPartnersData = await fetchData<IPartnersData>(
    getPartnersPagination(0, -1),
  );
  const dataTeam: ITeamData = await fetchData<ITeamData>(
    getTeamPagination(0, -1),
  );
  const partners = dataPartners.partner?.data?.attributes?.item ?? [];
  const team = dataTeam.team?.data?.attributes?.itemTeam ?? [];

  return (
    <>
      <HeroLess
        link={toAboutId}
        title={titleAbout}
        description={descriptionAbout}
      />
      <Support />
      <Team team={team} />
      <Partners partners={partners} />
      <News />
    </>
  );
}

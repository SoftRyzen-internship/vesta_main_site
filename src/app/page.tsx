import { HeroMain } from '@/sections/HeroMain';
import { AboutOrganisation } from '@/sections/AboutOrganisation';
import { Projects } from '@/sections/Projects';
import { Services } from '@/sections/Services';
import { Donation } from '@/sections/Donation';
import { Partners } from '@/sections/Partners';
import { Team } from '@/sections/Team';
import { Contacts } from '@/sections/Contacts';
import { Dwelling } from '@/sections/Dwelling';
import { News } from '@/sections/News';

import { fetchData } from '@/actions/fetchData';
import { IPartnersData } from '@/sections/Partners/Partners.types';
import { getPartnersPagination } from '@/graphql/partnersPaginationSchema';

import { ITeamData } from '@/sections/Team/Team.types';
import { getTeamPagination } from '@/graphql/teamPaginationSchema';

export default async function Home() {
  const dataPartners: IPartnersData = await fetchData<IPartnersData>(
    getPartnersPagination(0, 4),
  );
  const partners = dataPartners.partner?.data?.attributes?.item ?? [];

  const dataTeam: ITeamData = await fetchData<ITeamData>(
    getTeamPagination(0, 5),
  );
  const team = dataTeam.team?.data?.attributes?.itemTeam ?? [];

  return (
    <>
      <HeroMain />
      <AboutOrganisation />
      <Projects />
      <Services />
      <Donation />
      <Partners partners={partners}/>
      <Team team={team}/>
      <Contacts />
      <Dwelling />
      <News />
    </>
  );
}

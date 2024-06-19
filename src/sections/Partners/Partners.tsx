import { FC} from 'react';

import { CardsList } from '@/components/common/CardsList';
import { PartnerCard } from '@/components/common/PartnerCard';
import { LinkButton } from '@/components/ui/LinkButton';

import { IPartnersData, PartnersProps } from './Partners.types';

import { fetchData } from '@/actions/fetchData';
import { getPartners } from '@/graphql/partnerSchema';
import { partnersData } from '@/data';

export const Partners: FC<PartnersProps> = async({page}) => {
  let partners
  if (page === '/about') {
    const data: IPartnersData = await fetchData<IPartnersData>(getPartners());
    partners = data.partner.data.attributes.item;
  } else {
    const data: IPartnersData = await fetchData<IPartnersData>(getPartners(0, 4));
    partners = data.partner.data.attributes.item;
  }

  return (
    <section id='partners' className='pt-[60px] md:pt-[100px] xl:pt-[130px]'>
      <div className='container'>
        <div className='mb-[40px] flex flex-col gap-[24px] md:mb-[50px] xl:mb-[60px] xl:flex-row xl:justify-between'>
          <h2 className='xl:text-h2_desc font-kyiv text-h2 md:text-h2_tab'>
            {partnersData.title}
          </h2>
          {page !== '/about' && (
            <LinkButton
              variant='secondary'
              href='/about#partners'
              className='h-[28px] w-[125px]'
            >
              {partnersData.button}
            </LinkButton>
          )}
        </div>
        <CardsList
          items={partners}
          CardComponent={PartnerCard}
          path={page}
          section='partners'
        />
      </div>
    </section>
  );
};

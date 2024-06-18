'use client';

import { FC, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { CardsList } from '@/components/common/CardsList';
import { PartnerCard } from '@/components/common/PartnerCard';
import { LinkButton } from '@/components/ui/LinkButton';

import { IPartnersData, IItem } from './Partners.types';

import { fetchData } from '@/actions/fetchData';
import { getPartners } from '@/graphql/partnerSchema';
import { useWindowSize } from '@/utils';
import { partnersData } from '@/data';

export const Partners: FC = () => {
  const pathName = usePathname();
  const sizes = useWindowSize();
  const [partners, setPartners] = useState<IItem[]>([]);
  const [numberOfCards, setNumberOfCards] = useState(4)
  useEffect(() => {
    if (pathName === '/about') {
      setNumberOfCards(12);
    } else if (sizes.width && sizes.width >= 1280) {
      setNumberOfCards(4);
    } else {
      setNumberOfCards(3);
    }
  }, [pathName, sizes.width]);

  useEffect(() => {
    const fetchPartnersData = async () => {
      const data: IPartnersData = await fetchData<IPartnersData>(getPartners(0, numberOfCards));
      setPartners(data.partner.data.attributes.item);
    };
    fetchPartnersData();
  }, [numberOfCards]);
  return (
    <section id='partners' className='pt-[60px] md:pt-[100px] xl:pt-[130px]'>
      <div className='container'>
        <div className='mb-[40px] flex flex-col gap-[24px] md:mb-[50px] xl:mb-[60px] xl:flex-row xl:justify-between'>
          <h2 className='xl:text-h2_desc font-kyiv text-h2 md:text-h2_tab'>
            {partnersData.title}
          </h2>
          {pathName !== '/about' && (
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
          path={pathName}
          section='partners'
        />
      </div>
    </section>
  );
};

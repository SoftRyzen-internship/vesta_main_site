'use client';

import { FC , useState} from 'react';
import { usePathname } from 'next/navigation';

import { CardsList } from '@/components/common/CardsList';
import { PartnerCard } from '@/components/common/PartnerCard';
import { LinkButton } from '@/components/ui/LinkButton';

import { PartnersProps } from './Partners.types';

import { useWindowSize } from '@/utils';
import { partnersData } from '@/data';

export const Partners: FC<PartnersProps> = ({partners}) => {
  const pathName = usePathname();
  const {width} = useWindowSize();
  const isDesktop = width && width > 1279 ? true : false;
const [partnersForRender, setPartners] = useState(partners)
   if (!isDesktop && pathName !== '/about') {
    setPartners(partners.slice(0, 4));
  }
 
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
          items={partnersForRender}
          CardComponent={PartnerCard}
          path={pathName}
          section='partners'
        />
      </div>
    </section>
  );
};

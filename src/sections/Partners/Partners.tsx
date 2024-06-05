'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';

import { CardsList } from '@/components/common/CardsList';
import { PartnerCard } from '@/components/common/PartnerCard';
import { LinkButton } from '@/components/ui/LinkButton';

import { useWindowSize } from '@/utils/getWindowSize';
import { partners, partnersSection } from '@/data';

export const Partners: FC = () => {
  const pathName = usePathname();
  const sizes = useWindowSize();
  const numberOfCards =
    pathName === '/about' ? 12 : sizes.width && sizes.width >= 1280 ? 4 : 3;

  return (
    <section id='partners'>
      <div className='container pt-[60px] md:pt-[100px] xl:pt-[130px]'>
        <div className='mb-[40px] flex  flex-col gap-[24px] md:mb-[50px] xl:mb-[60px] xl:flex-row xl:justify-between'>
          <h2 className='xl:text-h2_desc text-h2 md:text-h2_tab'>
            {partnersSection.title}
          </h2>
          {pathName !== '/about' && (
            <LinkButton
              variant='secondary'
              href='/about#partners'
              className='h-[28px] w-[125px]'
            >
              {partnersSection.button}
            </LinkButton>
          )}
        </div>
        <CardsList
          items={partners.slice(0, numberOfCards)}
          CardComponent={PartnerCard}
        />
      </div>
    </section>
  );
};

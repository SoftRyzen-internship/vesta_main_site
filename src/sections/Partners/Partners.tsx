'use client';

import { FC, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { NoDataTemplate } from '@/sections/NoDataTemplate';
import { CardsList } from '@/components/common/CardsList';
import { PartnerCard } from '@/components/common/PartnerCard';
import { LinkButton } from '@/components/ui/LinkButton';

import { PartnersProps } from './Partners.types';

import { partnersData, templateNoData } from '@/data';

import { useWindowSize } from '@/utils';

export const Partners: FC<PartnersProps> = ({ partners }) => {
  const [partnersForRender, setPartners] = useState(partners);
  const { width } = useWindowSize();
  const pathName = usePathname();
  const isDesktop = width && width > 1279 ? true : false;
  const { sectionPartners, titlePartners, descriptionPartners } =
    templateNoData;

  useEffect(() => {
    if (!isDesktop && pathName !== '/about') {
      setPartners(partners.slice(0, 3));
    } else {
      setPartners(partners);
    }
  }, [isDesktop, pathName, partners]);

  return (
    <>
      {partners.length === 0 ? (
        <NoDataTemplate
          sectionTitle={sectionPartners}
          title={titlePartners}
          description={descriptionPartners}
        />
      ) : (
        <section
          id='partners'
          className='pt-[60px] md:pt-[100px] xl:pt-[130px]'
        >
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
      )}
    </>
  );
};

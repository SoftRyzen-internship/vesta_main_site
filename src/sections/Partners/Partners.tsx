'use client';
import { FC, useEffect, useState } from 'react';

import { PartnerCard } from '@/components/common/PartnerCard';
import { LinkButton } from '@/components/ui/LinkButton';

import { partnersData } from '@/data';

import { PartnersDataListProps, PartnersPathProps } from './Partners.types';

export const Partners: FC<PartnersPathProps>= ({ path }) => {
  const [showingCardsPartners, setShowingCardsPartners] = useState<PartnersDataListProps[]>([]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (path === 'about') {
        setShowingCardsPartners(partnersData.partnersDataList);
      } else if (path === 'main'){
        if (width >= 1280) {  
          setShowingCardsPartners(partnersData.partnersDataList.slice(0, 4));
        } else if (width >= 768) {
          setShowingCardsPartners(partnersData.partnersDataList.slice(0, 3));
        } else {
          setShowingCardsPartners(partnersData.partnersDataList.slice(0, 3));
        }
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [path]);

  return (
    <section id="partners" className='pt-[60px] md:pt-[100px] xl:pt-[130px]'>
      <div className='container flex flex-col gap-[40px] md:gap-[50px] transition'>
        <div className='flex flex-col gap-5 xl:flex-row xl:gap-0 xl:justify-between xl:items-center'>
          <h3 className='text-h2 font-bold md:text-h2_tab xl:text-h2_desk'>
            {partnersData.title}
          </h3>
          {path !== 'about' && (
            <LinkButton
              href={partnersData.link}
              variant='secondary'
              className='w-[125px] h-[29px]'
            >
              {partnersData.textLink}
            </LinkButton>
          )}
        </div>
        <div className='flex overflow-x-auto gap-[10px] md:flex-wrap md:justify-center md:gap-[24px] xl:gap-[25px]'>
          {showingCardsPartners.map(partner => (
            <PartnerCard
              key={partner.id}
              img={partner.img}
              name={partner.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

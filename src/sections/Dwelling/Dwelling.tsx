import { FC } from 'react';

import { DwellingCard } from '@/components/common/DwellingCard';
import { LinkButton } from '@/components/ui/LinkButton';

import { dwellings, dwellingData } from '@/data';

export const Dwelling: FC = () => {
  return (
    <section className='pt-[60px] md:pt-[100px] xl:pt-[130px]'>
      <div className='container  flex flex-col xl:flex-row xl:gap-[145px] transition'>
      <div className=' flex flex-col gap-10 mb-[60px] w-[328px] md:w-[476px] xl:mb-0 transition'>
        <h3 className='text-h3 font-kyiv font-bold md:text-h3_tab xl:text-h3_desk'>{dwellingData.title}</h3>
        <LinkButton
          href={dwellingData.hrefLink}
          
          className='w-60'
        >{dwellingData.requestButton}</LinkButton>
      </div>
      <DwellingCard city={dwellings.city} contacts={dwellings.contacts} />
      </div>
    </section>
  );
};
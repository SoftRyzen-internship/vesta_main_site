import { FC } from 'react';

import { dwellings, dwellingSection } from '@/data';

import { DwellingCard } from '@/components/common/DwellingCard';
import { LinkButton } from '@/components/ui/LinkButton';

export const Dwelling: FC = () => {
  return (
    <section className=' flex flex-col xl:flex-row xl:gap-[145px] transition'>
      <div className='flex flex-col gap-10 mb-[60px] w-[328px] md:w-[476px] xl:mb-0 transition'>
        <h3 className='text-h3 font-kyiv font-bold md:text-h3_tab xl:text-h3_desk transition'>{dwellingSection.title}</h3>
        <LinkButton
          href={dwellingSection.hrefLink}
          text={dwellingSection.requestButton}
          className='w-60'
        />
      </div>
      <DwellingCard city={dwellings.city} contacts={dwellings.contacts} />
    </section>
  );
};

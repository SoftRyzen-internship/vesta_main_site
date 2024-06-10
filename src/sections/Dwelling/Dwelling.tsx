import { FC } from 'react';

import { DwellingCard } from '@/components/common/DwellingCard';
import { LinkButton } from '@/components/ui/LinkButton';

import { dwellings, dwellingData } from '@/data';

export const Dwelling: FC = () => {
  return (
    <section className='pt-[60px] md:pt-[100px] xl:pt-[130px]'>
      <div className='container  flex flex-col transition xl:flex-row xl:gap-[145px]'>
        <div className=' mb-[60px] flex w-[328px] flex-col gap-10 transition md:w-[476px] xl:mb-0'>
          <h3 className='font-kyiv text-h3 font-bold md:text-h3_tab xl:text-h3_desk'>
            {dwellingData.title}
          </h3>
          <LinkButton href={dwellingData.hrefLink} className='w-60'>
            {dwellingData.requestButton}
          </LinkButton>
        </div>
        <ul className='flex flex-col gap-[30px]'>
          {dwellings.map(({ id, city, contacts }) => (
            <li key={id}>
              <DwellingCard city={city} contacts={contacts} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

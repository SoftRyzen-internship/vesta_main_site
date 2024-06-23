import { FC } from 'react';

import { NoDataTemplate } from '@/sections/NoDataTemplate';
import { DwellingCard } from '@/components/common/DwellingCard';
import { LinkButton } from '@/components/ui/LinkButton';

import { dwellingData, templateNoData } from '@/data';

import { fetchData } from '@/actions/fetchData';
import { getLocation } from '@/graphql/locationSchema';

import { DwellingsResponse } from '@/sections/Dwelling/Dwellings.types';

import { getSpecialWords } from '@/utils';

export const Dwelling: FC = async () => {
  const data: DwellingsResponse =
    await fetchData<DwellingsResponse>(getLocation);
  const locationItems = data.location.data.attributes.locationItem;

  const { titleDwellings, descriptionDwellings } = templateNoData;

  return (
    <section className='pt-[60px] md:pt-[100px] xl:pt-[130px]'>
      <div className='container  flex flex-col transition xl:flex-row xl:gap-[145px]'>
        <div className=' mb-[60px] flex w-[328px] flex-col gap-10 transition md:w-[476px] xl:mb-0'>
          <h3 className='font-kyiv text-h3 font-bold md:text-h3_tab xl:text-h3_desk'>
            {getSpecialWords(dwellingData.title, 0, 3, { end: true })}
            <span className='bg-yellowLight'>
              {getSpecialWords(dwellingData.title, 3, 2)}
            </span>
          </h3>
          <LinkButton href={dwellingData.hrefLink} className='w-60'>
            {dwellingData.requestButton}
          </LinkButton>
        </div>
        {locationItems.length > 0 ? (
          <ul className='flex flex-col gap-[30px]'>
            {locationItems.map(item => (
              <li key={item.id}>
                <DwellingCard item={item} />
              </li>
            ))}
          </ul>
        ) : (
          <NoDataTemplate
            title={titleDwellings}
            description={descriptionDwellings}
            className='pb-0 pt-0 md:pb-0 md:pt-0 xl:pb-0 xl:pt-0'
          />
        )}
      </div>
    </section>
  );
};

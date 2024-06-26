import { FC } from 'react';
import Link from 'next/link';

import { DwellingCardProps } from './DwellingCard.types';

import { dwellings } from '@/data';

export const DwellingCard: FC<DwellingCardProps> = ({ item }) => {
  return (
    <div className='flex h-[84px] w-full items-start gap-[38px] border-b-[0.50px] border-solid border-darkGrey pb-[30px] md:gap-[49px] xl:w-[595px]'>
      <h3 className='w-[115px] text-body2 font-medium text-green md:w-[261px] md:text-body2_tab xl:text-body2_desk'>
        {item.city}
      </h3>
      <ul className='flex flex-col gap-[10px] leading-none first:mb-[10px]'>
        <li>
          <Link
            href={item.locationLink}
            target={dwellings.target}
            rel={dwellings.rel}
            className='paragraph hover:text-hoverDark focus:text-orangeText'
          >
            {item.address}
          </Link>
        </li>
        <li>
          <Link
            href={`tel:${item.phone.replace(/[\s()-]/g, '')}`}
            rel={dwellings.rel}
            className='paragraph hover:text-hoverDark focus:text-orangeText'
          >
            {item.phone}
          </Link>
        </li>
      </ul>
    </div>
  );
};

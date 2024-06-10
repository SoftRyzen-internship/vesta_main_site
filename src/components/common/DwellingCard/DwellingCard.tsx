import { FC } from 'react';
import Link from 'next/link';

import { IDwellingCardProps } from './DwellingCard.types';

export const DwellingCard: FC<IDwellingCardProps> = ({ city, contacts }) => {
  return (
    <div className='flex h-[84px] w-full items-start gap-[38px] border-b-[0.50px] border-solid border-darkGrey pb-[30px] md:gap-[49px] xl:w-[595px]'>
      <h3 className='w-[115px] text-body2 font-medium text-green md:w-[261px] md:text-body2_tab xl:text-body2_desk'>
        {city}
      </h3>
      <ul>
        {contacts.map(({ link, text, target, rel }, index) => (
          <li key={index} className='leading-none first:mb-[10px]'>
            <Link
              href={link}
              target={target}
              rel={rel}
              className='paragraph hover:text-hoverDark focus:text-orangeText'
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

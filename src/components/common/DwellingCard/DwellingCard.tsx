import { FC } from 'react';
import Link from 'next/link';

import { IDwellingCardProps } from './DwellingCard.types';

export const DwellingCard: FC<IDwellingCardProps> = ({ city, contacts }) => {
  return (
    <div className='border-darkGrey flex w-full items-start gap-[38px] border-b-[0.50px] border-solid pb-[30px] md:gap-[49px] xl:w-[595px]'>
      <h3 className='text-body2 text-green md:text-body2_tab xl:text-body2_desk w-[115px] font-medium md:w-[261px]'>
        {city}
      </h3>
      <ul>
        {contacts.map(({ link, text, target, rel }, index) => (
          <li key={index} className=' leading-none  first:mb-[10px]'>
            <Link
              href={link}
              target={target}
              rel={rel}
              className='paragraph text-darkGrey hover:text-hoverDark focus:text-orangeText'
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

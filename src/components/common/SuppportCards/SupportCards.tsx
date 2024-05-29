import { FC } from 'react';

import { clsx } from 'clsx';

import { ISupportCardsProps } from './SupportCards.types';

export const SupportCards: FC<ISupportCardsProps> = ({ data }) => {
  return (
    <ul className='flex gap-5 overflow-x-auto xl:overflow-visible'>
      {data.map(({ id, amountOfHelp, typeOfHelp }) => (
        <li
          key={id}
          className={clsx('bg-bgText', {
            'rounded-tl-[120px]': id === 1,
            'rounded-bl-[120px] rounded-br-[120px]': id === 2,
            'rounded-br-[120px]': id === 3,
          })}
        >
          <div className='flex h-[300px] w-[260px] flex-col gap-2 px-[2px] py-[100px] text-center md:h-[340px] md:w-[300px] md:px-[22px] md:py-[108px] xl:h-[368px] xl:w-[390px] xl:px-[66px] xl:py-[113px]'>
            <p className='font-kyiv md:text-h2_desk xl:text-h1_desk text-[40px] font-bold leading-[48px]'>
              {amountOfHelp}
            </p>
            <p className='text-body3 xl:text-body3_desk font-normal leading-[22.4px]'>
              {typeOfHelp}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

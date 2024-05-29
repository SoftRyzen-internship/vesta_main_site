import { FC } from 'react';

import clsx from 'clsx';

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
          <div className='flex flex-col gap-2 px-[2px] py-[100px] text-center md:px-[22px] md:py-[108px] xl:px-[66px] xl:py-[113px] w-[260px] h-[300px] md:w-[300px] md:h-[340px] xl:w-[390px] xl:h-[368px]'>
            <p className='font-kyiv text-[40px] font-bold leading-[48px] md:text-h2_desk xl:text-h1_desk'>
              {amountOfHelp}
            </p>
            <p className='text-body3 leading-[22.4px] font-normal xl:text-body3_desk'>{typeOfHelp}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

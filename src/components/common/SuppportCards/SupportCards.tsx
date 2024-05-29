import { FC } from 'react';

import clsx from 'clsx';

import { ISupportCardsProps } from './SupportCards.types';

export const SupportCards: FC<ISupportCardsProps> = ({ data }) => {
  return (
    <ul className='flex gap-5'>
      {data.map(({ id, amountOfHelp, typeOfHelp }) => (
        <li
          key={id}
          className={clsx('bg-bgText', {
            'rounded-tl-[120px]': id === 1,
            'rounded-bl-[120px] rounded-br-[120px]': id === 2,
            'rounded-br-[120px]': id === 3,
          })}
        >
          <div className='flex flex-col gap-2 px-[2px] py-[100px] text-center'>
            <p className='font-kyiv text-[40px] font-bold leading-[48px]'>
              {amountOfHelp}
            </p>
            <p className='text-body3 leading-[22.4px]'>{typeOfHelp}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

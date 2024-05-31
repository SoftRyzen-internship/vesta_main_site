import { FC } from 'react';
import { clsx } from 'clsx';
import { ISupportProps } from './SupportCards.types';


export const SupportCards: FC<ISupportProps> = ({ id, amountOfHelp, typeOfHelp }) => {
  return (
    <li
      key={id}
      className={clsx('bg-bgText list-none h-[300px] w-[260px] md:h-[340px] md:w-[300px] xl:h-[368px] xl:w-[390px]', {
        'rounded-tl-[120px]': id === 1,
        'rounded-bl-[120px] rounded-br-[120px]': id === 2,
        'rounded-br-[120px]': id === 3,
      })}
    >
      <div className='flex flex-col gap-2 px-[2px] py-[100px] text-center md:px-[22px] md:py-[108px] xl:px-[66px] xl:py-[113px]'>
        <p className='font-kyiv md:text-h1_tab xl:text-h1_desk text-h1 font-bold'>
          {amountOfHelp}
        </p>
        <p className='text-body3 xl:text-body3_desk'>{typeOfHelp}</p>
      </div>
    </li>
  );
};
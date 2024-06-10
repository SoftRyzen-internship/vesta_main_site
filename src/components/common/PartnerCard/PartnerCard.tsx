import { FC } from 'react';
import Image from 'next/image';

import { IPartnerCardProps } from './PartnerCard.types';

export const PartnerCard: FC<IPartnerCardProps> = ({ src, name }) => {
  return (
    <div className='flex h-[263px] w-[250px] flex-col justify-end bg-bgText p-5 pt-[67px] md:w-[212px] md:pt-[74px] xl:h-[294px] xl:w-[285px] xl:pt-[60px]'>
      <Image
        src={src}
        alt={name}
        width={130}
        height={130}
        className='mx-auto h-[130px] w-[130px] md:h-[116px] md:w-[116px] xl:h-[140px] xl:w-[140px]'
      />
      <h3 className='mt-auto text-body4 tracking-[-0.14px] text-green'>
        {name}
      </h3>
    </div>
  );
};

import { FC } from 'react';
import Image from 'next/image';

import { IPartnerCardProps } from './PartnerCard.types';

export const PartnerCard: FC<IPartnerCardProps> = ({ img, name }) => {
  return (
    <div className='bg-bgText flex h-[263px] w-[250px] flex-col justify-end p-5 pt-[67px] md:w-[212px] md:pt-[74px] xl:h-[294px] xl:w-[285px] xl:pt-[60px]'>
      <Image
        src={img}
        alt={name}
        width={130}
        height={130}
        className='mx-auto w-[130px] h-[130px] md:h-[116px] md:w-[116px]  xl:h-[140px] xl:w-[140px]'
      />
      <h4 className='paragraph text-green mt-auto font-normal  '>
        {name}
      </h4>
    </div>
  );
};

import { FC } from 'react';
import Image from 'next/image';

import { serviceExample } from '@/data';

import img from '@/../public/images/services/service-desk@1.png';

import { IServiceCardProps } from './ServiceCard.types';

export const ServiceCard: FC<IServiceCardProps> = ({
  title = serviceExample.title,
  src = img,
  alt = serviceExample.alt,
  description = serviceExample.description,
}) => {
  return (
    <div className='h-[635px] w-[360px] bg-bgText py-10 pl-4 md:h-[863px] md:w-[684px] xl:h-[599px] xl:w-[1216px]'>
      <h3
        className='mb-[30px] font-eukraine text-xl leading-[1.3]
        text-green md:text-lightLarge xl:text-[35px] xl:leading-[1.3]'
      >
        {title}
      </h3>
      <p className='tracking-[-0.14px] mb-[30px] max-w-[303px]'>{description}</p>

      <div className='relative smOnly:hidden md:h-[400px] md:w-[496px] xl:h-[439px] xl:w-[402px]'>
        <Image
          fill
          className='object-cover'
          src={src}
          alt={alt}
          priority
          sizes='(max-width: 1280px) 497px, 402px'
        />
      </div>
    </div>
  );
};

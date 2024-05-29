import { FC } from 'react';
import Image from 'next/image';

import { IServiceCardProps } from './ServiceCard.types';

import { service } from '@/data';

import img from '@/../public/images/services/service-desk@1x.png';

import s from './ServiceCard.module.css';

export const ServiceCard: FC<IServiceCardProps> = ({
  title = service.title,
  src = img,
  alt = service.alt,
  description = service.description,
  count = '01',
  countAll = '03',
}) => {
  return (
    <div
      className={`h-[635px] w-[360px] bg-bgText px-4 py-10 font-eukraine md:h-[863px] md:w-[684px] md:px-[94px] md:py-[74px] xl:flex xl:h-[599px] xl:w-[1216px] xl:justify-between xl:px-[70px] xl:py-20 ${s.card}`}
    >
      <div className=''>
        <h3 className='mb-[30px] font-eukraine text-xl leading-[1.3] text-green md:text-lightLarge xl:text-[35px] xl:leading-[1.3]'>
          {title}
        </h3>
        <p className='mb-[30px] max-w-[303px] tracking-[-0.14px] md:max-w-[496px] xl:max-w-[562px]'>
          {description}
        </p>
        <div className='text-darkGrey mdOnly:mb-10'>
          <span className='text-base font-medium leading-[1.5] md:text-lg xl:text-xl'>
            {count}{' '}
          </span>
          <span className='leading-[1.6] tracking-[-0.14px]'>/ {countAll}</span>
        </div>
      </div>
      <div className='relative smOnly:hidden md:h-[400px] md:w-[496px] xl:h-[439px] xl:w-[402px]'>
        <Image
          fill
          className='object-cover'
          src={src}
          alt={alt}
          priority
          sizes='(max-width: 1280px) 496px, 402px'
        />
      </div>
    </div>
  );
};

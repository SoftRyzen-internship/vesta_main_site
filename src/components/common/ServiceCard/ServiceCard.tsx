import { FC } from 'react';
import Image from 'next/image';

import { IServiceCardProps } from './ServiceCard.types';

import img from '@/../public/images/services/service-desk@1x.png';

import s from './ServiceCard.module.css';

export const ServiceCard: FC<IServiceCardProps> = ({
  title,
  alt,
  description,
  count,
  countAll,
}) => {
  return (
    <div
      className={`h-[635px] w-[360px] bg-bgText px-4 py-10 md:h-[863px] md:w-[684px] md:px-[94px] md:py-[74px] xl:flex xl:h-[599px] xl:w-[1216px] xl:justify-between xl:px-[70px] xl:py-20 ${s.card}`}
    >
      <div>
        <h3 className='mb-[30px] text-body1 text-green md:text-body1_tab xl:text-body1_desk'>
          {title}
        </h3>
        <p className='paragraph mb-[30px] max-w-[303px] md:max-w-[496px] xl:max-w-[562px]'>
          {description}
        </p>
        <div className='mdOnly:mb-10'>
          <span className='text-body2 font-medium text-darkGrey md:text-body2_tab xl:text-body2_desk'>
            {count}{' '}
          </span>
          <span className='paragraph'>/ {countAll}</span>
        </div>
      </div>
      <div className='relative smOnly:hidden md:h-[400px] md:w-[496px] xl:h-[439px] xl:w-[402px]'>
        <Image
          src={img}
          alt={alt}
          width={448}
          height={400}
          className='object-cover object-center md:h-[400px] md:w-[496px] xl:h-[402px] xl:w-[439px]'
        />
      </div>
    </div>
  );
};

{/* <Image
  src={url}
  alt={alternativeText}
  width={448}
  height={250}
  className='mb-[30px] h-[250px] w-full object-cover object-center md:mb-0 md:h-[250px] md:w-[300px] xl:h-[300px] xl:w-[492px]'
/>; */}

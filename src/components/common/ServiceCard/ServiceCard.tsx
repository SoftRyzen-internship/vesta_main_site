import { FC } from 'react';
import Image from 'next/image';

import { IServiceCardProps } from './ServiceCard.types';

import s from './ServiceCard.module.css';

export const ServiceCard: FC<IServiceCardProps> = ({
  item: { title, description, image },
  count,
  countAll,
}) => {
  const url =
    image.data?.attributes?.url ?? '/images/noData/no-data-image.webp';
  const alternativeText = image.data?.attributes?.alternativeText ?? title;

  return (
    <div
      className={`h-[635px] w-[328px] bg-bgText py-10 pl-4 pr-[13px] md:h-full md:w-full md:px-[94px] md:py-[74px] xl:flex xl:w-[1216px] xl:justify-between xl:px-[70px] xl:py-20 ${s.card}`}
    >
      <div className='max-w-[303px] md:max-w-[496px] xl:max-w-[562px]'>
        <h3 className='mb-[30px] text-body1 text-green md:text-body1_tab xl:text-body1_desk'>
          {title}
        </h3>
        <p className='paragraph mb-[30px] whitespace-pre-wrap'>{description}</p>
        <div className='mdOnly:mb-10'>
          <span className='text-body2 font-medium text-darkGrey md:text-body2_tab xl:text-body2_desk'>
            {`0${count}`}{' '}
          </span>
          <span className='paragraph'>/ {`0${countAll}`}</span>
        </div>
      </div>
      <div className='smOnly:hidden'>
        <Image
          src={url}
          alt={alternativeText}
          width={496}
          height={400}
          className='object-cover object-center md:h-[400px] md:w-[497px] xl:h-[439px] xl:w-[402px]'
        />
      </div>
    </div>
  );
};

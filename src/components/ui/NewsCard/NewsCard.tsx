import { FC } from 'react';

import Image from 'next/image';

import { INewsCardProps } from './NewsCard.types';

import s from './NewsCard.module.css';

// всі дані повинні тянутись з адмінки, тому добавлю це коли вона буде готова до використання

export const NewsCard: FC<INewsCardProps> = ({
  img,
  imgAlt,
  date,
  title,
  description,
}) => {
  return (
    <div className='w-full xl:w-[596px]'>
      <Image
        width={328}
        height={290}
        alt={imgAlt}
        src={img}
        className='mb-[25px]	h-[290px] w-full object-cover md:h-[356px]'
      />
      <p className='text-body4 text-darkGrey mb-[15px] tracking-[-0.01em]'>
        {date}
      </p>
      <h3 className='text-green xl:text-body2_desk text-body3 md:text-body3_desk: mb-[15px]  font-medium '>
        {title}
      </h3>
      <p
        className={`text-body4 text-darkGrey  tracking-[-0.01em] ${s.textEllipsis}`}
      >
        {description}
      </p>
    </div>
  );
};

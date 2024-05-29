import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { INewsCardProps } from './NewsCard.types';

import s from './NewsCard.module.css';

export const NewsCard: FC<INewsCardProps> = ({
  id,
  img,
  imgAlt,
  date,
  title,
  description,
}) => {
  return (
    <Link
      href={`/news/${id}`}
      className='focus:text-orangeText text-green w-full cursor-pointer transition-colors duration-300 hover:text-[rgba(242,96,12,0.6)] xl:w-[596px]'
    >
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
      <h3 className='xl:text-body2_desk text-body3 md:text-body3_desk: mb-[15px]   font-medium text-inherit '>
        {title}
      </h3>
      <p
        className={`text-body4 text-darkGrey  tracking-[-0.01em] ${s.textEllipsis}`}
      >
        {description}
      </p>
    </Link>
  );
};

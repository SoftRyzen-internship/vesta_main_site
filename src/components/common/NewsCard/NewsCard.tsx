import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { INewsCardProps } from './NewsCard.types';

import s from './NewsCard.module.css';
import image from '@/../public/images/news/ukrainian-soldier.webp';

export const NewsCard: FC<INewsCardProps> = ({
  id,
  img = image,
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
        priority
        className='mb-[25px]	h-[290px] w-full object-cover md:h-[356px]'
      />
      <p className='paragraph mb-[15px]'>{date}</p>
      <h3 className='xl:text-body2_desk text-body3 md:text-body3_desk: mb-[15px]   font-medium text-inherit '>
        {title}
      </h3>
      <p className={`paragraph ${s.textEllipsis}`}>{description}</p>
    </Link>
  );
};

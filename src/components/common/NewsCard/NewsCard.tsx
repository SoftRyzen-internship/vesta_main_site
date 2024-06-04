import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { INewsCardProps } from './NewsCard.types';

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
      className='w-full cursor-pointer text-green transition hover:text-[rgba(242,96,12,0.6)] focus:text-orangeText xl:w-[596px]'
    >
      <Image
        width={0}
        height={0}
        sizes='100vw'
        alt={imgAlt}
        src={img}
        className='mb-[25px]	h-[290px] w-full object-cover md:h-[356px]'
      />
      <p className='paragraph mb-[15px]'>{date}</p>
      <h3 className='md:text-body3_desk: mb-[15px] line-clamp-2 text-body3 font-medium  text-inherit xl:text-body2_desk '>
        {title}
      </h3>
      <p className='paragraph'>{description}</p>
    </Link>
  );
};

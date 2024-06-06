import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { INewsCardProps } from './NewsCard.types';

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
      className='inline-block w-full cursor-pointer overflow-hidden text-green transition hover:text-[rgba(242,96,12,0.6)] focus:text-orangeText md:w-[684px] xl:w-[596px]'
    >
      <Image
        src={img}
        alt={imgAlt}
        width={2880}
        height={2880}
        sizes='100%'
        className='mb-[25px] h-[290px] w-full object-cover md:h-[356px]'
      />
      <p className='paragraph mb-[15px]'>{date}</p>
      <h3 className='md:text-body3_desk: mb-[15px] text-body3 font-medium text-inherit xl:text-body2_desk'>
        {title}
      </h3>
      <p className='paragraph line-clamp-2'>{description}</p>
    </Link>
  );
};

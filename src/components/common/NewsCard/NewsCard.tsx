'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { INewsCardProps } from './NewsCard.types';
export const NewsCard: FC<INewsCardProps> = ({
  item: { slug, date, title, text, image },
}) => {
  const url =
    image.data[0]?.attributes?.url ??
    '/images/mainHero/main-hero-bg-tab@1x.webp';
  const alternativeText = image.data[0]?.attributes?.alternativeText ?? title;

  return (
    <Link
      href={`/news/${slug}`}
      className='inline-block h-[503px] w-full cursor-pointer overflow-hidden text-green transition hover:text-[rgba(242,96,12,0.6)] focus:text-orangeText md:h-[551px] md:w-[684px] xl:h-[557px] xl:w-[595px]'
    >
      <Image
        src={url}
        alt={alternativeText}
        width={448}
        height={290}
        className='mb-[25px] h-[290px] w-full object-cover md:h-[356px]'
      />
      <p className='paragraph mb-[15px]'>{date.replaceAll('-', '.')}</p>
      <h3 className='mb-[15px] text-body2 font-medium text-inherit md:text-body2_tab xl:text-body2_desk'>
        {title}
      </h3>
      <p className='paragraph line-clamp-2 mdOnly:w-[597px]'>{text}</p>
    </Link>
  );
};

'use client';

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';

import ReactPlayer from 'react-player';
import clsx from 'clsx';

import { Button } from '@/components/ui/Button';

import { INewsTemplateProps } from './NewsTemplate.types';

export const NewsTemplate: FC<INewsTemplateProps> = ({
  oneNews: { image, date, title, text, videoLink = '', descriptionVideo = '' },
}) => {
  const [isClient, setIsClient] = useState(false);
  const url =
    image.data[0]?.attributes?.url ?? '/images/noData/no-data-image.webp';
  const alternativeText = image.data[0]?.attributes?.alternativeText ?? title;
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className='pt-[141px] md:pt-[154px] xl:pt-[191px]'>
      <div className='container xl:flex xl:flex-col xl:items-center'>
        <p className='paragraph mb-[30px] xl:w-[802px] '>{date}</p>
        <h2 className='mb-[50px] text-h3 font-bold text-green md:text-h3_tab xl:w-[802px] xl:text-h3_desk'>
          {title}
        </h2>
        <Image
          src={url}
          alt={alternativeText}
          width={328}
          height={260}
          className='mb-10 h-[260px] w-full object-cover md:h-[360px] md:w-[684px] xl:mb-[50px] xl:h-[500px] xl:w-[1216px]'
        />
        <p
          className={clsx(
            'paragraph whitespace-pre-wrap xl:w-[802px]',
            videoLink && 'mb-10 xl:mb-[50px]',
          )}
        >
          {text}
        </p>
        {videoLink && isClient && (
          <div className='change mb-10 h-[260px] w-full md:h-[360px] xl:mb-[50px] xl:h-[349px] xl:w-[802px]'>
            <ReactPlayer
              url={videoLink}
              light={true}
              playIcon={<Button variant='play' />}
              width='100%'
              height='100%'
            />
          </div>
        )}
        {descriptionVideo && (
          <p className='paragraph xl:w-[802px]'>{descriptionVideo}</p>
        )}
      </div>
    </section>
  );
};

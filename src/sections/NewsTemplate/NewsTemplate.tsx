'use client';

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';

import ReactPlayer from 'react-player';
import clsx from 'clsx';

import { Button } from '@/components/ui/Button';

import { INewsTemplateProps } from './NewsTemplate.types';

export const NewsTemplate: FC<INewsTemplateProps> = ({
  oneNews: {
    img,
    imgAlt,
    date,
    title,
    description,
    video = '',
    secondDescription = '',
  },
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <section>
      <div className='container pt-[141px] md:pt-[154px] xl:flex xl:flex-col xl:items-center xl:pt-[191px]'>
        <p className='paragraph mb-[30px] xl:w-[802px] '>{date}</p>
        <h2 className='mb-[50px] text-h3 text-green md:text-h3_tab xl:w-[802px] xl:text-h3_desk'>
          {title}
        </h2>
        <Image
          src={img}
          alt={imgAlt}
          width={328}
          height={260}
          className='mb-10 h-[260px] w-full object-cover md:h-[360px] md:w-[684px] xl:mb-[50px] xl:h-[500px] xl:w-[1216px]'
        />
        <p
          className={clsx(
            'paragraph xl:w-[802px]',
            video && 'mb-10 xl:mb-[50px]',
          )}
        >
          {description}
        </p>
        {video && isClient && (
          <div className='change mb-10 h-[260px] w-full md:h-[360px] xl:mb-[50px] xl:h-[349px] xl:w-[802px]'>
            <ReactPlayer
              url={video}
              light={true}
              playIcon={<Button variant='play' />}
              width='100%'
              height='100%'
            />
          </div>
        )}
        {secondDescription && (
          <p className='paragraph xl:w-[802px]'>{secondDescription}</p>
        )}
      </div>
    </section>
  );
};

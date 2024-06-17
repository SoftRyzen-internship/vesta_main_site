'use client';

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';

import ReactPlayer from 'react-player';
import clsx from 'clsx';

import { Button } from '@/components/ui/Button';
import { NoDataTemplate } from '@/sections/NoDataTemplate';

import {
  IDataAttributes,
  INewsData,
  INewsTemplateProps,
} from './NewsTemplate.types';

import { fetchData } from '@/actions/fetchData';
import { getNews } from '@/graphql/newsSchema';

import { newsTemplatePageData } from '@/data';

export const NewsTemplate: FC<INewsTemplateProps> = ({ paramsSlug }) => {
  const [isClient, setIsClient] = useState(false);
  const [news, setNews] = useState<IDataAttributes[]>();

  const oneNews = news?.find(({ attributes: { slug } }) => slug === paramsSlug);

  useEffect(() => {
    setIsClient(true);
    const getAllNews = async () => {
      const data = await fetchData<INewsData>(getNews);
      if (data.news.data) {
        setNews(data.news.data);
      }
    };
    getAllNews();
  }, []);

  return oneNews ? (
    <section className='pt-[141px] md:pt-[154px] xl:pt-[191px]'>
      <div className='container xl:flex xl:flex-col xl:items-center'>
        <p className='paragraph mb-[30px] xl:w-[802px] '>
          {oneNews.attributes.date}
        </p>
        <h2 className='mb-[50px] text-h3 text-green md:text-h3_tab xl:w-[802px] xl:text-h3_desk'>
          {oneNews.attributes.title}
        </h2>
        <Image
          src={oneNews.attributes.image.data[0].attributes.url}
          alt={oneNews.attributes.image.data[0].attributes.alternativeText}
          width={328}
          height={260}
          className='mb-10 h-[260px] w-full object-cover md:h-[360px] md:w-[684px] xl:mb-[50px] xl:h-[500px] xl:w-[1216px]'
        />
        <p
          className={clsx(
            'paragraph xl:w-[802px]',
            oneNews.attributes.videoLink && 'mb-10 xl:mb-[50px]',
          )}
        >
          {oneNews.attributes.text}
        </p>
        {oneNews.attributes.videoLink && isClient && (
          <div className='change mb-10 h-[260px] w-full md:h-[360px] xl:mb-[50px] xl:h-[349px] xl:w-[802px]'>
            <ReactPlayer
              url={oneNews.attributes.videoLink}
              light={true}
              playIcon={<Button variant='play' />}
              width='100%'
              height='100%'
            />
          </div>
        )}
        {oneNews.attributes.descriptionVideo && (
          <p className='paragraph xl:w-[802px]'>
            {oneNews.attributes.descriptionVideo}
          </p>
        )}
      </div>
    </section>
  ) : (
    <NoDataTemplate
      title={newsTemplatePageData.errorTitle}
      description={newsTemplatePageData.errorDescription}
      className='pb-0 pt-[100px] md:py-0  md:pt-[100px] xl:py-0 xl:pt-[130px]'
    />
  );
};

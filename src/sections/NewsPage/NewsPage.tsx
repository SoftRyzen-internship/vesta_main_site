'use client';

import { useState } from 'react';

import { NewsCard } from '@/components/common/NewsCard';
import { Button } from '@/components/ui/Button';

import { formatDate } from '@/utils';

import { newsPageData } from '@/data';

export const NewsPage = () => {
  const {
    title,
    buttonText: { more, hide },
    news,
  } = newsPageData;
  const visibleNews = 4;
  const [displayNews, setDisplayNews] = useState(visibleNews);

  const loadMore = () => {
    setDisplayNews(displayNews + visibleNews);
  };

  const hideAll = () => {
    setDisplayNews(visibleNews);
  };

  const sortByDate = () => {
    return news.sort((a, b) => formatDate(b.date) - formatDate(a.date));
  };
  sortByDate();

  return (
    <section className='pb-[60px] pt-[140px] md:pb-[100px] md:pt-[154px] xl:pb-[130px] xl:pt-[191px]'>
      <div className='container'>
        <h1 className='mb-10 text-h1 text-green md:mb-[60px] md:text-h2_tab xl:w-[744px] xl:text-h1_desk'>
          {title}
        </h1>
        <ul className='mb-[64px] flex flex-col items-center gap-10 md:mb-[100px] md:gap-[60px] xl:mb-[60px] xl:flex-row xl:flex-wrap xl:gap-x-[25px] xl:gap-y-10'>
          {news
            .slice(0, displayNews)
            .map(({ id, img, imgAlt, date, title, description }) => (
              <li key={id}>
                <NewsCard
                  id={id}
                  img={img}
                  imgAlt={imgAlt}
                  date={date}
                  title={title}
                  description={description}
                />
              </li>
            ))}
        </ul>
        {news.length > displayNews ? (
          <Button
            onClick={loadMore}
            className='w-full md:w-[328px] xl:mx-auto xl:block xl:w-[240px]'
          >
            {more}
          </Button>
        ) : news.length <= displayNews && displayNews > 4 ? (
          <Button
            onClick={hideAll}
            className='w-full md:w-[328px] xl:mx-auto xl:block xl:w-[240px]'
          >
            {hide}
          </Button>
        ) : null}
      </div>
    </section>
  );
};

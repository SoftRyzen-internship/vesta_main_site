'use client';

import { useEffect, useState } from 'react';

import { NewsCard } from '@/components/common/NewsCard';
import { Button } from '@/components/ui/Button';
import { NoDataTemplate } from '@/sections/NoDataTemplate';


import { fetchData } from '@/actions/fetchData';
import { getNewsCard } from '@/graphql/newsSchemaCard';

import { newsPageData } from '@/data';

import { IDataAttributes, INewsData } from './News.types';

export const News = () => {
  const {
    title,
    buttonText: { more, hide },
    error: { errorTitle, description },
  } = newsPageData;
  const [news, setNews] = useState<IDataAttributes[]>([]);
  const [start, setStart] = useState(0);
  const [total, setTotal] = useState(0);
  const limit = 4;

  useEffect(() => {
    const loadNews = async () => {
      const newNews = await fetchData<INewsData>(getNewsCard(start, limit));
      if (newNews.news.data) {
        if (start === 0) {
          setNews(newNews.news.data);
        } else {
          setNews(prev => [...prev, ...newNews.news.data]);
        }
      }
      setTotal(newNews.news.meta.pagination.total);
    };
    loadNews();
  }, [start]);
  const loadMore = () => {
    setStart(start + limit);
  };

  const hideAll = () => {
    setStart(0);
  };
  return (
    <>
      {news.length > 0 ? (
        <section className='pb-[60px] pt-[140px] md:pb-[100px] md:pt-[154px] xl:pb-[130px] xl:pt-[191px]'>
          <div className='container'>
            <h1 className='mb-10 text-h1 text-green md:mb-[60px] md:text-h2_tab xl:w-[744px] xl:text-h1_desk'>
              {title}
            </h1>
            <ul className='mb-[64px] flex flex-col items-center gap-10 md:mb-[100px] md:gap-[60px] xl:mb-[60px] xl:flex-row xl:flex-wrap xl:gap-x-[25px] xl:gap-y-10'>
              {news.map(({ attributes, id }) => (
                <li key={id}>
                  <NewsCard item={attributes} />
                </li>
              ))}
            </ul>
            {news.length > 0 &&
              total! > limit &&
              (total > news.length ? (
                <Button
                  onClick={loadMore}
                  className='w-full md:w-[328px] xl:mx-auto xl:block xl:w-[240px]'
                >
                  {more}
                </Button>
              ) : (
                <Button
                  onClick={hideAll}
                  className='w-full md:w-[328px] xl:mx-auto xl:block xl:w-[240px]'
                >
                  {hide}
                </Button>
              ))}
          </div>
        </section>
      ) : (
        <NoDataTemplate
          sectionTitle={title}
          title={errorTitle}
          description={description}
        />
      )}
    </>
  );
};

import { FC } from 'react';

import { NewsCard } from '@/components/common/NewsCard';
import { LinkButton } from '@/components/ui/LinkButton';

import { fetchData } from '@/actions/fetchData';
import { getNewsCard } from '@/graphql/newsSchemaCard';

import { INewsProps, INewsQueryResponse } from './News.types';

import { newsData } from '@/data';

export const News: FC<INewsProps> = async ({ slug }) => {
  const { title, openNewsTitle, newsButton, hrefLink, LIMIT_NEWS } = newsData;

  const newsResponse = await fetchData<INewsQueryResponse>(
    getNewsCard(0, LIMIT_NEWS, slug),
  );
  const news = newsResponse.news.data ?? [];

  return (
    <section className='py-[60px] md:py-[100px] xl:py-[130px]'>
      <div className='container'>
        <div className='mb-10 md:mb-[60px] xl:flex xl:items-center xl:justify-between'>
          <h2 className='subtitle notXl:mb-5'>
            {!slug ? title : openNewsTitle}
          </h2>
          <LinkButton
            href={hrefLink}
            variant='secondary'
            className='xl:flex xl:items-end'
          >
            {newsButton}
          </LinkButton>
        </div>
        <ul className='flex flex-col gap-[25px] xl:flex-row'>
          {news.map(item => (
            <li key={item.id}>
              <NewsCard item={item.attributes} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

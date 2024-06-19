import { FC } from 'react';

import { NewsCard } from '@/components/common/NewsCard';
import { LinkButton } from '@/components/ui/LinkButton';
import { NoDataTemplate } from '../NoDataTemplate';

import { fetchData } from '@/actions/fetchData';
import { getNewsCard } from '@/graphql/newsSchemaCard';

import { INewsProps, INewsQueryResponse } from './News.types';

import { newsData, templateNoData } from '@/data';

export const News: FC<INewsProps> = async ({ slug }) => {
  const { title, openNewsTitle, newsButton, hrefLink, LIMIT_NEWS } = newsData;

  const newsResponse = await fetchData<INewsQueryResponse>(
    getNewsCard(0, LIMIT_NEWS, slug),
  );
  const news = newsResponse.news.data ?? [];

  const { titleNews, descriptionNews } = templateNoData;

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
        {news.length > 0 ? (
          <ul className='flex flex-col gap-[25px] xl:flex-row'>
            {news.map(item => (
              <li key={item.id}>
                <NewsCard item={item.attributes} />
              </li>
            ))}
          </ul>
        ) : (
          <NoDataTemplate
            title={titleNews}
            description={descriptionNews}
            className='pb-0 pt-0 md:pb-0 md:pt-0 xl:pb-0 xl:pt-0'
          />
        )}
      </div>
    </section>
  );
};

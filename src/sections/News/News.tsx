import { FC } from 'react';

import { NewsCard } from '@/components/common/NewsCard';
import { LinkButton } from '@/components/ui/LinkButton';

import { news, newsData } from '@/data';

export const News: FC = () => {
  const { title, newsButton, hrefLink } = newsData;
  return (
    <section className='py-[60px] md:py-[100px] xl:py-[130px]'>
      <div className='container'>
        <div className='mb-10 md:mb-[60px] xl:flex xl:items-center xl:justify-between'>
          <h2 className='subtitle notXl:mb-5'>{title}</h2>
          <LinkButton
            href={hrefLink}
            variant='secondary'
            className='xl:flex xl:items-end'
          >
            {newsButton}
          </LinkButton>
        </div>
        <ul className='flex flex-col gap-[25px] xl:flex-row'>
          {news.map(i => (
            <li key={i.id}>
              <NewsCard
                id={i.id}
                img={i.img}
                imgAlt={i.imgAlt}
                date={i.date}
                title={i.title}
                description={i.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

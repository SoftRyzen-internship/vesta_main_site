import { FC } from 'react';

import { NewsCard } from '@/components/common/NewsCard';
import { LinkButton } from '@/components/ui/LinkButton';

import { news, newsData } from '@/data';

export const News: FC = () => {
  const { title, newsButton, hrefLink } = newsData;
  return (
    <section className=''>
      <div className='container'>
        <h2 className='subtitle'>{title}</h2>
        {/* <div className='mx-auto'> */}
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
        {/* </div> */}
        <LinkButton href={hrefLink} variant='secondary'>
          {newsButton}
        </LinkButton>
      </div>
    </section>
  );
};

import { FC } from 'react';

import { LinkButton } from '@/components/ui/LinkButton';

import { newsData } from '@/data';

export const News: FC = () => {
  const { title, newsButton, hrefLink } = newsData;
  return (
    <section className=''>
      <div className='container'>
        <h2 className='subtitle'>{title}</h2>
        <div></div>
        <LinkButton href={hrefLink} variant='secondary'>
          {newsButton}
        </LinkButton>
      </div>
    </section>
  );
};

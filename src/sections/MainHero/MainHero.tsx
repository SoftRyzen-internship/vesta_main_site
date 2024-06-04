import { FC } from 'react';

import { clsx } from 'clsx';

import { LinkButton } from '@/components/ui/LinkButton';

import { mainHeroData } from '@/data';

import s from './MainHero.module.css';

export const MainHero: FC = () => {
  const { type, title, requestButton, hrefLink } = mainHeroData;

  return (
    <section
      className={clsx(
        s['main-hero'],
        'pb-[108px] pt-[168px] md:pb-[60px] xl:pb-[120px]',
      )}
    >
      <div className='container'>
        <p className='mb-[14px] text-caption font-medium uppercase tracking-[-0.01em] text-accent md:mb-5 md:text-caption_tab xl:mb-[14px] xl:text-caption_desk'>
          {type}
        </p>
        <h1 className='title mb-[30px] whitespace-pre-line md:mb-[86px] xl:mb-20'>
          {title}
        </h1>
        <LinkButton href={hrefLink} className='w-full md:w-60'>
          {requestButton}
        </LinkButton>
      </div>
    </section>
  );
};

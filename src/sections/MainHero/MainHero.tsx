import React, { FC } from 'react';

import { clsx } from 'clsx';

import { NavLink } from '@/components/ui/Link';

import { mainHeroData } from '@/data';

import s from './MainHero.module.css';

export const MainHero: FC = () => {
  const { type, title, requestButton, hrefLink } = mainHeroData;

  const formatTitle = (title: string) => {
    return title.split('\n').map((word, index) => (
      <React.Fragment key={index}>
        {word}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <section
      className={clsx(
        s['main-hero'],
        'pb-[108px] pt-[169px] md:pb-[60px] md:pt-[209px] xl:pb-[120px] xl:pt-[168px]',
      )}
    >
      <div className='container'>
        <p className='mb-[14px] text-caption font-medium uppercase tracking-[-0.01em] text-accent md:mb-5 md:text-caption_tab xl:mb-[14px] xl:text-caption_desk'>
          {type}
        </p>
        <h1 className='mb-[30px] font-kyiv text-h1 font-bold uppercase text-bgText md:mb-[86px] md:text-h1_tab xl:mb-20 xl:text-h1_desk'>
          {formatTitle(title)}
        </h1>
        <NavLink
          href={hrefLink}
          text={requestButton}
          className='w-full md:w-60'
        />
      </div>
    </section>
  );
};

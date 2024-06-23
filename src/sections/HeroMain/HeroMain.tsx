'use client';

import { FC } from 'react';

import { clsx } from 'clsx';
import { motion } from 'framer-motion';

import { LinkButton } from '@/components/ui/LinkButton';

import { heroMainData } from '@/data';

import s from './HeroMain.module.css';

export const HeroMain: FC = () => {
  const { type, title, requestButton, hrefLink } = heroMainData;

  return (
    <section
      className={clsx(
        s['main-hero'],
        'pb-[108px] pt-[168px] md:pb-[60px] xl:pb-[120px]',
      )}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className='hidden xl:block'
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
      </motion.div>
      <div className='container xl:hidden'>
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

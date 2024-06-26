'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';

import { clsx } from 'clsx';

import { INoDataProps } from './NoDataTemplate.types';

import s from './NoDataTemplate.module.css';

export const NoDataTemplate: FC<INoDataProps> = ({
  sectionTitle,
  title,
  description,
  className,
}) => {
  const pathname = usePathname();
  const classes = [s['no-data-projects'], s['no-data-news']];
  const randomClass = classes[Math.floor(Math.random() * classes.length)];

  const bgs: { [key: string]: string } = {
    '/news': s['no-data-news'],
    '/projects': s['no-data-projects'],
    else: randomClass,
  };

  const background = bgs[pathname] || bgs['else'];

  return (
    <section
      className={clsx('py-[60px] md:py-[100px] xl:py-[130px]', className)}
    >
      <div className='container'>
        {sectionTitle && (
          <h2 className='subtitle mb-10 md:mb-[60px] xl:w-[744px] xl:uppercase'>
            {sectionTitle}
          </h2>
        )}
        <div
          className={clsx(
            background,
            'px-[26px] pb-12 pt-10 text-center md:px-7 md:pb-[104px] md:pt-[60px]',
          )}
        >
          <h3 className='mb-6 font-kyiv text-h3 font-bold text-bgText md:text-h3_tab xl:mb-9 xl:text-h3_desk'>
            {title}
          </h3>
          <p className='font-eukraine text-caption font-normal text-bgText md:text-caption_tab xl:mx-auto xl:w-[628px] xl:text-caption_desk'>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

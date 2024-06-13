import { FC } from 'react';

import { clsx } from 'clsx';

import { templateNoData } from '@/data';

import s from './NoDataTemplate.module.css';

export const NoDataTemplate: FC = () => {
  const { title, description } = templateNoData;
  return (
    <section className='py-[60px] md:py-[100px] xl:py-[130px]'>
      <div className='container'>
        <div
          className={clsx(
            s['no-data-projects'],
            'px-[26px] pb-12 pt-10 text-center md:px-7 md:pb-[104px] md:pt-[60px]',
          )}
        >
          <h3 className='mb-6 font-kyiv text-h3 font-bold text-bgText'>
            {title}
          </h3>
          <p className='font-eukraine text-caption font-normal text-bgText'>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

import { FC } from 'react';

import clsx from 'clsx';

import { heroAboutData } from '@/data';

import s from './HeroAboutPage.module.css';

export const HeroAboutPage: FC = () => {
  const { title, description } = heroAboutData;

  return (
    <section
      className={clsx(
        s.heroAbout,
        'pb-[118px] pt-[187px] md:pb-20 md:pt-[209px] xl:pb-[103px] xl:pt-[206px]',
      )}
    >
      <div className='container'>
        <h1 className='title mb-[243px] text-bgText md:mb-[295px] xl:mb-[356px]'>
          {title}
        </h1>
        <p
          className={clsx(
            'relative ml-[51px] max-w-[255px] text-body3 text-bgText xl:text-body3_desk',
            s.description,
          )}
        >
          {description}
        </p>
      </div>
    </section>
  );
};

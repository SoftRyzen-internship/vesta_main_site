import { FC } from 'react';

import { clsx } from 'clsx';

import s from './MainHero.module.css';

export const MainHero: FC = () => {
  return (
    <section className={clsx(s['main-hero'])}>
      <div className='container'></div>
    </section>
  );
};

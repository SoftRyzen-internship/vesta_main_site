'use client';

import { FC } from 'react';

import { IScrollUpButton } from './ScrollButtonUp.types';

import { footer } from '@/data';

import ScrollUp from '/public/icons/scrollUp.svg';

import { scrollToTop } from '@/utils/scrollToTop';

export const ScrollButtonUp: FC<IScrollUpButton> = ({ className }) => {
  return (
    <button
      type='button'
      className={className}
      onClick={scrollToTop}
      aria-label={footer.ariaScrollUp}
    >
      <ScrollUp className='fill-bgText transition hover:fill-orangeText focus:fill-orangeText' />
    </button>
  );
};

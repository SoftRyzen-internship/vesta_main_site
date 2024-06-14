'use client'
import React from 'react';
import ScrollUp from '/public/icons/scrollUp.svg';
import { scrollToTop } from '@/utils/scrollToTop';

export const ScrollButtonUp: React.FC = () => {
  return (
    <button className='absolute right-0' onClick={scrollToTop}>
      <ScrollUp className='fill-bgText transition hover:fill-orangeText focus:fill-orangeText' />
    </button>
  );
};

'use client';

import { FC } from 'react';

import { CardListProps } from './CardList.types';

export const CardsList: FC<CardListProps> = ({ items, CardComponent }) => {
  return (
    <ul className='scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-green scrollbar-track-bgText flex gap-2.5 overflow-x-auto pb-10 md:flex-wrap md:gap-6 xl:gap-6'>
      {items.map(({ id, img, name }) => (
        <li key={id} className='scroll-snap-align-start flex-none'>
          <CardComponent img={img} name={name} />
        </li>
      ))}
    </ul>
  );
};

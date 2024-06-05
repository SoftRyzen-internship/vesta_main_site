'use client';

import { FC } from 'react';

import { CardListProps } from './CardList.types';

import styles from './CardsList.module.css';

export const CardsList: FC<CardListProps> = ({ items, CardComponent }) => {
  return (
    <ul
      className={`${styles.cardsList} flex gap-[10px] md:flex-wrap md:gap-[24px] xl:gap-[25px]`}
    >
      {items.map(({ id, img, name }) => (
        <li key={id} className={styles.cardItem}>
          <CardComponent img={img} name={name} />
        </li>
      ))}
    </ul>
  );
};

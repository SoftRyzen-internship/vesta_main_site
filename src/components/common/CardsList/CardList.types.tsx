import { FC } from 'react';

export interface CardListProps {
  items: { id: number; img: string; name: string }[];
  CardComponent: FC<{ img: string; name: string }>;
}

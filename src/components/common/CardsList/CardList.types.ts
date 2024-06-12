import { ElementType } from 'react';
import { IItem } from '@/sections/Partners/Partners.types';

export interface CardListProps {
  items: IItem[];
  CardComponent: ElementType;
  path: string;
  section: string
}

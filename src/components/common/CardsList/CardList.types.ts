import { ElementType } from 'react';
import { IItem } from '@/sections/Partners/Partners.types';
import { IItemTeam } from '@/sections/Team/Team.types';

export interface CardListProps {
  items: IItem[] | IItemTeam[];
  CardComponent: ElementType;
  path: string;
  section: string
}

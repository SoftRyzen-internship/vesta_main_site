import { ElementType } from 'react';
import { IItem } from '@/sections/Partners/Partners.types';
import { IItemTeam } from '@/sections/Team/Team.types';

export interface CardListProps {
<<<<<<< HEAD
  items: IItem[] | IItemTeam[];
=======
  items: {
    id: number;
    src: string;
    name: string;
    alt?: string;
    position?: string;
    description?: string;
    plug?: string;
    socialMedia?: { social: string; link: string }[];
  }[];
>>>>>>> origin/dev
  CardComponent: ElementType;
  path: string;
  section: string;
}

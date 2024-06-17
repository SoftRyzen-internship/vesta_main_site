import { ElementType } from 'react';

export interface CardListProps {
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
  CardComponent: ElementType;
  path: string;
  section: string;
}

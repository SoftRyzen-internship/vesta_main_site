'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';

import { clsx } from 'clsx';

import { GettingKnowTeamCard } from '../GettingKnowTeamCard';

import { CardListProps } from './CardList.types';

import { useWindowSize } from '@/utils';

export const CardsList: FC<CardListProps> = ({
  items,
  CardComponent,
  path,
  section,
}) => {
  const pathname = usePathname();
  const { width } = useWindowSize();
  const isMobile = width && width < 768 ? true : false;

  return (
    <>
      <ul
        className={clsx(
          pathname === '/about' && 'mb-0',
          'mb-[60px] flex gap-2.5 overflow-x-auto scrollbar scrollbar-track-bgText scrollbar-thumb-green scrollbar-track-rounded-full scrollbar-thumb-rounded-full smOnly:pb-10 md:mb-0 md:flex-wrap md:gap-6 xl:gap-6',
        )}
      >
        {items.map(
          ({
            id,
            src,
            name,
            alt,
            position,
            description,
            plug,
            socialMedia,
          }) => (
            <li key={id} className='scroll-snap-align-start flex-none'>
              <CardComponent
                src={src}
                name={name}
                alt={alt}
                position={position}
                description={description}
                plug={plug}
                socialMedia={socialMedia}
              />
            </li>
          ),
        )}
        {path !== '/about' && section === 'team' && !isMobile && (
          <GettingKnowTeamCard />
        )}
      </ul>
      {path !== '/about' && section === 'team' && isMobile && (
        <GettingKnowTeamCard />
      )}
    </>
  );
};

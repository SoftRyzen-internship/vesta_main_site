'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';

import { clsx } from 'clsx';

import { GettingKnowTeamCard } from '@/components/common/GettingKnowTeamCard';
import { ScrollBox } from '@/components/ui/ScrollBox';

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
      <ScrollBox
        className={clsx(
          pathname !== '/about' && 'mb-[60px]',
          'overflow-x-auto smOnly:pb-10 md:mb-0',
        )}
      >
        <ul
          className={clsx(
            pathname === '/about' && 'mb-0',
            ' flex gap-2.5  md:flex-wrap md:gap-6 xl:w-[1215px] xl:gap-x-6 xl:gap-y-10',
          )}
        >
          {items.map(item => {
            return (
              <li key={item.name} className='scroll-snap-align-start flex-none'>
                <CardComponent item={item} />
              </li>
            );
          })}
          {path !== '/about' && section === 'team' && !isMobile && (
            <GettingKnowTeamCard />
          )}
        </ul>
      </ScrollBox>
      {path !== '/about' && section === 'team' && isMobile && (
        <GettingKnowTeamCard />
      )}
    </>
  );
};

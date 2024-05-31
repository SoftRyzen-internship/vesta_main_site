'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';

import { clsx } from 'clsx';

import { Logo } from '@/components/ui/Logo';
import { NavList } from '@/components/common/NavList';
import { NavLink } from '@/components/ui/Link';
import { Button } from '@/components/ui/Button';
import { navListData } from '@/data';

export const Header: FC = () => {
  const pathName = usePathname();

  return (
    <header
      className={clsx(
        'fixed left-0 top-0 w-full  py-[20px]',
        pathName === '/' || pathName === '/about'
          ? 'bg-transparent'
          : 'bg-green',
      )}
    >
      <div className='container flex items-center justify-between'>
        <Logo />
        <div className='hidden xl:block'>
          <NavList navList={navListData} forFooter={false} />
        </div>
        <NavLink
          text='Контакти'
          href='/contacts'
          variant='contactsHeader'
          className='hidden xl:block'
        />
        <Button
          variant='openMenu'
          handleClick={() => console.log('click')}
          className='xl:hidden'
        />
      </div>
    </header>
  );
};

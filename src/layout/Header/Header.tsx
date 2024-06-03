'use client';

import { FC, useState } from 'react';
import { usePathname } from 'next/navigation';

import { clsx } from 'clsx';

import { Logo } from '@/components/ui/Logo';
import { NavList } from '@/components/common/NavList';
import { NavLink } from '@/components/ui/Link';
import { Button } from '@/components/ui/Button';
import { navListData } from '@/data';
import { BurgerMenu } from '@/components/common/BurgerMenu';

export const Header: FC = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={clsx(
        'absolute left-0 top-0 w-full py-[20px]',
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
          handleClick={() => setIsOpen(true)}
          className='xl:hidden'
        />
      </div>
      <BurgerMenu isOpen={isOpen} close={() => setIsOpen(false)} />
    </header>
  );
};

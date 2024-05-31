'use client';

import { FC } from 'react';

import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { NavList } from '@/components/common/NavList';

import { navListData } from '@/data';

export const Header: FC = () => {
  return (
    <header className='fixed left-0 top-0 w-full bg-green py-[20px]'>
      <div className='container flex items-center justify-between'>
        <Logo />
        <div className='hidden xl:block'>
          <NavList navList={navListData} forFooter={false} />
        </div>
        <Button
          text='контакти'
          variant='contacts'
          handleClick={() => console.log('click')}
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

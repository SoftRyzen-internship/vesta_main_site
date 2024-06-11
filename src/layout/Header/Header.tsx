'use client';

import { FC, useState } from 'react';
import { usePathname } from 'next/navigation';

import { clsx } from 'clsx';
import { motion } from 'framer-motion';

import { Logo } from '@/components/ui/Logo';
import { NavList } from '@/components/common/NavList';
import { LinkButton } from '@/components/ui/LinkButton';
import { Button } from '@/components/ui/Button';
import { navListData } from '@/data';
import { BurgerMenu } from '@/components/ui/BurgerMenu';

export const Header: FC = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={clsx(
        'absolute left-0 top-0 w-full py-[20px]',
        pathName === '/' || pathName === '/about' || pathName === '/projects'
          ? 'bg-transparent'
          : 'bg-green',
      )}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className='hidden xl:block'
      >
        <div className='container flex items-center justify-between'>
          <Logo />
          <div className='hidden xl:block'>
            <NavList navList={navListData} forFooter={false} />
          </div>
          <LinkButton
            href='/contacts'
            variant='contactsHeader'
            className='hidden xl:block'
          >
            Контакти
          </LinkButton>
          <Button
            variant='openMenu'
            onClick={() => setIsOpen(true)}
            className='xl:hidden'
          />
        </div>
      </motion.div>
      <div className='container flex items-center justify-between xl:hidden'>
        <Logo />
        <div className='hidden xl:block'>
          <NavList navList={navListData} forFooter={false} />
        </div>
        <LinkButton
          href='/contacts'
          variant='contactsHeader'
          className='hidden xl:block'
        >
          Контакти
        </LinkButton>
        <Button
          variant='openMenu'
          onClick={() => setIsOpen(true)}
          className='xl:hidden'
        />
      </div>

      <BurgerMenu isOpen={isOpen} close={() => setIsOpen(false)} />
    </header>
  );
};

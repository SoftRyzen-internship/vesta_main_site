import { FC } from 'react';

import { Dialog, DialogPanel } from '@headlessui/react';

import { BurgerMenuProps } from './BurgerMenu.types';

import { NavList } from '../NavList';
import { Button } from '@/components/ui/Button';
import { NavLink } from '@/components/ui/Link';
import { SocialMedia } from '@/components/ui/SocialMedia';
import { Logo } from '@/components/ui/Logo';

import { navListData, socialMedia } from '@/data';

export const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen, close }) => {
  return (
    <>
      <Dialog open={isOpen} onClose={close} className='relative'>
        <DialogPanel className='fixed right-0 top-0 h-screen w-screen bg-green px-[16px] pb-[118px] pt-[84px] md:h-[592px] md:w-[360px] md:px-[40px] md:pb-[70px] md:pt-[78px]'>
          <div className='absolute left-[25px] top-[25px] md:hidden'>
            <Logo />
          </div>
          <Button
            variant='closeMenu'
            handleClick={close}
            className='absolute right-[25px] top-[25px]'
          />
          <div className='flex h-full flex-col items-start justify-between'>
            <div className='flex flex-col items-start gap-[24px]'>
              <NavList navList={navListData} forFooter={false} click={close} />
              <NavLink
                text='Контакти'
                href='/contacts'
                variant='contactsHeader'
              />
            </div>
            <SocialMedia forFooter={true} socialMedia={socialMedia} />
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

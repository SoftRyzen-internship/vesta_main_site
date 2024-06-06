import { FC } from 'react';

import { Dialog, DialogPanel } from '@headlessui/react';

import { BurgerMenuProps } from './BurgerMenu.types';

import { NavList } from '@/components/common/NavList';
import { Button } from '@/components/ui/Button';
import { LinkButton } from '@/components/ui/LinkButton';
import { SocialMedia } from '@/components/ui/SocialMedia';
import { Logo } from '@/components/ui/Logo';

import { navListData, socialMedia, linkData } from '@/data';

export const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen, close }) => {
  return (
    <>
      <Dialog open={isOpen} onClose={close} className='relative'>
        <div
          className='fixed inset-0 bg-[#30303640] backdrop-blur-md'
          aria-hidden='true'
        >
          <DialogPanel className='fixed right-0 top-0 h-screen w-screen bg-green px-[16px] pb-[118px] pt-[84px] md:h-[592px] md:w-[360px] md:px-[40px] md:pb-[70px] md:pt-[78px]'>
            <div className='absolute left-[25px] top-[25px] md:hidden'>
              <Logo onClick={close} />
            </div>
            <Button
              variant='closeMenu'
              onClick={close}
              className='absolute right-[25px] top-[25px]'
            />
            <div className='flex h-full flex-col items-start justify-between'>
              <div className='flex flex-col items-start gap-[24px]'>
                <NavList
                  navList={navListData}
                  forFooter={false}
                  onClick={close}
                />
                <LinkButton
                  href='/contacts'
                  variant='contactsHeader'
                  onClick={close}
                >
                  {linkData.text}
                </LinkButton>
              </div>
              <SocialMedia lightMode={true} socialMedia={socialMedia} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

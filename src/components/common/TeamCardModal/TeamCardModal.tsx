import { FC } from 'react';
import Image from 'next/image';

import { ITeamCardModalProps } from './TeamCardModal.types';
import { SocialMedia } from '@/components/ui/SocialMedia';
import { Button } from '@/components/ui/Button';
import { Dialog, Transition } from '@headlessui/react';

export const TeamCardModal: FC<ITeamCardModalProps> = ({
  img,
  name,
  position,
  description,
  plug,
  socialMedia,
}) => {
  const isOpen = true;
  return (
    <Transition appear show={isOpen}>
      <Dialog
        as='div'
        className='relative z-10 focus:outline-none'
        onClose={close}
      >
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='bg-white'>
            <Button
              handleClick={() => console.log('first')}
              variant='closeModal'
              className='mb-5'
            />
            <Image
              src={img}
              alt={name}
              width={328}
              height={330}
              className='mb-4'
            />
            <h3 className='text-body2_tab text-green mb-2 font-medium'>
              {name}
            </h3>
            <p className='paragraph text-darkGrey mb-[30px]'>{position}</p>
            <p className='paragraph text-darkGrey mb-[30px]'>{description}</p>
            <p className='paragraph mb-[30px] bg-[rgba(26,52,27,0.1)] px-[15px] py-[10px]'>
              {plug}
            </p>
            <SocialMedia socialMedia={socialMedia} forFooter={false} />
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

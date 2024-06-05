import { FC } from 'react';
import Image from 'next/image';

import { Dialog, DialogPanel, Transition } from '@headlessui/react';

import { SocialMedia } from '@/components/ui/SocialMedia';
import { Button } from '@/components/ui/Button';

import { ITeamCardModalProps } from './TeamCardModal.types';

import s from './TeamCardModal.module.css';

export const TeamCardModal: FC<ITeamCardModalProps> = ({
  openModal,
  closeModal,
  img,
  name,
  position,
  description,
  plug,
  socialMedia,
}) => {
  return (
    <Transition
      appear
      show={openModal}
      enter='transition'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <Dialog
        as='div'
        className='relative z-10 focus:outline-none'
        onClose={closeModal}
      >
        <div
          className=' fixed inset-0 xl:bg-bgModalTeamMember xl:backdrop-blur-xl  '
          aria-hidden='true'
        />
        <div className='fixed  inset-0 z-10 h-screen w-screen overflow-hidden bg-bgText xl:ml-auto xl:w-[1072px] '>
          <DialogPanel className='mx-auto   w-[365px] px-4 py-10 md:mx-0 md:w-[660px] md:px-[42px] md:py-[60px] xl:w-[967px]  xl:px-[60px] xl:py-[90px]'>
            <Button
              onClick={closeModal}
              variant='closeModal'
              className='mb-5 ml-auto block md:absolute md:right-[25px] md:top-[25px] md:mb-[11px] xl:right-[35px] xl:top-[35px] xl:mb-[31px]'
            />
            <div
              className={` overflow-y-auto pr-[5px] md:pr-[10px] xl:flex xl:gap-[43px] ${s.contentHeight}`}
            >
              <div className='xl:w-[386px]'>
                <Image
                  src={img}
                  alt={name}
                  width={328}
                  height={330}
                  className='mb-4	h-[330px] w-full object-cover object-top md:h-[440px] xl:h-[463px]  '
                />
                <h3 className='mb-2 text-body2_tab font-medium text-green xl:text-body2_desk'>
                  {name}
                </h3>
                <p className='paragraph mb-[30px] text-darkGrey md:mb-10'>
                  {position}
                </p>
              </div>
              <div className='xl:flex xl:h-[463px] xl:w-[418px] xl:flex-col xl:justify-between'>
                <p className='paragraph mb-[30px] text-darkGrey md:mb-10 xl:mb-0'>
                  {description}
                </p>
                <div className=' md:flex md:justify-between'>
                  <p className='paragraph mb-[30px] h-[42px] w-[262px] bg-bgPlug px-[15px] py-[10px] text-green md:mb-0'>
                    {plug}
                  </p>
                  {socialMedia && socialMedia?.length > 0 && (
                    <SocialMedia socialMedia={socialMedia} forFooter={false} />
                  )}
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
};

import { FC, Fragment } from 'react';
import Image from 'next/image';

import { clsx } from 'clsx';
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';

import { SocialMedia } from '@/components/ui/SocialMedia';
import { Button } from '@/components/ui/Button';
import { ScrollBox } from '@/components/ui/ScrollBox';

import { ITeamCardModalProps } from './TeamCardModal.types';

import { teamPlugTypes } from '@/utils';

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
    <Transition appear show={openModal} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10 focus:outline-none'
        onClose={closeModal}
      >
        <div
          className='fixed inset-0 md:bg-bgModalTeamMember md:backdrop-blur-xl'
          aria-hidden='true'
        />
        <TransitionChild
          enter='transition ease-out duration-1000'
          enterFrom='opacity-0 translate-x-full'
          enterTo='opacity-100 translate-x-0'
          leave='transition ease-out duration-1000'
          leaveFrom='opacity-100 translate-x-0'
          leaveTo='opacity-0 translate-x-full'
        >
          <div className='fixed inset-0 z-10 h-screen w-screen overflow-hidden bg-bgText md:ml-auto md:w-[658px] xl:w-[1072px]'>
            <DialogPanel>
              <div className='mx-auto w-[365px] px-4 py-10 md:mx-0 md:w-[660px] md:px-[42px] md:py-[60px] xl:w-[967px] xl:px-[60px] xl:py-[90px]'>
                <Button
                  onClick={closeModal}
                  variant='closeModal'
                  className='mb-5 ml-auto block md:absolute md:right-[25px] md:top-[25px] md:mb-[11px] xl:right-[35px] xl:top-[35px] xl:mb-[31px]'
                />
                <ScrollBox
                  className={clsx(
                    s.contentHeight,
                    'overflow-y-auto pr-[5px] scrollbar-track-bgPlug md:pr-[10px] xl:flex xl:gap-[43px]',
                  )}
                >
                  <div className='xl:w-[386px]'>
                    <Image
                      src={img}
                      alt={name}
                      width={328}
                      height={330}
                      className='mb-4	h-[330px] w-full object-cover object-top md:h-[440px] xl:h-[463px]'
                    />
                    <h3 className='mb-2 text-body2_tab font-medium text-green xl:text-body2_desk'>
                      {name}
                    </h3>
                    <p className='paragraph mb-[30px] md:mb-10 xl:mb-0'>
                      {position}
                    </p>
                  </div>
                  <div className='xl:flex xl:h-[463px] xl:w-[418px] xl:flex-col xl:justify-between'>
                    <p className='paragraph mb-[30px] md:mb-10 xl:mb-0'>
                      {description}
                    </p>
                    <div className='md:flex md:justify-between'>
                      <p className='paragraph mb-[30px] h-[42px] w-[262px] bg-bgPlug px-[15px] py-[10px] text-center text-green md:mb-0'>
                        {teamPlugTypes[plug]}
                      </p>
                      {socialMedia && socialMedia?.length > 0 && (
                        <SocialMedia
                          socialMedia={socialMedia}
                          lightMode={false}
                        />
                      )}
                    </div>
                  </div>
                </ScrollBox>
              </div>
            </DialogPanel>
          </div>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
};

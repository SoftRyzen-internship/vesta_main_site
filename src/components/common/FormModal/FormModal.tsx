import { FC, Fragment } from 'react';

import { clsx } from 'clsx';
import {
  Transition,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';

import { Button } from '@/components/ui/Button';

import { IFormModalProps } from './FormModal.types';

import SuccessIcon from '/public/icons/success.svg';
import UnsuccessIcon from '/public/icons/noSuccess.svg';

export const FormModal: FC<IFormModalProps> = ({
  openModal,
  closeModal,
  title,
  text,
  isSuccessful,
}) => {
  return (
    <Transition
      appear
      as={Fragment}
      show={openModal}
      enter='transition'
      enterFrom='opacity-0 '
      enterTo='opacity-100'
      leave='transition'
      leaveFrom='opacity-100 '
      leaveTo='opacity-0'
    >
      <Dialog
        onClose={closeModal}
        as='div'
        className='relative z-10 focus:outline-none'
      >
        <div
          className='fixed inset-0 flex items-center justify-center bg-bgModalTeamMember backdrop-blur-xl'
          aria-hidden='true'
        >
          <DialogPanel className='relative flex h-[300px] w-[328px] flex-col items-center justify-center rounded-[10px] bg-bgWhite text-center md:h-[370px] md:w-[624px] xl:h-[438px] xl:w-[802px]'>
            <Button
              handleClick={closeModal}
              variant='closeModal'
              className='absolute right-5 top-5 mb-4 md:right-[25px] md:top-[25px] md:mb-10 xl:mb-[63px]'
            />
            {isSuccessful ? (
              <SuccessIcon
                width={47}
                height={47}
                className='fill-orangeText md:h-[100px] md:w-[100px]'
              />
            ) : (
              <UnsuccessIcon
                width={47}
                height={47}
                className='fill-red md:h-[100px] md:w-[100px]'
              />
            )}
            <DialogTitle
              as='h3'
              className={clsx(
                'mb-4 mt-6 text-body3_desk md:text-body2_desk xl:text-body1_desk',
                isSuccessful ? 'text-orangeText' : 'text-red',
              )}
            >
              {title}
            </DialogTitle>
            <p className='paragraph smOnly:max-w-[220px] xl:text-body3_desk'>
              {text}
            </p>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
};

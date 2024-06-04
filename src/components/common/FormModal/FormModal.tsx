import { FC, Fragment } from 'react';

import { clsx } from 'clsx';

import {
  Transition,
  Dialog,
  DialogPanel,
  DialogTitle,
  // TransitionChild,
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
          className='justify-center bg-bgModalTeamMember fixed inset-0 flex items-center backdrop-blur-xl'
          aria-hidden='true'
        >
          <DialogPanel
            className={clsx(
              'relative h-[300px] w-[328px] rounded-[10px] bg-bgWhite text-center md:h-[370px] md:w-[624px] xl:h-[438px] xl:w-[802px]',
              // isSuccessful
              //   ? 'px-[54px] py-[60px] md:px-[114px] md:py-[89px] xl:px-[57px] xl:py-[112px]'
              //   : 'md:px-[159px] md:py-[78px] xl:px-[198px] xl:py-[102px]',
            )}
          >
            <Button
              handleClick={closeModal}
              variant='closeModal'
              className='mb-5 ml-auto block md:absolute md:right-[25px] md:top-[25px] md:mb-[11px] xl:right-[35px] xl:top-[35px] xl:mb-[31px]'
            />
            {isSuccessful ? (
              <SuccessIcon width={102} height={102} className='fill-inherit' />
            ) : (
              <UnsuccessIcon
                width={100}
                height={100}
                className='fill-inherit'
              />
            )}
            <DialogTitle
              as='h3'
              className={clsx(
                'text-body3_desk md:text-body2_desk xl:text-body1_desk',
                isSuccessful ? 'text-orangeText' : 'text-red',
              )}
            >
              {title}
            </DialogTitle>
            <p className='paragraph xl:text-body3_desk'>{text}</p>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
};

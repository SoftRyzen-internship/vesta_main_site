import { FC, useId } from 'react';
import { clsx } from 'clsx';

import ErrorIcon from '@/../public/icons/error.svg';

import { ICustomInputProps } from './CustomInput.types';

export const CustomInput: FC<ICustomInputProps> = ({
  label,
  errorMessage,
  className,
  ...rest
}) => {
  const id = useId();

  return (
    <div
      className={clsx(
        'relative flex flex-col gap-1 tracking-[-0.14px]',
        className,
      )}
    >
      <label htmlFor={id} className='pl-2 tracking-[-0.14px] text-grey'>
        {label}
      </label>
      <input
        {...rest}
        id={id}
        className={clsx(
          'border-[0.5px] border-bgText bg-bgText p-6  tracking-[-0.14px] text-darkGrey transition  placeholder:text-grey hover:border-accent focus:border-accent  focus:outline-0',
          errorMessage && 'border-red',
        )}
      />
      {errorMessage ? (
        <>
          <ErrorIcon
            width={16}
            height={16}
            className='absolute bottom-[-25px] left-0 fill-red '
          />
          <span className='absolute bottom-0 left-5 flex translate-y-full pt-2 text-xs font-light leading-[1.6] tracking-[-0.12px] text-red'>
            {errorMessage}
          </span>
        </>
      ) : null}
    </div>
  );
};

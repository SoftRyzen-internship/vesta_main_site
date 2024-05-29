import { FC, useId } from 'react';
import { clsx } from 'clsx';

import ErrorIcon from '@/../public/icons/error.svg';

import { ITextareaProps } from './Textarea.types';

export const Textarea: FC<ITextareaProps> = ({
  label,
  errorMessage,
  value,
  className,
  ...rest
}) => {
  const id = useId();

  return (
    <div className={clsx('relative flex flex-col gap-1', className)}>
      <label htmlFor={id} className='paragraph pl-2 text-grey'>
        {label}
      </label>
      <textarea
        {...rest}
        id={id}
        className={clsx(
          'paragraph h-[151px] resize-none border-[0.5px] border-bgText bg-bgText p-6 transition placeholder:text-grey placeholder:transition hover:border-accent focus:border-accent focus:outline-0 focus:placeholder:opacity-0',
          value && 'bg-filledInputBg',
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

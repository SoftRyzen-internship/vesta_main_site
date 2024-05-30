import { FC } from 'react';
import { clsx } from 'clsx';

import { ICheckboxProps } from './Checkbox.types';

import CheckIcon from '@/../public/icons/checkmark.svg';

export const Checkbox: FC<ICheckboxProps> = ({
  checked,
  // handleChange,
  errorMessage,
  text,
  className,
  ...rest
}) => {
  // const onBooleanChange = (e: ChangeEvent<HTMLInputElement>) =>
  //   handleChange(e.target.checked);

  return (
    <label className={clsx('flex cursor-pointer gap-4', className)}>
      <input
        {...rest}
        type='checkbox'
        checked={checked}
        // onChange={onBooleanChange}
        className='peer absolute appearance-none'
      />
      <span
        className={clsx(
          'flex h-6 w-6 shrink-0 items-center justify-center rounded border  text-transparent transition peer-hover:outline peer-hover:outline-2 peer-hover:outline-bgText peer-focus:outline peer-focus:outline-2 peer-focus:outline-bgText ',
          checked && 'bg-accent text-white',
          errorMessage ? ' border-red' : 'border-accent',
        )}
      >
        <CheckIcon className='transition' width={17} height={16}/>
      </span>
      <span className='paragraph'>{text}</span>
    </label>
  );
};

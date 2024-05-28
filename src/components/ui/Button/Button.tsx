import clsx from 'clsx';

// import Facebook from '/public/icons/Facebook.svg';
// import Close from '/public/icons/Close.svg';

import { ButtonProps } from './Button.types';

export const Button = ({
  text,
  handleClick,
  type = 'button',
  variant = 'primary',
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={clsx(
        'mr-10 inline-block text-sm font-bold uppercase leading-[1.5] tracking-[0.03em] text-[#f3efe9]',
        variant === 'primary' &&
          ' width-[240px] height-[57px] bg-[#f2600c] px-8 py-[18px] hover:bg-[#1a341b]  hover:opacity-60 focus:bg-[#72806d] active:bg-[#1a341b]',
        variant === 'contacts' &&
          ' h-[53px] w-[200px] border-[0.50px] border-solid border-[#f3efe9] px-6 py-4 hover:border-[#f7a06d] hover:text-[#f7a06d] focus:border-[#ee9764] focus:text-[#ee9764] active:border-[#f2600c] active:text-[#f2600c]',
        variant === 'secondary' &&
          'border-b border-solid border-[#f2600c] py-1 text-[#f2600c] hover:border-[#1a341b] hover:text-[#1a341b] hover:opacity-60 focus:border-[#ee9764] focus:text-[#ee9764] active:border-[#1a341b] active:text-[#1a341b]',
        variant === 'open' &&
          'flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[rgba(242,239,233,0.2)] backdrop-blur-sm hover:bg-[#849080] focus:bg-[rgba(132,144,128,0.2)] active:bg-[#1a341b]',
        variant === 'play' &&
          'flex h-[51px] w-[51px] items-center justify-center rounded-full bg-[#f2600c] hover:bg-[#849080] focus:bg-[#ee9764] active:bg-[#1a341b]',
        className,
      )}
    >
      {text && text}
      {
        variant === 'open' && ''
        // <Facebook width={24} height={24} aria-label='відкрити facebook' />
      }
      {
        variant === 'play' && ''
        // <Facebook width={24} height={24} aria-label='відкрити facebook' />
      }
      {
        variant === 'close' && ''
        // <Close
        //   width={24}
        //   height={24}
        //   aria-label='відкрити facebook'
        //   stroke='#1A341B'
        //   className='hover:stroke-[#F2600C] focus:stroke-[#72806D] active:stroke-[#F7A06D]'
        // />
      }
    </button>
  );
};

import { FC } from 'react';
import Link from 'next/link';

import clsx from 'clsx';

import { ILinkButtonProps } from './LinkButton.types';

export const LinkButton: FC<ILinkButtonProps> = ({
  text,
  href,
  rel = undefined,
  target = undefined,
  variant = 'primary',
  className,
  onClick,
}) => {
  return (
    <Link
      href={href}
      rel={rel}
      target={target}
      className={clsx(
        ' inline-block text-center text-button font-bold uppercase tracking-[0.03em] transition',
        variant === 'primary' &&
          'h-[57px] w-60 bg-orangeText px-6 py-[18px] text-bgText hover:bg-green hover:opacity-60 focus:bg-greenFocus active:bg-green',
        variant === 'contactsHeader' &&
          ' h-[53px] w-[200px] border-[0.50px] border-solid border-bgText px-[55px] py-4 text-bgText hover:border-hoverOrange hover:text-hoverOrange focus:border-focusOrange focus:text-focusOrange active:border-orangeText active:text-orangeText',
        variant === 'secondary' &&
          'border-b border-solid border-orangeText py-1 text-orangeText hover:border-green hover:text-green hover:opacity-60 focus:border-focusOrange focus:text-focusOrange active:border-green active:text-green',
        className,
      )}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

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
}) => {
  return (
    <Link
      href={href}
      rel={rel}
      target={target}
      className={clsx(
        ' text-button inline-block text-center font-bold uppercase tracking-[0.03em] transition',
        variant === 'primary' &&
          'bg-orangeText text-bgText hover:bg-green focus:bg-greenFocus active:bg-green h-[57px] w-60 px-6 py-[18px] hover:opacity-60',
        variant === 'contactsHeader' &&
          ' border-bgText text-bgText hover:border-hoverOrange hover:text-hoverOrange focus:border-focusOrange focus:text-focusOrange active:border-orangeText active:text-orangeText h-[53px] w-[200px] border-[0.50px] border-solid px-[55px] py-4',
        variant === 'secondary' &&
          'border-orangeText text-orangeText hover:border-green hover:text-green focus:border-focusOrange focus:text-focusOrange active:border-green active:text-green border-b border-solid py-1 hover:opacity-60',
        className,
      )}
    >
      {text}
    </Link>
  );
};

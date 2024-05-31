import { FC } from 'react';
import Link from 'next/link';

import clsx from 'clsx';

import { INavLinkProps } from './NavLink.types';

export const NavLink: FC<INavLinkProps> = ({
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
        ' text-button inline-block text-center font-bold uppercase tracking-[0.03em] transition-colors duration-300',
        variant === 'primary' &&
          'bg-orangeText text-bgText hover:bg-green active:bg-green focus:bg-greenFocus h-[57px] w-60 px-6 py-[18px] hover:opacity-60',
        variant === 'contactsHeader' &&
          ' border-bgText text-bgText active:border-orangeText active:text-orangeText hover:border-hoverOrange hover:text-hoverOrange focus:border-focusOrange focus:text-focusOrange h-[53px] w-[200px] border-[0.50px] border-solid px-[55px] py-4',
        variant === 'secondary' &&
          'border-orangeText text-orangeText hover:border-green hover:text-green active:border-green active:text-green focus:border-focusOrange focus:text-focusOrange border-b border-solid py-1 hover:opacity-60',
        className,
      )}
    >
      {text}
    </Link>
  );
};

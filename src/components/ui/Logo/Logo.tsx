import { FC } from 'react';
import Link from 'next/link';

import { LogoProps } from './Logo.types';
import { logoData } from '@/data';

import LogoIcon from '@/../public/icons/vestaLogoWhite.svg';

export const Logo: FC<LogoProps> = ({ click }) => {
  return (
    <>
      <Link
        href='/'
        aria-label={logoData.ariaLabel}
        className='inline-block text-logoWhite transition hover:text-hoverDark focus:text-hoverDark focus:outline-1 active:text-orangeText'
        onClick={click}
      >
        <LogoIcon width={138} height={36} fill='currentColor' />
      </Link>
    </>
  );
};

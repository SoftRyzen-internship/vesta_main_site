import { FC } from 'react';
import Link from 'next/link';

import { logoData } from '@/data';

import LogoIcon from '@/../public/icons/vestaLogoWhite.svg';

export const Logo: FC = () => {
  return (
    <>
      <Link
        href='/'
        aria-label={logoData.ariaLabel}
        className='inline-block text-logoWhite transition hover:text-hoverDark focus:text-hoverDark focus:outline-1 active:text-orangeText'
      >
        <LogoIcon width={138} height={36} fill='currentColor' />
      </Link>
    </>
  );
};

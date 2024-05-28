import { FC } from 'react';
import Link from 'next/link';

import { logo } from '@/data';
// import { LogoSvg } from './LogoSvg';
import LogoIcon from '@/../public/icons/vesta_logo_white.svg';


export const Logo:FC = () => {
  return (
    <>
      <Link
        href='/'
        aria-label={logo.ariaLabel}
        className='text-logoWhite transition hover:text-hoverDark focus:outline-1 active:text-orangeText'
      >
        <LogoIcon width={113} height={29} className='fill-current'/>
        {/* <LogoSvg /> */}
      </Link>
    </>
  );
};

import { FC } from 'react';
import Link from 'next/link';

import { logo } from '@/data';
// import { LogoSvg } from './LogoSvg';
import LogoIcon from '@/../public/icons/vestaLogoWhite.svg';


export const Logo:FC = () => {
  return (
    <>
      <Link
        href='/'
        aria-label={logo.ariaLabel}
        className='fill-[#F2EFE8] transition hover:fill-[#9C4E12] focus:outline-1  active:fill-[#F2600C]'
      >
        <LogoIcon
          width={113}
          height={29}
          className='fill-[#F2EFE8] hover:fill-[#9C4E12]'
        />
        {/* <LogoSvg/> */}
      </Link>
    </>
  );
};

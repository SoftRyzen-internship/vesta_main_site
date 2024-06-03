import { FC } from 'react';
import Link from 'next/link';

import { clsx } from 'clsx';

import { NavListProps } from './NavList.types';

export const NavList: FC<NavListProps> = ({ navList, forFooter, click }) => {
  return (
    <ul
      className={clsx(
        'flex flex-col items-start',
        forFooter && 'gap-[15px]',
        !forFooter && 'gap-[24px] xl:flex-row xl:gap-[40px]',
      )}
    >
      {navList.map(({ id, title, path }) => (
        <li key={id}>
          <Link
            href={path}
            className={clsx(
              'text-bgText hover:text-hoverOrange focus:text-focusOrange active:text-orangeText',
              forFooter && 'text-body4_desk',
              !forFooter && 'text-body2_desk xl:text-body4_desk',
            )}
            onClick={click}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;

import { FC } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';

import { NavListProps } from './NavList.types';
export const NavList: FC<NavListProps> = ({ navList, forFooter }) => {
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
              forFooter && 'text-body4_desk',
              !forFooter && 'text-body2_desk xl:text-body4_desk',
            )}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;

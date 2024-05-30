import React from 'react';

import Link from 'next/link';

import navList from '@/data/navlist.json';

export const NavList = () => {
  return (
    <ul className='flex flex-col items-start gap-[24px] xl:flex-row xl:gap-[40px]'>
      {navList.map(({ id, title, sectionId }) => (
        <li key={id}>
          <Link
            href={`#${sectionId}`}
            className='text-body2_desk xl:text-body4_desk'
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;

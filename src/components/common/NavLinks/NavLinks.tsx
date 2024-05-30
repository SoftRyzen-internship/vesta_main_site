import { FC } from 'react';
import Link from 'next/link';

import { navListData } from '@/data';

export const NavList: FC = () => {
  return (
    <ul className='flex flex-col items-start gap-[24px] xl:flex-row xl:gap-[40px]'>
      {navListData.map(({ id, title, sectionId }) => (
        <li key={id}>
          <Link
            href={`#${sectionId}`}
            onClick={close}
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

'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';

import { clsx } from 'clsx';
import { Link as ScrollLink } from 'react-scroll';

import { heroLessData } from '@/data';

import ArrowDown from '@/../public/icons/arrowDown.svg';

import s from './HeroLess.module.css';

export const HeroLess: FC = () => {
  const pathname = usePathname();
  const {
    toAboutId,
    toProjectsId,
    titleAbout,
    titleProjects,
    descriptionAbout,
    descriptionProjects,
  } = heroLessData;

  const scrollTo: { [key: string]: string } = {
    '/about': toAboutId,
    '/projects': toProjectsId,
  };
  const titles: { [key: string]: string } = {
    '/about': titleAbout,
    '/projects': titleProjects,
  };
  const descriptions: { [key: string]: string } = {
    '/about': descriptionAbout,
    '/projects': descriptionProjects,
  };

  const to = scrollTo[pathname];
  const title = titles[pathname];
  const description = descriptions[pathname];

  return (
    <section
      className={clsx(
        s.heroAbout,
        'pb-[118px] pt-[187px] md:pb-20 md:pt-[209px] xl:pb-[103px] xl:pt-[206px]',
      )}
    >
      <div className='container'>
        <h1 className='title mb-[243px] text-bgText md:mb-[295px] xl:mb-[356px]'>
          {title}
        </h1>
        <ScrollLink
          href='#'
          to={to}
          spy={true}
          smooth={true}
          duration={800}
          offset={13}
          className='group mr-auto flex w-max items-center gap-[15px]'
        >
          <ArrowDown
            width={36}
            height={36}
            fill='#F3EFE9'
            className='transition group-hover:fill-hoverOrange group-focus:fill-focusOrange'
          />
          <p
            className={clsx(
              'max-w-[255px] text-body3 text-bgText xl:text-body3_desk',
            )}
          >
            {description}
          </p>
        </ScrollLink>
      </div>
    </section>
  );
};

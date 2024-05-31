import { FC } from 'react';
import Image from 'next/image';

import clsx from 'clsx';

import { NavLink } from '@/components/ui/Link';

import { IProjectCardProps } from './ProjectCard.types';

import s from './ProjectCard.module.css';

export const ProjectCard: FC<IProjectCardProps> = ({
  img,
  imgAlt,
  title,
  description,
  linkText,
  isOddCard,
  link,
}) => {
  return (
    <div
      className={clsx(
        'border-darkGrey  border-b-[0.50px] border-solid  pb-[30px] md:flex md:gap-[54px] md:pb-[63px] xl:gap-[129px] xl:pb-10 ',
        isOddCard
          ? ' flex-row justify-start xl:gap-[129px]'
          : 'flex-row-reverse justify-end xl:gap-[232px]',
      )}
    >
      <Image
        src={img}
        alt={imgAlt}
        width={328}
        height={250}
        className='mb-[30px] w-full object-cover object-center md:mb-0 md:h-[250px] md:w-[300px] xl:h-[300px] xl:w-[492px]'
      />
      <div>
        <h2
          className={`font-kyiv text-green text-h3 text-inherit ${s.ellipsis} ${s.titleEllipsis} md:text-h3_tab xl:text-h3_desk mb-5 font-bold md:mb-10`}
        >
          {title}
        </h2>
        <p
          className={`paragraph text-darkGrey ${s.ellipsis} ${s.descEllipsis} mb-5 md:mb-10 xl:w-[492px]`}
        >
          {description}
        </p>
        <NavLink href={link} text={linkText} variant='secondary' />
      </div>
    </div>
  );
};

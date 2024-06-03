'use client';
import Image from 'next/image';

import { NavLink } from '@/components/ui/Link';

import { mainProjectsData } from '@/data';
import { getSpecialWords } from '@/utils';

export const MainProjects = () => {
  const {
    title,
    description,
    img,
    imgAlt,
    buttonProps: { text, link },
  } = mainProjectsData;

  return (
    <section className='container py-[60px] xl:flex xl:items-center xl:gap-[104px]'>
      <div className='xl:w-[549px]'>
        <h2 className='font-kyiv text-h3 text-green md:text-h3_tab xl:text-h3_desk mb-[30px] font-bold xl:mb-5'>
          {getSpecialWords(title, 0, 4)}&nbsp;
          <span className='bg-yellowLight'>{getSpecialWords(title, 4, 4)}</span>
          &nbsp;{getSpecialWords(title, 8, 5)}
        </h2>
        <p className='paragraph text-darkGrey mb-[30px] md:mb-10 md:w-[415px] xl:mb-10'>
          {description}
        </p>
        <NavLink
          text={text}
          href={link}
          className='hidden md:mb-10 md:inline-block xl:mb-0'
        />
      </div>
      <div>
        <Image
          src={img}
          width={328}
          height={260}
          alt={imgAlt}
          className=' mb-[30px] h-[260px] w-full object-cover md:h-[470px] xl:mb-0 xl:h-[470px] xl:w-[562px]'
        />
        <NavLink text={text} href={link} className='w-full md:hidden' />
      </div>
    </section>
  );
};

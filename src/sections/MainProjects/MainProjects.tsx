'use client';

import Image from 'next/image';

import { LinkButton } from '@/components/ui/LinkButton';

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
    <section className='py-[60px] md:py-[50px] xl:py-[65px]'>
      <div className='container xl:flex xl:items-center xl:gap-[104px]'>
        <div className='xl:w-[549px]'>
          <h2 className='mb-[30px] font-kyiv text-h3 font-bold text-green md:text-h3_tab mdOnly:w-[598px] xl:mb-5 xl:text-h3_desk'>
            {getSpecialWords(title, 0, 4, { end: true })}
            <span className='bg-yellowLight'>
              {getSpecialWords(title, 4, 4)}
            </span>
            {getSpecialWords(title, 8, 5, { start: true })}
          </h2>
          <p className='paragraph mb-[30px] text-darkGrey md:mb-10 md:w-[415px] xl:mb-10'>
            {description}
          </p>
          <LinkButton
            href={link}
            className='mb-[30px] smOnly:w-full md:mb-10 md:inline-block xl:mb-0'
          >
            {text}
          </LinkButton>
        </div>
        <div>
          <Image
            src={img}
            width={328}
            height={260}
            alt={imgAlt}
            sizes='(min-width: 768px) 100%, (min-width: 1280px) 562px, 100%'
            className='h-[260px] w-full object-cover md:h-[470px]  xl:h-[470px] xl:w-[562px]'
          />
        </div>
      </div>
    </section>
  );
};

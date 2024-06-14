import { FC } from 'react';

import Image from 'next/image';

import { SocialMedia } from '@/components/ui/SocialMedia';

import { projectTemplateData } from '@/data';

export const ProjectTemplate: FC = () => {
  const {
    full: { title, description, socials, img, imgAlt, subtitle, text },
  } = projectTemplateData;

  return (
    <section className='pb-[60px] pt-[134px] md:pb-[100px] md:pt-[154px] xl:pb-[130px] xl:pt-[191px]'>
      <div className='container'>
        <div className='justify-between xl:flex'>
          <div className='mb-[30px]  md:mb-10 md:max-w-[492px] xl:mb-0'>
            <h1 className='subtitle'>{title}</h1>
            <p className='mt-5 pb-10 text-body3 text-darkGrey xl:text-body3_desk'>
              {description}
            </p>
            <SocialMedia lightMode={false} socialMedia={socials} />
          </div>
          <Image
            src={img}
            alt={imgAlt}
            width={448}
            height={232}
            className='h-[232px] w-full object-cover md:h-[366px] md:w-[684px] xl:w-[595px]'
          />
        </div>

        <div className='mt-[60px] justify-between md:mt-[100px] xl:mt-[130px] xl:flex '>
          {subtitle ? (
            <h2 className='text-body1 md:max-w-[566px] md:text-body1_tab xl:text-body1_desk xl:max-w-[492px]'>
              {subtitle}
            </h2>
          ) : null}
          {text ? (
            <p className='paragraph md:max-w-[566px] xl:max-w-[595px] notXl:mt-10'>
              {text}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

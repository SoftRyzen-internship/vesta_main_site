import { FC } from 'react';
import Image from 'next/image';

import { SocialMedia } from '@/components/ui/SocialMedia';

import { IOneProjectsProps } from './ProjectTemplate.type';

export const ProjectTemplate: FC<IOneProjectsProps> = ({ oneProject }) => {
  const { title, pageText, add_title, add_text, image, social } = oneProject;
  const url =
    image.data?.attributes?.url ?? '/images/noData/no-data-image.webp';
  const alternativeText = image.data?.attributes?.alternativeText ?? title;

  return (
    <section className='pb-[60px] pt-[134px] md:pb-[100px] md:pt-[154px] xl:pb-[130px] xl:pt-[191px]'>
      <div className='container'>
        <div className='justify-between xl:flex'>
          <div className='mb-[30px] md:mb-10 md:max-w-[492px] xl:mb-0'>
            <h1 className='subtitle max-w-[300px] md:max-w-[395px]'>{title}</h1>
            <p className='mt-5 whitespace-pre-wrap pb-10 text-body3 text-darkGrey xl:text-body3_desk'>
              {pageText}
            </p>
            {social && social?.length > 0 ? (
              <SocialMedia lightMode={false} socialMedia={social} />
            ) : null}
          </div>
          <Image
            src={url}
            alt={alternativeText}
            width={448}
            height={232}
            className='h-[232px] w-full object-cover md:h-[366px] md:w-[684px] xl:w-[595px]'
          />
        </div>

        <div className='mt-[60px] justify-between md:mt-[100px] xl:mt-[130px] xl:flex '>
          {add_title ? (
            <h2 className='max-w-[320px] text-body1 md:max-w-[550px] md:text-body1_tab xl:max-w-[472px] xl:text-body1_desk'>
              {add_title}
            </h2>
          ) : null}
          {add_text ? (
            <p className='paragraph whitespace-pre-wrap md:max-w-[566px] xl:max-w-[595px] notXl:mt-10'>
              {add_text}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

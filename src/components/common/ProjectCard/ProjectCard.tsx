import { FC } from 'react';
import Image from 'next/image';

import { clsx } from 'clsx';

import { LinkButton } from '@/components/ui/LinkButton';

import { IProjectCardProps } from './ProjectCard.types';

export const ProjectCard: FC<IProjectCardProps> = ({
  item: { slug, image, title, description },
  linkText,
  isOddCard,
}) => {
  const url =
    image.data?.attributes?.url ?? '/images/mainHero/main-hero-bg-tab@1x.webp';
  const alternativeText = image.data?.attributes?.alternativeText ?? title;

  return (
    <div
      className={clsx(
        'overflow-hidden border-b-[0.50px] border-solid border-darkGrey pb-[30px] md:flex md:gap-[54px] md:pb-10 xl:gap-[129px]',
        isOddCard
          ? 'flex-row justify-start xl:gap-[129px]'
          : 'flex-row-reverse justify-end xl:gap-[232px]',
      )}
    >
      <Image
        src={url}
        alt={alternativeText}
        width={448}
        height={250}
        className='mb-[30px] h-[250px] w-full object-cover object-center md:mb-0 md:h-[250px] md:w-[300px] xl:h-[300px] xl:w-[492px]'
      />
      <div>
        <h2 className='mb-5 line-clamp-2 font-kyiv text-h3 font-bold text-green text-inherit md:mb-10 md:text-h3_tab xl:text-h3_desk'>
          {title}
        </h2>
        <p className='paragraph mb-5 line-clamp-4 md:mb-10 xl:w-[492px]'>
          {description}
        </p>
        <LinkButton href={`/projects/${slug}`} variant='secondary'>
          {linkText}
        </LinkButton>
      </div>
    </div>
  );
};

import { FC } from 'react';
import Image from 'next/image';

import { ITeamCardProps } from './TeamCard.types';

import { teamCard } from '@/data';

import { Button } from '@/components/ui/Button';

import img from '@/../public/images/team/BohdanaLevytska.webp';

export const TeamCard: FC<ITeamCardProps> = ({
  name = teamCard.name,
  src = img,
  alt = teamCard.alt,
  position = teamCard.position,
  onClick = () => {
    console.log('Oops!');
  },
}) => {
  return (
    <div className='smOnly:max-w-[328px] outline-dotted outline-yellow-400 md:w-[330px] xl:w-[389px]'>
      <div className='smOnly:max-w-[328px] relative mb-4 h-[330px] md:h-[440px] md:w-[330px] xl:h-[463px] xl:w-[389px]'>
        <Image
          className='object-cover'
          src={src}
          alt={alt}
          fill
          sizes='(min-width: 768px) 330px, (min-width: 1280px) 389px, 328px'
          priority
        />
        <Button
          variant='openTeamMember'
          handleClick={onClick}
          className='absolute right-5 top-5 xl:right-[22px]'
        />
      </div>
      <h3 className='font-eukraine text-body2 xl:text-body2_desk md:text-body2_tab mb-2 font-medium'>
        {name}
      </h3>
      <p className='font-eukraine paragraph font-normal'>{position}</p>
    </div>
  );
};

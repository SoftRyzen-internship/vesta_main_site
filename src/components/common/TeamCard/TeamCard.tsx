import { FC } from 'react';
import Image from 'next/image';

import { TeamCardProps } from './TeamCard.types';

import { teamCard } from '@/data';

import img from '@/../public/images/team/BohdanaLevytska.webp';
import { Button } from '@/components/ui/Button';

export const TeamCard: FC<TeamCardProps> = ({
  name = teamCard.name,
  src = img,
  alt = teamCard.alt,
  position = teamCard.position,
}) => {
  return (
    <div className='max-w-[328px]'>
      <div className='relative mb-4 h-[330px]'>
        <Image
          className='object-cover'
          src={src}
          alt={alt}
          fill
          priority
          sizes='(min-width: 768px) 330px, (min-width: 1280px) 389px, 328px'
        />
        <Button
          variant='openTeamMember'
          handleClick={() => console.log('click')}
          className='absolute right-5 top-5'
        />
      </div>
      <h3 className='font-eukraine text-caption mb-8 font-medium'>{name}</h3>
      <p className='font-eukraine text-body4 text-darkGrey font-normal tracking-[-0.01em]'>
        {position}
      </p>
    </div>
  );
};

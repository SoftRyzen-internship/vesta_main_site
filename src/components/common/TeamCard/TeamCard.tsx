import { FC } from 'react';
import Image from 'next/image';

import { TeamCardProps } from './TeamCard.types';

import { teamCard } from '@/data';

import img from '@/../public/images/team/BohdanaLevytska.webp';

export const TeamCard: FC<TeamCardProps> = ({
  name = teamCard.name,
  src = img,
  alt = teamCard.alt,
  position = teamCard.position,
}) => {
  return (
    <div className='max-w-[328px] outline outline-slate-800'>
      <div className='relative h-[330px]'>
        <Image
          className='object-cover'
          src={src}
          alt={alt}
          fill
          priority
          sizes='(min-width: 768px) 330px, (min-width: 1280px) 389px, 328px'
        />
      </div>
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  );
};

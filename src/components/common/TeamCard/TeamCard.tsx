import { FC, useState } from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/Button';

import { teamCard } from '@/data';

import { ITeamCardProps } from './TeamCard.types';

import img from '@/../public/images/team/BohdanaLevytska.webp';

import { TeamCardModal } from '../TeamCardModal';

export const TeamCard: FC<ITeamCardProps> = ({
  name = teamCard.name,
  src = teamCard.src,
  alt = teamCard.alt,
  position = teamCard.position,
  description = teamCard.description,
  plug = teamCard.plug,
  socialMedia = teamCard.socialMedia,
}) => {
  const [openModal, setIsOpenModal] = useState(false);
  const onClick = () => {
    setIsOpenModal(true);
  };
  return (
    <div className='smOnly:max-w-[328px] md:w-[330px] xl:w-[389px]'>
      <div className='relative mb-4 h-[330px] w-full md:h-[440px] xl:h-[463px]'>
        <Image
          className='h-[100%] w-[100%] object-cover'
          src={img}
          alt={alt}
          sizes='(min-width: 768px) 330px, (min-width: 1280px) 389px, 328px'
        />
        <Button
          variant='openTeamMember'
          onClick={onClick}
          className='absolute right-5 top-5 xl:right-[22px]'
        />
      </div>
      <h3 className='mb-2 text-body2 font-medium md:text-body2_tab xl:text-body2_desk'>
        {name}
      </h3>
      <p className='paragraph'>{position}</p>
      <TeamCardModal
        openModal={openModal}
        closeModal={() => setIsOpenModal(false)}
        img={src}
        name={name}
        position={position}
        description={description}
        plug={plug}
        socialMedia={socialMedia}
      />
    </div>
  );
};

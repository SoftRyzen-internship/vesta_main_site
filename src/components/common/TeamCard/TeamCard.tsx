import { FC, useState } from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/Button';

import { ITeamCardProps } from './TeamCard.types';

import { TeamCardModal } from '../TeamCardModal';

export const TeamCard: FC<ITeamCardProps> = ({
  item: { name, image, position, status, text, socialItem },
}) => {
  const [openModal, setIsOpenModal] = useState(false);
  const onClick = () => {
    setIsOpenModal(true);
  };
  const { url, alternativeText } = image.data.attributes;
  return (
    <div className='smOnly:max-w-[328px] md:w-[330px] xl:w-[389px]'>
      <div className='relative mb-4 h-[330px] w-full overflow-hidden md:h-[440px] xl:h-[463px]'>
        <Image
          src={url}
          alt={alternativeText}
          width={328}
          height={330}
          className='h-[100%] w-[100%] object-cover'
        />
        <Button
          variant='openTeamMember'
          onClick={onClick}
          className='absolute right-5 top-5 cursor-pointer xl:right-[22px]'
        />
      </div>
      <h3 className='mb-2 text-body2 font-medium md:text-body2_tab xl:text-body2_desk'>
        {name}
      </h3>
      <p className='paragraph'>{position}</p>
      <TeamCardModal
        openModal={openModal}
        closeModal={() => setIsOpenModal(false)}
        img={url}
        name={name}
        position={position}
        description={text}
        plug={status}
        socialMedia={socialItem}
      />
    </div>
  );
};

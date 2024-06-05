//

import { FC } from 'react';

import { ISupportCardAboutProps } from './SupportCardAbout.types';

import { getSpecialWords, supportIconTypes } from '@/utils';

export const SupportCardAbout: FC<ISupportCardAboutProps> = ({
  icon,
  title,
  description,
}) => {
  const Icon = supportIconTypes[icon];
  return (
    <div className='xl:w-[492px]'>
      <Icon width={64} height={64} className='mb-5' />
      <h3 className='mb-[15px] text-body1 text-green md:text-body1_tab xl:text-body1_desk'>
        {getSpecialWords(title, 0, 1, { end: true })}
        <br />
        {getSpecialWords(title, 1, title.length - 2)}
      </h3>
      <p className='paragraph xl:w-[389px]'>{description}</p>
    </div>
  );
};

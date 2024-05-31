//

import { FC } from 'react';

import { ISupportCardAboutProps } from './SupportCardAbout.types';

import { supportIconTypes } from '@/utils';

export const SupportCardAbout: FC<ISupportCardAboutProps> = ({
  icon,
  title,
  description,
}) => {
  const Icon = supportIconTypes[icon];
  return (
    <div className='xl:w-[492px]'>
      <Icon width={64} height={64} className='mb-5' />
      <h3 className='text-body1 text-green md:text-body1_tab xl:text-body1_desk mb-[15px]'>
        {title}
      </h3>
      <p className='paragraph text-darkGrey xl:w-[389px]'>{description}</p>
    </div>
  );
};

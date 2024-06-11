'use client';

import { FC } from 'react';

import { motion } from 'framer-motion';

import { ISupportCardAboutProps } from './SupportCardAbout.types';

import { getSpecialWords, supportIconTypes } from '@/utils';

export const SupportCardAbout: FC<ISupportCardAboutProps> = ({
  item: { icon, title, description },
}) => {
  const Icon = supportIconTypes[icon];

  return (
    <div className='xl:w-[492px]'>
      <motion.div
        className='mb-5 xl:[--color:#849080] xl:[--opacity:56%] notXl:[--color:#F2600C] notXl:[--opacity:100%]'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        variants={{
          hidden: { color: 'var(--color)', opacity: 'var(--opacity)' },
          visible: { color: '#F2600C', opacity: 1 },
        }}
      >
        <Icon width={64} height={64} />
      </motion.div>

      <h3 className='mb-[15px] text-body1 text-green md:text-body1_tab xl:text-body1_desk'>
        {getSpecialWords(title, 0, 1, { end: true })}
        <br />
        {getSpecialWords(title, 1, title.length - 2)}
      </h3>
      <p className='paragraph xl:w-[389px]'>{description}</p>
    </div>
  );
};

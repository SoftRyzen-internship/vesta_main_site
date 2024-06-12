'use client';

import { FC, useEffect } from 'react';
import { clsx } from 'clsx';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useWindowSize } from '@/utils';
import { ISupportProps } from './SupportCards.types';

export const SupportCards: FC<ISupportProps> = ({
  id,
  amountOfHelp,
  typeOfHelp,
}) => {
  const initialValue = useMotionValue(0);
  const animatedValue = useTransform(initialValue, Math.round);
  const { width } = useWindowSize();
  const isDesktop = width && width > 1279 ? true : false;

  useEffect(() => {
    if (isDesktop) {
      const animation = animate(initialValue, amountOfHelp, { duration: 5 });
      return animation.stop;
    }
  }, [isDesktop, initialValue, amountOfHelp]);

  return (
    <div
      className={clsx(
        'h-[300px] w-[260px] flex-shrink-0 list-none bg-bgText md:h-[340px] md:w-[300px] xl:h-[368px] xl:w-[390px]',
        {
          'rounded-tl-[120px]': id === 1,
          'rounded-bl-[120px] rounded-br-[120px]': id === 2,
          'rounded-br-[120px]': id === 3,
        },
      )}
    >
      <div className='flex flex-col gap-2 px-[2px] py-[100px] text-center md:px-[22px] md:py-[108px] xl:px-[66px] xl:py-[113px]'>
        <motion.p
          className='font-kyiv text-h1 font-bold md:text-h1_tab xl:text-h1_desk'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.8 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          {isDesktop ? animatedValue : amountOfHelp}
        </motion.p>
        <p className='text-body3 xl:text-body3_desk'>{typeOfHelp}</p>
      </div>
    </div>
  );
};

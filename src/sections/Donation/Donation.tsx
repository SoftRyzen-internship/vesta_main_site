import { FC } from 'react';

import { clsx } from 'clsx';

import { LinkButton } from '@/components/ui/LinkButton';

import { donationData } from '@/data';

import s from './Donation.module.css';

export const Donation: FC = () => {
  const { title, description, tomorrow, donateButton, rel, target, monobanka } =
    donationData;
  return (
    <section
      className={clsx(
        s.donation,
        'pb-10 pt-[168px] md:pb-[60px] md:pt-[282px] xl:pb-[75px] xl:pt-[346px]',
      )}
    >
      <div className='container'>
        <div className='relative border-t-[0.5px] border-solid border-bgText pt-[15px]'>
          <h2 className='subtitle pb-5 text-bgText'>{title}</h2>
          <p className='pb-5 font-eukraine text-body3 text-bgText md:w-[334px] md:pb-10 md:text-body3_tab xl:w-[370px] xl:text-body3_desk'>
            {description}
          </p>
          <p className='text-body1 text-tomorrow line-through smOnly:pb-10 md:absolute md:right-0 md:top-[15px] md:text-body1_tab xl:text-body1_desk'>
            {tomorrow}
          </p>
          <LinkButton
            href={monobanka}
            rel={rel}
            target={target}
            className='w-full md:w-[240px]'
          >
            {donateButton}
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

import { FC } from 'react';

import { clsx } from 'clsx';

import { LinkButton } from '@/components/ui/LinkButton';

import { donationData } from '@/data';

import s from './Donation.module.css';

export const Donation: FC = () => {
  const { title, description, tomorrow, donateButton, rel, target, monobanka } =
    donationData;
  return (
    <section className={clsx(s.donation, 'pb-10 pt-[168px]')}>
      <div className='container'>
        <div className='border-t-[0.5px] border-solid border-bgText pt-[15px]'>
          <h2 className='subtitle pb-5 text-h2 font-bold text-bgText'>
            {title}
          </h2>
          <p className='pb-5 font-kyiv text-body3 text-bgText'>{description}</p>
          <p className='text-tomorrow pb-10 text-body1 line-through'>
            {tomorrow}
          </p>
          <LinkButton
            href={monobanka}
            text={donateButton}
            rel={rel}
            target={target}
            className='w-full'
          />
        </div>
      </div>
    </section>
  );
};

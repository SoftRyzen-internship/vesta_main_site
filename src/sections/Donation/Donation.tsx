import { LinkButton } from '@/components/ui/LinkButton';
import { donationData } from '@/data';
import { FC } from 'react';

export const Donation: FC = () => {
  return (
    <section className='pb-10 pt-[168px]'>
      <div className='container border-t-[0.5px] border-solid border-white pb-[15px]'>
        <hr className='text-bgText' />
        <h2 className='subtitle pb-5 text-h2 font-bold text-bgText'>
          {donationData.title}
        </h2>
        <p className='pb-5 text-body3 text-bgText'>
          {donationData.description}
        </p>
        <p className='text-tomorrow pb-10 text-body1 line-through'>
          {donationData.tomorrow}
        </p>
        <LinkButton
          href={donationData.monobanka}
          text={donationData.donateButton}
          rel={donationData.rel}
          target={donationData.target}
          className='w-full'
        />
      </div>
    </section>
  );
};

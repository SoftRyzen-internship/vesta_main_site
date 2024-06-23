'use client';

import { FC } from 'react';

import { clsx } from 'clsx';

import { LinkButton } from '@/components/ui/LinkButton';

import { contactsData } from '@/data';

import s from './Contacts.module.css';

export const Contacts: FC = () => {
  const { title, contactsButton, hrefLink } = contactsData;
  return (
    <section
      className={clsx(
        s.contacts,
        'pb-10 pt-[171px] md:pb-[283px] md:pt-[100px] xl:pb-[359px]',
      )}
    >
      <div className='container'>
        <h2 className='subtitle pb-10 text-bgText md:w-[560px] xl:w-[630px]'>
          {title}
        </h2>
        <LinkButton href={hrefLink} className='w-full md:w-[240px]'>
          {contactsButton}
        </LinkButton>
      </div>
    </section>
  );
};

import { FC } from 'react';

import { FormBlock } from '@/components/common/Form';
import { NoDataTemplate } from '@/sections/NoDataTemplate';

import { fetchData } from '@/actions/fetchData';
import { getContact } from '@/graphql/contactSchema';

import { IContactsData } from './Contacts.types';

import { contactsPageData, templateNoData } from '@/data';

import EmailIcon from '@/../public/icons/mail.svg';
import PhoneIcon from '@/../public/icons/phone.svg';

export const Contacts: FC = async () => {
  const data: IContactsData = await fetchData<IContactsData>(getContact);

  const { legal_support, psychological_support, head_organization, email } =
    data.contact.data.attributes;

  const { title, phoneTitle, legalService, psychologicalService, formTitle } =
    contactsPageData;

  const { titleContacts, descriptionContacts } = templateNoData;

  return (
    <section className='pb-[100px] pt-[134px] md:pb-[110px] md:pt-[154px] xl:pb-[130px] xl:pt-[191px]'>
      <div className='container flex gap-[60px] md:gap-[50px] xl:justify-between notXl:flex-col'>
        <div>
          <h1 className='mb-10 font-kyiv text-h3 font-bold md:mb-[50px] md:text-h3_tab xl:mb-[60px] xl:text-h3_desk'>
            {title}
          </h1>
          {!data.contact.data.attributes ? (
            <address className='text-body2 font-medium not-italic md:text-body2_tab xl:text-body2_desk'>
              <div className='mb-5 flex items-center gap-[15px]'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full border-[0.5px] border-current '>
                  <EmailIcon width={24} height={24} className='fill-current' />
                </div>
                <a
                  href={`mailto:${email}`}
                  className='transition hover:text-greenHover'
                >
                  {email}
                </a>
              </div>
              <div className='mb-[30px] flex items-center gap-[15px]'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full border-[0.5px] border-current'>
                  <PhoneIcon width={24} height={24} className='fill-current' />
                </div>
                <div className='flex flex-col gap-2'>
                  <p className='paragraph font-normal'>{phoneTitle}</p>
                  <a
                    href={`tel:${head_organization.replace(/-/g, '').replace(/\s/g, '')}`}
                    className='transition hover:text-greenHover'
                  >
                    {head_organization}
                  </a>
                </div>
              </div>
              <ul className='flex flex-col gap-5 border-t-[0.5px] border-solid border-darkGrey pt-[30px]'>
                <li className='flex flex-col gap-2'>
                  <p className='paragraph font-normal'>{legalService}</p>
                  <a
                    href={`tel:${legal_support.replace(/-/g, '').replace(/\s/g, '')}`}
                    className='transition hover:text-greenHover'
                  >
                    {legal_support}
                  </a>
                </li>
                <li className='flex flex-col gap-2'>
                  <p className='paragraph font-normal'>
                    {psychologicalService}
                  </p>
                  <a
                    href={`tel:${psychological_support.replace(/-/g, '').replace(/\s/g, '')}`}
                    className='transition hover:text-greenHover'
                  >
                    {psychological_support}
                  </a>
                </li>
              </ul>
            </address>
          ) : (
            <NoDataTemplate
              title={titleContacts}
              description={descriptionContacts}
              className='pb-0 pt-0 md:pb-0 md:pt-0 xl:pb-0 xl:pt-0'
            />
          )}
        </div>

        <div className='xl:w-[492px]'>
          <h2 className='mb-10 font-kyiv text-h3 font-bold md:mb-[50px] md:text-h3_tab xl:mb-[60px] xl:text-h3_desk'>
            {formTitle}
          </h2>
          <FormBlock />
        </div>
      </div>
    </section>
  );
};

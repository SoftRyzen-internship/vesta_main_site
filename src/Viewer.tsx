'use client';

import { socialMedia } from '@/data';

import { Logo } from '@/components/ui/Logo';
import { Button } from './components/ui/Button';
import { SocialMedia } from './components/ui/SocialMedia';

import { ServiceCard } from './components/common/ServiceCard';
import { SupportCards } from './components/common/SuppportCards';
import { NewsCard } from './components/common/NewsCard';
import { PartnerCard } from './components/common/PartnerCard';
import { DwellingCard } from './components/common/DwellingCard';
import { TeamCard } from './components/common/TeamCard';
import { FormInput } from '@/components/common/Form/Input';
import { Textarea } from '@/components/common/Form/Textarea';
import { Checkbox } from '@/components/common/Form/Checkbox';
import { NavLink } from '@/components/ui/Link';
import { GettingKnowTeamCard } from '@/components/common/GettingKnowTeamCard';

import { supportCards } from '@/data';
import { dwellings, news, partners } from './data';
import { formData } from '@/data';

export const Viewer = () => {
  return (
    <div className='container pb-16'>
      <div className='h-[51px] w-full bg-[#1A341B]'>
        <Logo />
      </div>
      <div className='bg-darkGrey'>
        <Button
          text='Надіслати'
          handleClick={() => console.log('click')}
          className='mr-10'
        />
        <NavLink
          href='https://www.monobank.ua/?lang=uk'
          text='задонатити'
          target='_blank'
          rel='noopener noreferrer nofollow'
          className='mr-10'
        />

        <NavLink
          href='/contacts'
          text='контакти'
          variant='contactsHeader'
          className='mr-10'
        />
        <NavLink
          href='/news'
          text='дивитись всі'
          variant='secondary'
          className='mr-10'
        />

        <Button
          variant='openTeamMember'
          handleClick={() => console.log('click')}
          className='mr-10'
        />
        <NavLink href='/contacts' text='Запит на підтримку' className='mr-10' />
        <Button
          variant='play'
          handleClick={() => console.log('click')}
          className='mr-10'
        />
        <Button
          variant='openMenu'
          handleClick={() => console.log('click')}
          className='mr-10'
        />
        <Button
          variant='closeMenu'
          handleClick={() => console.log('click')}
          className='mr-10'
        />
        <Button
          variant='closeModal'
          handleClick={() => console.log('click')}
          className='mr-10'
        />
        <SocialMedia socialMedia={socialMedia} forFooter={true} />
      </div>
      <div className='py-16'>
        <NewsCard
          id={news.id}
          // img={news.img}
          imgAlt={news.imgAlt}
          date={news.date}
          title={news.title}
          description={news.description}
        />
      </div>
      <div className='py-16'>
        <PartnerCard img={partners.img} name={partners.name} />
      </div>
      <div className='py-16'>
        <DwellingCard city={dwellings.city} contacts={dwellings.contacts} />
      </div>
      <div className='py-16'>
        <GettingKnowTeamCard />
      </div>
      <SupportCards
        key={supportCards.id}
        id={supportCards.id}
        amountOfHelp={supportCards.amountOfHelp}
        typeOfHelp={supportCards.typeOfHelp}
      />
      <ServiceCard />

      <div className='flex flex-col gap-6'>
        <FormInput
          label={formData.namedField.name.label}
          placeholder={formData.namedField.name.placeholder}
          // errorMessage={formData.namedField.name.errorMessage}
        />
        <Textarea
          label={formData.namedField.textarea.label}
          placeholder={formData.namedField.textarea.placeholder}
          // errorMessage={formData.namedField.textarea.errorMessage}
        />
        <Checkbox
          checked={false}
          // handleChange={field.onChange}
          // errorMessage={formData.namedField.checkbox.errorMessage}
          text={formData.namedField.checkbox.label}
        />
      </div>

      <section>
        <div className='container outline outline-slate-800'>
          <TeamCard />
        </div>
      </section>
    </div>
  );
};

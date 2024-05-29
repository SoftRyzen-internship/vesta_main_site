'use client';

// import { Logo } from '@/components/ui/Logo';
// import dataSupport from '@/data/supportCards.json';

import { Button } from './components/ui/Button';
import { SocialMedias } from './components/ui/SocialMedias';
import { ServiceCard } from './components/common/ServiceCard';
import { SupportCards } from './components/common/SuppportCards';
import { NewsCard } from './components/common/NewsCard';
import { PartnerCard } from './components/common/PartnerCard';
import { DwellingCard } from './components/common/DwellingCard';

import { dwellings, news, partners } from './data';
import { FormInput } from '@/components/common/Form/Input';

import { formData } from '@/data';
import { Textarea } from './components/common/Form/Textarea';
import { Checkbox } from './components/common/Form/Checkbox';

export const Viewer = () => {
  return (
    <div className='container pb-16'>
      {/* <div className='h-[51px] w-full bg-[#1A341B]'>
        <Logo />
      </div>
      <div className='bg-darkGrey'>
        <Button
          text='Запит на підтримку'
          handleClick={() => console.log('click')}
          className='mr-10'
        />
        <Button
          text='контакти'
          variant='contacts'
          handleClick={() => console.log('click')}
          className='mr-10'
        />
        <Button
          text='дивитись всі'
          variant='secondary'
          handleClick={() => console.log('click')}
          className='mr-10'
        />
        <Button
          variant='openTeamMember'
          handleClick={() => console.log('click')}
          className='mr-10'
        />
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
        <SocialMedias />
      </div>
      <div className='py-16'>
        <NewsCard
          id={news.id}
          img={news.img}
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
      <div className='container'>
        <SupportCards data={dataSupport.supportsCards} />
        <ServiceCard /> */}
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
    </div>
  );
};

'use client';

// import { ServiceCard } from './components/common/ServiceCard';
// import { SupportCards } from './components/common/SuppportCards';
// import { NewsCard } from './components/common/NewsCard';
// import { PartnerCard } from './components/common/PartnerCard';
// import { DwellingCard } from './components/common/DwellingCard';
// import { TeamCard } from './components/common/TeamCard';
import { FormBlock } from '@/components/common/Form';

// import { supportCards } from '@/data';
// import { dwellings, news, partners } from './data';
// import { socialMedia } from '@/data';

// import { Logo } from '@/components/ui/Logo';
// import { Button } from './components/ui/Button';
// import { SocialMedia } from './components/ui/SocialMedia';



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
        <SocialMedia socialMedia={socialMedia} forFooter={false} />
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
      <SupportCards data={supportCards.supportsCards} />
      <ServiceCard /> */}
      {/* <SupportCards
          key={supportCards.id}
          id={supportCards.id}
          amountOfHelp={supportCards.amountOfHelp}
          typeOfHelp={supportCards.typeOfHelp}
        />
      <ServiceCard /> */}

        <FormBlock/>

      {/* <section>
        <div className='container outline outline-slate-800'>
          <TeamCard />
        </div>
      </section> */}
    </div>
  );
};

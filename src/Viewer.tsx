'use client';

import { Logo } from '@/components/ui/Logo';
import dataSupport from '@/data/supportCardsData.json'

import { Button } from './components/ui/Button';
import { ServiceCard } from './components/common/ServiceCard';
import { SupportCards } from './components/ui/SuppportCards/SupportCards';
import { NewsCard } from './components/ui/NewsCard';

export const Viewer = () => {
  return (
    //щоб зручно було бачити нижній контент
    <div className='container pb-16'>
      {/* div тимчасово, щоб було видно логотип */}
      <div className='h-[51px] w-full bg-[#1A341B]'>
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
      </div>
      <NewsCard
        img='/images/news-card/ukrainian-soldier-desktop.webp'
        imgAlt='Український військовослужбовець'
        date='03.11.2023'
        title='Немає ветеранської політики, є хаотичні рішення та застаріла радянська
        система — Левицька.'
        description='Членкиня правління Громадської ради при Міністерстві у справах
        ветеранів, очільниця благодійного фонду «Веста» Богдана Левицька в етері
        Громадського радіо “На пульсі: аналізуємо головне на Громадському радіо”
        розповідає про проблеми з ветеранською політикою в Україні.'
      />
      <div className='container'>
        <SupportCards data={dataSupport.supportsCards}/>
        <ServiceCard />
      </div>
    </div>
  );
};

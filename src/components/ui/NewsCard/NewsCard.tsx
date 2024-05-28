import Image from 'next/image';

import style from './NewsCard.module.css';

// всі дані повинні тянутись з адмінки, тому добавлю це коли вона буде готова до використання

export const NewsCard = () => {
  return (
    <div className='w-[328px] md:w-[684px] xl:w-[596px]'>
      <Image
        width={328}
        height={290}
        alt=''
        src='/images/news-card/ukrainian-soldier-desktop.webp'
        className='mb-[25px]	h-[290px] w-full object-cover md:h-[356px]'
      />
      <p className='text-light text-darkGrey mb-[15px] tracking-[-0.01em]'>
        03.11.2023
      </p>
      <h3 className='text-green xl:text-medium mb-[15px] text-base font-medium leading-[1.5] md:text-lg'>
        Немає ветеранської політики, є хаотичні рішення та застаріла радянська
        система — Левицька.
      </h3>
      <p
        className={`text-light text-darkGrey leading-[1.6] tracking-[-0.01em] ${style.textEllipsis}`}
      >
        Членкиня правління Громадської ради при Міністерстві у справах
        ветеранів, очільниця благодійного фонду «Веста» Богдана Левицька в етері
        Громадського радіо “На пульсі: аналізуємо головне на Громадському радіо”
        розповідає про проблеми з ветеранською політикою в Україні.
      </p>
    </div>
  );
};

import Image from 'next/image';

import { NewsCardProps } from './NewsCard.types';

import style from './NewsCard.module.css';

// всі дані повинні тянутись з адмінки, тому добавлю це коли вона буде готова до використання

export const NewsCard = ({
  img,
  imgAlt,
  date,
  title,
  description,
}: NewsCardProps) => {
  return (
    <div className='w-full xl:w-[596px]'>
      <Image
        width={328}
        height={290}
        alt={imgAlt}
        src={img}
        className='mb-[25px]	h-[290px] w-full object-cover md:h-[356px]'
      />
      <p className='text-light text-darkGrey mb-[15px] tracking-[-0.01em]'>
        {date}
      </p>
      <h3 className='text-green xl:text-medium mb-[15px] text-base font-medium leading-[1.5] md:text-lg'>{title}</h3>
      <p
        className={`text-light text-darkGrey leading-[1.6] tracking-[-0.01em] ${style.textEllipsis}`}
      >
       {description}
      </p>
    </div>
  );
};

import { FC } from 'react';
import Image from 'next/image';

import img from '@/../public/images/service-desk@1.png';

import { IServiceCardProps } from './ServiceCard.types';

export const ServiceCard: FC<IServiceCardProps> = ({
  title = 'Юридична підтримка',
  src = img,
  alt = 'Чоловік тримає буклет з юридичними послугами',
  description = 'Благодійний Фонд “Веста” надає  безкоштовні юридичні консультації та повний юрсупровід для вирішення конкретних випадків. Кожен випадок унікальний, тому ми створюємо індивідуальні стратегії для вирішення проблем. Наша команда фахівців ставить перед собою завдання відновлення справедливості та вирішення правових питань, що турбують наших ветеранів,  військовослужбовців та їх сімʼї.',
}) => {
  return (
    <div className=''>
      <h3>{title}</h3>
      <p>{description}</p>

      {/* <div className='w-0 h-0 xl:w-[402px] md:w-[497px]'> */}
        <Image
          fill
          src={src}
          alt={alt}
          priority
          sizes='(max-width: 768px) 0px, (max-width: 1280px) 497px, 402px'
        />
      {/* </div> */}
    </div>
  );
};

import ExamplePartnerIcon from '/public/icons/examplePartner.svg';

// import { PartnerCardProps } from './PartnerCard.types';

export const PartnerCard = () => {
  return (
    <div className='bg-bgText flex h-[263px]  w-[250px] flex-col justify-end p-5 md:w-[212px] xl:h-[294px] xl:w-[285px]'>
      <ExamplePartnerIcon
        width={130}
        height={130}
        className='mx-auto mb-6 md:mb-[31px] md:h-[116px] md:w-[116px] xl:mb-[52px] xl:h-[140px] xl:w-[140px]'
      />
      <h4 className='text-light text-green font-normal leading-[1.6] tracking-[-0.01em]'>
        Бугурт Cіч
      </h4>
    </div>
  );
};

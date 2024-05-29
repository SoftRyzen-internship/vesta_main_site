import { Button } from '@/components/ui/Button';
import VestaLogoIcon from '/public/icons/vestaLogo.svg';

// import { IGettingKnowTeamCardProps } from './GettingKnowTeamCard.types';

export const GettingKnowTeamCard = () => {
  return (
    <div className='bg-bgText w-full p-10'>
      <VestaLogoIcon width={72} height={72} className='mb-[30px] ml-auto' />
      <h4 className='text-body1 text-green mb-5 font-normal'>
        Познайомся з усією командою
      </h4>
      <p className='paragraph text-darkGrey mb-[45px]'>
        Ми вдячні всім за підтримку та хочемо знати вас особисто, наші фронтмени
        та фронтвумен.
      </p>
      <Button
        text='про нас'
        variant='secondary'
        handleClick={() => console.log('first')}
      />
    </div>
  );
};

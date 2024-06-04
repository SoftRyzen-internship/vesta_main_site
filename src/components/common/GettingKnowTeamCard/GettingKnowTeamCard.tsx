import VestaLogoIcon from '/public/icons/vestaLogo.svg';
import { LinkButton } from '@/components/ui/LinkButton';

import { getSpecialWords } from '@/utils';

import { gettingKnowTeamCard } from '@/data';

export const GettingKnowTeamCard = () => {
  const { title, description, link, textLink } = gettingKnowTeamCard;
  return (
    <div className='bg-bgText h-[422px] w-[328px] p-10 pb-[46px] md:h-[558px] md:w-[330px] md:pb-[54px] xl:h-[561px] xl:w-[388px] xl:pb-10'>
      <VestaLogoIcon
        width={72}
        height={72}
        className='fill-accent mb-[30px] ml-auto md:mb-[114px]'
      />
      <h3 className='text-body1 text-green md:text-body1_tab xl:text-body1_desk mb-5 font-normal'>
        {getSpecialWords(title, 1, 0, 1)}
        <br />
        {getSpecialWords(title, title.length - 1, 1, title.length - 2)}
      </h3>
      <p className='paragraph text-darkGrey mb-[45px]'>{description}</p>
      <LinkButton href={link} text={textLink} variant='secondary' />
    </div>
  );
};

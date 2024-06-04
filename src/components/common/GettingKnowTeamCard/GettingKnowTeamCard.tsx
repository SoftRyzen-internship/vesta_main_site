import VestaLogoIcon from '/public/icons/vestaLogo.svg';
import { LinkButton } from '@/components/ui/LinkButton';

import { getFirstWord, getWordsWithoutFirst } from '@/utils';

import { gettingKnowTeamCard } from '@/data';

export const GettingKnowTeamCard = () => {
  const { title, description, link, textLink } = gettingKnowTeamCard;
  return (
    <div className='h-[422px] w-[328px] bg-bgText p-10 pb-[46px] md:h-[558px] md:w-[330px] md:pb-[54px] xl:h-[561px] xl:w-[388px] xl:pb-10'>
      <VestaLogoIcon
        width={72}
        height={72}
        className='mb-[30px] ml-auto fill-accent md:mb-[114px]'
      />
      <h3 className='mb-5 text-body1 font-normal text-green md:text-body1_tab xl:text-body1_desk'>
        {getFirstWord(title)}
        <br />
        {getWordsWithoutFirst(title)}
      </h3>
      <p className='paragraph mb-[45px] text-darkGrey'>{description}</p>
      <LinkButton href={link} variant='secondary'>
        {textLink}
      </LinkButton>
    </div>
  );
};

import { FC } from 'react';

import { clsx } from 'clsx';

import { IButtonProps } from './Button.types';

import PlayIcon from '/public/icons/playButton.svg';
import OpenIcon from '/public/icons/Plus.svg';
import OpenMenuIcon from '/public/icons/burgerMenu.svg';
import CloseIcon from '/public/icons/burgerClosed.svg';

import { buttons } from '@/data';

export const Button: FC<IButtonProps> = ({
  text,
  handleClick,
  type = 'button',
  variant = 'primary',
  className,
}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={clsx(
        'transition-colors duration-300',
        variant === 'primary' &&
          ' text-button bg-orangeText text-bgText hover:bg-green active:bg-green focus:bg-greenFocus inline-block h-[57px] w-60 px-6 py-[18px] font-bold uppercase tracking-[0.03em] hover:opacity-60',
        variant === 'openTeamMember' &&
          ' fill-bgText active:bg-green focus-within:fill-greenFocus hover:bg-greenHover h-[50px] w-[50px] rounded-full bg-[rgba(242,239,233,0.2)] p-[18px] backdrop-blur-sm     focus-within:bg-[rgba(132,144,128,0.2)]',
        variant === 'play' &&
          ' bg-orangeText active:bg-green focus:bg-focusOrange hover:bg-greenHover h-[51px] w-[51px] rounded-full pb-4 pl-[21px] pr-[17px] pt-[17px]',
        variant === 'closeModal' &&
          'stroke-green hover:stroke-orangeText active:stroke-hoverOrange focus:stroke-greenFocus',
        variant === 'closeMenu' &&
          'stroke-bgWhite hover:stroke-hoverDark active:stroke-orangeText focus:stroke-[#B25A17]',
        variant === 'openMenu' &&
          'stroke-bgWhite hover:stroke-orangeText active:stroke-hoverDark focus:stroke-[#B25A17]',
        className,
      )}
    >
      {text && text}
      {variant === 'openTeamMember' && (
        <OpenIcon
          width={14}
          height={14}
          aria-label={}
          className='fill-inherit'
        />
      )}
      {variant === 'play' && (
        <PlayIcon width={13} height={18} aria-label={buttons.play} />
      )}
      {variant === 'openMenu' && (
        <OpenMenuIcon
          width={24}
          height={24}
          aria-label={buttons.openMenu}
          className='stroke-inherit'
        />
      )}
      {variant === 'closeMenu' && (
        <CloseIcon
          width={24}
          height={24}
          aria-label={buttons.closeMenu}
          className='stroke-inherit'
        />
      )}
      {variant === 'closeModal' && (
        <CloseIcon
          width={24}
          height={24}
          aria-label={buttons.closeModal}
          className='stroke-inherit'
        />
      )}
    </button>
  );
};

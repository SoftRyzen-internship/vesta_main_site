import { FC } from 'react';

import { clsx } from 'clsx';

import { IButtonProps } from './Button.types';

import PlayIcon from '/public/icons/playButton.svg';
import OpenIcon from '/public/icons/plus.svg';
import OpenMenuIcon from '/public/icons/burgerMenu.svg';
import CloseIcon from '/public/icons/burgerClosed.svg';

import { buttons } from '@/data';

export const Button: FC<IButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'transition',
        variant === 'primary' &&
          'inline-block h-[57px] w-60 bg-orangeText px-6 py-[18px] text-button font-bold uppercase tracking-[0.03em] text-bgText hover:bg-green hover:opacity-60 focus:bg-greenFocus active:bg-green',
        variant === 'openTeamMember' &&
          'h-[50px] w-[50px] rounded-full bg-[rgba(242,239,233,0.2)] fill-bgText p-[18px] backdrop-blur-sm focus-within:bg-[rgba(132,144,128,0.2)] focus-within:fill-greenFocus hover:bg-greenHover     active:bg-green',
        variant === 'play' &&
          'h-[51px] w-[51px] rounded-full bg-orangeText pb-4 pl-[21px] pr-[17px] pt-[17px] hover:bg-greenHover focus:bg-focusOrange active:bg-green',
        variant === 'closeModal' &&
          'stroke-green hover:stroke-orangeText focus:stroke-greenFocus active:stroke-hoverOrange',
        variant === 'closeMenu' &&
          'stroke-bgWhite hover:stroke-hoverDark focus:stroke-[#B25A17] active:stroke-orangeText',
        variant === 'openMenu' &&
          'stroke-bgWhite hover:stroke-orangeText focus:stroke-[#B25A17] active:stroke-hoverDark',
        variant === 'moreProjects' &&
          'flex h-[53px] w-full items-center justify-center border-[0.50px] border-solid border-orangeText bg-transparent text-button font-bold uppercase tracking-[0.03em] text-orangeText hover:bg-orangeText hover:text-bgWhite focus:bg-orangeText focus:text-bgWhite active:bg-orangeText active:text-bgWhite',
        className,
      )}
    >
      {children}
      {variant === 'openTeamMember' && (
        <OpenIcon
          width={14}
          height={14}
          aria-label={buttons.openTeamMember}
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

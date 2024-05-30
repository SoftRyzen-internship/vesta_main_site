import { FC } from 'react';

import { clsx } from 'clsx';

import { SocialMediaProps } from './SocialMedia.types';

import SocialsFacebook from '@/../public/icons/socialsFacebook.svg';
import SocialsInstagram from '@/../public/icons/socialsInstagram.svg';
import SocialsYoutube from '@/../public/icons/socialsYoutube.svg';
import SocialsTikTok from '@/../public/icons/socialsTikTok.svg';
import SocialsTwitter from '@/../public/icons/socialsTwitter.svg';
import SoundCloud from '@/../public/icons/soundCloud.svg';
import SpotifyIcon from '@/../public/icons/spotifyIcon.svg';
import Diya from '@/../public/icons/diya.svg';

export const SocialMedia: FC<SocialMediaProps> = ({
  socialMedia,
  forFooter,
}) => {
  return (
    <ul className='flex gap-[20px]'>
      {socialMedia.map(({ value, link }) => {
        return (
          <li
            key={value}
            className={clsx(
              'h-[40px] w-[40px] rounded-[50%]',
              forFooter && 'bg-[#F2EFE933]',
              !forFooter &&
                'border-[1px] border-solid border-[#1A341B] bg-transparent text-[#1A341B]',
            )}
          >
            <a
              target='_blank'
              rel='noopener noreferrer nofollow'
              aria-label={`відкрити ${value}`}
              href={link}
              className='flex h-full w-full items-center justify-center'
            >
              {value === 'facebook' && (
                <SocialsFacebook width={24} height={24} fill='currentColor' />
              )}
              {value === 'instagram' && (
                <SocialsInstagram width={24} height={24} fill='currentColor' />
              )}
              {value === 'youtube' && (
                <SocialsYoutube width={24} height={24} fill='currentColor' />
              )}
              {value === 'tiktok' && (
                <SocialsTikTok width={24} height={24} fill='currentColor' />
              )}
              {value === 'twitter' && (
                <SocialsTwitter width={24} height={24} fill='currentColor' />
              )}
              {value === 'soundCloud' && (
                <SoundCloud width={24} height={24} fill='currentColor' />
              )}
              {value === 'spotify' && (
                <SpotifyIcon width={24} height={24} fill='currentColor' />
              )}
              {value === 'diya' && (
                <Diya width={24} height={24} fill='currentColor' />
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

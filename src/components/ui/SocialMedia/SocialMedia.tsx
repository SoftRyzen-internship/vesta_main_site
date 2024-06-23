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
import YoutubeMusic from '@/../public/icons/youtubeMusic.svg';

export const SocialMedia: FC<SocialMediaProps> = ({
  socialMedia,
  lightMode,
}) => {
  return (
    <ul className='flex gap-[20px]'>
      {socialMedia.map(({ social, link }) => {
        return (
          <li key={social} className='h-[40px] w-[40px]'>
            <a
              target='_blank'
              rel='noopener noreferrer nofollow'
              aria-label={`відкрити ${social}`}
              href={link}
              className={clsx(
                'transition flex h-full w-full items-center justify-center rounded-[50%]',
                lightMode &&
                  'bg-whiteGrey text-logoWhite hover:bg-[#9C4E12] focus:bg-[#B25A17]',
                !lightMode &&
                  'border-[0.5px] border-solid border-green bg-transparent text-green hover:border-hoverOrange hover:text-hoverOrange focus:border-greenFocus focus:text-greenFocus',
              )}
            >
              {social === 'Facebook' && (
                <SocialsFacebook width={24} height={24} fill='currentColor' />
              )}
              {social === 'Instagram' && (
                <SocialsInstagram width={24} height={24} fill='currentColor' />
              )}
              {social === 'YouTube' && (
                <SocialsYoutube width={28} height={24} fill='currentColor' />
              )}
              {social === 'TikTok' && (
                <SocialsTikTok width={24} height={24} fill='currentColor' />
              )}
              {social === 'Twitter' && (
                <SocialsTwitter width={24} height={20} fill='currentColor' />
              )}
              {social === 'SoundCloud' && (
                <SoundCloud width={24} height={22} fill='currentColor' />
              )}
              {social === 'Spotify' && (
                <SpotifyIcon width={24} height={24} fill='currentColor' />
              )}
              {social === 'Diya' && (
                <Diya width={24} height={24} fill='currentColor' />
              )}
              {social === 'YouTube Music' && (
                <YoutubeMusic width={22} height={22} fill='currentColor' />
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

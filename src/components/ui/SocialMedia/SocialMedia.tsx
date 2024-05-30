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
          <li key={value} className='h-[40px] w-[40px]'>
            <a
              target='_blank'
              rel='noopener noreferrer nofollow'
              aria-label={`відкрити ${value}`}
              href={link}
              className={clsx(
                'flex h-full w-full items-center justify-center rounded-[50%]',
                forFooter &&
                  'bg-whiteGrey text-logoWhite hover:bg-[#9C4E12] focus:bg-[#B25A17]',
                !forFooter &&
                  'border-[0.5px] border-solid border-green bg-transparent text-green hover:border-hoverOrange hover:text-hoverOrange focus:border-greenFocus focus:text-greenFocus',
              )}
            >
              {value === 'facebook' && <SocialsFacebook fill='currentColor' />}
              {value === 'instagram' && (
                <SocialsInstagram fill='currentColor' />
              )}
              {value === 'youtube' && <SocialsYoutube fill='currentColor' />}
              {value === 'tiktok' && <SocialsTikTok fill='currentColor' />}
              {value === 'twitter' && <SocialsTwitter fill='currentColor' />}
              {value === 'soundCloud' && <SoundCloud fill='currentColor' />}
              {value === 'spotify' && <SpotifyIcon fill='currentColor' />}
              {value === 'diya' && <Diya fill='currentColor' />}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

import { socialMedias } from '@/data';

import SocialsFacebook from '@/../public/icons/socialsFacebook.svg';
import SocialsInstagram from '@/../public/icons/socialsInstagram.svg';
import SocialsYoutube from '@/../public/icons/socialsYoutube.svg';
import SocialsTikTok from '@/../public/icons/socialsTikTok.svg';
import SocialsTwitter from '@/../public/icons/socialsTwitter.svg';

export const SocialMedias = () => {
  return (
    <ul className='flex gap-[20px]'>
      {socialMedias.map(value => {
        return (
          <li
            key={value}
            className='h-[40px] w-[40px] rounded-[50%] bg-[#F2EFE933]'
          >
            <a
              target='_blank'
              rel='noopener noreferrer nofollow'
              aria-label={`відкрити ${value}`}
              href={`https://${value}.com`}
              className='flex h-full w-full items-center justify-center'
            >
              {value === 'facebook' && <SocialsFacebook />}
              {value === 'instagram' && <SocialsInstagram />}
              {value === 'youtube' && <SocialsYoutube />}
              {value === 'tiktok' && <SocialsTikTok />}
              {value === 'twitter' && <SocialsTwitter />}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

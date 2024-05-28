import { socialMedias } from '@/data';

import socialsFacebook from '@/../public/icons/socialsFacebook.svg';
import socialsInstagram from '@/../public/icons/socialsInstagram.svg';
import socialsYoutube from '@/../public/icons/socialsYoutube.svg';
import socialsTikTok from '@/../public/icons/socialsTikTok.svg';
import socialsTwitter from '@/../public/icons/socialsTwitter.svg';

export const SocialMedias = () => {
  return (
    <ul>
      {socialMedias.map(([key, IconComponent]) => (
        <li key={key}>
          <a
            target='_blank'
            rel='noopener noreferrer nofollow'
            aria-label={`відкрити ${key}`}
            href={`https://${key}.com`}
          >
            {IconComponent && <IconComponent />}
          </a>
        </li>
      ))}
    </ul>
  );
};

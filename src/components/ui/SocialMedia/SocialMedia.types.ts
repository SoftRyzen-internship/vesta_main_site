export interface SocialMediaItem {
  social: string;
  link: string;
}

export interface SocialMediaProps {
  socialMedia: SocialMediaItem[];
  lightMode: boolean;
}

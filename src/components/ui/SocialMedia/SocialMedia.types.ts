type SocialMediaItem = {
  value: string;
  link: string;
};

export interface SocialMediaProps {
  socialMedia: SocialMediaItem[];
  lightMode: boolean;
}
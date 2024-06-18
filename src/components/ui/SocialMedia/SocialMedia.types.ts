export interface SocialMediaItem {
  social:
    | 'Facebook'
    | 'Instagram'
    | 'YouTube'
    | 'TikTok'
    | 'Twitter'
    | 'SoundCloud'
    | 'Spotify'
    | 'Diya'
    | 'YouTube Music';
  link: string;
};

export interface SocialMediaProps {
  socialMedia: SocialMediaItem[];
  lightMode: boolean;
}

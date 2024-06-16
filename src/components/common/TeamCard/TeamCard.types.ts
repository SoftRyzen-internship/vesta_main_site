export interface ITeamCardImage {
  data: {
    attributes: {
      url: string;
      alternativeText: string;
    };
  };
}

export interface ITeamCardSocials {
  link: string;
  social: string;
}

export interface ITeamCardProps {
  item: {
    name: string;
    src: string;
    alt: string;
    position: string;
    description: string;
    plug: string;
    socialMedia?: { value: string; link: string }[];
  };
}

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
    id: string;
    name: string;
    image: ITeamCardImage;
    position: string;
    description: string;
    plug: string;
    socialMedia?: { social: string; link: string }[];
  };
}

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
    text: string;
    status: string;
    socialItem?: ITeamCardSocials[];
  };
}

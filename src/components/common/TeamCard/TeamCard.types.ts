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
    status:
      | 'vijskova_veteranka'
      | 'vijskovij_veteran'
      | 'rodina_vijskovoyi_veteranki'
      | 'rodina_vijskovogo_veterana';
    socialItem?: ITeamCardSocials[];
  };
}

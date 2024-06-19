export interface IImageAttributes {
  alternativeText: string;
  url: string;
}

export interface IImageDataAttributes {
  attributes: IImageAttributes;
}


export interface IImageData {
  data: IImageDataAttributes;
}

export interface IItemTeam {
  d: string;
  name: string;
  text: string;
  position: string;
  status: string;
  socialItem: [];
  image: IImageData;
}

export interface ITeamAttributes {
  itemTeam: IItemTeam[];
}

export interface IDataAttributesTeam {
  attributes: ITeamAttributes;
}

export interface IData {
  data: IDataAttributesTeam;
}

export interface ITeamData {
  team: IData;
}

export interface TeamProps {
  page: string
}
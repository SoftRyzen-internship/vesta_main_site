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

export interface IDataAttributes {
  attributes: ITeamAttributes;
}

export interface IData {
  data: IDataAttributes;
}

export interface ITeamData {
  team: IData;
}

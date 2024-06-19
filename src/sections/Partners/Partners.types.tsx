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

export interface IItem {
  id: string;
  name: string;
  image: IImageData;
}

export interface IPartnersAttributes {
  item: IItem[];
}

export interface IDataAttributes {
  attributes: IPartnersAttributes;
}

export interface IData {
  data: IDataAttributes;
}

export interface IPartnersData {
  partner: IData;
}

export interface PartnersProps {
  page: string
}
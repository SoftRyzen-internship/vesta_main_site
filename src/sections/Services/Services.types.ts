export interface IServicesAttributes {
  title: string;
  image: { data: { attributes: { url: string; alternativeText: string } } };
  description: string;
}

export interface IServicesItem {
  serviceItem: IServicesAttributes[];
}

export interface IDataAttributes {
  attributes: IServicesItem;
}

export interface IData {
  data: IDataAttributes;
}

export interface IServicesData {
  service: IData;
}

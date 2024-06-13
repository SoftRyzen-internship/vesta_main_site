export interface INewsAttributes {
  image: { data: [{ attributes: { url: string; alternativeText: string } }] };
  slug: string;
  img: string;
  date: string;
  title: string;
  text: string;
}

export interface IDataAttributes {
  attributes: INewsAttributes;
}

export interface IMetaData {
  pagination: { total: number };
}

export interface IData {
  data: IDataAttributes[];
  meta: IMetaData;
}

export interface INewsData {
  news: IData;
}

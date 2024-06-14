export interface INewsProps {
  slug?: string;
}

export interface INewsImageAttributes {
  url: string;
  alternativeText: string;
}

export interface INewsImageData {
  attributes: INewsImageAttributes;
}

export interface INewsImage {
  data: INewsImageData[];
}

export interface NewsAttributes {
  date: string;
  title: string;
  text: string;
  slug: string;
  image: INewsImage;
}

export interface INewsData {
  id: string;
  attributes: NewsAttributes;
}

export interface INews {
  data: INewsData[];
}

export interface INewsQueryResponse {
  news: INews;
}

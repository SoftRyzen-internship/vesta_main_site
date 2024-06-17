export interface INewsTemplateProps {
  oneNews: {
    image: { data: [{ attributes: { url: string; alternativeText: string } }] };
    slug: string;
    date: string;
    title: string;
    text: string;
    videoLink?: string;
    descriptionVideo?: string;
  };
}

export interface INewsAttributes {
  image: { data: [{ attributes: { url: string; alternativeText: string } }] };
  slug: string;
  date: string;
  title: string;
  text: string;
  videoLink?: string;
  descriptionVideo?: string;
}

export interface IDataAttributes {
  attributes: INewsAttributes;
}

export interface IData {
  data: IDataAttributes[];
}

export interface INewsData {
  news: IData;
}

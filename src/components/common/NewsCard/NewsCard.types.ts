export interface INewsImageArray {
  attributes: {
    url: string;
    alternativeText: string;
  };
}
export interface INewsCardProps {
  item: {
    slug: string;
    date: string;
    title: string;
    text: string;
    image: {
      data: INewsImageArray[];
    };
  };
}

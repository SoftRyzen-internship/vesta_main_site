export interface INewsCardProps {
  item: {
    slug: string;
    image: { data: [{ attributes: { url: string; alternativeText: string } }] };
    date: string;
    title: string;
    text: string;
  };
}

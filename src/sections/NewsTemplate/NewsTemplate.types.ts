export interface INewsTemplateProps {
  oneNews: {
    id: string;
    img: string;
    imgAlt: string;
    date: string;
    title: string;
    description: string;
    video?: string;
    secondDescription?: string;
  };
}

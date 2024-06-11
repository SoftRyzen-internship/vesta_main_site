export interface IProjectCardProps {
  item: {
    id: string;
    img: string;
    imgAlt: string;
    title: string;
    description: string;
  };
  linkText: string;
  isOddCard: boolean;
}

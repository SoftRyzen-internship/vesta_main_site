export interface IProjectCardProps {
  item: {
    id?: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    imgAlt?: string;
    title: string;
    slug: string;
    description: string;
  };
  linkText: string;
  isOddCard: boolean;
}

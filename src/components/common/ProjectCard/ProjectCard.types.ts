export interface IProjectCardProps {
  item: {
    title: string;
    slug: string;
    description: string;
    image: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
  };
  linkText: string;
  isOddCard: boolean;
}

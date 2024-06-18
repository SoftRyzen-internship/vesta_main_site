export interface IServiceCardProps {
  item: {
    id: string;
    title: string;
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
  count: string;
  countAll: string;
}

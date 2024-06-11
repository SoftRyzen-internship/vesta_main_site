export interface IDwellingCardProps {
  item: {
    city: string;
    contacts: { link: string; text: string; target?: string; rel?: string }[];
  };
}

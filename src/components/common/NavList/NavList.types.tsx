type NavListItem = {
  id: number;
  title: string;
  path: string;
};

export interface NavListProps {
  navList: NavListItem[];
  forFooter: boolean;
  click?: () => void;
}

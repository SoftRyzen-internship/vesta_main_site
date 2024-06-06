export interface ILinkButtonProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'secondary' | 'contactsHeader';
  className?: string;
  onClick?: () => void;
}

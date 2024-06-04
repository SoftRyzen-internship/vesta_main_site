export interface ILinkButtonProps {
  href: string;
  text: string;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'secondary' | 'contactsHeader';
  className?: string;
  onClick?: () => void;
}

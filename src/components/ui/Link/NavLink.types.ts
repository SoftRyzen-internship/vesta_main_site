export interface INavLinkProps {
  href: string;
  text: string;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'secondary' | 'contactsHeader';
  className?: string;
}

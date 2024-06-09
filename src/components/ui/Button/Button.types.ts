export interface IButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?:
    | 'primary'
    | 'closeModal'
    | 'closeMenu'
    | 'openTeamMember'
    | 'openMenu'
    | 'play'
    | 'moreProjects';
  className?: string;
}

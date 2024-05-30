export interface IButtonProps {
  handleClick: () => void;
  text?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?:
    | 'primary'
    | 'closeModal'
    | 'closeMenu'
    | 'openTeamMember'
    | 'openMenu'
    | 'play';
  className?: string;
}

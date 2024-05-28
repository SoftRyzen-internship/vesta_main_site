export interface ButtonProps {
  handleClick: () => void;
  text?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?:
    | 'primary'
    | 'secondary'
    | 'closeModal'
    | 'closeMenu'
    | 'openTeamMember'
    | 'openMenu'
    | 'play'
    | 'contacts';
  className?: string;
}

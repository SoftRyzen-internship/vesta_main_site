export interface ButtonProps {
  handleClick: () => void;
  text?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: 'primary' | 'secondary' | 'close' | 'open' | 'play' | 'contacts';
  isSvg?: boolean;
  className?: string;
}

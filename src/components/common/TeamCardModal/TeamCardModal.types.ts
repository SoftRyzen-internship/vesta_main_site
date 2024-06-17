export interface ITeamCardModalProps {
  openModal: boolean;
  closeModal: () => void;
  img: string;
  name: string;
  position: string;
  description: string;
  plug: string;
  socialMedia?: { social: string; link: string }[];
}

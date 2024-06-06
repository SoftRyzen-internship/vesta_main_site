export interface IFormModalProps {
  openModal: boolean;
  closeModal: () => void;
  title: string;
  text: string;
  isSuccessful: boolean;
}

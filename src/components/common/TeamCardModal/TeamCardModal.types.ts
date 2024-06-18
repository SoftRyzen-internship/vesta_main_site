import { SocialMediaItem } from "@/components/ui/SocialMedia/SocialMedia.types";

export interface ITeamCardModalProps {
  openModal: boolean;
  closeModal: () => void;
  img: string;
  name: string;
  position: string;
  description: string;
  plug:
    | 'vijskova_veteranka'
    | 'vijskovij_veteran'
    | 'rodina_vijskovoyi_veteranki'
    | 'rodina_vijskovogo_veterana';
  socialMedia?: SocialMediaItem[];
}

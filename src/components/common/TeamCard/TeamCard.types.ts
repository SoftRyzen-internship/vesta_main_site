<<<<<<< HEAD
import { IItemTeam } from "@/sections/Team/Team.types";

export interface ITeamCardProps {
  item: IItemTeam
=======
export interface ITeamCardImage {
  data: {
    attributes: {
      url: string;
      alternativeText: string;
    };
  };
}

export interface ITeamCardSocials {
  link: string;
  social: string;
}

export interface ITeamCardProps {
  item: {
    name: string;
    src: string;
    alt: string;
    position: string;
    description: string;
    plug: string;
    socialMedia?: { social: string; link: string }[];
  };
>>>>>>> origin/dev
}

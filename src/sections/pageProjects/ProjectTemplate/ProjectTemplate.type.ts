export interface ISocialData {
  link: string;
  social: string;
}

export interface IImageAttributes {
  url: string;
  alternativeText: string;
}

export interface IImageData {
  attributes: IImageAttributes;
}

export interface IProjectImageData {
  data: IImageData;
}

export interface IProjectAttributes {
  publishedAt: string;
  title: string;
  description: string;
  pageText: string;
  add_title: string;
  add_text: string;
  slug: string;
  image: IProjectImageData;
  social: ISocialData[];
}

export interface IProjectData {
  id: string | number;
  attributes: IProjectAttributes;
}

export interface IProject {
  data: IProjectData[];
}

export interface IProjectsData {
  projects: IProject;
}

export interface IOneProjectsProps {
  oneProject: {
    publishedAt: string;
    title: string;
    description: string;
    pageText: string;
    add_title: string;
    add_text: string;
    slug: string;
    image: IProjectImageData;
    social: ISocialData[];
  };
}

export interface ProjectImageData {
  data: {
    attributes: {
      url: string;
    };
  };
}

export interface ProjectAttributes {
  title: string;
  description: string;
  slug: string;
  image: ProjectImageData;
}

export interface Project {
  id: string;
  attributes: ProjectAttributes;
}

export interface ProjectsData {
  projects: {
    data: Project[];
  };
}

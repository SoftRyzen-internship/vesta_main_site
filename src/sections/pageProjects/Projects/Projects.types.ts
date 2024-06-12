export interface IProjectImageData {
  data: {
    attributes: {
      url: string;
      alternativeText: string;
    };
  };
}

export interface IProjectAttributes {
  title: string;
  description: string;
  slug: string;
  image: IProjectImageData;
}

export interface IProject {
  id: string;
  attributes: IProjectAttributes;
}

export interface IPagination {
  pagination: {
    total: number;
  };
}

export interface IProjectsData {
  projects: {
    meta: IPagination;
    data: IProject[];
  };
}

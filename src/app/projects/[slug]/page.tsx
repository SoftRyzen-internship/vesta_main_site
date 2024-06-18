import { FC } from 'react';
import { Metadata } from 'next';

import { getProjects } from '@/graphql/projectSchema';
import { fetchData } from '@/actions/fetchData';

import { NoDataTemplate } from '@/sections/NoDataTemplate';
import { ProjectTemplate } from '@/sections/pageProjects/ProjectTemplate';

import { IProjectsData } from '@/sections/pageProjects/ProjectTemplate/ProjectTemplate.type';

import { templateNoData } from '@/data';

export interface IOneProjectPageProps {
  params: { slug: string };
}

const BASE_APP_URL = process.env.BASE_APP_URL as string;

export async function generateStaticParams() {
  const fetchedProjects = await fetchData<IProjectsData>(getProjects);

  return fetchedProjects.projects.data.map(item => ({
    slug: item.attributes.slug,
  }));
}

export async function generateMetadata({
  params,
}: IOneProjectPageProps): Promise<Metadata> {
  const slug = params.slug;

  const fetchedProjects = await fetchData<IProjectsData>(getProjects);
  const project = fetchedProjects.projects.data.find(
    item => item.attributes.slug === slug,
  );

  return {
    title: project?.attributes.title,
    description: project?.attributes.description,
    alternates: {
      canonical: `${BASE_APP_URL}/projects/${project?.attributes.slug}`,
    },
  };
}

const OneProjectPage: FC<IOneProjectPageProps> = async ({ params }) => {
  const { slug } = params;
  const { titleOneProjects, descriptionOneProjects } = templateNoData;

  const fetchedProjects = await fetchData<IProjectsData>(getProjects);
  const project = fetchedProjects.projects.data.find(
    item => item.attributes.slug === slug,
  );

  return (
    <>
      {project ? (
        <ProjectTemplate oneProject={project.attributes} />
      ) : (
        <NoDataTemplate
          title={titleOneProjects}
          description={descriptionOneProjects}
          className='pt-[134px] md:pt-[154px] xl:pt-[191px]'
        />
      )}
    </>
  );
};

export default OneProjectPage;

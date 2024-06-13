import { FC } from 'react';
import { Metadata } from 'next';

import { ProjectTemplate } from '@/sections/pageProjects/ProjectTemplate';

import { getProjects } from '@/graphql/projectSchema';
import { fetchData } from '@/actions/fetchData';

import {  IProjectsData } from '@/sections/pageProjects/ProjectTemplate/ProjectTemplate.type';

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
  const project = fetchedProjects.projects.data.find(item => item.attributes.slug === slug)

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

  const fetchedProjects = await fetchData<IProjectsData>(getProjects);
  const project = fetchedProjects.projects.data.find(
    item => item.attributes.slug === slug,
  );

  return (
    <>
      <b>{slug}</b>
      <ProjectTemplate oneProject={project.attributes} />;
    </>
  );
};

export default OneProjectPage;
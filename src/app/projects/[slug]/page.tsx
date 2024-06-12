import { Metadata } from 'next';

import { ProjectTemplate } from '@/sections/pageProjects/ProjectTemplate';

import { metaData } from '@/data';
import { fetchData } from '@/actions/fetchData';
import { IProjectsData } from '@/sections/pageProjects/ProjectTemplate/ProjectTemplate.type';
import { getProjects } from '@/graphql/projectSchema';

const BASE_APP_URL = process.env.BASE_APP_URL as string;

export const metadata: Metadata = {
  title: metaData.titleProjects,
  description: metaData.descriptionProjects,
  alternates: {
    canonical: `${BASE_APP_URL}/projects`,
  },
};

// export async function generateStaticParams() {
//   const projects: IProjectsData[] =
//     await fetchData<IProjectsData[]>(getProjects);

//   return projects.projects.projects.data.map(projects => ({
//     slug: projects.projects.data.attributes.slug,
//   }));
// }

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // const { slug } = params;
  const projects: IProjectsData[] =
    await fetchData<IProjectsData[]>(getProjects);
  
  console.log('projects', projects)

  return (
    <>
    
      <p className='mt-40'>Project {slug}</p>;
      <ProjectTemplate />;
    </>
  );
}

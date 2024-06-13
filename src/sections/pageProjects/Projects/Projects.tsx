'use client';

import { FC, useCallback, useEffect, useState } from 'react';

import { clsx } from 'clsx';

import { Button } from '@/components/ui/Button';
import { ProjectCard } from '@/components/common/ProjectCard';

import { fetchData } from '@/actions/fetchData';
import { getProjects } from '@/graphql/projectSchemaCard';

import { IProject, IProjectsData } from './Projects.types';

import { projectsData } from '@/data';

export const Projects: FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [start, setStart] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const {
    LIMIT_PROJECTS,
    linkText,
    buttonText: { more, hide },
  } = projectsData;

  const loadProjects = useCallback(async (start: number, limit: number) => {
    const projectsResponse = await fetchData<IProjectsData>(
      getProjects(start, limit),
    );
    const newProjects = projectsResponse.projects.data ?? [];
    setTotal(projectsResponse.projects.meta.pagination.total);

    return newProjects;
  }, []);

  useEffect(() => {
    async function loadInitialProjects() {
      const initialProjects = await loadProjects(0, LIMIT_PROJECTS);
      setProjects(initialProjects);
      setStart(LIMIT_PROJECTS);
    }

    loadInitialProjects();
  }, [LIMIT_PROJECTS, loadProjects]);

  const loadMore = async () => {
    const newProjects = await loadProjects(start, LIMIT_PROJECTS);
    setProjects(prevProjects => [...prevProjects, ...newProjects]);
    setStart(prevStart => prevStart + LIMIT_PROJECTS);
  };

  const hideAll = async () => {
    const initialProjects = await loadProjects(0, LIMIT_PROJECTS);
    setProjects(initialProjects);
    setStart(LIMIT_PROJECTS);
  };

  return (
    <section id='projects' className='py-[60px] md:py-[100px] xl:py-[130px]'>
      <div className='container'>
        <ul
          className={clsx(
            projects.length <= total &&
              total !== LIMIT_PROJECTS &&
              'mb-10 mdOnly:mb-[30px]',
            'flex flex-col gap-10 mdOnly:gap-[30px]',
          )}
        >
          {projects.map((project, index) => (
            <li key={project.id}>
              <ProjectCard
                item={project.attributes}
                linkText={linkText}
                isOddCard={index % 2 ? false : true}
              />
            </li>
          ))}
        </ul>

        {projects.length < total ? (
          <Button
            variant='moreProjects'
            onClick={loadMore}
            className='md:w-[200px] xl:mx-auto xl:block xl:w-[200px]'
          >
            {more}
          </Button>
        ) : projects.length > LIMIT_PROJECTS ? (
          <Button
            variant='moreProjects'
            onClick={hideAll}
            className='md:w-[200px] xl:mx-auto xl:block xl:w-[200px]'
          >
            {hide}
          </Button>
        ) : null}
      </div>
    </section>
  );
};

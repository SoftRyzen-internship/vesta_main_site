'use client';

import { FC, useEffect, useState } from 'react';

import { clsx } from 'clsx';
import { animateScroll as scroll } from 'react-scroll';

import { Button } from '@/components/ui/Button';
import { ProjectCard } from '@/components/common/ProjectCard';
import { NoDataTemplate } from '@/sections/NoDataTemplate';

import { fetchData } from '@/actions/fetchData';
import { getProjects } from '@/graphql/projectSchemaCard';

import { IProject, IProjectsData } from './Projects.types';

import { projectsData, templateNoData } from '@/data';

export const Projects: FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [start, setStart] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const {
    LIMIT_PROJECTS,
    linkText,
    buttonText: { more, hide },
  } = projectsData;

  const { wait, waitText, titleProjects, descriptionProjects } = templateNoData;

  useEffect(() => {
    const loadProjects = async () => {
      const newProjects = await fetchData<IProjectsData>(
        getProjects(start, LIMIT_PROJECTS),
      );
      if (newProjects.projects.data) {
        if (start === 0) {
          setProjects(newProjects.projects.data);
        } else {
          setProjects(prev => [...prev, ...newProjects.projects.data]);
        }
      }
      setTotal(newProjects.projects.meta.pagination.total);
      setIsLoading(false);
    };

    loadProjects();
  }, [start, LIMIT_PROJECTS]);

  const loadMore = async () => {
    setStart(start + LIMIT_PROJECTS);
  };

  const hideAll = async () => {
    setStart(0);
    scroll.scrollTo(800);
  };

  return (
    <>
      {isLoading && (
        <NoDataTemplate title={wait} description={waitText} isLoading={true} />
      )}
      {!isLoading && total === 0 && (
        <NoDataTemplate
          title={titleProjects}
          description={descriptionProjects}
        />
      )}
      {!isLoading && total > 0 && (
        <section
          id='projects'
          className='py-[60px] md:py-[100px] xl:py-[130px]'
        >
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
      )}
    </>
  );
};

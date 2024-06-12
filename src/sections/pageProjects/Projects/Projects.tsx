'use client';

import { FC, useEffect, useState } from 'react';

import { clsx } from 'clsx';

import { Button } from '@/components/ui/Button';
import { ProjectCard } from '@/components/common/ProjectCard';

import { fetchData } from '@/actions/fetchData';
import { getProjects } from '@/graphql/projectSchemaCard';

import { IProject, IProjectsData } from './Projects.types';

import { projectsData } from '@/data';

export const Projects: FC = () => {
  const [showProjects, setShowProjects] = useState<IProject[]>([]);
  const [start, setStart] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const {
    linkText,
    buttonText: { more, hide },
  } = projectsData;
  const visibleProjects = 2;

  useEffect(() => {
    async function load() {
      const projectsResponse = await fetchData<IProjectsData>(
        getProjects(0, visibleProjects),
      );
      const projectsArray = projectsResponse.projects.data ?? [];
      console.log(projectsArray);
      console.log(projectsResponse.projects.meta.pagination);
      setShowProjects(projectsArray);
    }
    load();
  }, []);

  async function loadMore() {
    const newStart = start + visibleProjects;
    const newProjects: IProjectsData = await fetchData(
      getProjects(newStart, visibleProjects),
    );
    setShowProjects(prevProjects => [
      ...prevProjects,
      ...newProjects.projects.data,
    ]);
    setStart(newStart);
    setHasMore(newProjects.projects.data.length === visibleProjects);
  }

  async function hideAll() {
    const projectsResponse: IProjectsData = await fetchData<IProjectsData>(
      getProjects(0, visibleProjects),
    );
    const projectsArray = projectsResponse.projects.data ?? [];
    setShowProjects(projectsArray);
  }

  return (
    <section id='projects' className='py-[60px] md:py-[100px] xl:py-[130px]'>
      <div className='container'>
        <ul
          className={clsx(
            showProjects.length > visibleProjects && 'mb-10 mdOnly:mb-[30px]',
            'flex flex-col gap-10 mdOnly:gap-[30px]',
          )}
        >
          {showProjects.map((item, index) => (
            <li key={index}>
              <ProjectCard
                item={item.attributes}
                linkText={linkText}
                isOddCard={index % 2 ? false : true}
              />
            </li>
          ))}
        </ul>

        {hasMore && showProjects ? (
          <Button
            variant='moreProjects'
            onClick={loadMore}
            className='md:w-[200px] xl:mx-auto xl:block xl:w-[200px]'
          >
            {more}
          </Button>
        ) : !hasMore && showProjects.length > visibleProjects ? (
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

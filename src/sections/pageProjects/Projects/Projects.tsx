'use client';

import { FC, useState } from 'react';

import { clsx } from 'clsx';

import { Button } from '@/components/ui/Button';
import { ProjectCard } from '@/components/common/ProjectCard';

import { projectsJson } from '@/data';

export const Projects: FC = () => {
  const visibleProjects = 6;
  const [displayProjects, setDisplayProjects] = useState(visibleProjects);

  const {
    linkText,
    buttonText: { more, hide },
    projects,
  } = projectsJson;

  const loadMore = () => {
    setDisplayProjects(displayProjects + visibleProjects);
  };

  const hideAll = () => {
    setDisplayProjects(visibleProjects);
  };

  const sortById = () => {
    return projects.sort((a, b) => Number(b.id) - Number(a.id));
  };
  sortById();

  return (
    <section id='projects' className='py-[60px] md:py-[100px] xl:py-[130px]'>
      <div className='container'>
        <ul
          className={clsx(
            projects.length > visibleProjects && 'mb-10 mdOnly:mb-[30px]',
            'flex flex-col gap-10 mdOnly:gap-[30px]',
          )}
        >
          {projects
            .slice(0, displayProjects)
            .map(({ id, img, imgAlt, title, description }, index) => (
              <li key={id}>
                <ProjectCard
                  id={id}
                  img={img}
                  imgAlt={imgAlt}
                  title={title}
                  description={description}
                  linkText={linkText}
                  isOddCard={index % 2 ? false : true}
                />
              </li>
            ))}
        </ul>

        {projects.length > displayProjects ? (
          <Button
            variant='moreProjects'
            onClick={loadMore}
            className='md:w-[200px] xl:mx-auto xl:block xl:w-[200px]'
          >
            {more}
          </Button>
        ) : projects.length <= displayProjects && displayProjects > 6 ? (
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

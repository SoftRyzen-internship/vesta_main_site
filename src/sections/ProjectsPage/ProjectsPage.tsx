'use client';

import { FC, useState } from 'react';

import { Button } from '@/components/ui/Button';
import { ProjectCard } from '@/components/common/ProjectCard';

import { projectsJson } from '@/data';

export const ProjectsPage: FC = () => {
  const initialProjectsList = 6;
  const incrementProjectsList = 6;
  const [displayProjects, setDisplayProjects] = useState(initialProjectsList);

  const {
    linkText,
    buttonText: { more, hide },
    projects,
  } = projectsJson;

  const loadMore = () => {
    setDisplayProjects(displayProjects + incrementProjectsList);
  };

  const hideAll = () => {
    setDisplayProjects(initialProjectsList);
  };

  const sortById = () => {
    return projects.sort((a, b) => Number(b.id) - Number(a.id));
  };
  sortById();

  return (
    <section id='projects'>
      <div className='container'>
        <ul>
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
          <Button onClick={loadMore} className='xl:mx-auto xl:block'>
            {more}
          </Button>
        ) : projects.length <= displayProjects && displayProjects > 6 ? (
          <Button onClick={hideAll} className='xl:mx-auto xl:block'>
            {hide}
          </Button>
        ) : null}
      </div>
    </section>
  );
};

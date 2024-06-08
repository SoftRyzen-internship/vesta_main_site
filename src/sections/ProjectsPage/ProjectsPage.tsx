import { FC } from 'react';

import { ProjectCard } from '@/components/common/ProjectCard';

import { projects } from '@/data';

export const ProjectsPage: FC = () => {
  return (
    <section>
      <div className='container'>
        <ul>
          {projects.map(
            ({ id, img, imgAlt, title, description, linkText }, index) => (
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
            ),
          )}
        </ul>
      </div>
    </section>
  );
};

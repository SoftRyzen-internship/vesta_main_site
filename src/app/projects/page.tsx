import { ProjectCard } from '@/components/common/ProjectCard';
import { projects } from '@/data';

export default function Page() {
  return (
    <>
      <section>
        <div className='container'>
          <ul></ul>
          {projects.map(
            (
              { id, img, imgAlt, title, description, linkText, link },
              index,
            ) => (
              <li key={id}>
                <ProjectCard
                  key={id}
                  img={img}
                  imgAlt={imgAlt}
                  title={title}
                  description={description}
                  linkText={linkText}
                  link={link}
                  isOddCard={index % 2 ? false : true}
                />
              </li>
            ),
          )}
        </div>
      </section>
    </>
  );
}

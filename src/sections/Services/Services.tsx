import { ServiceCard } from '@/components/common/ServiceCard';
import { service } from '@/data';

export const Services = () => {
  const { title, services } = service;
  return (
    <section className='container py-[60px]'>
      <h2 className='subtitle mb-10'>{title}</h2>
      <ul className='flex gap-10 overflow-x-auto pb-10 '>
        {services.map(({ title, src, alt, description }, index) => (
          <li key={index}>
            <ServiceCard
              title={title}
              src={src}
              alt={alt}
              description={description}
              count={index + 1}
              countAll={services.length}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

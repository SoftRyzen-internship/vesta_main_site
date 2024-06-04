import { ServiceCard } from '@/components/common/ServiceCard';
import { ScrollBox } from '@/components/ui/ScrollBox';
import { service } from '@/data';

export const Services = () => {
  const { title, services } = service;
  return (
    <section className=' py-[60px] md:py-[50px] xl:py-[65px]'>
      <div className='container'>
        <h2 className='subtitle mb-10 md:mb-[50px] md:text-center xl:mb-[60px]'>
          {title}
        </h2>
        <ScrollBox className='overflow-x-auto'>
          <ul className='flex items-center gap-10 pb-10 md:flex-col md:gap-[30px] xl:gap-10'>
            {services.map(({ title, src, alt, description }, index) => (
              <li key={index}>
                <ServiceCard
                  title={title}
                  src={src}
                  alt={alt}
                  description={description}
                  count={String(index + 1)}
                  countAll={services.length.toString()}
                />
              </li>
            ))}
          </ul>
        </ScrollBox>
      </div>
    </section>
  );
};

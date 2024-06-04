import { FC } from 'react';

import { PartnerCard } from '@/components/common/PartnerCard';

import { partners } from '@/data';

export const Partners: FC = () => {
  return (
    <section>
      <div>
        {' '}
        {partners.map(({ id, img, name }) => (
          <PartnerCard key={id} img={img} name={name} />
        ))}
      </div>
    </section>
  );
};

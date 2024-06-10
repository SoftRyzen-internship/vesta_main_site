'use client';

import { useParams } from 'next/navigation';

export default function Page() {
  const { id } = useParams();

  return (
    <section className='pt-28'>
      <div className='container'>
        <b>Project`s id: {id}</b>
      </div>
    </section>
  );
}

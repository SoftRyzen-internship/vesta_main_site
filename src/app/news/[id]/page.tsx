import { News } from '@/sections/News';

import { news } from '@/data';
import Image from 'next/image';
import clsx from 'clsx';

export default function Page({ params }: { params: { id: string } }) {
  const oneNews = news.find(({ id }) => id === params.id);

  console.log(oneNews);
  return (
    <section>
      <div className='container'>
        {oneNews && (
          <div className='pt-[141px]'>
            <p className='paragraph mb-[30px]'>{oneNews.date}</p>
            <h2 className='mb-[50px] text-h3 text-green'>{oneNews.title}</h2>
            <Image
              src={oneNews.img}
              alt={oneNews.imgAlt}
              width={328}
              height={260}
              className='mb-10 h-[260px] w-full object-cover'
            />
            <p className={clsx('paragraph', oneNews.video && 'mb-10')}>
              {oneNews.description}
            </p>

            {oneNews.video && (
              <video
                width='328'
                height='260'
                controls
                preload='none'
                className='mb-10'
              >
                <source src='/path/to/video.mp4' type='video/mp4' />
                <track
                  src='/path/to/captions.vtt'
                  kind='subtitles'
                  srcLang='en'
                  label='English'
                />
                Your browser does not support the video tag.
              </video>
            )}
            {oneNews.videoDescription && (
              <p className='paragraph'> {oneNews.videoDescription}</p>
            )}
          </div>
        )}

        <News />
      </div>
    </section>
  );
}

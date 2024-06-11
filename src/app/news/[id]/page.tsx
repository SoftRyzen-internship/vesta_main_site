import { News } from '@/sections/News';
import { NewsTemplate } from '@/sections/NewsTemplate';

import { newsPageData } from '@/data';

export default function Page({ params }: { params: { id: string } }) {
  const oneNews = newsPageData.news.find(({ id }) => id === params.id);

  return (
    <>
      {oneNews && <NewsTemplate oneNews={oneNews} />}
      <News />
    </>
  );
}

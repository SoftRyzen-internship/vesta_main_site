import { Metadata } from 'next';

import { News } from '@/sections/News';
// import { NewsTemplate } from '@/sections/NewsTemplate';

import { metaData } from '@/data';

const BASE_APP_URL = process.env.BASE_APP_URL as string;

export const metadata: Metadata = {
  title: metaData.titleNews,
  description: metaData.descriptionNews,
  alternates: {
    canonical: `${BASE_APP_URL}/news`,
  },
};

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  // const oneNews = newsPageData.news.find(({ id }) => id === params.id);

  return (
    <>
      {/* {oneNews && <NewsTemplate oneNews={oneNews} />} */}
      <News slug={slug} />
    </>
  );
}

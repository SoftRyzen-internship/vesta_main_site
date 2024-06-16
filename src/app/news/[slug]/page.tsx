import { Metadata } from 'next';

import { News } from '@/sections/News';
import { NewsTemplate } from '@/sections/pageNews/NewsTemplate';
import { INewsData } from '@/sections/pageNews/NewsTemplate/NewsTemplate.types';

import { fetchData } from '@/actions/fetchData';
import { getNews } from '@/graphql/newsSchema';

const BASE_APP_URL = process.env.BASE_APP_URL as string;

export async function generateStaticParams() {
  const data = await fetchData<INewsData>(getNews);

  return data.news.data.map(({ attributes }) => ({
    slug: attributes.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await fetchData<INewsData>(getNews);
  const news = data.news.data.find(
    ({ attributes: { slug } }) => slug === params.slug,
  );

  return {
    title: news?.attributes.title,
    description: news?.attributes.text,
    alternates: {
      canonical: `${BASE_APP_URL}/news/${news?.attributes.slug}`,
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <>
      <NewsTemplate paramsSlug={slug} />
      <News slug={slug} />
    </>
  );
}

import { Metadata } from 'next';

import { News } from '@/sections/News';
import { NewsTemplate } from '@/sections/pageNews/NewsTemplate';
import { NoDataTemplate } from '@/sections/NoDataTemplate';

import { INewsData } from '@/sections/pageNews/NewsTemplate/NewsTemplate.types';

import { fetchData } from '@/actions/fetchData';
import { getNews } from '@/graphql/newsSchema';

import { templateNoData } from '@/data';

export interface IOneNewsPageProps {
  params: { slug: string };
}

const BASE_APP_URL = process.env.NEXT_PUBLIC_BASE_APP_URL as string;

export async function generateStaticParams() {
  const data = await fetchData<INewsData>(getNews);

  return data.news.data.map(({ attributes }) => ({
    slug: attributes.slug,
  }));
}

export async function generateMetadata({
  params,
}: IOneNewsPageProps): Promise<Metadata> {
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

export default async function Page({ params }: IOneNewsPageProps) {
  const { slug } = params;
  const { titleTemplateNews, descriptionTemplateNews } = templateNoData;
  const data = await fetchData<INewsData>(getNews);
  const oneNews = data.news.data.find(
    ({ attributes: { slug } }) => slug === params.slug,
  );

  return (
    <>
      {oneNews ? (
        <NewsTemplate oneNews={oneNews.attributes} />
      ) : (
        <NoDataTemplate
          title={titleTemplateNews}
          description={descriptionTemplateNews}
          className='pb-0 pt-[100px] md:py-0 md:pt-[100px] xl:py-0 xl:pt-[130px]'
        />
      )}
      <News slug={slug} />
    </>
  );
}

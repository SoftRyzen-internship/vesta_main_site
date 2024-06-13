import { Metadata } from 'next';

import { News } from '@/sections/News';
import { NewsTemplate } from '@/sections/pageNews/NewsTemplate';

import { metaData } from '@/data';
import { fetchData } from '@/actions/fetchData';
import { getNews } from '@/graphql/newsSchema';
import { INewsData } from '@/sections/pageNews/NewsTemplate/NewsTemplate.types';

const BASE_APP_URL = process.env.BASE_APP_URL as string;

export const metadata: Metadata = {
  title: metaData.titleNews,
  description: metaData.descriptionNews,
  alternates: {
    canonical: `${BASE_APP_URL}/news`,
  },
};

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await fetchData<INewsData>(getNews);
  const oneNews = data.news.data.find(
    ({ attributes: { slug } }) => slug === params.slug,
  );
  console.log(data.news.data);
  return (
    <>
      {oneNews && (
        <NewsTemplate
          oneNews={{
            ...oneNews.attributes,
            img: oneNews.attributes.image.data[0].attributes.url,
            imgAlt: oneNews.attributes.image.data[0].attributes.alternativeText,
          }}
        />
      )}
      <News />
    </>
  );
}

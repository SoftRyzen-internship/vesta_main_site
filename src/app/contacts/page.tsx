import { Metadata } from 'next';

import { Contacts } from '@/sections/pageContacts/Contacts';

import { metaData } from '@/data';

const BASE_APP_URL = process.env.NEXT_PUBLIC_BASE_APP_URL as string;

export const metadata: Metadata = {
  title: metaData.titleContacts,
  description: metaData.descriptionContacts,
  alternates: {
    canonical: `${BASE_APP_URL}/contacts`,
  },
};

export default function Page() {
  return <Contacts />;
}

import { Metadata } from "next";

import { ProjectTemplate } from "@/sections/pageProjects/ProjectTemplate";

import { metaData } from '@/data';


const BASE_APP_URL = process.env.BASE_APP_URL as string;

export const metadata: Metadata = {
  title: metaData.titleProjects,
  description: metaData.descriptionProjects,
  alternates: {
    canonical: `${BASE_APP_URL}/projects`,
  },
}



export default function Page() {
  return <ProjectTemplate />;
}

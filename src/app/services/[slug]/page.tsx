import React from 'react';

import { EmployerHero, EmploymentGrid } from '@/app/components/employer';
import {
  CoreValues,
  MissionSection,
  ResearchSection,
  Vision,
} from '@/app/components/home-page';
import {
  defaultEmploymentData,
  employmentData,
} from '@/app/lib/dummyData/employerData';
import { IEmploymentPageData } from '@/app/lib/interfaces/employerInterface';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(employmentData).map((slug) => ({ slug }));
}

const ServicesPage: React.FC<PageProps> = ({ params }) => {
  const { slug } = params;

  const data: IEmploymentPageData =
    employmentData[slug] ?? defaultEmploymentData;

  const { gridSection } = data;

  return (
    <main>
      <EmployerHero />

      <EmploymentGrid
        headerText={gridSection.headerText}
        categories={gridSection.categories}
      />
      <ResearchSection />
      <MissionSection />
      <CoreValues />
      <Vision />
    </main>
  );
};

export default ServicesPage;

import React from 'react';

import { EmployerHero, EmploymentGrid } from '@/app/components/employer';
import {
  CoreValues,
  MissionSection,
  ResearchSection,
  Vision,
} from '@/app/components/home-page';
import {
  defaultEmployeesData,
  employeesData,
} from '@/app/lib/dummyData/employeesData';
import { DynamicPageProps } from '@/app/lib/interfaces/dynamicPageInterface';
import { IEmploymentPageData } from '@/app/lib/interfaces/employerInterface';

export async function generateStaticParams() {
  return Object.keys(employeesData).map((slug) => ({ slug }));
}

const EmployeesPage: React.FC<DynamicPageProps> = ({ params }) => {
  const { slug } = params;

  const data: IEmploymentPageData = employeesData[slug] ?? defaultEmployeesData;

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

export default EmployeesPage;

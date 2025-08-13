import { notFound } from 'next/navigation';
import React from 'react';

import {
  CareerSection,
  FeatureGrid,
  JobPageHero,
} from '@/app/components/dynamicJobs';
import { CoreValues, MissionSection } from '@/app/components/home-page';
import { jobs } from '@/app/lib/dummyData/jobsdata';

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const job = jobs.find((j) => j.slug === params.slug);
  if (!job) {
    return { title: 'Job Not Found' };
  }
  return {
    title: `${job.title} | ProficientNow Careers`,
  };
}

export default function JobPage({ params }: { params: Params }) {
  const job = jobs.find((j) => j.slug === params.slug);

  if (!job) {
    notFound();
  }

  return (
    <>
      <main className='max-w-6xl  lg:mt-[150px] mx-auto px-6 lg:py-12'>
        {job.sections.map((section, idx) => (
          <JobPageHero key={idx} section={section} reverse={idx % 2 === 0} />
        ))}
        {job.features && (
          <FeatureGrid
            description={job.features.description}
            items={job.features.items}
          />
        )}
        {job.careersSection && <CareerSection data={job.careersSection} />}
        <MissionSection />
        <CoreValues />
      </main>
    </>
  );
}

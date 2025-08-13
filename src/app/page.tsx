'use client';

import * as React from 'react';

import {
  AngledMarquee,
  ClientExperience,
  CoreValues,
  HeroSection,
  HowItWorks,
  IndustriesSection,
  MissionSection,
  ResearchSection,
  TransformSection,
  TrustedBy,
  Vision,
  WhyChooseUs,
} from '@/app/components/home-page';

export default function HomePage() {
  return (
    <main>
      <section>
        <HeroSection />
        <TrustedBy />
        <TransformSection />
        <AngledMarquee />
        <WhyChooseUs />
        <ResearchSection />
        <IndustriesSection />
        <HowItWorks />
        <MissionSection />
        <ClientExperience />
        <CoreValues />
        <Vision />
      </section>
    </main>
  );
}

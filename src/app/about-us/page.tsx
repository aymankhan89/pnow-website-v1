import {
  GlobalPresenceSection,
  InnovationSection,
  JourneySection,
  MissionSection,
  PartnershipSection,
  ValuesSection,
  VisionSection,
} from '@/app/components/about-us';

export default function AboutUsPage() {
  return (
    <>
      <JourneySection />
      <VisionSection />
      <MissionSection />
      <ValuesSection />
      {/* <StrategySection /> */}
      <PartnershipSection />
      <InnovationSection />
      <GlobalPresenceSection />
    </>
  );
}

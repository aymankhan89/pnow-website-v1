import { SectionItem } from '@/app/lib/interfaces/aboutUsSeactionInterfaces';

import growthIllustration from '../../../../public/images/growthIllustration.png';

export const JOURNEY_DATA: SectionItem[] = [
  {
    id: 'our-journey',
    headingLines: [
      'Our Journey:',
      'Empowering Careers,',
      'Transforming Businesses',
    ],
    description:
      "Since our founding in June 2021, we've revolutionized recruitment by providing bespoke hiring solutions across diverse industries. From the US IT sector to Legal, Construction, Architecture, Mechanical, and Manufacturing, our vision drives seamless connections between employers and top-tier talent.",
    buttonText: "Let's go!",
    imageSrc: growthIllustration,
    imageAlt: 'Growth illustration',
    imageWidth: 400,
    imageHeight: 300,
  },
];

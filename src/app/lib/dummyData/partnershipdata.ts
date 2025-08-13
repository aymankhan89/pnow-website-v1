import { PartnershipData } from '@/app/lib/interfaces/aboutUsSeactionInterfaces';

import businessImg from '../../../../public/images/business-partners.png';
import goalTeamImg from '../../../../public/images/goal-oriented-team.png';

export const PARTNERSHIP_DATA: PartnershipData = {
  title: 'Partnership',
  cards: [
    {
      id: 'business-partners',
      heading: 'Business Partners',
      description:
        'ProficientNow treats our employers and employees as our business partners and actualizes their goals.',
      imageSrc: businessImg,
      imageAlt: 'Business Partners',
      imageWidth: 500,
      imageHeight: 500,
    },
    {
      id: 'goal-oriented-team',
      heading: 'Goal‑Oriented Team',
      description:
        'Our goal‑oriented team always expands the network pool to meet the demands of our clients.',
      imageSrc: goalTeamImg,
      imageAlt: 'Goal‑Oriented Team',
      imageWidth: 500,
      imageHeight: 500,
    },
  ],
  footerText:
    "With operations in the US, Australia, and India, and plans for global expansion, our diverse workforce is dedicated to driving recruitment excellence. Beyond business success, we're committed to community impact, bridging the gap between talent requirements and career growth opportunities.",
};

import { FaBullseye, FaHandshake, FaProjectDiagram } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

export const STRATEGY_ITEMS = [
  {
    title: 'Talent Network',
    desc: 'Utilizing our extensive professional connections',
    icon: <FaProjectDiagram size={20} />,
    pos: { side: 'left', pct: 25 },
  },
  {
    title: 'Mutual Success',
    desc: 'Directing skilled talent toward shared goals',
    icon: <FaHandshake size={20} />,
    pos: { side: 'left', pct: 75 },
  },
  {
    title: 'Effective Planning',
    desc: 'Crafting strategies for client growth',
    icon: <FaBullseye size={20} />,
    pos: { side: 'right', pct: 25 },
  },
  {
    title: 'Strategic Placement',
    desc: 'Matching the right talent to business demands',
    icon: <FiMapPin size={20} />,
    pos: { side: 'right', pct: 75 },
  },
];

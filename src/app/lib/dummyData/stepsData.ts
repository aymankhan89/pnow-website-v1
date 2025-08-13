import { IStep, TabKey } from '@/app/lib/interfaces/heroSectioninterfaces';

export const stepsData: Record<TabKey, IStep[]> = {
  talents: [
    {
      id: 1,
      title: "Sign up, It's Free!",
      description:
        'Our team will set up your account and help you build a user‑friendly web dashboard.',
    },
    {
      id: 2,
      title: 'Post jobs in minutes',
      description:
        'Create and post anywhere from 1–100 job openings with just a few clicks.',
    },
    {
      id: 3,
      title: 'Review Your Staff',
      description:
        'View bios, reviews, and rosters before workers arrive on the job, then post feedback and pay—effortlessly.',
    },
  ],
  business: [
    {
      id: 1,
      title: 'Create a Business Profile',
      description:
        'Tell us about your company and what you’re looking for in talent.',
    },
    {
      id: 2,
      title: 'Browse & Match',
      description:
        'Search our database, save favorites, and invite candidates to apply.',
    },
    {
      id: 3,
      title: 'Schedule & Pay',
      description:
        'Manage shifts, track hours, and pay staff—all from one dashboard.',
    },
  ],
};

import { StaticImageData } from 'next/image';

import {
  JobCareers,
  JobFeature,
  JobSection,
} from '@/app/lib/dummyData/jobsdata';

export interface IFeatureGridProps {
  description: string;
  items: JobFeature[];
}
export interface ICareerSectionProps {
  data: JobCareers;
}
export interface IJobModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    title: string;
    qualifications: string[];
    responsibilities?: string[];
    imageSrc: string | StaticImageData;
    altText?: string;
  } | null;
}

export interface ISectionProps {
  section: JobSection;
  reverse?: boolean;
}

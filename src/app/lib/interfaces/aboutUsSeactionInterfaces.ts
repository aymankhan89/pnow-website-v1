import { StaticImageData } from 'next/image';

export interface SectionItem {
  id: string;
  headingLines: string[];
  description: string;
  buttonText: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

export interface PartnershipCard {
  id: string;
  heading: string;
  description: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

export interface PartnershipData {
  title: string;
  cards: PartnershipCard[];
  footerText: string;
}

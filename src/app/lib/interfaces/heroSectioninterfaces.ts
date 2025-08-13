import { StaticImageData } from 'next/image';

export interface ICoreValue {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface IStep {
  id: number;
  title: string;
  description: string;
}
export type TabKey = 'talents' | 'business';
export interface ICard {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  imgSrc: StaticImageData | string;
  imgAlt: string;
}
export interface IStat {
  value: string;
  label: string;
}

export interface IVisionPoint {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface IFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

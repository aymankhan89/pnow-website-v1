export interface JobResponsibility {
  id: number;
  text: string;
}

export interface Category {
  id: number;
  title: string;
  image: string;
  jobTitle: string;
  location: string;
  qualifications: string;
  responsibilities: JobResponsibility[];
}

export interface IEmploymentPageData {
  servicesSection: {
    title: string;
    subtitle: string;
    description: string;
    additionalInfo: string;
  };
  gridSection: {
    headerText: string;
    categories: Category[];
  };
}

export interface IEmployerHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  additionalInfo?: string;
}

export interface IEmploymentGridProps {
  categories: Category[];
  headerText?: string;
}

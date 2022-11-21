import { IconType } from '@react-icons/all-files';

export interface FeatureCardProps {
  id: number;
  heading: string;
  price: string;
  imgSrc: string;
  imgAlt: string;
  content: string;
  details: {
    address: string;
    category: string;
    agent: string;
  };
}

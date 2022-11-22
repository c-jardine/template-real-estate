export interface PropertyCardProps {
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
  layout: {
    sqFt: number;
    beds: number;
    baths: number;
  };
}

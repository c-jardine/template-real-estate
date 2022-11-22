export interface TeamCardSocialLinkProps {
  ariaLabel: string;
  icon: any;
  href: string;
}

export interface TeamCardProps {
  id: number;
  imgSrc: string;
  imgAlt: string;
  name: string;
  links: {
    facebook: string;
    instagram: string;
    linkedin: string;
    email: string;
  };
}

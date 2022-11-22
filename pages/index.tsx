import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { FeatureCards } from '../src/components/cards/FeatureCard';
import { HomeHero } from '../src/components/ctas';
import { Banner } from '../src/components/ctas/Banner';
import { Clients } from '../src/components/sections/Clients';
import { PropertyTypes } from '../src/components/sections/PropertyTypes';
import { TeamCards } from '../src/components/sections/TeamCards';
import { Testimonials } from '../src/components/testimonials';
import { PageLayout } from '../src/layouts/PageLayout';

const HomePage: NextPage = () => {
  return (
    <>
      <PageLayout>
        <HomeHero />
        <FeatureCards />
        <TeamCards />
        <PropertyTypes />
        <Clients />
      </PageLayout>
    </>
  );
};

export default HomePage;

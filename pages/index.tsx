import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { PropertyCards } from '../src/components/cards/PropertyCard';
import { HomeHero } from '../src/components/ctas';
import { Clients } from '../src/components/sections/Clients';
import { PropertyTypes } from '../src/components/sections/PropertyTypes';
import { TeamCards } from '../src/components/sections/TeamCards';
import { PageLayout } from '../src/layouts/PageLayout';

const HomePage: NextPage = () => {
  return (
    <>
      <PageLayout>
        <HomeHero />
        <PropertyCards />
        <TeamCards />
        <PropertyTypes />
        <Clients />
        <Box />
      </PageLayout>
    </>
  );
};

export default HomePage;

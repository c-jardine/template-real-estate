import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { Parallax } from 'react-scroll-parallax';
import { Header } from '../src/components/core/Header';
import { ServiceCards } from '../src/components/sections/ServiceCards';
import { PageLayout } from '../src/layouts/PageLayout';

const Services: NextPage = () => {
  return (
    <PageLayout>
      <Box position='sticky' top={32} zIndex={0} px={{ base: 4, lg: 0 }}>
        <Parallax speed={20} opacity={[3, 0]}>
          <Box my={16}>
            <Header
              center
              title='Aute veniam lorem eiusmod deserunt'
              subtitle='Services'
              description='Occaecat id nulla esse elit. Deserunt eu eiusmod adipisicing duis do aliquip ut esse pariatur consequat. Nostrud sunt officia ea velit culpa qui excepteur quis velit labore tempor ut commodo esse.'
            />
          </Box>
        </Parallax>
      </Box>
      <Box
        position='relative'
        zIndex={1}
        w='100vw'
        style={{ WebkitTransform: 'translate3d(0,0,0)' }}
      >
        <ServiceCards />
      </Box>
    </PageLayout>
  );
};

export default Services;

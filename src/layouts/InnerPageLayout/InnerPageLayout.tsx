import { Box, Center, Image } from '@chakra-ui/react';
import { Parallax } from 'react-scroll-parallax';
import { Header } from '../../components/core/Header';
import { InnerPageLayoutProps } from './InnerPageLayout.types';

const InnerPageLayout = (props: InnerPageLayoutProps) => {
  return (
    <>
      <Box position='relative' w='full' h='sm'>
        <Box
          position='fixed'
          w='full'
          h='sm'
          top={0}
          zIndex={0}
          bg='chalkboard'
        >
          <Image
            src={props.imgSrc}
            alt={props.imgAlt}
            objectFit='cover'
            w='full'
            h='sm'
            opacity={0.05}
          />
        </Box>
        <Center
          position='absolute'
          w='full'
          h='full'
          top={-28}
          zIndex={1}
          px={{ base: 4, lg: 0 }}
        >
          <Parallax speed={-20} opacity={[4, 0]}>
            <Header
              center
              light
              title={props.title}
              subtitle={props.subtitle}
            />
          </Parallax>
        </Center>
      </Box>

      <Box
        position='relative'
        zIndex={1}
        style={{ WebkitTransform: 'translate3d(0,0,0)' }}
        bg='background'
        py={16}
      >
        {props.children}
      </Box>
    </>
  );
};

export default InnerPageLayout;

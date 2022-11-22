import {
  Box,
  Center,
  chakra,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { Parallax } from 'react-scroll-parallax';
import { Header } from '../src/components/core/Header';
import { TeamCards } from '../src/components/sections/TeamCards';
import { TeamSplit } from '../src/components/sections/TeamSplit';
import { PageLayout } from '../src/layouts/PageLayout';

const About: NextPage = () => {
  return (
    <PageLayout>
      <Box
        position='sticky'
        top={16}
        zIndex={0}
        w='full'
        h='xs'
        bg='chalkboard'
      >
        <Image
          src='https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
          alt=''
          objectFit='cover'
          w='full'
          h='full'
          opacity={0.05}
        />
        <Center
          mt={8}
          position='absolute'
          w='full'
          h='full'
          top={0}
          zIndex={1}
          px={{ base: 4, lg: 0 }}
        >
          <Parallax speed={20} opacity={[3, 0]}>
            <Header
              center
              light
              title='About us'
              subtitle='Id ea eu aliquip amet do ipsum'
            />
          </Parallax>
        </Center>
      </Box>

      <Box
        position='relative'
        style={{ WebkitTransform: 'translate3d(0,0,0)' }}
        bg='background'
      >
        <Stack
          position='relative'
          zIndex={1}
          w='100vw'
          style={{ WebkitTransform: 'translate3d(0,0,0)' }}
          spacing={28}
          alignItems='center'
          py={16}
          px={{base: 4, xl: 0}}
        >
          <TeamSplit />

          <Box mx='auto' maxW='4xl' w='full' h='lg'>
            <Image
              src='https://images.unsplash.com/photo-1547866751-446296f133ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80'
              alt=''
              objectFit='cover'
              w='full'
              h='full'
            />
          </Box>
          <SimpleGrid
            columns={{ base: 1, xl: 3 }}
            mx='auto'
            maxW='7xl'
            px={{ base: 4, xl: 0 }}
          >
            <chakra.h3 color='headerText' fontSize='4xl'>
              Who we are
            </chakra.h3>
            <Stack gridColumn={{ base: 1, xl: '2 / span 2' }}>
              <Text>
                Consectetur id velit id anim enim laboris do quis laborum esse
                est magna ipsum. Dolor minim exercitation nostrud ex eiusmod et
                aliquip esse consequat amet et proident fugiat eu.
              </Text>
              <Text>
                Labore nostrud enim laboris exercitation enim fugiat veniam. Id
                cupidatat aute commodo id. Aute pariatur culpa ipsum dolor irure
                proident sunt magna magna. Id qui voluptate proident velit sunt.
                Lorem dolore do quis sint et sit.
              </Text>
            </Stack>
          </SimpleGrid>

          <TeamCards />
        </Stack>
      </Box>
    </PageLayout>
  );
};

export default About;

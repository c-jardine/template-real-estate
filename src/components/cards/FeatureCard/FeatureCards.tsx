import {
  Box,
  Icon as ChakraIcon,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { BsArrowRight } from '@react-icons/all-files/bs/BsArrowRight';
import { Header } from '../../core/Header';
import FeatureCard from './FeatureCard';
import { FeatureCardProps } from './FeatureCard.types';

const features: FeatureCardProps[] = [
  {
    id: 0,
    heading: 'Modern Home, Great Neighborhood',
    price: '$3k',
    imgSrc:
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    imgAlt: 'An RGB keyboard',
    content: 'Neque convallis a cras semper auctor neque vitae tempus quam.',
    details: {
      address: '123 Main St | Toledo, OH 43604',
      category: 'House',
      agent: 'Ronnie Merritt',
    },
  },
  {
    id: 1,
    heading: 'City Living With a Country Feel',
    price: '$2k',
    imgSrc:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    imgAlt: 'Wireframing',
    content:
      'Sit amet consectetur adipiscing elit pellentesque habitant morbi.',
    details: {
      address: '506 Hillview Dr | Sylvania, OH 43505',
      category: 'House',
      agent: 'Rachel Martinez',
    },
  },
  {
    id: 2,
    heading: 'Townhouse With a Large Yard',
    price: '$1.5k',
    imgSrc:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    imgAlt: 'Typing at a computer',
    content:
      'Viverra maecenas accumsan lacus vel facilisis volutpat est velit.',
    details: {
      address: '1569 Beechwood Ave | Toledo, OH 43606',
      category: 'Apartment',
      agent: 'Calvin Lewis',
    },
  },
  {
    id: 3,
    heading: 'Small Cottage in Toledo',
    price: '$2k',
    imgSrc:
      'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
    imgAlt: 'Typing at a computer',
    content:
      'Viverra maecenas accumsan lacus vel facilisis volutpat est velit.',
    details: {
      address: '3994 Willow Oaks Blvd | Toledo, OH 43612',
      category: 'House',
      agent: 'Rachel Martinez',
    },
  },
];

const FeatureCards = () => {
  return (
    <Box maxW='1920px'>
      <Box px={{ base: 5, md: 10 }}>
        <Header
          title='Browse properties'
          subtitle='Find Your Dream Home'
          // description='Dolor nulla consequat enim culpa incididunt nulla nulla nulla. Sint sint sint non aliquip aute ut ut irure. Exercitation commodo nulla ex ipsum in. Officia consectetur esse dolor reprehenderit Lorem est adipisicing eiusmod est et. Cupidatat et proident officia incididunt incididunt eiusmod qui amet nostrud occaecat voluptate irure.'
        />
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, '2xl': 4 }} mt={16} rowGap={16}>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </SimpleGrid>
      <Box maxW='8xl' w='full' mx='auto'>
        <Link
          display='flex'
          flexDirection='row'
          alignItems='center'
          gap={2}
          w='fit-content'
          mt={12}
          role='group'
        >
          <Text textStyle='link' variant='upperWide'>
            View all properties
          </Text>
          <ChakraIcon as={BsArrowRight} h={5} w={5} color='bodyText' />
        </Link>
      </Box>
    </Box>
  );
};

export default FeatureCards;

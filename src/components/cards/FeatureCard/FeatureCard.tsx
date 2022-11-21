import {
  Box,
  chakra,
  Icon,
  Image,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FeatureCardProps } from './FeatureCard.types';
import { FaMapMarkerAlt } from '@react-icons/all-files/fa/FaMapMarkerAlt';
import { FaUser } from '@react-icons/all-files/fa/FaUser';
import { FaTag } from '@react-icons/all-files/fa/FaTag';

const FeatureCard = (props: FeatureCardProps) => {
  return (
    <Stack justifyContent='center' textAlign='center' role='group'>
      <Image
        p={4}
        src={props.imgSrc}
        alt={props.imgAlt}
        h={64}
        w='full'
        objectFit='cover'
        transition='200ms ease-in-out'
        _groupHover={{ filter: 'saturate(80%)' }}
      />
      <Box position='relative'>
        <Stack p={4}>
          <chakra.h3
            as={ChakraLink}
            href='#'
            transition='200ms ease-in-out'
            _hover={{ color: 'brand.500' }}
            color='headerText'
            fontSize='lg'
            letterSpacing='wider'
            textAlign='left'
            fontWeight='bold'
          >
            {props.heading}
          </chakra.h3>
          <Text textAlign='left' fontWeight='bold' letterSpacing='wider'>
            {props.price} <chakra.span color='brand.500'>per month</chakra.span>
          </Text>
          <Text textAlign='left' fontSize='xs' lineHeight='short'>
            {props.content}
          </Text>
          <SimpleGrid templateColumns='auto 1fr' gap={2}>
            <Icon
              as={FaMapMarkerAlt}
              w={3}
              h={3}
              color='brand.500'
              style={{ marginTop: 1 }}
            />
            <Text
              as={ChakraLink}
              href='#'
              w='fit-content'
              transition='200ms ease-in-out'
              _hover={{ color: 'brand.500' }}
              textAlign='left'
              fontSize='xs'
              lineHeight='short'
            >
              {props.details.address}
            </Text>
          </SimpleGrid>
          <SimpleGrid templateColumns='auto 1fr' gap={2}>
            <Icon
              as={FaTag}
              w={3}
              h={3}
              color='brand.500'
              style={{ marginTop: 1 }}
            />
            <Text
              as={ChakraLink}
              href='#'
              w='fit-content'
              transition='200ms ease-in-out'
              _hover={{ color: 'brand.500' }}
              textAlign='left'
              fontSize='xs'
              lineHeight='short'
            >
              {props.details.category}
            </Text>
          </SimpleGrid>
          <SimpleGrid templateColumns='auto 1fr' gap={2}>
            <Icon
              as={FaUser}
              w={3}
              h={3}
              color='brand.500'
              style={{ marginTop: 1 }}
            />
            <Text
              as={ChakraLink}
              href='#'
              w='fit-content'
              transition='200ms ease-in-out'
              _hover={{ color: 'brand.500' }}
              textAlign='left'
              fontSize='xs'
              lineHeight='short'
            >
              {props.details.agent}
            </Text>
          </SimpleGrid>
        </Stack>
        <Box
          w='full'
          px={4}
          py={2}
          bg={props.id % 2 === 0 ? 'brand.500' : 'chalkboard'}
        >
          <Text
            fontWeight='semibold'
            fontSize='xs'
            color={`${
              props.id % 2 === 0 ? 'chalkboard' : 'subtleText'
            } !important`}
            textAlign='left'
          >
            Eiusmod labore ea ea quis tempor ea.
          </Text>
        </Box>
      </Box>
    </Stack>
  );
};

export default FeatureCard;

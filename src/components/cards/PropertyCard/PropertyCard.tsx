import {
  Box,
  chakra,
  Flex,
  Icon,
  Image,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { PropertyCardProps } from './PropertyCard.types';
import { FaMapMarkerAlt } from '@react-icons/all-files/fa/FaMapMarkerAlt';
import { FaUser } from '@react-icons/all-files/fa/FaUser';
import { FaTag } from '@react-icons/all-files/fa/FaTag';
import { FaRulerCombined } from '@react-icons/all-files/fa/FaRulerCombined';
import { FaBed } from '@react-icons/all-files/fa/FaBed';
import { FaBath } from '@react-icons/all-files/fa/FaBath';

const PropertyCard = (props: PropertyCardProps) => {
  return (
    <Stack justifyContent='center' textAlign='center' role='group' spacing={4}>
      <Box position='relative' h={64} rounded='xl' overflow='hidden'>
        <Image
          src={props.imgSrc}
          alt={props.imgAlt}
          h={64}
          w='full'
          objectFit='cover'
          transition='200ms ease-in-out'
          _groupHover={{ filter: 'saturate(80%)' }}
        />
        <SimpleGrid
          columns={3}
          placeItems='center'
          position='absolute'
          bottom={0}
          w='full'
          px={4}
          py={2}
          bg='rgba(0,0,0,0.8)'
        >
          <Flex alignItems='center' gap={2}>
            <Icon as={FaRulerCombined} color='white' />
            <chakra.span fontWeight='semibold' fontSize='xs' color='white'>
              {props.layout.sqFt} sq. ft.
            </chakra.span>
          </Flex>
          <Flex alignItems='center' gap={2}>
            <Icon as={FaBed} color='white' />
            <chakra.span fontWeight='semibold' fontSize='xs' color='white'>
              {props.layout.beds}
            </chakra.span>
          </Flex>
          <Flex alignItems='center' gap={2}>
            <Icon as={FaBath} color='white' />
            <chakra.span fontWeight='semibold' fontSize='xs' color='white'>
              {props.layout.baths}
            </chakra.span>
          </Flex>
        </SimpleGrid>
      </Box>

      <Box position='relative' px={2}>
        <Stack alignItems='flex-start'>
          <Text textAlign='left' fontWeight='bold' letterSpacing='wider'>
            {props.price} <chakra.span color='brand.500'>per month</chakra.span>
          </Text>
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
      </Box>
    </Stack>
  );
};

export default PropertyCard;

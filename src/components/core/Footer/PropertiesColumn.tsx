import { Link as ChakraLink, Box, Stack, Text } from '@chakra-ui/react';

const PropertiesColumn = () => {
  return (
    <Stack>
      <Text
        color='headerText !important'
        fontSize='xl'
        fontWeight='bold'
        textTransform='uppercase'
      >
        Properties
      </Text>
      <Stack spacing={4}>
        <ChakraLink
          href='#'
          letterSpacing='wide'
          lineHeight={1}
          fontSize='sm'
          textTransform='uppercase'
          color='bodyText'
          fontWeight='light'
          transition='200ms ease-in-out'
          _hover={{ color: 'brand.500' }}
        >
          Houses
        </ChakraLink>
        <ChakraLink
          href='#'
          letterSpacing='wide'
          lineHeight={1}
          fontSize='sm'
          textTransform='uppercase'
          color='bodyText'
          fontWeight='light'
          transition='200ms ease-in-out'
          _hover={{ color: 'brand.500' }}
        >
          Apartments
        </ChakraLink>
        <ChakraLink
          href='#'
          letterSpacing='wide'
          lineHeight={1}
          fontSize='sm'
          textTransform='uppercase'
          color='bodyText'
          fontWeight='light'
          transition='200ms ease-in-out'
          _hover={{ color: 'brand.500' }}
        >
          Commercial Spaces
        </ChakraLink>
        <ChakraLink
          href='#'
          letterSpacing='wide'
          lineHeight={1}
          fontSize='sm'
          textTransform='uppercase'
          color='bodyText'
          fontWeight='light'
          transition='200ms ease-in-out'
          _hover={{ color: 'brand.500' }}
        >
          Land
        </ChakraLink>
      </Stack>
    </Stack>
  );
};

export default PropertiesColumn;

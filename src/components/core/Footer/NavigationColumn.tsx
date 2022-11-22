import { Link as ChakraLink, Box, Stack, Text } from '@chakra-ui/react';

const NavigationColumn = () => {
  return (
    <Stack>
      <Text
        color='headerText !important'
        fontSize='xl'
        fontWeight='bold'
        textTransform='uppercase'
      >
        Navigation
      </Text>
      <Stack spacing={4}>
        <ChakraLink
          href='/home'
          letterSpacing='wide'
          lineHeight={1}
          fontSize='sm'
          textTransform='uppercase'
          color='bodyText'
          fontWeight='light'
          transition='200ms ease-in-out'
          _hover={{ color: 'brand.500' }}
        >
          Home
        </ChakraLink>
        <ChakraLink
          href='/about'
          letterSpacing='wide'
          lineHeight={1}
          fontSize='sm'
          textTransform='uppercase'
          color='bodyText'
          fontWeight='light'
          transition='200ms ease-in-out'
          _hover={{ color: 'brand.500' }}
        >
          About
        </ChakraLink>
        <ChakraLink
          href='/faq'
          letterSpacing='wide'
          lineHeight={1}
          fontSize='sm'
          textTransform='uppercase'
          color='bodyText'
          fontWeight='light'
          transition='200ms ease-in-out'
          _hover={{ color: 'brand.500' }}
        >
          FAQ
        </ChakraLink>
        <ChakraLink
          href='/contact'
          letterSpacing='wide'
          lineHeight={1}
          fontSize='sm'
          textTransform='uppercase'
          color='bodyText'
          fontWeight='light'
          transition='200ms ease-in-out'
          _hover={{ color: 'brand.500' }}
        >
          Contact
        </ChakraLink>
      </Stack>
    </Stack>
  );
};

export default NavigationColumn;

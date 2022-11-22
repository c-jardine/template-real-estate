import { chakra, Box, Stack, Text, FormControl } from '@chakra-ui/react';
import React from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Textarea } from '../Textarea';

const ContactForm = () => {
  return (
    <Stack
      position={{ base: 'relative', lg: 'absolute' }}
      zIndex={1}
      bottom={{base: 16, '2xl': 32 }}
      right={{ lg: 8, xl: 32 }}
      maxW='md'
      w='full'
      bg='cardBackground'
      p={8}
      rounded='xl'
      shadow='lg'
      spacing={4}
    >
      <Box>
        <chakra.h2
          fontSize='2xl'
          fontWeight='semibold'
          letterSpacing='wide'
          color='brand.500'
        >
          Get in touch with us today
        </chakra.h2>
        <Text fontSize='sm'>Anim et anim magna magna consectetur dolor.</Text>
      </Box>
      <FormControl as={Stack} spacing={6}>
        <Input label='Name' autoComplete='name' />
        <Input label='Phone' autoComplete='phone' />
        <Input label='Email' autoComplete='email' />
        <Textarea label='Enter your message' />
        <Button ariaLabel='Send message'>Send</Button>
      </FormControl>
    </Stack>
  );
};

export default ContactForm;

import {
  Box,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { Header } from '../../core/Header';
import { TeamCardsProps } from './TeamCards.types';

const Team = [
  {
    id: 0,
    imgSrc:
      'https://images.unsplash.com/photo-1637684666772-1f215bfd0f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    imgAlt: '',
    name: 'Calvin Lewis',
    links: {
      facebook: '',
      instagram: '',
      email: '',
    },
  },
  {
    id: 0,
    imgSrc:
      'https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    imgAlt: '',
    name: 'Ronnie Merritt',
    links: {
      facebook: '',
      instagram: '',
      linkedin: '',
      email: '',
    },
  },
  {
    id: 0,
    imgSrc:
      'https://images.unsplash.com/photo-1563132337-f159f484226c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    imgAlt: '',
    name: 'Rachel Martinez',
    links: {
      facebook: '',
      instagram: '',
      linkedin: '',
      email: '',
    },
  },
  {
    id: 0,
    imgSrc:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    imgAlt: '',
    name: 'David Jones',
    links: {
      facebook: '',
      instagram: '',
      linkedin: '',
      email: '',
    },
  },
];

const SocialLink = (props) => {
  return (
    <Link as={Flex} role='group'>
      <Icon
        aria-label={props.ariaLabel}
        as={props.icon}
        color='white'
        transition='200ms ease-in-out'
        _groupHover={{ color: 'chalkboard' }}
      />
    </Link>
  );
};

const TeamCards = (props: TeamCardsProps) => {
  return (
    <Box maxW='8xl' mx='auto'>
      <Header
        center
        title='Our Agents'
        subtitle='Meet our professional, licensed team'
      />
      <SimpleGrid
        columns={{ base: 1, md: 2, '2xl': 4 }}
        mt={16}
        rowGap={16}
        columnGap={8}
      >
        {Team.map((member) => (
          <Box key={member.id}>
            <Image
              src={member.imgSrc}
              alt={member.imgAlt}
              objectFit='cover'
              w='full'
              h='sm'
            />
            <Box bg='chalkboard' px={4} pt={4} pb={12}>
              <Text
                color='white !important'
                textAlign='center'
                fontSize='lg'
                fontWeight='semibold'
              >
                {member.name}
              </Text>
              <Text
                color='subtleText !important'
                textAlign='center'
                lineHeight={0.5}
                fontSize='sm'
              >
                2 properties
              </Text>
            </Box>
            <Box px={8}>
              <Flex
                bg='brand.500'
                p={3}
                mt={-5}
                justifyContent='center'
                gap={8}
              >
                <SocialLink icon={FaLinkedinIn} href='#' />
                <SocialLink icon={FaEnvelope} href='#' />
                <SocialLink icon={FaFacebook} href='#' />
                <SocialLink icon={FaTwitter} href='#' />
              </Flex>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TeamCards;

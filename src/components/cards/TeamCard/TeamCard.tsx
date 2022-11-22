import {
  Box,
  Flex,
  Icon,
  Image,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { TeamCardProps, TeamCardSocialLinkProps } from './TeamCard.types';

const SocialLink = (props: TeamCardSocialLinkProps) => {
  return (
    <ChakraLink as={Flex} role='group'>
      <Icon
        aria-label={props.ariaLabel}
        as={props.icon}
        color='white'
        transition='200ms ease-in-out'
        _groupHover={{ color: 'chalkboard' }}
      />
    </ChakraLink>
  );
};

const TeamCard = (props: TeamCardProps) => {
  return (
    <Box>
      <Image
        src={props.imgSrc}
        alt={props.imgAlt}
        objectFit='contain'
        w='full'
        maxH='sm'
      />
      <Box bg='chalkboard' px={4} pt={4} pb={12} rounded='xl'>
        <Text
          color='white !important'
          textAlign='center'
          fontSize='lg'
          fontWeight='semibold'
        >
          {props.name}
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
          rounded='lg'
        >
          <SocialLink
            ariaLabel={`View ${props.name}'s LinkedIn profile`}
            icon={FaLinkedinIn}
            href='#'
          />
          <SocialLink
            ariaLabel={`Send ${props.name} an email`}
            icon={FaEnvelope}
            href='#'
          />
          <SocialLink
            ariaLabel={`View ${props.name}'s Facebook profile`}
            icon={FaFacebook}
            href='#'
          />
          <SocialLink
            ariaLabel={`View ${props.name}'s Twitter profile`}
            icon={FaTwitter}
            href='#'
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default TeamCard;

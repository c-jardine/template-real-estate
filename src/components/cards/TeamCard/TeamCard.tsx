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
        _groupHover={{ color: 'brand.500' }}
      />
    </ChakraLink>
  );
};

const TeamCard = (props: TeamCardProps) => {
  return (
    <Box>
      <Box w='xs' h='xs' overflow='hidden'>
        <Image
          src={props.imgSrc}
          alt={props.imgAlt}
          objectFit='contain'
          w='full'
          maxH='md'
        />
      </Box>
      <Box h={1} w='full' bg='brand.500' mx='auto' shadow='dark-lg' />
      <Box px={8}>
        <Flex
          w='full'
          bg='headerText'
          p={3}
          justifyContent='center'
          gap={8}
          roundedBottom='xl'
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
      <Box rounded='xl' overflow='hidden'>
        <Text
          mt={2}
          color='headerText !important'
          textAlign='center'
          textTransform='uppercase'
          letterSpacing='wider'
          fontWeight='light'
        >
          {props.name}
        </Text>
      </Box>
    </Box>
  );
};

export default TeamCard;

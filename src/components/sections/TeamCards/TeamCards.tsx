import { Box, SimpleGrid } from '@chakra-ui/react';
import { TeamCard, TeamCardProps } from '../../cards/TeamCard';
import { Header } from '../../core/Header';

const Team: TeamCardProps[] = [
  {
    id: 0,
    imgSrc: '/agents/1.png',
    imgAlt: '',
    name: 'Calvin Lewis',
    links: {
      facebook: '',
      instagram: '',
      linkedin: '',
      email: '',
    },
  },
  {
    id: 0,
    imgSrc: '/agents/2.png',
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
    imgSrc: '/agents/3.png',
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
    imgSrc: '/agents/4.png',
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

const TeamCards = () => {
  return (
    <Box maxW='8xl' mx='auto' px={{ base: 4, xl: 0 }}>
      <Header
        center
        title='Our Agents'
        subtitle='Meet our professional, licensed team'
      />
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} mt={16} gap={16}>
        {Team.map((member) => (
          <TeamCard key={member.id} {...member} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TeamCards;

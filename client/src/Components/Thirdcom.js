import {
    Box,
    VStack,
    Button,
    Flex,
    Divider,
    chakra,
    Grid,
    GridItem,
    Container,
  } from '@chakra-ui/react';
  import {} from '@chakra-ui/react';
  
  interface FeatureProps {
    heading: string;
    text: string;
  }
  
  const Feature = ({ heading, text }: FeatureProps) => {
    return (
      <GridItem>
        <chakra.h3 fontSize="xl" fontWeight="600">
          {heading}
        </chakra.h3>
        <chakra.p>{text}</chakra.p>
      </GridItem>
    );
  };
  
  export default function gridListWithCTA() {
    return (
      <Box as={Container} maxW="7xl" mt={14} p={4} id='thirdcom'>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
                Vous rencontrez un probléme ?
              </chakra.h2>
              <Button colorScheme="green" size="md">
                Contactez Nous
              </Button>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum malesuada nisi. Donec eget aliquam neque. Vestibulum placerat facilisis massa, vitae egestas tortor dictum id. Ut elit ante, facilisis in quam lobortis, commodo convallis ex. Vestibulum mattis enim sed consectetur sodales.
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={{ base: '8', sm: '12', md: '16' }}>
          <Feature
            heading={'Prix du carburant'}
            text={'Short text describing one of you features/service'}
          />
          <Feature
            heading={'Mécaniciens'}
            text={'Short text describing one of you features/service'}
          />
          <Feature
            heading={'Acheter nos produits'}
            text={'Short text describing one of you features/service'}
          />
          <Feature
            heading={'Événements'}
            text={'Short text describing one of you features/service'}
          />
        </Grid>
      </Box>
    );
  }
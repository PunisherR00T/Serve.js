import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { Carousel } from 'react-bootstrap';
import HomeCards from './HomeCards';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} id='secondcom'>
        




<Carousel>

  <Carousel.Item>
    <HomeCards/>
  </Carousel.Item>

  <Carousel.Item>
    <HomeCards/>
  </Carousel.Item>

  <Carousel.Item>
    <HomeCards/>
  </Carousel.Item>

</Carousel>


<Carousel>

  <Carousel.Item>
    <HomeCards/>
  </Carousel.Item>

  <Carousel.Item>
    <HomeCards/>
  </Carousel.Item>
  
  <Carousel.Item>
    <HomeCards/>
  </Carousel.Item>

</Carousel>



<Carousel>

  <Carousel.Item>
    <HomeCards/>
  </Carousel.Item>

  <Carousel.Item>
    <HomeCards/>
  </Carousel.Item>

  <Carousel.Item>
    <HomeCards/>
  </Carousel.Item>

</Carousel>








      </SimpleGrid>
    </Box>
  );
}
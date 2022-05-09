import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    useToast,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  import Secondcom from './Secondcom'
  import Thirdcom from './Thirdcom'
  import '../App.css'
import { useNavigate } from 'react-router-dom';
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function  SplitWithImage() {
    const navigate = useNavigate()
    const handleregister = async() =>  {navigate('/Register')
  
  }
 
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} id='firstcom'>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}
              style={{cursor:"pointer"}}
              onClick={()=>{handleregister();}}>
              Créez un compte 
            </Text>
            <Heading>Vendez votre Véhicule rapidement </Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
             Avec Karhabtek.tn déposer votre annonce en toute simplicité !
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Une Plateforme accesible a Tous'}
              />
              <Feature
                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Vendez votre véhicule dés maintenant'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Rechercher un véhicule'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://img.myloview.com/stickers/happy-car-owner-is-showing-thumbs-up-and-his-new-car-key-700-98577085.jpg'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
        <Secondcom/>
        <Thirdcom/>
      </Container>
    );
  }
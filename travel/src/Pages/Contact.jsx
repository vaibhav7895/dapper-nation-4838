import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
    Center,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
    LinkBox,
    LinkOverlay
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  import Navbar from "../Components/Navbar"
  import Footer from "../Components/Footer"
  // Replace test data with your own
  const features = Array.apply(null, Array(8)).map(function (x, i) {
    return {
      id: i,
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    };
  });
  
  export default function Contact() {
    return (
   <>
   
    <Box w="95%" m="auto" bgColor="#1071DB"  p={4}>
      <Stack  spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading color="black" fontSize={'3xl'}>Support Mail Us</Heading><Box></Box>
        <Heading fontSize={{base:"md",md:"2xl"}} color='#FDD835'>Travels@gmail.com</Heading>
        <Text color={'#ffff'}  fontSize={{base:"md",md:"4xl"}}>Contact Us :
         1004-2550-8800 <Box></Box>
        </Text>
        
        
         <Text color={'#ffff'}  fontSize={{base:"md",md:"4xl"}}>
         9909-5565-6696 
        </Text>
        
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'#FDD835'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text color="black" fontWeight={600}>{feature.title}</Text>
                <Text color={'#ffff'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
      <Box p="5%" >

    </Box>
    </Box>
    <Box w="95%" m="auto">
      <Center bgColor="#ECEFF1" py={20}>
        <Box
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}>
            <Text
              fontSize={'sm'}
              fontWeight={500}
              bg={useColorModeValue('#1071DB', '#ffff')}
              p={2}
              px={3}
              color={'#fff'}
              rounded={'full'}>
              Travels Special🥳
            </Text>
            <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text fontSize={'3xl'}>Rs.</Text>
              <Text fontSize={'6xl'} fontWeight={800}>
                199
              </Text>
              <Text color={'gray.500'}>/month</Text>
            </Stack>
          </Stack>
  
          <Box bg={useColorModeValue('gray.50', '#1071DB')} px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="#1071DB" />
                Some fantastic offers just for you.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="#1071DB" />
                Extream Services Just For You.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="#1071DB" />
                Special Member Tag.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="#1071DB" />
                Unlock Your All features.
              </ListItem>
            </List>
  <LinkBox>
  <LinkOverlay href="#">
            <Button
              mt={10}
              w={'full'}
              bg={'#1071DB'}
              color={'white'}
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: '#1071DB',
              }}
              _focus={{
                bg: '#1071DB',
              }}>
              Start your trial
            </Button>
            </LinkOverlay>
            </LinkBox>
          </Box>
        </Box>
      </Center>
      </Box>
    
      </>
    );
  }
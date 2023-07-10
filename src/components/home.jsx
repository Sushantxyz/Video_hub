import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  Image,
  Box,
  Text,
  Container,
  Heading,
  Stack,
} from '@chakra-ui/react';
import img1 from '../assets/Beautiful Night 0.png';
import img2 from '../assets/javier-martinez-hUD0PUczwJQ-unsplash.jpg';
import img3 from '../assets/jonatan-pie-3l3RwQdHRHg-unsplash.jpg';

export const Home = () => {
  return (
    <>
      <MyCarousel />
      <Container minW={'80%'}>

        <Heading borderBottom={"2px solid"} my={4} color={"purple"} w={"fit-content"} m={" 5px auto"}>
          Services
        </Heading>

        <Stack direction={['column', 'row']} h={"full"} alignItems={"center"}>
          <Image src={img3} w={[40,400]} />
          <Text w={'100%'} textAlign={"center"} p={["4","16"]} letterSpacing={"widest"} lineHeight={"190%"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
            corrupti officiis enim totam eveniet a sunt. Dolorum voluptate omnis
            illum, magnam minima, dicta explicabo beatae optio itaque
            exercitationem, assumenda pariatur!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium optio repellat ducimus asperiores vel. Quis ab dolor eligendi maxime fugiat cum non cupiditate velit eos eius incidunt et corporis, esse unde recusandae in, rem harum distinctio beatae. Delectus atque illum eum itaque amet veritatis, quibusdam magnam nostrum expedita suscipit rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore voluptatibus soluta quo excepturi sint unde exercitationem molestias vel possimus ea repellat dignissimos, tenetur tempora laborum quia. Porro, quo iure incidunt provident ipsa qui quam placeat quas necessitatibus est cupiditate illo impedit? Ad itaque ipsam possimus ratione dignissimos vel non doloremque?
          </Text>
        </Stack>

      </Container>

      <Container></Container>
    </>
  );
};

const MyCarousel = () => (
  <Carousel
    infiniteLoop
    autoPlay
    interval={3000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Beautiful Night
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Gaming is love
      </Heading>
    </Box>
  </Carousel>
);

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

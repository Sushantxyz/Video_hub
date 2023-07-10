import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react';
import React from 'react';

export const Videos = () => {
  return (
    <Stack direction={['column', 'row']} h={"100vh"}>
      <VStack w={'full'}>
        <video controls src="" style={{
            width:"100%",
            height:"100%"
        }}></video>
        <VStack overflow={"scroll"}>
          <Heading>Sample</Heading>
          <Text >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            eius?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus similique esse sint praesentium ut explicabo adipisci? Ipsum  facere esse unde? Velit cumque quibusdam tempore in autem neque distinctio magni minus est ipsam at debitis sunt, quod vero animi ratione quaerat quia! Quos nulla ad ducimus unde tempore, recusandae debitis nesciunt maiores non inventore. Velit amet minus at.

          </Text>
        </VStack>
      </VStack>
        <VStack w={["full","xl"]} alignItems={"stretch"} p={8} spacing={8} overflow={"auto"}>
            <Button color={"purple"}>Lecture 1</Button>
            <Button color={"purple"}>Lecture 2</Button>
            <Button color={"purple"}>Lecture 3</Button>
            <Button color={"purple"}>Lecture 4</Button>
            <Button color={"purple"}>Lecture 5</Button>
            <Button color={"purple"}>Lecture 6</Button>
            <Button color={"purple"}>Lecture 7</Button>

            
        </VStack>
    </Stack>
  );
};

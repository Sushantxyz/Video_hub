
import { Container ,Box ,Stack, Heading,VStack, Button, HStack, Input,Text} from '@chakra-ui/react'
import React from 'react';

import {AiOutlineSend} from "react-icons/ai"

export const Footer = () => {
  return (
    <>
    <Box bgColor={"blackAlpha.900"} minH={40} p={16} color={"white"}>

        <Stack direction={["column","row"]}>

            <VStack alignItems={"Center"} w={"full"} >
                <Heading size={"md"} textAlign={"left"} justifyContent={"center"}>
                    Get Regular Updates
                </Heading>
            <HStack p={10}>
                <Input placeholder='Write to us' 
                border={"none"}
                borderRadius={"none"}
                outline={"none"}
                focusBorderColor='none'
                >
                
                </Input>
                <Button borderRadius={`0 20px 20px 0`}>
                    <AiOutlineSend/>
                </Button>
            </HStack>
            </VStack>
            <VStack w={"full"} borderLeft={"2px solid"} borderRight={"2px solid"} p={10}>
                <Heading>Video Hub</Heading>
                <Text>@All Rights Reserved</Text>
            </VStack>
            <VStack w={"full"} justifyContent={"center"} p={10}>
                <Heading>Follow us</Heading>
                <a href=''>Linkedin</a>
                <a href=''>Github</a>
                <a href=''>Youtube</a>
            </VStack>

        </Stack>


    </Box>
    </>
  )
}

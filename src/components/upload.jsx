import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineCloudUpload} from "react-icons/ai"

export const Upload = () => {
  return (
    <Container height={"100vh"} maxW={"xl"}>
        <VStack justifyContent={"center"} h={"full"}>
            <AiOutlineCloudUpload size={"10vmax"}/>
            <form action="/">
                <HStack>
                    <Input required 
                    type="file" 
                    css={{
                        "&:file-selector-button":{

                            border:"none",
                            width:"none",
                            height:"100%",
                            marginLeft:"-18px",
                            color:"purple",
                            backgroundColor:"white"
                        },
                        
                    }} 
                    />
                    <Button colorScheme='purple'>Submit</Button>
                </HStack>
            </form>
        </VStack>
    </Container>
  )
}

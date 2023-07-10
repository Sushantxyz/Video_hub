import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'


export const Register = () => {
  return (
    <Container maxWidth={"container.xl"} h="100vh" p={16}>
        <form action="/" >
            <VStack alignItems={"stretch"} spacing={8} w="96" m="auto" >
                <Heading>
                    Welcome
                </Heading>
                <Input placeholder='Username' type='text'>
                </Input>
                <Input placeholder='Email' type='email'>
                </Input>
                <Input placeholder='Password' type='password'>
                </Input>
                <Button type='submit' action="/login">
                    Register
                </Button>
            </VStack>
        </form>
    </Container>
  )
}

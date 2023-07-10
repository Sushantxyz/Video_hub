import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'


export const Login = () => {
  return (
    <Container maxWidth={"container.xl"} h="100vh" p={16}>
        <form action="/" >
            <VStack alignItems={"stretch"} spacing={8} w="96" m="auto" >
                <Heading>
                    Welcome back
                </Heading>
                <Input placeholder='Email' type='email'>
                </Input>
                <Input placeholder='Password' type='password'>
                </Input>
                <Button variant='link' alignSelf={"flex-end"}>
                    {/* <Link to="/forget-password">

                    Forget Password?
                    </Link> */}
                    fp?
                </Button>
                <Button type='submit' action="/">
                    Login
                </Button>
            </VStack>
        </form>
    </Container>
  )
}

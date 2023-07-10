import React from 'react'
import {Button,Drawer,DrawerOverlay,DrawerHeader,DrawerCloseButton,DrawerContent, useDisclosure, VStack, HStack} from "@chakra-ui/react"
import {BiMenuAltLeft} from "react-icons/bi"
import { Link } from 'react-router-dom';

export const Header = () => {

    const {isOpen,onOpen,onClose}=useDisclosure();

  return (
    <>
        <Button 
            pos={'fixed'}
            top={4}
            left={4}
            colorScheme='purple'
            p={0}
            w={10}
            h={10}
            borderRadius={'full'}
            onClick={onOpen}
            zIndex={20}
        >
            <BiMenuAltLeft size={"20"}/>
        </Button>

        <Drawer isOpen={isOpen} placement='left' onClose={onClose} zIndex={"10"} >
            <DrawerOverlay/>

            <DrawerContent bgColor={"purple.900"} w={["container.xl",'xl']}>

                <DrawerHeader>Video Nation</DrawerHeader>
                <DrawerCloseButton/>
                <VStack alignItems={"flex-start"} >

                    <Button onClick={onClose} colorScheme={"purple"} variant={"ghost"}>
                        <Link to={"/"}>Home</Link>
                    </Button>

                    <Button onClick={onClose}colorScheme={"purple"} variant={"ghost"}>
                        <Link to={"/videos?category=free"}>Videos</Link>
                    </Button>

                    <Button onClick={onClose}colorScheme={"purple"} variant={"ghost"}>
                        <Link to={"/videos?category=free"}>Free Videos</Link>
                    </Button>

                    <Button onClick={onClose}colorScheme={"purple"} variant={"ghost"}>
                        <Link to={"/upload"}>Upload Video</Link>
                    </Button>

                </VStack>

                <HStack position={"absolute"} bottom={"10"} left={"0"} w={"full"} justifyContent={"space-evenly"} >

                    <Button onClick={onClose}colorScheme={"purple"}>
                        <Link to={"/Login"}>Login</Link>
                    </Button>

                    <Button onClick={onClose}>
                        <Link to={"/register"}>SignUp</Link>
                    </Button>

                </HStack>

            </DrawerContent>

        </Drawer>
    </>
  )
}

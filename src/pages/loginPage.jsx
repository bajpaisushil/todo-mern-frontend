import { Box, Flex, VStack, Image } from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import React from 'react';
import loginImage from "../assets/loginImage.png";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/users/user.actions';
import { useNavigate } from 'react-router-dom';
import "./styles.css";

function LoginPage() {
    const {auth, token, loading, error}=useSelector((state)=> state.userReducer)
    const nav=useNavigate();
    console.log(auth, token);
    if(auth){
        nav("/notes");
    }
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const dispatch=useDispatch();

    function handleLogin(){
        dispatch(getUser({email, password}))
    }

  return (
    <Flex className='loginPage' padding={4} w={"100%"}>
        <Image className='loginPageImage' src={loginImage}></Image>
        <VStack className='loginPageDiv'>
        <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
              onClick={handleLogin}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
        </VStack>
    </Flex>
  )
}

export default LoginPage;

import { Button, Flex, Heading, Input } from '@chakra-ui/react';
import React, { useRef } from 'react';

export const Login = () => {

  const usernameInput = useRef()
  const passwordInput = useRef()

  const LoginHandler = () => {

    // These are the values from the form that you will need to send in your request.

    const username = usernameInput.current.value
    const password = passwordInput.current.value

    // TODO: Make HTTP request to login endpoint in backend.
    // TODO: Save response data to session storage.

  }

  return (
    <Flex direction={'column'} alignItems={'center'} gap={5} w={'50%'} mx={'auto'}>
      <Heading>Login</Heading>
      <Input ref={usernameInput} type="text" placeholder="Please enter your username" />
      <Input ref={passwordInput} type='password' placeholder="Please enter your password" />
      <Button onClick={LoginHandler}>Submit</Button>
    </Flex>
  );
};

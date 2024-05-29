import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { NavLink, useResolvedPath } from 'react-router-dom';

const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/login',
    name: 'Login',
  },
  {
    path: '/item-list',
    name: 'Item List',
  },
];

export const Navbar = () => {

  const {pathname} = useResolvedPath()

  return (
    <Flex w={'100%'} justifyContent={'center'} pb={15}>
      {routes.map(route => (
        <Button
          as={NavLink}
          colorScheme="blue"
          variant={(route.path === pathname ? 'solid' : 'outline')}
          m={5}
          px={10}
          key={route.name}
          to={route.path}
        >
          {route.name}
        </Button>
      ))}
    </Flex>
  );
};

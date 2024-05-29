import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  CardFooter,
  Button,
} from '@chakra-ui/react';
import React from 'react';

export const FoodItem = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">
          This should be the name of the food, passed via props
        </Heading>
      </CardHeader>

      <CardBody>
        This should be some details about the food, passed via props. The delete
        button below should also be hidden unless you are logged in as an admin
        user
      </CardBody>
      <CardFooter>
        <Button variant={'outline'} colorScheme="red">
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
} from '@chakra-ui/react';
import React from 'react';

export const NewFoodForm = ({ isOpen, onClose }) => {
  const SubmitFormHandler = () => {
    // TODO: Implement the logic to make an HTTP request to create a new item in the backend.
    // TODO: The data will need to be sent from the form that is created below.
    // TODO: You can use either useState or useRef hooks to get the data from the form into the request.
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Food</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Add the form elements here that you will use to send the request to
          the backend that allows you to create a new food item. Here is a
          placeholder input element to get you started :)
          <Input placeholder="Food name" />
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="gray"
            variant={'outline'}
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
          <Button variant="outline" colorScheme="green">
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

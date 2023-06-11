import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import "./style.css";
import { deleteNotes, updateNotes } from "../../../redux/notes/note.actions";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function NoteCard({ title, body, user, _id }) {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tempTitle, setTitle] = useState(title);
  const [tempBody, setBody] = useState(body);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const updateNote=()=>{
    dispatch(updateNotes(_id, {title: tempTitle, body: tempBody}))
    onClose();
  }

  return (
    <Card className="card">
      <CardBody className="noteCardBody">
        <VStack>
          <Heading>{title}</Heading>
          <Text>{body}</Text>

          <Flex gap={2}>
            <>
              <Button onClick={onOpen}>Update</Button>
              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Update Note</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <Input
                      value={tempTitle}
                      placeholder="Please Enter Title"
                      onChange={(e) => setTitle(e.target.value)}
                    ></Input>
                    <Textarea
                      mt={8}
                      value={tempBody}
                      placeholder="Please Enter Description"
                      onChange={(e) => setBody(e.target.value)}
                    ></Textarea>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={updateNote}>
                      Update
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
            <Button onClick={() => dispatch(deleteNotes(_id))}>Delete</Button>
          </Flex>
        </VStack>
      </CardBody>
    </Card>
  );
}

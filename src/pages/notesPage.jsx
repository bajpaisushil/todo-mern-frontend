import { Box, Grid, IconButton, useDisclosure, Button, Input, Textarea } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNotes, getNotes } from "../redux/notes/note.actions";
import NoteCard from "../components/notesPage/noteCard/noteCard";
import { BsPlusLg } from "react-icons/bs";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function NotesPage() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.noteReducer);
  console.log(data);
  const [notes, setNotes] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle]=useState("");
  const [body, setBody]=useState("");

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  useEffect(() => {
    dispatch(getNotes());
  }, []);
  
  function createNote(){
    dispatch(createNotes({title, body}));
    onClose();
  }

  useEffect(() => {
    setNotes(data);
  }, [data]);
  return (
    <Box mt={20} padding={8}>
      <Grid
        gap={10}
        w={"90%"}
        margin={"auto"}
        gridTemplateColumns={"repeat(4, 1fr)"}
      >
        {notes?.map((el) => (
          <NoteCard {...el} />
        ))}
      </Grid>
      <IconButton
        position={"fixed"}
        w={"80px"}
        h={"80px"}
        borderRadius={50}
        bg={"yellowgreen"}
        bottom={0}
        right={0}
        margin={16}
        onClick={onOpen}
        icon={<BsPlusLg />}
      ></IconButton>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create new Note</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <Input value={title} placeholder="Please Enter Title" onChange={(e)=> setTitle(e.target.value)}></Input>
                <Textarea mt={8} value={body} placeholder="Please Enter Description" onChange={(e)=> setBody(e.target.value)}></Textarea>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={createNote}>
                Create
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </Box>
  );
}

export default NotesPage;

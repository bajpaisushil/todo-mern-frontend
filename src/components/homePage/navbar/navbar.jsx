import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../../redux/users/user.type';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {auth, token, loading, error}=useSelector((state)=> state.userReducer)
  const dispatch=useDispatch();
  const nav=useNavigate();
  console.log(auth);
  return (
    <>
      <Box zIndex={1000} position={"fixed"} top={0} w={"100%"} bg={"yellowgreen"} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box  onClick={()=> nav("/")} cursor={"pointer"} fontWeight={'bold'} color={'white'}>Todo App</Box>

          <Flex alignItems={'center'}>
            <Stack alignItems={"center"} direction={'row'} spacing={7}>
            <Button display={auth? "block": "none"} onClick={()=>{nav("/notes")}}>All Notes</Button>
              <Button display={auth? "none": "block"} onClick={()=>{nav("/login")}}>Login</Button>
              <Button display={auth? "none": "block"} onClick={()=>{nav("/register")}}>Signup</Button>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem bg={"red.500"} onClick={()=>{
                    dispatch({type: LOGOUT})
                  }}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

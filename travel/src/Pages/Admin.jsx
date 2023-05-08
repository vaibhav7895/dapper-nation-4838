import { ReactNode, useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
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
  Text,
  Table,
  TableContainer,
  TableCaption,
  Tr,
  Tbody,
  Td,
  Tfoot,
  Thead,
  Th,
  Image,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import SimpleSidebar from '../Components/Sidebar';
import axios from "axios"
const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fulldata,setfulldata]=useState([])
  const getdata=()=>{
  axios.get(`http://localhost:8080/Destinations`).then((res)=>{
      setfulldata(res.data)
    })
   
  }
  useEffect(()=>{
          getdata()
  },[])
  
  const handledelete=(id)=>{
    axios.delete(`http://localhost:8080/Destinations/${id}`).then((res)=>{
      const newdata=fulldata.filter((item,index)=>{
        if(id!=item.id){
          return item
        }
      })
      setfulldata(newdata)
    })
  }
  return (
    <>
      <Box style={{ display: "flex" }}>
        <Box style={{ width: "20%" }}>
          < SimpleSidebar />
        </Box>
        <Box style={{ width: "80%" }}>
          <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
              {/* <Box>ADMIN PAGE</Box> */}
              <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                ADMIN PAGE
              </Text>
              <Flex alignItems={'center'}>
                <Stack direction={'row'} spacing={7}>
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
                      <Center>
                        <p>Username</p>
                      </Center>
                      <br />
                      <MenuDivider />
                      <MenuItem>Your Servers</MenuItem>
                      <MenuItem>Account Settings</MenuItem>
                      <MenuItem>Logout</MenuItem>
                    </MenuList>

                  </Menu>

                </Stack>

              </Flex>
            </Flex>

          </Box>
         
          <TableContainer>
            <Table variant='striped' colorScheme='teal'>
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>S/N</Th>
                  
                  <Th >City</Th>
                  <Th>Country</Th>
                  <Th>Duration</Th>
                  <Th isNumeric>Price</Th>
                  <Th>Ratings</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr> */}
               {
                fulldata.length>0 && fulldata.map((item,index)=>{
                  return  <Tr key={item.id}>
                  <Td>{item.id}</Td>
                
                  {/* <Td>{item.image}</Td> */}
                  <Td >{item.City}</Td>
                  <Td>{item.Country}</Td>
                  <Td>{item.Duration}</Td>
                  <Td isNumeric>{item.Price}</Td>
                  <Td>{item.Ratings}</Td>
                  <Td><Button onClick={()=>handledelete(item.id)}>Delete</Button></Td>
                </Tr>
                })
               }
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
      </Box>

    </>
  );
}

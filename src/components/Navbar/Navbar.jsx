import {
    Box,
    Flex,
    Avatar,
    //Text,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    //useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
  } from '@chakra-ui/react'
  import { MoonIcon, SunIcon } from '@chakra-ui/icons'

  import CartWidget from '../CartWidget/CartWidget'

const Navbar = (categoria1, categoria2, categoria3 ) => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>ShopShop</Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              
              <CartWidget/>

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
                    src={'https://api.dicebear.com/9.x/pixel-art/svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://api.dicebear.com/9.x/pixel-art/svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Usuario</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Tus compras</MenuItem>
                  <MenuItem>Configuracion</MenuItem>
                  <MenuItem>Cerrar sesion</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
    )
};

export default Navbar;
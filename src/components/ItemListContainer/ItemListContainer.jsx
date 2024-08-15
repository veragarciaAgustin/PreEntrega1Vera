import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Link,
  Flex,
} from "@chakra-ui/react";


const ItemListContainer = ({ greeting, categoria1, categoria2, categoria3 }) => {
  return (
    <>
      <Flex direction="column" align="center" justifyContent="center">
        <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            ShopShop <br />
            <Text as={'span'} color={'green.400'}>
            {/* Greeting desde App */}
              {greeting}
            </Text>
          </Heading>
        </Stack>
        </Container>

        <Container>
        <Stack as={Box}
        textAlign={'center'}
        py={{ base: 20, md: 36 }}
        spacing={6}
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}
        >
          <Link to={categoria1}>
            {categoria1}
          </Link>
          <Link to={categoria2}>
            {categoria2}
          </Link>
          <Link to={categoria3}>
            {categoria3}
          </Link>
        </Stack>
      </Container>
      </Flex>
    </>
  );
};
export default ItemListContainer;

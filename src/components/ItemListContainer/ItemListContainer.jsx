import {
  Flex,
  Box,
  Image,
  Button,
  ButtonGroup,
  CardFooter,
  Divider,
  Stack,
  Heading,
  Text,
  Card,
  CardBody,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

export const ItemListContainer = ({ products }) => {
  return (
    <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
      {products.map((product) => (
        <Card key={product.id} maxW='sm' margin={"1rem"}>
          <CardBody>
            <Image src={product.thumbnail} alt={product.title} borderRadius='lg' />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{product.title}</Heading>
              <Text>{product.description}</Text>
              <Text color='blue.600' fontSize='2xl'>
                ${product.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              {/* <Button variant='ghost' colorScheme='blue'>
                Add to cart
              </Button> */}
              <Link to={`/item/${product.id}`}>Ir a detalle</Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Box>
  )

};

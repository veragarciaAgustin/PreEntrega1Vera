import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Flex,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";



export const Category = ({ categoria1, categoria2, categoria3, categoria4 }) => {
  const capitalizeFirstLetter = (str) => {
    if (typeof str !== 'string' || str.length === 0) {
        return str;
    }
    
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return (
    <>
      <Flex direction="column" align="center" justifyContent="center">
          <Stack
            direction={{ base: "column", sm: "row" }}
            as={Text}
            textAlign={"left"}
            spacing={20}
            margin={'5vh'}
            fontSize={{ base: "3vh", sm: "3vh", md: "3vh" }}
            lineHeight={"100%"}
          >
            <Link to={`/category/${categoria1}`}>{capitalizeFirstLetter(categoria1)}</Link>
            <Link to={`/category/${categoria2}`}>{capitalizeFirstLetter(categoria2)}</Link>
            <Link to={`/category/${categoria3}`}>{capitalizeFirstLetter(categoria3)}</Link>
            <Link to={`/category/${categoria4}`}>{capitalizeFirstLetter(categoria4)}</Link>
          </Stack>
      </Flex>
    </>
  );
};
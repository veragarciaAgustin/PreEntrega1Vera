import { ItemListContainer } from "../components";
import { useProductsByCategory } from "../hooks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Flex, Spinner } from "@chakra-ui/react";
export const Category = () => {
    const { category } = useParams();
    const { productsData, loading } = useProductsByCategory(category);

    useEffect(() => {
      // Acción a realizar cuando category cambie
      // Por ejemplo, puedes registrar en la consola o realizar alguna otra acción
      console.log("Category changed to:", category);
  }, [category]);


    return loading ? (
        <Flex
          width={"100vw"}
          height={"100vh"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Spinner size={"xl"} />
        </Flex>
      ) : (
        <ItemListContainer products={productsData} />
      )
}



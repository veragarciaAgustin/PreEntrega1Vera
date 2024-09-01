// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from "react";
import MainLayout from "./layout/MainLayout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import { ChakraProvider, Flex, Spinner } from "@chakra-ui/react";
import CartWidget from "./components/CartWidget/CartWidget";
import Category from "./components/Category/Category";
import { getAllProducts } from "./services/products";

function App() {
  const [contador, setContador] = useState(0);

  //UseState que almacena el array de productos que traemos
  const [productsData, setProductsData] = useState([]);

  //UseState para el estado loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        if (res.status === 200) {
          //Actualizamos ese estado con la informacion de la API
          setProductsData(res.data.products);
        } else {
          console.log("Error");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        //Quiero que cuando finalice mi promesa, la aplicacion deje de mostrar el icono de cargar
        setLoading(false);
      });
  }, []);

  return (
    <ChakraProvider>
      <MainLayout>
        <ItemCount
          initial={1}
          onAdd={(cantidad) => setContador(contador + cantidad)}
        />
        <CartWidget num={contador} />
        <Category
          title="ShopShop"
          greeting="La tienda de la gente"
          categoria1="Tecnologia"
          categoria2="Deportes"
          categoria3="Musica"
        />
        {/* Listado de items si no estamos cargando, si esta cargando se muestra spinner */}

        {loading ? (
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
        )}
      </MainLayout>
    </ChakraProvider>
  );
}

export default App;

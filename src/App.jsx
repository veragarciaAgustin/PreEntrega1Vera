//import { useEffect, useState } from "react";
import MainLayout from "./layout/MainLayout";
import { ChakraProvider} from "@chakra-ui/react";
import { MainRouter } from "./routes/MainRouter";


function App() {

  return (
    <ChakraProvider>
      <MainLayout>
        {/* Creando la navegacion */}
        <MainRouter />
      </MainLayout>
    </ChakraProvider>
  );
}

export default App;

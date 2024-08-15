// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Product from './components/Product/Product'

import { ChakraProvider} from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Navbar/>
        <ItemListContainer greeting="La tienda de la gente"
        categoria1="Tecnologia"
        categoria2="Deportes"
        categoria3="Musica"/>
      <Product />
    </ChakraProvider>
  )
}

export default App

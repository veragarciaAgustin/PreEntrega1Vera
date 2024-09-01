//AXIOS
import axios from "axios";


export async function getAllProducts(){
    
    //Ejemplo con AXIOS
    return await axios.get('https://dummyjson.com/products')

    /*
    Ejemplo con FETCH
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(console.log); */
}



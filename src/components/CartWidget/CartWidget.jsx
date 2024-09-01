import {
    Image,
    HStack,
    Button,
    Badge
    
} from '@chakra-ui/react'


const CartWidget = ({num}) => {
    return (

        <HStack>
        <Button>
            <Badge mr={2} fontSize="md" colorScheme="green">
            {num}</Badge>
            <Image src='shopping-cart-line.svg' width={30}/>
        </Button>
        </HStack>
        
    );
}

export default CartWidget
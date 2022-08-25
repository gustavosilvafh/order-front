import {Sidebar} from "../components/sidebar/sidebar";
import {Box, Icon, Image, Text} from "@chakra-ui/react";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {useCallback, useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Product} from "../../../models";

export const Products = () => {
    const [products, setProducts] = useState([]);

    const initialLoad = useCallback(async () => {
        const data = await DataStore.query(Product);
        setProducts(data);
        console.log(data)

    }, [])

    useEffect(() => {
        initialLoad()
    }, [initialLoad])

    return (
        <Box display={'flex'}>
            <Sidebar />
            <Box p={4} mb={2} w={'100%'} display={'flex'} flexDirection={'column'} gap={4}>
                <Box>
                    <Text fontSize={25} mb={2}>Produtos</Text>
                </Box>
                {products.map(product => {
                    return (
                        <Box shadow={'base'} p={4} borderRadius={10} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                            <Box display={'flex'} gap={4} w={'100%'} key={product.id}>
                                <Image
                                    src={product.image}
                                    w={20}
                                    borderRadius={10}
                                    shadow={'base'}
                                />
                                <Box display={'flex'} flexDirection={'column'} >
                                    <Text>{product.name} </Text>
                                    <Text display={'flex'} gap={1}>Valor: <Text color={'green.500'} fontWeight={700}>{new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                        minimumFractionDigits: 2
                                    }).format(product.value)}</Text></Text>
                                </Box>
                            </Box>
                            <Icon as={AiOutlineCloseCircle} color={'red'} fontSize={20} onClick={() => {}} _hover={{
                                cursor: 'pointer'
                            }} />
                        </Box>
                    )
                })}

            </Box>


        </Box>
    )

}
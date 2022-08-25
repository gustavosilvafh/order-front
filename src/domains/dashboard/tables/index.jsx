import {Sidebar} from "../components/sidebar/sidebar";
import {Box, Icon, Text} from "@chakra-ui/react";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {useCallback, useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Table} from "../../../models";
import {toast} from "react-toastify";

export const Tables = () => {
    const [tables, setTables] = useState([])

    const initialLoad = useCallback(async() => {
        const data = await DataStore.query(Table)
        setTables(data)
    }, [])

    useEffect(() => {
        initialLoad()
    }, [initialLoad])

    const handleDelete = async (id) => {
        const table = await DataStore.query(Table, id);
        DataStore.delete(table).then(() => {
            toast.success('Mesa deletada com sucesso');
            initialLoad()
        }).catch(() => {
            toast.error('Erro ao deletar mesa');
        })
    }


    return (
        <Box display={'flex'}>
            <Sidebar />
            <Box p={4} w={'100%'} gap={2} display={'flex'} flexDirection={'column'}>
                <Text fontSize={25} mb={2}>Mesas</Text>
                {tables.map(table => {
                    console.log(table)
                    return <Box
                        key={table.id}
                        w={'100%'}
                        shadow={'base'}
                        p={4}
                        borderRadius={10}
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >
                        <Text>{table.name}</Text>
                        <Box>
                            <Icon as={AiOutlineCloseCircle} color={'red'} fontSize={20} onClick={() => {handleDelete(table.id)}} _hover={{
                                cursor: 'pointer'
                            }} />
                        </Box>
                    </Box>
                })}

            </Box>
        </Box>
    )
}
import {Box, Icon, Text, theme} from "@chakra-ui/react";
import {Link, useLocation} from "react-router-dom";
import {
    AiOutlineAppstore,
    AiOutlineAppstoreAdd,
    AiOutlineBorderlessTable,
    AiOutlineHome, AiOutlineLogout,
    AiOutlineTable
} from "react-icons/ai";
import {Auth} from "aws-amplify";

export const Sidebar = () => {
    const routes = [
        {
            link: '/',
            icon: AiOutlineHome,
            name: 'Dashboard'
        },
        {
            link: '/create-product',
            icon: AiOutlineAppstoreAdd,
            name: 'Criar produto'
        },
        {
            link: '/create-table',
            icon: AiOutlineBorderlessTable,
            name: 'Criar Mesa'
        },
        {
            link: '/tables',
            icon: AiOutlineTable,
            name: 'Mesas'
        },
        {
            link: '/products',
            icon: AiOutlineAppstore,
            name: 'Produtos'
        },
    ]
    const { pathname } = useLocation()

    return (
        <Box w={250} py={2} px={1} shadow={"base"} h={'100vh'} minW={250}>
            <Box display={'flex'} textTransform={'uppercase'} fontSize={25} w={'100%'} justifyContent={'center'} alignItems={'center'}>
                <Text>Gustavo Silva</Text><Text color={'green.500'} fontWeight={900}>FH</Text>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} flexDirection={'column'} h={'95%'}>
                <Box >
                    {routes.map(el => (
                        <Link to={el.link} key={el.link}>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                gap={2} w={'100%'}
                                justifyContent={'center'}
                                _hover={{
                                    bg: 'green.50'
                                }}
                                p={2}
                                borderRadius={4}
                                {...(pathname === el.link) ? {
                                    bg: 'green.100',
                                } : {}}
                            >
                                <Icon as={el.icon}  fontSize={16}/>
                                {el.name}
                            </Box>
                        </Link>
                    ))}
                </Box>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    gap={2} w={'100%'}
                    justifyContent={'center'}
                    _hover={{
                        bg: 'green.50'
                    }}
                    p={2}
                    borderRadius={4}
                    cursor={'pointer'}
                    onClick={async () => {
                        await Auth.signOut()
                    }}

                >
                    <Icon as={AiOutlineLogout}  fontSize={16}/>
                    Sair
                </Box>
            </Box>

        </Box>
    )
}
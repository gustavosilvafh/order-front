import {Sidebar} from "./components/sidebar/sidebar";
import {Box} from "@chakra-ui/react";

export const Dashboard = () => {
    return (
        <Box display={'flex'}>
            <Sidebar />
            dashboard
        </Box>
    )
}
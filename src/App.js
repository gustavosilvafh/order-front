import {RoutesWrapper} from "./routes/routes";
import { ChakraProvider } from '@chakra-ui/react'
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <ChakraProvider>
        <RoutesWrapper />
        <ToastContainer />
      </ChakraProvider>
  );
}

export default withAuthenticator(App);

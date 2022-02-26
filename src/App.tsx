import React from 'react';
import {ChakraProvider} from '@chakra-ui/react'
import './App.css';
import theme from "./theme";
import Header from "./components/header";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <div className="App">
                <Header/>
            </div>
        </ChakraProvider>
    );
}

export default App;

import React, {useEffect} from 'react';
import {Box, ChakraProvider, Grid, GridItem} from '@chakra-ui/react'
import './App.css';
import theme from "./theme";
import Header from "./components/Header";
import LetterBox from "./components/LetterBox";
import useKeyBoardEvent from "./hooks/useKeyBoardEvent";

function App() {
    useKeyBoardEvent(key => {
        console.log(key.key);
    })

    return (
        <ChakraProvider theme={theme}>
                <Header/>
                <Box
                    display='flex'
                    flexDirection='column'
                    maxW='500px'
                    height='calc(100% - 50px)'
                    margin='0 auto'
                >
                    <Box
                        display='flex'
                        flexGrow='1'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Grid templateRows='repeat(6, 1fr)' gap='5px' w="350px" p='10px'>
                            <Box>
                            <Grid templateColumns='repeat(5, 1fr)' gap='5px'>
                                <GridItem w='100%'>
                                    <LetterBox/>
                                </GridItem>
                                <GridItem w='100%'>
                                    <LetterBox/>
                                </GridItem>
                                <GridItem w='100%'>
                                    <LetterBox/>
                                </GridItem>
                                <GridItem w='100%'>
                                    <LetterBox/>
                                </GridItem>
                                <GridItem w='100%'>
                                    <LetterBox/>
                                </GridItem>
                            </Grid>
                            </Box>
                        </Grid>
                    </Box>
                </Box>
        </ChakraProvider>
    );
}

export default App;

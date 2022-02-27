import React, {useEffect, useState} from 'react';
import {Box, ChakraProvider, Grid, GridItem} from '@chakra-ui/react'
import './App.css';
import theme from "./theme";
import Header from "./components/Header";
import LetterBox from "./components/LetterBox";

function App() {

    const [word, setWord] = useState('');
    useEffect(() => {
        const func = (ev: KeyboardEvent) => {
            if (ev.key.length === 1 && ev.key.match(/[a-z]/i)){
                setWord(prevStata => prevStata.length < 5 ? prevStata + ev.key : prevStata)
            }
            else if (ev.key === 'Backspace'){
                setWord(prev => prev.slice(0, -1))
            }
        }

        window.addEventListener("keyup", func, false);
        return () => {
            window.addEventListener("keyup", func, false);
        };
    }, [setWord])

    console.log(word)

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
                                <GridItem w='3.5rem' h='3.5rem'>
                                    <LetterBox letter={word.slice(0,1)}/>
                                </GridItem>
                                <GridItem w='3.5rem' h='3.5rem'>
                                    <LetterBox letter={word.slice(1,2)}/>
                                </GridItem>
                                <GridItem w='3.5rem' h='3.5rem'>
                                    <LetterBox letter={word.slice(2,3)}/>
                                </GridItem>
                                <GridItem w='3.5rem' h='3.5rem'>
                                    <LetterBox letter={word.slice(3,4)}/>
                                </GridItem>
                                <GridItem w='3.5rem' h='3.5rem'>
                                    <LetterBox letter={word.slice(4,5)}/>
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

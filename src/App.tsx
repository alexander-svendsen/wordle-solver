import React, {useEffect, useState} from 'react';
import {Box, ChakraProvider, Grid, GridItem} from '@chakra-ui/react'
import './App.css';
import theme from "./theme";
import Header from "./components/header/Header";
import LetterBox from "./components/letter-stuff/LetterBox";
import LetterRow from "./components/letter-stuff/LetterRow";
import GameArea from "./components/wrapper/GameArea";
import Board from "./components/wrapper/Board";
import BoardWrapper from "./components/wrapper/BoardWrapper";

function App() {
    const [word, setWord] = useState('');

    useEffect(() => {
        const func = (ev: KeyboardEvent) => {
            if (ev.key.length === 1 && ev.key.match(/[a-z]/i)) {
                setWord(prevStata => prevStata.length < 5 ? prevStata + ev.key : prevStata)
            } else if (ev.key === 'Backspace') {
                setWord(prev => prev.slice(0, -1))
            }
        }

        window.addEventListener("keyup", func, false);
        return () => {
            window.addEventListener("keyup", func, false);
        };
    }, [setWord])

    return (
        <ChakraProvider theme={theme}>
            <Header/>
            <GameArea>
                <BoardWrapper>
                    <Board>
                            <LetterRow>
                                <LetterBox letter={word.slice(0, 1)}/>
                                <LetterBox letter={word.slice(1, 2)}/>
                                <LetterBox letter={word.slice(2, 3)}/>
                                <LetterBox letter={word.slice(3, 4)}/>
                                <LetterBox letter={word.slice(4, 5)}/>
                            </LetterRow>
                    </Board>
                </BoardWrapper>
            </GameArea>
        </ChakraProvider>
    );
}

export default App;

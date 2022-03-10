import React, {useEffect, useState} from 'react';
import {ChakraProvider} from '@chakra-ui/react'
import './App.css';
import theme from "./theme";
import Header from "./components/header/Header";
import LetterBox from "./components/letter-stuff/LetterBox";
import LetterRow from "./components/letter-stuff/LetterRow";
import GameArea from "./components/wrapper/GameArea";
import Board from "./components/wrapper/Board";
import BoardWrapper from "./components/wrapper/BoardWrapper";
import {charAt, replaceAt} from "./utils";
import {LetterState} from "./types/LetterTyps";
import {stuff} from "./solver";

function decideLetterState(mode: string): LetterState {
    switch (mode) {
        case 'u':
            return 'm'
        case 'm':
            return 'k'
        case 'k':
            return 'u'
    }

    return 'u'
}

function App() {
    console.log(stuff("tales", "ukmmm"))

    const [word, setWord] = useState('');
    const [wordState, setWordState] = useState('');

    useEffect(() => {
        const func = (ev: KeyboardEvent) => {
            if (ev.key.length === 1 && ev.key.match(/[a-z]/i)) {
                setWord(prevStata => prevStata.length < 5 ? prevStata + ev.key : prevStata)
                setWordState( prevStata => prevStata.length < 5 ? prevStata + 'u' : prevStata)
            } else if (ev.key === 'Backspace') {
                setWord(prev => prev.slice(0, -1))
                setWordState(prev => prev.slice(0, -1))
            } else if (ev.key === 'Enter') {
                console.log("solve it")
            }
        }

        window.addEventListener("keyup", func, false);
        return () => {
            window.addEventListener("keyup", func, false);
        };
    }, [setWord, setWordState])

    return (
        <ChakraProvider theme={theme}>
            <Header/>
            <GameArea>
                <BoardWrapper>
                    <Board>
                            <LetterRow>
                                <LetterBox letter={charAt(word, 0)}
                                           letterState={charAt(wordState, 0)}
                                           onClick={() => {
                                               const state = charAt(wordState, 0)
                                               const newState = decideLetterState(state)
                                               setWordState(replaceAt(wordState, 0, newState))
                                           }}
                                />
                                <LetterBox letter={charAt(word, 1)}
                                           letterState={charAt(wordState, 1)}
                                           onClick={() => {
                                               const state = charAt(wordState, 1)
                                               const newState = decideLetterState(state)
                                               setWordState(replaceAt(wordState, 1, newState))
                                           }}
                                />
                                <LetterBox letter={charAt(word, 2)}
                                           letterState={charAt(wordState, 2)}
                                           onClick={() => {
                                               const state = charAt(wordState, 2)
                                               const newState = decideLetterState(state)
                                               setWordState(replaceAt(wordState, 2, newState))
                                           }}
                                />
                                <LetterBox letter={charAt(word, 3)}
                                           letterState={charAt(wordState, 3)}
                                           onClick={() => {
                                               const state = charAt(wordState, 2)
                                               const newState = decideLetterState(state)
                                               setWordState(replaceAt(wordState, 3, newState))
                                           }}
                                />
                                <LetterBox letter={charAt(word, 4)}
                                           letterState={charAt(wordState, 4)}
                                           onClick={() => {
                                               const state = charAt(wordState, 4)
                                               const newState = decideLetterState(state)
                                               setWordState(replaceAt(wordState, 4, newState))
                                           }}/>
                            </LetterRow>
                    </Board>
                </BoardWrapper>
            </GameArea>
        </ChakraProvider>
    );
}

export default App;

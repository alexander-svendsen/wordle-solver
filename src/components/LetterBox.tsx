import {Box, useColorModeValue} from "@chakra-ui/react"
import {useState} from "react";

type MODE = 'unknown' | 'misplaced' | 'known'

function decideMode(mode: MODE): MODE {
    switch (mode){
        case 'unknown': return 'misplaced'
        case 'misplaced': return 'known'
        case 'known': return 'unknown'
    }

    return 'unknown'
}

const bColorDark: { [key: string]: string } = {
    'unknown': '--chakra-colors-gray-100',
    'misplaced': '#b59f3b',
    'known': '#538d4e'
}

const bColorLight: { [key: string]: string } = {
    'unknown': '--chakra-colors-gray-100',
    'misplaced': '#c9b458',
    'known': '#6aaa64',
}

interface Props {
    letter?: string
}

function LetterBox(props: Props) {
    const [mode, setMode] = useState<MODE>('unknown')
    const colorPicker = useColorModeValue(bColorLight, bColorDark)
    const { letter } = props;

    return (
        <Box bg={colorPicker[mode]}
             color='--chakra-colors-gray-100'
             borderColor='--chakra-colors-gray-100'
             border='2px solid'
             fontSize='2rem'
             display='inline-flex'
             alignItems='center'
             fontWeight='bold'
             textTransform='uppercase'
             lineHeight='2rem'
             w='3.5rem'
             h='3.5rem'
             justifyContent='center'
             onKeyDown={() => console.log("haha")}
             cursor='pointer'
             userSelect='none'
             onClick={() => {!!letter && setMode(decideMode(mode))}}>
            {letter}
        </Box>
    )
}

export default LetterBox
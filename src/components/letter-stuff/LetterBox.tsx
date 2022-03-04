import {Box, GridItem, keyframes, ScaleFade, useColorModeValue} from "@chakra-ui/react"
import React from "react";

const bColorDark: { [key: string]: string } = {
    'u': '--chakra-colors-gray-100',
    'm': '#b59f3b',
    'k': '#538d4e'
}

const bColorLight: { [key: string]: string } = {
    'u': '--chakra-colors-gray-100',
    'm': '#c9b458',
    'k': '#6aaa64',
}

interface Props {
    letter?: string
    letterState?: string
    onClick: () => void
}

const stretch = keyframes`
  from {transform: scale(1);}
  to {transform: scale(1.1);}
`;

function LetterBox(props: Props) {
    const colorPicker = useColorModeValue(bColorLight, bColorDark)

    const {letter, letterState, onClick} = props;

    const stretchAnimation = !!letter ? `${stretch} 1 0.05s normal`: '';

    return (
        <GridItem w='3.5rem' h='3.5rem'>
            <Box bg={colorPicker[!!letterState ? letterState : 'u']}
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
                 cursor='pointer'
                 userSelect='none'
                 animation={stretchAnimation}
                 onClick={onClick}>
                {letter}
            </Box>
        </GridItem>
    )
}

export default LetterBox
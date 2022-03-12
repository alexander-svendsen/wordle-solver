import {Box, GridItem, keyframes} from "@chakra-ui/react"
import React from "react";

interface Props {
    children: React.ReactNode
}

const stretch = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

function LetterShowBox(props: Props) {
    const stretchAnimation = `${stretch} 1 0.5s normal`;

    return (
        <GridItem w='3.5rem' h='3.5rem'>
            <Box fontSize='2rem'
                 display='inline-flex'
                 alignItems='center'
                 fontWeight='bold'
                 textTransform='uppercase'
                 lineHeight='2rem'
                 w='3.5rem'
                 h='3.5rem'
                 animation={stretchAnimation}
                 justifyContent='center'>
                {props.children}
            </Box>
        </GridItem>
    )
}

export default LetterShowBox
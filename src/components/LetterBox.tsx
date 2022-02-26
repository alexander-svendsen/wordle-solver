import {Box } from "@chakra-ui/react"

function LetterBox() {
    return (
        <Box bg='white'
             color='black'
             border='2px solid black'
             w='100%'
             fontSize='2rem'
             display='inline-flex'
             alignItems='center'
             fontWeight='bold'
             textTransform='uppercase'
             justifyContent='center'>
            T
        </Box>
    )
}

export default LetterBox
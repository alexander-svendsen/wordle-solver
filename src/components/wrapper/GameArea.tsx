import React from "react";
import {Box} from "@chakra-ui/react";

interface Props {
    children?: React.ReactNode;
}

function GameArea(props: Props) {
    return (
        <Box
            display='flex'
            flexDirection='column'
            maxW='500px'
            height='calc(100% - 50px)'
            margin='0 auto'
        >
            {props.children}
        </Box>
    )
}

export default GameArea
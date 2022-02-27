import React from "react";
import {Box} from "@chakra-ui/react";

interface Props {
    children?: React.ReactNode;
}

function BoardWrapper(props: Props) {
    return (
        <Box
            display='flex'
            flexGrow='1'
            alignItems='center'
            justifyContent='center'
        >
            {props.children}
        </Box>
    )
}

export default BoardWrapper
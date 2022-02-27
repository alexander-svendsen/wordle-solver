import React from "react";
import {Grid} from "@chakra-ui/react";

interface Props {
    children?: React.ReactNode;
}

function Board(props: Props) {
    return (
        <Grid templateRows='repeat(6, 1fr)' gap='5px' w="350px" p='10px'>
            {props.children}
        </Grid>
    )
}

export default Board
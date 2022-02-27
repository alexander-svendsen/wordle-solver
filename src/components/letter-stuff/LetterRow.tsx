import React from "react";
import {Grid} from "@chakra-ui/react";

interface Props {
    children?: React.ReactNode;
}

function LetterRow(props: Props) {
    return (
        <Grid templateColumns='repeat(5, 1fr)' gap='5px'>
            {props.children}
        </Grid>
    )
}

export default LetterRow
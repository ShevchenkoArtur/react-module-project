import React from 'react';
import AccordionSearch from "./AccordionSearch/AccordionSearch";
import AccordionGenres from "./AccordionGenres/AccordionGenres";
import {Button} from '@mui/material';

const AccordionBar = () => {
    return (
        <>
            <AccordionSearch/>
            <AccordionGenres/>
        </>
    )
}

export default AccordionBar;
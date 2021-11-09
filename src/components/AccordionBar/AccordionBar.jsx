import React from 'react';
import AccordionSearch from "./AccordionSearch/AccordionSearch";
import AccordionGenres from "./AccordionGenres/AccordionGenres";
import AccordionSort from './AccordionSort/AccordionSort';
import AccordionFilters from './AccordionFilters/AccordionFilters';

const AccordionBar = () => {
    return (
        <>
            <AccordionSort/>
            <AccordionSearch/>
            <AccordionGenres/>
            <AccordionFilters/>
        </>
    )
}

export default AccordionBar;
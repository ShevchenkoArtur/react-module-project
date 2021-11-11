import React from 'react';
import AccordionSearch from "./AccordionSearch/AccordionSearch";
import AccordionFilters from "./AccordionFilters/AccordionFilters";
import AccordionSort from './AccordionSort/AccordionSort';

const AccordionBar = () => {
    return (
        <>
            <AccordionSearch/>
            <AccordionSort/>
            <AccordionFilters/>
        </>
    )
}

export default AccordionBar;
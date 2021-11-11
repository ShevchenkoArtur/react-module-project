import React from 'react';
import SimpleAccordion from "../../UI/SimpleAccordion/SimpleAccordion";
import GenreChips from './GenreChips/GenreChips';
import LanguagesSelect from './LanguagesSelect/LanguagesSelect';
import ReleaseDateSelects from './ReleaseDateSelects/ReleaseDateSelects';
import FindButton from './FindButton/FindButton';

const AccordionFilters = () => {
    return (
        <>
            <SimpleAccordion title='Filters'>
                <GenreChips/>
                <LanguagesSelect/>
                <ReleaseDateSelects/>
                <FindButton/>
            </SimpleAccordion>
        </>
    )
}

export default AccordionFilters;
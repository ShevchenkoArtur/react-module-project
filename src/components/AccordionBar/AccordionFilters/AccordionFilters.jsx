import React from 'react';
import SimpleAccordion from "../../UI/SimpleAccordion/SimpleAccordion";
import GenreChips from './GenreChips/GenreChips';
import LanguagesSelect from './LanguagesSelect/LanguagesSelect';
import ReleaseDateSelects from './ReleaseDateSelects/ReleaseDateSelects';
import FindButton from './FindButton/FindButton';
import {Box, Button} from '@mui/material';
import {useDispatch} from 'react-redux';
import {resetAll} from '../../../redux/reducers/sortAndFilters/actions/creators';
import {resetGenres} from '../../../redux/reducers/genres/actions/creators';

const AccordionFilters = () => {
    const dispatch = useDispatch()

    const onResetClick = () => {
        dispatch(resetAll())
        dispatch(resetGenres())
    }

    return (
        <>
            <SimpleAccordion title='Filters'>
                <GenreChips/>
                <LanguagesSelect/>
                <ReleaseDateSelects/>
                <FindButton/>
                <Box mt={1}>
                    <Button fullWidth variant='outlined' onClick={onResetClick}>
                        Reset all
                    </Button>
                </Box>
            </SimpleAccordion>
        </>
    )
}

export default AccordionFilters;

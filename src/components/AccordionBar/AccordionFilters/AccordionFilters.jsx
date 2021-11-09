import React, {useEffect} from 'react';
import SimpleAccordion from '../../UI/SimpleAccordion/SimpleAccordion';
import {useDispatch, useSelector} from 'react-redux';
import getLanguagesAsync from '../../../redux/reducers/movies/thunks/getLanguagesAsync';
import BasicSelect from '../../UI/BasicSelect/BasicSelect';
import MenuItem from '@mui/material/MenuItem';
import {updateReleaseDate, updateSearchLanguage} from '../../../redux/reducers/movies/actions/creators';
import DatePicker from '../../UI/DatePicker/DatePicker';
import Box from '@mui/material/Box';
import {Typography} from '@mui/material';

const AccordionFilters = () => {
    const {languages, searchLanguage, searchReleaseDates} = useSelector(state => state.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!languages.length) {
            dispatch(getLanguagesAsync())
        }
    }, [dispatch, languages.length])

    const renderLanguages = () => {
        return (
            languages.map((el, i) => <MenuItem key={i} value={el.iso_639_1}>{el.english_name}</MenuItem>)
        )
    }

    return (
        <SimpleAccordion title='Filters'>
            <BasicSelect
                label='Language'
                value={searchLanguage}
                handleClick={(e) => dispatch(updateSearchLanguage(e))}
            >
                {renderLanguages()}
            </BasicSelect>
            <Box>
                <Typography>Release Dates</Typography>
                <DatePicker
                    label='From'
                    value={searchReleaseDates.startDate}
                    onChange={(newValue) => dispatch(updateReleaseDate('startDate', newValue))}
                />
                <DatePicker
                    value={searchReleaseDates.endDate}
                    label='To'
                    onChange={(newValue) => dispatch(updateReleaseDate('endDate', newValue))}
                />
            </Box>
        </SimpleAccordion>
    )
}

export default AccordionFilters;
import React, {useEffect} from 'react';
import {updateSearchLanguage} from '../../../../redux/reducers/movies/actions/creators';
import MenuItem from '@mui/material/MenuItem';
import getLanguagesAsync from '../../../../redux/reducers/movies/thunks/getLanguagesAsync';
import {useDispatch, useSelector} from 'react-redux';
import {Divider, InputLabel, Select, Typography} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';

const LanguagesSelect = () => {
    const {languages, searchLanguage} = useSelector(state => state.movies)
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
        <Box mt={3} mb={3}>
            <Divider/>
            <Typography mt={1} mb={2} fontWeight='bold' variant='body2'>Language</Typography>
            <FormControl fullWidth>
                <InputLabel id="language-label">Language</InputLabel>
                <Select
                    label='Language'
                    value={searchLanguage}
                    onChange={(e) => dispatch(updateSearchLanguage(e.target.value))}
                    labelId="language-label"
                >
                    {renderLanguages()}
                </Select>
            </FormControl>
        </Box>
    )
}

export default LanguagesSelect;
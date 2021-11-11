import React, {useEffect} from 'react';
import BasicSelect from '../../../UI/BasicSelect/BasicSelect';
import {updateSearchLanguage} from '../../../../redux/reducers/movies/actions/creators';
import MenuItem from '@mui/material/MenuItem';
import getLanguagesAsync from '../../../../redux/reducers/movies/thunks/getLanguagesAsync';
import {useDispatch, useSelector} from 'react-redux';

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
        <BasicSelect
            label='Language'
            value={searchLanguage}
            handleClick={(e) => dispatch(updateSearchLanguage(e))}
        >
            {renderLanguages()}
        </BasicSelect>
    )
}

export default LanguagesSelect;
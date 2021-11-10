import React from 'react';
import SimpleAccordion from '../../UI/SimpleAccordion/SimpleAccordion';
import BasicSelect from '../../UI/BasicSelect/BasicSelect';
import MenuItem from '@mui/material/MenuItem';
import {useDispatch, useSelector} from 'react-redux';
import {updateSelectSortValue} from '../../../redux/reducers/movies/actions/creators';
import discoverMovieAsync from '../../../redux/reducers/movies/thunks/discoverMovieAsync';

const AccordionSort = () => {
    const {selectSortValue, pagination} = useSelector(state => state.movies)
    const dispatch = useDispatch()

    const handleClick = (sortValue) => {
        dispatch(updateSelectSortValue(sortValue))
        dispatch(discoverMovieAsync(sortValue, pagination.page))
    }

    return (
        <SimpleAccordion title='Sort'>
            <BasicSelect
                label='Sort Results By'
                value={selectSortValue}
                handleClick={(newValue) => handleClick(newValue)}
            >
                <MenuItem value='sort_by=popularity.asc'>Popularity Ascending</MenuItem>
                <MenuItem value='sort_by=popularity.desc'>Popularity Descending</MenuItem>
                <MenuItem value='sort_by=release_date.asc'>Release Date Ascending</MenuItem>
                <MenuItem value='sort_by=release_date.desc'>Release Date Descending</MenuItem>
            </BasicSelect>
        </SimpleAccordion>
    )
}

export default AccordionSort;
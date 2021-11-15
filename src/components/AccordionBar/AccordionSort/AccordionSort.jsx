import React from 'react';
import SimpleAccordion from '../../UI/SimpleAccordion/SimpleAccordion';
import MenuItem from '@mui/material/MenuItem';
import {useDispatch, useSelector} from 'react-redux';
import discoverMovieAsync from '../../../redux/reducers/movies/thunks/discoverMovieAsync';
import {InputLabel, Select} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import {updateSelectSortValue} from '../../../redux/reducers/sortAndFilters/actions/creators';

const AccordionSort = () => {
    const {pagination} = useSelector(state => state.page)
    const {selectSortValue} = useSelector(state => state.sortAndFilters)
    const dispatch = useDispatch()

    const handleClick = (sortValue) => {
        dispatch(updateSelectSortValue(sortValue))
        dispatch(discoverMovieAsync(sortValue, pagination.page))
    }

    return (
        <SimpleAccordion title='Sort'>
            <FormControl fullWidth>
                <InputLabel id="sort-label">Sort Results By</InputLabel>
                <Select
                    labelId='sort-label'
                    label='Sort Results By'
                    value={selectSortValue}
                    onChange={(e) => handleClick(e.target.value)}
                >
                    <MenuItem value='sort_by=popularity.asc'>Popularity Ascending</MenuItem>
                    <MenuItem value='sort_by=popularity.desc'>Popularity Descending</MenuItem>
                    <MenuItem value='sort_by=release_date.asc'>Release Date Ascending</MenuItem>
                    <MenuItem value='sort_by=release_date.desc'>Release Date Descending</MenuItem>
                </Select>
            </FormControl>
        </SimpleAccordion>
    )
}

export default AccordionSort;

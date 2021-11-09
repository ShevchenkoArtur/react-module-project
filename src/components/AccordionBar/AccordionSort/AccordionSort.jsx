import React from 'react';
import SimpleAccordion from '../../UI/SimpleAccordion/SimpleAccordion';
import BasicSelect from '../../UI/BasicSelect/BasicSelect';
import MenuItem from '@mui/material/MenuItem';
import {useDispatch, useSelector} from 'react-redux';
import {updateSelectSortValue} from '../../../redux/reducers/movies/actions/creators';

const AccordionSort = () => {
    const {selectSortValue} = useSelector(state => state.movies)
    const dispatch = useDispatch()

    return (
        <SimpleAccordion title='Sort'>
            <BasicSelect
                label='Sort Results By'
                value={selectSortValue}
                handleClick={(newValue) => dispatch(updateSelectSortValue(newValue))}
            >
                <MenuItem value='popularity.asc'>Popularity Ascending</MenuItem>
                <MenuItem value='popularity.desc'>Popularity Descending</MenuItem>
                <MenuItem value='release_date.asc'>Release Date Ascending</MenuItem>
                <MenuItem value='release_date.desc'>Release Date Descending</MenuItem>
            </BasicSelect>
        </SimpleAccordion>
    )
}

export default AccordionSort;
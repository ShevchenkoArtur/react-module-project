import React, {useEffect, useState} from 'react';
import SimpleAccordion from "../../UI/SimpleAccordion/SimpleAccordion";
import {Button, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {updateSearchInputValue} from "../../../redux/reducers/movies/actions/creators";
import getMoviesAsync from "../../../redux/reducers/movies/thunks/getMoviesAsync";
import searchMovieAsync from "../../../redux/reducers/movies/thunks/searchMovieAsync";
import {useDispatch, useSelector} from "react-redux";

const AccordionSearch = () => {
    const [findDisabled, setFindDisabled] = useState(true)
    const {pagination} = useSelector(state => state.page)
    const {searchInputValue} = useSelector(state => state.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        searchInputValue ? setFindDisabled(false) : setFindDisabled(true)
    }, [searchInputValue])

    const updateSearchValue = (e) => {
        dispatch(updateSearchInputValue(e.target.value))
        if (!e.target.value) {
            dispatch(getMoviesAsync(pagination.page))
        }
    }

    const onSearchMovie = () => {
        dispatch(searchMovieAsync(searchInputValue, pagination.page))
    }

    return (
        <SimpleAccordion title='Search'>
            <TextField
                placeholder='Enter a movie name...'
                fullWidth
                value={searchInputValue}
                onChange={updateSearchValue}
            />
            <Box mt={2}>
                <Button
                    onClick={onSearchMovie}
                    variant='outlined'
                    fullWidth
                    style={{marginTop: '8px'}}
                    disabled={findDisabled}
                >
                    Find
                </Button>
            </Box>
        </SimpleAccordion>
    )
}

export default AccordionSearch;

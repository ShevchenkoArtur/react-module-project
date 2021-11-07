import React, {useEffect} from 'react';
import SimpleAccordion from "../../UI/SimpleAccordion/SimpleAccordion";
import ChipBtn from "../../UI/ChipBtn/ChipBtn";
import {useDispatch, useSelector} from "react-redux";
import getGenresAsync from "../../../redux/reducers/movies/thunks/getGenresAsync";
import Box from "@mui/material/Box";

const AccordionGenres = () => {
    const {genres} = useSelector(state => state.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!genres.length) {
            dispatch(getGenresAsync())
        }
    }, [])
    
    const renderGenresChips = () => {
        return genres.map(el => <Box key={el.id} mt={1} ml={1}><ChipBtn label={el.name}/></Box>)
    }

    return (
        <SimpleAccordion title='Genres'>
            <Box style={{display: 'flex', flexWrap: 'wrap'}}>
                {renderGenresChips()}
            </Box>
        </SimpleAccordion>
    )
}

export default AccordionGenres;
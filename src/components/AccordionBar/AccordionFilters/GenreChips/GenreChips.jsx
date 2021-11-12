import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import ChipBtn from '../../../UI/ChipBtn/ChipBtn';
import {updateGenresId} from '../../../../redux/reducers/movies/actions/creators';
import getGenresAsync from '../../../../redux/reducers/movies/thunks/getGenresAsync';
import {useDispatch, useSelector} from 'react-redux';
import {Divider, Typography} from '@mui/material';

const GenreChips = () => {

    const {genres} = useSelector(state => state.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!genres.length) {
            dispatch(getGenresAsync())
        }
    }, [dispatch, genres.length])

    const renderGenresChips = () => {
        return (
            genres.map(el =>
                <Box
                    key={el.id}
                    mt={1}
                    ml={1}
                >
                    <ChipBtn
                        handleClick={() => dispatch(updateGenresId(el.id, el.isClicked))}
                        label={el.name}
                        isClicked={el.isClicked}
                    />
                </Box>)
        )
    }

    return (
        <>
            <Divider />
            <Typography mt={1} fontWeight='bold' variant='body2'>Genres</Typography>
            <Box style={{display: 'flex', flexWrap: 'wrap'}}>
                {renderGenresChips()}
            </Box>
        </>
    )
}

export default GenreChips;
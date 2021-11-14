import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import ChipBtn from '../../../UI/ChipBtn/ChipBtn';
import {useDispatch, useSelector} from 'react-redux';
import {Divider, Typography} from '@mui/material';
import getGenresAsync from '../../../../redux/reducers/genres/thunks/getGenresAsync';
import {updateGenresId} from '../../../../redux/reducers/genres/actions/creators';

const GenreChips = () => {
    const {genres} = useSelector(state => state.genres)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!genres.length) {
            dispatch(getGenresAsync())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
            <Divider/>
            <Typography mt={1} fontWeight='bold' variant='body2'>Genres</Typography>
            <Box style={{display: 'flex', flexWrap: 'wrap'}}>
                {renderGenresChips()}
            </Box>
        </>
    )
}

export default GenreChips;
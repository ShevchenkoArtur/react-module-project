import {getGenresList} from "../../../../api/routes/movies";
import {getGenres} from '../actions/creators';

const getGenresAsync = (history) => {
    return (dispatch) => {
        getGenresList()
            .then(response => {
                dispatch(getGenres(response.data.genres))
            })
            .catch(error => {
                history.push('/error')
            })
    }
}

export default getGenresAsync;

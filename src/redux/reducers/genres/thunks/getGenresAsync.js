import {getGenresList} from "../../../../api/routes/movies";
import {getGenres} from '../actions/creators';

const getGenresAsync = () => {
    return (dispatch) => {
        getGenresList()
            .then(response => {
                dispatch(getGenres(response.data.genres))
            })
            .catch(error => {
                window.location.href = '/error'
            })
    }
}

export default getGenresAsync;

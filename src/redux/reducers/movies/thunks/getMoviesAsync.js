import {fetchMovies} from "../../../../api/routes";
import {getMovies} from "../actions/creators";

const getMoviesAsync = () => {
    return async (dispatch) => {
        try {
            const data = await fetchMovies()
            dispatch(getMovies(data.data.results))
        } catch (error) {
            console.log(error)
        }
    }
}

export default getMoviesAsync;
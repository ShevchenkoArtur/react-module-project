import {markAsFavorite} from '../../../../api/routes/movies';
import {updateMovieFavorite} from '../actions/creators';

const markAsFavoriteAsync = (data, sessionId, accountId, movie) => {
    return (dispatch) => {
        markAsFavorite(data, sessionId, accountId)
            .then(response => {
                dispatch(updateMovieFavorite(data.media_id, data.favorite, movie))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export default markAsFavoriteAsync;
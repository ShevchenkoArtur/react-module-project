import {getLanguagesList} from '../../../../api/routes/movies';
import {getLanguages} from '../actions/creators';

const getLanguagesAsync = (history) => {
    return (dispatch) => {
        getLanguagesList()
            .then(response => {
                dispatch(getLanguages(response.data))
            })
            .catch(error => {
                history.push('/error')
            })
    }
}


export default getLanguagesAsync;

import {getLanguagesList} from '../../../../api/routes/movies';
import {getLanguages} from '../actions/creators';

const getLanguagesAsync = () => {
    return (dispatch) => {
        getLanguagesList()
            .then(response => {
                dispatch(getLanguages(response.data))
            })
            .catch(error => {
                window.location.href = '/error'
            })
    }
}


export default getLanguagesAsync;

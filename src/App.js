import {BrowserRouter} from 'react-router-dom';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import Theme from './components/UI/Theme/Theme';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Main from "./components/Main/Main";

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Theme>
                    <LocalizationProvider dateAdapter={DateAdapter}>
                        <Main/>
                    </LocalizationProvider>
                </Theme>
            </Provider>
        </BrowserRouter>
    )
}

export default App;

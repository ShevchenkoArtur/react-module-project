import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Routes from './components/Routes/Routes';
import Header from './components/Header/Header';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import Theme from './components/UI/Theme/Theme';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Theme>
                    <LocalizationProvider dateAdapter={DateAdapter}>
                        <Header/>
                        <Routes/>
                    </LocalizationProvider>
                </Theme>
            </Provider>
        </BrowserRouter>
    )
}

export default App;

import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Routes from './components/Routes/Routes';
import Header from './components/Header/Header';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import Theme from './components/UI/Theme/Theme';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Footer from './components/Footer/Footer';
import Box from '@mui/material/Box';

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Theme>
                    <LocalizationProvider dateAdapter={DateAdapter}>
                        <Box className='wrapper'>
                            <Header/>
                            <Routes/>
                            <Footer/>
                        </Box>
                    </LocalizationProvider>
                </Theme>
            </Provider>
        </BrowserRouter>
    )
}

export default App;

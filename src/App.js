import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Routes from './components/Routes/Routes';
import Header from './components/Header/Header';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import {Container} from '@mui/material';

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
                <Container>
                    <Routes/>
                </Container>
            </Provider>
        </BrowserRouter>
    )
}

export default App;

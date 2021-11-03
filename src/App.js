import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Routes from './components/Routes/Routes';
import Header from './components/Header/Header';
import {Provider} from 'react-redux';
import store from './redux/store/store';

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
                <Routes/>
            </Provider>
        </BrowserRouter>
    )
}

export default App;

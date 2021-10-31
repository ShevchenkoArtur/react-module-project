import Login from '../components/pages/Login/Login';
import Error from '../components/pages/Error/Error';
import Movies from '../components/pages/Movies/Movies';
import Signup from '../components/pages/Signup/Signup';

export const routes = [
    {path: '/', component: Login, private: false},
    {path: '/error', component: Error, private: false},
    {path: '/movies', component: Movies, private: true},
    {path: '/signup', component: Signup, private: false}
]
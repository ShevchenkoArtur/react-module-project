import Login from '../components/pages/Login/Login';
import Error from '../components/pages/Error/Error';
import Movies from '../components/pages/Movies/Movies';
import Signup from '../components/pages/Signup/Signup';
import SecondStep from '../components/pages/Signup/SecondStep/SecondStep';
import ThirdStep from '../components/pages/Signup/ThirdStep/ThirdStep';
import SelectedMovie from '../components/pages/SelectedMovie/SelectedMovie';

export const routes = [
    {path: '/', component: Login, private: false},
    {path: '/error', component: Error, private: false},
    {path: '/movies', component: Movies, private: true},
    {path: '/movie/:id', component: SelectedMovie, private: true},
    {path: '/signup', component: Signup, private: false},
    {path: '/second-step', component: SecondStep, private: false},
    {path: '/third-step', component: ThirdStep, private: false},
]
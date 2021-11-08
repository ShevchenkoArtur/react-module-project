import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import {routes as routesArr} from '../../routes/routes';
import {useSelector} from 'react-redux';

const Routes = () => {
    const {sessionId} = useSelector(state => state.users)

    const renderRoutes = () => {
        return (
            localStorage.getItem('session_id') || sessionId
                ?
                routesArr.map((el, i) => <Route key={i} path={el.path} component={el.component} exact/>)
                :
                routesArr.filter(el => !el.private).map((el, i) => <Route key={i} path={el.path}
                                                                          component={el.component}
                                                                          exact/>)
        )
    }

    return (
        <Switch>
            {
                renderRoutes()
            }
            <Redirect to='/error'/>
        </Switch>
    )
}

export default Routes;
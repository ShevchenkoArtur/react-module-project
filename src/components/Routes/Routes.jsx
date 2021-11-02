import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import {routes as routesArr} from '../../routes/routes';
import {useSelector} from 'react-redux';

const Routes = () => {
    const {isLogin} = useSelector(state => state.users)

    const renderRoutes = () => {
        return routesArr.map((el, i) => {
            if (isLogin) {
                return <Route key={i} path={el.path} component={el.component} exact/>
            } else {
                if (!el.private) {
                    return <Route key={i} path={el.path} component={el.component} exact/>
                }
            }
        })
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
import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import App from './App';
import Profile from './Profile'
const router = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/profile' component={Profile} />

                </Switch>
            </Router>
        </Fragment>
    )
}
export default router;
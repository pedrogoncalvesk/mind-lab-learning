import React from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Authenticate from '../pages/Authenticate';
import Base from '../pages/Base';
import Courses from '../pages/Courses';
import Course from '../pages/Course';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Forgot from '../pages/Forgot';
import NotFound from '../pages/NotFound';

import cookies from '../utils/cookies';
import store from '../store/store';

import * as ActionType from '../constants/actionType';

const history = syncHistoryWithStore(createBrowserHistory(), store);

function App() {

    const { token, first_name, last_name } = cookies().getAll();

    if (token) {
        // Update application state. User has token and is probably authenticated
        store.dispatch({
            type: ActionType.LOG_IN_SUCCESS,
            payload: token,
            user: { first_name, last_name }
        });
    }

    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={({ match }) => (
                    <Base>
                        <Courses match={match} />
                    </Base>
                )} />
                <Route path="/courses" component={({ match }) => (
                    <Base>
                        <Route exact path={match.path} component={Courses} />
                        <Route path={`${match.path}/:courseId`} component={Authenticate(Course)} />
                    </Base>
                )} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/forgot" component={Forgot} />
                <Route render={() => (
                    <Base>
                        <NotFound />
                    </Base>
                )} />
            </Switch>
        </Router>
    );
}

export default App;

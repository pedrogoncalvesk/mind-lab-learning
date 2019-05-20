import React from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Courses from './course/courses.component';
import RequireAuth from './auth/authenticate.component';
import Course from './course/course.component';
import LoginForm from './login/login.component';
import SignUpForm from './signup/signup.component';
import ForgotForm from './forgot/forgot.component';
import NotFoundPage from './error/not-found.component';
import Base from './base/base.component';

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
                        <Route path={`${match.path}/:courseId`} component={RequireAuth(Course)} />
                    </Base>
                )} />
                <Route path="/login" component={LoginForm} />
                <Route path="/signup" component={SignUpForm} />
                <Route path="/forgot" component={ForgotForm} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    );
}

export default App;
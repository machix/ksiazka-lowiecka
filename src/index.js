import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import Login from './auth/Login.js'
import Logout from './auth/Logout.js'
import Layout from './Layout.js'
import Register from './register/Register.js'

import HuntingBook from './hunting/HuntingBook.js'
import Huntings from './hunting/Huntings.js'
import HuntingAreas from './huntingAreas/HuntingAreas.js'
import Animals from './animals/Animals.js'
import Users from './users/Users.js'

import auth from './auth/auth.js';

import NewHuntingFlow from './hunting/flow/NewHuntingFlow.js';

function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname: '/login',
            state: {nextPathname: nextState.location.pathname}
        })
    }
}

class Routes extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/archive" component={Layout} onEnter={requireAuth}>
                    <IndexRoute component={HuntingBook} />
                    <Route path="/" component={HuntingBook} />
                </Route>
                <Route path="/huntings" component={Layout} onEnter={requireAuth}>
                    <IndexRoute component={Huntings} />
                    <Route path="/" component={Huntings} />
                </Route>
                <Route path="/hunting" component={Layout} onEnter={requireAuth}>
                    <IndexRoute component={NewHuntingFlow} />
                </Route>
                <Route path="/areas" component={Layout}>
                    <IndexRoute component={HuntingAreas} />
                </Route>

                <Route path="/animals" component={Layout}>
                    <IndexRoute component={Animals} />
                </Route>
                <Route path="/users" component={Layout}>
                    <IndexRoute component={Users} />
                </Route>

                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
            </Router>
        )
    }
}

ReactDOM.render(
    <Routes />,
    document.getElementById('root')
);
import React, { Component } from 'react';
import { Router, Route, Redirect, Switch, HashRouter } from 'react-router-dom';
import MainPage from './containers/mainPageContainer';
import MainPageRedirect from './containers/mainPageRedirectContainer';
import CreateCompetition from './containers/createCompetetionContainer';

export default class RouterApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={MainPageRedirect} />
                    <Route exact path="/main" component={MainPage} />
                    <Route exact path="/create-competition" component={CreateCompetition} />
                </Switch>
            </HashRouter>
        );
    }
}

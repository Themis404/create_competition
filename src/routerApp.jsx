import React, { Component } from 'react';
import { Router, Route, Redirect, Switch, HashRouter } from 'react-router-dom';
import MainPage from './containers/mainPageContainer';
import MainPageRedirect from './containers/mainPageRedirectContainer';
import CreateCompetition from './containers/createCompetetionContainer';
import MenuPage from './containers/menuPage';
import PageCardCompetition from './containers/pageCardCompetition'
import PageUsers from './containers/pageUsers'
import PageAnnouncement from './containers/pageAnnouncement'
import PageRegulations from './containers/pageRegulations'
import PageCreateDay from './containers/pageCreateDay';

export default class RouterApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HashRouter>
              <MenuPage>
                <Switch>
                    <Route exact path="/" component={MainPageRedirect} />
                    <Route exact path="/main" component={MainPage} />
                    <Route exact path="/competition/:id" component={PageCardCompetition } />
                    <Route exact path="/competition/:id/create-day" component={PageCreateDay} />
                    <Route exact path="/create-competition" component={CreateCompetition} />
                    <Route exact path="/users" component={PageUsers} />
                    <Route exact path="/announcement" component={PageAnnouncement} />
                    <Route exact path="/regulations" component={PageRegulations} />
                </Switch>
              </MenuPage>
            </HashRouter>
        );
    }
}

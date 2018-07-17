import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import CompetitionTable from '../components/CompetitionTable.js'
import BaseComponent from './baseComponent'

class MainPage extends BaseComponent {
    constructor(params) {
        super(params);
    }

    render() {
        if (this.reload) {
            this.reload = false;
            return <Redirect to={this.redirect} push={true} />;
        }
        return (
          <div className='flex-container marginTopStandart'>
            <button onClick={() => this.goToState('/create-competition')} className='button'>Create competition</button>
            <CompetitionTable />
          </div>
        );
    }
}

export default MainPage;

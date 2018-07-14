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
          <div className='flex-container'>
          <div onClick={() => this.goToState('/create-competition')}>Перейти к форме</div>
            <CompetitionTable />
          </div>
        );
    }
}

export default MainPage;

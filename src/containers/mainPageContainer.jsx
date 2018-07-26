import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import CompetitionTable from '../components/CompetitionTable.js'
import BaseComponent from './baseComponent'

class MainPage extends BaseComponent {
    constructor(params) {
        super(params);
        this.props.match.params.id
    }

    render() {
        if (this.reload) {
            this.reload = false;
            return <Redirect to={this.redirect} push={true} />;
        }
        return (
          <div className='marginElem'>
              <CompetitionTable />
          </div>
        );
    }
}

export default MainPage;

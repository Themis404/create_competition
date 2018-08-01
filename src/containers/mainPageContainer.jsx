import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import CompetitionTable from '../components/CompetitionTable.js'
import BaseComponent from './baseComponent'
import SearchBar from '../components/SearchBar.js';
import * as actions from '../actions/index';

class MainPage extends BaseComponent {
    constructor(params) {
        super(params),
        this.props.match.params.id
    }
    search(name) {
        console.log(name)
        actions.fetchSearch(name)
            .then(res => {
                console.log(res);
            })
            
      }

    render() {
        if (this.reload) {
            this.reload = false;
            return <Redirect to={this.redirect} push={true} />;
        }
        return (
          <div className='marginElem'>
              <SearchBar onSearch={(searchString) => this.search(searchString)}/>
              <CompetitionTable />
          </div>
        );
    }
}

export default MainPage;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import CompetitionTable from '../components/CompetitionTable.js'
import BaseComponent from './baseComponent'
import SearchBar from '../components/SearchBar.js';

class MainPage extends BaseComponent {
    constructor(params) {
        super(params);
    }
    search(name) {
        this.props.fetchSearch(name);
      }
    
    render() {
        if (this.reload) {
            this.reload = false;
            return <Redirect to={this.redirect} push={true} />;
        }
        return (
          <div className='marginElem'>
              <SearchBar onSearchName={this.search.bind(this)}/>
              <CompetitionTable />
          </div>
        );
    }
}

export default MainPage;

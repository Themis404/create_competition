import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import CompetitionTable from '../components/CompetitionTable.js'
import BaseComponent from './baseComponent'
import lupa from './lup.png'

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
          <div className='marginElem'>
             <div className="Search">
                <form className="searchF">
                     <input type="search" name="q" placeholder="Поиск..."/>
                     <button className='SearchButton'><img src={lupa} alt='lupa' className="lupa"/></button>
                      {/* <input type="submit" value="Найти"/> */}
                 </form>
              </div>
              <CompetitionTable />
          </div>
        );
    }
}

export default MainPage;

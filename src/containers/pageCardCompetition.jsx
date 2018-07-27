import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardCompetition from '../components/cardCompetition'
import BaseComponent from '../containers/baseComponent'
import { Redirect } from 'react-router-dom';
import DaysTable from '../components/daysTable'; 
import CreateDay from '../components/createDay'; 

class PageCardCompetition extends BaseComponent {
    constructor(params) {
        super(params)
    }

    render() {
      if (this.reload) {
          this.reload = false;
          return <Redirect to={this.redirect} push={true} />;
      }
      return (
        <div className='marginElem'>
          <button onClick={() => this.goToState('/main')} className='button flex-container'>Back</button>
          <CardCompetition id={this.props.match.params.id}/>
          <button onClick={() => this.goToState('/create-day')} className='button flex-container'>Create day</button>
          <DaysTable/>
        </div>
      );
    }
}

export default PageCardCompetition;

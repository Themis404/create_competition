import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardCompetition from '../components/cardCompetition'
import BaseComponent from '../containers/baseComponent'
import { Redirect } from 'react-router-dom';
import DaysTable from '../components/daysTable';

class PageCardCompetition extends BaseComponent {
    constructor(params) {
        super(params),
        this.props.match.params.id
    }

    render() {
      if (this.reload) {
          this.reload = false;
          return <Redirect to={this.redirect} push={true} />;
      }
      return (
        <div className='container'>
          <div className='col-md-center'>
            <button onClick={() => this.goToState('/main')} className='button flex-container'>Back</button>
            <CardCompetition id={this.props.match.params.id}/>
            <DaysTable className='center' id={this.props.match.params.id}/>
          </div>
        </div>
      );
    }
}

export default PageCardCompetition;

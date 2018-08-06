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
        <div className='container col-md-4 col-md-offset-4'>
          <button onClick={() => this.goToState('/main')} className='btn btn-warning col-md-2 noneFloat'>Back</button>
          <CardCompetition id={this.props.match.params.id}/>
          <DaysTable id={this.props.match.params.id}/>
        </div>
      );
    }
}

export default PageCardCompetition;

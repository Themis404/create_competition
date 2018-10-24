import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardCompetition from '../components/cardCompetition';
import BaseComponent from '../containers/baseComponent';
import { Redirect } from 'react-router-dom';
import DaysTable from '../components/daysTable';

class PageCardCompetition extends BaseComponent {
  constructor(params) {
    super(params),
    this.props.match.params.id,
    this.props.match.params.idDay;
  }

  render() {
    if (this.reload) {
        this.reload = false;
        return <Redirect to={this.redirect} push={true} />;
    }
    return (
      <div className='container col-md-4 col-md-offset-4'>
        <CardCompetition id={this.props.match.params.id}/>
        <DaysTable id={this.props.match.params.id} idDay={this.props.match.params.idDay}/>
      </div>
    );
  }
}

export default PageCardCompetition;

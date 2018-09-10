import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardCompetition from '../components/cardCompetition'
import BaseComponent from '../containers/baseComponent'
import { Redirect } from 'react-router-dom';
import DaysTable from '../components/daysTable';
import CreateDay from '../components/createDay';

class PageCreateDay extends BaseComponent {
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
        <CreateDay id={this.props.match.params.id}/>
      </div>
    );
  }
}

export default PageCreateDay;

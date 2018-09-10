import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CreateCompetition from '../components/createCompetition.js'
import BaseComponent from '../containers/baseComponent'
import { Redirect } from 'react-router-dom';

class PageCreateCompetition extends BaseComponent {
  constructor(params) {
      super(params);
  }

  render() {
    if (this.reload) {
        this.reload = false;
        return <Redirect to={this.redirect} push={true} />;
    }
    return (
      <div className=''>
        <CreateCompetition/>
      </div>
    );
  }
}

export default PageCreateCompetition;

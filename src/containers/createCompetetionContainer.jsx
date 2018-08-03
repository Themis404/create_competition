import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CompetitionCreate from '../components/competitionCreate.js'
import BaseComponent from '../containers/baseComponent'
import { Redirect } from 'react-router-dom';

class CreateCompetition extends BaseComponent {
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
          <button onClick={() => this.goToState('/main')} className='button flex-container'>Back</button>
          <CompetitionCreate/>
        </div>
      );
    }
}

export default CreateCompetition;

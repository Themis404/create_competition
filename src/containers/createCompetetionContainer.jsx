import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputInfo from '../components/InputInfo.js'
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
          <div className='flex-container marginTopStandart'>
          <button onClick={() => this.goToState('/main')} className='button'>Back</button>
            <InputInfo />
          </div>
        );
    }
}

export default CreateCompetition;

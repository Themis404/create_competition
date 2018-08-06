import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import BaseComponent from './baseComponent'
import * as actions from '../actions/index';
import CreateApplication from '../components/createApplication'

class PageApplication extends BaseComponent {
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
          {/* <button onClick={() => this.goToState('/main')} className='button flex-container'>Back</button> */}
          <CreateApplication/>
        </div>
      );
    }
}

export default PageApplication;
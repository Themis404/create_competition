import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from '../containers/baseComponent'
import { Redirect } from 'react-router-dom';

class PageUsers extends BaseComponent {
    constructor(params) {
        super(params)
    }

    render() {
      if (this.reload) {
          this.reload = false;
          return <Redirect to={this.redirect} push={true} />;
      }
        return (
          <div className='flex-container marginTopStandart'>
            <button onClick={() => this.goToState('/main')} className='button marginBotStandart'>Back</button>
            <p>USERS</p>
          </div>
        );
    }
}

export default PageUsers;

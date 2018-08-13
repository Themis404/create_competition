import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import BaseComponent from './baseComponent'
import CardApplications from '../components/cardApplications'

class PageCardApplications extends BaseComponent {
    constructor(params) {
        super(params);
        this.props.match.params.idParticipants
    }

    render() {
      if (this.reload) {
          this.reload = false;
          return <Redirect to={this.redirect} push={true} />;
      }
      return (
        <div className='col-md-4 col-md-offset-4'>
          {/* <button onClick={() => this.goToState('/main')} className='button flex-container'>Back</button> */}
          <CardApplications idParticipants={this.props.match.params.idParticipants}/>
        </div>
      );
    }
}

export default PageCardApplications;

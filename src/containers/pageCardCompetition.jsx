import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardCompetition from '../components/cardCompetition'
import BaseComponent from '../containers/baseComponent'
import { Redirect } from 'react-router-dom';

class PageCardCompetition extends BaseComponent {
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
            <CardCompetition id={this.props.match.params.id}/>
          </div>
        );
    }
}

export default PageCardCompetition;

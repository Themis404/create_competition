import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CompetitionCard from '../components/CompetitionCard'
import BaseComponent from '../containers/baseComponent'
import { Redirect } from 'react-router-dom';
import DaysTable from '../components/DaysTable';

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
        <div className='marginElem'>
          <button onClick={() => this.goToState('/main')} className='button flex-container'>Back</button>
          <CompetitionCard id={this.props.match.params.id}/>
          <DaysTable id={this.props.match.params.id}/>
        </div>
      );
    }
}

export default PageCardCompetition;

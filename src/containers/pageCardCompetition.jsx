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
<<<<<<< HEAD
          <CardCompetition id={this.props.match.params.id}/>
          <DaysTable className='center' id={this.props.match.params.id}/>
=======
          <CompetitionCard id={this.props.match.params.id}/>
          <DaysTable id={this.props.match.params.id}/>
>>>>>>> 7de8b1b83c8da7cb51fa30d3acf2851fe3ae993a
        </div>
      );
    }
}

export default PageCardCompetition;

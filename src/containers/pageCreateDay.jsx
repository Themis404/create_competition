import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CompetitionCard from '../components/CompetitionCard'
import BaseComponent from '../containers/baseComponent'
import { Redirect } from 'react-router-dom';
<<<<<<< HEAD
import DaysTable from '../components/daysTable';
import CreateDay from '../components/createDay';
=======
import DaysTable from '../components/DaysTable';
import CreateDayForm from '../components/CreateDayForm';
import CompetitionTable from '../components/CompetitionTable'
>>>>>>> 7de8b1b83c8da7cb51fa30d3acf2851fe3ae993a

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
        <div className='marginElem'>
<<<<<<< HEAD
          <button onClick={() => this.goToState('/competition/' + this.props.id)} className='button flex-container'>Back</button>
          <CreateDay id={this.props.match.params.id}/>
=======
          <CreateDayForm id={this.props.match.params.id}/>
>>>>>>> 7de8b1b83c8da7cb51fa30d3acf2851fe3ae993a
        </div>
      );
    }
}

export default PageCreateDay;

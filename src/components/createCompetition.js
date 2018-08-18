import React from 'react';
import {Redirect} from 'react-router-dom';
import BaseComponent from '../containers/baseComponent'
import ReactDOM from 'react-dom';
import * as actions from '../actions/competitions';

class CreateCompetition extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      dateStart: '',
      dateFinish: '',
      registrationEnd: '',
      registrationStart: ''
    }
  }

  handleSubmit = (e) => {
    actions.createCompetition({
      name: this.state.name,
      description: this.state.description,
      dateStart: this.state.dateStart,
      dateFinish: this.state.dateFinish,
      registrationStart: this.state.registrationStart,
      registrationEnd: this.state.registrationEnd
    }).then(res => this.goToState('/main'));};

  updateName(e) {
    this.setState( {name: e.target.value} );
  }

  updateDateStart(e) {
    this.setState( {dateStart: e.target.value} )
  }

  updateDateFinish(e) {
    this.setState( {dateFinish: e.target.value} )
  }

  updateDescription(e) {
    this.setState( {description: e.target.value} )
  }

  updateRegistrationStart(e) {
    this.setState( {registrationStart: e.target.value} )
  }

  updateRegistrationEnd(e) {
    this.setState( {registrationEnd: e.target.value} )
  }

  render() {
    if (this.reload) {
      this.reload = false;
      return <Redirect to={this.redirect} push={true}/>;
    }
    return (
        <div className='col-md-4 col-md-offset-4'>
          <button
            onClick={() => this.goToState('/main')}
            className='btn btn-warning row-md-1 col-md-2'>
            Back
          </button>
          <form
            onSubmit={e => this.handleSubmit(e)}
            className=''>
              <h2
                className="text-center col-md-12 marginTopStandart">
                Create competition
              </h2>
              <h5>
                <p
                  className='col-md-12 nonePadding'>
                  Name
                </p>
              </h5>
              <input
                required id='inputName'
                className="form-control"
                placeholder = "Name competition"
                value={this.state.name}
                onChange={e => this.updateName(e)}>
              </input>
              <h5>
                <p
                  className='col-md-12 marginTopStandart nonePadding'>
                  Description
                </p>
              </h5>
              <textarea
                required
                rows = "4"
                id='inputDescription'
                className="form-control"
                placeholder = "Information about competition"
                maxLength="360"
                value={this.state.description}
                onChange={e => this.updateDescription(e)}>
              </textarea>
              <h5>
                <p
                  className='col-md-12 marginTopStandart nonePadding'>
                  Date Start
                </p>
              </h5>
              <input
                required
                type='date'
                id='inputDateStart'
                className="form-control"
                value={this.state.dateStart}
                onChange={e => this.updateDateStart(e)}>
              </input>
              <h5>
                <p
                  className='col-md-12 marginTopStandart nonePadding'>
                  Date Finish
                </p>
              </h5>
              <input
                required
                type='date'
                id='inputDateFinish'
                className="form-control"
                value={this.state.dateFinish}
                onChange={e => this.updateDateFinish(e)}>
              </input>
              <h5>
                <p
                  className='col-md-12 marginTopStandart nonePadding'>
                  Start date registration
                </p>
              </h5>
              <input
                required
                type='date' id='inputRegistrationStart'
                className="form-control"
                value={this.state.registrationStart}
                onChange={e => this.updateRegistrationStart(e)}>
              </input>
              <h5>
                <p
                  className='col-md-12 marginTopStandart nonePadding'>
                  End date registration
                </p>
              </h5>
              <input
                required
                type='date'
                id='inputRegistrationEnd'
                className="form-control"
                value={this.state.registrationEnd}
                onChange={e => this.updateRegistrationEnd(e)}>
              </input>
              <div className="col-md-12">
                <button
                  type="submit"
                  id='btn'
                  className="btn btn-success col-md-4 col-md-offset-4 marginTopStandart marginBotStandart">
                  Create
                </button>
              </div>
          </form>
        </div>
    )
  }
}

export default CreateCompetition;

import React from 'react';
import {Redirect} from 'react-router-dom';
import BaseComponent from '../containers/baseComponent'
import ReactDOM from 'react-dom';

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
    console.log(this.state);
    fetch('https://afternoon-woodland-86438.herokuapp.com/competitions/create', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Headers': 'origin, content-type, accept',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        description: this.state.description,
        dateStart: this.state.dateStart,
        dateFinish: this.state.dateFinish,
        registrationStart: this.state.registrationStart,
        registrationEnd: this.state.registrationEnd
      })
    }).then(res => {
      console.log(res);
      this.setState({name: '', description: '', dateStart: '', dateFinish: '', registrationEnd: '', registrationStart: ''});
      console.log(this.state);
      this.checkFieldsEmpty();
      res.ok ? console.log('success') : console.warn('something gone wrong');
    });
    e.preventDefault();
  };

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
        <div className="createComp marginTopStandart">
          <form onSubmit={this.handleSubmit} className='positionInput'>
            <div className='textInput width_input'>
              <h2>Create competition</h2>
              <p>Name</p>
              <p><input required id='inputName' className="cardCompForm" placeholder = "Name competition"
                      value={this.state.name}
                      onChange={e => this.updateName(e)}/></p>
              <p>Description</p>
              <p><textarea required rows = "4" id='inputDescription' className="cardCompForm" placeholder = "Information about competition" maxLength="86"
                      value={this.state.description}
                      onChange={e => this.updateDescription(e)}/></p>
              <p>Date Start</p>
              <p><input required type='date' id='inputDateStart' className="cardCompForm"
                      value={this.state.dateStart}
                      onChange={e => this.updateDateStart(e)}/></p>
              <p>Date Finish</p>
              <p><input required type='date' id='inputDateFinish' className="cardCompForm"
                      value={this.state.dateFinish}
                      onChange={e => this.updateDateFinish(e)}/></p>
              <p>Start date registration</p>
              <p><input required type='date' id='inputRegistrationStart' className="cardCompForm"
                      value={this.state.registrationStart}
                      onChange={e => this.updateRegistrationStart(e)}/></p>
              <p>End date registration</p>
              <p><input required type='date' id='inputRegistrationEnd' className="cardCompForm"
                      value={this.state.registrationEnd}
                      onChange={e => this.updateRegistrationEnd(e)}/></p>
            </div>
            <div>
              <button type="submit" className="button">Create</button>
            </div>
          </form>
        </div>
    )
  }
}

export default CreateCompetition;

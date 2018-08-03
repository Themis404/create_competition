import React from 'react';
import { Redirect } from 'react-router-dom';
import BaseComponent from '../containers/baseComponent'
import ReactDOM from 'react-dom';

class InputInfo extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      dateStart: '',
      dateFinish: '',
      registrationEndTimestamp: '',
      submitButtonDisabled: true  //т.к. поля пустые
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
        dateStart : this.state.dateStart,
        dateFinish: this.state.dateFinish,
        registrationEndTimestamp: this.state.registrationEndTimestamp
      })
    }).then(res=>{
      console.log(res);
      this.setState({name: '', description: '', dateStart: '', dateFinish: '', registrationEndTimestamp: ''});
      console.log(this.state);
      this.checkFieldsEmpty();
      res.ok ? console.log('success') : console.warn('something gone wrong');
    });
    e.preventDefault();
  };

  updateName(e) {
    this.checkFieldsEmpty() //можно проверять здесь
    this.setState( {name: e.target.value} );
  }

  updateDateStart(e) {
    this.checkFieldsEmpty()
    this.setState( {dateStart: e.target.value} )
  }

  updateDateFinish(e) {
    this.checkFieldsEmpty()
    this.setState( {dateFinish: e.target.value} )
  }

  updateDescription(e) {
    this.checkFieldsEmpty()
    this.setState( {description: e.target.value} )
  }

  updateRegistrationEndTimestamp(e) {
    this.checkFieldsEmpty()
    this.setState( {registrationEndTimestamp: e.target.value} )
  }

  checkFieldsEmpty = () => {
    if ((this.state.name.length&&this.state.description.length&&this.state.dateStart.length&&this.state.dateFinish.length&&this.state.registrationEndTimestamp.length) === 0) {
      this.setState({submitButtonDisabled: true});
    } else {
      this.setState({submitButtonDisabled: false});
    }
    console.log(this.state.submitButtonDisabled);
  };

  render() {
    if (this.reload) {
        this.reload = false;
        return <Redirect to={this.redirect} push={true} />;
    }
    return (
        <div className="createComp marginTopStandart">
          <form onSubmit={this.handleSubmit} className='positionInput'>
            <div className='textInput width_input'>
              <h2>Create competition</h2>
              <p>Name</p>
              <p><input id='inputName' className="cardCompForm" placeholder = "Name competition"
                      value={this.state.name}
                      onChange={e => this.updateName(e)}/></p>
              <p>Description</p>
              <p><textarea rows = "4" id='inputDescription' className="cardCompForm" placeholder = "Information about competition" maxLength="300"
                      value={this.state.description}
                      onChange={e => this.updateDescription(e)}/></p>
              <p>Date Start</p>
              <p><input id='inputDateStart' className="cardCompForm" placeholder = " DD-MM-YYYY"
                      value={this.state.dateStart}
                      onChange={e => this.updateDateStart(e)}/></p>
              <p>Date Finish</p>
              <p><input id='inputDateFinish' className="cardCompForm" placeholder = " DD-MM-YYYY"
                      value={this.state.dateFinish}
                      onChange={e => this.updateDateFinish(e)}/></p>
              <p>Deadline for applications</p>
              <p><input id='inputRegistrationEndTimestamp' className="cardCompForm" placeholder = " DD-MM-YYYY_HH:MM:SS"
                      value={this.state.registrationEndTimestamp}
                      onChange={e => this.updateRegistrationEndTimestamp(e)}/></p>  
            </div>
            <div>
              <button type="submit" className="button" disabled={this.state.submitButtonDisabled}>Create</button>
            </div>
          </form>
        </div>
    )
  }
}

export default InputInfo;

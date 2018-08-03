import React from 'react';
import {Redirect} from 'react-router-dom';
import BaseComponent from '../containers/baseComponent'
import ReactDOM from 'react-dom';

class CreateDayForm extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      competitionId: '',
      name: '',
      date: '',
      timeStart: '',
      timeFinish: '',
      sequenceNumber: ''
    }
  }

  componentDidMount() {
    this.setState({
      competitionId: this.props.id
    });
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      competitionId: newProps.id
    });
  }

  handleSubmit = (e) => {
    console.log(this.state);
    fetch('https://afternoon-woodland-86438.herokuapp.com/days/create', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Headers': 'origin, content-type, accept',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        competitionId: this.state.competitionId,
        name: this.state.name,
        date: this.state.date,
        timeStart: this.state.timeStart,
        timeFinish: this.state.timeFinish,
        sequenceNumber: this.state.sequenceNumber
      })
    }).then(res => {
      console.log(res);
      this.setState({name: '', date: '', timeStart: '', timeFinish: '', sequenceNumber: '', competitionId: ''});
      console.log(this.state);
      this.checkFieldsEmpty();
      res.ok ? console.log('success') : console.warn('something gone wrong');
    });
    e.preventDefault();
  };

  updateName(e) {
<<<<<<< HEAD:src/components/createDay.js
    this.setState( {name: e.target.value} );
  }

  updateTimeStart(e) {
    this.setState( {timeStart: e.target.value} )
  }

  updateTimeFinish(e) {
    this.setState( {timeFinish: e.target.value} )
  }

  updateDate(e) {
    this.setState( {date: e.target.value} )
  }

  updateSequenceNumber(e) {
    this.setState( {sequenceNumber: e.target.value} )
  }

  updateCompetitionId(e) {
    this.setState( {competitionId: this.props.id} )
    console.log(this.state.competitionId)
  }

=======
    // this.checkFieldsEmpty() //можно проверять здесь
    this.setState({name: e.target.value});
  }

  updateTimeStart(e) {
    // this.checkFieldsEmpty()
    this.setState({timeStart: e.target.value});
  }

  updateTimeFinish(e) {
    // this.checkFieldsEmpty()
    this.setState({timeFinish: e.target.value});
  }

  updateDate(e) {
    // this.checkFieldsEmpty()
    this.setState({date: e.target.value});
  }

  updateSequenceNumber(e) {
    // this.checkFieldsEmpty()
    this.setState({sequenceNumber: e.target.value});
  }

  updateCompetitionId(e) {
    // this.checkFieldsEmpty()
    this.setState({competitionId: this.props.id});
    console.log(this.state.competitionId)
  }

  checkFieldsEmpty = () => {
    if ((this.state.name.length
        && this.state.timeStart.length
        && this.state.timeFinish.length
        && this.state.date.length
        && this.state.sequenceNuber.length) === 0)
    {
      this.setState({submitButtonDisabled: true});
    } else {
      this.setState({submitButtonDisabled: false});
    }
    console.log(this.state.submitButtonDisabled);
  };

>>>>>>> 7de8b1b83c8da7cb51fa30d3acf2851fe3ae993a:src/components/CreateDayForm.js
  render() {
    if (this.reload) {
      this.reload = false;
      return <Redirect to={this.redirect} push={true}/>;
    }
    return (
        <div className="createComp marginTopStandart">
          <form onSubmit={this.handleSubmit} className='positionInput'>
            <div className='textInput width_input'>
<<<<<<< HEAD:src/components/createDay.js
                <h2>Create day</h2>
                <p>Name</p>
                <p><input required name='name' className="cardCompForm" placeholder = "NAME DAY"
                        value={this.state.name}
                        onChange={ e => this.updateName(e)}/></p>
                <p>Date</p>
                <p><input required type='date' name='date'className="cardCompForm" placeholder = "DD-MM-YYYY"
                        value={this.state.date}
                        onChange={ e => this.updateDate(e)}/></p>
                <p>Time Start</p>
                <p><input required type='time' name='timeStart' className="cardCompForm" placeholder = "HH-MM"
                        value={this.state.dateStart}
                        onChange={ e => this.updateTimeStart(e)}/></p>
                <p>Time Finish</p>
                <p><input required type='time' name='timeFinish' className="cardCompForm" placeholder = "HH-MM"
                        value={this.state.dateFinish}
                        onChange={ e => this.updateTimeFinish(e)}/></p>
                <p>Sequence Nuber</p>
                <p><input required name='numberDay' className="cardCompForm" placeholder = "Number day"
                        value={this.state.sequenceNumber}
                        onChange={ e => this.updateSequenceNumber(e)}/></p>
                <p>Competition Id</p>
                <p className="cardCompForm" placeholder = "Number COMPETITION"
                        value={this.state.competitionId}
                        onChange={  e => this.updateCompetitionId(e)}></p>
=======
              <h2>Create day</h2>
              <p>Name</p>
              <p><input id='inputName' className="cardCompForm" placeholder="NAME DAY"
                        value={this.state.name}
                        onChange={e => this.updateName(e)}/></p>

              <p>Date</p>
              <p><input id='inputDate' className="cardCompForm" placeholder="DD-MM-YYYY"
                        value={this.state.date}
                        onChange={e => this.updateDate(e)}/></p>

              <p>Time Start</p>
              <p><input id='inputTimeStart' className="cardCompForm" placeholder="HH-MM-SS"
                        value={this.state.dateStart}
                        onChange={e => this.updateTimeStart(e)}/></p>

              <p>Time Finish</p>
              <p><input id='inpuTimeFinish' className="cardCompForm" placeholder="HH-MM-SS"
                        value={this.state.dateFinish}
                        onChange={e => this.updateTimeFinish(e)}/></p>

              <p>Sequence Nuber</p>
              <p><input id='inputSequenceNuber' className="cardCompForm" placeholder="Number day"
                        value={this.state.sequenceNumber}
                        onChange={e => this.updateSequenceNumber(e)}/></p>

              <p>Competition Id</p>
              <p><input id='inputCompetitionId' className="cardCompForm" placeholder="Number COMPETITION"
                        value={this.state.competitionId}
                        onChange={e => this.updateCompetitionId(e)}/></p>
>>>>>>> 7de8b1b83c8da7cb51fa30d3acf2851fe3ae993a:src/components/CreateDayForm.js
            </div>

            <div>
              <button type="submit" name='submit' className="button" >Create</button>
            </div>
          </form>
        </div>
    )
  }
}

export default CreateDayForm;

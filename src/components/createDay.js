import React from 'react';
import { Redirect } from 'react-router-dom';
import BaseComponent from '../containers/baseComponent'
import ReactDOM from 'react-dom';
import CompetitionTable from './CompetitionTable'

class CreateDay extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      competitionId: '',
      name: '',
      date: '',
      timeStart: '',
      timeFinish: '',
      sequenceNuber: '',
      submitButtonDisabled: true  //т.к. поля пустые
    }
  }

  handleSubmit = (e) => {
    console.log(this.state);
    fetch('https://afternoon-woodland-86438.herokuapp.com/competitions/' + this.props.id +'/days/create', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Headers': 'origin, content-type, accept',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        competitionId : this.state.competitionId,
        name: this.state.name,
        date: this.state.date,
        timeStart : this.state.timeStart,
        timeFinish: this.state.timeFinish,
        sequenceNuber: this.state.sequenceNuber
      })
    }).then(res=>{
      console.log(res);
      this.setState({name: '', date: '', timeStart: '', timeFinish: '', sequenceNuber: '', competitionId: ''});
      console.log(this.state);
      this.checkFieldsEmpty();
      res.ok ? console.log('success') : console.warn('something gone wrong');
    });
    e.preventDefault();
  };

  updateName(e) {
    // this.checkFieldsEmpty() //можно проверять здесь
    this.setState( {name: e.target.value} );
  }

  updateTimeStart(e) {
    // this.checkFieldsEmpty()
    this.setState( {timeStart: e.target.value} )
  }

  updateTimeFinish(e) {
    // this.checkFieldsEmpty()
    this.setState( {timeFinish: e.target.value} )
  }

  updateDate(e) {
    // this.checkFieldsEmpty()
    this.setState( {date: e.target.value} )
  }

  updateSequenceNuber(e) {
    // this.checkFieldsEmpty()
    this.setState( {sequenceNuber: e.target.value} )
  }

  updateCompetitionId(e) {
    // this.checkFieldsEmpty()
    this.setState( {competitionId: this.props.id} )
    console.log(this.state.competitionId)
  }


  checkFieldsEmpty = () => {
    if ((this.state.name.length&&this.state.timeStart.length&&this.state.timeFinish.length&&this.state.date.length&&this.state.sequenceNuber.length) === 0) {
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
    if (this.state.competitionId === null){this.setState( {competitionId: this.props.id} )}
    return (
        <div className="createComp marginTopStandart">
          <form onSubmit={this.handleSubmit} className='positionInput'>
            <div className='textInput width_input'>
                <h2>Create day</h2>
                <p>Name</p>
                <p><input id='inputName' className="cardCompForm" placeholder = "Name competition"
                        value={this.state.name}
                        onChange={e => this.updateName(e)}/></p>
                <p>Date</p>
                <p><input id='inputDate' className="cardCompForm" placeholder = "DD-MM-YYYY"
                        value={this.state.date}
                        onChange={e => this.updateDate(e)}/></p>
                <p>Time Start</p>
                <p><input id='inputTimeStart' className="cardCompForm" placeholder = "HH-MM-SS"
                        value={this.state.dateStart}
                        onChange={e => this.updateTimeStart(e)}/></p>
                <p>Time Finish</p>
                <p><input id='inpuTimeFinish' className="cardCompForm" placeholder = "HH-MM-SS"
                        value={this.state.dateFinish}
                        onChange={e => this.updateTimeFinish(e)}/></p>
                <p>Sequence Nuber</p>
                <p><input id='inputSequenceNuber' className="cardCompForm" placeholder = "Number day"
                        value={this.state.sequenceNuber}
                        onChange={e => this.updateSequenceNuber(e)}/></p>
                <p>Competition Id</p>
                <p id='inputCompetitionId' className="cardCompForm" placeholder = "Number day"
                        value={this.state.competitionId}
                        onChange={e => this.updateCompetitionId(e)}></p>
            </div>
            <div>
              <button type="submit" className="button" disabled={false}>Create</button>
              {/*<button type="submit" className="button" disabled={this.state.submitButtonDisabled}>Create</button>*/}
            </div>
          </form>
        </div>
    )
  }
}

export default CreateDay;

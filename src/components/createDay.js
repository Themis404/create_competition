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

  updateCompetitionId() {
    this.setState( {competitionId: this.props.id} )
    console.log(this.state.competitionId)
  }

  render() {
    if (this.reload) {
      this.reload = false;
      return <Redirect to={this.redirect} push={true}/>;
    }
    return (
        <div className="col-md-12">
        <button onClick={() => this.goToState('/competition/' + this.props.id)} className='btn btn-warning col-md-2 noneFloat'>Back</button>
          <form onSubmit={this.handleSubmit} className=''>
            <h2 className="text-center col-md-12 marginTopStandart">Create day</h2>
            <h5><p className='col-md-12 nonePadding marginTopStandart'>Name</p></h5>
            <input required name='name' className="form-control" placeholder = "NAME DAY"
                    value={this.state.name}
                    onChange={ e => this.updateName(e)}></input>
            <h5><p className='col-md-12 nonePadding marginTopStandart'>Date</p></h5>
            <input required type='date' name='date'className="form-control" placeholder = "DD-MM-YYYY"
                    value={this.state.date}
                    onChange={ e => this.updateDate(e)}></input>
            <h5><p className='col-md-12 nonePadding marginTopStandart'>Time Start</p></h5>
            <input required type='time' name='timeStart' className="form-control" placeholder = "HH-MM"
                    value={this.state.dateStart}
                    onChange={ e => this.updateTimeStart(e)}></input>
            <h5><p className='col-md-12 nonePadding marginTopStandart'>Time Finish</p></h5>
            <input required type='time' name='timeFinish' className="form-control" placeholder = "HH-MM"
                    value={this.state.dateFinish}
                    onChange={ e => this.updateTimeFinish(e)}></input>
            <h5><p className='col-md-12 nonePadding marginTopStandart'>Sequence Nuber</p></h5>
            <input required name='numberDay' className="form-control" placeholder = "Number day"
                    value={this.state.sequenceNumber}
                    onChange={ e => this.updateSequenceNumber(e)}></input>
            <button type="submit" name='submit' className="btn btn-success col-md-3 col-md-offset-4 marginTopStandart marginBotStandart" >Create</button>
          </form>
        </div>
    )
  }
}

export default CreateDayForm;

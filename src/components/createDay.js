import React from 'react';
import {Redirect} from 'react-router-dom';
import BaseComponent from '../containers/baseComponent'
import ReactDOM from 'react-dom';
import * as actions from '../actions/days';

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
    })
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      competitionId: newProps.id
    })
  };

  handleSubmit = (e) => {
<<<<<<< HEAD
=======
    e.preventDefault();
>>>>>>> d1c141dea0890f131ee85ebfb9a485790b8c8143
    actions.createDay({
      competitionId: this.props.id,
      name: this.state.name,
      date: this.state.date,
      timeStart: this.state.timeStart,
      timeFinish: this.state.timeFinish,
      sequenceNumber: this.state.sequenceNumber
<<<<<<< HEAD
    }).then(res => this.goToState(`/competition/${this.props.id}`));};
=======
    }).then(res => {
      this.goToState(`/competition/${this.props.id}`);
    });
  };



>>>>>>> d1c141dea0890f131ee85ebfb9a485790b8c8143

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

  updateCompetitionId(e) {
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
          <form onSubmit={e => this.handleSubmit(e)} className=''>
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
                    value={this.state.timeStart}
                    onChange={ e => this.updateTimeStart(e)}></input>
            <h5><p className='col-md-12 nonePadding marginTopStandart'>Time Finish</p></h5>
            <input required type='time' name='timeFinish' className="form-control" placeholder = "HH-MM"
                    value={this.state.timeFinish}
                    onChange={ e => this.updateTimeFinish(e)}></input>
            <h5><p className='col-md-12 nonePadding marginTopStandart'>Sequence Number</p></h5>
            <input required name='numberDay'  type='number' className="form-control" placeholder = "Number day"
                    value={this.state.sequenceNumber}
                    onChange={ e => this.updateSequenceNumber(e)}></input>
                  <button type="submit" className="btn btn-success col-md-3 col-md-offset-4 marginTopStandart marginBotStandart" >Create</button>
          </form>
        </div>
    )
  }
}

export default CreateDayForm;

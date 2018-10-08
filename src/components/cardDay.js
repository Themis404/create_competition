import React from 'react';
import BaseComponent from '../containers/baseComponent';
import { Redirect } from 'react-router-dom';
import * as actions from '../actions/days';

class CardDay extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      content: [],
      idDay: this.props.idDay,
      competitionId: this.props.id
    };
  }

  componentDidMount() {
    this.getCompetitionInfo();
  }

  getCompetitionInfo = () => {
    actions.getDaysCard({
      competitionDayId: this.state.idDay
    }).then((content) => {
          this.setState({
            content: content
          });
        });
        console.log(this.state);
  }

  deleteDay = (e) => {
    console.log(this.state);
    e.preventDefault();
    actions.daleteDayCard({
      dayId: this.state.idDay,
    }).then(res => {
      this.goToState(`/competition/${this.state.competitionId}`);
    });
  }

  render() {
    if (this.reload) {
        this.reload = false;
        return <Redirect to={this.redirect} push={true} />;
    }
    return (
      <form className='col-md-12 nonePadding'>
        <button 
            className='btn btn-warning row-md-1 col-md-3' 
            onClick={() => this.goToState('/competition/'+this.state.competitionId)}>
            Back
        </button>
        <button 
            className='btn btn-danger col-md-3 noneFloat col-md-offset-6 '
            onClick={e => this.deleteDay(e)}>
            Delete
        </button>
        <div>
          <h2 className="text-center col-md-12 marginTopStandart">Card day</h2>
          <h5><p className='col-md-12 nonePadding'>Name</p></h5>
          <input 
              className="form-control" 
              value={this.state.content.name}>
          </input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Date</p></h5>
          <input 
              type='date' 
              className="form-control" 
              value={this.state.content.date}>
          </input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Time start</p></h5>
          <input 
              type='time' 
              className="form-control" 
              value={this.state.content.timeStart}>
          </input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Time finish</p></h5>
          <input 
              type='time' 
              className="form-control" 
              value={this.state.content.timeFinish}>
          </input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Number day</p></h5>
          <input 
              className="form-control" 
              value={this.state.content.sequenceNumber} 
              placeholder = "beginner/tourist/pro" ></input>
        </div>
        <button 
            className='btn btn-success col-md-4 col-md-offset-4 marginTopStandart marginBotStandart' 
            onClick={() => this.goToState(
              '/competition/'+this.state.competitionId+'/day/'+this.state.content.id+'/create-point'
            )}>
            <span className='fas fa-plus'></span> 
            Create point
        </button>
      </form>
    );
  }
}

export default CardDay;

import React from 'react'
import BaseComponent from '../containers/baseComponent'
import { Redirect } from 'react-router-dom'
import * as actions from '../actions/getDays';

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
        console.log(this.state)
  }

  render() {
    if (this.reload) {
        this.reload = false;
        return <Redirect to={this.redirect} push={true} />;
    }

    return (
        <form className='col-md-12 nonePadding'>
          <button onClick={() => this.goToState('/competition/'+this.state.competitionId)} className='btn btn-warning row-md-1 col-md-3'>Back</button>
          <div>
            <h2 className="text-center col-md-12 marginTopStandart">Card day</h2>
            <h5><p className='col-md-12 nonePadding'>Name</p></h5>
            <input className="form-control" value={this.state.content.name}></input>
            <h5><p className='col-md-12 nonePadding marginTopStandart'>Date</p></h5>
            <input type='number' className="form-control" value={this.state.content.date}></input>
            <h5><p className='col-md-12 nonePadding marginTopStandart'>Time start</p></h5>
            <input className="form-control" value={this.state.content.timeStart}></input>
            <h5><p className='col-md-12 nonePadding marginTopStandart'>Time finish</p></h5>
            <input type='date' className="form-control" value={this.state.content.timeFinish}></input>
            <h5><p className='col-md-12 nonePadding marginTopStandart'>Vehicle type</p></h5>
            <input className="form-control" value={this.state.content.vehicleType} placeholder = "moto/atv" ></input>
            <h5><p className='col-md-12 nonePadding marginTopStandart'>Number day</p></h5>
            <input className="form-control" value={this.state.content.sequenceNumber} placeholder = "beginner/tourist/pro" ></input>
          </div>
          /*<button onClick={() => this.goToState('/competition/'+this.state.content.id+'/application')} className='btn btn-success col-md-4 col-md-offset-4 marginTopStandart marginBotStandart'>Save</button>*/
      </form>
    )
  }
}

export default CardDay;
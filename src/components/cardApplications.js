import React from 'react'
import BaseComponent from '../containers/baseComponent'
import { Redirect } from 'react-router-dom'
import * as actions from '../actions/getApplications'


class CardApplications extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      content: [],
      idParticipants: this.props.idParticipants
    };
  }

  componentDidMount() {
    this.getCompetitionInfo();
  }

  getCompetitionInfo = () => {
    actions.getApplicationsCard({
      participantsId: this.state.idParticipants
    }).then((content) => {
          this.setState({
            content: content
          });
        });
        console.log(this.state)
  }

  handleSubmit = () => {
    actions.saveApplicationStatus({
      participantsId: this.state.idParticipants
    }).then((content) => {
          this.setState({
            applicationStatus: this.value.applicationStatus
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
            <form onSubmit={this.handleSubmit} className='col-md-12 nonePadding'>
              <button onClick={() => this.goToState('/competition/'+this.state.content.competitionId+'/application')} className='btn btn-warning row-md-1 col-md-3'>Back</button>
              <div>
                <h2 className="text-center col-md-12 marginTopStandart">Card application</h2>
                <h5><p className='col-md-12  nonePadding marginTopStandart'>Name</p></h5>
                <input className="form-control" value={this.state.content.name}></input>
                <h5><p className='col-md-12  nonePadding marginTopStandart'>Surname</p></h5>
                <input className="form-control" value={this.state.content.surname}></input>
                <h5><p className='col-md-12  nonePadding marginTopStandart'>Father name</p></h5>
                <input className="form-control" value={this.state.content.fatherName}></input>
                <h5><p className='col-md-12 nonePadding marginTopStandart'>Gender</p></h5>
                <input className="form-control" value={this.state.content.gender}></input>
                <h5><p className='col-md-12 nonePadding marginTopStandart'>Age</p></h5>
                <input type='number' className="form-control" value={this.state.content.age}></input>
                <h5><p className='col-md-12 nonePadding marginTopStandart'>Vehicle type</p></h5>
                <input className="form-control" value={this.state.content.vehicleType} placeholder = "moto/atv" ></input>
                <h5><p className='col-md-12 nonePadding marginTopStandart'>Recing astery</p></h5>
                <input className="form-control" value={this.state.content.racingMastery} placeholder = "beginner/tourist/pro" ></input>
                <h5><p className='col-md-12 nonePadding marginTopStandart'>Email</p></h5>
                <input type='email' className="form-control" value={this.state.content.email}></input>
                <h5><p className='col-md-12 nonePadding marginTopStandart'>Phone</p></h5>
                <input type='number' className="form-control" value={this.state.content.phone}></input>
                <h5><p className='col-md-12 nonePadding marginTopStandart'>Emergency Phone</p></h5>
                <input type='number' className="form-control" value={this.state.content.emergencyPhone}></input>
                <h5><p className='col-md-12 nonePadding marginTopStandart'>Status</p></h5>
                <input className="form-control" value={this.state.content.applicationStatus} placeholder = "+/-" ></input>
              </div>
              <button type="submit" className='btn btn-success col-md-4 col-md-offset-4 marginTopStandart marginBotStandart'>Save</button>
          </form>
      )
    }
}

export default CardApplications;

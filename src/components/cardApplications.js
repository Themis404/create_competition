import React from 'react'
import BaseComponent from '../containers/baseComponent'
import { Redirect } from 'react-router-dom'
import * as actions from '../actions/applications'


class CardApplications extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      content: [],
      idParticipants: this.props.idParticipants,
      activeButton: false
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

  putApplicationStatus = () => {
    actions.saveApplicationStatus({
      participantsId: this.state.idParticipants
    }).then((content) => {
          this.setState({
            applicationStatus: this.state.content.applicationStatus
          });
        });

        this.getCompetitionInfo();
  }

  activeButtons = () => {
      return this.state.content.applicationStatus !== 'NOT_PROCESSED' ? true : false
  }

  acceptedApplication = () => {
    this.setState({
      applicationStatus: this.state.content.applicationStatus === 'NOT_PROCESSED' ? 'ACCEPTED' : this.state.content.applicationStatus,
      activeButton: this.state.activeButton === false ? true : false
    }, () => this.putApplicationStatus())
  }

  deniedApplication = () => {
    this.setState({
      applicationStatus: this.state.content.applicationStatus === 'NOT_PROCESSED' ? 'DENIED' : this.state.content.applicationStatus,
      activeButton: this.state.activeButton === false ? true : false
    }, () => this.putApplicationStatus())
  }

  render() {
    if (this.reload) {
        this.reload = false;
        return <Redirect to={this.redirect} push={true} />;
    }
    return (
          <form className='col-md-12 nonePadding'>
            <button onClick={() => this.goToState('/competition/'+this.state.content.competitionId+'/application')} className='btn btn-warning row-md-1 col-md-3'>Back</button>
            <button type="submit" className='btn btn-success row-md-1 col-md-3 col-md-offset-6'>Save</button>
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
            <button className='btn btn-success col-md-4 col-md-offset-1 marginTopStandart marginBotStandart' disabled={this.state.activeButton === false ? this.activeButtons() : true } onClick={() => this.acceptedApplication()}>Принять</button>
            <button className='btn btn-danger col-md-4 col-md-offset-2 marginTopStandart marginBotStandart'  disabled={this.state.activeButton === false ? this.activeButtons() : true } onClick={() => this.deniedApplication()}>Отклонить</button>
        </form>
    )
  }
}

export default CardApplications;

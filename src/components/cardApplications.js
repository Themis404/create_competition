import React from 'react';
import BaseComponent from '../containers/baseComponent';
import { Redirect } from 'react-router-dom';
import * as actions from '../actions/applications';
import * as actionsTag from '../actions/tags';

class CardApplications extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      application: [],
      tags: [],
      applicationId: this.props.applicationId,
      competitionId: this.props.id,
      activeButton: false,
      uuid: '',
      applicationStatus: ''
    };
  }

  componentDidMount() {
    this.getApplicationInfo();
    this.getTagFree();
  }

  getApplicationInfo = () => {
    actions.getApplicationsCard({
      applicationId: this.state.applicationId
    }).then((content) => {
          this.setState({
            application: content
          });
        });
    console.log(this.state);
  }

  putApplicationStatus = () => {
    actions.saveApplicationStatus({
        applicationStatus: this.state.applicationStatus,
        applicationId: this.state.applicationId
    }).then((content) => {
          this.setState({
            applicationStatus: ''
          });
       });
    this.getApplicationInfo();
  }

  getTagFree = () => {
    actionsTag.getTagParticipant(
    ).then((content) => {
      this.setState({
        tags: content
      });
    });
  }

  postTagFree = (e) => {
    e.preventDefault();
    actionsTag.postTagParticipant({
      uuid: this.state.uuid,
      applicationId: this.state.applicationId
    }).then(res => {this.goToState(`/competition/${this.props.id}/application`)});
  };

  activeButtons = () => {
    return this.state.application.applicationStatus !== 'NOT_PROCESSED' ? true : false;
  }

  acceptedApplication = () => {
    this.setState({
      applicationStatus: 'ACCEPTED',
      activeButton: this.state.activeButton === false ? true : false
    }, () => this.putApplicationStatus(), console.log(this.state));
  }

  deniedApplication = () => {
    this.setState({
      applicationStatus: 'DENIED',
      activeButton: this.state.activeButton === false ? true : false
    }, () => this.putApplicationStatus(), console.log(this.state));
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
            onClick={() => this.goToState('/competition/'+this.props.id+'/application')}>
            Back
        </button>
        <div>
          <h2 className="text-center col-md-12 marginTopStandart">Card application</h2>
          <h5><p className='col-md-12  nonePadding marginTopStandart'>Name</p></h5>
          <input className="form-control"
                 value={this.state.application.name}></input>
          <h5><p className='col-md-12  nonePadding marginTopStandart'>Surname</p></h5>
          <input className="form-control"
                 value={this.state.application.surname}></input>
          <h5><p className='col-md-12  nonePadding marginTopStandart'>Father name</p></h5>
          <input className="form-control"
                 value={this.state.application.fatherName}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Gender</p></h5>
          <input className="form-control"
                 value={this.state.application.gender}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Age</p></h5>
          <input type='number' className="form-control"
                 value={this.state.application.age}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Vehicle type</p></h5>
          <input className="form-control" placeholder = "moto/atv"
                 value={this.state.application.vehicleType}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Recing astery</p></h5>
          <input className="form-control" placeholder = "beginner/tourist/pro"
                 value={this.state.application.racingMastery}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Email</p></h5>
          <input type='email' className="form-control"
                 value={this.state.application.email}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Phone</p></h5>
          <input type='number' className="form-control"
                 value={this.state.application.phone}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Emergency Phone</p></h5>
          <input type='number' className="form-control"
                 value={this.state.application.emergencyPhone}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Status</p></h5>
          <input className="form-control" placeholder = "+/-"
                 value={this.state.application.applicationStatus}></input>
          {
            !!(this.state.application.applicationStatus === 'ACCEPTED')&&
              <form  onSubmit={e => this.postTagFree(e)}>
                <h5><p className='col-md-12 nonePadding marginTopStandart'>Tag</p></h5>
                <p>
                  <select required className="form-control" onChange={event => this.setState({uuid: event && event.target && event.target.value ? event.target.value : null})} value={this.state.uuid ? this.state.uuid : ''}>
                    {
                      !!this.state.tags.content && this.state.tags.content.map((contentTag, key) =>
                      <option key={key} className="" value={contentTag.id}>{contentTag.id}</option>)
                    }
                  </select>
                </p>
                <h5><p className='col-md-12 nonePadding marginTopStandart'>Number participant</p></h5>
                <input disabled type='number'className="form-control" placeholder = "Number participant"></input>
                <button type="submit" className='btn btn-success row-md-1 col-md-4 col-md-offset-4'>Save</button>
              </form>
          }
        </div>
        <button className='btn btn-success col-md-4 col-md-offset-1 marginTopStandart marginBotStandart' 
            disabled={this.state.activeButton === false ? this.activeButtons() : true } 
            onClick={() => this.acceptedApplication()}>
            Принять</button>
        <button className='btn btn-danger col-md-4 col-md-offset-2 marginTopStandart marginBotStandart' 
            disabled={this.state.activeButton === false ? this.activeButtons() : true } 
            onClick={() => this.deniedApplication()}>
            Отклонить</button>
      </form>
    );
  }
}

export default CardApplications;

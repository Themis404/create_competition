import React from 'react'
import BaseComponent from '../containers/baseComponent'
import { Redirect } from 'react-router-dom'
import * as actions from '../actions/applications'
import * as actionsTag from '../actions/tags'

class CardApplications extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      application: [],
      tags: [],
      idParticipants: this.props.idParticipants,
      competitionId: this.props.id,
      activeButton: false,
      tagId: ''
    };
  }

  componentDidMount() {
    this.getApplicationInfo();
    this.getTagFree();
  }

  getApplicationInfo = () => {
    actions.getApplicationsCard({
      participantsId: this.state.idParticipants
    }).then((content) => {
          this.setState({
            application: content
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
      tagId: this.state.tagId,
      participantId: this.state.idParticipants
    }).then(res => {this.goToState(`/competition/${this.props.id}/application`)
    });
  };

  activeButtons = () => {
      return this.state.application.applicationStatus !== 'NOT_PROCESSED' ? true : false
  }

  acceptedApplication = () => {
    this.setState({
      applicationStatus: this.state.application.applicationStatus === 'NOT_PROCESSED' ? 'ACCEPTED' : this.state.application.applicationStatus,
      activeButton: this.state.activeButton === false ? true : false
    }, () => this.putApplicationStatus())
  }

  deniedApplication = () => {
    this.setState({
      applicationStatus: this.state.application.applicationStatus === 'NOT_PROCESSED' ? 'DENIED' : this.state.application.applicationStatus,
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
            <button onClick={() => this.goToState('/competition/'+this.props.id+'/application')} className='btn btn-warning row-md-1 col-md-3'>Back</button>
            <div>
              <h2 className="text-center col-md-12 marginTopStandart">Card application</h2>
              <h5><p className='col-md-12  nonePadding marginTopStandart'>Name</p></h5>
              <input className="form-control" value={this.state.application.name}></input>
              <h5><p className='col-md-12  nonePadding marginTopStandart'>Surname</p></h5>
              <input className="form-control" value={this.state.application.surname}></input>
              <h5><p className='col-md-12  nonePadding marginTopStandart'>Father name</p></h5>
              <input className="form-control" value={this.state.application.fatherName}></input>
              <h5><p className='col-md-12 nonePadding marginTopStandart'>Gender</p></h5>
              <input className="form-control" value={this.state.application.gender}></input>
              <h5><p className='col-md-12 nonePadding marginTopStandart'>Age</p></h5>
              <input type='number' className="form-control" value={this.state.application.age}></input>
              <h5><p className='col-md-12 nonePadding marginTopStandart'>Vehicle type</p></h5>
              <input className="form-control" value={this.state.application.vehicleType} placeholder = "moto/atv" ></input>
              <h5><p className='col-md-12 nonePadding marginTopStandart'>Recing astery</p></h5>
              <input className="form-control" value={this.state.application.racingMastery} placeholder = "beginner/tourist/pro" ></input>
              <h5><p className='col-md-12 nonePadding marginTopStandart'>Email</p></h5>
              <input type='email' className="form-control" value={this.state.application.email}></input>
              <h5><p className='col-md-12 nonePadding marginTopStandart'>Phone</p></h5>
              <input type='number' className="form-control" value={this.state.application.phone}></input>
              <h5><p className='col-md-12 nonePadding marginTopStandart'>Emergency Phone</p></h5>
              <input type='number' className="form-control" value={this.state.application.emergencyPhone}></input>
              <h5><p className='col-md-12 nonePadding marginTopStandart'>Status</p></h5>
              <input className="form-control" value={this.state.application.applicationStatus} placeholder = "+/-" ></input>
              {
                !!(this.state.application.applicationStatus === 'ACCEPTED')&&
                    <form  onSubmit={e => this.postTagFree(e)}>
                      <h5><p className='col-md-12 nonePadding marginTopStandart'>Tag</p></h5>
                      <p>
                        <select required className="form-control" onChange={event => this.setState({tagId: event && event.target && event.target.value ? event.target.value : null})} value={this.state.tagId ? this.state.tagId : ''}>
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
            <button className='btn btn-success col-md-4 col-md-offset-1 marginTopStandart marginBotStandart' disabled={this.state.activeButton === false ? this.activeButtons() : true } onClick={() => this.acceptedApplication()}>Принять</button>
            <button className='btn btn-danger col-md-4 col-md-offset-2 marginTopStandart marginBotStandart'  disabled={this.state.activeButton === false ? this.activeButtons() : true } onClick={() => this.deniedApplication()}>Отклонить</button>
        </form>
    )
  }
}
export default CardApplications;

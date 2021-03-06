import React from 'react';
import BaseComponent from '../containers/baseComponent';
import { Redirect } from 'react-router-dom';
import * as actionsCompetitions from '../actions/competitions';

class CardCompetition extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      content: [],
      competitionId: this.props.id
    };
  }

  componentDidMount() {
    this.getCompetitionInfo();
  }

  getCompetitionInfo = () => {
    console.log(this.props);
    fetch('https://afternoon-woodland-86438.herokuapp.com/competitions/' +  this.props.id)
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then((content) => {
          console.warn(content);
          this.setState({
            content: content
          });
        });
    console.log(this.state);
  }

  putAccessStatus = (e) => {
    console.log(this.state);
    e.preventDefault();
    actionsCompetitions.saveAccessStatus({
      competitionId: this.state.competitionId,
      accessStatus: 'ALIVE'
      }).then(res => {
        console.log(res);
        this.setState({accessStatus: ''});
          console.log(this.state);
      });
  }

  deleteCompetition = (e) => {
    console.log(this.state);
    e.preventDefault();
    actionsCompetitions.deleteCopmetitionCard({
      competitionId: this.state.competitionId,
    }).then(res => {
      this.goToState('/main');
    });
  }

  render() {
    if (this.reload) {
        this.reload = false;
        return <Redirect to={this.redirect} push={true} />;
    }

    return (
      <form className='col-md-12 nonePadding'>
        <div className='btn-group form-control'>
          <button className='btn btn-warning col-md-3 noneFloat' 
              onClick={() => this.goToState('/main')}>
              Back
          </button>
          <button className='btn btn-success noneFloat col-md-3' 
              onClick={e => this.putAccessStatus(e)} type='submit'>
              Activation
          </button>
          <button className='btn btn-info col-md-3 noneFloat' 
              onClick={() => this.goToState('/competition/'+this.state.content.id+'/application')}>
              Applications
          </button>
          <button className='btn btn-danger col-md-3 noneFloat' 
              onClick={e =>   this.deleteCompetition(e)}>
              Delete
          </button>
        </div>
        <div>
          <h2 className="text-center col-md-12 marginTopStandart">Card competition</h2>
          <h5><p className='col-md-12 nonePadding'>Name</p></h5>
          <input className="form-control"
                 value={this.state.content.name}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Description</p></h5>
          <textarea rows = "4" className="form-control"
                    value={this.state.content.description}></textarea>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Date first</p></h5>
          <input type='date' className="form-control"
                 value={this.state.content.dateStart}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Date last</p></h5>
          <input type='date' className="form-control"
                 value={this.state.content.dateFinish}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Date start for applications</p></h5>
          <input type='date' className="form-control"
                 value={this.state.content.registrationStart} placeholder = "DD-MM-YYYY" ></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Date deadline for applications</p></h5>
          <input type='date' className="form-control"
                 value={this.state.content.registrationEnd} placeholder = "DD-MM-YYYY" ></input>
        </div>
        <button  className='btn btn-success col-md-4 col-md-offset-4 marginTopStandart marginBotStandart' 
            onClick={() => this.goToState('/competition/'+this.state.content.id+'/create-day')}>
            <span className='fas fa-plus'></span>
            Create day
        </button>
      </form>
    );
  }
}

export default CardCompetition;

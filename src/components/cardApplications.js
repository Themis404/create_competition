import React from 'react'
import BaseComponent from '../containers/baseComponent'
import { Redirect } from 'react-router-dom'

class CardApplications extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      content: []
    };
  }

  componentDidMount() {
    this.getCompetitionInfo();
  }

  getCompetitionInfo = () => {
      console.log(this.props);
      fetch('https://afternoon-woodland-86438.herokuapp.com/competitions/' + this.props.id + '/applications/' + this.props.applicationId)
          .then(response => {
            console.log(response);
            return response.json()
          })
          .then((content) => {
            console.warn(content);
            this.setState({
              content: content
            });
          });
      console.log(this.state);
    }

    render() {
      if (this.reload) {
          this.reload = false;
          return <Redirect to={this.redirect} push={true} />;
      }

      return (
            <form className='col-md-12 nonePadding'>
              <button onClick={() => this.goToState('/competition/'+this.state.content.id+'/application')} className='btn btn-warning row-md-1 col-md-3'>Back</button>
              <div>
                <h2 className="text-center col-md-12 marginTopStandart">Card application</h2>
                <h5><p className='col-md-12 nonePadding'>FIO</p></h5>
                <input className="form-control" value={this.state.content.name, this.state.content.surname, this.state.content.fatherName}></input>
                <h5><p className='col-md-12 nonePadding marginTopStandart'>Age</p></h5>
                <input type='number' className="form-control" value={this.state.content.age}></input>
                <h5><p className='col-md-12 nonePadding marginTopStandart'>Gender</p></h5>
                <input className="form-control" value={this.state.content.gender}></input>
                <h5><p className='col-md-12 nonePadding marginTopStandart'>Date create application</p></h5>
                <input type='date' className="form-control" value={this.state.content.dateCreateApplication}></input>
                <h5><p className='col-md-12 nonePadding marginTopStandart'>Vehicle type</p></h5>
                <input className="form-control" value={this.state.content.vehicleType} placeholder = "moto/atv" ></input>
                <h5><p className='col-md-12 nonePadding marginTopStandart'>Recing astery</p></h5>
                <input className="form-control" value={this.state.content.recingMastery} placeholder = "beginner/tourist/pro" ></input>
                <h5><p className='col-md-12 nonePadding marginTopStandart'>Status</p></h5>
                <input className="form-control" value={this.state.content.statusApplication} placeholder = "+/-" ></input>
              </div>
              <button onClick={() => this.goToState('/competition/'+this.state.content.id+'/application')} className='btn btn-success col-md-4 col-md-offset-4 marginTopStandart marginBotStandart'>Save</button>
          </form>
      )
    }
}

export default CardApplications;

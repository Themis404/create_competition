import React from 'react'
import BaseComponent from '../containers/baseComponent'
import { Redirect } from 'react-router-dom'

class CardCompetition extends BaseComponent {

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
      fetch('https://afternoon-woodland-86438.herokuapp.com/competitions/' +  this.props.id)
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

    putAccessStatus = (e) => {
      fetch('https://afternoon-woodland-86438.herokuapp.com/competitions/' +  this.props.id, {
      method: 'PUT',
      headers: {
        'Access-Control-Allow-Headers': 'origin, content-type, accept',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        accessStatus: 'ALIVE'})
      }).then(res => {
      this.setState({ accessStatus: ''});
      console.log(this.state);
      res.ok ? console.log('success') : console.warn('something gone wrong');
    });
    };

    render() {
      if (this.reload) {
          this.reload = false;
          return <Redirect to={this.redirect} push={true} />;
      }

      return (
            <form className='col-md-12 nonePadding'>
              <button onClick={() => this.goToState('/main')} className='btn btn-warning col-md-2 noneFloat'>Back</button>
              <button onClick={() => this.putAccessStatus()} type='submit' className='btn btn-success noneFloat col-md-3 col-md-offset-2'>Activation</button>
              <button onClick={() => this.goToState('/competition/'+this.state.content.id+'/application')} className='btn btn-info col-md-3 noneFloat col-md-offset-2 '>Applications</button>
              <div>
                <h2 className="text-center col-md-12 marginTopStandart">Card competition</h2>
                <h5><p className='col-md-12 nonePadding'>Name</p></h5>
                <input className="form-control" value={this.state.content.name}></input>
                <h5><p className='col-md-12 nonePadding marginTopStandart'>Description</p></h5>
                <textarea rows = "4" className="form-control" value={this.state.content.description}></textarea>
                <h5><p className='col-md-12 nonePadding marginTopStandart'>Date first</p></h5>
                <input type='date' className="form-control" value={this.state.content.dateStart}></input>
                <h5><p className='col-md-12 nonePadding marginTopStandart'>Date last</p></h5>
                <input type='date' className="form-control" value={this.state.content.dateFinish}></input>
                <h5><p className='col-md-12 nonePadding marginTopStandart'>Date start for applications</p></h5>
                <input type='date' className="form-control" value={this.state.content.registrationStart} placeholder = "DD-MM-YYYY" ></input>
                <h5><p className='col-md-12 nonePadding marginTopStandart'>Date deadline for applications</p></h5>
                <input type='date' className="form-control" value={this.state.content.registrationEnd} placeholder = "DD-MM-YYYY" ></input>
              </div>
              <button onClick={() => this.goToState('/competition/'+this.state.content.id+'/create-day')} className='btn btn-success col-md-4 col-md-offset-4 marginTopStandart marginBotStandart'>Create day</button>
          </form>
      )
    }
}

export default CardCompetition;

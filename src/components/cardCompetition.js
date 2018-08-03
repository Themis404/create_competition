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

    render() {
      if (this.reload) {
          this.reload = false;
          return <Redirect to={this.redirect} push={true} />;
      }

      return (
          <div className="createComp marginTopStandart marginBotStandart">
            <form className='positionInput'>
              <div className='textInput width_input'>
                <h2>Card competition</h2>
                <p>Name</p>
                <p> <input className="cardCompForm" value={this.state.content.name}/></p>
                <p>Description</p>
                <p> <textarea rows = "4" className="cardCompForm" value={this.state.content.description}/></p>
                <p>Date first</p>
                <p> <input type='date' className="cardCompForm" value={this.state.content.dateStart}/></p>
                <p>Date last</p>
                <p> <input type='date' className="cardCompForm" value={this.state.content.dateFinish}/></p>
                <p>Date deadline for applications</p>
                <p> <input type='date' className="cardCompForm" value={this.state.content.registrationEndTimestamp} placeholder = "DD-MM-YYYY" /></p>
              </div>
            </form>
            <button onClick={() => this.goToState('/competition/'+this.state.content.id+'/create-day')} className='button flex-container'>Create day</button>
          </div>
      )
    }
}

export default CardCompetition;

import React from 'react'
import BaseComponent from '../containers/baseComponent'
import { Redirect } from 'react-router-dom';
import CompetitionTable from './CompetitionTable'

class CardCompetition extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      content: {}
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

    //потооооом доделать таблицу дней
    getDaysCompetition = () => {
      fetch('https://afternoon-woodland-86438.herokuapp.com/competitions/' +  this.props.id +'/days/')
          .then(response => {
            console.log(response);
            return response.json()
          })
          .then((contentDays) => {
            console.warn(contentDays);
            this.setState({
              contentDays: contentDays
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
          <div className="createComp marginTopStandart">
            <form className='positionInput'>
              <div className='textInput width_input'>
                <h2>Card competition</h2>
                <p>Name</p>
                <p> <input className="cardCompForm" value={this.state.content.name}/></p>
                <p>Description</p>
                <p> <textarea rows = "4" className="cardCompForm" value={this.state.content.description}/></p>
                <p>Date first</p>
                <p> <input className="cardCompForm" value={this.state.content.dateStart}/></p>
                <p>Date last</p>
                <p> <input className="cardCompForm" value={this.state.content.dateFinish}/></p>
                <p>Date deadline for applications</p>
                <p> <input className="cardCompForm" placeholder = "YYYY-MM-DD" /></p>
                <p>Visible</p>
                <p> <input className="cardCompForm" value={this.state.content.visible}/></p>
              </div>
            </form>
          </div>
      )
    }
}

export default CardCompetition;

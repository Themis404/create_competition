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
      console.log(this.state);
      fetch('https://afternoon-woodland-86438.herokuapp.com/competitions/' +  1)
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
      // const contents = this.state.content;
      // let rows = undefined;
      // if (contents.content) {
      //   rows = contents.content.map((contentRow, key) =>
      //     <div key={key} className="tr">
      //       <body>
      //         <p  value={this.state.content.name}></p>
      //         <p   value={this.state.content.description}></p>
      //         <p   value={this.state.content.dateStart}></p>
      //         <p   value={this.state.content.dateFinish}></p>
      //       </body>
      //     </div>
      //   )
      // }

      return (
          // <div>
          //   <div>
          //   <tr >
          //     <td className="cardCompForm">{this.state.content.name}</td>
          //     <td className="cardCompForm">{this.state.content.description}</td>
          //     <td className="cardCompForm">{this.state.content.dateStart}</td>
          //     <td className="cardCompForm">{this.state.content.dateFinish}</td>
          //   </tr>
          //   </div>
          // </div>
          <div className="createComp width_input">
            <form className='positionInput'>
              <div className='textInput'>
                <p>Create competition:</p>
                <p>Name</p>
                <p> <input className="cardCompForm" value={this.state.content.name}/></p>
                <p>Description</p>
                <p> <input className="cardCompForm" value={this.state.content.description}/></p>
                <p>Date first</p>
                <p> <input className="cardCompForm" value={this.state.content.dateStart}/></p>
                <p>Date last</p>
                <p> <input className="cardCompForm" value={this.state.content.dateFinish}/></p>
                <p>Visible</p>
                <p> <input className="cardCompForm" value={this.state.content.visible}/></p>
              </div>
            </form>
            </div>
      )
    }
}
export default CardCompetition;

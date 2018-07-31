import React from 'react';
import BaseComponent from '../containers/baseComponent'
import { Redirect } from 'react-router-dom';

class CompetitionTable extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      content: [],
      valueSelect: ''
    };
  }

  componentDidMount() {
    this.getCompetitionInfo();
  }

  getCompetitionInfo = () => {
    fetch('https://afternoon-woodland-86438.herokuapp.com/competitions/list/' + this.state.valueSelect)
        .then(response => {
          console.log(response);
          return response.json()
        })
        .then((content) => {
          console.warn(content);
          this.setState({
            content: content,
          });
        });
    console.log(this.state);
  };

  selectCompetitionTabel = (e) => {
      this.setState( {valueSelect: e} )
      console.log(this.setState)
  }

  render() {
    if (this.reload) {
        this.reload = false;
        return <Redirect to={this.redirect} push={true} />;
    }
    const contents = this.state.content;
    let rows = undefined;
    if (contents.content) {
      rows = contents.content.map((contentRow, key) =>
          <tr key={key} className="tr">
            <td className="td" onClick={() =>  this.goToState('/competition/'+contentRow.id)}>{contentRow.name}</td>
            <td className="td">{contentRow.dateStart}</td>
            <td className="td">{contentRow.dateFinish}</td>
            {/* <td className="td">{contentRow.description}</td> */}
          </tr>
      )
    }

    return (
        <div className="flex-container width_tabel">
          <div className="positionButtonComp">
            <button onClick={() => this.goToState('/create-competition')} className='button marginBotStandart'>Create competition</button>
            <select>
              <option disabled>select by</option>
              <option value={ this.selectCompetitionTabel('name')}>name</option>
              <option >date start</option>
            </select>
            <button type="submit" className="button marginBotStandart">Update</button>
          </div>

          <table className="table">
            <tbody>
            <tr className="tr">
              <th className="th">NAME COMPETITION</th>
              <th className="th">DATE START COMPETITION</th>
              <th className="th">DATE END COMPETITION</th>
              {/* <th className="th">Description</th> */} 
            </tr>
            {rows}
            </tbody>
          </table>
        </div>
    )
  }
}

export default CompetitionTable;

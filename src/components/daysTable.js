import React from 'react';
import BaseComponent from '../containers/baseComponent'
import { Redirect } from 'react-router-dom';
import CompetitionTable from './CompetitionTable'

class DaysTable extends BaseComponent {

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
      fetch('https://afternoon-woodland-86438.herokuapp.com/competitions/' + this.props.id + '/days/list')
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
    };

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
              <td className="td" onClick={() =>  this.goToState('/competition/'+contentRow.id)}>{contentRow.date}</td>
              <td className="td">{contentRow.countPoints}</td>
            </tr>
        )
      }

      return (
          <div className="flex-container width_tabel">
            <table className="table">
              <tbody>
              <tr className="tr">
                <th className="th">DAY</th>
                <th className="th">POINTS</th>
              </tr>
              {rows}
              </tbody>
            </table>
          </div>
      )
    }
  }

  export default DaysTable;

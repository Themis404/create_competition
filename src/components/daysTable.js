import React from 'react';
import BaseComponent from '../containers/baseComponent'
import {Redirect} from 'react-router-dom';

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
    fetch('https://afternoon-woodland-86438.herokuapp.com/days/list?competitionId=' + this.props.id)
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
      return <Redirect to={this.redirect} push={true}/>;
    }
    const contents = this.state.content;
    let rows = undefined;
    if (contents.content) {
      rows = contents.content.map((contentRow, key) =>
          <tr key={key} className="">
            <td className=""
                onClick={() => this.goToState('/competition/' + contentRow.id)}>{contentRow.sequenceNumber}</td>
            <td className="" onClick={() => this.goToState('/competition/' + contentRow.id)}>{contentRow.name}</td>
            <td className="">{contentRow.countPoints}</td>
          </tr>
      )
    }

    return (
        <div className="row container col-md-centerl">
          <table className="table table-bordered table-striped">
            <tbody>
            <tr className="info active">
              <th className="">DAY</th>
              <th className="">NAME</th>
              <th className="">POINTS</th>
            </tr>
            {rows}
            </tbody>
          </table>
        </div>
    )
  }
}

export default DaysTable;

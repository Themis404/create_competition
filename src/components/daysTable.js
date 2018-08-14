import React from 'react';
import BaseComponent from '../containers/baseComponent'
import {Redirect} from 'react-router-dom';
import * as actionsDay from '../actions/getDays';
import * as actionsPoint from '../actions/getPoint';

class DaysTable extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      content: [],
      id: this.props.id,
      idDay: this.props.idDay
    };
  }

  componentDidMount() {
    this.getCompetitionInfo();
  }

  getCompetitionInfo = () => {
    actionsDay.getDaysTable({
      competitionId: this.state.id
    }).then((content) => {
          this.setState({
            content: content.content.map(day => {
              day.totalElements = 0;
              return day;
            })
          }, () => this.updateAllPoint());
        });
  }

  updateAllPoint() {
    this.state.content.forEach(day => {
      this.getPointInfo(day.id);
    });
  }

  getPointInfo = (dayId) => {
    actionsPoint.getPointTable({
      competitionDayId: dayId
    }).then((content) => {
          let days = this.state.content;
          days.forEach(day => {
            if (day.id === dayId) {
              day.totalElements = content.totalElements;
            }
          });
          this.setState({
            content: days
          });
        });
  }

  render() {
    if (this.reload) {
      this.reload = false;
      return <Redirect to={this.redirect} push={true}/>;
    }
    const contents = this.state.content;
    let rows = [];
    if (contents.length){
      rows = contents.map((contentRow, key) =>
          <tr key={key} className="">
            <td className="" onClick={() => this.goToState('/competition/' + contentRow.competitionId + '/day/'+contentRow.id)}>{contentRow.sequenceNumber}</td>
            <td className="" onClick={() => this.goToState('/competition/' + contentRow.competitionId + '/day/'+contentRow.id)}>{contentRow.name}</td>
            <td className="" onClick={() => this.goToState('/competition/' + contentRow.competitionId + '/day/'+contentRow.id)}>{contentRow.totalElements}</td>
          </tr>
      )}

    return (
        <div className="row container col-md-8 col-md-offset-2 nonePadding">
          <table className="table table-bordered table-striped table-hover">
            <thead>
            <tr className="info active">
              <th className="">DAY</th>
              <th className="">NAME</th>
              <th className="">POINTS</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
          </table>
        </div>
    )
  }
}

export default DaysTable;

import React from 'react';
import BaseComponent from '../containers/baseComponent';
import {Redirect} from 'react-router-dom';
import * as actionsDay from '../actions/days';
import * as actionsPoint from '../actions/points';

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
      dayId: this.state.idDay
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

  deleteDay = (e) => {
    console.log(this.state);
    e.preventDefault();
    actionsDay.daleteDayCard({
      competitionId: this.state.competitionId,
    }).then(res => {
      this.goToState('/competition/:id');
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
          <td className="" onClick={() => this.goToState('/competition/' + contentRow.competitionId + '/day/'+contentRow.id)}>{key+1}</td>
          <td className="" onClick={() => this.goToState('/competition/' + contentRow.competitionId + '/day/'+contentRow.id)}>{contentRow.date}</td>
          <td className="" onClick={() => this.goToState('/competition/' + contentRow.competitionId + '/day/'+contentRow.id)}>{contentRow.totalElements}</td>
          <button data-target="#ModalDialog" data-toggle="modal" id="btn-tooltip" type="button" class="btn btn-default" aria-label="Remove" title="Delete">
            <span  onClick={e => this.deleteDay(e)} class="glyphicon glyphicon-trash" aria-hidden="true"></span>
          </button>
        </tr>
      );
    }

    return (
      <div>
        <div className="mod">
          <div class="modal" id="ModalDialog" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Подтверждение</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>Вы действительно хотите удалить день?</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary">Да</button>
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row container col-md-8 col-md-offset-2 nonePadding">
          <table className="table table-striped table-hover">
            <thead>
              <tr className="info active">
                <th className="">№</th>
                <th className="">DATE</th>
                <th className="">POINTS</th>
                <th className=""></th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DaysTable;

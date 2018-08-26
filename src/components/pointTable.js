import React from 'react';
import BaseComponent from '../containers/baseComponent'
import {Redirect} from 'react-router-dom';
import * as actions from '../actions/points';

class PointTable extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      content: [],
      id: this.props.id,
      idDay: this.props.idDay,
      idPoint: this.props.idPoint
    };
  }

  componentDidMount() {
    this.getCompetitionInfo();
  }

  getCompetitionInfo = () => {
    actions.getPointTable({
    competitionDayId: this.state.idDay
    }).then((content) => {
          this.setState({
            content: content
          });
        });
        console.log(this.state)
  }

  deletePoint = (e) => {
    console.log(this.state);
    e.preventDefault();
    actions.daletePointCard({
      competitionId: this.state.competitionId,
    }).then(res => {this.goToState('/competition/:id/day/:idDay')})
    }

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
             <td className="" onClick={() => this.goToState('/competition/' + this.state.id + '/day/' + this.state.idDay + '/point/' + contentRow.id)}>{contentRow.sequenceNumber}</td>
             <td className="">{contentRow.name}</td>
            <td className="">{contentRow.placePointType}</td>
            <button data-target="#ModalDialog" data-toggle="modal" id="btn-tooltip" type="button" class="btn btn-default" aria-label="Remove" title="Delete">
              <span  onClick={e => this.deletePoint(e)} class="glyphicon glyphicon-trash" aria-hidden="true"></span>
            </button>
          </tr>
      )
    }

    return (
      <div> <div className="mod">
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
            <p>Вы действительно хотите удалить point?</p>
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
              <th className="">NAME</th>
              <th className="">TYPE</th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
          </table>
        </div>
        </div>
    )
  }
}

export default PointTable;

/*  <td className="" onClick={() => this.goToState('/competition/' + contentRow.competitionId + '/day/'+contentRow.id)}>{contentRow.sequenceNumber}</td>
  <td className="" onClick={() => this.goToState('/competition/' + contentRow.competitionId + '/day/'+contentRow.id)}>{contentRow.name}</td>*/

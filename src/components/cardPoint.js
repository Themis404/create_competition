import React from 'react';
import BaseComponent from '../containers/baseComponent';
import { Redirect } from 'react-router-dom';
import * as actions from '../actions/points';

class CardPoint extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      content: [],
      idDay: this.props.idDay,
      competitionId: this.props.id,
      idPoint: this.props.idPoint
    };
  }

  componentDidMount() {
    this.getCompetitionInfo();
  }

  getCompetitionInfo = () => {
    actions.getPointCard({
      pointId: this.state.idPoint
    }).then((content) => {
          this.setState({
            content: content
          });
        });
        console.log(this.state);
  }

  deletePoint = (e) => {
    console.log(this.state);
    e.preventDefault();
    actions.daletePointCard({
      pointId: this.state.idPoint,
    }).then(res => {
      this.goToState(`/competition/${this.state.competitionId}/day/${this.state.idDay}`);
    });
  }

  render() {
    if (this.reload) {
        this.reload = false;
        return <Redirect to={this.redirect} push={true} />;
    }
    return (
      <form className='col-md-12 nonePadding'>
        <button onClick={() => this.goToState('/competition/'+this.state.competitionId+'/day/'+this.state.idDay)} className='btn btn-warning row-md-1 col-md-3'>Back</button>
        <button onClick={e => this.deletePoint(e)} className='btn btn-danger col-md-3 noneFloat col-md-offset-6 '>Delete</button>
        <div>
          <h2 className="text-center col-md-12 marginTopStandart">Card point</h2>
          <h5><p className='col-md-12 nonePadding'>Name</p></h5>
          <input className="form-control" value={this.state.content.name}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Type</p></h5>
          <input className="form-control" value={this.state.content.placePointType}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Number point</p></h5>
          <input type='number' className="form-control" value={this.state.content.sequenceNumber}></input>
        </div>
      </form>
    );
  }
}

export default CardPoint;

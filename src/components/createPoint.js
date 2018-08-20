import React from 'react';
import {Redirect} from 'react-router-dom';
import BaseComponent from '../containers/baseComponent'
import ReactDOM from 'react-dom';
import * as actions from '../actions/points';
class CreatePoint extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sequenceNumber: '',
      placePointType: '',
      competitionDayId: '',
      placePointType: null,
      typeAT: [
        {
          name: 'Select by',
          value: ''
        },
        {
          name: 'Start',
          value:'START'
        },
        {
          name: 'Checkpoint',
          value: 'CHECKPOINT'
        },
        {
          name: 'Gas',
          value: 'GAS'
        },
        {
          name: 'Finish',
          value: 'FINISH'
        }
      ]
    };
  }

  componentDidMount(){
    this.setState({
      competitionDayId: this.props.idDay
    })
  };

  componentWillReceiveProps(newProps){
    this.setState({
      competitionDayId: newProps.idDay
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    actions.createPoint({
      name: this.state.name,
      sequenceNumber: this.state.sequenceNumber,
      placePointType: this.state.placePointType,
      competitionDayId: this.props.idDay
    }).then(res => this.goToState(`/competition/${this.props.id}/day/${this.props.idDay}`));};

  updateName(e) {
    this.setState( {name: e.target.value} );
  }

  updateSequenceNumber(e) {
    this.setState( {sequenceNumber: e.target.value} )
  }

  updatePlacePointType(e) {
    this.setState( {placePointType: e.target.value} )
  }

  updateCompetitionDayId(e) {
    this.setState( {competitionDayId: this.props.idDay} )
  }

  render() {
    if (this.reload) {
      this.reload = false;
      return <Redirect to={this.redirect} push={true}/>;
    }
    return (
        <div className="col-md-12">
        <button onClick={() => this.goToState('/competition/' + this.props.id + '/day/' + this.props.idDay)} className='btn btn-warning col-md-2 noneFloat'>Back</button>
          <form onSubmit={this.handleSubmit} className=''>
            <h2 className="text-center col-md-12 marginTopStandart">Create point</h2>
            <h5><p className='col-md-12 nonePadding marginTopStandart'>Name</p></h5>
            <input required name='name' className="form-control" placeholder = "NAME POINT"
                    value={this.state.name}
                    onChange={ e => this.updateName(e)}></input>
            <h5><p className='col-md-12 nonePadding marginTopStandart'>Sequence Number</p></h5>
            <input required name='number' type='number' className="form-control" placeholder = "id"
                    value={this.state.sequenceNumber}
                    onChange={ e => this.updateSequenceNumber(e)}></input>
            <h5><p className='col-md-12 nonePadding marginTopStandart'>Place Point Type</p></h5>
            <select required className='btn btn-default heightButton noneFloat col-md-12' onChange={event => this.setState({placePointType: event && event.target && event.target.value ? event.target.value : null})} value={this.state.placePointType ? this.state.placePointType : ''}>
              {
                this.state.typeAT.map((typeAT, key) =>
                  <option key={key} value={typeAT.value}>{typeAT.name}</option>
                )
              }
            </select>
            <button type="submit" name='submit' className="btn btn-success col-md-3 col-md-offset-4 marginTopStandart marginBotStandart" >Create</button>
          </form>
        </div>
    )
  }
}

export default CreatePoint;

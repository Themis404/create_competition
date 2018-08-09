import React from 'react';
import {Redirect} from 'react-router-dom';
import BaseComponent from '../containers/baseComponent'
import ReactDOM from 'react-dom';
import PageCardCompetition from './pageCardCompetition'

class PageCreatePoint extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sequenceNumber: '',
      placePointType: '',
      competitionDayId: ''
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
    console.log(this.state);
    fetch('https://afternoon-woodland-86438.herokuapp.com/days/create', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Headers': 'origin, content-type, accept',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        sequenceNumber: this.state.sequenceNumber,
        placePointType: this.state.placePointType,
        competitionDayId: this.state.competitionDayId
      })
    }).then(res => {
      console.log(res);
      this.setState({name: '', sequenceNumber: '', placePointType: '', competitionDayId: ''});
      console.log(this.state);
      this.checkFieldsEmpty();
      res.ok ? console.log('success') : console.warn('something gone wrong');
    });
    e.preventDefault();
  };

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
    this.setState( {competitionDayId:this.props.idDay} )
  }

  render() {
    if (this.reload) {
      this.reload = false;
      return <Redirect to={this.redirect} push={true}/>;
    }
    return (
        <div className="col-md-12">
        <button onClick={() => this.goToState('/competition/' + this.props.id)} className='btn btn-warning col-md-2 noneFloat'>Back</button>
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
            <input required name='timeStart' className="form-control" placeholder = "какие-то типы поинтов"
                    value={this.state.placePointType}
                    onChange={ e => this.updatePlacePointType(e)}></input>
            <button type="submit" name='submit' className="btn btn-success col-md-3 col-md-offset-4 marginTopStandart marginBotStandart" >Create</button>
          </form>
        </div>
    )
  }
}

export default PageCreatePoint;
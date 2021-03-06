import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from '../containers/baseComponent';
import { Redirect } from 'react-router-dom';
import PointTable from '../components/pointTable';
import CardDay from '../components/cardDay';

class PageCardDay extends BaseComponent {
  constructor(params) {
    super(params),
    this.props.match.params.id,
    this.props.match.params.idDay,
    this.props.match.params.idPoint;
  }

  render() {
    if (this.reload) {
        this.reload = false;
        return <Redirect to={this.redirect} push={true} />;
    }
    return (
      <div className='container col-md-4 col-md-offset-4'>
        <CardDay id={this.props.match.params.id} idDay={this.props.match.params.idDay}/>
        <PointTable  id={this.props.match.params.id} idDay={this.props.match.params.idDay} idPoint={this.props.match.params.idPoint}/>
      </div>
    );
  }
}

export default PageCardDay;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from '../containers/baseComponent'
import { Redirect } from 'react-router-dom';
import PointTable from '../components/pointTable';
import TableApplications from '../components/tableApplications'

class PageTableTaApplications extends BaseComponent {
    constructor(params) {
        super(params),
        this.props.match.params.id
    }

    render() {
      if (this.reload) {
          this.reload = false;
          return <Redirect to={this.redirect} push={true} />;
      }
      return (
        <div className='container col-md-12'>
          <TableApplications  id={this.props.match.params.id}/>
        </div>
      );
    }
}

export default PageTableTaApplications;

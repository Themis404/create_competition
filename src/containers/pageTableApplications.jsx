import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import BaseComponent from './baseComponent'
import SearchBar from '../components/SearchBar.js';
import * as actions from '../actions/index';

class PageTableTaApplications extends BaseComponent {
    constructor(props) {
        super(props),
        this.state = {
          content: [],
          sortValue: null,
          pageNo: 0,
          pageSize: 4,
          totalPages: 0,
          sorts: [
            {
              name: 'none select',
              value: null
            },
            {
              name: 'name',
              value: 'name,asc'
            },
            {
              name: 'date create application',
              value: 'dateCreateApplication,asc' /*дата подачи заявления*/
            },
            {
              name: 'vehcile type',
              value: 'vehcileType,asc' /*тип тс*/
            },
            {
              name: 'recing mastery',
              value: 'recingMastery,asc' /*уровень подготовки*/
            },
            {
              name: 'status application',
              value: 'recingMastery,asc' /*статус заявки*/
            }
          ]
        };
      }

      componentDidMount() {
        this.getCompetitionInfo();
      }


      goToPrev() {
          if (!this.state.pageNo) {
            return;
          }
          this.setState({
            pageNo: this.state.pageNo - 1
          }, () => this.getCompetitionInfo());
      }

      goToNext() {
          if (this.state.pageNo === this.state.totalPages - 1) {
            return;
          }
          this.setState({
            pageNo: this.state.pageNo + 1
          }, () => this.getCompetitionInfo());
      }

      getCompetitionInfo = () => {
        actions.list({
          page: this.state.pageNo,
          size: this.state.pageSize,
          sort: this.state.sortValue ? this.state.sortValue : null,
          searchByName: this.state.searchByName ? this.state.searchByName: null
        }).then((content) => {
              this.setState({
                content: content,
                totalPages: content.totalPages
              });
            });
      }

      render() {
        if (this.reload) {
            this.reload = false;
            return <Redirect to={this.redirect} push={true} />;
        }
        return (
          <div className='container'>
            <div className="center-block">
              <SearchBar onSearch={ e => this.setState({searchByName: e}, () => this.getCompetitionInfo())}/>
              <div className='row container col-md-12'>

                <div className='row col-md-12'>
                  <select className='btn btn-info heightButton col-md-2 noneMarginBot' onChange={event => this.setState({sortValue: event && event.target && event.target.value ? event.target.value : null}, () => this.getCompetitionInfo())} value={this.state.sortValue ? this.state.sortValue : ''}>
                    <option disabled>select by</option>
                    {
                      this.state.sorts.map((sort, key) =>
                        <option key={key} value={sort.value}>{sort.name}</option>
                      )
                    }
                  </select>

                  <h3><p className="text-center col-md-4 col-md-offset-2">APPLICATIONS TABLE</p></h3>
                </div>

                <table className="table table-bordered table-striped table-hover">
                  <thead>
                    <tr className="info active">
                      <th className="">NAME</th>
                      <th className="">DATECREATE APPLICATION</th>
                      <th className="">TYPE VEHCILE</th>
                      <th className="">RECING MASTERY</th>
                      <th className="">STATUS</th>
                      {/* <th className="th">Description</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {
                      !!this.state.content.content && this.state.content.content.map((contentRow, key) =>
                          <tr key={key} className="tr">
                            <td className="" onClick={() =>  this.goToState('/competition/'+contentRow.id+'/application/applicationId')}>
                              {contentRow.name} {contentRow.surname} {contentRow.fatherName}</td>
                            <td className="">{contentRow.dateCreateApplication}</td>
                            <td className="">{contentRow.vehicleType}</td>
                            <td className="">{contentRow.recingMastery}</td>
                            <td className="">{contentRow.statusApplication}</td>
                            {/* <td className="td">{contentRow.description}</td> */}
                          </tr>
                      )
                    }
                  </tbody>
                </table>
              </div>

              <div className='row-md-1 heightButton'>
                <div className='col-md-offset-5'>
                  {
                    !!this.state.pageNo &&
                    <button className='btn heightButton col-md-1 colMargin' onClick={() => this.goToPrev()}>left</button>
                  }
                  {
                    !this.state.pageNo &&
                    <button disabled className='btn heightButton col-md-1 colMargin' onClick={() => this.goToPrev()}>left</button>
                  }
                    <h4><p className='col-md-1 colMargin heightButton text-center'>{this.state.pageNo+1}/{this.state.totalPages}</p></h4>
                  {
                    this.state.pageNo < this.state.totalPages - 1 &&
                    <button className='btn heightButton col-md-1 colMargin' onClick={() => this.goToNext()}>right</button>
                  }
                  {
                    this.state.pageNo >= this.state.totalPages - 1 &&
                    <button disabled className='btn heightButton col-md-1 colMargin' onClick={() => this.goToNext()}>right</button>
                  }
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default PageTableTaApplications;

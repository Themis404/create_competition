import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import BaseComponent from '../containers/baseComponent'
import SearchBar from '../components/SearchBar.js';
import * as actions from '../actions/applications';

class TableApplications extends BaseComponent {
    constructor(props) {
        super(props),
        this.state = {
          content: [],
          сompetitionId: '',
          sortValue: '',
          statusValue: 'not_processed',
          pageNo: 0,
          pageSize: 8,
          totalPages: 0,
          status: [
            {
              name: 'not processed',
              value: 'not_processed'
            },
            {
              name: 'denied',
              value: 'denied'
            },
            {
              name: 'accepted',
              value: 'accepted'
            }
          ]
        };
      }

      componentDidMount() {
        this.getApplicationsInfo();
      }


      goToPrev() {
          if (!this.state.pageNo) {
            return;
          }
          this.setState({
            pageNo: this.state.pageNo - 1
          }, () => this.getApplicationsInfo());
      }

      goToNext() {
          if (this.state.pageNo === this.state.totalPages - 1) {
            return;
          }
          this.setState({
            pageNo: this.state.pageNo + 1
          }, () => this.getApplicationsInfo());
      }

      getApplicationsInfo = () => {
        actions.getApplicationsTable({
          page: this.state.pageNo,
          size: this.state.pageSize,
          competitionId: this.props.id,
          sort: this.state.sortValue ? this.state.sortValue : null,
          status: this.state.statusValue ? this.state.statusValue: null,
          search: this.state.searchByName ? this.state.searchByName: null,
        }).then((content) => {
              this.setState({
                content: content,
                totalPages: content.totalPages
              });
            });
      }

      sortSurnameApplication = () => {
        this.setState({
          sortValue: this.state.sortValue === 'surname,asc' ? 'surname,desc' : 'surname,asc'
        }, () => this.getApplicationsInfo());
      }

      sortAgeApplication = () => {
          this.setState({
            sortValue: this.state.sortValue === 'age,asc' ? 'age,desc' : 'age,asc'
          }, () => this.getApplicationsInfo());
        }

      sortTypeVehcileApplication = () => {
          this.setState({
            sortValue: this.state.sortValue === 'vehicleType,asc' ? 'vehicleType,desc' : 'vehicleType,asc'
          }, () => this.getApplicationsInfo());
        }

      sortRecingMasteryApplication = () => {
          this.setState({
            sortValue: this.state.sortValue === 'racingMastery,asc' ? 'racingMastery,desc' : 'racingMastery,asc'
          }, () => this.getApplicationsInfo());
        }

      sortGenderApplication = () => {
          this.setState({
            sortValue: this.state.sortValue === 'gender,asc' ? 'gender,desc' : 'gender,asc'
          }, () => this.getApplicationsInfo());
        }

      render() {
        if (this.reload) {
            this.reload = false;
            return <Redirect to={this.redirect} push={true} />;
        }
        return (
          <div className='container'>
            <div className="center-block">
              <SearchBar onSearch={ e => this.setState({searchByName: e}, () => this.getApplicationsInfo())}/>
              <div className='row container col-md-12'>

                <div className='row col-md-12'>
                  <div className='btn-group marginBotStandart col-md-12 nonePadding'>
                    <select className='btn btn-info heightButton col-md-2 noneMarginBot' onChange={event => this.setState({statusValue: event && event.target && event.target.value ? event.target.value : null}, () => this.getApplicationsInfo())} value={this.state.statusValue ? this.state.statusValue : ''}>
                      <option disabled>select by</option>
                      {
                        this.state.status.map((status, key) =>
                          <option key={key} value={status.value}>{status.name}</option>
                        )
                      }
                    </select>
                  </div>
                  <h3><p className="text-center col-md-4 col-md-offset-4">APPLICATIONS TABLE</p></h3>
                </div>

                <table className="table table-condensed table-striped table-hover">
                  <thead>
                    <tr className="info active">
                      <th className="" onClick={() => this.sortSurnameApplication()}>NAME <span class="fa fa-sort float-right"></span></th>
                      <th className="" onClick={() => this.sortAgeApplication()}>AGE <span class="fa fa-sort float-right"></span></th>
                      <th className="" onClick={() => this.sortGenderApplication()}>GENDER <span class="fa fa-sort float-right"></span></th>
                      <th className="" onClick={() => this.sortTypeVehcileApplication()}>TYPE VEHCILE <span class="fa fa-sort float-right"></span></th>
                      <th className="" onClick={() => this.sortRecingMasteryApplication()}>RECING MASTERY <span class="fa fa-sort float-right"></span></th>
                      <th className="" >STATUS</th>
                      {/* <th className="th">Description</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {
                      !!this.state.content.content && this.state.content.content.map((contentRow, key) =>
                          <tr key={key} className="tr">
                              <td className="" onClick={() =>  this.goToState('/competition/'+this.props.id+'/application/'+contentRow.id)}>
                                {contentRow.surname} {contentRow.name} {contentRow.fatherName}
                              </td>
                              <td className="">{contentRow.age}</td>
                              <td className="">{contentRow.gender}</td>
                              <td className="">{contentRow.vehicleType}</td>
                              <td className="">{contentRow.racingMastery}</td>
                              <td className="">{contentRow.applicationStatus}</td>
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
                    <button className='btn heightButton col-md-1 colMargin nonePadding' onClick={() => this.goToPrev()}><span className="fas fa-angle-left"></span></button>
                  }
                  {
                    !this.state.pageNo &&
                    <button disabled className='btn heightButton col-md-1 colMargin' onClick={() => this.goToPrev()}><span className="fas fa-angle-left"></span></button>
                  }

                    <h4><p className='col-md-1 colMargin heightButton text-center'>{this.state.pageNo+1}/{this.state.totalPages}</p></h4>
                  {
                    this.state.pageNo < this.state.totalPages - 1 &&
                    <button className='btn heightButton col-md-1 colMargin' onClick={() => this.goToNext()}><span class="fas fa-angle-right"></span></button>
                  }
                  {
                    this.state.pageNo >= this.state.totalPages - 1 &&
                    <button disabled className='btn heightButton col-md-1 colMargin' onClick={() => this.goToNext()}><span class="fas fa-angle-right"></span></button>
                  }
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default TableApplications;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import BaseComponent from './baseComponent'
import SearchBar from '../components/SearchBar.js';
import * as actions from '../actions/index';

class MainPage extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
          content: [],
          sortValue: null,
          pageNo: 0,
          pageSize: 10,
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
              name: 'dateStart',
              value: 'dateStart,asc'
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
              <div className='btn-group marginBotStandart'>
                <button onClick={() => this.goToState('/create-competition')} className='btn btn-info heightButton'>Create competition</button>
                <select className='btn btn-info heightButton' onChange={event => this.setState({sortValue: event && event.target && event.target.value ? event.target.value : null}, () => this.getCompetitionInfo())} value={this.state.sortValue ? this.state.sortValue : ''}>
                  <option disabled>select by</option>
                  {
                    this.state.sorts.map((sort, key) =>
                      <option key={key} value={sort.value}>{sort.name}</option>
                    )
                  }
                </select>
                {
                  !!this.state.pageNo &&
                  <button className='btn btn-info' onClick={() => this.goToPrev()}>left</button>
                }
                {
                  this.state.pageNo < this.state.totalPages - 1 &&
                  <button className='btn btn-info' onClick={() => this.goToNext()}>right</button>
                }
              </div>
              <div className='row container col-md-center'>
                <table className="table table-bordered table-striped">
                  <tbody>
                  <tr className="info active">
                    <th className="">NAME COMPETITION</th>
                    <th className="">DATE START COMPETITION</th>
                    <th className="">DATE END COMPETITION</th>
                    {/* <th className="th">Description</th> */}
                  </tr>
                  {
                    !!this.state.content.content && this.state.content.content.map((contentRow, key) =>
                        <tr key={key} className="tr">
                          <td className="" onClick={() =>  this.goToState('/competition/'+contentRow.id)}>{contentRow.name}</td>
                          <td className="">{contentRow.dateStart}</td>
                          <td className="">{contentRow.dateFinish}</td>
                          {/* <td className="td">{contentRow.description}</td> */}
                        </tr>
                    )
                  }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
    }
}

export default MainPage;
